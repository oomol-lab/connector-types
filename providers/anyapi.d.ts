import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up one AliExpress product by id and get its price, original price, rating, reviews count, images, options, variants with stock, specifications, store, ship-from country and delivery estimate in one normalized response. */
    "anyapi.aliexpress_product": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * Ship-to country as a 2-letter ISO code, e.g. US or DE. It changes prices, stock and the delivery estimate.
         * @pattern ^[A-Z]{2}$
         * @default "US"
         */
        country?: string;
        /**
         * Price currency as a 3-letter ISO code, e.g. USD or EUR.
         * @pattern ^[A-Z]{3}$
         * @default "USD"
         */
        currency?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * AliExpress product id, the number in the product URL (https://www.aliexpress.com/item/<id>.html), e.g. 3256807039224587. The AliExpress Search SKU returns it as productId.
         * @pattern ^[0-9]+$
         */
        productId: string;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `video`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"freeShipping" | "returnPolicy" | "shippingCost" | "video" | "wishlistCount">;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Get one page of buyer reviews for an AliExpress product by id, with rating, text, buyer country, date, bought variant and photos for each review, plus the product's total reviews, average rating and star distribution, in one normalized response. */
    "anyapi.aliexpress_reviews": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * 1-based page of 20 reviews in AliExpress's default order. Each page is billed as one request.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * AliExpress product id, the number in the product URL (https://www.aliexpress.com/item/<id>.html), e.g. 3256807039224587. The AliExpress Search SKU returns it as productId.
         * @pattern ^[0-9]+$
         */
        productId: string;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `helpfulVotes`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"followUpImages" | "followUpText" | "followUpUtc" | "helpfulVotes" | "unhelpfulVotes">;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search AliExpress by keyword with optional sort, price-range, page, ship-to country and currency, and get title, price, original price, units sold and image for each product in one normalized response. */
    "anyapi.aliexpress_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * Ship-to country as a 2-letter ISO code, e.g. US or DE. It changes prices, availability and delivery estimates.
         * @pattern ^[A-Z]{2}$
         * @default "US"
         */
        country?: string;
        /**
         * Price currency as a 3-letter ISO code, e.g. USD or EUR.
         * @pattern ^[A-Z]{3}$
         * @default "USD"
         */
        currency?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional maximum product price, in the requested currency.
         * @minimum 0
         */
        maxPrice?: number;
        /**
         * Optional minimum product price, in the requested currency.
         * @minimum 0
         */
        minPrice?: number;
        /**
         * 1-based results page of about 60 products; AliExpress serves no results past page 60. Each page is billed as one request.
         * @minimum 1
         * @maximum 60
         * @default 1
         */
        page?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Search keywords, e.g. "wireless earbuds".
         * @minLength 1
         * @maxLength 250
         */
        query: string;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `shipFrom`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"deliveryDaysMax" | "deliveryDaysMin" | "isChoice" | "listedUtc" | "shipFrom" | "storeName" | "totalResults">;
        /**
         * Result order: best_match (AliExpress relevance, the default), best_seller (most orders first), price_low, or price_high.
         * @default "best_match"
         */
        sort?: "best_match" | "best_seller" | "price_low" | "price_high";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch an ASOS product by URL from any of its 11 country stores and get title, price, brand, colour, description, images, and per-size stock in one normalized response. */
    "anyapi.asos_product": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `sizeGuide`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"sizeGuide">;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /**
         * ASOS product page URL, e.g. https://www.asos.com/pullbear/pullbear-casual-trainers-in-white/prd/211299341, or the short form https://www.asos.com/prd/211299341. The store is read from the URL path (/us/, /au/, /de/ and so on; none means the UK store), and prices come back in that store's currency.
         * @pattern ^https?://(www\.)?asos\.com/(.*\/)?prd/[0-9]+
         */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search ASOS by keyword in any of its 11 country stores with optional sort, price-range, and page filters and get title, price, brand, and colour for each product in one normalized response. */
    "anyapi.asos_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * ASOS country store to search, which also sets the price currency (gb GBP, us USD, au AUD, de/fr/it/es/nl EUR, se SEK, dk DKK, pl PLN); defaults to gb, the UK store. Product ids and URLs are store-specific.
         * @default "gb"
         */
        country?: "gb" | "us" | "au" | "de" | "fr" | "it" | "es" | "nl" | "se" | "dk" | "pl";
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional maximum product price, in the store's currency.
         * @minimum 0
         */
        maxPrice?: number;
        /**
         * Optional minimum product price, in the store's currency.
         * @minimum 0
         */
        minPrice?: number;
        /**
         * 1-based results page of 48 products. Each page is billed as one request.
         * @minimum 1
         * @maximum 200
         * @default 1
         */
        page?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Search keywords, e.g. "white sneakers" or "summer dress".
         * @minLength 1
         */
        query: string;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `inStock`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"inStock">;
        /** Result sort order; omit for ASOS's recommended order (e.g. new for newest arrivals first). */
        sort?: "best_match" | "new" | "price_low" | "price_high";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch a BestBuy.com product by URL and get title, price, brand, model, UPC, rating, description, and images in one normalized response. */
    "anyapi.bestbuy_product": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /**
         * Best Buy product page URL that carries the numeric Best Buy SKU, either the .../sku/6376564 form the Best Buy Search SKU returns or the older .../6376564.p?skuId=6376564 form.
         * @pattern ^https?://(www\.)?bestbuy\.com/.*(/sku/[0-9]+|[?&]skuId=[0-9]+|/[0-9]+\.p)
         */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Pull a page of 10 customer reviews for any BestBuy.com product by URL, newest first or by relevance, helpfulness, or rating: rating, title, text, date, reviewer, and verified-purchase badge. */
    "anyapi.bestbuy_reviews": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * 1-based page of 10 reviews; Best Buy serves at most 1000 pages. Each page is billed as one request; keep url and sort the same while walking pages.
         * @minimum 1
         * @maximum 1000
         * @default 1
         */
        page?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `rating`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"incentivized" | "rating">;
        /**
         * Review order: recent (newest first, the default), oldest, relevancy, helpful, rating_high, or rating_low (e.g. helpful).
         * @default "recent"
         */
        sort?: "recent" | "oldest" | "relevancy" | "helpful" | "rating_high" | "rating_low";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /**
         * Best Buy product page URL that carries the numeric Best Buy SKU, either the .../sku/6376564 form the Best Buy Search SKU returns or the older .../6376564.p?skuId=6376564 form.
         * @pattern ^https?://(www\.)?bestbuy\.com/.*(/sku/[0-9]+|[?&]skuId=[0-9]+|/[0-9]+\.p)
         */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search BestBuy.com by keyword with optional sort, price-range, and page filters and get title, price, rating, and brand for each product in one normalized response. */
    "anyapi.bestbuy_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional maximum product price in USD.
         * @minimum 0
         */
        maxPrice?: number;
        /**
         * Optional minimum product price in USD.
         * @minimum 0
         */
        minPrice?: number;
        /**
         * 1-based results page of about 18 to 24 products; Best Buy serves no products past page 100. Each page is billed as one request. Page sizes differ between sources, so deduplicate on sku.
         * @minimum 1
         * @maximum 100
         * @default 1
         */
        page?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Search keywords, e.g. "airpods" or "65 inch tv".
         * @minLength 1
         */
        query: string;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `totalResults`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"description" | "inStock" | "isSponsored" | "totalResults" | "upc" | "variants">;
        /** Result sort order; omit for Best Buy's own relevance order (e.g. price_low sorts by lowest price first). */
        sort?: "best_match" | "best_seller" | "price_low" | "price_high" | "rating_high" | "new";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Get a single Bluesky post by URL - text, author handle, like, reply, and repost counts as clean JSON. */
    "anyapi.bluesky_post": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Bluesky post URL, e.g. "https://bsky.app/profile/bsky.app/post/3l6oveex3ii2l". */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Bluesky user's public profile by handle - display name, bio, follower and post counts as clean JSON. */
    "anyapi.bluesky_profile": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Bluesky handle, e.g. "bsky.app" or "jay.bsky.team". */
        handle: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** List a Bluesky account's recent posts (text, author handle, like, reply, and repost counts) by handle as clean JSON. */
    "anyapi.bluesky_user_posts": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Bluesky handle, e.g. "bsky.app" or "jay.bsky.team". */
        handle: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Get US Congress members' financial disclosures and stock trades (member, ticker, transaction type, amount range, and dates), filterable by member, ticker, or date range. Results come newest filing first (by reportedUtc, not tradedUtc), so a recent filing can list trades made years earlier. */
    "anyapi.congress_trades": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * Latest transaction date to include, inclusive, in YYYY-MM-DD format (e.g. 2026-06-01).
         * @pattern ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
         */
        endDate?: string;
        /** Filter by the congressional member's first name, case-insensitive partial match (e.g. Nancy). */
        firstName?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /** Filter by the congressional member's last name, case-insensitive partial match (e.g. Pelosi). */
        lastName?: string;
        /**
         * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
         * @minimum 1
         * @maximum 25
         */
        limit?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /**
         * Earliest transaction date to include, inclusive, in YYYY-MM-DD format (e.g. 2026-01-01).
         * @pattern ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
         */
        startDate?: string;
        /** Filter to transactions involving this stock ticker symbol (e.g. NVDA). */
        ticker?: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Count how many contacts a company domain has, split by personal and generic mailboxes and broken down by department and seniority. Scope a domain for $1 per 1,000 requests before paying per contact. */
    "anyapi.email_finding_hunter_count": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * Company domain without a scheme or path, e.g. stripe.com.
         * @minLength 1
         */
        domain: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Count only personal mailboxes belonging to a named person, or only generic ones such as info@ and support@. */
        type?: "personal" | "generic";
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Find named contacts and their work email addresses at a company domain, filtered by job title, seniority or department. Priced per returned contact, so limit is the cost control. */
    "anyapi.email_finding_hunter_domain": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Restrict to one department. */
        department?: "executive" | "it" | "finance" | "management" | "sales" | "legal" | "support" | "hr" | "marketing" | "communication" | "education" | "design" | "health" | "operations";
        /**
         * Company domain without a scheme or path, e.g. stripe.com.
         * @minLength 1
         */
        domain: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * One job-title keyword to match, e.g. editor. A single keyword only: a comma-separated list is not supported and only its last entry would apply.
         * @minLength 1
         */
        jobTitle?: string;
        /**
         * Maximum contacts to return in this response. Every returned contact is billed, so this is the cost control.
         * @minimum 1
         * @maximum 100
         * @default 3
         */
        limit?: number;
        /**
         * Number of contacts to skip before this page begins.
         * @minimum 0
         */
        offset?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Only return contacts that carry this field. */
        requiredField?: "full_name" | "position" | "phone_number";
        /** Restrict to one seniority level. */
        seniority?: "junior" | "senior" | "executive";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Restrict to personal mailboxes belonging to a named person, or to generic ones such as info@ and support@. */
        type?: "personal" | "generic";
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Read the email address format a company domain uses, with every alternative format ZeroBounce has seen and how confident it is in each. Use it to build addresses for a whole account at once. */
    "anyapi.email_finding_zerobounce_domain": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * Company domain to inspect, e.g. hubspot.com.
         * @minLength 1
         */
        domain: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Validate an email address and return its deliverability verdict and mailbox signals. */
    "anyapi.email_verification_allegrow": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * Email address to validate.
         * @format email
         */
        email: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Verify an email address, including catch-all handling. Completion uses the durable Request lifecycle; a negative verdict is a successful result. */
    "anyapi.email_verification_bounceban": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** The disableCatchallVerify value. */
        disableCatchallVerify?: boolean;
        /**
         * The email value.
         * @format email
         */
        email: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /** The mode value. */
        mode?: "regular" | "deepverify";
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: Record<string, unknown> | {
        status?: "succeeded";
        [key: string]: unknown;
      };
    };
    /** Verify an email address. A valid negative verdict is a successful, billable result. */
    "anyapi.email_verification_icypeas": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * The email value.
         * @format email
         */
        email: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Validate one email address against ZeroBounce, with the deliverability verdict, why it was reached, the mailbox provider, and any owner details ZeroBounce holds. A negative verdict is a successful, billable result. */
    "anyapi.email_verification_zerobounce": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * Email address to validate.
         * @format email
         */
        email: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /** IP address the address signed up from. ZeroBounce uses it to add the geographic fields to the answer. */
        ipAddress?: string;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Check whether an email address has shown recent activity across ZeroBounce's engagement network before you re-engage it. A no-activity answer is a successful, billable result. */
    "anyapi.email_verification_zerobounce_activity": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * Email address to check for activity.
         * @format email
         */
        email: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** List public Facebook events for a city or place by its events-page URL (event name, date, venue, and attendance) as normalized JSON. */
    "anyapi.facebook_events": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Pagination cursor from a previous response to fetch the next page. */
        cursor?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Timeframe filter for the returned events. Defaults to all time. */
        time?: "today" | "this_week" | "next_week";
        /** URL of a city's or place's Facebook Events page (e.g. https://www.facebook.com/events/explore/saint-petersburg-florida/111326725552547). */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** List the public followers (or accounts followed) of any Facebook page or profile URL as normalized JSON records. */
    "anyapi.facebook_followers": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * Which relation to fetch: 'follower' or 'following' (e.g. follower).
         * @default "follower"
         */
        followType?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Facebook page or profile URL to list follows for (e.g. https://www.facebook.com/nasa). */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Resolve a place name to Facebook Marketplace locations with coordinates and metadata as normalized JSON. */
    "anyapi.facebook_marketplace_location_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Location search query (e.g. a city name). */
        query: string;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Look up Facebook Pages and profiles by name with Facebook's own quick search. A name lookup that returns basic identity fields only: name, URL, profile image, Facebook id, and verified status. Matches can include personal profiles as well as Pages. For full Page details (category, followers, phone, website), use facebook.search_pages. */
    "anyapi.facebook_page_lookup": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Maximum number of matches to return (1-7, default 7). Facebook's quick search answers a name with at most 7 matches.
         * @minimum 1
         * @maximum 7
         * @default 7
         */
        limit?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Name to look up, as you would type it into Facebook's search box (e.g. NASA or plumber chicago).
         * @minLength 1
         */
        query: string;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search Facebook Pages by keyword, optionally narrowed to a location, and get structured page profiles (name, category, followers, contact details). */
    "anyapi.facebook_search_pages": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less.
         * @minimum 1
         * @maximum 10
         */
        limit?: number;
        /** Optional free-text location to narrow the search: a city, province, or country (e.g. 'Berlin'). */
        location?: string;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Keyword to search Facebook Pages for (e.g. 'coffee roasters'). */
        query: string;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Extract Fiverr gig listings from any search or category URL: titles, sellers, ratings, and pricing as structured JSON. */
    "anyapi.fiverr_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Fiverr search or category page URL to extract gigs from. */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Read the USD wallet balance associated with your AnyAPI key without a paid business call. */
    "anyapi.get_balance": {
      input: Record<string, never>;
      output: {
        /** Remaining wallet balance in USD. */
        usd: number;
        [key: string]: unknown;
      };
    };
    /** Read a durable AnyAPI request and its retained result without submitting another paid job. */
    "anyapi.get_request": {
      input: {
        /**
         * AnyAPI request UUID.
         * @format uuid
         */
        requestId: string;
      };
      output: {
        /** AnyAPI request identifier used by get_request. */
        requestId: string;
        /** AnyAPI SKU executed by this request. */
        sku: string;
        /** Durable execution state. */
        status: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Request creation timestamp. */
        createdAt: string;
        /** Request completion timestamp, when available. */
        completedAt?: string;
        /** Request expiry timestamp, when available. */
        expiresAt?: string;
        /** Whether the stored result is no longer available. */
        resultExpired?: boolean;
        /**
         * Suggested delay before polling again.
         * @minimum 1
         */
        retryAfterSeconds?: number;
        /** Retained result envelope; may be absent after expiry. */
        result?: {
          /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
          output: unknown;
          /** The upstream provider label, normally AnyAPI. */
          provider: string;
          /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
          costUsd: number;
          /** Number of returned result rows; billing may instead use submitted inputs. */
          items: number;
          /** Whether this is a replay of an earlier execution. */
          replayed: boolean;
          /** Identity of the upstream data source that served the request. */
          source?: Record<string, unknown>;
          /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
          resultId?: string;
          /** Upstream completeness, pagination, or query guidance. */
          hint?: string;
          /** Output shaping error; the unshaped result is retained when shaping fails. */
          jqError?: string;
          [key: string]: unknown;
        };
        /** Terminal upstream error information, when provided. */
        error?: Record<string, unknown>;
        /** Service outcome independent of payment settlement. */
        serviceOutcome?: string;
        /** Payment settlement state independent of execution status. */
        settlementState?: string;
        /** Retry identity returned when submitting a request. */
        idempotencyKey?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        [key: string]: unknown;
      };
    };
    /** Read or reshape an AnyAPI cached result without executing the business request again. */
    "anyapi.get_result": {
      input: {
        /**
         * Opaque cached result identifier returned by an execution.
         * @minLength 1
         */
        resultId: string;
        /** Comma-separated output fields to retain; this does not reduce charges. */
        fields?: string;
        /**
         * Maximum returned rows after execution; this does not reduce charges.
         * @minimum 0
         */
        max_items?: number;
        /** Return a structural outline instead of the full output; charges are unchanged. */
        summary?: boolean;
        /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
        jq?: string;
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Get a GitHub repository's README by repository URL, as the Markdown text the maintainers wrote, with its file name, path and size. Use it to learn what a project does, which models and tools it uses, and how to reach its authors. */
    "anyapi.github_repository_readme": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `content` or `size`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a README that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"content" | "downloadUrl" | "name" | "path" | "sha" | "size" | "url">;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /**
         * GitHub repository URL, e.g. https://github.com/openai/whisper. The README of the default branch is returned.
         * @pattern ^(https?://)?(www\.)?github\.com/[^/?#]+/[^/?#]+
         */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** List trending GitHub developers (rank, username, name, avatar, and their most popular repository), optionally filtered by programming language and time range. */
    "anyapi.github_trending_developers": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /** Programming language to filter trending developers (e.g. javascript, python, go). */
        language?: string;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Trending range: daily, weekly, or monthly (defaults to daily). */
        since?: "daily" | "weekly" | "monthly";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** List GitHub Trending repositories (rank, stars, stars gained today, language, and description), filterable by language and time window. */
    "anyapi.github_trending_repositories": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /** Filter by programming language (e.g. "go", "typescript"). Omit for all languages. */
        language?: string;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Trending window.
         * @default "daily"
         */
        since?: "daily" | "weekly" | "monthly";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** List a GitHub user's public contribution activity by handle (grouped monthly summaries of commits, pull requests, and issues with repository links) for a given year. */
    "anyapi.github_user_activity": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Pagination cursor from a previous response (pages backward by month). */
        cursor?: string;
        /** GitHub username. */
        handle: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Year of contribution activity to return (defaults to the current year). */
        year?: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch a GitHub user's contribution graph for a year (total contributions plus per-day counts and heatmap intensity). */
    "anyapi.github_user_contributions": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** GitHub username. */
        handle: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Calendar year of the contribution graph. Defaults to the current year. */
        year?: number;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** List a GitHub user's followers by handle (each follower's login, type, avatar, and profile URL) with pagination. */
    "anyapi.github_user_followers": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Pagination cursor from a previous response (page number, defaults to 1). */
        cursor?: string;
        /** GitHub username. */
        handle: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** List the GitHub users a given user follows by handle (each account's login, type, avatar, and profile URL) with pagination. */
    "anyapi.github_user_following": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Pagination cursor from a previous response (page number, defaults to 1). */
        cursor?: string;
        /** GitHub username. */
        handle: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** List a GitHub user's public pull requests by handle (title, repository, state, creation date, and URL) with optional date filtering and pagination. */
    "anyapi.github_user_pull_requests": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Pagination cursor from a previous response (page number, defaults to 1). */
        cursor?: string;
        /** GitHub username. */
        handle: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Only include pull requests created on or after this date (YYYY-MM-DD).
         * @pattern ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
         */
        since?: string;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /**
         * Only include pull requests created on or before this date (YYYY-MM-DD).
         * @pattern ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
         */
        until?: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Get one hotel from Google Hotels by its property ID: address, phone, website, rating, nightly price, prices from each booking site, amenities and check-in times as normalized JSON. */
    "anyapi.google_hotels_details": {
      input: {
        /**
         * Number of adult guests (default 2).
         * @minimum 1
         * @default 2
         */
        adults?: number;
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * Check-in date in YYYY-MM-DD format (e.g. 2027-04-13). Today or later.
         * @pattern ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
         * @format date
         */
        checkIn: string;
        /**
         * Check-out date in YYYY-MM-DD format (e.g. 2027-04-15). After the check-in date.
         * @pattern ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
         * @format date
         */
        checkOut: string;
        /** Age of each child guest, one entry per child (e.g. [5, 8] for two children aged 5 and 8). Omit it when no children are staying. */
        childrenAges?: Array<number>;
        /** Two-letter lowercase ISO 3166-1 country code of the destination (e.g. us, pt, jp). It must be the country the hotels are in: results are searched from that country. */
        country: "ad" | "ae" | "af" | "ag" | "al" | "am" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bw" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "er" | "es" | "et" | "fi" | "fj" | "fm" | "fr" | "ga" | "gb" | "gd" | "ge" | "gg" | "gh" | "gm" | "gn" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "iq" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kr" | "kw" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mp" | "mr" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pt" | "pw" | "py" | "qa" | "ro" | "rs" | "rw" | "sa" | "sb" | "sc" | "se" | "sg" | "sh" | "si" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "st" | "sv" | "sx" | "sz" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tr" | "tt" | "tv" | "tz" | "ua" | "ug" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vn" | "vu" | "wf" | "ws" | "ye" | "za" | "zm" | "zw";
        /**
         * ISO 4217 currency code for prices (e.g. USD, EUR, JPY; default USD).
         * @pattern ^[A-Z]{3}$
         * @default "USD"
         */
        currency?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Google Hotels property ID of the hotel, the propertyToken google_hotels.search returns for it.
         * @minLength 1
         */
        propertyToken: string;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `stars` or `images`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a hotel that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"images" | "stars" | "totalPrice">;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search Google Hotels by destination and dates and get hotels with their Google property ID, nightly price, rating, review count, coordinates, star class and photos as normalized JSON. */
    "anyapi.google_hotels_search": {
      input: {
        /**
         * Number of adult guests (default 2).
         * @minimum 1
         * @default 2
         */
        adults?: number;
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * Check-in date in YYYY-MM-DD format (e.g. 2027-04-13). Today or later.
         * @pattern ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
         * @format date
         */
        checkIn: string;
        /**
         * Check-out date in YYYY-MM-DD format (e.g. 2027-04-15). After the check-in date.
         * @pattern ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
         * @format date
         */
        checkOut: string;
        /** Age of each child guest, one entry per child (e.g. [5, 8] for two children aged 5 and 8). Omit it when no children are staying. */
        childrenAges?: Array<number>;
        /** Two-letter lowercase ISO 3166-1 country code of the destination (e.g. us, pt, jp). It must be the country the hotels are in: results are searched from that country. */
        country: "ad" | "ae" | "af" | "ag" | "al" | "am" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bw" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "er" | "es" | "et" | "fi" | "fj" | "fm" | "fr" | "ga" | "gb" | "gd" | "ge" | "gg" | "gh" | "gm" | "gn" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "iq" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kr" | "kw" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mp" | "mr" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pt" | "pw" | "py" | "qa" | "ro" | "rs" | "rw" | "sa" | "sb" | "sc" | "se" | "sg" | "sh" | "si" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "st" | "sv" | "sx" | "sz" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tr" | "tt" | "tv" | "tz" | "ua" | "ug" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vn" | "vu" | "wf" | "ws" | "ye" | "za" | "zm" | "zw";
        /**
         * ISO 4217 currency code for prices (e.g. USD, EUR, JPY; default USD).
         * @pattern ^[A-Z]{3}$
         * @default "USD"
         */
        currency?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * What to search for, usually a destination or landmark (e.g. hotels near times square new york).
         * @minLength 1
         */
        query: string;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `totalPrice` or `amenities`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a hotel that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"amenities" | "description" | "totalPrice">;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch one Google Jobs listing by the listingToken that google.jobs returns: title, company, location, the site it was found on, the full description, apply links on every board that carries it, the posting details Google shows (posted, pay, job type, benefits), and the employer's ratings on review sites such as Glassdoor and Indeed when Google shows them. */
    "anyapi.google_job": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * The listingToken of one listing in a google.jobs response.
         * @minLength 1
         * @maxLength 16384
         */
        listingToken: string;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search Google Jobs, the job listings Google gathers from LinkedIn, Indeed, ZipRecruiter, company career sites and other boards, and get about 10 listings per call: title, company, location, the site it was found on, the full description, apply links on every board that carries it, and the posting details Google shows (posted, pay, job type, benefits). Each listing carries a listingToken you can pass to google.job for employer ratings. Send nextCursor back as cursor to walk further pages. */
    "anyapi.google_jobs": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * Opaque cursor from a previous response's nextCursor. Send it with the same query, location, gl and hl to get the next page of about 10 listings; it expires about an hour after it was issued, after which you start again from page 1.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Two-letter country code to search in (e.g. us, gb, de).
         * @pattern ^[A-Za-z]{2}$
         * @default "us"
         */
        gl?: string;
        /**
         * Language code for the listings and their details (e.g. en, de, es).
         * @default "en"
         */
        hl?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /** City, region or country to search around, e.g. Chicago, IL or London. Google may include nearby places. */
        location?: string;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Job title or keywords to search, e.g. registered nurse. A place written into the query ("barista in Austin, TX") also localizes the search.
         * @minLength 1
         */
        query: string;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Hacker News user's public profile by username - karma, bio, and account details as clean JSON. */
    "anyapi.hackernews_profile": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Hacker News username, e.g. "pg". */
        handle: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Hacker News story by id - title, link, author, points, and comment count as clean JSON. */
    "anyapi.hackernews_story": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Hacker News story id, e.g. "47340079". */
        id: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** List the comments on a Hacker News story by id - text, author, and timestamp as clean JSON. */
    "anyapi.hackernews_story_comments": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Hacker News story id, e.g. "47340079". */
        id: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search IKEA's US store by keyword and get title, price, rating, and image for each product in one normalized response. */
    "anyapi.ikea_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * 1-based results page of 24 products. Each page is billed as one request.
         * @minimum 1
         * @maximum 100
         * @default 1
         */
        page?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Search keywords, e.g. "bookshelf" or "desk".
         * @minLength 1
         */
        query: string;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `memberOffer`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"memberOffer">;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search Levels.fyi job listings by title or keyword and get each job with its salary range and estimated total compensation where Levels.fyi has them, plus company, location, posting date and apply link. Returns up to 20 jobs per call, grouped by company; filter by location and sort by relevance, date or pay. */
    "anyapi.levels_jobs": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Maximum number of jobs to return (1-20, default 20). Levels.fyi groups jobs by company, up to 3 per company, so several results can come from one employer.
         * @minimum 1
         * @maximum 20
         * @default 20
         */
        limit?: number;
        /**
         * Levels.fyi location slug as it appears in Levels.fyi URLs, e.g. united-states. Not a free-text city name; omit it to search everywhere.
         * @pattern ^[a-z0-9][a-z0-9-]{0,127}$
         */
        location?: string;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Job title, keywords or company name to search, e.g. software engineer or google.
         * @minLength 1
         * @maxLength 512
         */
        query: string;
        /**
         * Sort order: best match (relevance), most recently posted (date), or highest total compensation (compensation).
         * @default "relevance"
         */
        sortBy?: "relevance" | "date" | "compensation";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search the LinkedIn Ad Library by search URL and list the matching ads (advertiser, creative text, format). */
    "anyapi.linkedin_ads": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** LinkedIn Ad Library search URL or a LinkedIn company URL (e.g. https://www.linkedin.com/ad-library/search?companyIds=1035). */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch one LinkedIn group by URL or id: name, description, rules, member count, logo and cover image, creation date, visibility and join settings, and its admins. */
    "anyapi.linkedin_group": {
      input: Record<string, unknown>;
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** List the posts in a LinkedIn group by group URL, newest first: full text, canonical link, publish date, author, engagement counts with a per-reaction breakdown, and attached media. One call returns a page of about 100 posts; pass page to go further back. */
    "anyapi.linkedin_group_posts": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Which page of about 100 posts to return, starting at 1 (default 1). Page 2 continues where page 1 ended, going further back in time. Each page is billed as one request.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /** Only return posts published within this window (default any). The window is applied to the page, so a page can come back with fewer posts or none. */
        postedLimit?: "any" | "1h" | "24h" | "week" | "month" | "3months" | "6months" | "year";
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Full LinkedIn group URL (e.g. https://www.linkedin.com/groups/1898033). */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search LinkedIn groups by keyword, 10 per page: group name, URL, member count, summary, and logo. */
    "anyapi.linkedin_search_groups": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Which page of up to 10 groups to return, starting at 1 (1-100, default 1). Each page is billed as one request.
         * @minimum 1
         * @maximum 100
         * @default 1
         */
        page?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Keyword to search LinkedIn groups for (e.g. python or sales).
         * @minLength 1
         */
        query: string;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Find freelancers and service providers on LinkedIn by the service they offer (e.g. 'Web Development'), optionally in a location. One call returns a page of up to 10 people, each with name, headline, location, about text, photo, profile URL, service page URL, and the list of services they offer. The profile URL can be passed to linkedin.profile for the full record. */
    "anyapi.linkedin_search_services": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** LinkedIn geo id to target a precise location (e.g. 103644278 for the United States); more exact than the free-text location, and overrides it when both are sent. */
        geoId?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /** Optional location filter as a place name (e.g. 'Australia', 'New York'). LinkedIn picks its closest location match, so a short or ambiguous name can land elsewhere; use geoId for an exact place. */
        location?: string;
        /**
         * Which page of up to 10 people to return, starting at 1 (1-100, default 1). Each page is billed as one request.
         * @minimum 1
         * @maximum 100
         * @default 1
         */
        page?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** The service to search for, as keywords (e.g. 'Web Development', 'Accounting', 'Photography'). */
        query: string;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Get a public Linktree page by URL: title, bio, picture, contact email, linked social accounts, and every link card with its destination. */
    "anyapi.linktree_profile": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `title`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a page that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"locked" | "thumbnailUrl" | "title">;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** The Linktree profile URL, e.g. https://linktr.ee/mkbhd. */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search up to five enriched Naver blog results by keyword with stable cursor pagination: result rank, title, excerpt, post and blogger URLs, blogger name, publish time, and Naver's total match count. */
    "anyapi.naver_blog_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Opaque pagination cursor from a previous response's nextCursor. */
        cursor?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Maximum number of title-enriched posts to return, from 1 to 5 (default 5).
         * @minimum 1
         * @maximum 5
         */
        limit?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Keyword phrase to search across Naver blogs.
         * @minLength 1
         */
        query: string;
        /** Order posts by Naver relevance or newest publication date (default relevance). */
        sort?: "relevance" | "recent";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch one Nextdoor business page by its slug, with phone, email, website, and street address. */
    "anyapi.nextdoor_business": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Maximum number of records to return. A business page resolves to one record, so this is always 1.
         * @minimum 1
         * @maximum 1
         */
        limit?: number;
        /** Nextdoor market the page belongs to: "us" (nextdoor.com), "gb" (nextdoor.co.uk), or "ca" (ca.nextdoor.com). Defaults to "us". */
        market?: "us" | "gb" | "ca";
        /**
         * Slug of the Nextdoor business page, the last path segment of its /pages/ URL, e.g. "radiant-plumbing-air-conditioning-austin-tx".
         * @minLength 1
         */
        pageSlug: string;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Find local businesses listed on Nextdoor by city and trade category, with phone, email, website, and street address. */
    "anyapi.nextdoor_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * Nextdoor city slug, lowercase, with the city and its state or region joined by two hyphens, e.g. "austin--tx" or "york--england".
         * @minLength 1
         */
        city: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Maximum number of businesses to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /** Nextdoor market the city belongs to: "us" (nextdoor.com), "gb" (nextdoor.co.uk), or "ca" (ca.nextdoor.com). Defaults to "us". */
        market?: "us" | "gb" | "ca";
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Business category to look for in that city, e.g. "plumber", "bakery", "electrician".
         * @minLength 1
         */
        query: string;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search Pexels for free stock photos by keyword. Returns image URLs in several sizes, dimensions, alt text, the photographer's name and profile, and the photo's Pexels page. */
    "anyapi.pexels_search_photos": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Maximum number of photos to return (1-20, default 20). You are billed per photo returned, so a lower limit costs less.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /**
         * Only return photos at least this many pixels tall.
         * @minimum 1
         */
        minHeight?: number;
        /**
         * Only return photos at least this many pixels wide.
         * @minimum 1
         */
        minWidth?: number;
        /** Only return photos with this orientation. Omit for any orientation. */
        orientation?: "landscape" | "portrait" | "square";
        /** Only return photos showing this many people: "0" for none, "1" or "2". Omit for any number. */
        peopleCount?: "0" | "1" | "2";
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Keyword or phrase to search Pexels photos for, e.g. "coffee" or "city skyline".
         * @minLength 1
         */
        query: string;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `tags`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a photo that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"tags">;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Look up the public property records for one US address: current and previous owners, parcel number (APN), last sale, assessed and market values, property tax, beds, baths, living area, lot size, year built, land use, and zoning. One address can match several parcels, and every match is returned. Billed only when a record is found. */
    "anyapi.property_records_enformion": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * City of the property, e.g. Austin.
         * @minLength 1
         */
        city: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /**
         * US state of the property, as its two-letter code, e.g. TX.
         * @minLength 2
         * @maxLength 2
         */
        state: string;
        /**
         * Street line of one US property address, e.g. 4510 Secure Ln. Include a unit number when there is one.
         * @minLength 1
         */
        street: string;
        /**
         * Five-digit ZIP code, optionally with its four-digit extension, e.g. 78725.
         * @pattern ^[0-9]{5}(-[0-9]{4})?$
         */
        zip?: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch full details for a single Redfin home by its listing URL (price, beds, baths, square feet, address, listing agent, description and photos) as normalized JSON. */
    "anyapi.redfin_property": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /**
         * Redfin home details URL (e.g. https://www.redfin.com/TX/Austin/1819-Village-Oak-Ct-78704/home/30981993).
         * @minLength 1
         */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Run a Redfin map search by URL and get matching home listings (price, address, beds, baths, status) as normalized JSON. */
    "anyapi.redfin_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Maximum number of results to return (1-25, default 25).
         * @minimum 1
         * @maximum 25
         */
        limit?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `description`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a listing that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"agentName" | "countryCode" | "daysOnMarket" | "description" | "garageSpaces" | "hoaFee" | "parkingSpaces" | "pricePerSqft" | "soldUtc" | "stories">;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Redfin search results URL for a city, ZIP or map area (e.g. https://www.redfin.com/city/30772/CA/San-Francisco). */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch a SamsClub.com product by URL and get title, member price, stock, brand, model, UPC, rating, description, and images in one normalized response. */
    "anyapi.samsclub_product": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /**
         * Sam's Club product page URL, e.g. https://www.samsclub.com/ip/Bounty-Select-A-Size-2-Ply-Paper-Towels-12-Rolls-110-sheets-roll/18040450426. Prices and stock are those of Sam's Club's default club.
         * @pattern ^https?://(www\.)?samsclub\.com/ip/(?:[^/?#]+/)?[0-9]+
         */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search SamsClub.com by keyword with optional sort, price-range, and page filters and get title, member price, stock, and rating for each product in one normalized response. */
    "anyapi.samsclub_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional maximum member price in USD.
         * @minimum 0
         */
        maxPrice?: number;
        /**
         * Optional minimum member price in USD.
         * @minimum 0
         */
        minPrice?: number;
        /**
         * 1-based results page of about 40 to 50 products. Each page is billed as one request.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Search keywords, e.g. "paper towels" or "tv".
         * @minLength 1
         */
        query: string;
        /** Result sort order; omit for Sam's Club's Best Match (e.g. price_low sorts by lowest price first). */
        sort?: "best_match" | "price_low" | "price_high";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch one Slickdeals deal by URL and get title, price, list price, store, coupon code, score, views, comments, and description in one normalized response. */
    "anyapi.slickdeals_deal": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /**
         * Slickdeals deal page URL, e.g. https://slickdeals.net/f/20177112-lg-55-c6-series-oled-evo-ai-4k-smart-webos-tv-2026-best-buy-amazon-999-99.
         * @pattern ^https?://(www\.)?slickdeals\.net/f/[0-9]+
         */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search Slickdeals deals by keyword with optional sort, price, discount, and page filters and get title, price, list price, store, score, and comment count for each deal in one normalized response. */
    "anyapi.slickdeals_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional; true leaves out deals the community marked expired. */
        hideExpired?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional maximum deal price in USD; deals without a numeric price are left out.
         * @minimum 0
         */
        maxPrice?: number;
        /**
         * Optional; keep only deals at least this many percent off the list price, e.g. 50.
         * @minimum 1
         * @maximum 99
         */
        minDiscount?: number;
        /**
         * Optional minimum deal price in USD; deals without a numeric price are left out.
         * @minimum 0
         */
        minPrice?: number;
        /**
         * 1-based page of 40 deals; Slickdeals stops at page 25. Each page is billed as one request.
         * @minimum 1
         * @maximum 25
         * @default 1
         */
        page?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Search keywords, e.g. "airpods" or "laptop".
         * @minLength 1
         */
        query: string;
        /** Result order; omit for Slickdeals' relevance order (e.g. new for the most recently posted deals first). */
        sort?: "best_match" | "new" | "popular" | "price_low" | "price_high";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch a Snapchat user's public profile by username: display name, bio, subscriber count, and recent public content. */
    "anyapi.snapchat_profile": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** The Snapchat username or profile URL to look up (e.g. fcbarcelona or https://www.snapchat.com/add/fcbarcelona). */
        username: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch a Spotify album's tracklist, play counts, label, and release details by album URL or ID. */
    "anyapi.spotify_album": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Spotify album ID (alternative to url). */
        id?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Spotify album URL (e.g. https://open.spotify.com/album/0pgrg7phBbnwGJ2HBEl9EG). */
        url?: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch a Spotify artist's discography (albums, singles, top tracks) and metadata by artist URL or ID. */
    "anyapi.spotify_artist": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Spotify artist ID (alternative to url). */
        id?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Spotify artist URL (e.g. https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa). */
        url?: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch stream counts and stats for a Spotify track, album, or artist URL. */
    "anyapi.spotify_play_count": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Spotify track, album, or artist URL to fetch stream counts for (e.g. https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp). */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch a Spotify podcast show's name, publisher, description, rating, and topics by show URL or ID. */
    "anyapi.spotify_podcast": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Spotify podcast show ID (alternative to url). */
        id?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Spotify podcast show URL (e.g. https://open.spotify.com/show/3mliji9352UAk3XnWElnDV). */
        url?: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** List a Spotify podcast show's episodes with titles, durations, descriptions, and release dates by show URL or ID. */
    "anyapi.spotify_podcast_episodes": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Pagination cursor from a previous response for subsequent pages. */
        cursor?: string;
        /** Spotify podcast show ID (alternative to url). */
        id?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Spotify podcast show URL (e.g. https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk). */
        url?: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search Spotify for matching tracks, albums, artists, podcasts, and playlists by keyword. */
    "anyapi.spotify_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Search term (e.g. "my first million"). */
        query: string;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch a Spotify track's play count, popularity, duration, and album details by track URL or ID. */
    "anyapi.spotify_track": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Spotify track ID (alternative to url). */
        id?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Spotify track URL (e.g. https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT). */
        url?: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch a Target.com product by URL and get title, price, brand, rating, description, and images in one normalized response. */
    "anyapi.target_product": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `availability`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a product that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"availability" | "category" | "dpci" | "highlights" | "images" | "listPrice" | "packageDimensions" | "rating" | "ratingCount" | "returnPolicy" | "specifications" | "upc">;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /**
         * Target product page URL; the TCIN after /A- identifies the product (e.g. https://www.target.com/p/-/A-91863920).
         * @pattern ^https?://(www\.)?target\.com/.*\/A-[0-9]+
         */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Pull a page of 10 customer reviews for any Target.com product by URL, newest first or by helpfulness or rating: rating, title, text, date, reviewer, and verified-purchase badge. */
    "anyapi.target_reviews": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * 1-based page of 10 reviews. Each page is billed as one request; keep url and sort the same while walking pages.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Review order: recent (newest first, the default), helpful, rating_high, or rating_low (e.g. helpful).
         * @default "recent"
         */
        sort?: "recent" | "helpful" | "rating_high" | "rating_low";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /**
         * Target product page URL; the TCIN after /A- identifies the product (e.g. https://www.target.com/p/-/A-91863920).
         * @pattern ^https?://(www\.)?target\.com/.*\/A-[0-9]+
         */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search Target.com by keyword with optional sort, price-range, and page filters and get title, price, rating, and brand for each product in one normalized response. */
    "anyapi.target_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional maximum product price in USD.
         * @minimum 0
         */
        maxPrice?: number;
        /**
         * Optional minimum product price in USD.
         * @minimum 0
         */
        minPrice?: number;
        /**
         * 1-based results page of 24 products; Target serves no products past page 50. Each page is billed as one request.
         * @minimum 1
         * @maximum 50
         * @default 1
         */
        page?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Search keywords, e.g. "coffee maker" or "lego".
         * @minLength 1
         */
        query: string;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `totalPages`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"hasMore" | "images" | "isSponsored" | "rating" | "totalPages">;
        /** Result sort order; omit for Target's own relevance order (e.g. price_low sorts by lowest price first). */
        sort?: "best_match" | "best_seller" | "price_low" | "price_high" | "rating_high" | "new";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch the latest reviews for any Tripadvisor hotel, restaurant, or attraction by its page URL: rating, text, date, and trip details as normalized JSON. */
    "anyapi.tripadvisor_reviews": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /** Only return reviews in these ISO 639-1 languages (e.g. ["en", "es"]); omit for all languages. */
        languages?: Array<string>;
        /**
         * Maximum number of results to return (1-20, default 20).
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Only return reviews whose bubble rating is in this set (e.g. ["5", "4"] for 4 and 5 star reviews); omit for all ratings. */
        ratings?: Array<"1" | "2" | "3" | "4" | "5">;
        /** Only return reviews newer than this date, YYYY-MM-DD or a relative window like '3 months' (e.g. 2026-01-01). */
        since?: string;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Tripadvisor page URL of the hotel, restaurant, or attraction. */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search Tripadvisor for hotels, restaurants, and attractions in any destination and get rich place records (ratings, review counts, contact details, pricing) as normalized JSON. */
    "anyapi.tripadvisor_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /**
         * ISO currency code for prices (e.g. USD, EUR).
         * @default "USD"
         */
        currency?: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Include attractions and things to do in the results; set false to exclude them (e.g. false). Defaults to true.
         * @default true
         */
        includeAttractions?: boolean;
        /**
         * Include hotels in the results; set false to exclude them (e.g. false). Defaults to true.
         * @default true
         */
        includeHotels?: boolean;
        /**
         * Include restaurants in the results; set false to exclude them (e.g. false). Defaults to true.
         * @default true
         */
        includeRestaurants?: boolean;
        /**
         * Maximum number of results to return (1-20, default 20).
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Destination or keyword to search for (e.g. Barcelona). */
        query: string;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `phone` or `website`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a place that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"address" | "city" | "country" | "email" | "hotelClass" | "latitude" | "longitude" | "phone" | "postalCode" | "priceLevel" | "priceRange" | "ranking" | "website">;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Get a single Truth Social post by its URL - text, author, engagement (likes, comments, shares), and timestamp as clean JSON. */
    "anyapi.truthsocial_post": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Full Truth Social post URL, e.g. "https://truthsocial.com/@realDonaldTrump/posts/116824551176646175". */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Truth Social account's public profile by handle - display name, bio, follower/following counts, and post count as clean JSON. */
    "anyapi.truthsocial_profile": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Truth Social handle without the @, e.g. "realDonaldTrump". */
        handle: string;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search Unsplash for free stock photos by keyword. Returns image URLs in several sizes, dimensions, alt text, the photographer's name and profile, and the photo's Unsplash page. */
    "anyapi.unsplash_search_photos": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Only return photos with this dominant color tone. Omit for any color. */
        color?: "black_and_white" | "black" | "white" | "yellow" | "orange" | "red" | "purple" | "magenta" | "green" | "teal" | "blue";
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Maximum number of photos to return (1-20, default 20). You are billed per photo returned, so a lower limit costs less.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /** Only return photos with this orientation. Omit for any orientation. */
        orientation?: "landscape" | "portrait" | "square";
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /**
         * Keyword or phrase to search Unsplash photos for, e.g. "coffee" or "minimal workspace".
         * @minLength 1
         */
        query: string;
        /**
         * Order results by best match (relevant, the default) or newest first (recent).
         * @default "relevant"
         */
        sortBy?: "relevant" | "recent";
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Search Yelp for businesses by keyword and location: up to 20 listings with ratings, categories, and core business info per request. */
    "anyapi.yelp_search": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Maximum number of results to return (1 to 20, default 20).
         * @minimum 1
         * @maximum 20
         * @default 20
         */
        limit?: number;
        /** City and state defining the search area (e.g. San Francisco, CA). */
        location: string;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Search term or category to look for (e.g. sushi). */
        query: string;
        /** Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `is_closed` or `price`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a place that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. */
        requireFields?: Array<"address2" | "address3" | "dialable_phone" | "is_closed" | "localized_phone" | "photo_count" | "price" | "unrounded_avg_rating">;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch one Zillow real estate agent's profile by URL: name, phone, email, brokerage, rating, review count, sales, and service areas. */
    "anyapi.zillow_agent": {
      input: {
        /**
         * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
         * @default true
         */
        allowFallbacks?: boolean;
        /** Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way. */
        ignoreSources?: Array<string>;
        /**
         * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
         * @minimum 1
         */
        preferLatencyUnderMs?: number;
        /** Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`. */
        source?: Array<string>;
        /** Zillow agent profile URL (e.g. https://www.zillow.com/profile/gregorycarlsonATX/). */
        url: string;
        /** Optional request budget, output shaping, and retry identity. */
        requestOptions?: {
          /** Comma-separated output fields to retain; this does not reduce charges. */
          fields?: string;
          /**
           * Maximum returned rows after execution; this does not reduce charges.
           * @minimum 0
           */
          max_items?: number;
          /** Return a structural outline instead of the full output; charges are unchanged. */
          summary?: boolean;
          /** A jq expression shaping output, which may become an array or scalar; charges are unchanged. */
          jq?: string;
          /** Maximum USD cost for this request; unaffordable routes are refused before execution. */
          max_cost_usd?: string;
          /**
           * Reuse this key only for retries of the same logical request. A UUID v7 is generated when omitted and returned in the response or error details.
           * @minLength 1
           * @maxLength 255
           */
          idempotencyKey?: string;
        };
      };
      output: {
        /** AnyAPI business output, normally {found, data, reason?}; jq or summary may change its shape. Unknown upstream fields are preserved. */
        output: unknown;
        /** The upstream provider label, normally AnyAPI. */
        provider: string;
        /** USD charged for the original execution; replay and cached reads do not charge this amount again. */
        costUsd: number;
        /** Number of returned result rows; billing may instead use submitted inputs. */
        items: number;
        /** Whether this is a replay of an earlier execution. */
        replayed: boolean;
        /** Identity of the upstream data source that served the request. */
        source?: Record<string, unknown>;
        /** Cached unshaped result handle, when retained; use get_result to reshape without another run. */
        resultId?: string;
        /** Upstream completeness, pagination, or query guidance. */
        hint?: string;
        /** Output shaping error; the unshaped result is retained when shaping fails. */
        jqError?: string;
        /** Upstream Idempotency-Replayed header: false confirms a fresh execution with an accepted key, true confirms a replay, and null means idempotency support was not confirmed. A sent key alone does not guarantee a free retry. */
        idempotencyReplayed?: boolean | null;
        /** Upstream request identifier, when supplied. */
        requestId?: string;
        /** Retry identity used for this invocation; retain it when resuming the same request. */
        idempotencyKey?: string;
        [key: string]: unknown;
      };
    };
  }
}
