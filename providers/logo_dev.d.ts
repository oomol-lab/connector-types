import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch structured Logo.dev brand metadata for a domain. */
    "logo_dev.describe_brand": {
      input: {
        /**
         * The company domain to describe.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** The brand name. */
        name?: string;
        /** The brand domain. */
        domain: string;
        /** The brand description. */
        description?: string;
        /** The brand social profile payload. */
        socials?: unknown;
        /** The blurhash for the brand logo. */
        blurhash?: string;
        /** The brand color palette payload. */
        colors?: unknown;
        /** The ready-to-use Logo.dev image URL. */
        logoUrl?: string;
      };
    };
    /** Build a Logo.dev image URL for a crypto symbol. */
    "logo_dev.get_logo_by_crypto": {
      input: {
        /**
         * The crypto symbol to look up.
         * @minLength 1
         */
        symbol: string;
        /**
         * The publishable Logo.dev token used to build the image URL.
         * @minLength 1
         */
        token: string;
        /**
         * The requested logo size in pixels.
         * @minimum 1
         */
        size?: number;
        /** The requested output image format. */
        format?: "jpg" | "png" | "webp";
        /** The logo theme to request from Logo.dev. */
        theme?: "auto" | "light" | "dark";
        /** Whether the logo should be rendered in greyscale. */
        greyscale?: boolean;
        /** Whether to request a retina-quality image variant. */
        retina?: boolean;
        /** The fallback behavior when the brand logo is unavailable. */
        fallback?: "monogram" | "404";
      };
      output: {
        /** The identifier type used to build the logo URL. */
        lookupType: "domain" | "name" | "ticker" | "crypto" | "isin";
        /** The original identifier value used for the lookup. */
        lookupValue: string;
        /** The fully qualified Logo.dev image URL. */
        logoUrl: string;
        /** The normalized image request options. */
        requested: {
          /**
           * The publishable Logo.dev token used to build the image URL.
           * @minLength 1
           */
          token: string;
          /**
           * The requested logo size in pixels.
           * @minimum 1
           */
          size?: number;
          /** The requested output image format. */
          format?: "jpg" | "png" | "webp";
          /** The logo theme to request from Logo.dev. */
          theme?: "auto" | "light" | "dark";
          /** Whether the logo should be rendered in greyscale. */
          greyscale?: boolean;
          /** Whether to request a retina-quality image variant. */
          retina?: boolean;
          /** The fallback behavior when the brand logo is unavailable. */
          fallback?: "monogram" | "404";
        };
      };
    };
    /** Build a Logo.dev image URL for a company domain. */
    "logo_dev.get_logo_by_domain": {
      input: {
        /**
         * The company domain to look up, for example `openai.com`.
         * @minLength 1
         */
        domain: string;
        /**
         * The publishable Logo.dev token used to build the image URL.
         * @minLength 1
         */
        token: string;
        /**
         * The requested logo size in pixels.
         * @minimum 1
         */
        size?: number;
        /** The requested output image format. */
        format?: "jpg" | "png" | "webp";
        /** The logo theme to request from Logo.dev. */
        theme?: "auto" | "light" | "dark";
        /** Whether the logo should be rendered in greyscale. */
        greyscale?: boolean;
        /** Whether to request a retina-quality image variant. */
        retina?: boolean;
        /** The fallback behavior when the brand logo is unavailable. */
        fallback?: "monogram" | "404";
      };
      output: {
        /** The identifier type used to build the logo URL. */
        lookupType: "domain" | "name" | "ticker" | "crypto" | "isin";
        /** The original identifier value used for the lookup. */
        lookupValue: string;
        /** The fully qualified Logo.dev image URL. */
        logoUrl: string;
        /** The normalized image request options. */
        requested: {
          /**
           * The publishable Logo.dev token used to build the image URL.
           * @minLength 1
           */
          token: string;
          /**
           * The requested logo size in pixels.
           * @minimum 1
           */
          size?: number;
          /** The requested output image format. */
          format?: "jpg" | "png" | "webp";
          /** The logo theme to request from Logo.dev. */
          theme?: "auto" | "light" | "dark";
          /** Whether the logo should be rendered in greyscale. */
          greyscale?: boolean;
          /** Whether to request a retina-quality image variant. */
          retina?: boolean;
          /** The fallback behavior when the brand logo is unavailable. */
          fallback?: "monogram" | "404";
        };
      };
    };
    /** Build a Logo.dev image URL for an ISIN identifier. */
    "logo_dev.get_logo_by_isin": {
      input: {
        /**
         * The ISIN identifier to look up.
         * @minLength 1
         */
        isin: string;
        /**
         * The publishable Logo.dev token used to build the image URL.
         * @minLength 1
         */
        token: string;
        /**
         * The requested logo size in pixels.
         * @minimum 1
         */
        size?: number;
        /** The requested output image format. */
        format?: "jpg" | "png" | "webp";
        /** The logo theme to request from Logo.dev. */
        theme?: "auto" | "light" | "dark";
        /** Whether the logo should be rendered in greyscale. */
        greyscale?: boolean;
        /** Whether to request a retina-quality image variant. */
        retina?: boolean;
        /** The fallback behavior when the brand logo is unavailable. */
        fallback?: "monogram" | "404";
      };
      output: {
        /** The identifier type used to build the logo URL. */
        lookupType: "domain" | "name" | "ticker" | "crypto" | "isin";
        /** The original identifier value used for the lookup. */
        lookupValue: string;
        /** The fully qualified Logo.dev image URL. */
        logoUrl: string;
        /** The normalized image request options. */
        requested: {
          /**
           * The publishable Logo.dev token used to build the image URL.
           * @minLength 1
           */
          token: string;
          /**
           * The requested logo size in pixels.
           * @minimum 1
           */
          size?: number;
          /** The requested output image format. */
          format?: "jpg" | "png" | "webp";
          /** The logo theme to request from Logo.dev. */
          theme?: "auto" | "light" | "dark";
          /** Whether the logo should be rendered in greyscale. */
          greyscale?: boolean;
          /** Whether to request a retina-quality image variant. */
          retina?: boolean;
          /** The fallback behavior when the brand logo is unavailable. */
          fallback?: "monogram" | "404";
        };
      };
    };
    /** Build a Logo.dev image URL for a brand name. */
    "logo_dev.get_logo_by_name": {
      input: {
        /**
         * The brand name to look up.
         * @minLength 1
         */
        brandName: string;
        /**
         * The publishable Logo.dev token used to build the image URL.
         * @minLength 1
         */
        token: string;
        /**
         * The requested logo size in pixels.
         * @minimum 1
         */
        size?: number;
        /** The requested output image format. */
        format?: "jpg" | "png" | "webp";
        /** The logo theme to request from Logo.dev. */
        theme?: "auto" | "light" | "dark";
        /** Whether the logo should be rendered in greyscale. */
        greyscale?: boolean;
        /** Whether to request a retina-quality image variant. */
        retina?: boolean;
        /** The fallback behavior when the brand logo is unavailable. */
        fallback?: "monogram" | "404";
      };
      output: {
        /** The identifier type used to build the logo URL. */
        lookupType: "domain" | "name" | "ticker" | "crypto" | "isin";
        /** The original identifier value used for the lookup. */
        lookupValue: string;
        /** The fully qualified Logo.dev image URL. */
        logoUrl: string;
        /** The normalized image request options. */
        requested: {
          /**
           * The publishable Logo.dev token used to build the image URL.
           * @minLength 1
           */
          token: string;
          /**
           * The requested logo size in pixels.
           * @minimum 1
           */
          size?: number;
          /** The requested output image format. */
          format?: "jpg" | "png" | "webp";
          /** The logo theme to request from Logo.dev. */
          theme?: "auto" | "light" | "dark";
          /** Whether the logo should be rendered in greyscale. */
          greyscale?: boolean;
          /** Whether to request a retina-quality image variant. */
          retina?: boolean;
          /** The fallback behavior when the brand logo is unavailable. */
          fallback?: "monogram" | "404";
        };
      };
    };
    /** Build a Logo.dev image URL for a stock ticker. */
    "logo_dev.get_logo_by_ticker": {
      input: {
        /**
         * The stock ticker symbol to look up.
         * @minLength 1
         */
        ticker: string;
        /**
         * The publishable Logo.dev token used to build the image URL.
         * @minLength 1
         */
        token: string;
        /**
         * The requested logo size in pixels.
         * @minimum 1
         */
        size?: number;
        /** The requested output image format. */
        format?: "jpg" | "png" | "webp";
        /** The logo theme to request from Logo.dev. */
        theme?: "auto" | "light" | "dark";
        /** Whether the logo should be rendered in greyscale. */
        greyscale?: boolean;
        /** Whether to request a retina-quality image variant. */
        retina?: boolean;
        /** The fallback behavior when the brand logo is unavailable. */
        fallback?: "monogram" | "404";
      };
      output: {
        /** The identifier type used to build the logo URL. */
        lookupType: "domain" | "name" | "ticker" | "crypto" | "isin";
        /** The original identifier value used for the lookup. */
        lookupValue: string;
        /** The fully qualified Logo.dev image URL. */
        logoUrl: string;
        /** The normalized image request options. */
        requested: {
          /**
           * The publishable Logo.dev token used to build the image URL.
           * @minLength 1
           */
          token: string;
          /**
           * The requested logo size in pixels.
           * @minimum 1
           */
          size?: number;
          /** The requested output image format. */
          format?: "jpg" | "png" | "webp";
          /** The logo theme to request from Logo.dev. */
          theme?: "auto" | "light" | "dark";
          /** Whether the logo should be rendered in greyscale. */
          greyscale?: boolean;
          /** Whether to request a retina-quality image variant. */
          retina?: boolean;
          /** The fallback behavior when the brand logo is unavailable. */
          fallback?: "monogram" | "404";
        };
      };
    };
    /** Search Logo.dev brands by query text and return candidate brands. */
    "logo_dev.search_brands": {
      input: {
        /**
         * The brand query text to search for.
         * @minLength 1
         */
        query: string;
        /** The Logo.dev search strategy to apply. */
        strategy?: "typeahead" | "match";
      };
      output: {
        /** The matching brand candidates. */
        brands: Array<{
          /** The brand name. */
          name: string;
          /** The primary brand domain. */
          domain: string;
          /** The ready-to-use Logo.dev image URL. */
          logoUrl?: string;
        }>;
      };
    };
  }
}
