import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Ask the Amazon Alexa shopping assistant a product discovery question through LinkFox. */
    "linkfox.ask_amazon_alexa": {
      input: {
        /**
         * The single shopping question to ask Alexa.
         * @minItems 1
         * @maxItems 1
         */
        prompts: Array<string>;
        /** The response representation. */
        format?: "markdown" | "json";
        /**
         * A specific Amazon category, search-result, or product page URL.
         * @format uri
         */
        url?: string;
      };
      output: {
        /** The Markdown answer when requested. */
        report: string | null;
        /** The structured Alexa answers when requested. */
        data: Array<Record<string, unknown>>;
        /**
         * The number of Alexa answer turns.
         * @minimum 0
         */
        resultsNum: number;
        /** The upstream task identifier when provided. */
        taskId: string | null;
        /** The upstream processing time in milliseconds. */
        costTime: number | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Check a product image for copyright risk through LinkFox and Ruiguan. */
    "linkfox.check_copyright_risk": {
      input: {
        /**
         * A publicly accessible product image URL.
         * @maxLength 1000
         * @format uri
         */
        imageUrl: string;
        /**
         * The maximum number of copyright matches.
         * @minimum 10
         * @maximum 200
         */
        topNumber: number;
        /** Whether to enable LinkFox radar infringement analysis. */
        enableRadar: boolean;
      };
      output: {
        /**
         * The number of returned risk matches.
         * @minimum 0
         */
        total: number;
        /** The compliance risk matches. */
        data: Array<Record<string, unknown>>;
        /** The LinkFox detection identifier when provided. */
        detectId: string | null;
        /** The LinkFox rendering column definitions. */
        columns: Array<Record<string, unknown>>;
        /** The LinkFox rendering type when provided. */
        type: string | null;
        /** The overall risk level when provided. */
        riskLevel: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Check a product image for design-patent risk through LinkFox and Ruiguan. */
    "linkfox.check_design_patent_risk": {
      input: {
        /**
         * A publicly accessible product image URL.
         * @maxLength 1000
         * @format uri
         */
        imageUrl: string;
        /** The image retrieval mode. */
        queryMode?: "physical" | "line" | "hybrid";
        /**
         * The maximum number of design patent matches.
         * @minimum 1
         * @maximum 100
         */
        topNumber?: number;
        /**
         * Comma-separated patent jurisdiction codes.
         * @maxLength 1000
         */
        regions?: string;
        /**
         * The product title used as additional retrieval context.
         * @maxLength 1000
         */
        productTitle?: string;
        /**
         * The product description used as additional retrieval context.
         * @maxLength 1000
         */
        productDescription?: string;
        /** Whether to include valid, expired, or all patents. */
        patentStatus?: "1" | "0" | "1,0";
        /** Whether to enable AI infringement radar analysis. */
        enableRadar?: boolean;
        /** Comma-separated top-level Locarno classification codes. */
        topLoc?: string;
        /** The source-language code for non-English product text. */
        sourceLanguage?: string;
      };
      output: {
        /**
         * The number of returned risk matches.
         * @minimum 0
         */
        total: number;
        /** The compliance risk matches. */
        data: Array<Record<string, unknown>>;
        /** The LinkFox detection identifier when provided. */
        detectId: string | null;
        /** The LinkFox rendering column definitions. */
        columns: Array<Record<string, unknown>>;
        /** The LinkFox rendering type when provided. */
        type: string | null;
        /** The overall risk level when provided. */
        riskLevel: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Check a product image for graphic trademark risk through LinkFox and Ruiguan. */
    "linkfox.check_graphic_trademark_risk": {
      input: {
        /**
         * A public product image URL or base64-encoded image.
         * @maxLength 1000
         */
        imageUrl: string;
        /**
         * The maximum number of detected logo regions.
         * @minimum 1
         * @maximum 100
         */
        topNumber: number;
        /**
         * The product title used as detection context.
         * @maxLength 1000
         */
        productTitle?: string;
        /**
         * A possible logo name used to narrow the search.
         * @maxLength 1000
         */
        trademarkName?: string;
        /**
         * Comma-separated trademark jurisdiction codes.
         * @maxLength 1000
         */
        regions?: string;
        /** Whether to detect and crop individual logo regions. */
        enableLocalizing?: boolean;
        /** Whether to enable LinkFox radar infringement analysis. */
        enableRadar?: boolean;
      };
      output: {
        /**
         * The number of returned risk matches.
         * @minimum 0
         */
        total: number;
        /** The compliance risk matches. */
        data: Array<Record<string, unknown>>;
        /** The LinkFox detection identifier when provided. */
        detectId: string | null;
        /** The LinkFox rendering column definitions. */
        columns: Array<Record<string, unknown>>;
        /** The LinkFox rendering type when provided. */
        type: string | null;
        /** The overall risk level when provided. */
        riskLevel: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
        /** The number of detected graphic trademark regions. */
        boundingBoxCount: number | null;
        /** The graphic trademark radar result when provided. */
        radarResult: string | null;
      };
    };
    /** Check a product image against policy-violating product imagery through LinkFox and Ruiguan. */
    "linkfox.check_image_policy_compliance": {
      input: {
        /**
         * A publicly accessible product image URL.
         * @maxLength 1000
         * @format uri
         */
        imageUrl: string;
      };
      output: {
        /**
         * The number of returned risk matches.
         * @minimum 0
         */
        total: number;
        /** The compliance risk matches. */
        data: Array<Record<string, unknown>>;
        /** The LinkFox detection identifier when provided. */
        detectId: string | null;
        /** The LinkFox rendering column definitions. */
        columns: Array<Record<string, unknown>>;
        /** The LinkFox rendering type when provided. */
        type: string | null;
        /** The overall risk level when provided. */
        riskLevel: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Check product images and text for TRO, trademark, copyright, and patent risk through LinkFox and Maidalv. */
    "linkfox.check_product_tro_risk": {
      input: {
        /**
         * The public main image URL or image Base64 data URI. URLs are recommended; maximum 1000 characters.
         * @minLength 1
         * @maxLength 1000
         * @pattern ^(https?://|data:image/[^;]+;base64,)
         */
        mainProductImage: string;
        /**
         * Reference images.
         * @maxItems 3
         */
        referenceImages?: Array<string>;
        /**
         * Additional product images.
         * @maxItems 5
         */
        otherProductImages?: Array<string>;
        /**
         * Intellectual-property reference images.
         * @maxItems 3
         */
        ipImages?: Array<string>;
        /**
         * Text from a similar product.
         * @maxLength 1000
         */
        referenceText?: string;
        /**
         * The product description; a product title is recommended.
         * @maxLength 1000
         */
        description?: string;
        /**
         * Intellectual-property keywords to investigate.
         * @maxItems 20
         */
        ipKeywords?: Array<string>;
        /**
         * The language of report fields only.
         * @default "zh"
         */
        language?: "zh" | "en";
      };
      output: {
        /** The analysis status. */
        status?: string;
        /** The unique detection identifier. */
        checkId?: string;
        /** The overall risk assessment. */
        riskLevel?: string;
        /** The number of high-risk items in results. */
        total: number;
        /** High-risk potential infringement items. */
        results: Array<{
          /** The IP type: Trademark, Copyright, or Patent. */
          ipType?: string;
          /** The trademark text, patent title, or copyright title. */
          text?: string;
          /** The intellectual-property owner. */
          ipOwner?: string;
          /** The registration number; may contain a JSON-encoded array. */
          regNo?: string;
          /** The item risk level when scored. */
          riskLevel?: string;
          /**
           * The risk score from 0 to 10 when available.
           * @minimum 0
           * @maximum 10
           */
          riskScore?: number;
          /** The risk explanation when scored. */
          riskDescription?: string;
          /** IP evidence image URLs. */
          ipAssetUrls?: Array<string>;
          /** The TRO plaintiff ID when a related case exists. */
          plaintiffId?: number;
          /** The TRO plaintiff name when a related case exists. */
          plaintiffName?: string;
          /** The plaintiff case count, or null when case details are unavailable. */
          numberOfCases?: number | null;
          /** The latest court docket, or null when unavailable. */
          lastCaseDocket?: string | null;
          /** The latest case filing date, or null when unavailable. */
          lastCaseDateFiled?: string | null;
          /** The AI-generated legal assessment in the requested report language. */
          report?: string;
          [key: string]: unknown;
        }>;
        /** Lower-risk or lower-similarity IP items, possibly including TRO case information. */
        nonResults: Array<{
          /** The IP type: Trademark, Copyright, or Patent. */
          ipType?: string;
          /** The trademark text, patent title, or copyright title. */
          text?: string;
          /** The intellectual-property owner. */
          ipOwner?: string;
          /** The registration number; may contain a JSON-encoded array. */
          regNo?: string;
          /** The item risk level when scored. */
          riskLevel?: string;
          /**
           * The risk score from 0 to 10 when available.
           * @minimum 0
           * @maximum 10
           */
          riskScore?: number;
          /** The risk explanation when scored. */
          riskDescription?: string;
          /** IP evidence image URLs. */
          ipAssetUrls?: Array<string>;
          /** The TRO plaintiff ID when a related case exists. */
          plaintiffId?: number;
          /** The TRO plaintiff name when a related case exists. */
          plaintiffName?: string;
          /** The plaintiff case count, or null when case details are unavailable. */
          numberOfCases?: number | null;
          /** The latest court docket, or null when unavailable. */
          lastCaseDocket?: string | null;
          /** The latest case filing date, or null when unavailable. */
          lastCaseDateFiled?: string | null;
          /** The AI-generated legal assessment in the requested report language. */
          report?: string;
          [key: string]: unknown;
        }>;
        /** Supplier display columns. */
        columns?: Array<Record<string, unknown>>;
        /** The supplier display type. */
        type?: string;
        /** The LinkFox token usage when returned. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Check product text for trademark risk through LinkFox and Ruiguan. */
    "linkfox.check_text_trademark_risk": {
      input: {
        /**
         * The product title to inspect for trademark risk.
         * @maxLength 1000
         */
        productTitle: string;
        /** Comma-separated trademark jurisdiction codes. */
        regions?: string;
        /**
         * The maximum number of trademark matches.
         * @minimum 1
         * @maximum 500
         */
        limit: number;
        /**
         * Additional product copy to inspect.
         * @maxLength 1000
         */
        productText?: string;
      };
      output: {
        /**
         * The number of returned risk matches.
         * @minimum 0
         */
        total: number;
        /** The compliance risk matches. */
        data: Array<Record<string, unknown>>;
        /** The LinkFox detection identifier when provided. */
        detectId: string | null;
        /** The LinkFox rendering column definitions. */
        columns: Array<Record<string, unknown>>;
        /** The LinkFox rendering type when provided. */
        type: string | null;
        /** The overall risk level when provided. */
        riskLevel: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
        /** Blacklisted trademarks found in the inspected text. */
        blacklistTrademarks: Array<Record<string, unknown>>;
        /** Safe-listed trademarks found in the inspected text. */
        whitelistTrademarks: Array<Record<string, unknown>>;
        /** The text trademark risk level when provided. */
        textTrademarkRadar: string | null;
      };
    };
    /** Check product text for utility and invention patent risk through LinkFox and Ruiguan. */
    "linkfox.check_utility_patent_risk": {
      input: {
        /**
         * The product title used for patent retrieval.
         * @maxLength 1000
         */
        productTitle: string;
        /**
         * The product description used for patent retrieval.
         * @maxLength 1000
         */
        productDescription: string;
        /** The target patent jurisdiction. */
        region: "US";
        /**
         * The maximum number of patent matches.
         * @minimum 10
         * @maximum 200
         */
        topNumber: number;
      };
      output: {
        /**
         * The number of returned risk matches.
         * @minimum 0
         */
        total: number;
        /** The compliance risk matches. */
        data: Array<Record<string, unknown>>;
        /** The LinkFox detection identifier when provided. */
        detectId: string | null;
        /** The LinkFox rendering column definitions. */
        columns: Array<Record<string, unknown>>;
        /** The LinkFox rendering type when provided. */
        type: string | null;
        /** The overall risk level when provided. */
        riskLevel: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Create a temporary upload URL for a JPG, JPEG or PNG image through LinkFox and Chuhaijiang. */
    "linkfox.create_chuhaijiang_image_upload_url": {
      input: {
        /**
         * The image filename including its JPG, JPEG or PNG extension.
         * @minLength 1
         * @pattern \.[jJ][pP][eE]?[gG]$|\.[pP][nN][gG]$
         */
        fileName: string;
      };
      output: {
        /** The image upload information. */
        data: {
          /** The temporary URL for uploading image bytes with HTTP PUT and an image Content-Type, without LinkFox credentials. */
          url?: string;
          /** The object key passed to image search as osKey after upload. */
          os_key?: string;
          /** The object storage bucket. */
          os_bucket?: string;
          /** The temporary read URL; never use this as the upload URL. */
          signed_url?: string;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Get public product, SKU, price, inventory, media, shipping, and supplier details from 1688 through LinkFox. */
    "linkfox.get_1688_product": {
      input: {
        /**
         * The positive decimal 1688 offer identifier.
         * @maxLength 1000
         * @pattern ^[1-9][0-9]*$
         */
        offerId: string;
        /** The upstream-compatible language or country field. */
        country?: string;
        /**
         * The three-letter currency code used for converted prices.
         * @pattern ^[A-Za-z]{3}$
         */
        currency?: string;
      };
      output: {
        /** The LinkFox token cost when provided. */
        costToken?: number | null;
        [key: string]: unknown;
      };
    };
    /** Create an Amazon Ads authorization URL through LinkFox. */
    "linkfox.get_amazon_ads_authorization_url": {
      input: {
        /** The Amazon Ads region. */
        region: "NA" | "EU" | "FE";
        /**
         * A display name used to identify the authorized Ads account.
         * @minLength 1
         * @pattern \S
         */
        accountName: string;
      };
      output: {
        /**
         * The URL the user should open to authorize the Amazon account.
         * @format uri
         */
        authorizeUrl: string;
      };
    };
    /** Create or resume an Amazon Ads report and wait for a download URL. */
    "linkfox.get_amazon_ads_report": {
      input: {
        /**
         * The Amazon Ads profile identifier.
         * @exclusiveMinimum 0
         */
        profileId: number;
        /** The Amazon Ads region. */
        region: "NA" | "EU" | "FE";
        /** An existing Amazon Ads report identifier to resume. */
        reportId?: string;
        /** The official Amazon Ads report type identifier. */
        reportTypeId?: string;
        /** The Amazon Ads product for a new report. */
        adProduct?: "SPONSORED_PRODUCTS" | "SPONSORED_BRANDS" | "SPONSORED_DISPLAY";
        /**
         * The official report grouping dimensions.
         * @minItems 1
         */
        groupBy?: Array<string>;
        /**
         * The official report columns to include.
         * @minItems 1
         */
        columns?: Array<string>;
        /** The official Amazon Ads report filters. */
        filters?: Array<{
          /**
           * The official Amazon Ads report filter field.
           * @minLength 1
           */
          field: string;
          /**
           * The allowed values for the report filter.
           * @minItems 1
           */
          values: Array<string>;
        }>;
        /**
         * The inclusive report start date.
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive report end date.
         * @format date
         */
        endDate?: string;
        /** The Amazon Ads report display name. */
        name?: string;
        /** The report time aggregation. */
        timeUnit?: "DAILY" | "SUMMARY";
        /** The Amazon Ads report format. */
        format?: "GZIP_JSON";
        /**
         * Seconds between report status checks.
         * @minimum 0
         * @maximum 300
         */
        pollIntervalSeconds?: number;
        /**
         * The maximum status checks within the ten-minute polling budget.
         * @minimum 1
         * @maximum 120
         */
        maxAttempts?: number;
      };
      output: {
        /** The Amazon report identifier. */
        reportId: string;
        /** The final or last observed report status. */
        status: string;
        /** The Amazon report download URL when the report is complete. */
        downloadUrl: string | null;
        /** The report compression algorithm when provided. */
        compressionAlgorithm: string | null;
        /**
         * The number of report status checks performed.
         * @minimum 0
         */
        pollAttempts: number;
      };
    };
    /** Generate a LinkFox Amazon commercial opportunity report for a keyword. */
    "linkfox.get_amazon_opportunity_report": {
      input: {
        /** The supported Amazon marketplace code. */
        site: "US";
        /**
         * The search keyword to analyze.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** The generated commercial insight report in Markdown. */
        report: string;
        /** The report generation time in milliseconds when provided. */
        costTime: number | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Get the full content of an Amazon policy or compliance news record through LinkFox. */
    "linkfox.get_amazon_policy_update": {
      input: {
        /**
         * The 32-character policy record identifier.
         * @minLength 32
         * @maxLength 32
         */
        id: string;
      };
      output: {
        /** The LinkFox token cost when provided. */
        costToken?: number | null;
        [key: string]: unknown;
      };
    };
    /** Get detailed Amazon product data for up to forty ASINs through LinkFox. */
    "linkfox.get_amazon_product": {
      input: {
        /**
         * One to forty comma-separated uppercase Amazon ASINs.
         * @pattern ^[A-Z0-9]+(,[A-Z0-9]+){0,39}$
         */
        asins: string;
        /** The Amazon marketplace domain. */
        amazonDomain?: "amazon.com" | "amazon.co.uk" | "amazon.de" | "amazon.fr" | "amazon.it" | "amazon.es" | "amazon.co.jp" | "amazon.ca" | "amazon.com.au" | "amazon.com.br" | "amazon.in" | "amazon.nl" | "amazon.se" | "amazon.pl" | "amazon.sg" | "amazon.sa" | "amazon.ae" | "amazon.com.mx" | "amazon.com.tr" | "amazon.com.be" | "amazon.cn" | "amazon.eg";
        /** The Amazon locale code, such as en_US or de_DE. */
        language?: string;
        /** The destination postal code used to resolve localized prices. */
        deliveryZip?: string;
        /** The storefront device profile. */
        device?: "desktop" | "mobile" | "tablet";
        /** Whether to include frequently bought together products. */
        returnBoughtTogether?: boolean;
        /** Whether to include related products. */
        returnRelatedProducts?: boolean;
        /** Whether to include author review excerpts. */
        returnAuthorsReviews?: boolean;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Create an Amazon Selling Partner authorization URL through LinkFox. */
    "linkfox.get_amazon_store_authorization_url": {
      input: {
        /** The Amazon Selling Partner region. */
        region: "NA" | "EU" | "FE";
        /**
         * A display name used to identify the authorized store.
         * @minLength 1
         * @pattern \S
         */
        sellerName: string;
      };
      output: {
        /**
         * The URL the user should open to authorize the Amazon account.
         * @format uri
         */
        authorizeUrl: string;
      };
    };
    /** Create or resume an Amazon Selling Partner report and wait for a download URL. */
    "linkfox.get_amazon_store_report": {
      input: {
        /**
         * The authorized Amazon seller identifier.
         * @minLength 1
         */
        sellerId: string;
        /** The Amazon Selling Partner region. */
        region: "NA" | "EU" | "FE";
        /** An existing report identifier to resume instead of creating a report. */
        reportId?: string;
        /** The official Amazon Selling Partner report type. */
        reportType?: string;
        /**
         * The Amazon marketplace identifiers for a new report.
         * @minItems 1
         */
        marketplaceIds?: Array<string>;
        /** The optional report data start date or date-time. */
        dataStartTime?: string;
        /** The optional report data end date or date-time. */
        dataEndTime?: string;
        /** The optional vendor report update date or date-time. */
        lastUpdatedDate?: string;
        /** Report-type-specific Amazon report options. */
        reportOptions?: Record<string, unknown>;
        /**
         * Seconds between report status checks.
         * @minimum 0
         * @maximum 300
         */
        pollIntervalSeconds?: number;
        /**
         * The maximum status checks within the ten-minute polling budget.
         * @minimum 1
         * @maximum 120
         */
        maxAttempts?: number;
      };
      output: {
        /** The Amazon report identifier. */
        reportId: string;
        /** The final or last observed report status. */
        status: string;
        /** The Amazon report download URL when the report is complete. */
        downloadUrl: string | null;
        /** The report compression algorithm when provided. */
        compressionAlgorithm: string | null;
        /**
         * The number of report status checks performed.
         * @minimum 0
         */
        pollAttempts: number;
      };
    };
    /** Get TikTok ad details through LinkFox and Chuhaijiang. */
    "linkfox.get_chuhaijiang_ad": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The ad ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /** Comma-separated optional detail expansions: core. */
        include?: "core";
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Get TikTok creative details through LinkFox and Chuhaijiang. */
    "linkfox.get_chuhaijiang_creative": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The creative ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /** Comma-separated optional detail expansions: analysis, embedding. */
        include?: "analysis" | "embedding" | "analysis,embedding" | "embedding,analysis";
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Get TikTok creator details through LinkFox and Chuhaijiang. */
    "linkfox.get_chuhaijiang_creator": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The creator ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /** Comma-separated optional detail expansions: channel, core, portrait. */
        include?: "channel" | "core" | "portrait" | "channel,core" | "channel,portrait" | "core,channel" | "core,portrait" | "portrait,channel" | "portrait,core" | "channel,core,portrait" | "channel,portrait,core" | "core,channel,portrait" | "core,portrait,channel" | "portrait,channel,core" | "portrait,core,channel";
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Get TikTok live stream details through LinkFox and Chuhaijiang. */
    "linkfox.get_chuhaijiang_live": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The live room ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /** Comma-separated optional detail expansions: core. */
        include?: "core";
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Get TikTok product details through LinkFox and Chuhaijiang. */
    "linkfox.get_chuhaijiang_product": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The product ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /** Comma-separated optional detail expansions: core, channel. */
        include?: "core" | "channel" | "core,channel" | "channel,core";
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Get TikTok shop details through LinkFox and Chuhaijiang. */
    "linkfox.get_chuhaijiang_shop": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The shop ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /** Comma-separated optional detail expansions: core, channel. */
        include?: "core" | "channel" | "core,channel" | "channel,core";
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Get TikTok video details through LinkFox and Chuhaijiang. */
    "linkfox.get_chuhaijiang_video": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The video ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /** Comma-separated optional detail expansions: core. */
        include?: "core";
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Get the current LinkFox account without exposing personal contact data. */
    "linkfox.get_current_account": {
      input: Record<string, never>;
      output: {
        /** The stable LinkFox account identifier when available. */
        accountId: string | null;
        /** The LinkFox account nickname when available. */
        nickname: string | null;
        /** Whether the LinkFox account is personal or belongs to a team. */
        accountType: "personal" | "team";
        /** Whether LinkFox reports the account as verified. */
        verified: boolean;
      };
    };
    /** Get EchoTik details for a batch of TikTok products through LinkFox. */
    "linkfox.get_echotik_products": {
      input: {
        /**
         * TikTok product identifiers.
         * @maxItems 1000
         */
        productIds?: Array<string>;
        /**
         * TikTok Shop product URLs.
         * @maxItems 1000
         */
        productUrls?: Array<string>;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Get detailed public analytics for a TikTok Shop seller through LinkFox and EchoTik. */
    "linkfox.get_echotik_seller": {
      input: {
        /**
         * The TikTok Shop seller identifier.
         * @minLength 1
         * @maxLength 1000
         */
        sellerId: string;
      };
      output: {
        /** The LinkFox token cost when provided. */
        costToken?: number | null;
        [key: string]: unknown;
      };
    };
    /** Get available playback and download URLs for a TikTok video through LinkFox and EchoTik. */
    "linkfox.get_echotik_video_download": {
      input: {
        /**
         * A TikTok short or full video URL.
         * @maxLength 1000
         * @format uri
         */
        url: string;
      };
      output: {
        /** The LinkFox token cost when provided. */
        costToken?: number | null;
        [key: string]: unknown;
      };
    };
    /** Get EchoTik details for a batch of TikTok videos through LinkFox. */
    "linkfox.get_echotik_videos": {
      input: {
        /**
         * TikTok video identifiers.
         * @maxItems 1000
         */
        videoIds?: Array<string>;
        /**
         * TikTok video URLs.
         * @maxItems 1000
         */
        videoUrls?: Array<string>;
      };
      output: {
        /**
         * The number of returned videos.
         * @minimum 0
         */
        total: number;
        /** The videos returned by EchoTik. */
        videos: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Get current public details for one Etsy listing through LinkFox. */
    "linkfox.get_etsy_product": {
      input: {
        /**
         * A public Etsy HTTPS listing URL.
         * @format uri
         */
        productUrl: string;
      };
      output: {
        /**
         * The number of Etsy listings returned.
         * @minimum 0
         */
        total: number;
        /** The Etsy listing details. */
        data: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Get Kalodata details for a TikTok product through LinkFox. */
    "linkfox.get_kalodata_product": {
      input: {
        /**
         * The TikTok product identifier as a string.
         * @minLength 1
         */
        productId: string;
        /** The TikTok Shop market region, such as US. */
        region?: string;
        /** A relative range such as last7Day or last30Day. */
        dateRange?: string;
        /** The requested locale, such as en-US or zh-CN. */
        language?: string;
        /** The requested currency code, such as USD. */
        currency?: string;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Get the connected supplier account package and usage information through LinkFox. */
    "linkfox.get_mercado_account_usage": {
      input: Record<string, never>;
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get Mercado Libre catalog product details through LinkFox. */
    "linkfox.get_mercado_catalog": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC";
        /**
         * The Mercado Libre catalog product ID, such as MLM21333.
         * @minLength 1
         */
        productId: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get Mercado Libre catalog product sales history through LinkFox. */
    "linkfox.get_mercado_catalog_history": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC";
        /**
         * The Mercado Libre catalog product ID, such as MLM21333.
         * @minLength 1
         */
        productId: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get warehouse type distribution in a Mercado Libre category through LinkFox. */
    "linkfox.get_mercado_category_inventory_types": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC" | "MCO";
        /**
         * The Mercado Libre category ID.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The reporting month in YYYYMM format.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get the price distribution in a Mercado Libre category through LinkFox. */
    "linkfox.get_mercado_category_price_distribution": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC" | "MCO";
        /**
         * The Mercado Libre category ID.
         * @minLength 1
         */
        categoryId: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get the sales distribution in a Mercado Libre category through LinkFox. */
    "linkfox.get_mercado_category_sales_distribution": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC" | "MCO";
        /**
         * The Mercado Libre category ID.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The reporting month in YYYYMM format.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get sales history for a Mercado Libre category through LinkFox. */
    "linkfox.get_mercado_category_sales_history": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC" | "MCO";
        /**
         * The Mercado Libre category ID.
         * @minLength 1
         */
        categoryId: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get summary statistics for a Mercado Libre category through LinkFox. */
    "linkfox.get_mercado_category_statistics": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC" | "MCO";
        /**
         * The Mercado Libre category ID.
         * @minLength 1
         */
        categoryId: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get the exchange rate for a Mercado Libre market through LinkFox. */
    "linkfox.get_mercado_exchange_rate": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC";
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get Mercado Libre product details through LinkFox. */
    "linkfox.get_mercado_item": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC";
        /**
         * The Mercado Libre item ID, such as MLM178237632.
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get Mercado Libre product sales history through LinkFox. */
    "linkfox.get_mercado_item_history": {
      input: {
        /**
         * The Mercado Libre item ID, such as MLM178237632.
         * @minLength 1
         */
        itemId: string;
        /** The Mercado Libre catalog product ID, such as MLM21333. */
        productId?: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get new product opportunities in a Mercado Libre category through LinkFox. */
    "linkfox.get_mercado_new_item_opportunities": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC" | "MCO";
        /**
         * The Mercado Libre category ID.
         * @minLength 1
         */
        categoryId: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get analytics for one Ozon product through LinkFox and MPSTATS. */
    "linkfox.get_ozon_product": {
      input: {
        /** The Ozon product SKU. */
        productId: number | string;
        /**
         * The first statistics date, no later than yesterday.
         * @format date
         */
        startDate?: string;
        /**
         * The last statistics date, no later than yesterday.
         * @format date
         */
        endDate?: string;
        /** Whether to include fulfillment-by-seller data. */
        includeFbs?: boolean;
      };
      output: {
        /**
         * The number of records returned on this page.
         * @minimum 0
         */
        total: number;
        /** The Ozon products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** Ozon product lookup failures. */
        failures: Array<Record<string, unknown>>;
        /** The number of successful Ozon product lookups. */
        successCount: number | null;
        /** The number of failed Ozon product lookups. */
        failedCount: number | null;
        /** The LinkFox request duration in milliseconds. */
        costTime: number | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Get daily analytics trends for one Ozon product through LinkFox and MPSTATS. */
    "linkfox.get_ozon_product_trend": {
      input: {
        /** The Ozon product SKU. */
        productId: number;
        /**
         * The first statistics date, no later than yesterday.
         * @format date
         */
        startDate?: string;
        /**
         * The last statistics date, no later than yesterday.
         * @format date
         */
        endDate?: string;
        /** Whether to include fulfillment-by-seller data. */
        includeFbs?: boolean;
        /** Whether to include search position and visibility statistics. */
        includeSearchStats?: boolean;
      };
      output: {
        /**
         * The number of daily data points returned.
         * @minimum 0
         */
        total: number;
        /** The daily Ozon trend data points. */
        data: Array<Record<string, unknown>>;
        /** The LinkFox request duration in milliseconds. */
        costTime: number | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Get an Ozon product snapshot and sales history through LinkFox and Seerfar. */
    "linkfox.get_seerfar_ozon_product": {
      input: {
        /**
         * A single Ozon SKU as a string.
         * @minLength 1
         */
        sku: string;
        /**
         * The sales statistics window; product metadata remains a current snapshot.
         * @default "past_30_days"
         */
        dateRange?: "past_7_days" | "past_30_days" | "past_60_days" | "past_90_days" | "past_180_days" | "past_365_days";
        /**
         * The supplier user ID.
         * @maxLength 1000
         */
        uId?: string;
        /**
         * The member ID that owns the supplier data.
         * @maxLength 1000
         */
        memberId?: string;
      };
      output: {
        /** The LinkFox token usage when returned. */
        costToken?: number;
        /** The request duration in milliseconds. */
        costTime?: number;
        /** The supplier display type. */
        type?: string;
        /** Supplier display columns. */
        columns?: Array<Record<string, unknown>>;
        /** The number of matching records; product detail returns 0 or 1. */
        total: number;
        /** Returned supplier records with original metrics and currency units. */
        data: Array<Record<string, unknown>>;
        /** Product records, duplicated in data; do not count both arrays. */
        products?: Array<Record<string, unknown>>;
        /** Total sales units in the statistics window. */
        totalSales?: number;
        /** Average daily sales units. */
        dailySales?: number;
        /** Total revenue in RUB. */
        totalRevenue?: number;
        /** Available stock. */
        stock?: number;
        /** The actual statistics start date. */
        startDate?: string;
        /** The actual statistics end date. */
        endDate?: string;
        /** Daily sales, revenue, price, stock and review history. */
        salesTrendVOList?: Array<Record<string, unknown>>;
        /** Historical category ranks. */
        categoryRanks?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get public details for one TikTok Shop product through LinkFox. */
    "linkfox.get_tiktok_shop_product": {
      input: {
        /**
         * A 19-digit product identifier or supported TikTok product URL.
         * @minLength 1
         */
        productInput: string;
        /** The TikTok Shop region. */
        region?: "US" | "GB" | "ID" | "MY" | "TH" | "VN" | "PH" | "SG" | "DE" | "FR" | "IT" | "ES";
      };
      output: {
        /**
         * The number of returned records.
         * @minimum 0
         */
        total: number;
        /** The records returned by LinkFox. */
        data: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Get patent abstract image URLs through LinkFox and Patsnap. */
    "linkfox.get_zhihuiya_patent_abstract_images": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Get detailed patent bibliographic records through LinkFox and Patsnap. */
    "linkfox.get_zhihuiya_patent_bibliography": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Get patent and non-patent documents cited by the specified patents through LinkFox and Patsnap. */
    "linkfox.get_zhihuiya_patent_citations": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Get patents that cite the specified patents and citation counts through LinkFox and Patsnap. */
    "linkfox.get_zhihuiya_patent_cited_by": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Get original patent claims through LinkFox and Patsnap. */
    "linkfox.get_zhihuiya_patent_claims": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Get original patent description sections through LinkFox and Patsnap. */
    "linkfox.get_zhihuiya_patent_descriptions": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Get simple, INPADOC, and Patsnap patent families through LinkFox. */
    "linkfox.get_zhihuiya_patent_families": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Get patent full-text image URLs through LinkFox and Patsnap. */
    "linkfox.get_zhihuiya_patent_fulltext_images": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Get patent legal statuses and events through LinkFox and Patsnap. */
    "linkfox.get_zhihuiya_patent_legal_status": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Get patent PDF download URLs through LinkFox and Patsnap. */
    "linkfox.get_zhihuiya_patent_pdfs": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Get compact patent bibliographic records through LinkFox and Patsnap. */
    "linkfox.get_zhihuiya_patent_simple_bibliography": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** List high-performing 1688 products from LinkFox rankings. */
    "linkfox.list_1688_hot_products": {
      input: {
        /**
         * A Chinese product search keyword.
         * @maxLength 50
         */
        keyWord?: string;
        /**
         * A 1688 product URL to use as the search seed.
         * @format uri
         */
        goodsUrl?: string;
        /** Up to twenty 1688 product identifiers separated by Chinese enumeration commas. */
        productIds?: string;
        /** The search match mode, where 1 is fuzzy and 3 is exact. */
        searchType?: 1 | 3;
        /** The result sort direction. */
        sortType?: "desc" | "asc";
        /**
         * The one-based page number.
         * @minimum 1
         */
        pageIndex?: number;
        /**
         * The number of products per page.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The minimum wholesale price.
         * @minimum 0
         */
        beginPrice?: number;
        /**
         * The maximum wholesale price.
         * @minimum 0
         */
        endPrice?: number;
        /**
         * The minimum dropshipping price.
         * @minimum 0
         */
        beginConsignPrice?: number;
        /**
         * The maximum dropshipping price.
         * @minimum 0
         */
        endConsignPrice?: number;
        /**
         * The minimum sales order count.
         * @minimum 0
         */
        beginOrderCount?: number;
        /**
         * The maximum sales order count.
         * @minimum 0
         */
        endOrderCount?: number;
        /**
         * The minimum units sold.
         * @minimum 0
         */
        beginSaleCount?: number;
        /**
         * The maximum units sold.
         * @minimum 0
         */
        endSaleCount?: number;
        /** The supplier type, where 0 is any, 1 is shop, and 2 is factory. */
        companyType?: 0 | 1 | 2;
        /** The 1688 offer badge filter. */
        offerType?: 0 | 2 | 3 | 4 | 5 | 6;
        /**
         * The ranking period date.
         * @format date
         */
        date?: string;
        /** The ranking period type, where 2 is weekly and 3 is monthly. */
        pageType?: 2 | 3;
        /** The billboard sort field. */
        sortField?: "orderCount" | "saleCount" | "saleVolume" | "offerCreateTime" | "price" | "consignPrice";
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** List or refresh Amazon Ads profiles through LinkFox. */
    "linkfox.list_amazon_ads_profiles": {
      input: {
        /** Whether LinkFox should refresh profiles from Amazon Ads. */
        refresh?: boolean;
      };
      output: {
        /** The available Amazon Ads profiles. */
        profiles: Array<Record<string, unknown>>;
        /**
         * The number of returned profiles.
         * @minimum 0
         */
        total: number;
        /** Whether LinkFox refreshed the profiles from Amazon Ads. */
        refreshed: boolean;
      };
    };
    /** List recent Amazon policy, regulation, compliance, and marketplace news through LinkFox. */
    "linkfox.list_amazon_policy_updates": {
      input: {
        /** The Amazon marketplace code. */
        site?: "US" | "JP" | "UK" | "AU" | "BE" | "BR" | "CA" | "EG" | "FR" | "DE" | "IN" | "IT" | "MX" | "NL" | "PL" | "SA" | "SG" | "ES" | "SE" | "TR" | "AE" | "ZA" | "IE";
        /** The inclusive publication-time lower bound in yyyy-MM-dd HH:mm:ss format. */
        publishedAtGte?: string;
        /** The inclusive publication-time upper bound in yyyy-MM-dd HH:mm:ss format. */
        publishedAtLte?: string;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /**
         * The number of returned records.
         * @minimum 0
         */
        total: number;
        /** The records returned by LinkFox. */
        data: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Retrieve Amazon product reviews through LinkFox. */
    "linkfox.list_amazon_product_reviews": {
      input: {
        /**
         * The Amazon ASIN whose reviews should be retrieved.
         * @minLength 1
         */
        asin: string;
        /** The Amazon marketplace domain suffix. */
        domainCode?: "com" | "ca" | "co.uk" | "in" | "de" | "fr" | "it" | "es" | "co.jp" | "com.au" | "com.br" | "nl" | "se" | "com.mx" | "ae";
        /**
         * The number of one-star reviews to retrieve.
         * @minimum 0
         * @maximum 100
         */
        star1Num?: number;
        /**
         * The number of two-star reviews to retrieve.
         * @minimum 0
         * @maximum 100
         */
        star2Num?: number;
        /**
         * The number of three-star reviews to retrieve.
         * @minimum 0
         * @maximum 100
         */
        star3Num?: number;
        /**
         * The number of four-star reviews to retrieve.
         * @minimum 0
         * @maximum 100
         */
        star4Num?: number;
        /**
         * The number of five-star reviews to retrieve.
         * @minimum 0
         * @maximum 100
         */
        star5Num?: number;
        /**
         * A keyword used to filter review text.
         * @maxLength 1000
         */
        filterByKeyword?: string;
        /** The review sort order. */
        sortBy?: "recent" | "helpful";
        /** Whether to include all reviews or verified purchases only. */
        reviewerType?: "all_reviews" | "avp_only_reviews";
        /** Whether to include all reviews or only reviews with media. */
        mediaType?: "all_contents" | "media_reviews_only";
        /** Whether to include all product formats or only the current format. */
        formatType?: "all_formats" | "current_format";
      };
      output: {
        /** The total review count when provided. */
        total: number | null;
        /** The Amazon reviews returned by LinkFox. */
        reviews: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** List Amazon Ads accounts authorized through LinkFox. */
    "linkfox.list_authorized_amazon_ads_accounts": {
      input: Record<string, never>;
      output: {
        /** The authorized Amazon stores. */
        stores: Array<Record<string, unknown>>;
        /**
         * The number of authorized stores.
         * @minimum 0
         */
        total: number;
      };
    };
    /** List Amazon stores authorized through LinkFox. */
    "linkfox.list_authorized_amazon_stores": {
      input: Record<string, never>;
      output: {
        /** The authorized Amazon stores. */
        stores: Array<Record<string, unknown>>;
        /**
         * The number of authorized stores.
         * @minimum 0
         */
        total: number;
      };
    };
    /** List products associated with a TikTok ad through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_ad_products": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The ad ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List commercial TikTok creator rankings through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_commercial_creators": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The ranking date in YYYYMMDD format.
         * @minLength 1
         * @pattern ^[0-9]{8}$
         */
        date: string;
        /** The ranking period: daily, weekly, monthly, or the supplier codes 0, 1, 2. */
        granularity: "daily" | "weekly" | "monthly" | "0" | "1" | "2";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
        /** The creator category. */
        creatorCategory?: string;
        /** The product category. */
        productCategory?: string;
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: total_gmv:desc.
         * @default "total_gmv:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List TikTok creator agencies ranked by performance through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_creator_agencies": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
        /** The supplier category identifier. */
        category?: string;
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: gmv_30d:desc.
         * @default "gmv_30d:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List live streams associated with a TikTok creator through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_creator_lives": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The creator ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List products associated with a TikTok creator through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_creator_products": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The creator ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List videos associated with a TikTok creator through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_creator_videos": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The creator ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List TikTok creator follower-growth rankings through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_growing_creators": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The ranking date in YYYYMMDD format.
         * @minLength 1
         * @pattern ^[0-9]{8}$
         */
        date: string;
        /** The ranking period: daily, weekly, monthly, or the supplier codes 0, 1, 2. */
        granularity: "daily" | "weekly" | "monthly" | "0" | "1" | "2";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
        /** The creator category. */
        creatorCategory?: string;
        /** The product category. */
        productCategory?: string;
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: new_follower_count:desc.
         * @default "new_follower_count:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List products associated with a TikTok live stream through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_live_products": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The live room ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List most-promoted TikTok product rankings through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_most_promoted_products": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The ranking date in YYYYMMDD format.
         * @minLength 1
         * @pattern ^[0-9]{8}$
         */
        date: string;
        /** The ranking period: daily, weekly, monthly, or the supplier codes 0, 1, 2. */
        granularity: "daily" | "weekly" | "monthly" | "0" | "1" | "2";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
        /** The supplier category identifier. */
        category?: string;
        /** The supplier seller type: 1 overseas non-brand, 2 local, 3 brand, 4 non-brand. */
        sellerType?: "1" | "2" | "3" | "4";
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: related_creator_count:desc.
         * @default "related_creator_count:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List most-promoted TikTok shop rankings through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_most_promoted_shops": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The ranking date in YYYYMMDD format.
         * @minLength 1
         * @pattern ^[0-9]{8}$
         */
        date: string;
        /** The ranking period: daily, weekly, monthly, or the supplier codes 0, 1, 2. */
        granularity: "daily" | "weekly" | "monthly" | "0" | "1" | "2";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
        /** The supplier category identifier. */
        category?: string;
        /** The supplier shop type code. */
        shopType?: "1" | "2" | "3" | "4";
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: related_creator_count:desc.
         * @default "related_creator_count:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List newly listed TikTok product rankings through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_new_products": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
        /** The supplier category identifier. */
        category?: string;
        /** The supplier seller type: 1 overseas non-brand, 2 local, 3 brand, 4 non-brand. */
        sellerType?: "1" | "2" | "3" | "4";
        /**
         * The earliest listing date in YYYYMMDD format.
         * @pattern ^[0-9]{8}$
         */
        listedFrom?: string;
        /**
         * The latest listing date in YYYYMMDD format.
         * @pattern ^[0-9]{8}$
         */
        listedTo?: string;
        /** The supplier product status code. */
        productStatus?: "1" | "2" | "3" | "4";
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: gmv_3d:desc.
         * @default "gmv_3d:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List creators associated with a TikTok product through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_product_creators": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The product ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List live streams associated with a TikTok product through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_product_lives": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The product ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List TikTok product reviews through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_product_reviews": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The product ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List videos associated with a TikTok product through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_product_videos": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The product ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List creators associated with a TikTok shop through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_shop_creators": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The shop ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List products associated with a TikTok shop through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_shop_products": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The shop ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List videos associated with a TikTok shop through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_shop_videos": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The shop ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List top-selling TikTok product rankings through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_top_selling_products": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The ranking date in YYYYMMDD format.
         * @minLength 1
         * @pattern ^[0-9]{8}$
         */
        date: string;
        /** The ranking period: daily, weekly, monthly, or the supplier codes 0, 1, 2. */
        granularity: "daily" | "weekly" | "monthly" | "0" | "1" | "2";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
        /** The supplier category identifier. */
        category?: string;
        /** The supplier seller type: 1 overseas non-brand, 2 local, 3 brand, 4 non-brand. */
        sellerType?: "1" | "2" | "3" | "4";
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: interval_sold_count:desc.
         * @default "interval_sold_count:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List top-selling TikTok shop rankings through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_top_selling_shops": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The ranking date in YYYYMMDD format.
         * @minLength 1
         * @pattern ^[0-9]{8}$
         */
        date: string;
        /** The ranking period: daily, weekly, monthly, or the supplier codes 0, 1, 2. */
        granularity: "daily" | "weekly" | "monthly" | "0" | "1" | "2";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
        /** The supplier category identifier. */
        category?: string;
        /** The supplier shop type code. */
        shopType?: "1" | "2" | "3" | "4";
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: interval_sold_count:desc.
         * @default "interval_sold_count:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List products associated with a TikTok video through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_video_products": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The video ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List TikTok video comments through LinkFox and Chuhaijiang. */
    "linkfox.list_chuhaijiang_video_reviews": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The video ID from the corresponding search result, passed as a JSON string.
         * @minLength 1
         */
        id: string;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** List newly ranked TikTok Shop products from EchoTik through LinkFox. */
    "linkfox.list_echotik_new_products": {
      input: {
        /**
         * The ranking date.
         * @format date
         */
        date: string;
        /** The TikTok Shop region. */
        region?: "US" | "ID" | "TH" | "PH" | "MY" | "VN" | "GB" | "MX" | "SG" | "SA" | "BR" | "ES" | "JP" | "DE" | "IT" | "FR";
        /**
         * The one-based page number.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of products per page.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** List TikTok videos associated with a product through LinkFox and EchoTik. */
    "linkfox.list_echotik_product_videos": {
      input: {
        /**
         * The TikTok Shop product identifier.
         * @minLength 1
         * @maxLength 1000
         */
        productId: string;
        /**
         * The creator identifier used to filter videos.
         * @maxLength 1000
         */
        userId?: string;
        /** The product video sort field. */
        productVideoSortField?: 1 | 2 | 3 | 4 | 5 | 6;
        /** The result sort direction. */
        sortType?: 0 | 1;
        /**
         * The earliest creation time as a Unix timestamp.
         * @minimum 0
         */
        minCreateTime?: number;
        /**
         * The latest creation time as a Unix timestamp.
         * @minimum 0
         */
        maxCreateTime?: number;
        /**
         * The one-based page number.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of videos per page, in multiples of ten.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /**
         * The number of returned videos.
         * @minimum 0
         */
        total: number;
        /** The videos returned by EchoTik. */
        videos: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** List products belonging to a TikTok Shop seller through LinkFox and EchoTik. */
    "linkfox.list_echotik_seller_products": {
      input: {
        /**
         * The TikTok Shop seller identifier.
         * @minLength 1
         * @maxLength 1000
         */
        sellerId: string;
        /** The product sort field. */
        sellerProductSortField?: 1 | 2 | 3 | 4 | 5;
        /** The result sort direction. */
        sortType?: 0 | 1;
        /**
         * The one-based page number.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of products per page, in multiples of ten.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** List daily, weekly, or monthly TikTok video rankings through LinkFox and EchoTik. */
    "linkfox.list_echotik_video_rankings": {
      input: {
        /**
         * The ranking date.
         * @format date
         */
        date: string;
        /** The daily, weekly, or monthly ranking type. */
        rankType: 1 | 2 | 3;
        /** The TikTok region. */
        region: "US" | "ID" | "TH" | "PH" | "MY" | "VN" | "GB" | "MX" | "SG" | "SA" | "BR" | "ES" | "JP" | "DE" | "IT" | "FR";
        /** The video ranking metric. */
        videoRankField: 1 | 2;
        /** The associated first-level product category identifier. */
        productCategoryId?: string;
        /** Whether the video was created by AI. */
        createdByAi?: "true" | "false";
        /**
         * The one-based page number.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of videos per page, in multiples of ten.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /**
         * The number of returned videos.
         * @minimum 0
         */
        total: number;
        /** The videos returned by EchoTik. */
        videos: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** List top-selling TikTok products from FastMoss through LinkFox. */
    "linkfox.list_fastmoss_top_selling_products": {
      input: {
        /** The TikTok Shop market region. */
        region: "US" | "GB" | "MX" | "ES" | "ID" | "VN" | "MY" | "TH" | "PH";
        /** The ranking date period. */
        dateInfo: {
          /** The ranking time granularity. */
          type: "day" | "week" | "month";
          /**
           * The date value matching the selected granularity.
           * @minLength 1
           */
          value: string;
        };
        /** An English TikTok category name. */
        category?: string;
        /** The ranking sort rule. */
        orderby?: {
          /** The ranking sort field. */
          field: "units_sold" | "gmv" | "total_units_sold" | "total_gmv" | "growth_rate";
          /** The ranking sort direction. */
          order: "desc" | "asc";
        };
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of products per page.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Browse Kalodata TikTok product rankings through LinkFox. */
    "linkfox.list_kalodata_products": {
      input: {
        /** The TikTok Shop market region, such as US. */
        region?: string;
        /** A relative range such as last7Day or last30Day. */
        dateRange?: string;
        /** The requested currency code, such as USD. */
        currency?: string;
        /** The requested locale, such as en-US or zh-CN. */
        language?: string;
        /** A Kalodata-supported sort specification. */
        sortField?: Record<string, unknown>;
        /**
         * The one-based page number.
         * @minimum 1
         * @maximum 5
         */
        pageNumber?: number;
        /**
         * The number of products per page.
         * @minimum 5
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Get reviews for a Mercado Libre product through LinkFox. */
    "linkfox.list_mercado_item_reviews": {
      input: {
        /**
         * The Mercado Libre item ID, such as MLM178237632.
         * @minLength 1
         */
        itemId: string;
        /**
         * The page number, starting at 1. Default: 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records per page. Default: 50.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get top brands in a Mercado Libre category through LinkFox. */
    "linkfox.list_mercado_top_brands": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC" | "MCO";
        /**
         * The Mercado Libre category ID.
         * @minLength 1
         */
        categoryId: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get top products in a Mercado Libre category through LinkFox. */
    "linkfox.list_mercado_top_items": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC" | "MCO";
        /**
         * The Mercado Libre category ID.
         * @minLength 1
         */
        categoryId: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Get top sellers in a Mercado Libre category through LinkFox. */
    "linkfox.list_mercado_top_sellers": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC" | "MCO";
        /**
         * The Mercado Libre category ID.
         * @minLength 1
         */
        categoryId: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** List Ozon products for a brand through LinkFox and MPSTATS. */
    "linkfox.list_ozon_brand_products": {
      input: {
        /**
         * The Ozon brand display name in Russian or Latin characters.
         * @minLength 1
         */
        brandName: string;
        /**
         * The first statistics date, no later than yesterday.
         * @format date
         */
        startDate?: string;
        /**
         * The last statistics date, no later than yesterday.
         * @format date
         */
        endDate?: string;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of products per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The snake_case metric field used for sorting. */
        sortField?: string;
        /** The result sort direction. */
        sortDirection?: "asc" | "desc";
        /** The result currency code, such as RUB, USD, EUR, or CNY. */
        currency?: string;
        /** A custom exchange rate used with a non-default currency. */
        currencyRate?: number;
        /** Whether to include fulfillment-by-seller data. */
        includeFbs?: boolean;
        /** Numeric product filters combined with AND. */
        filters?: Array<{
          /**
           * The snake_case metric field to filter.
           * @minLength 1
           */
          field: string;
          /** The numeric comparison operator. */
          op: "GTE" | "LTE" | "GT" | "LT" | "EQ" | "NOT_EQ" | "BETWEEN";
          /** The comparison value or lower bound. */
          value: number;
          /** The inclusive upper bound for BETWEEN. */
          value2?: number;
        }>;
      };
      output: {
        /**
         * The number of records returned on this page.
         * @minimum 0
         */
        total: number;
        /** The Ozon products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** Ozon product lookup failures. */
        failures: Array<Record<string, unknown>>;
        /** The number of successful Ozon product lookups. */
        successCount: number | null;
        /** The number of failed Ozon product lookups. */
        failedCount: number | null;
        /** The LinkFox request duration in milliseconds. */
        costTime: number | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** List Ozon products in a category through LinkFox and MPSTATS. */
    "linkfox.list_ozon_category_products": {
      input: {
        /**
         * The full Russian Ozon category path separated by slashes.
         * @minLength 1
         */
        categoryPath: string;
        /**
         * The first statistics date, no later than yesterday.
         * @format date
         */
        startDate?: string;
        /**
         * The last statistics date, no later than yesterday.
         * @format date
         */
        endDate?: string;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of products per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The snake_case metric field used for sorting. */
        sortField?: string;
        /** The result sort direction. */
        sortDirection?: "asc" | "desc";
        /** The result currency code, such as RUB, USD, EUR, or CNY. */
        currency?: string;
        /** A custom exchange rate used with a non-default currency. */
        currencyRate?: number;
        /** Whether to include fulfillment-by-seller data. */
        includeFbs?: boolean;
        /** Numeric product filters combined with AND. */
        filters?: Array<{
          /**
           * The snake_case metric field to filter.
           * @minLength 1
           */
          field: string;
          /** The numeric comparison operator. */
          op: "GTE" | "LTE" | "GT" | "LT" | "EQ" | "NOT_EQ" | "BETWEEN";
          /** The comparison value or lower bound. */
          value: number;
          /** The inclusive upper bound for BETWEEN. */
          value2?: number;
        }>;
      };
      output: {
        /**
         * The number of records returned on this page.
         * @minimum 0
         */
        total: number;
        /** The Ozon products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** Ozon product lookup failures. */
        failures: Array<Record<string, unknown>>;
        /** The number of successful Ozon product lookups. */
        successCount: number | null;
        /** The number of failed Ozon product lookups. */
        failedCount: number | null;
        /** The LinkFox request duration in milliseconds. */
        costTime: number | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** List Ozon products for a seller through LinkFox and MPSTATS. */
    "linkfox.list_ozon_seller_products": {
      input: {
        /**
         * The numeric Ozon seller identifier.
         * @pattern ^[0-9]+$
         */
        sellerId: string;
        /**
         * The first statistics date, no later than yesterday.
         * @format date
         */
        startDate?: string;
        /**
         * The last statistics date, no later than yesterday.
         * @format date
         */
        endDate?: string;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of products per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The snake_case metric field used for sorting. */
        sortField?: string;
        /** The result sort direction. */
        sortDirection?: "asc" | "desc";
        /** The result currency code, such as RUB, USD, EUR, or CNY. */
        currency?: string;
        /** A custom exchange rate used with a non-default currency. */
        currencyRate?: number;
        /** Whether to include fulfillment-by-seller data. */
        includeFbs?: boolean;
        /** Numeric product filters combined with AND. */
        filters?: Array<{
          /**
           * The snake_case metric field to filter.
           * @minLength 1
           */
          field: string;
          /** The numeric comparison operator. */
          op: "GTE" | "LTE" | "GT" | "LT" | "EQ" | "NOT_EQ" | "BETWEEN";
          /** The comparison value or lower bound. */
          value: number;
          /** The inclusive upper bound for BETWEEN. */
          value2?: number;
        }>;
      };
      output: {
        /**
         * The number of records returned on this page.
         * @minimum 0
         */
        total: number;
        /** The Ozon products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** Ozon product lookup failures. */
        failures: Array<Record<string, unknown>>;
        /** The number of successful Ozon product lookups. */
        successCount: number | null;
        /** The number of failed Ozon product lookups. */
        failedCount: number | null;
        /** The LinkFox request duration in milliseconds. */
        costTime: number | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** List Ozon category products and aggregate statistics through LinkFox and Seerfar. */
    "linkfox.list_seerfar_ozon_category_products": {
      input: {
        /**
         * The Seerfar Ozon category ID; join category levels with underscores.
         * @minLength 1
         */
        categoryId: string;
        /** Pagination and sorting. */
        page: {
          /**
           * The result page, starting at 1.
           * @minimum 1
           * @default 1
           */
          page?: number;
          /**
           * Records per page; at most 20.
           * @minimum 1
           * @maximum 20
           * @default 20
           */
          pageSize?: number;
          /** Sort rules. */
          orders?: Array<{
            /**
             * A response metric such as sales, price, revenue or reviewRating.
             * @minLength 1
             */
            field: string;
            /** Sort direction. */
            direction: "DESC" | "ASC";
          }>;
        };
        /**
         * A historical month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        date?: string;
        /** Fulfillment method. */
        fulfillment?: "FBO" | "FBS" | "RFBS" | "FBP" | "OZON";
        /**
         * The supplier user ID.
         * @maxLength 1000
         */
        uId?: string;
        /**
         * The member ID that owns the supplier data.
         * @maxLength 1000
         */
        memberId?: string;
      };
      output: {
        /** The LinkFox token usage when returned. */
        costToken?: number;
        /** The request duration in milliseconds. */
        costTime?: number;
        /** The supplier display type. */
        type?: string;
        /** Supplier display columns. */
        columns?: Array<Record<string, unknown>>;
        /** The number of records on this page, not the overall product count. */
        total: number;
        /** Returned supplier records with original metrics and currency units. */
        data: Array<Record<string, unknown>>;
        /** Product records, duplicated in data; do not count both arrays. */
        products?: Array<Record<string, unknown>>;
        /** Total sales units in the statistics window. */
        totalSales?: number;
        /** Total revenue in RUB. */
        totalRevenue?: number;
        /** Average price in RUB. */
        avgPrice?: number;
        /** Average rating. */
        rating?: number;
        /** The actual statistics start date. */
        startDate?: string;
        /** The actual statistics end date. */
        endDate?: string;
        /** Whether another result page is available. */
        hasNextPage?: boolean;
        /** The echoed category ID. */
        id?: string;
        /** Fulfillment counts, not domestic or cross-border seller types. */
        sellerType?: Record<string, unknown>;
        /** Category metadata. */
        categoryInfo?: Record<string, unknown>;
        /** Seasonality strength. */
        seasonalityAmplitude?: string;
        /** Seasonality phase. */
        seasonalityCoef?: string;
        [key: string]: unknown;
      };
    };
    /** List Ozon shop products and aggregate statistics through LinkFox and Seerfar. */
    "linkfox.list_seerfar_ozon_shop_products": {
      input: {
        /** The seller ID; negative values identify Ozon-operated sellers. */
        id: number;
        /** Pagination and sorting. */
        page: {
          /**
           * The result page, starting at 1.
           * @minimum 1
           * @default 1
           */
          page?: number;
          /**
           * Records per page; at most 20.
           * @minimum 1
           * @maximum 20
           * @default 20
           */
          pageSize?: number;
          /** Sort rules. */
          orders?: Array<{
            /**
             * A response metric such as sales, price, revenue or reviewRating.
             * @minLength 1
             */
            field: string;
            /** Sort direction. */
            direction: "DESC" | "ASC";
          }>;
        };
        /**
         * The supplier user ID.
         * @maxLength 1000
         */
        uId?: string;
        /**
         * The member ID that owns the supplier data.
         * @maxLength 1000
         */
        memberId?: string;
      };
      output: {
        /** The LinkFox token usage when returned. */
        costToken?: number;
        /** The request duration in milliseconds. */
        costTime?: number;
        /** The supplier display type. */
        type?: string;
        /** Supplier display columns. */
        columns?: Array<Record<string, unknown>>;
        /** The number of records on this page, not the overall product count. */
        total: number;
        /** Returned supplier records with original metrics and currency units. */
        data: Array<Record<string, unknown>>;
        /** Product records, duplicated in data; do not count both arrays. */
        products?: Array<Record<string, unknown>>;
        /** Total sales units in the statistics window. */
        totalSales?: number;
        /** Total revenue in RUB. */
        totalRevenue?: number;
        /** Average daily sales units. */
        dailySales?: number;
        /** Average rating. */
        rating?: number;
        /** The overall shop product count, not the current page size. */
        productCount?: number;
        /** Whether another result page is available. */
        hasNextPage?: boolean;
        /** Shop fulfillment distribution; unlike product fulfillment arrays. */
        fulfillment?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List Sponsored Products campaigns through the LinkFox Amazon Ads gateway. */
    "linkfox.list_sp_campaigns": {
      input: {
        /**
         * The Amazon Ads profile identifier.
         * @exclusiveMinimum 0
         */
        profileId: number;
        /** The Amazon Ads region. */
        region: "NA" | "EU" | "FE";
        /** Campaign identifier filters. */
        campaignIdFilter?: {
          /** Values to include. */
          include?: Array<string>;
          /** Values to exclude. */
          exclude?: Array<string>;
        };
        /** Campaign state filters. */
        stateFilter?: {
          /** Values to include. */
          include?: Array<string>;
          /** Values to exclude. */
          exclude?: Array<string>;
        };
        /** Campaign name filters. */
        nameFilter?: {
          /** The text matching mode. */
          queryTermMatchType: "BROAD_MATCH" | "EXACT_MATCH";
          /**
           * Campaign name terms to include.
           * @minItems 1
           */
          include: Array<string>;
        };
        /** Portfolio identifier filters. */
        portfolioIdFilter?: {
          /** Values to include. */
          include?: Array<string>;
          /** Values to exclude. */
          exclude?: Array<string>;
        };
        /** The Amazon Ads next-page token. */
        nextToken?: string;
        /**
         * The maximum campaigns per page. Defaults to 100.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** Whether to follow Amazon Ads pagination automatically. Defaults to true. */
        fetchAll?: boolean;
        /**
         * The maximum pages to follow when fetchAll is true. Defaults to 50.
         * @minimum 1
         * @maximum 50
         */
        maxPages?: number;
      };
      output: {
        /** The Sponsored Products campaigns. */
        campaigns: Array<Record<string, unknown>>;
        /**
         * The number of returned campaigns.
         * @minimum 0
         */
        total: number;
        /** The next-page token when more campaigns remain. */
        nextToken: string | null;
      };
    };
    /** Mine Ozon keywords from a seed keyword through LinkFox and Seerfar. */
    "linkfox.mine_seerfar_ozon_keywords": {
      input: {
        /**
         * The seed keyword.
         * @minLength 1
         * @maxLength 1000
         */
        keyword: string;
        /** Pagination and sorting. */
        page: {
          /**
           * The result page, starting at 1.
           * @minimum 1
           * @default 1
           */
          page?: number;
          /**
           * Records per page.
           * @minimum 1
           * @default 20
           */
          pageSize?: number;
          /** Sort rules. */
          orders?: Array<{
            /**
             * A response metric such as sales, price, revenue or reviewRating.
             * @minLength 1
             */
            field: string;
            /** Sort direction. */
            direction: "DESC" | "ASC";
          }>;
        };
        /** Keyword match mode: 0 exact, 1 fuzzy. */
        matchType?: 0 | 1;
        /**
         * Keywords to include.
         * @maxItems 1000
         */
        includeKeywords?: Array<string>;
        /**
         * Keywords to exclude.
         * @maxItems 1000
         */
        excludeKeywords?: Array<string>;
        /** Keyword word count range. */
        wordCount?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Search popularity range. */
        searchVolume?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** 30-day search growth range; negative values are allowed. */
        searchChange30?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Product view count range. */
        productViews?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Product count range. */
        products?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Seller count range. */
        sellers?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Price range in RUB. */
        price?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Market space range. */
        marketSpace?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Conversion concentration range. */
        conversionSharing?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Relevance to the seed keyword range. */
        relevancy?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Add-to-cart count range. */
        uniqQueriesWCa?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Add-to-cart conversion rate range. */
        ca?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Title density range. */
        titleDensity?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Advertising competitor count range. */
        adRivalCount?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** The supplier user ID. */
        uId?: string;
        /** The member ID that owns the supplier data. */
        memberId?: string;
      };
      output: {
        /** The LinkFox token usage when returned. */
        costToken?: number;
        /** The request duration in milliseconds. */
        costTime?: number;
        /** The supplier display type. */
        type?: string;
        /** Supplier display columns. */
        columns?: Array<Record<string, unknown>>;
        /** The total matching record count across pages. */
        total: number;
        /** Returned supplier records with original metrics and currency units. */
        data: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Run a natural-language Amazon Brand Analytics query through LinkFox. */
    "linkfox.query_amazon_aba": {
      input: {
        /**
         * A precise natural-language description of the requested analysis.
         * @minLength 1
         */
        analysisDescription: string;
        /** The Amazon marketplace region code. */
        region?: "US" | "DE" | "BR" | "CA" | "AU" | "JP" | "AE" | "ES" | "FR" | "IT" | "SA" | "TR" | "MX" | "SE" | "NL";
        /** Whether LinkFox should create a CSV download URL for the results. */
        createDownloadUrl?: boolean;
      };
      output: {
        /** Whether LinkFox completed the analysis successfully. */
        success: boolean;
        /** The analysis result tables. */
        tables: Array<Record<string, unknown>>;
        /** The total result count when provided. */
        total: number | null;
        /** The CSV download URL when requested and available. */
        downloadUrl: string | null;
        /** An informational message returned by LinkFox. */
        message: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Find keywords driving traffic to a Mercado Libre product through LinkFox. */
    "linkfox.reverse_search_mercado_item_keywords": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC";
        /**
         * The Mercado Libre item ID, such as MLM178237632.
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Reverse-search Ozon keywords for SKU IDs through LinkFox and Seerfar. */
    "linkfox.reverse_search_seerfar_ozon_keywords": {
      input: {
        /**
         * Up to 20 SKU IDs to reverse-search.
         * @maxItems 20
         */
        skuIds: Array<number>;
        /** Whether to remove variants: 0 keep, 1 remove. */
        hasVariant: 0 | 1;
        /** Pagination and sorting. */
        page: {
          /**
           * The result page, starting at 1.
           * @minimum 1
           * @default 1
           */
          page?: number;
          /**
           * Records per page.
           * @minimum 1
           * @default 20
           */
          pageSize?: number;
          /** Sort rules. */
          orders?: Array<{
            /**
             * A response metric such as sales, price, revenue or reviewRating.
             * @minLength 1
             */
            field: string;
            /** Sort direction. */
            direction: "DESC" | "ASC";
          }>;
        };
        /** Keyword match mode: 0 exact, 1 fuzzy. */
        matchType?: 0 | 1;
        /** Search channels: 0 organic, 1 advertising. */
        type?: Array<"0" | "1">;
        /**
         * A historical month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        historyDate?: string;
        /**
         * Keywords to include.
         * @maxItems 1000
         */
        includeKeywords?: Array<string>;
        /**
         * Keywords to exclude.
         * @maxItems 1000
         */
        excludeKeywords?: Array<string>;
        /** Search popularity range. */
        searchVolume?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** 30-day search growth range; negative values are allowed. */
        searchChange30?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Keyword word count range. */
        wordCount?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Product view count range. */
        productViews?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Product count range. */
        products?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Seller count range. */
        sellers?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Market space range. */
        marketSpace?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Conversion concentration range. */
        conversionSharing?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Add-to-cart count range. */
        uniqQueriesWCa?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Add-to-cart conversion rate range. */
        ca?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Conversion rate range. */
        conversion?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Title density range. */
        titleDensity?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Advertising competitor count range. */
        adRivalCount?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Advertising rank range. */
        adRank?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Organic search rank range. */
        naturalRank?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Exposure range. */
        exposure?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** The supplier user ID. */
        uId?: string;
        /** The member ID that owns the supplier data. */
        memberId?: string;
      };
      output: {
        /** The LinkFox token usage when returned. */
        costToken?: number;
        /** The request duration in milliseconds. */
        costTime?: number;
        /** The supplier display type. */
        type?: string;
        /** Supplier display columns. */
        columns?: Array<Record<string, unknown>>;
        /** The total matching record count across pages. */
        total: number;
        /** Returned supplier records with original metrics and currency units. */
        data: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Find visually similar 1688 products through LinkFox. */
    "linkfox.search_1688_by_image": {
      input: {
        /**
         * A publicly accessible PNG or JPEG image URL.
         * @maxLength 1000
         * @format uri
         */
        imageUrl?: string;
        /** A LinkFox 1688 image identifier returned by a previous page. */
        imageId?: string;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of products per page.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** The minimum price in CNY. */
        priceStart?: string;
        /** The maximum price in CNY. */
        priceEnd?: string;
        /** Comma-separated official 1688 filter values. */
        filter?: string;
        /** A JSON string such as {"price":"asc"}. */
        sort?: string;
        /** A keyword used to narrow the image-search results. */
        keyword?: string;
        /** An official 1688 product collection identifier. */
        productCollectionId?: string;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search the LinkFox 1688 sourcing database. */
    "linkfox.search_1688_products": {
      input: {
        /**
         * A Chinese product search keyword.
         * @maxLength 50
         */
        keyWord?: string;
        /**
         * A 1688 product URL to use as the search seed.
         * @format uri
         */
        goodsUrl?: string;
        /** Up to twenty comma-separated 1688 product identifiers. */
        productIds?: string;
        /** The search match mode, where 1 is fuzzy and 3 is exact. */
        searchType?: 1 | 3;
        /** The result sort direction. */
        sortType?: "desc" | "asc";
        /**
         * The one-based page number.
         * @minimum 1
         */
        pageIndex?: number;
        /**
         * The number of products per page.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The minimum wholesale price.
         * @minimum 0
         */
        beginPrice?: number;
        /**
         * The maximum wholesale price.
         * @minimum 0
         */
        endPrice?: number;
        /**
         * The minimum dropshipping price.
         * @minimum 0
         */
        beginConsignPrice?: number;
        /**
         * The maximum dropshipping price.
         * @minimum 0
         */
        endConsignPrice?: number;
        /**
         * The minimum sales order count.
         * @minimum 0
         */
        beginOrderCount?: number;
        /**
         * The maximum sales order count.
         * @minimum 0
         */
        endOrderCount?: number;
        /**
         * The minimum units sold.
         * @minimum 0
         */
        beginSaleCount?: number;
        /**
         * The maximum units sold.
         * @minimum 0
         */
        endSaleCount?: number;
        /** The supplier type, where 0 is any, 1 is shop, and 2 is factory. */
        companyType?: 0 | 1 | 2;
        /** The 1688 offer badge filter. */
        offerType?: 0 | 2 | 3 | 4 | 5 | 6;
        /** The sales statistics period in days. */
        cycle?: "7" | "30";
        /** The product search sort field. */
        sortField?: "orderCount7d" | "saleCount7d" | "saleVolume7d" | "orderCount30d" | "saleCount30d" | "saleVolume30d" | "offerCreateTime" | "price" | "consignPrice";
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Find visually similar Amazon products through LinkFox. */
    "linkfox.search_amazon_by_image": {
      input: {
        /**
         * A publicly accessible source image URL.
         * @maxLength 1000
         * @format uri
         */
        imageUrl: string;
        /** The Amazon marketplace domain. */
        amazonDomain: "amazon.com" | "amazon.co.uk" | "amazon.de" | "amazon.fr" | "amazon.it" | "amazon.es" | "amazon.co.jp" | "amazon.in";
        /** The result sort order. */
        sort?: "default" | "price-asc-rank" | "price-desc-rank" | "rating-asc-rank" | "rating-desc-rank" | "ratings-asc-rank" | "ratings-desc-rank";
        /**
         * The destination postal code for in-market delivery.
         * @maxLength 1000
         */
        deliveryZip?: string;
        /**
         * The destination country or area code for cross-border delivery.
         * @maxLength 1000
         */
        countryOrAreaCode?: string;
        /** Whether to enrich results with available Keepa metrics. */
        aggregateByKeepaData?: boolean;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Screen Amazon commercial opportunities with LinkFox market metrics. */
    "linkfox.search_amazon_opportunities": {
      input: {
        /** The supported Amazon opportunity market. */
        amazonDomain?: "US";
        /**
         * The maximum number of opportunity records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** A keyword fragment to match. */
        keyword?: string;
        /** A normalized niche name fragment to match. */
        nicheName?: string;
        /** The minimum 360-day niche revenue floor in USD. */
        nicheRevenue360dMinUsdAtLeastGte?: number;
        /** The maximum 360-day niche revenue ceiling in USD. */
        nicheRevenue360dMaxUsdAtLeastLte?: number;
        /**
         * The minimum peak monthly search volume.
         * @minimum 0
         */
        nichePeakSearchVolumeAtLeastGte?: number;
        /** The minimum year-over-year search-volume growth percentage. */
        nicheSearchVolumeYoyChangePctAtLeastGte?: number;
        /**
         * The maximum active brand count.
         * @minimum 0
         */
        nicheBrandCountLte?: number;
        /**
         * The maximum top-five product click share percentage.
         * @minimum 0
         * @maximum 100
         */
        nicheTop5ProductClickSharePctAtLeastLte?: number;
        /**
         * The maximum top-five brand share percentage.
         * @minimum 0
         * @maximum 100
         */
        featureTop5BrandSharePctAtLeastLte?: number;
        /** A case-sensitive top-brand name fragment. */
        featureTopBrandsContains?: string;
        /**
         * The minimum acceptable niche price floor in USD.
         * @minimum 0
         */
        priceMinUsdGte?: number;
        /**
         * The maximum acceptable niche price ceiling in USD.
         * @minimum 0
         */
        priceMaxUsdLte?: number;
        /**
         * The maximum mid-tier price click share percentage.
         * @minimum 0
         * @maximum 100
         */
        priceMidClickSharePctAtLeastLte?: number;
        /** The dominant customer gender segment. */
        demoGenderDominant?: "female" | "male" | "mixed" | "unspecified";
        /** The primary customer income tier. */
        demoPrimaryIncomeTier?: "low" | "middle_low" | "middle" | "middle_upper" | "upper_middle" | "high";
        /** An emerging trend tag fragment. */
        featureEmergingTrendTagsContains?: string;
        /** An uncommon differentiating feature tag fragment. */
        featureUncommonFeatureTagsContains?: string;
        /** The normalized leading negative review topic. */
        reviewNegativeTop1Topic?: string;
        /**
         * The minimum share for the leading negative review topic.
         * @minimum 0
         * @maximum 100
         */
        reviewNegativeTop1PctAtLeastGte?: number;
      };
      output: {
        /** The matching opportunity records. */
        opportunities: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search Amazon storefront products through LinkFox. */
    "linkfox.search_amazon_products": {
      input: {
        /**
         * The localized product keyword to search for.
         * @maxLength 1024
         */
        keyword?: string;
        /** The Amazon marketplace domain. */
        amazonDomain?: "amazon.com" | "amazon.co.uk" | "amazon.de" | "amazon.fr" | "amazon.it" | "amazon.es" | "amazon.co.jp" | "amazon.ca" | "amazon.com.au" | "amazon.com.br" | "amazon.in" | "amazon.nl" | "amazon.se" | "amazon.pl" | "amazon.sg" | "amazon.sa" | "amazon.ae" | "amazon.com.mx" | "amazon.com.tr" | "amazon.com.be" | "amazon.cn" | "amazon.eg";
        /**
         * The optional Amazon category node.
         * @maxLength 1000
         */
        node?: string;
        /**
         * The Amazon locale code, such as en_US or de_DE.
         * @maxLength 1000
         */
        language?: string;
        /** The Amazon storefront sort order. */
        sort?: "relevanceblender" | "price-asc-rank" | "price-desc-rank" | "review-rank" | "date-desc-rank" | "exact-aware-popularity-rank";
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The destination postal code used for storefront simulation.
         * @maxLength 1000
         */
        deliveryZip?: string;
        /** The storefront device profile. */
        device?: "desktop" | "mobile" | "tablet";
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search orders for an authorized Amazon store through LinkFox. */
    "linkfox.search_amazon_store_orders": {
      input: {
        /**
         * The seller identifier returned by the LinkFox store authorization action.
         * @minLength 1
         */
        sellerId: string;
        /** The Amazon Selling Partner region. */
        region: "NA" | "EU" | "FE";
        /**
         * The Amazon marketplace identifiers to search.
         * @minItems 1
         * @maxItems 50
         */
        marketplaceIds: Array<string>;
        /**
         * The inclusive order creation lower bound.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * The exclusive order creation upper bound.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * The inclusive order update lower bound.
         * @format date-time
         */
        lastUpdatedAfter?: string;
        /**
         * The exclusive order update upper bound.
         * @format date-time
         */
        lastUpdatedBefore?: string;
        /** Amazon order fulfillment status filters. */
        fulfillmentStatuses?: Array<string>;
        /** The fulfillment channel filters. */
        fulfilledBy?: Array<"MERCHANT" | "AMAZON">;
        /**
         * The maximum results per page.
         * @minimum 1
         * @maximum 100
         */
        maxResultsPerPage?: number;
        /** The pagination token returned by the previous search. */
        paginationToken?: string;
        /** Additional Amazon Orders API data sections to include. */
        includedData?: Array<string>;
      };
      output: {
        /** The Amazon orders returned by SP-API. */
        orders: Array<Record<string, unknown>>;
        /** The pagination token for the next order page when available. */
        nextToken: string | null;
      };
    };
    /** Search TikTok ads through LinkFox and Chuhaijiang. */
    "linkfox.search_chuhaijiang_ads": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
        /** The search keyword. */
        keyword?: string;
        /** The supplier category identifier. */
        category?: string;
        /** The supplier ad type classification. */
        adType?: string;
        /** Whether to exclude Spark Ads. */
        excludeSparkAds?: boolean;
        /** The minimum view count. */
        minViews?: number;
        /** The maximum view count. */
        maxViews?: number;
        /** The minimum GMV. */
        minGmv?: number;
        /** The maximum GMV. */
        maxGmv?: number;
        /** The minimum ad running days. */
        minDays?: number;
        /** The maximum ad running days. */
        maxDays?: number;
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: gmv:desc.
         * @default "gmv:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Search TikTok creatives through LinkFox and Chuhaijiang. */
    "linkfox.search_chuhaijiang_creatives": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
        /** The search keyword. */
        keyword?: string;
        /** The supplier category identifier. */
        category?: string;
        /** Whether the creative is associated with products. */
        hasProduct?: boolean;
        /** Whether the content is sponsored. */
        isSponsored?: boolean;
        /** Whether the content is AI-generated. */
        isAigc?: boolean;
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: gmv:desc.
         * @default "gmv:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Search TikTok creators through LinkFox and Chuhaijiang. */
    "linkfox.search_chuhaijiang_creators": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
        /** The search keyword. */
        keyword?: string;
        /** The supplier category identifier. */
        category?: string;
        /** The minimum follower count. */
        minFollowers?: number;
        /** The maximum follower count. */
        maxFollowers?: number;
        /** The minimum 30-day GMV. */
        minGmv30d?: number;
        /** The maximum 30-day GMV. */
        maxGmv30d?: number;
        /** The minimum average view count. */
        minAvgViews?: number;
        /** The maximum average view count. */
        maxAvgViews?: number;
        /** The minimum engagement rate in supplier units. */
        minEngagement?: number;
        /** The maximum engagement rate in supplier units. */
        maxEngagement?: number;
        /** Whether the creator has public contact information. */
        hasContact?: boolean;
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: gmv_30d:desc.
         * @default "gmv_30d:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Search TikTok live streams through LinkFox and Chuhaijiang. */
    "linkfox.search_chuhaijiang_lives": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
        /** The search keyword. */
        keyword?: string;
        /** The supplier category identifier. */
        category?: string;
        /** The product category. */
        productCategory?: string;
        /** Whether the stream is currently live. */
        isLiving?: boolean;
        /** Whether the content promotes products. */
        isCommercial?: boolean;
        /** The minimum sales count. */
        minSold?: number;
        /** The maximum sales count. */
        maxSold?: number;
        /** The minimum GMV. */
        minGmv?: number;
        /** The maximum GMV. */
        maxGmv?: number;
        /** The minimum audience count. */
        minAudience?: number;
        /** The maximum audience count. */
        maxAudience?: number;
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: gmv:desc.
         * @default "gmv:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Search TikTok products through LinkFox and Chuhaijiang. */
    "linkfox.search_chuhaijiang_products": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
        /** The search keyword. */
        keyword?: string;
        /** The supplier category identifier. */
        category?: string;
        /** The supplier seller type: 1 overseas non-brand, 2 local, 3 brand, 4 non-brand. */
        sellerType?: "1" | "2" | "3" | "4";
        /** The minimum price in USD. */
        minPrice?: number;
        /** The maximum price in USD. */
        maxPrice?: number;
        /**
         * The minimum rating.
         * @minimum 0
         * @maximum 5
         */
        minRating?: number;
        /**
         * The maximum rating.
         * @minimum 0
         * @maximum 5
         */
        maxRating?: number;
        /** The minimum 7-day sales count. */
        minSold7d?: number;
        /** The maximum 7-day sales count. */
        maxSold7d?: number;
        /** The minimum 30-day sales count. */
        minSold30d?: number;
        /** The maximum 30-day sales count. */
        maxSold30d?: number;
        /** Whether the product offers free shipping. */
        freeShipping?: boolean;
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: gmv_7d:desc.
         * @default "gmv_7d:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Find visually similar TikTok products using an image URL or an uploaded object key through LinkFox and Chuhaijiang. */
    "linkfox.search_chuhaijiang_products_by_image": {
      input: Record<string, unknown>;
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Search TikTok shops through LinkFox and Chuhaijiang. */
    "linkfox.search_chuhaijiang_shops": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
        /** The search keyword. */
        keyword?: string;
        /** The supplier category identifier. */
        category?: string;
        /** The supplier seller type: 1 overseas non-brand, 2 local, 3 brand, 4 non-brand. */
        sellerType?: string;
        /** The minimum rating. */
        minRating?: number;
        /** The maximum rating. */
        maxRating?: number;
        /** The minimum 7-day sales count. */
        minSold7d?: number;
        /** The maximum 7-day sales count. */
        maxSold7d?: number;
        /** The minimum 7-day GMV. */
        minGmv7d?: number;
        /** The maximum 7-day GMV. */
        maxGmv7d?: number;
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: gmv_7d:desc.
         * @default "gmv_7d:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Search TikTok videos through LinkFox and Chuhaijiang. */
    "linkfox.search_chuhaijiang_videos": {
      input: {
        /** The lowercase TikTok market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page. Maximum 10.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
        /** The search keyword. */
        keyword?: string;
        /** The supplier category identifier. */
        category?: string;
        /** Whether the content promotes products. */
        isCommercial?: boolean;
        /** The minimum view count. */
        minViews?: number;
        /** The maximum view count. */
        maxViews?: number;
        /** The minimum like count. */
        minLikes?: number;
        /** The maximum like count. */
        maxLikes?: number;
        /** The minimum 30-day GMV. */
        minGmv30d?: number;
        /** The maximum 30-day GMV. */
        maxGmv30d?: number;
        /** The minimum engagement rate in supplier units. */
        minEngagement?: number;
        /** The maximum engagement rate in supplier units. */
        maxEngagement?: number;
        /** The supplier account type: 0, 3, or 4. */
        accountType?: 0 | 3 | 4;
        /**
         * The supplier sort expression in field:asc or field:desc format. Default: views:desc.
         * @default "views:desc"
         */
        sort?: string;
      };
      output: {
        /** The complete supplier data, including optional detail expansions. */
        data: {
          /** The returned records; detail endpoints may also return a list. */
          items?: Array<Record<string, unknown>>;
          /** The total matching record count when provided. */
          total_count?: number;
          [key: string]: unknown;
        };
        /** The LinkFox request tracing identifier. */
        requestId: string | null;
        /** The LinkFox token usage when provided. */
        costToken: number | null;
      };
    };
    /** Search public eBay listings through LinkFox. */
    "linkfox.search_ebay_products": {
      input: {
        /**
         * The product keyword to search for.
         * @maxLength 1024
         */
        keyword?: string;
        /** The eBay marketplace domain. */
        ebayDomain?: "ebay.com" | "ebay.co.uk" | "ebay.de" | "ebay.fr" | "ebay.it" | "ebay.es" | "ebay.ca" | "ebay.com.au" | "ebay.nl" | "ebay.at" | "ebay.ch" | "ebay.pl" | "ebay.ie" | "ebay.com.hk" | "ebay.com.my" | "ebay.com.sg";
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /** The number of results per page. */
        pageSize?: 25 | 50 | 100 | 200;
        /** The eBay result sort code. */
        orderBy?: "1" | "2" | "3" | "7" | "10" | "12" | "15" | "16" | "18" | "19";
        /**
         * The minimum item price.
         * @minimum 0
         */
        priceMin?: number;
        /**
         * The maximum item price.
         * @minimum 0
         */
        priceMax?: number;
        /** Pipe-separated eBay item condition codes. */
        itemCondition?: string;
        /** The listing purchase format. */
        buyingFormat?: "Auction" | "BIN" | "BO";
        /** Comma-separated eBay result filters. */
        showOnly?: string;
        /** The item location country or area code. */
        location?: number;
        /** The preferred location scope. */
        prefLoc?: "1" | "2" | "3";
        /** The delivery ZIP or postal code. */
        zipCode?: string;
        /** The eBay category identifier. */
        categoryId?: number;
        /** Whether to bypass LinkFox caches. */
        noCache?: boolean;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search EchoTik TikTok products through LinkFox. */
    "linkfox.search_echotik_products": {
      input: {
        /**
         * A product keyword translated to the target market language.
         * @maxLength 1000
         */
        keyword?: string;
        /** The TikTok Shop market region. */
        region?: "US" | "ID" | "TH" | "PH" | "MY" | "VN" | "GB" | "MX" | "SG" | "SA" | "BR" | "ES" | "JP" | "DE" | "IT" | "FR";
        /**
         * A Chinese product category keyword.
         * @maxLength 1000
         */
        categoryKeywordCN?: string;
        /**
         * The minimum lifetime units sold.
         * @minimum 0
         */
        minTotalSaleCnt?: number;
        /**
         * The maximum lifetime units sold.
         * @minimum 0
         */
        maxTotalSaleCnt?: number;
        /**
         * The minimum units sold in the last 30 days.
         * @minimum 0
         */
        minTotalSale30dCnt?: number;
        /**
         * The maximum units sold in the last 30 days.
         * @minimum 0
         */
        maxTotalSale30dCnt?: number;
        /**
         * The minimum average SPU price.
         * @minimum 0
         */
        minSpuAvgPrice?: number;
        /**
         * The maximum average SPU price.
         * @minimum 0
         */
        maxSpuAvgPrice?: number;
        /**
         * The minimum product rating.
         * @minimum 0
         * @maximum 5
         */
        minProductRating?: number;
        /**
         * The maximum product rating.
         * @minimum 0
         * @maximum 5
         */
        maxProductRating?: number;
        /**
         * The minimum review count.
         * @minimum 0
         */
        minReviewCount?: number;
        /**
         * The minimum commission rate as a decimal.
         * @minimum 0
         * @maximum 1
         */
        minProductCommissionRate?: number;
        /**
         * The minimum creator count.
         * @minimum 0
         */
        minTotalIflCnt?: number;
        /**
         * The minimum shoppable video count.
         * @minimum 0
         */
        minTotalVideoCnt?: number;
        /**
         * The EchoTik sort field code.
         * @minimum 1
         * @maximum 7
         */
        productSortField?: number;
        /**
         * The sort direction, where 0 is ascending and 1 is descending.
         * @minimum 0
         * @maximum 1
         */
        sortType?: number;
        /**
         * The one-based page number.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of products per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search TikTok Shop sellers with EchoTik analytics through LinkFox. */
    "linkfox.search_echotik_sellers": {
      input: {
        /** The TikTok Shop region. */
        region: "US" | "ID" | "TH" | "PH" | "MY" | "VN" | "GB" | "MX" | "SG" | "SA" | "BR" | "ES" | "JP" | "DE" | "IT" | "FR";
        /**
         * The first-level seller category identifier.
         * @maxLength 1000
         */
        categoryId?: string;
        /**
         * The second-level seller category identifier.
         * @maxLength 1000
         */
        categoryL2Id?: string;
        /**
         * The third-level seller category identifier.
         * @maxLength 1000
         */
        categoryL3Id?: string;
        /** The minimum 30-day GMV. */
        minTotalSaleGmv30dAmt?: number;
        /** The maximum 30-day GMV. */
        maxTotalSaleGmv30dAmt?: number;
        /** The seven-day sales trend code. */
        salesTrendFlag?: 0 | 1 | 2;
        /** Whether sellers are local or cross-border. */
        fromFlag?: 1 | 2;
        /** The seller's primary sales channel. */
        salesFlag?: 1 | 2;
        /** The earliest estimated listing date in yyyyMMdd format. */
        minFirstCrawlDt?: number;
        /** The latest estimated listing date in yyyyMMdd format. */
        maxFirstCrawlDt?: number;
        /** The seller sort field. */
        sellerSortField?: 1 | 2 | 3;
        /** The result sort direction. */
        sortType?: 0 | 1;
        /**
         * The one-based page number.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of sellers per page, in multiples of ten.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /**
         * The number of returned sellers.
         * @minimum 0
         */
        total: number;
        /** The sellers returned by EchoTik. */
        sellers: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search TikTok videos with EchoTik analytics through LinkFox. */
    "linkfox.search_echotik_videos": {
      input: {
        /** The TikTok region. */
        region: "US" | "ID" | "TH" | "PH" | "MY" | "VN" | "GB" | "MX" | "SG" | "SA" | "BR" | "ES" | "JP" | "DE" | "IT" | "FR";
        /**
         * The creator identifier.
         * @maxLength 1000
         */
        userId?: string;
        /**
         * The associated product identifier.
         * @maxLength 1000
         */
        productId?: string;
        /**
         * The associated product category identifier.
         * @maxLength 1000
         */
        productCategoryId?: string;
        /**
         * The minimum view count.
         * @minimum 0
         */
        minTotalViewsCnt?: number;
        /**
         * The maximum view count.
         * @minimum 0
         */
        maxTotalViewsCnt?: number;
        /**
         * The minimum video duration in seconds.
         * @minimum 0
         */
        minDuration?: number;
        /**
         * The maximum video duration in seconds.
         * @minimum 0
         */
        maxDuration?: number;
        /**
         * The earliest creation time as a Unix timestamp.
         * @minimum 0
         */
        minCreateTime?: number;
        /**
         * The latest creation time as a Unix timestamp.
         * @minimum 0
         */
        maxCreateTime?: number;
        /** Whether the video promotes products. */
        salesFlag?: 0 | 1;
        /** Whether the video is an advertisement. */
        isAd?: 0 | 1;
        /** Whether the video was created by AI. */
        createdByAi?: "true" | "false";
        /** The video sort field. */
        videoSortField?: 1 | 2 | 3;
        /** The result sort direction. */
        sortType?: 0 | 1;
        /**
         * The one-based page number.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of videos per page, in multiples of ten.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /**
         * The number of returned videos.
         * @minimum 0
         */
        total: number;
        /** The videos returned by EchoTik. */
        videos: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search synchronized Etsy categories through LinkFox. */
    "linkfox.search_etsy_categories": {
      input: {
        /**
         * A substring matched against category names and identifiers.
         * @minLength 1
         * @maxLength 200
         */
        keyword: string;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of categories per page.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
      };
      output: {
        /**
         * The number of categories returned on this page.
         * @minimum 0
         */
        total: number;
        /** The matching Etsy categories. */
        categories: Array<Record<string, unknown>>;
        /** The LinkFox result title when provided. */
        title: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search Etsy products using commercial and listing filters through LinkFox. */
    "linkfox.search_etsy_products": {
      input: {
        /**
         * The minimum total favorite count.
         * @minimum 0
         */
        beginFavorites?: number;
        /**
         * The minimum weekly favorite count.
         * @minimum 0
         */
        beginFavoritesWeekly?: number;
        /**
         * The minimum total review count.
         * @minimum 0
         */
        beginReviews?: number;
        /**
         * The minimum weekly review count.
         * @minimum 0
         */
        beginReviewsWeekly?: number;
        /**
         * The minimum total sales count.
         * @minimum 0
         */
        beginSales?: number;
        /**
         * The minimum weekly sales count.
         * @minimum 0
         */
        beginSalesWeekly?: number;
        /**
         * The maximum total favorite count.
         * @minimum 0
         */
        endFavorites?: number;
        /**
         * The maximum weekly favorite count.
         * @minimum 0
         */
        endFavoritesWeekly?: number;
        /**
         * The maximum total review count.
         * @minimum 0
         */
        endReviews?: number;
        /**
         * The maximum weekly review count.
         * @minimum 0
         */
        endReviewsWeekly?: number;
        /**
         * The maximum total sales count.
         * @minimum 0
         */
        endSales?: number;
        /**
         * The maximum weekly sales count.
         * @minimum 0
         */
        endSalesWeekly?: number;
        /**
         * The Etsy category identifier.
         * @maxLength 1000
         */
        category?: string;
        /**
         * The shop or shipping country filter.
         * @maxLength 1000
         */
        country?: string;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * A search keyword, shop name, or Etsy URL.
         * @maxLength 500
         */
        searchKey?: string;
        /** The listing or shop status. */
        status?: 0 | 1;
        /**
         * The minimum product price.
         * @minimum 0
         */
        beginPrice?: number;
        /**
         * The maximum product price.
         * @minimum 0
         */
        endPrice?: number;
        /**
         * The result currency code, defaulting to USD.
         * @maxLength 1000
         */
        currencyCode?: string;
        /** Whether to return bestselling products. */
        isBestsell?: 0 | 1;
        /** Whether to return Etsy Pick products. */
        isPick?: 0 | 1;
        /** Whether to return Raving products. */
        isRaving?: 0 | 1;
        /**
         * The earliest listing date.
         * @format date
         */
        listedTime?: string;
        /**
         * Comma-separated Etsy product type codes.
         * @maxLength 1000
         */
        productType?: string;
        /**
         * The product sort field code.
         * @minimum 1
         * @maximum 6
         */
        sortBy?: number;
        /** The product sort direction, where 1 is descending. */
        sortDesc?: 1 | 2;
      };
      output: {
        /**
         * The number of products returned on this page.
         * @minimum 0
         */
        total: number;
        /** The total number of matching Etsy products. */
        productNum: number | null;
        /** The matching Etsy products. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox source tool identifier. */
        sourceTool: string | null;
        /** The LinkFox source type identifier. */
        sourceType: string | null;
        /** The LinkFox result title when provided. */
        title: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search Etsy shops using commercial and profile filters through LinkFox. */
    "linkfox.search_etsy_stores": {
      input: {
        /**
         * The minimum total favorite count.
         * @minimum 0
         */
        beginFavorites?: number;
        /**
         * The minimum weekly favorite count.
         * @minimum 0
         */
        beginFavoritesWeekly?: number;
        /**
         * The minimum total review count.
         * @minimum 0
         */
        beginReviews?: number;
        /**
         * The minimum weekly review count.
         * @minimum 0
         */
        beginReviewsWeekly?: number;
        /**
         * The minimum total sales count.
         * @minimum 0
         */
        beginSales?: number;
        /**
         * The minimum weekly sales count.
         * @minimum 0
         */
        beginSalesWeekly?: number;
        /**
         * The maximum total favorite count.
         * @minimum 0
         */
        endFavorites?: number;
        /**
         * The maximum weekly favorite count.
         * @minimum 0
         */
        endFavoritesWeekly?: number;
        /**
         * The maximum total review count.
         * @minimum 0
         */
        endReviews?: number;
        /**
         * The maximum weekly review count.
         * @minimum 0
         */
        endReviewsWeekly?: number;
        /**
         * The maximum total sales count.
         * @minimum 0
         */
        endSales?: number;
        /**
         * The maximum weekly sales count.
         * @minimum 0
         */
        endSalesWeekly?: number;
        /**
         * The Etsy category identifier.
         * @maxLength 1000
         */
        category?: string;
        /**
         * The shop or shipping country filter.
         * @maxLength 1000
         */
        country?: string;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * A search keyword, shop name, or Etsy URL.
         * @maxLength 500
         */
        searchKey?: string;
        /** The listing or shop status. */
        status?: 0 | 1;
        /**
         * The earliest shop opening date.
         * @format date
         */
        beginStoreOpenedAt?: string;
        /**
         * The latest shop opening date.
         * @format date
         */
        endStoreOpenedAt?: string;
        /** Whether to return Raving shops. */
        isRaving?: 0 | 1;
        /** Whether to return Star Seller shops. */
        isStar?: 0 | 1;
        /**
         * The shop sort field code.
         * @minimum 8
         * @maximum 11
         */
        sortBy?: number;
        /** The shop sort direction, where 1 is descending. */
        sortDesc?: 0 | 1;
      };
      output: {
        /**
         * The number of shops returned on this page.
         * @minimum 0
         */
        total: number;
        /** The total number of matching Etsy shops. */
        storeNum: number | null;
        /** The matching Etsy shops. */
        stores: Array<Record<string, unknown>>;
        /** The LinkFox source tool identifier. */
        sourceTool: string | null;
        /** The LinkFox source type identifier. */
        sourceType: string | null;
        /** The LinkFox result title when provided. */
        title: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search FastMoss TikTok products through LinkFox. */
    "linkfox.search_fastmoss_products": {
      input: {
        /** A product title keyword. */
        keyword?: string;
        /** The TikTok Shop market region. */
        region?: "US" | "GB" | "MX" | "ES" | "DE" | "IT" | "FR" | "ID" | "VN" | "MY" | "TH" | "PH" | "BR" | "JP" | "SG";
        /** An English TikTok product category name. */
        category?: string;
        /**
         * The shop type, where 1 is local and 2 is cross-border.
         * @minimum 1
         * @maximum 2
         */
        shopType?: number;
        /** Whether to return only top-selling products. */
        isTopSelling?: boolean;
        /** Whether to return only newly listed products. */
        isNewListed?: boolean;
        /** Whether to return only TikTok fully managed products. */
        isSshop?: boolean;
        /** Whether to return only free-shipping products. */
        isFreeShipping?: boolean;
        /** Whether to return only locally stocked products. */
        isLocalWarehouse?: boolean;
        /** The inclusive product sales range. */
        unitsSoldRange?: {
          /** The inclusive minimum value. */
          min?: number;
          /** The inclusive maximum value. */
          max?: number;
        };
        /** The inclusive decimal commission-rate range. */
        commissionRateRange?: {
          /** The inclusive minimum value. */
          min?: number;
          /** The inclusive maximum value. */
          max?: number;
        };
        /** The inclusive creator-count range. */
        creatorCountRange?: {
          /** The inclusive minimum value. */
          min?: number;
          /** The inclusive maximum value. */
          max?: number;
        };
        /** The FastMoss result sort field. */
        orderField?: "day7_units_sold" | "day7_gmv" | "commission_rate" | "total_units_sold" | "total_gmv" | "creator_count";
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of products per page.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search Mercado Libre catalog products with commercial filters through LinkFox. */
    "linkfox.search_mercado_catalogs": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC" | "MCO";
        /** The search text; category searches accept Spanish, Portuguese, or Chinese. */
        searchText?: string;
        /** The Mercado Libre catalog product ID. */
        catalogId?: string;
        /** The Mercado Libre category ID. */
        categoryId?: string;
        /** The brand name. The upstream field is spelled bland. */
        bland?: string;
        /** The seller ID; item search also accepts a seller name. */
        sellerId?: string;
        /** The minimum catalog product price. */
        priceVolStart?: number;
        /** The maximum catalog product price. */
        priceVolEnd?: number;
        /** The minimum catalog units sold in 30 days. */
        sales30VolStart?: number;
        /** The maximum catalog units sold in 30 days. */
        sales30VolEnd?: number;
        /** The minimum historical units sold. */
        hisVolStart?: number;
        /** The maximum historical units sold. */
        hisVolEnd?: number;
        /** The minimum catalog product rating, as a string. */
        scoreVolStart?: string;
        /** The maximum catalog product rating, as a string. */
        scoreVolEnd?: string;
        /** The minimum catalog review count. */
        commentVolStart?: number;
        /** The maximum catalog review count. */
        commentVolEnd?: number;
        /** The minimum stock quantity. */
        stockVolStart?: number;
        /** The maximum stock quantity. */
        stockVolEnd?: number;
        /** The minimum product weight in grams. */
        weightStart?: number;
        /** The maximum product weight in grams. */
        weightEnd?: number;
        /** The minimum BSR rank. */
        bsrVolStart?: number;
        /** The maximum BSR rank. */
        bsrVolEnd?: number;
        /** Whether the catalog product follows an existing listing: 0 no, 1 yes. */
        followVol?: 0 | 1;
        /** Whether the product uses a US forwarding warehouse. */
        isUsaFull?: boolean;
        /** The catalog warehouse type: FULL official warehouse, CBT cross-border, LOCAL local. */
        storageTypeVol?: "FULL" | "CBT" | "LOCAL";
        /** The catalog seller type: LOCAL local, CBT cross-border. */
        sellerTypeVol?: "LOCAL" | "CBT";
        /** The catalog product status. */
        storeStatusVol?: "active" | "paused";
        /** The supplier sort field. */
        sortKey?: "sold_his" | "price" | "sale30d" | "sale7" | "bsr";
        /** The sort direction. Default: desc. */
        sortOrder?: "asc" | "desc";
        /**
         * The page number, starting at 1. Default: 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records per page. Default: 50. Maximum: 200.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
        /**
         * The reporting month in YYYYMM format.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The listing age window in days, for example 15, 30, 60, 90, 180, or 365. */
        addedVol?: number;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Search Mercado Libre categories through LinkFox. */
    "linkfox.search_mercado_categories": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC";
        /**
         * The search text; category searches accept Spanish, Portuguese, or Chinese.
         * @minLength 1
         */
        searchText: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Search daily Mercado Libre trending keywords through LinkFox. */
    "linkfox.search_mercado_daily_keywords": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC";
        /**
         * The search date in YYYYMMDD format.
         * @minLength 8
         * @maxLength 8
         */
        runDate: string;
        /** The Mercado Libre category ID. */
        categoryId?: string;
        /** The search text; category searches accept Spanish, Portuguese, or Chinese. */
        searchText?: string;
        /** The keyword sort criterion. */
        sort?: {
          /** The keyword metric to sort by. */
          key: "sale30" | "item_total_count" | "visit30" | "view_count";
          /** The keyword sort direction. */
          order: "ascending" | "descending";
        };
        /** The 30-day units sold range; either boundary may be omitted. */
        sale30?: {
          /** The inclusive lower boundary. */
          start?: number;
          /** The inclusive upper boundary. */
          end?: number;
        };
        /** The visits range; either boundary may be omitted. */
        visit30?: {
          /** The inclusive lower boundary. */
          start?: number;
          /** The inclusive upper boundary. */
          end?: number;
        };
        /** The product count range; either boundary may be omitted. */
        totalItem?: {
          /** The inclusive lower boundary. */
          start?: number;
          /** The inclusive upper boundary. */
          end?: number;
        };
        /** The advertisement count range; either boundary may be omitted. */
        adCount?: {
          /** The inclusive lower boundary. */
          start?: number;
          /** The inclusive upper boundary. */
          end?: number;
        };
        /**
         * The page number, starting at 1. Default: 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records per page. Default: 50.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Search Mercado Libre products with commercial filters through LinkFox. */
    "linkfox.search_mercado_items": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC" | "MCO";
        /** Search keywords matched against the product title. */
        title?: string;
        /** The Mercado Libre category ID. */
        categoryId?: string;
        /** The seller ID; item search also accepts a seller name. */
        sellerId?: string;
        /** The Mercado Libre product URL. */
        itemUrl?: string;
        /** The minimum product price. */
        priceBegin?: number;
        /** The maximum product price. */
        priceEnd?: number;
        /** The minimum lifetime units sold. */
        soldTotalBegin?: number;
        /** The maximum lifetime units sold. */
        soldTotalEnd?: number;
        /** The minimum units sold in 30 days. */
        sale30Start?: number;
        /** The maximum units sold in 30 days. */
        sale30End?: number;
        /** The minimum product rating. */
        scoreStart?: number;
        /** The maximum product rating. */
        scoreEnd?: number;
        /** The minimum review count. */
        commentBegin?: number;
        /** The maximum review count. */
        commentEnd?: number;
        /** The minimum product weight in grams. */
        weightStart?: number;
        /** The maximum product weight in grams. */
        weightEnd?: number;
        /** The listing age window in days. */
        startTimeAdded?: 15 | 30 | 60 | 90 | 180 | 365;
        /**
         * The earliest listing date in yyyy-MM-dd format.
         * @format date
         */
        startTimeBegin?: string;
        /**
         * The latest listing date in yyyy-MM-dd format.
         * @format date
         */
        startTimeEnd?: string;
        /** The warehouse type: None all, FULL official warehouse, CBT cross-border, LOCAL self-fulfilled. */
        storageType?: "None" | "FULL" | "CBT" | "LOCAL";
        /** The seller type; LOCAL local, CBT cross-border, None all, CBT_OTHER remote cross-border, CBT_FBM full cross-border, where supported. */
        sellerType?: "None" | "LOCAL" | "CBT";
        /** Whether the product follows an existing listing: 0 no, 1 yes. */
        follow?: 0 | 1;
        /** Whether the product uses a US forwarding warehouse. */
        isUsaFull?: boolean;
        /** The product status. */
        itemStatus?: "active" | "paused";
        /** The supplier sort field. */
        sortKey?: "title" | "price" | "sale7" | "sale30d" | "sold_quantity" | "sales_amount30" | "available_quantity" | "start_time" | "brand_id" | "bsr";
        /** The sort direction. Default: desc. */
        sortOrder?: "asc" | "desc";
        /**
         * The page number, starting at 1. Default: 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records per page. Default: 50.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Search Mercado Libre leaf categories through LinkFox. */
    "linkfox.search_mercado_leaf_categories": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC";
        /**
         * The search text; category searches accept Spanish, Portuguese, or Chinese.
         * @minLength 1
         */
        searchText: string;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Search monthly Mercado Libre trending keywords through LinkFox. */
    "linkfox.search_mercado_monthly_keywords": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC";
        /**
         * The search month in YYYYMM format.
         * @minLength 6
         * @maxLength 6
         */
        runMonth: string;
        /** The Mercado Libre category ID. */
        categoryId?: string;
        /** The search text; category searches accept Spanish, Portuguese, or Chinese. */
        searchText?: string;
        /** The keyword sort criterion. */
        sort?: {
          /** The keyword metric to sort by. */
          key: "sale30" | "item_total_count" | "visit30" | "view_count";
          /** The keyword sort direction. */
          order: "ascending" | "descending";
        };
        /** The 30-day units sold range; either boundary may be omitted. */
        sale30?: {
          /** The inclusive lower boundary. */
          start?: number;
          /** The inclusive upper boundary. */
          end?: number;
        };
        /** The visits range; either boundary may be omitted. */
        visit30?: {
          /** The inclusive lower boundary. */
          start?: number;
          /** The inclusive upper boundary. */
          end?: number;
        };
        /** The product count range; either boundary may be omitted. */
        totalItem?: {
          /** The inclusive lower boundary. */
          start?: number;
          /** The inclusive upper boundary. */
          end?: number;
        };
        /**
         * The page number, starting at 1. Default: 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records per page. Default: 50.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Search Mercado Libre sellers by type and reputation through LinkFox. */
    "linkfox.search_mercado_sellers": {
      input: {
        /** The Mercado Libre site: MLM Mexico, MLB Brazil, MLA Argentina, MLC Chile; MCO Colombia is supported only where listed. */
        siteId: "MLM" | "MLB" | "MLA" | "MLC" | "MCO";
        /** The seller type; LOCAL local, CBT cross-border, None all, CBT_OTHER remote cross-border, CBT_FBM full cross-border, where supported. */
        sellerType?: "LOCAL" | "CBT" | "CBT_OTHER" | "CBT_FBM";
        /** The seller reputation level: 5_green, 4_light_green, or 3_yellow. */
        levelId?: "5_green" | "4_light_green" | "3_yellow";
        /** The seller quality tier. */
        powerType?: "platinum" | "gold" | "silver";
        /**
         * The page number, starting at 1. Default: 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records per page. Default: 50.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The supplier tool that was called. */
        toolName?: string;
        /** The supplier business result: usually formatted text, or a JSON object or array. */
        data?: string | Record<string, unknown> | Array<unknown>;
        /** Whether the supplier tool is chargeable. */
        charged?: boolean;
        /** The original concatenated MCP text content. */
        contentText?: string;
        /** Whether the text was parsed as JSON, including JSON-encoded strings. */
        textParsedAsJson?: boolean;
        /** The original MCP result; the gateway may return an empty object. */
        rawResponse?: Record<string, unknown>;
        /** The result count when the gateway can infer it. */
        total?: number;
        /** The actual LinkFox token cost; zero for free tools. */
        costToken?: number;
        /** The upstream elapsed time in milliseconds. */
        costTime?: number;
        [key: string]: unknown;
      };
    };
    /** Search Ozon products by keyword or SKU through LinkFox and MPSTATS. */
    "linkfox.search_ozon_products": {
      input: {
        /** A Russian product search keyword. */
        keyword?: string;
        /**
         * Ozon product SKUs to retrieve.
         * @minItems 1
         */
        productIds?: Array<number | string>;
        /**
         * The first statistics date, no later than yesterday.
         * @format date
         */
        startDate?: string;
        /**
         * The last statistics date, no later than yesterday.
         * @format date
         */
        endDate?: string;
      };
      output: {
        /**
         * The number of records returned on this page.
         * @minimum 0
         */
        total: number;
        /** The Ozon products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** Ozon product lookup failures. */
        failures: Array<Record<string, unknown>>;
        /** The number of successful Ozon product lookups. */
        successCount: number | null;
        /** The number of failed Ozon product lookups. */
        failedCount: number | null;
        /** The LinkFox request duration in milliseconds. */
        costTime: number | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search Ozon market keywords through LinkFox and Seerfar. */
    "linkfox.search_seerfar_ozon_market_keywords": {
      input: {
        /** Pagination and sorting. */
        page: {
          /**
           * The result page, starting at 1.
           * @minimum 1
           * @default 1
           */
          page?: number;
          /**
           * Records per page.
           * @minimum 1
           * @default 20
           */
          pageSize?: number;
          /** Sort rules. */
          orders?: Array<{
            /**
             * A response metric such as sales, price, revenue or reviewRating.
             * @minLength 1
             */
            field: string;
            /** Sort direction. */
            direction: "DESC" | "ASC";
          }>;
        };
        /**
         * Search keywords.
         * @maxItems 1000
         */
        keywords?: Array<string>;
        /** Keyword match mode: 0 exact, 1 fuzzy. */
        matchType?: 0 | 1;
        /**
         * The query date in YYYY-MM-DD format; 2026-04-01 selects March 2026 data.
         * @format date
         */
        searchDate?: string;
        /**
         * Seerfar category IDs, not category names.
         * @maxItems 1000
         */
        categories?: Array<string>;
        /** Search popularity range. */
        searchVolume?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** 30-day search growth range; negative values are allowed. */
        searchChange30?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Monthly sales unit range. */
        monthlySales?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Monthly revenue range in RUB. */
        monthlyRevenue?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Price range in RUB. */
        price?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Product view count range. */
        productViews?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Product count range. */
        products?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Supplier volume metric range. */
        volume?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Market space range. */
        marketSpace?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Conversion concentration range. */
        conversionSharing?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Review count range. */
        reviews?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Rating range. */
        ratings?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Seller count range. */
        sellers?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Supplier weight metric range. */
        weight?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** The supplier user ID. */
        uId?: string;
        /** The member ID that owns the supplier data. */
        memberId?: string;
      };
      output: {
        /** The LinkFox token usage when returned. */
        costToken?: number;
        /** The request duration in milliseconds. */
        costTime?: number;
        /** The supplier display type. */
        type?: string;
        /** Supplier display columns. */
        columns?: Array<Record<string, unknown>>;
        /** The total matching record count across pages. */
        total: number;
        /** Returned supplier records with original metrics and currency units. */
        data: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search Ozon product reports with commercial filters through LinkFox and Seerfar. */
    "linkfox.search_seerfar_ozon_product_reports": {
      input: {
        /** Pagination and sorting. */
        page: {
          /**
           * The result page, starting at 1.
           * @minimum 1
           * @default 1
           */
          page?: number;
          /**
           * Records per page.
           * @minimum 1
           * @default 20
           */
          pageSize?: number;
          /** Sort rules. */
          orders?: Array<{
            /**
             * A response metric such as sales, price, revenue or reviewRating.
             * @minLength 1
             */
            field: string;
            /** Sort direction. */
            direction: "DESC" | "ASC";
          }>;
        };
        /**
         * Up to 10 exact SKU IDs.
         * @maxItems 10
         */
        skus?: Array<number>;
        /** Search keywords. */
        keywords?: Array<string>;
        /** Seerfar category IDs. */
        categoryIds?: Array<string>;
        /** Seller names. */
        sellerName?: Array<string>;
        /** Brand filter. */
        brand?: {
          /** Brand names. */
          brandName?: Array<string>;
          /** Brand mode: 0 include, 1 exclude, 2 unbranded. */
          type?: 0 | 1 | 2;
        };
        /** Fulfillment methods. */
        fulfillment?: Array<"FBO" | "FBS" | "RFBS" | "FBP" | "OZON">;
        /** Product labels. */
        labels?: Array<0 | 1 | 2>;
        /** Listing age filter in months. */
        creationDate?: 1 | 3 | 6 | 12 | 24;
        /** Whether to merge variants: 0 no, 1 yes. */
        variationsMerge?: 0 | 1;
        /**
         * The query date in YYYY-MM-DD format; 2026-04-01 selects March 2026 data.
         * @format date
         */
        searchDate?: string;
        /** The product tag. */
        tag?: string;
        /** The supplier user ID. */
        uId?: string;
        /** The member ID that owns the supplier data. */
        memberId?: string;
        /** Monthly sales unit range. */
        monthlySales?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Monthly sales growth range in percent. */
        monthlySalesRate?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Monthly revenue range in RUB. */
        monthlyRevenue?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Price range in RUB. */
        price?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Product-page cart conversion range in percent. */
        convToCartPdp?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Product rating range from 0 to 5. */
        reviewRating?: {
          /**
           * The inclusive lower bound; omit for no lower bound.
           * @minimum 0
           * @maximum 5
           */
          min?: number;
          /**
           * The inclusive upper bound; omit for no upper bound.
           * @minimum 0
           * @maximum 5
           */
          max?: number;
        };
        /** Product review count range. */
        reviewCount?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Question and answer count range. */
        questionsAndAnswers?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Variant count range. */
        variants?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Advertising cost share range, expressed as a ratio. */
        drr?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Gross margin range in percent. */
        grossMargin?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Return and cancellation rate range in percent. */
        returnCancellationRate?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Product weight range in grams. */
        weight?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
        /** Product volume range in liters. */
        volume?: {
          /** The inclusive lower bound; omit for no lower bound. */
          min?: number;
          /** The inclusive upper bound; omit for no upper bound. */
          max?: number;
        };
      };
      output: {
        /** The LinkFox token usage when returned. */
        costToken?: number;
        /** The request duration in milliseconds. */
        costTime?: number;
        /** The supplier display type. */
        type?: string;
        /** Supplier display columns. */
        columns?: Array<Record<string, unknown>>;
        /** The total matching record count across pages. */
        total: number;
        /** Returned supplier records with original metrics and currency units. */
        data: Array<Record<string, unknown>>;
        /** Product records, duplicated in data; do not count both arrays. */
        products?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search patents with Analytics expressions, deduplication, sorting, and pagination through LinkFox and Patsnap. */
    "linkfox.search_zhihuiya_patents": {
      input: {
        /**
         * The Analytics expression, supporting TACD:, TAC:, TA:, and AND/OR/NOT operators.
         * @minLength 1
         * @maxLength 12000
         */
        queryText: string;
        /**
         * The number of patents to return. Default: 10.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The pagination offset. Default: 0; limit + offset must be at most 20000.
         * @minimum 0
         * @maximum 19999
         */
        offset?: number;
        /** The ordered sort criteria. */
        sort?: Array<{
          /** The sort field. */
          field: "PBDT_YEARMONTHDAY" | "APD_YEARMONTHDAY" | "ISD" | "SCORE";
          /** The sort direction. */
          order: "DESC" | "ASC";
        }>;
        /** Enable stemming: 1 yes, 0 no. Default: 0. */
        stemming?: 0 | 1;
        /** The deduplication mode. Default: ALL. */
        collapseType?: "ALL" | "APNO" | "DOCDB" | "INPADOC" | "EXTEND";
        /** The deduplication sort field. */
        collapseBy?: "APD" | "PBD" | "AUTHORITY" | "SCORE";
        /** Select the oldest or latest member when deduplicating. */
        collapseOrder?: "OLDEST" | "LATEST";
        /** The authority priority order, used when collapseBy is AUTHORITY. */
        collapseOrderAuthority?: Array<string>;
      };
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Search design and utility patents by image with filters and pagination through LinkFox and Patsnap. */
    "linkfox.search_zhihuiya_patents_by_image": {
      input: {
        /** Design patent type. */
        patentType?: "D";
        /** Design image matching models. */
        model?: 1 | 2;
        [key: string]: unknown;
      } | {
        /** Utility patent type. */
        patentType?: "U";
        /** Utility image matching models. */
        model?: 3 | 4;
        [key: string]: unknown;
      };
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Get translated patent titles and abstracts through LinkFox and Patsnap. */
    "linkfox.translate_zhihuiya_patent_abstracts": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Get translated patent claims through LinkFox and Patsnap. */
    "linkfox.translate_zhihuiya_patent_claims": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
    /** Get translated patent descriptions through LinkFox and Patsnap. */
    "linkfox.translate_zhihuiya_patent_descriptions": {
      input: Record<string, unknown>;
      output: {
        /** The patent records returned by this request, including original nested data and download URLs. */
        data?: Array<Record<string, unknown>>;
        /** The number of records returned by this request. */
        total?: number;
        /** The total number of matching records, when provided. */
        allRecordsCount?: number;
        /** The actual LinkFox token usage, when provided. */
        costToken?: number;
        [key: string]: unknown;
      };
    };
  }
}
