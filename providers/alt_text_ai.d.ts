import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a publicly accessible image URL to AltText.ai and generate alt text. */
    "alt_text_ai.create_image": {
      input: {
        /**
         * The public URL of the image that needs alt text.
         * @format uri
         */
        url: string;
        /**
         * Your own unique asset ID for this image.
         * @minLength 1
         */
        asset_id?: string;
        /** Words or phrases to associate with the image. */
        tags?: Array<string>;
        /** Custom key-value metadata associated with the image. */
        metadata?: Record<string, unknown>;
        /** Ecommerce product context for product image alt text generation. */
        ecomm?: {
          /**
           * Product name or description.
           * @minLength 1
           */
          product?: string;
          /**
           * Brand name.
           * @minLength 1
           */
          brand?: string;
          /**
           * Product color.
           * @minLength 1
           */
          color?: string;
        };
        /**
         * Keywords or phrases to consider when generating SEO-optimized alt text.
         * @maxItems 6
         */
        keywords?: Array<string>;
        /**
         * Keywords or phrases to consider when generating SEO-optimized alt text.
         * @maxItems 6
         */
        negative_keywords?: Array<string>;
        /**
         * Text source for extracting keywords when keywords is blank.
         * @minLength 12
         * @maxLength 1024
         */
        keyword_source?: string;
        /**
         * Language code or comma-separated language codes for generated alt text.
         * @minLength 1
         */
        lang?: string;
        /**
         * Maximum generated alt text length in characters.
         * @minimum 80
         * @maximum 500
         */
        max_chars?: number;
        /** Whether to regenerate existing alt text for the image. */
        overwrite?: boolean;
        /**
         * Prompt to apply to generated alt text using the {{AltText}} macro.
         * @minLength 1
         */
        gpt_prompt?: string;
        /** The language model style to use for alt text generation. */
        model_name?: "describe-detailed" | "describe-regular" | "describe-factual" | "succinct-describe-factual" | "describe-terse";
        /**
         * Maximum timeout in seconds for synchronous generation.
         * @minimum 5
         * @maximum 30
         */
        timeout_secs?: number;
      };
      output: {
        /** The unique ID of the image. */
        asset_id?: string | null;
        /** The public image URL, or null when the image was uploaded as raw data. */
        url?: string | null;
        /** The primary generated alt text for the image. */
        alt_text?: string | null;
        /** Generated alt text keyed by language code. */
        alt_texts?: Record<string, unknown>;
        /** Words or phrases associated with the image. */
        tags?: Array<string>;
        /** Custom metadata stored with the image. */
        metadata?: Record<string, unknown>;
        /** Creation time in seconds since epoch. */
        created_at?: number | null;
        /** Field-specific image processing errors. */
        errors?: Record<string, unknown>;
        /** An identifier describing the type of image processing error. */
        error_code?: string | null;
      };
    };
    /** Delete an image from the AltText.ai library by asset ID. */
    "alt_text_ai.delete_image": {
      input: {
        /**
         * The asset ID of the image to delete.
         * @minLength 1
         */
        asset_id: string;
      };
      output: {
        /** The unique ID of the image. */
        asset_id?: string | null;
        /** The public image URL, or null when the image was uploaded as raw data. */
        url?: string | null;
        /** The primary generated alt text for the image. */
        alt_text?: string | null;
        /** Generated alt text keyed by language code. */
        alt_texts?: Record<string, unknown>;
        /** Words or phrases associated with the image. */
        tags?: Array<string>;
        /** Custom metadata stored with the image. */
        metadata?: Record<string, unknown>;
        /** Creation time in seconds since epoch. */
        created_at?: number | null;
        /** Field-specific image processing errors. */
        errors?: Record<string, unknown>;
        /** An identifier describing the type of image processing error. */
        error_code?: string | null;
      };
    };
    /** Retrieve AltText.ai account settings and usage details for the API key. */
    "alt_text_ai.get_account": {
      input: Record<string, never>;
      output: {
        /** The name of the AltText.ai account. */
        name?: string | null;
        /** The default notification URL for webhooks. */
        webhook_url?: string | null;
        /** The email address for important account notifications. */
        notification_email?: string | null;
        /** The number of credits used this billing period. */
        usage?: number | null;
        /** The maximum credits that can be used during this billing period. */
        usage_limit?: number | null;
        /** Whether whitelabel mode is enabled for the account. */
        whitelabel?: boolean | null;
        /** Whether generated alt text should end with a period by default. */
        ending_period?: boolean | null;
        /** Whether quote characters are removed from generated alt text by default. */
        no_quotes?: boolean | null;
        /** Symbol characters removed from generated alt text. */
        remove_symbols?: Array<string> | null;
        /** The default prompt applied to initially generated alt text. */
        gpt_prompt?: string | null;
        /** The account-level maximum character limit for alt text. */
        max_chars?: number | null;
        /** Subscription details associated with the account. */
        subscription?: {
          /** The name of the current subscription plan. */
          plan_name?: string | null;
          /** The number of credits granted each billing period on this plan. */
          usage_quota?: number | null;
          /** The current status of the subscription plan. */
          status?: string | null;
          /** The renewal or expiration date of the plan. */
          expires_at?: string | null;
        } | null;
        /** Field-specific account errors. */
        errors?: Record<string, unknown>;
      };
    };
    /** Retrieve a single AltText.ai image record by asset ID. */
    "alt_text_ai.get_image": {
      input: {
        /**
         * The unique asset ID of the image to retrieve.
         * @minLength 1
         */
        asset_id: string;
      };
      output: {
        /** The unique ID of the image. */
        asset_id?: string | null;
        /** The public image URL, or null when the image was uploaded as raw data. */
        url?: string | null;
        /** The primary generated alt text for the image. */
        alt_text?: string | null;
        /** Generated alt text keyed by language code. */
        alt_texts?: Record<string, unknown>;
        /** Words or phrases associated with the image. */
        tags?: Array<string>;
        /** Custom metadata stored with the image. */
        metadata?: Record<string, unknown>;
        /** Creation time in seconds since epoch. */
        created_at?: number | null;
        /** Field-specific image processing errors. */
        errors?: Record<string, unknown>;
        /** An identifier describing the type of image processing error. */
        error_code?: string | null;
      };
    };
    /** List image records in the AltText.ai library with optional URL filtering. */
    "alt_text_ai.list_images": {
      input: {
        /**
         * Page number to retrieve, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of images per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Exact image URL used to filter results.
         * @format uri
         */
        url?: string;
      };
      output: {
        /** Image records returned by AltText.ai. */
        images: Array<{
          /** The unique ID of the image. */
          asset_id?: string | null;
          /** The public image URL, or null when the image was uploaded as raw data. */
          url?: string | null;
          /** The primary generated alt text for the image. */
          alt_text?: string | null;
          /** Generated alt text keyed by language code. */
          alt_texts?: Record<string, unknown>;
          /** Words or phrases associated with the image. */
          tags?: Array<string>;
          /** Custom metadata stored with the image. */
          metadata?: Record<string, unknown>;
          /** Creation time in seconds since epoch. */
          created_at?: number | null;
          /** Field-specific image processing errors. */
          errors?: Record<string, unknown>;
          /** An identifier describing the type of image processing error. */
          error_code?: string | null;
        }>;
        /** Pagination metadata returned in AltText.ai response headers. */
        pagination: {
          /** The current page number returned by AltText.ai. */
          currentPage: number | null;
          /** The number of items in each page returned by AltText.ai. */
          pageItems: number | null;
          /** The total number of pages returned by AltText.ai. */
          totalPages: number | null;
          /** The total number of items returned by AltText.ai. */
          totalCount: number | null;
          /** The RFC 8288 pagination link header returned by AltText.ai. */
          link: string | null;
        };
      };
    };
    /** Scrape a web page or raw HTML document and queue discovered images for alt text generation. */
    "alt_text_ai.scrape_page": {
      input: {
        /**
         * The page URL to scrape. The crawler does not execute JavaScript.
         * @format uri
         */
        url?: string;
        /**
         * Raw HTML document to parse for image elements.
         * @minLength 1
         */
        html?: string;
        /**
         * Keywords or phrases to consider when generating SEO-optimized alt text.
         * @maxItems 6
         */
        keywords?: Array<string>;
        /**
         * Keywords or phrases to consider when generating SEO-optimized alt text.
         * @maxItems 6
         */
        negative_keywords?: Array<string>;
        /**
         * Language code or comma-separated language codes for generated alt text.
         * @minLength 1
         */
        lang?: string;
        /** Whether to process images that already have alt text. */
        include_existing?: boolean;
      };
      output: {
        /** The page URL that was scraped, or null when raw HTML was sent. */
        url?: string | null;
        /** Images discovered during page scraping. */
        scraped_images?: Array<{
          /** The image src attribute discovered in the page HTML. */
          src?: string | null;
          /** The existing alt attribute discovered in the page HTML. */
          alt?: string | null;
          /** The image width in pixels when available. */
          width?: number | null;
          /** The image height in pixels when available. */
          height?: number | null;
          /** The reason this image was skipped from processing, or null when queued. */
          skip_reason?: string | null;
        }>;
        /** The number of scraped images queued for alt text generation. */
        total_processed?: number;
        /** Errors encountered while scraping or queuing images. */
        errors?: Record<string, unknown>;
      };
    };
    /** Search the AltText.ai image library by URL, asset ID, or alt text content. */
    "alt_text_ai.search_images": {
      input: {
        /**
         * The search query for URL, asset ID, or alt text content.
         * @minLength 1
         * @maxLength 256
         */
        query: string;
        /**
         * Page number to retrieve, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of search results per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Image records returned by AltText.ai. */
        images: Array<{
          /** The unique ID of the image. */
          asset_id?: string | null;
          /** The public image URL, or null when the image was uploaded as raw data. */
          url?: string | null;
          /** The primary generated alt text for the image. */
          alt_text?: string | null;
          /** Generated alt text keyed by language code. */
          alt_texts?: Record<string, unknown>;
          /** Words or phrases associated with the image. */
          tags?: Array<string>;
          /** Custom metadata stored with the image. */
          metadata?: Record<string, unknown>;
          /** Creation time in seconds since epoch. */
          created_at?: number | null;
          /** Field-specific image processing errors. */
          errors?: Record<string, unknown>;
          /** An identifier describing the type of image processing error. */
          error_code?: string | null;
        }>;
        /** Pagination metadata returned in AltText.ai response headers. */
        pagination: {
          /** The current page number returned by AltText.ai. */
          currentPage: number | null;
          /** The number of items in each page returned by AltText.ai. */
          pageItems: number | null;
          /** The total number of pages returned by AltText.ai. */
          totalPages: number | null;
          /** The total number of items returned by AltText.ai. */
          totalCount: number | null;
          /** The RFC 8288 pagination link header returned by AltText.ai. */
          link: string | null;
        };
      };
    };
  }
}
