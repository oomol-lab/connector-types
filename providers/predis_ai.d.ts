import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit a Predis.ai content generation request and return the created post IDs and immediate generation status. */
    "predis_ai.create_content": {
      input: {
        /**
         * The Predis.ai brand ID to use for the request.
         * @minLength 1
         */
        brandId: string;
        /**
         * The topic for the post. Predis.ai recommends at least 20 characters and at least 3 words.
         * @minLength 20
         */
        text: string;
        /** The Predis.ai post type to filter or generate. */
        postType?: "generic" | "meme" | "quotes";
        /** The Predis.ai model version to use. */
        modelVersion?: "2" | "4";
        /**
         * The number of posts to generate in a single request.
         * @minimum 1
         * @maximum 10
         */
        postsCount?: number;
        /** The language of the input text. */
        inputLanguage?: "malay" | "chinese (traditional)" | "croatian" | "english" | "dutch" | "indonesian" | "vietnamese" | "portuguese_br" | "finnish" | "french" | "german" | "italian" | "norwegian" | "polish" | "romanian" | "czech" | "spanish" | "swedish" | "turkish" | "danish" | "hungarian";
        /** The language to generate the post in. */
        outputLanguage?: "malay" | "chinese (traditional)" | "croatian" | "english" | "dutch" | "indonesian" | "vietnamese" | "portuguese_br" | "finnish" | "french" | "german" | "italian" | "norwegian" | "polish" | "romanian" | "czech" | "spanish" | "swedish" | "turkish" | "danish" | "hungarian";
        /** The Predis.ai media type to filter or generate. */
        mediaType?: "single_image" | "carousel" | "video";
        /** The video duration when generating video content. */
        videoDuration?: "short" | "long";
        /** Specific Predis.ai template IDs to use. */
        templateIds?: Array<string>;
        /**
         * The quote author when generating quote posts.
         * @minLength 1
         */
        author?: string;
        /** Image or video URLs that Predis.ai should use in the generated post. */
        mediaUrls?: Array<string>;
        /** The color palette source Predis.ai should use. */
        colorPaletteType?: "brand" | "ai_suggested";
        /** Brand details to guide Predis.ai generation. */
        brandDetails?: Record<string, unknown>;
        /** Headlines or text overrides for generated creatives. */
        headlines?: Array<unknown>;
      };
      output: {
        /** Predis.ai post IDs submitted for generation. */
        postIds: Array<string>;
        /** The immediate Predis.ai generation status. */
        postStatus: string | null;
        /** Predis.ai errors returned with the response. */
        errors: Array<Record<string, unknown>>;
        /** The raw Predis.ai object for forward-compatible fields. */
        raw: Record<string, unknown>;
      };
    };
    /** List generated Predis.ai posts for a brand with optional media type and pagination filters. */
    "predis_ai.list_posts": {
      input: {
        /**
         * The Predis.ai brand ID to use for the request.
         * @minLength 1
         */
        brandId: string;
        /** The Predis.ai media type to filter or generate. */
        mediaType?: "single_image" | "carousel" | "video";
        /**
         * The one-based page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of items to request per page.
         * @maximum 20
         * @exclusiveMinimum 0
         */
        itemsPerPage?: number;
      };
      output: {
        /** Generated Predis.ai posts. */
        posts: Array<{
          /** The Predis.ai post ID. */
          postId: string | null;
          /** Generated media URLs for the post. */
          urls: Array<string>;
          /** The generated post caption. */
          caption: string | null;
          /** The media type returned for the post. */
          mediaType: string | null;
          /** The raw Predis.ai object for forward-compatible fields. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of pages returned by Predis.ai. */
        totalPages: number | null;
        /** Predis.ai errors returned with the response. */
        errors: Array<Record<string, unknown>>;
        /** The raw Predis.ai object for forward-compatible fields. */
        raw: Record<string, unknown>;
      };
    };
    /** List Predis.ai system templates and the brand's custom templates with optional media, post type, aspect ratio, and pagination filters. */
    "predis_ai.list_templates": {
      input: {
        /**
         * The Predis.ai brand ID to use for the request.
         * @minLength 1
         */
        brandId: string;
        /** The Predis.ai media type to filter or generate. */
        mediaType?: "single_image" | "carousel" | "video";
        /** The Predis.ai post type to filter or generate. */
        postType?: "generic" | "meme" | "quotes";
        /** The template aspect ratio to filter by. */
        aspectRatio?: "square" | "portrait" | "landscape" | "all";
        /**
         * The one-based page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of items to request per page.
         * @maximum 20
         * @exclusiveMinimum 0
         */
        itemsPerPage?: number;
      };
      output: {
        /** Predis.ai templates. */
        templates: Array<{
          /** The Predis.ai template ID. */
          templateId: string | null;
          /** The media type returned for the template. */
          mediaType: string | null;
          /** The raw Predis.ai object for forward-compatible fields. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of pages returned by Predis.ai. */
        totalPages: number | null;
        /** Predis.ai errors returned with the response. */
        errors: Array<Record<string, unknown>>;
        /** The raw Predis.ai object for forward-compatible fields. */
        raw: Record<string, unknown>;
      };
    };
  }
}
