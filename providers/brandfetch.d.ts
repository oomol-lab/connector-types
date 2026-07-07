import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch a Brandfetch brand profile using an explicit domain, ticker, ISIN, crypto symbol, or Brand ID lookup. */
    "brandfetch.get_brand": {
      input: {
        /**
         * The identifier value matching `lookupType`, such as a domain, stock ticker, ISIN, crypto symbol, or Brand ID.
         * @minLength 1
         */
        identifier: string;
        /** The identifier type to use. Use `domain` for website domains to avoid naming collisions. */
        lookupType: "domain" | "ticker" | "isin" | "crypto" | "brand_id";
        /** Whether Brandfetch may return brands flagged as NSFW. */
        allowNsfw?: boolean;
      };
      output: {
        /** The Brandfetch brand identifier. */
        id?: string;
        /** The Brandfetch URN for the brand profile. */
        urn?: string;
        /** The canonical brand name. */
        name?: string | null;
        /** The primary brand domain. */
        domain?: string;
        /** Whether the brand profile is claimed on Brandfetch. */
        claimed?: boolean;
        /** The short brand description. */
        description?: string | null;
        /** The long-form brand description. */
        longDescription?: string | null;
        /** The Brandfetch quality score for the brand. */
        qualityScore?: number;
        /** Whether the brand profile is flagged as NSFW. */
        isNsfw?: boolean;
        /** The logos returned by Brandfetch. */
        logos?: Array<{
          /** The logo type, such as `icon` or `logo`. */
          type: string;
          /** The logo theme, such as `dark` or `light`. */
          theme?: string;
          /** The available logo formats. */
          formats: Array<{
            /** The source URL for the asset format. */
            src: string;
            /** The asset file format, such as `svg` or `png`. */
            format: string;
            /** The asset width in pixels. */
            width?: number;
            /** The asset height in pixels. */
            height?: number;
            /** The asset size in bytes. */
            size?: number;
            /** The background hint returned for the asset. */
            background?: string;
          }>;
        }>;
        /** The brand colors. */
        colors?: Array<{
          /** The HEX color value. */
          hex: string;
          /** The color role returned by Brandfetch. */
          type: string;
          /** The brightness score returned by Brandfetch. */
          brightness?: number;
        }>;
        /** The brand fonts. */
        fonts?: Array<{
          /** The font name. */
          name?: string;
          /** The font usage type, such as `title` or `body`. */
          type: string;
          /** The font origin system. */
          origin?: string;
          /** The font origin identifier. */
          originId?: string;
        }>;
        /** The brand images. */
        images?: Array<{
          /** The image type returned by Brandfetch. */
          type: string;
          /** The available image formats. */
          formats: Array<{
            /** The source URL for the asset format. */
            src: string;
            /** The asset file format, such as `svg` or `png`. */
            format: string;
            /** The asset width in pixels. */
            width?: number;
            /** The asset height in pixels. */
            height?: number;
            /** The asset size in bytes. */
            size?: number;
            /** The background hint returned for the asset. */
            background?: string;
          }>;
        }>;
        /** The external links for the brand. */
        links?: Array<{
          /** The social or link target name. */
          name: string;
          /** The linked URL. */
          url: string;
        }>;
        /** The company metadata block returned by Brandfetch. */
        company?: Record<string, unknown>;
      };
    };
    /** Resolve a raw transaction label into the corresponding Brandfetch merchant brand profile. */
    "brandfetch.get_transaction_info": {
      input: {
        /**
         * The raw merchant label from a payment or card statement.
         * @minLength 1
         */
        transactionLabel: string;
        /**
         * The ISO 3166-1 alpha-2 country code for the transaction.
         * @minLength 2
         * @maxLength 2
         */
        countryCode: string;
      };
      output: {
        /** The Brandfetch brand identifier. */
        id?: string;
        /** The Brandfetch URN for the brand profile. */
        urn?: string;
        /** The canonical brand name. */
        name?: string | null;
        /** The primary brand domain. */
        domain?: string;
        /** Whether the brand profile is claimed on Brandfetch. */
        claimed?: boolean;
        /** The short brand description. */
        description?: string | null;
        /** The long-form brand description. */
        longDescription?: string | null;
        /** The Brandfetch quality score for the brand. */
        qualityScore?: number;
        /** Whether the brand profile is flagged as NSFW. */
        isNsfw?: boolean;
        /** The logos returned by Brandfetch. */
        logos?: Array<{
          /** The logo type, such as `icon` or `logo`. */
          type: string;
          /** The logo theme, such as `dark` or `light`. */
          theme?: string;
          /** The available logo formats. */
          formats: Array<{
            /** The source URL for the asset format. */
            src: string;
            /** The asset file format, such as `svg` or `png`. */
            format: string;
            /** The asset width in pixels. */
            width?: number;
            /** The asset height in pixels. */
            height?: number;
            /** The asset size in bytes. */
            size?: number;
            /** The background hint returned for the asset. */
            background?: string;
          }>;
        }>;
        /** The brand colors. */
        colors?: Array<{
          /** The HEX color value. */
          hex: string;
          /** The color role returned by Brandfetch. */
          type: string;
          /** The brightness score returned by Brandfetch. */
          brightness?: number;
        }>;
        /** The brand fonts. */
        fonts?: Array<{
          /** The font name. */
          name?: string;
          /** The font usage type, such as `title` or `body`. */
          type: string;
          /** The font origin system. */
          origin?: string;
          /** The font origin identifier. */
          originId?: string;
        }>;
        /** The brand images. */
        images?: Array<{
          /** The image type returned by Brandfetch. */
          type: string;
          /** The available image formats. */
          formats: Array<{
            /** The source URL for the asset format. */
            src: string;
            /** The asset file format, such as `svg` or `png`. */
            format: string;
            /** The asset width in pixels. */
            width?: number;
            /** The asset height in pixels. */
            height?: number;
            /** The asset size in bytes. */
            size?: number;
            /** The background hint returned for the asset. */
            background?: string;
          }>;
        }>;
        /** The external links for the brand. */
        links?: Array<{
          /** The social or link target name. */
          name: string;
          /** The linked URL. */
          url: string;
        }>;
        /** The company metadata block returned by Brandfetch. */
        company?: Record<string, unknown>;
      };
    };
  }
}
