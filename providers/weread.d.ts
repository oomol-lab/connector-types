import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get book details by ID. */
    "weread.get_book": {
      input: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId: string;
      };
      output: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId?: string;
        /** Book title. */
        title?: string;
        /** Book author. */
        author?: string;
        /** Use this upstream reader URL to open the book; do not construct a URL. */
        readerLink?: string;
        /** Book details link; use when readerLink is absent. */
        deepLink?: string;
        [key: string]: unknown;
      };
    };
    /** Get reading progress. Progress 1 means 1%; completion requires progress 100 and finishTime. */
    "weread.get_reading_progress": {
      input: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId: string;
      };
      output: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId?: string;
        /** Reading progress and timestamps. */
        book?: {
          /** Reading percentage from 0 to 100, not a fraction. */
          progress?: number;
          /** Accumulated reading time in seconds. */
          recordReadingTime?: number;
          /** Completion Unix timestamp, present only after finishing. */
          finishTime?: number;
          /** The chapter UID returned by list_chapters. */
          chapterUid?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get reading statistics for one period. Durations are seconds; annual mode covers only the selected calendar year. */
    "weread.get_reading_stats": {
      input: {
        /** Period: weekly, monthly (default), annually or overall. */
        mode?: "weekly" | "monthly" | "annually" | "overall";
        /** Unix timestamp in the desired period; 0 selects the current period. Overall always uses 0. */
        baseTime?: number;
      };
      output: {
        /** Normalized period start Unix timestamp; 0 for overall. */
        baseTime?: number;
        /** Total reading and listening time in seconds for this period; prefer this over summing buckets. */
        totalReadTime?: number;
        /** Average seconds per calendar day, not per active reading day. */
        dayAverageReadTime?: number;
        /** Effective reading days, currently days with at least one minute of reading. */
        readDays?: number;
        /** Bucket start timestamps mapped to reading seconds. */
        readTimes?: Record<string, number>;
        /** Optional daily timestamp-to-seconds map in annual mode. */
        dailyReadTimes?: Record<string, number>;
        /** Hourly reading seconds ordered from 06:00 through 05:00 the next day. */
        preferTime?: Array<number>;
        /** Preferred authors. */
        preferAuthor?: Array<{
          /** Author name. */
          name?: string;
          /** Formatted duration text, not a number of seconds. */
          readTime?: string;
          [key: string]: unknown;
        }>;
        /** Top books or audio albums by reading time, up to 10 entries. */
        readLongest?: Array<{
          /** Book metadata, including any upstream links and additional fields. */
          book?: {
            /**
             * The book ID returned by search or the shelf.
             * @minLength 1
             */
            bookId?: string;
            /** Book title. */
            title?: string;
            /** Book author. */
            author?: string;
            /** Use this upstream reader URL to open the book; do not construct a URL. */
            readerLink?: string;
            /** Book details link; use when readerLink is absent. */
            deepLink?: string;
            [key: string]: unknown;
          };
          /** Audio album metadata when this is audio content. */
          albumInfo?: Record<string, unknown>;
          /** Reading or listening time in seconds for this period. */
          readTime?: number;
          [key: string]: unknown;
        }>;
        /** Upstream reading summary labels and formatted counts. */
        readStat?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get a single thought or review with optional comments and likes. */
    "weread.get_review": {
      input: {
        /**
         * Thought or review ID.
         * @minLength 1
         */
        reviewId: string;
        /**
         * Number of comments to fetch; default 10.
         * @minimum 0
         */
        commentsCount?: number;
        /** Comment order: 0 descending, 1 ascending. */
        commentsDirection?: 0 | 1;
        /**
         * Number of likes to fetch; default 10.
         * @minimum 0
         */
        likesCount?: number;
        /** Like order; only 0 (descending) is documented. */
        likesDirection?: 0;
        /** The sync or pagination key returned by the previous response; initially 0. */
        synckey?: number;
      };
      output: {
        /** Thought or review ID. */
        reviewId?: string;
        /** Review details, including conditional abstract, range, content and author fields. */
        review?: {
          /** Review text. */
          content?: string;
          /** Highlighted source text, when this review refers to a passage. */
          abstract?: string;
          /** Position range of the source passage, when available. */
          range?: string;
          [key: string]: unknown;
        };
        /** Upstream rich-text HTML. */
        htmlContent?: string;
        /** The sync or pagination key returned by the previous response; initially 0. */
        synckey?: number;
        [key: string]: unknown;
      };
    };
    /** Read the shelf. Visible entries equal books.length + albums.length + 1 when mp is nonempty; bookCount excludes audio and mp. */
    "weread.get_shelf": {
      input: Record<string, never>;
      output: {
        /** Ebooks and imported books, excluding audio albums and the mp entry. */
        books?: Array<{
          /**
           * The book ID returned by search or the shelf.
           * @minLength 1
           */
          bookId?: string;
          /** Book title. */
          title?: string;
          /** Book author. */
          author?: string;
          /** Use this upstream reader URL to open the book; do not construct a URL. */
          readerLink?: string;
          /** Book details link; use when readerLink is absent. */
          deepLink?: string;
          [key: string]: unknown;
        }>;
        /** Audiobook albums, which also count as shelf entries. */
        albums?: Array<Record<string, unknown>>;
        /** Article collection entry; a nonempty object counts as one private shelf entry. */
        mp?: Record<string, unknown>;
        /** Book list folders. */
        archive?: Array<Record<string, unknown>>;
        /** Ebook count only; not the total shelf count. */
        bookCount?: number;
        [key: string]: unknown;
      };
    };
    /** Get chapter highlight popularity statistics without source text. */
    "weread.get_underline_stats": {
      input: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId: string;
        /** The chapter UID returned by list_chapters. */
        chapterUid: number;
        /** The sync or pagination key returned by the previous response; initially 0. */
        synckey?: number;
      };
      output: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId?: string;
        /** The chapter UID returned by list_chapters. */
        chapterUid?: number;
        /** The sync or pagination key returned by the previous response; initially 0. */
        synckey?: number;
        /** Highlight counts and scores, without text. */
        underlines?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List public book reviews. Continue with the last idx and returned synckey. Content is nested at reviews[].review.review. */
    "weread.list_book_reviews": {
      input: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId: string;
        /** Filter: 0 all, 1 recommended, 2 negative, 3 newest, 4 average. */
        reviewListType?: 0 | 1 | 2 | 3 | 4;
        /**
         * Page size; omit to use the upstream default.
         * @minimum 1
         */
        count?: number;
        /**
         * Pagination offset from the previous page; initially 0.
         * @minimum 0
         */
        maxIdx?: number;
        /** The sync or pagination key returned by the previous response; initially 0. */
        synckey?: number;
      };
      output: {
        /** The sync or pagination key returned by the previous response; initially 0. */
        synckey?: number;
        /** Total public review count. */
        reviewsCnt?: number;
        /** Whether another page exists: 1 means yes, 0 means no. */
        reviewsHasMore?: number;
        /** Public review entries with two review wrappers. */
        reviews?: Array<{
          /**
           * Pagination offset from the previous page; initially 0.
           * @minimum 0
           */
          idx?: number;
          /** Public review wrapper. */
          review?: {
            /** Review ID. */
            reviewId?: string;
            /** Public review body. */
            review?: {
              /** Review text. */
              content?: string;
              /** Rating: 20, 40, 60, 80 and 100 correspond to one through five stars. */
              star?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List a book's chapter table of contents. */
    "weread.list_chapters": {
      input: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId: string;
      };
      output: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId?: string;
        /** The sync or pagination key returned by the previous response; initially 0. */
        synckey?: number;
        /** Chapters in the book. */
        chapters?: Array<{
          /** The chapter UID returned by list_chapters. */
          chapterUid?: number;
          /** Chapter title. */
          title?: string;
          /** Chapter order. */
          chapterIdx?: number;
          /** Heading level, starting at 1. */
          level?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List thoughts on specified highlight ranges, preserving per-range pagination. */
    "weread.list_highlight_reviews": {
      input: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId: string;
        /** The chapter UID returned by list_chapters. */
        chapterUid: number;
        /** Highlight ranges and their independent page cursors. */
        reviews: Array<{
          /**
           * Position range returned by list_popular_highlights.
           * @minLength 1
           */
          range: string;
          /**
           * Pagination offset from the previous page; initially 0.
           * @minimum 0
           */
          maxIdx?: number;
          /**
           * Page size; values above 20 are truncated by the upstream service.
           * @minimum 1
           */
          count?: number;
          /** The sync or pagination key returned by the previous response; initially 0. */
          synckey?: number;
        }>;
      };
      output: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId?: string;
        /** The chapter UID returned by list_chapters. */
        chapterUid?: number;
        /** Per-range results and cursors. */
        reviews?: Array<{
          /** Highlight position range. */
          range?: string;
          /** Whether another page exists: 1 means yes, 0 means no. */
          hasMore?: number;
          /**
           * Pagination offset from the previous page; initially 0.
           * @minimum 0
           */
          maxIdx?: number;
          /** The sync or pagination key returned by the previous response; initially 0. */
          synckey?: number;
          /** Total thoughts for this range. */
          totalCount?: number;
          /** Thoughts on this page. */
          pageReviews?: Array<{
            /** Review details, including conditional abstract, range, content and author fields. */
            review?: {
              /** Review text. */
              content?: string;
              /** Highlighted source text, when this review refers to a passage. */
              abstract?: string;
              /** Position range of the source passage, when available. */
              range?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List personal highlights in a book, excluding reading-position bookmarks. Query list_my_reviews as well to retrieve all exportable note content. */
    "weread.list_highlights": {
      input: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId: string;
      };
      output: {
        /** Highlights only; upstream filters out type 0 bookmarks. */
        updated?: Array<{
          /** Highlight ID. */
          bookmarkId?: string;
          /** Highlighted source text. */
          markText?: string;
          /** The chapter UID returned by list_chapters. */
          chapterUid?: number;
          /** Creation Unix timestamp in seconds. */
          createTime?: number;
          [key: string]: unknown;
        }>;
        /** Chapter information used to locate highlights. */
        chapters?: Array<Record<string, unknown>>;
        /** Book metadata, including any upstream links and additional fields. */
        book?: {
          /**
           * The book ID returned by search or the shelf.
           * @minLength 1
           */
          bookId?: string;
          /** Book title. */
          title?: string;
          /** Book author. */
          author?: string;
          /** Use this upstream reader URL to open the book; do not construct a URL. */
          readerLink?: string;
          /** Book details link; use when readerLink is absent. */
          deepLink?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List personal thoughts, chapter comments and book reviews. Continue with the returned synckey while hasMore is 1. */
    "weread.list_my_reviews": {
      input: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookid: string;
        /** The sync or pagination key returned by the previous response; initially 0. */
        synckey?: number;
        /**
         * Page size; omit to use the upstream default.
         * @minimum 1
         */
        count?: number;
      };
      output: {
        /** Personal review entries. */
        reviews?: Array<{
          /** Review details, including conditional abstract, range, content and author fields. */
          review?: {
            /** Review text. */
            content?: string;
            /** Highlighted source text, when this review refers to a passage. */
            abstract?: string;
            /** Position range of the source passage, when available. */
            range?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Total personal review count. */
        totalCount?: number;
        /** Whether another page exists: 1 means yes, 0 means no. */
        hasMore?: number;
        /** The sync or pagination key returned by the previous response; initially 0. */
        synckey?: number;
        [key: string]: unknown;
      };
    };
    /** List notebook summaries. Next lastSort is the final book's sort. Total notes include reviewCount + noteCount + bookmarkCount. */
    "weread.list_notebooks": {
      input: {
        /**
         * Page size; omit to use the upstream default.
         * @minimum 1
         */
        count?: number;
        /** The last book's sort value from the previous page; omit on the first page. */
        lastSort?: number;
      };
      output: {
        /** Total number of books with notes. */
        totalBookCount?: number;
        /** Total highlights, personal reviews and bookmarks combined. */
        totalNoteCount?: number;
        /** Whether another page exists: 1 means yes, 0 means no. */
        hasMore?: number;
        /** Books with notes. */
        books?: Array<{
          /**
           * The book ID returned by search or the shelf.
           * @minLength 1
           */
          bookId?: string;
          /** Book metadata, including any upstream links and additional fields. */
          book?: {
            /**
             * The book ID returned by search or the shelf.
             * @minLength 1
             */
            bookId?: string;
            /** Book title. */
            title?: string;
            /** Book author. */
            author?: string;
            /** Use this upstream reader URL to open the book; do not construct a URL. */
            readerLink?: string;
            /** Book details link; use when readerLink is absent. */
            deepLink?: string;
            [key: string]: unknown;
          };
          /** Cursor for the next lastSort request. */
          sort?: number;
          /** Highlight count only, not the total note count. */
          noteCount?: number;
          /** Personal thoughts and reviews combined; do not count reviews twice. */
          reviewCount?: number;
          /** Reading-position bookmark count; bookmark content cannot be exported. */
          bookmarkCount?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get up to 20 popular highlights with source text. The upstream result is fixed-size and does not support pagination. */
    "weread.list_popular_highlights": {
      input: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId: string;
        /** Chapter UID; 0 means all chapters and is the default. */
        chapterUid?: number;
        /** The sync or pagination key returned by the previous response; initially 0. */
        synckey?: number;
      };
      output: {
        /** The sync or pagination key returned by the previous response; initially 0. */
        synckey?: number;
        /** Total popular highlight count, possibly larger than this fixed-size result. */
        totalCount?: number;
        /** Popular highlight entries. */
        items?: Array<{
          /** The chapter UID returned by list_chapters. */
          chapterUid?: number;
          /** Highlight position range for list_highlight_reviews. */
          range?: string;
          /** Highlighted source text. */
          markText?: string;
          /** Number of readers highlighting this passage. */
          totalCount?: number;
          [key: string]: unknown;
        }>;
        /** Chapter information used to locate highlights. */
        chapters?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List personalized book recommendations. Continue with the last book's searchIdx as maxIdx. */
    "weread.list_recommendations": {
      input: {
        /**
         * Page size; omit to use the upstream default.
         * @minimum 1
         */
        count?: number;
        /**
         * Pagination offset from the previous page; initially 0.
         * @minimum 0
         */
        maxIdx?: number;
      };
      output: {
        /** Recommended books. */
        books?: Array<{
          /**
           * The book ID returned by search or the shelf.
           * @minLength 1
           */
          bookId?: string;
          /** Book title. */
          title?: string;
          /** Book author. */
          author?: string;
          /** Use this upstream reader URL to open the book; do not construct a URL. */
          readerLink?: string;
          /** Book details link; use when readerLink is absent. */
          deepLink?: string;
          /**
           * Pagination offset from the previous page; initially 0.
           * @minimum 0
           */
          searchIdx?: number;
          /** Recommendation reason. */
          reason?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List similar books. Defaults to count 12 and maxIdx 0; continue with the last idx and returned sessionId. */
    "weread.list_similar_books": {
      input: {
        /**
         * The book ID returned by search or the shelf.
         * @minLength 1
         */
        bookId: string;
        /**
         * Page size; omit to use the upstream default.
         * @minimum 1
         */
        count?: number;
        /**
         * Pagination offset from the previous page; initially 0.
         * @minimum 0
         */
        maxIdx?: number;
        /** Session ID from the previous page; omit on the first page. */
        sessionId?: string;
      };
      output: {
        /** Similar books and their session. */
        booksimilar?: {
          /** Session ID to send with the next page. */
          sessionId?: string;
          /** Similar book entries. */
          books?: Array<{
            /**
             * Pagination offset from the previous page; initially 0.
             * @minimum 0
             */
            idx?: number;
            /** Book result wrapper. */
            book?: {
              /** Book metadata, including any upstream links and additional fields. */
              bookInfo?: {
                /**
                 * The book ID returned by search or the shelf.
                 * @minLength 1
                 */
                bookId?: string;
                /** Book title. */
                title?: string;
                /** Book author. */
                author?: string;
                /** Use this upstream reader URL to open the book; do not construct a URL. */
                readerLink?: string;
                /** Book details link; use when readerLink is absent. */
                deepLink?: string;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search WeRead. Choose scope explicitly; use the last searchIdx as maxIdx for the next page. Response group scope may differ from request scope. */
    "weread.search": {
      input: {
        /**
         * Search keywords.
         * @minLength 1
         */
        keyword: string;
        /** Search type: 0 all, 10 ebooks, 16 web novels, 14 audio, 6 authors, 12 full text, 13 book lists, 2 public accounts, 4 articles. */
        scope: 0 | 10 | 16 | 14 | 6 | 12 | 13 | 2 | 4;
        /**
         * Pagination offset from the previous page; initially 0.
         * @minimum 0
         */
        maxIdx?: number;
        /**
         * Page size; omit to use the upstream default.
         * @minimum 1
         */
        count?: number;
      };
      output: {
        /** Search session ID. */
        sid?: string;
        /** Whether another page exists: 1 means yes, 0 means no. */
        hasMore?: number;
        /** Result groups; do not filter groups by the requested scope. */
        results?: Array<{
          /** Response group type; ebook groups can use 17. */
          scope?: number;
          /** Results in this group. */
          books?: Array<{
            /**
             * Pagination offset from the previous page; initially 0.
             * @minimum 0
             */
            searchIdx?: number;
            /** Book metadata, including any upstream links and additional fields. */
            bookInfo?: {
              /**
               * The book ID returned by search or the shelf.
               * @minLength 1
               */
              bookId?: string;
              /** Book title. */
              title?: string;
              /** Book author. */
              author?: string;
              /** Use this upstream reader URL to open the book; do not construct a URL. */
              readerLink?: string;
              /** Book details link; use when readerLink is absent. */
              deepLink?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
