import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a flipbook to a specific Heyzine bookshelf. */
    "heyzine.add_flipbook_to_bookshelf": {
      input: {
        /**
         * The Heyzine bookshelf identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The Heyzine flipbook identifier.
         * @minLength 1
         */
        flipbook_id: string;
        /**
         * The optional 0-based position inside the bookshelf.
         * @minimum 0
         */
        position?: number;
      };
      output: {
        /** Whether the Heyzine operation succeeded. */
        success: boolean;
        /** The HTTP-like status code returned by Heyzine. */
        code?: number;
        /** The status message returned by Heyzine. */
        msg?: string;
      };
    };
    /** Delete a specific Heyzine flipbook. */
    "heyzine.delete_flipbook": {
      input: {
        /**
         * The Heyzine flipbook identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the Heyzine operation succeeded. */
        success: boolean;
        /** The HTTP-like status code returned by Heyzine. */
        code?: number;
        /** The status message returned by Heyzine. */
        msg?: string;
      };
    };
    /** Get the details and oEmbed metadata for a specific Heyzine flipbook. */
    "heyzine.get_flipbook": {
      input: {
        /**
         * The Heyzine flipbook identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Heyzine flipbook returned by the detail API. */
        flipbook: {
          /** The Heyzine flipbook identifier. */
          id: string;
          /** The publication date string returned by Heyzine. */
          date: string;
          /** The flipbook title. */
          title: string | null;
          /** The flipbook subtitle. */
          subtitle: string | null;
          /** The flipbook description. */
          description: string | null;
          /** The number of pages in the flipbook. */
          pages: number;
          /** The PDF size in bytes when returned by Heyzine. */
          size?: number;
          /** The private note associated with the flipbook when returned by Heyzine. */
          private?: string | null;
          /** The 0-based bookshelf position returned by Heyzine. */
          position?: number;
          /** The tags returned by Heyzine for the flipbook. */
          tags?: Array<string>;
          /** The public URLs for the flipbook. */
          links: {
            /** The custom domain URL for the flipbook when configured. */
            custom: string | null;
            /** The base Heyzine URL for the flipbook. */
            base: string;
            /** The cover thumbnail URL for the flipbook. */
            thumbnail: string;
            /** The downloadable PDF URL for the flipbook. */
            pdf: string;
          };
          /** The optional oEmbed payload returned with the flipbook details. */
          oembed?: {
            /** The oEmbed content type. */
            type: string;
            /** The oEmbed version string. */
            version: string;
            /** The title returned by the oEmbed payload. */
            title?: string | null;
            /** The oEmbed provider name. */
            provider_name?: string;
            /** The oEmbed provider URL. */
            provider_url?: string;
            /** The embed HTML snippet returned by Heyzine. */
            html?: string;
            /** The embed width returned by Heyzine. */
            width?: number;
            /** The embed height returned by Heyzine. */
            height?: number;
            /** The oEmbed thumbnail URL. */
            thumbnail_url?: string;
            /** The oEmbed thumbnail width. */
            thumbnail_width?: number;
            /** The oEmbed thumbnail height. */
            thumbnail_height?: number;
            [key: string]: unknown;
          };
        };
      };
    };
    /** List the flipbooks assigned to a specific Heyzine bookshelf. */
    "heyzine.list_bookshelf_flipbooks": {
      input: {
        /**
         * The Heyzine bookshelf identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The flipbooks returned for the selected bookshelf. */
        flipbooks: Array<{
          /** The Heyzine flipbook identifier. */
          id: string;
          /** The publication date string returned by Heyzine. */
          date: string;
          /** The flipbook title. */
          title: string | null;
          /** The flipbook subtitle. */
          subtitle: string | null;
          /** The flipbook description. */
          description: string | null;
          /** The number of pages in the flipbook. */
          pages: number;
          /** The PDF size in bytes when returned by Heyzine. */
          size?: number;
          /** The private note associated with the flipbook when returned by Heyzine. */
          private?: string | null;
          /** The 0-based bookshelf position returned by Heyzine. */
          position?: number;
          /** The tags returned by Heyzine for the flipbook. */
          tags?: Array<string>;
          /** The public URLs for the flipbook. */
          links: {
            /** The custom domain URL for the flipbook when configured. */
            custom: string | null;
            /** The base Heyzine URL for the flipbook. */
            base: string;
            /** The cover thumbnail URL for the flipbook. */
            thumbnail: string;
            /** The downloadable PDF URL for the flipbook. */
            pdf: string;
          };
          /** The optional oEmbed payload returned with the flipbook details. */
          oembed?: {
            /** The oEmbed content type. */
            type: string;
            /** The oEmbed version string. */
            version: string;
            /** The title returned by the oEmbed payload. */
            title?: string | null;
            /** The oEmbed provider name. */
            provider_name?: string;
            /** The oEmbed provider URL. */
            provider_url?: string;
            /** The embed HTML snippet returned by Heyzine. */
            html?: string;
            /** The embed width returned by Heyzine. */
            width?: number;
            /** The embed height returned by Heyzine. */
            height?: number;
            /** The oEmbed thumbnail URL. */
            thumbnail_url?: string;
            /** The oEmbed thumbnail width. */
            thumbnail_width?: number;
            /** The oEmbed thumbnail height. */
            thumbnail_height?: number;
            [key: string]: unknown;
          };
        }>;
      };
    };
    /** List the bookshelves accessible with the current Heyzine API key. */
    "heyzine.list_bookshelves": {
      input: Record<string, never>;
      output: {
        /** The bookshelves returned by Heyzine. */
        bookshelves: Array<{
          /** The Heyzine bookshelf identifier. */
          id: string;
          /** The bookshelf title. */
          title: string | null;
          /** The bookshelf description. */
          description: string | null;
          /** The bookshelf thumbnail URL. */
          thumbnail: string | null;
          /** The number of flipbooks currently assigned to the bookshelf. */
          flipbook_count: number;
        }>;
      };
    };
    /** List the flipbooks accessible with the current Heyzine API key. */
    "heyzine.list_flipbooks": {
      input: Record<string, never>;
      output: {
        /** The flipbooks returned by Heyzine. */
        flipbooks: Array<{
          /** The Heyzine flipbook identifier. */
          id: string;
          /** The publication date string returned by Heyzine. */
          date: string;
          /** The flipbook title. */
          title: string | null;
          /** The flipbook subtitle. */
          subtitle: string | null;
          /** The flipbook description. */
          description: string | null;
          /** The number of pages in the flipbook. */
          pages: number;
          /** The PDF size in bytes when returned by Heyzine. */
          size?: number;
          /** The private note associated with the flipbook when returned by Heyzine. */
          private?: string | null;
          /** The 0-based bookshelf position returned by Heyzine. */
          position?: number;
          /** The tags returned by Heyzine for the flipbook. */
          tags?: Array<string>;
          /** The public URLs for the flipbook. */
          links: {
            /** The custom domain URL for the flipbook when configured. */
            custom: string | null;
            /** The base Heyzine URL for the flipbook. */
            base: string;
            /** The cover thumbnail URL for the flipbook. */
            thumbnail: string;
            /** The downloadable PDF URL for the flipbook. */
            pdf: string;
          };
          /** The optional oEmbed payload returned with the flipbook details. */
          oembed?: {
            /** The oEmbed content type. */
            type: string;
            /** The oEmbed version string. */
            version: string;
            /** The title returned by the oEmbed payload. */
            title?: string | null;
            /** The oEmbed provider name. */
            provider_name?: string;
            /** The oEmbed provider URL. */
            provider_url?: string;
            /** The embed HTML snippet returned by Heyzine. */
            html?: string;
            /** The embed width returned by Heyzine. */
            width?: number;
            /** The embed height returned by Heyzine. */
            height?: number;
            /** The oEmbed thumbnail URL. */
            thumbnail_url?: string;
            /** The oEmbed thumbnail width. */
            thumbnail_width?: number;
            /** The oEmbed thumbnail height. */
            thumbnail_height?: number;
            [key: string]: unknown;
          };
        }>;
      };
    };
    /** Remove a flipbook from a specific Heyzine bookshelf. */
    "heyzine.remove_flipbook_from_bookshelf": {
      input: {
        /**
         * The Heyzine bookshelf identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The Heyzine flipbook identifier.
         * @minLength 1
         */
        flipbook_id: string;
      };
      output: {
        /** Whether the Heyzine operation succeeded. */
        success: boolean;
        /** The HTTP-like status code returned by Heyzine. */
        code?: number;
        /** The status message returned by Heyzine. */
        msg?: string;
      };
    };
    /** Set the social sharing metadata for a specific Heyzine bookshelf. */
    "heyzine.set_bookshelf_social_data": {
      input: {
        /**
         * The Heyzine flipbook or bookshelf identifier.
         * @minLength 1
         */
        id: string;
        /** The optional social sharing title. */
        title?: string;
        /** The optional social sharing description. */
        description?: string;
        /** The URL for the social sharing thumbnail image. */
        thumbnail?: string;
      };
      output: {
        /** Whether the Heyzine operation succeeded. */
        success: boolean;
        /** The HTTP-like status code returned by Heyzine. */
        code?: number;
        /** The status message returned by Heyzine. */
        msg?: string;
      };
    };
    /** Set the social sharing metadata for a specific Heyzine flipbook. */
    "heyzine.set_flipbook_social_data": {
      input: {
        /**
         * The Heyzine flipbook or bookshelf identifier.
         * @minLength 1
         */
        id: string;
        /** The optional social sharing title. */
        title?: string;
        /** The optional social sharing description. */
        description?: string;
        /** The URL for the social sharing thumbnail image. */
        thumbnail?: string;
      };
      output: {
        /** Whether the Heyzine operation succeeded. */
        success: boolean;
        /** The HTTP-like status code returned by Heyzine. */
        code?: number;
        /** The status message returned by Heyzine. */
        msg?: string;
      };
    };
  }
}
