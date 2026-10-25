import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Compare this provision against other states. */
    "vaquill.compare_states": {
      input: {
        /**
         * Section identifier, e.g. `USC_T42_C21_S1983` (Title 42, Chapter 21, Section 1983, which a lawyer writes as 42 U.S.C. § 1983). Take it from a `/us/statutes/search` or `/us/statutes/resolve` result.
         *
         * A citation also works here: `26 U.S.C. § 1`, `42 USC 1983` or `Cal. Civ. Code § 1950.5` is resolved with the same resolver `/resolve` uses, and the section is served. A citation costs this endpoint's price PLUS the `/resolve` price (2 credits), charged as its own line whether or not it resolves, exactly as `/resolve` charges; that is the same total as calling `/resolve` and then this endpoint, in one round trip. An exact act_id costs only this endpoint's price. When a citation resolves, or when the id only matched after surrounding whitespace, quotes or a trailing period were removed, the response carries `resolvedFrom` saying what your input was matched as. Check it the way you would check a `/resolve` answer. A citation containing `/` cannot travel in a URL path segment; resolve it with `GET /us/statutes/resolve` instead.
         *
         * Do not assemble an id from a citation: the title and section are derivable, but the CHAPTER is not, so `USC_T26_S1` misses. A miss returns 404 with `reason` and, where the section exists under another id, `didYouMean`.
         *
         * State session laws (acts as enacted, ids starting `SSL_`) are not code sections: read them at `/us/session-laws/{sessionLawId}`.
         * @minLength 3
         * @maxLength 200
         */
        act_id: string;
        /**
         * Maximum states to return, one provision each.
         * @minimum 1
         * @maximum 25
         */
        limit?: number;
      };
      output: {
        /** The section you asked about. */
        section: Record<string, unknown>;
        /** Comparable provisions in other states, most similar first. At most one entry per state, so this reads as a jurisdiction comparison rather than a relevance list. */
        neighbors?: Array<Record<string, unknown>>;
        /** How many distinct states are represented. Fewer than you asked for means no provision in the remaining states cleared the similarity floor, not that those states are missing from the corpus. */
        statesCovered?: number;
        /** Set only when the answer is not a real zero. Cross-state comparison is defined for state statute sections; for USC, CFR and other corpora this explains that the section has no state analogues and the call is refunded. */
        note?: string | null;
        /** True when the relevance model was unavailable, so the neighbors are in retrieval order and `similarity` is a retrieval score on a much smaller scale rather than the usual 0-1. The provisions are still the retrieved analogues; retry shortly for the fully ranked answer. */
        rankingDegraded?: boolean;
        /** Null when the section is exactly the act_id you sent. Otherwise how your input was matched: a citation, or an act_id with transport damage (whitespace, quotes, a trailing period) removed. When your citation named a chapter, article, series or several sections, the section served is the FIRST of them and `matchLevel` says so, as on `GET /us/statutes/resolve`. */
        resolvedFrom?: Record<string, unknown> | null;
        /** Server-side time for this request in milliseconds, excluding network transit. Useful for spotting a slow query; not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call. Read it rather than assuming the list price: failed and refunded work bills 0. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
    /** Count the sections in a scope. */
    "vaquill.count_statutes": {
      input: {
        /** Corpus to count, single or list. Omit to count every corpus. */
        corpusType?: "USC" | "CFR" | "STATE" | "CONSTITUTION" | "FEDERAL_RULES" | "FEDERAL_LOCAL_RULES" | "STATE_CONSTITUTION" | "STATE_RULES" | "EXECUTIVE_ACTION" | "REGULATION" | "FEDERAL_REGISTER" | "FEDERAL_REGISTER_NOTICE" | "AGENCY_GUIDANCE" | "SENTENCING_GUIDELINES" | "US_TAX_TREATY" | "STATE_AGENCY_GUIDANCE" | "STATE_AG_OPINION" | "STATE_REGISTER" | "SESSION_LAW" | "STATUTE_COMPILATION" | "AGENCY_ADJUDICATION" | "CFR_ANNUAL" | "USC_ANNUAL" | Array<"USC" | "CFR" | "STATE" | "CONSTITUTION" | "FEDERAL_RULES" | "FEDERAL_LOCAL_RULES" | "STATE_CONSTITUTION" | "STATE_RULES" | "EXECUTIVE_ACTION" | "REGULATION" | "FEDERAL_REGISTER" | "FEDERAL_REGISTER_NOTICE" | "AGENCY_GUIDANCE" | "SENTENCING_GUIDELINES" | "US_TAX_TREATY" | "STATE_AGENCY_GUIDANCE" | "STATE_AG_OPINION" | "STATE_REGISTER" | "SESSION_LAW" | "STATUTE_COMPILATION" | "AGENCY_ADJUDICATION" | "CFR_ANNUAL" | "USC_ANNUAL"> | null;
        /** Two-letter jurisdiction code or `federal`, single or list. */
        state?: "federal" | "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "FEDERAL" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY" | Array<"federal" | "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "FEDERAL" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY"> | null;
        /** State code identifier, e.g. `tx_26`. With `corpusType=FEDERAL_RULES`, a rule set instead (`frcp`, `uscapp_t28a_fre`). Same values and checks as `code` on `/search`. */
        code?: string | Array<string> | null;
        /** Article label (`Amendment XIV`) on CONSTITUTION / STATE_CONSTITUTION, or article number (`2-A`) on a STATE / REGULATION code divided by article. Same values and pairing rules as `article` on `/search`. */
        article?: string | Array<string> | null;
        /** USC or CFR title number. */
        titleNumber?: number | null;
        /** Chapter identifier. Pair with `titleNumber` or `code`. */
        chapter?: string | Array<string> | null;
        /** CFR part identifier. Pair with `titleNumber`. */
        part?: string | Array<string> | null;
        /** Count only sections carrying this status. */
        actStatus?: "abolished" | "deleted" | "expired" | "in_force" | "inactive" | "non_precedential" | "not_funded" | "not_yet_effective" | "omitted" | "proposed" | "recodified" | "recompiled" | "rejected" | "relocated" | "removed" | "renumbered" | "repealed" | "rescinded" | "reserved" | "revoked" | "superseded" | "terminated" | "transferred" | "unconstitutional" | "vacant" | "vacated" | "vetoed" | "withdrawn" | Array<"abolished" | "deleted" | "expired" | "in_force" | "inactive" | "non_precedential" | "not_funded" | "not_yet_effective" | "omitted" | "proposed" | "recodified" | "recompiled" | "rejected" | "relocated" | "removed" | "renumbered" | "repealed" | "rescinded" | "reserved" | "revoked" | "superseded" | "terminated" | "transferred" | "unconstitutional" | "vacant" | "vacated" | "vetoed" | "withdrawn"> | null;
        /** Exclude sections whose status is affirmatively dead. A section with no recorded status is KEPT, because a missing status is not evidence of repeal. The US Code is served from a stored annual edition, so a section repealed after it closed is counted here; see the same field on `/search` for the measurement. */
        excludeRepealed?: boolean;
      };
      output: {
        /** Sections in scope. This is a SECTION count, not a passage count: long sections are stored as several passages and are counted once. */
        count?: number;
        /** True when the figure is an exact count rather than an estimate. Present so a future estimated mode cannot be mistaken for this one. */
        isExact?: boolean;
        /** The filters that produced this figure, echoed back. A count with no scope attached is not reproducible, and an ignored filter would otherwise be invisible. */
        scope?: Record<string, unknown>;
        /** Server-side time for this request in milliseconds. */
        processingTimeMs?: number;
        /** Credits actually charged for this call. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
    /** Create a board watch. */
    "vaquill.create_watch": {
      input: {
        /** Board's corpus_type (e.g. `state`, `state_regulation`, `federal_register`, `agency_guidance`). Matched case-insensitively, so the uppercase spelling the statutes endpoints use for the same body of law (`USC`, `CFR`) works here too. Call GET /boards for the authoritative, current list -- corpus_type is a growing set as new corpora are added, not a fixed enum, and not every corpus we serve is a watchable board. */
        corpusType: string;
        /** Board's state (2-letter, case-insensitive). For a federal board (USC, eCFR, the Federal Register) pass `federal` or omit this entirely; the two are equivalent. Must otherwise match the `state` GET /boards returned for this corpusType -- `GET /boards?corpusType=<type>` lists exactly those. */
        state?: "federal" | "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "FEDERAL" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY" | null;
        /** channel parameter. */
        channel?: "webhook" | "email" | "both";
        /** Required when channel is webhook or both. */
        webhookUrl?: string | null;
        /** Optional signing secret, stored encrypted and never returned. When set, every delivery carries an `X-Vaquill-Signature: sha256=<hex>` header: HMAC-SHA256 of the raw request body bytes, keyed with this secret. To verify, compute the same HMAC over the raw body you received (before parsing JSON) and compare it, constant-time, to the hex digest after `sha256=`. */
        webhookSecret?: string | null;
        /** Required when channel is email or both. */
        emailAddress?: string | null;
        /**
         * Optional narrowing so this alert covers one citation instead of an entire source. Four mutually exclusive forms.
         *
         * **Hierarchy prefix** -- keys `title`, `chapter`, `part`, `section`, e.g. `{"title": "21", "part": "314"}` for 21 CFR part 314. Every level you set must match, so each one narrows further. `title` is required whenever any narrower level is set, and `section` also needs `chapter` or `part`: a bare part number matches across unrelated titles. Only sources whose documents carry a title/chapter/part hierarchy accept this form; the rest return 400.
         *
         * **Exact section** -- `{"actId": "CFR_T21_P314_S314_50"}`, using the `actId` returned by search results and change events. Case-sensitive, and validated at create time against the corpus: an act_id we do not hold, or one belonging to a different source, is a 400 rather than a watch that could never fire. This form works on EVERY source, including flat ones with no hierarchy, so it is the only way to follow a single Federal Register document.
         *
         * **Named source** -- `{"source": "fdic_fil"}`, for the corpora that fold several independent bodies of law behind one `corpusType`. The `agency_guidance` board alone carries 47 named sources across 24 agencies, so an unscoped watch on it delivers FDIC letters, IRS notices, OFAC FAQs and DOE appliance standards together. Accepted on `agency_adjudication`, `agency_guidance`, `agency_manuals`, `cfr`, `federal_rules`; anything else returns 400. The pickable values for a given board are on that board's `sources` array in `GET /boards` -- deliberately narrower than the `source` filter published on `POST /us/statutes/search`, because `agency_guidance` and `agency_manuals` are two boards reading one `corpusType` and each emits only its own half.
         *
         * **Publishing agency** -- `{"agency": "irs"}`, covering every source that agency issues on the board. `source` is the unit we ingest and it is finer than the unit most callers think in: the IRS alone publishes 5 named series, so following it by source means one watch per series and a gap if you miss one. An agency scope is expanded WHEN AN EVENT IS MATCHED rather than when the watch is created, so a source registered after your watch is covered by it automatically, with no action from you. Accepted on `agency_adjudication`, `agency_guidance`, `agency_manuals`; the pickable values are on that board's `agencies` array in `GET /boards`.
         *
         * Omit entirely to watch the whole source, which is the default and the pre-existing behavior.
         */
        scope?: Record<string, string> | null;
        /** Optional outbound credential sent on every delivery, so your gateway can authenticate us with the header it already reads. Independent of `webhookSecret`: set neither, either, or both. Only valid on a webhook or both channel watch. */
        webhookAuth?: {
          /** `bearer` sends `Authorization: Bearer <secret>`. `basic` sends `Authorization: Basic <secret>` with the secret already base64-encoded by you. `header` sends `<headerName>: <secret>`, for gateways that read something like `X-Api-Key`. `none` removes any credential currently stored. */
          scheme?: "none" | "bearer" | "basic" | "header";
          /** The credential value. Stored encrypted and never returned. Required when setting a scheme for the first time or changing scheme; on PATCH you may omit it to keep the stored one while changing only `headerName`. */
          secret?: string | null;
          /** Header to send the credential on. Required for `header`, and rejected for every other scheme. Cannot be `Authorization` (use `bearer`/`basic`), a transport header, or one of ours. */
          headerName?: string | null;
        } | null;
      };
      output: {
        /** Business data returned by Vaquill. */
        data?: Record<string, unknown>;
        /** Timing, credit usage and pagination metadata returned by Vaquill. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Delete a board watch. */
    "vaquill.delete_watch": {
      input: {
        /** watch_id parameter. */
        watch_id: string;
      };
      output: {
        /** Whether the watch and its delivery history were deleted. */
        deleted: boolean;
        [key: string]: unknown;
      };
    };
    /** Find the citations in a text and resolve each. */
    "vaquill.extract_citations": {
      input: {
        /**
         * The text to read, 1 to 200,000 characters (a brief is about 30,000). Longer is a 422, never a silent truncation: a partial list reported as the whole is a wrong answer. Plain text; a body that is mostly binary is a 422.
         * @minLength 1
         * @maxLength 200000
         */
        text: string;
        /** The jurisdiction of the DOCUMENT as a two-letter state code (the forum of a filing, the governing state of a matter). It labels and scopes a citation that names no jurisdiction of its own (`Civil Rule 56.1`, `Gov. Code § 12940`); a citation that names a jurisdiction is always checked against that one, whatever this says. */
        state?: "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY" | null;
        /** Resolve each distinct citation to its section (priced per distinct citation, see the endpoint's Cost). `false` returns the extraction alone, which is free. */
        resolve?: boolean;
        /** `false` drops rows that did not resolve from `citations`. The `counts` and the charge are unchanged: an unresolved citation is a verdict that was paid for. */
        includeUnresolved?: boolean;
      };
      output: {
        /** The distinct citations, in order of first appearance. */
        citations?: Array<Record<string, unknown>>;
        /** counts returned by Vaquill. */
        counts: Record<string, unknown>;
        /** True when more than 200 distinct citations were found and `citations` holds the first of them. `counts.found` still reports the number found, and only the ones listed were resolved and charged. */
        truncated?: boolean;
        /** Characters of `text` read. */
        textChars: number;
        /** The extractor's version. The same text can yield different citations when it changes, so cache extractions by text AND this value. */
        extractorVersion: string;
        /** Credits actually charged. 0 when `resolve` is false. */
        creditsConsumed?: number;
        /** Server-side time for this request in milliseconds. Not billed on. */
        processingTimeMs?: number;
        [key: string]: unknown;
      };
    };
    /** Get your credit balance. */
    "vaquill.get_balance": {
      input: Record<string, never>;
      output: {
        /**
         * Credits you can actually spend right now. Deliberately the same field name that metered responses return, so one name means one thing across the API.
         *
         * Derived from your live credit buckets under the same expiry rule the billing path applies, so it never promises credits a call would refuse to spend.
         */
        creditsRemaining: number;
        /** `creditsRemaining` in USD, at the published conversion rate (1 credit = $0.01). Provided so you do not have to hardcode the rate; `GET /api/v1/api-credits/pricing` is its source of truth. */
        usdRemaining: number;
        /** `creditsRemaining` split by funding source, and it always sums to it. Worth reading because the sources do not behave alike: `subscription` credits are use-it-or-lose-it at the period end, while `payg` credits you bought are durable and burn last. */
        bySource?: Array<Record<string, unknown>>;
        /** The soonest expiry across your credits, or `null` if none of them expire. Poll this to avoid silently forfeiting an allowance. */
        nextExpiry?: Record<string, unknown> | null;
        /** Active API subscription tier, or `null` on pay-as-you-go. Also determines your rate-limit multiplier. Briefly cached, so a subscription change made seconds ago may not be reflected yet; `creditsRemaining` is always live. */
        plan?: string | null;
        /** Lifetime credits added to this account. */
        totalPurchased: number;
        /** Lifetime credits spent by this account. */
        totalConsumed: number;
        /**
         * How fast this key may call, as opposed to how much it may spend. The two ceilings are independent: holding credits does not exempt you from these, and staying under these does not pay for a call.
         *
         * These are the ceilings themselves, with your plan already applied, so you can size a client BEFORE issuing a request. The `X-RateLimit-*` headers on every response report the same ceilings plus your live headroom, and the two agree.
         */
        rateLimit?: Record<string, unknown> | null;
        /**
         * When this balance was computed. The value is live, not cached, so this is the instant the buckets were read.
         * @format date-time
         */
        asOf: string;
        [key: string]: unknown;
      };
    };
    /** Find the sections that cite this one. */
    "vaquill.get_citing_sections": {
      input: {
        /**
         * Section identifier, e.g. `USC_T42_C21_S1983` (Title 42, Chapter 21, Section 1983, which a lawyer writes as 42 U.S.C. § 1983). Take it from a `/us/statutes/search` or `/us/statutes/resolve` result.
         *
         * A citation also works here: `26 U.S.C. § 1`, `42 USC 1983` or `Cal. Civ. Code § 1950.5` is resolved with the same resolver `/resolve` uses, and the section is served. A citation costs this endpoint's price PLUS the `/resolve` price (2 credits), charged as its own line whether or not it resolves, exactly as `/resolve` charges; that is the same total as calling `/resolve` and then this endpoint, in one round trip. An exact act_id costs only this endpoint's price. When a citation resolves, or when the id only matched after surrounding whitespace, quotes or a trailing period were removed, the response carries `resolvedFrom` saying what your input was matched as. Check it the way you would check a `/resolve` answer. A citation containing `/` cannot travel in a URL path segment; resolve it with `GET /us/statutes/resolve` instead.
         *
         * Do not assemble an id from a citation: the title and section are derivable, but the CHAPTER is not, so `USC_T26_S1` misses. A miss returns 404 with `reason` and, where the section exists under another id, `didYouMean`.
         *
         * State session laws (acts as enacted, ids starting `SSL_`) are not code sections: read them at `/us/session-laws/{sessionLawId}`.
         * @minLength 3
         * @maxLength 200
         */
        act_id: string;
        /**
         * Maximum citing sections to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The section you asked about. */
        section: Record<string, unknown>;
        /** Sections whose text cross-references this one, in statutory order. Empty is a real answer: plenty of sections are cited by nothing. */
        citers?: Array<Record<string, unknown>>;
        /** How many citing sections were returned. This is the size of `citers`, not a corpus-wide count: it is capped by `limit`. */
        total?: number;
        /** True when more citing sections exist than `limit` allowed. Raise `limit` to see the rest. */
        truncated?: boolean;
        /** Set only when the answer is not a real zero. Reverse citation is built on the cross-reference index, which exists for USC and CFR; for any other corpus this explains that the section is out of scope and the call is refunded. When it is null, an empty `citers` means nothing cites this section. */
        note?: string | null;
        /** Null when the section is exactly the act_id you sent. Otherwise how your input was matched: a citation, or an act_id with transport damage (whitespace, quotes, a trailing period) removed. When your citation named a chapter, article, series or several sections, the section served is the FIRST of them and `matchLevel` says so, as on `GET /us/statutes/resolve`. */
        resolvedFrom?: Record<string, unknown> | null;
        /** Server-side time for this request in milliseconds, excluding network transit. Useful for spotting a slow query; not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call. Read it rather than assuming the list price: failed and refunded work bills 0. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
    /** Coverage matrix by jurisdiction and corpusType. */
    "vaquill.get_coverage": {
      input: {
        /** Return only this jurisdiction: a 2-letter US state code (one of the 52 supported) or `federal`. Case-insensitive. Omit for every jurisdiction. The unfiltered matrix runs to about a megabyte, so pass this when you are asking about one place. `totalSections` and `stateCountWithData` stay corpus-wide. */
        state?: "federal" | "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "FEDERAL" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY" | null;
      };
      output: {
        /**
         * Response for `GET /us/statutes/coverage`.
         *
         * A self-describing matrix: a legend of every `corpusType` token plus, for
         * each jurisdiction, the per-corpusType ingested-document counts. Use it to learn
         * exactly what is queryable where before calling `/us/statutes/search`.
         */
        data: Record<string, unknown>;
        /** `meta` on a free discovery endpoint. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the defined terms that govern this section. */
    "vaquill.get_definitions": {
      input: {
        /**
         * Section identifier, e.g. `USC_T42_C21_S1983` (Title 42, Chapter 21, Section 1983, which a lawyer writes as 42 U.S.C. § 1983). Take it from a `/us/statutes/search` or `/us/statutes/resolve` result.
         *
         * A citation also works here: `26 U.S.C. § 1`, `42 USC 1983` or `Cal. Civ. Code § 1950.5` is resolved with the same resolver `/resolve` uses, and the section is served. A citation costs this endpoint's price PLUS the `/resolve` price (2 credits), charged as its own line whether or not it resolves, exactly as `/resolve` charges; that is the same total as calling `/resolve` and then this endpoint, in one round trip. An exact act_id costs only this endpoint's price. When a citation resolves, or when the id only matched after surrounding whitespace, quotes or a trailing period were removed, the response carries `resolvedFrom` saying what your input was matched as. Check it the way you would check a `/resolve` answer. A citation containing `/` cannot travel in a URL path segment; resolve it with `GET /us/statutes/resolve` instead.
         *
         * Do not assemble an id from a citation: the title and section are derivable, but the CHAPTER is not, so `USC_T26_S1` misses. A miss returns 404 with `reason` and, where the section exists under another id, `didYouMean`.
         *
         * State session laws (acts as enacted, ids starting `SSL_`) are not code sections: read them at `/us/session-laws/{sessionLawId}`.
         * @minLength 3
         * @maxLength 200
         */
        act_id: string;
      };
      output: {
        /** The section you asked about. */
        section: Record<string, unknown>;
        /** The sibling section the terms were parsed from. Null when the chapter has no definitions section, in which case `terms` is empty and the call is refunded. */
        definitionsSection?: Record<string, unknown> | null;
        /** Defined terms governing this section, in the order the source lists them. */
        terms?: Array<Record<string, unknown>>;
        /** How many terms were parsed. */
        total?: number;
        /** Set only when no terms could be returned, explaining which step came up empty: the chapter has no definitions section, or its text is not ingested yet. The call is refunded in both cases. */
        note?: string | null;
        /** Null when the section is exactly the act_id you sent. Otherwise how your input was matched: a citation, or an act_id with transport damage (whitespace, quotes, a trailing period) removed. When your citation named a chapter, article, series or several sections, the section served is the FIRST of them and `matchLevel` says so, as on `GET /us/statutes/resolve`. */
        resolvedFrom?: Record<string, unknown> | null;
        /** Server-side time for this request in milliseconds, excluding network transit. Useful for spotting a slow query; not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call. Read it rather than assuming the list price: failed and refunded work bills 0. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
    /** Get API credit pricing. */
    "vaquill.get_pricing": {
      input: {
        /** Jurisdiction to price. `US` for the United States primary-law surface, `IN` for the India legislation surface. Defaults to the jurisdiction of the document you are reading, so a caller who does not set it gets the prices for the endpoints that document describes and nothing else. */
        region?: "US" | "IN" | null;
      };
      output: {
        /** USD cost per 1 credit (0.01 means 1 credit = $0.01). */
        dollarPerCredit: number;
        /** Minimum credits per purchase. */
        minCredits: number;
        /** Maximum credits per purchase. */
        maxCredits: number;
        /** Per-endpoint credit costs (USD). */
        costs: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the sections around this one. */
    "vaquill.get_related_sections": {
      input: {
        /**
         * Section identifier, e.g. `USC_T42_C21_S1983` (Title 42, Chapter 21, Section 1983, which a lawyer writes as 42 U.S.C. § 1983). Take it from a `/us/statutes/search` or `/us/statutes/resolve` result.
         *
         * A citation also works here: `26 U.S.C. § 1`, `42 USC 1983` or `Cal. Civ. Code § 1950.5` is resolved with the same resolver `/resolve` uses, and the section is served. A citation costs this endpoint's price PLUS the `/resolve` price (2 credits), charged as its own line whether or not it resolves, exactly as `/resolve` charges; that is the same total as calling `/resolve` and then this endpoint, in one round trip. An exact act_id costs only this endpoint's price. When a citation resolves, or when the id only matched after surrounding whitespace, quotes or a trailing period were removed, the response carries `resolvedFrom` saying what your input was matched as. Check it the way you would check a `/resolve` answer. A citation containing `/` cannot travel in a URL path segment; resolve it with `GET /us/statutes/resolve` instead.
         *
         * Do not assemble an id from a citation: the title and section are derivable, but the CHAPTER is not, so `USC_T26_S1` misses. A miss returns 404 with `reason` and, where the section exists under another id, `didYouMean`.
         *
         * State session laws (acts as enacted, ids starting `SSL_`) are not code sections: read them at `/us/session-laws/{sessionLawId}`.
         * @minLength 3
         * @maxLength 200
         */
        act_id: string;
        /**
         * How many sections to return on EACH side.
         * @minimum 1
         * @maximum 10
         */
        limit?: number;
      };
      output: {
        /** The section you asked about. */
        section: Record<string, unknown>;
        /** Sections immediately BEFORE this one in the same container, nearest last. */
        previous?: Array<Record<string, unknown>>;
        /** Sections immediately AFTER this one, nearest first. */
        next?: Array<Record<string, unknown>>;
        /** Human label for the grouping the neighbours were drawn from, e.g. the chapter name. Neighbours never cross this boundary. */
        container?: string | null;
        /** Null when the section is exactly the act_id you sent. Otherwise how your input was matched: a citation, or an act_id with transport damage (whitespace, quotes, a trailing period) removed. When your citation named a chapter, article, series or several sections, the section served is the FIRST of them and `matchLevel` says so, as on `GET /us/statutes/resolve`. */
        resolvedFrom?: Record<string, unknown> | null;
        /** Server-side time for this request in milliseconds, excluding network transit. Useful for spotting a slow query; not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call. Read it rather than assuming the list price: failed and refunded work bills 0, and batch endpoints charge per item returned, so a partial result costs less than a full one. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
    /** Get statute section metadata. */
    "vaquill.get_section": {
      input: {
        /**
         * Section identifier, e.g. `USC_T42_C21_S1983` (Title 42, Chapter 21, Section 1983, which a lawyer writes as 42 U.S.C. § 1983). Take it from a `/us/statutes/search` or `/us/statutes/resolve` result.
         *
         * A citation also works here: `26 U.S.C. § 1`, `42 USC 1983` or `Cal. Civ. Code § 1950.5` is resolved with the same resolver `/resolve` uses, and the section is served. A citation costs this endpoint's price PLUS the `/resolve` price (2 credits), charged as its own line whether or not it resolves, exactly as `/resolve` charges; that is the same total as calling `/resolve` and then this endpoint, in one round trip. An exact act_id costs only this endpoint's price. When a citation resolves, or when the id only matched after surrounding whitespace, quotes or a trailing period were removed, the response carries `resolvedFrom` saying what your input was matched as. Check it the way you would check a `/resolve` answer. A citation containing `/` cannot travel in a URL path segment; resolve it with `GET /us/statutes/resolve` instead.
         *
         * Do not assemble an id from a citation: the title and section are derivable, but the CHAPTER is not, so `USC_T26_S1` misses. A miss returns 404 with `reason` and, where the section exists under another id, `didYouMean`.
         *
         * State session laws (acts as enacted, ids starting `SSL_`) are not code sections: read them at `/us/session-laws/{sessionLawId}`.
         * @minLength 3
         * @maxLength 200
         */
        act_id: string;
      };
      output: {
        /** The section's metadata and source links. Full text is a separate call: `/us/statutes/section/{actId}/body`. */
        section: Record<string, unknown>;
        /** Null when the section is exactly the act_id you sent. Otherwise how your input was matched: a citation, or an act_id with transport damage (whitespace, quotes, a trailing period) removed. When your citation named a chapter, article, series or several sections, the section served is the FIRST of them and `matchLevel` says so, as on `GET /us/statutes/resolve`. */
        resolvedFrom?: Record<string, unknown> | null;
        /** Server-side time for this request in milliseconds, excluding network transit. Useful for spotting a slow query; not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call. Read it rather than assuming the list price: failed and refunded work bills 0, and batch endpoints charge per item returned, so a partial result costs less than a full one. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
    /** Get statute full text. */
    "vaquill.get_section_body": {
      input: {
        /**
         * Section identifier, e.g. `USC_T42_C21_S1983` (Title 42, Chapter 21, Section 1983, which a lawyer writes as 42 U.S.C. § 1983). Take it from a `/us/statutes/search` or `/us/statutes/resolve` result.
         *
         * A citation also works here: `26 U.S.C. § 1`, `42 USC 1983` or `Cal. Civ. Code § 1950.5` is resolved with the same resolver `/resolve` uses, and the section is served. A citation costs this endpoint's price PLUS the `/resolve` price (2 credits), charged as its own line whether or not it resolves, exactly as `/resolve` charges; that is the same total as calling `/resolve` and then this endpoint, in one round trip. An exact act_id costs only this endpoint's price. When a citation resolves, or when the id only matched after surrounding whitespace, quotes or a trailing period were removed, the response carries `resolvedFrom` saying what your input was matched as. Check it the way you would check a `/resolve` answer. A citation containing `/` cannot travel in a URL path segment; resolve it with `GET /us/statutes/resolve` instead.
         *
         * Do not assemble an id from a citation: the title and section are derivable, but the CHAPTER is not, so `USC_T26_S1` misses. A miss returns 404 with `reason` and, where the section exists under another id, `didYouMean`.
         *
         * State session laws (acts as enacted, ids starting `SSL_`) are not code sections: read them at `/us/session-laws/{sessionLawId}`.
         * @minLength 3
         * @maxLength 200
         */
        act_id: string;
        /**
         * Which representations to return. `both` (the default) returns `html` and `plain`. A long section carries the same text twice that way, so `plain` or `html` alone roughly halves the payload. Cost is unchanged: the fetch is the same either way.
         *
         * `all` adds `markdown` where the section has a structured rendering. It is opt-in because it is a third full copy of the text (about 600,000 extra characters on `49 CFR 172.101`), which a model-facing client would pay for in tokens without asking.
         *
         * `markdown` returns only `markdown`. On a section with no structured rendering it falls back to `plain` with a `note` saying so, never to an empty body. `tables` and `figures` are returned on every format, because they are small and describe the text you received.
         *
         * `content` omits `html` and `plain` and returns the split fields (`content`, `sourceCredit`, `notes`).
         *
         * `operative` omits `notes` as well, leaving `content` + `sourceCredit`: the law and what enacted it, and nothing else. This is the smallest representation of a section, and on a note-heavy section it is the difference between a payload that fits in a prompt and one that does not. Measured on `17 U.S.C. § 107`: 95,217 bytes at `both`, 30,545 at `content`, 1,564 at `operative`, all for the same 6 credits.
         *
         * Only United States Code sections can be split, so on any other corpus both values fall back to returning `plain` with a `note` saying why -- `content` will be null there, so read `note` rather than assuming the section was empty.
         */
        format?: "all" | "both" | "html" | "markdown" | "plain" | "content" | "operative";
        /**
         * When true, also return a `subsections` tree parsed from the text for pincite addressing, and `markdown` as that tree rendered as nested Markdown lists. Same cost.
         *
         * `structured=true` OWNS `markdown`: on every `format`, and on every `source`, `markdown` is the nested-list rendering, never the table-preserving rendering a `r2_render` section otherwise returns for `format=all`/`markdown` (a `note` says so when that happens). Ask without `structured` for the tables. With `format=markdown` the nested lists are returned alone, without `html` or `plain`.
         */
        structured?: boolean;
        /**
         * Return the section's text as it stood on this date (`YYYY-MM-DD`) instead of today's. Same cost.
         *
         * **This is a reconstruction, not an archive.** The corpus holds one current text per citation; an earlier one is rebuilt from the before-side of the first change we OBSERVED after your date. The `asOf` block on the response says which version you got (`source`), what it rests on (`basisChangeId`), how far back the evidence reaches (`observedFrom`), and whether the answer is bounded by when capture began rather than by the law (`isBounded`). Read `isBounded` before citing the text.
         *
         * A section that did not exist yet returns `available: false` with `asOf.existed: false`, which is a real answer and is charged. A section we know changed but cannot rebuild returns `source: "unavailable"` and IS refunded, because you asked for a historical text and did not get one.
         *
         * A date that does not exist on a calendar (`2026-02-30`) is a 422 and is not charged.
         * @format date
         */
        asOf?: string | null;
      };
      output: {
        /** The act_id of the section served. Equal to your request unless `resolvedFrom` is set, in which case it is the id your citation or cleaned-up input resolved to. */
        actId: string;
        /** The section text as HTML. When `source` is `r2_render` this is our structured rendering of the publisher's source: real `<table>` elements (with `<caption>`, `colspan` and `rowspan`) and `<figure>` / `<img>` elements at the position the publisher prints them, with images hosted on `statutes-us.vaquill.ai`. When `source` is `r2_s3` this is the publisher's own markup (tables, paragraph structure, history lines), cut to the section's own content where we recognise the publisher's page layout. For any other `source` the text was not held as per-section HTML, and `html` carries the same text as `plain` with no markup. */
        html?: string | null;
        /** Plain text version. */
        plain?: string | null;
        /** Which copy the text came from: `r2_render` (our structured rendering, carrying `markdown`, `tables` and `figures`), `r2_s3` (the publisher's page for this section), `r2_text` (our per-section text extraction), `qdrant_reconstructed` (reassembled from indexed passages), and on `asOf` requests `stored_edition` or `corpus_change_history`. A storage identifier, not a citation: cite `sourceUrl`. */
        source?: string | null;
        /** Where this text was published by the government, so the bytes you were served can be cited and verified against the official record. Null when we hold no publishable link for the section: a third-party compiler is never served here, and an absent link is the correct answer in that case. `source` is a storage identifier and is NOT a citation. */
        sourceUrl?: string | null;
        /**
         * The OPERATIVE TEXT of the section, with the source credit and the notes apparatus removed. This is the law; `plain` is the law plus everything the publisher prints around it.
         *
         * Populated for **United States Code** sections, where GPO delimits the fields in the granule it publishes. Null for CFR and for state corpora, whose sources carry no equivalent structure -- null means "we cannot split this reliably", never "this section is empty", and `plain` is still the whole body.
         *
         * Worth using if you feed sections to a model: the operative text is a median 46% of `plain` across USC and as little as 3.4% (`17 U.S.C. § 107`, where nearly all of the body is committee reports and amendment notes). A model handed the full body can quote a 1992 amendment note as the law in force.
         */
        content?: string | null;
        /**
         * The publisher's credit line for the section, e.g. `(Pub. L. 94-553, title I, §101, Oct. 19, 1976, 90 Stat. 2546; ...)`. Split out of the body rather than left inside it.
         *
         * The same value is also on `GET /us/statutes/section/{actId}` as `sourceCredit`; it is repeated here so a caller fetching the text does not need a second call to know what enacted it.
         */
        sourceCredit?: string | null;
        /**
         * The notes apparatus the publisher prints after the section: Historical and Revision Notes, committee reports, Editorial Notes (codification and amendments), Statutory Notes and Related Subsidiaries (effective dates), and any guidelines reprinted by the editors.
         *
         * Kept, not discarded: it is the legislative history, and it is the reason a section's body can be twenty times the length of the law. It is simply NOT the operative text, so it is served as its own field. Null where we cannot split the body.
         *
         * Also null, deliberately, when you pass `format=operative`: that is the one format that asks us to leave the apparatus off the wire. Null there means "not sent", not "none exists" -- the same request at `format=content` returns it.
         */
        notes?: string | null;
        /** Whether full text is available. */
        available?: boolean;
        /** Note if text is unavailable. */
        note?: string | null;
        /**
         * The body as GitHub-flavoured Markdown. When `source` is `r2_render` this is the structured rendering: tables as GFM pipe tables (a caption line above, footnotes below, multi-level headers joined as `Parent / Child`) and figures as `![alt](url)` at their position in the text. Returned only when `format` is `all` or `markdown`, not on the default `both`, where it would be a third full copy.
         *
         * For a section with no structured rendering, `markdown` is null unless you pass `structured=true`, in which case it is the body as nested Markdown lists (the pre-existing behaviour). When both exist the structured rendering wins, because it is the one that keeps the tables; `subsections` is returned either way.
         */
        markdown?: string | null;
        /** The tables in the body, in document order, with their size. An empty list means the section has none. Null means not known: the section's corpus has no structured rendering yet, so a table may still be present in `html`. */
        tables?: Array<Record<string, unknown>> | null;
        /** The figures, equations and form images in the body, in document order, with hosted image urls and each one's offset into `markdown` and `plain`. An empty list means the section has none. Null means not known: the section's corpus has no structured rendering yet. */
        figures?: Array<Record<string, unknown>> | null;
        /** True when the body contains at least one table, false when it contains none. Null when not known, because the section's corpus has no structured rendering yet. */
        hasTables?: boolean | null;
        /** True when the body contains at least one figure, equation or form image, false when it contains none. Null when not known, because the section's corpus has no structured rendering yet. */
        hasFigures?: boolean | null;
        /** The section broken into its lettered and numbered subsections, nested as they appear in the text. Use it to quote or link a single clause rather than the whole section. Present only when `structured=true`. */
        subsections?: Array<Record<string, unknown>> | null;
        /** Present only when the request passed `asOf`. Says WHICH version of the section you are holding and how far the evidence for it goes. Read `isBounded` before treating the text as the law on that date. */
        asOf?: Record<string, unknown> | null;
        /** Null when the section is exactly the act_id you sent. Otherwise how your input was matched: a citation, or an act_id with transport damage (whitespace, quotes, a trailing period) removed. When your citation named a chapter, article, series or several sections, the section served is the FIRST of them and `matchLevel` says so, as on `GET /us/statutes/resolve`. */
        resolvedFrom?: Record<string, unknown> | null;
        /** Server-side time for this request in milliseconds, excluding network transit. Useful for spotting a slow query; not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call. Read it rather than assuming the list price: failed and refunded work bills 0, and batch endpoints charge per item returned, so a partial result costs less than a full one. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
    /** Get this section's change history. */
    "vaquill.get_section_changes": {
      input: {
        /**
         * Section identifier, e.g. `USC_T42_C21_S1983` (Title 42, Chapter 21, Section 1983, which a lawyer writes as 42 U.S.C. § 1983). Take it from a `/us/statutes/search` or `/us/statutes/resolve` result.
         *
         * A citation also works here: `26 U.S.C. § 1`, `42 USC 1983` or `Cal. Civ. Code § 1950.5` is resolved with the same resolver `/resolve` uses, and the section is served. A citation costs this endpoint's price PLUS the `/resolve` price (2 credits), charged as its own line whether or not it resolves, exactly as `/resolve` charges; that is the same total as calling `/resolve` and then this endpoint, in one round trip. An exact act_id costs only this endpoint's price. When a citation resolves, or when the id only matched after surrounding whitespace, quotes or a trailing period were removed, the response carries `resolvedFrom` saying what your input was matched as. Check it the way you would check a `/resolve` answer. A citation containing `/` cannot travel in a URL path segment; resolve it with `GET /us/statutes/resolve` instead.
         *
         * Do not assemble an id from a citation: the title and section are derivable, but the CHAPTER is not, so `USC_T26_S1` misses. A miss returns 404 with `reason` and, where the section exists under another id, `didYouMean`.
         *
         * State session laws (acts as enacted, ids starting `SSL_`) are not code sections: read them at `/us/session-laws/{sessionLawId}`.
         * @minLength 3
         * @maxLength 200
         */
        act_id: string;
        /**
         * Max changes to return on this page.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** Return only changes with an `id` greater than this: the cursor for polling forward into new changes. Ids are a monotonic sequence, so this is exact, immune to clock skew, and cannot drop two changes that share a timestamp. Carry `cursor` forward. */
        sinceId?: number | null;
        /** Return only changes with an `id` less than this: the cursor for walking BACK through history, which is what a newest-first reader needs. Pass the smallest `id` on your last page. */
        beforeId?: number | null;
        /** Filter to these kinds. Repeat the parameter to pass several (`?changeKind=amended&changeKind=removed`). Omit for all three. */
        changeKind?: Array<"added" | "amended" | "removed"> | null;
        /** `desc` (default) is newest first, the natural reading order for a history. Use `asc` to replay a section's life forward, or when catching up from a cursor. */
        order?: "asc" | "desc";
      };
      output: {
        /** The act_id of the section served. Equal to your request unless `resolvedFrom` is set, in which case it is the id your citation or cleaned-up input resolved to. */
        actId: string;
        /** The section as it stands today. NULL is meaningful and not an error: it means the section is no longer in the corpus, which is exactly the case when the newest change is a `removed`. The history below is still the answer. */
        section?: Record<string, unknown> | null;
        /** Observed changes, newest first by default. Empty is a real answer, and it means NO CAPTURED CHANGE, not that the section has never been amended. See `coverage`. */
        changes?: Array<Record<string, unknown>>;
        /** Size of `changes` on this page, not a corpus-wide count: it is capped by `limit`. */
        total?: number;
        /** True when the page filled to `limit`, so more may sit behind it. Page with `beforeId` (walking back) or `sinceId` (walking forward) rather than by raising `limit`. */
        hasMore?: boolean;
        /** Highest `id` on this page, or null when the page is empty. Carry it into `sinceId` to poll for what is new; keep the one you hold when a page comes back empty. */
        cursor?: number | null;
        /**
         * The earliest change we ever captured for this section: the OBSERVATION HORIZON this history sits on. Read it before treating an empty or short list as the section's full history.
         *
         * **Null means we have never captured a change for this section**, so an empty `changes` list is not evidence that it is stable. A non-null value with an empty list means your filters or cursor excluded everything we hold, which is a different answer.
         *
         * `coverage` states the same caveat in prose. This is the fact behind it, and it is the same field, meaning the same thing, as `asOf.observedFrom` on `GET /section/{actId}/body`.
         */
        observedFrom?: string | null;
        /** What this history can and cannot tell you, in one sentence. Change capture began well after the corpus itself did and is swept on a retention window, so this endpoint reports the changes we OBSERVED in that window, never the section's full legislative history. Read it before treating an empty list as 'unchanged'. */
        coverage: string;
        /** Null when the section is exactly the act_id you sent. Otherwise how your input was matched: a citation, or an act_id with transport damage (whitespace, quotes, a trailing period) removed. When your citation named a chapter, article, series or several sections, the section served is the FIRST of them and `matchLevel` says so, as on `GET /us/statutes/resolve`. */
        resolvedFrom?: Record<string, unknown> | null;
        /** Server-side time for this request in milliseconds, excluding network transit. Useful for spotting a slow query; not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call. Read it rather than assuming the list price: failed and refunded work bills 0. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
    /** Which acts a state publisher lists against this section. */
    "vaquill.get_section_enactments": {
      input: {
        /**
         * Section identifier, e.g. `USC_T42_C21_S1983` (Title 42, Chapter 21, Section 1983, which a lawyer writes as 42 U.S.C. § 1983). Take it from a `/us/statutes/search` or `/us/statutes/resolve` result.
         *
         * A citation also works here: `26 U.S.C. § 1`, `42 USC 1983` or `Cal. Civ. Code § 1950.5` is resolved with the same resolver `/resolve` uses, and the section is served. A citation costs this endpoint's price PLUS the `/resolve` price (2 credits), charged as its own line whether or not it resolves, exactly as `/resolve` charges; that is the same total as calling `/resolve` and then this endpoint, in one round trip. An exact act_id costs only this endpoint's price. When a citation resolves, or when the id only matched after surrounding whitespace, quotes or a trailing period were removed, the response carries `resolvedFrom` saying what your input was matched as. Check it the way you would check a `/resolve` answer. A citation containing `/` cannot travel in a URL path segment; resolve it with `GET /us/statutes/resolve` instead.
         *
         * Do not assemble an id from a citation: the title and section are derivable, but the CHAPTER is not, so `USC_T26_S1` misses. A miss returns 404 with `reason` and, where the section exists under another id, `didYouMean`.
         *
         * State session laws (acts as enacted, ids starting `SSL_`) are not code sections: read them at `/us/session-laws/{sessionLawId}`.
         * @minLength 3
         * @maxLength 200
         */
        act_id: string;
      };
      output: {
        /** The section's act_id as served, after any citation or copy damage was resolved. */
        actId: string;
        /** Present only when your input was a citation or an id carrying copy damage: what it was matched as. Null when you sent an exact act_id. */
        resolvedFrom?: Record<string, unknown> | null;
        /** Lowercase two-letter code of the section's jurisdiction. Null for a federal section. */
        jurisdiction?: string | null;
        /** True when this section's jurisdiction is one whose publisher table is mapped to the statutes section numbers and this section is in the form that mapping was proven on: then `enactments` is an answer, even when it is empty, and the call is charged. False when it is not (see `reason`): `enactments` is empty, says nothing about the section, and the call is NOT charged. */
        supported: boolean;
        /** Why `supported` is false. `unsupported_jurisdiction`: we do not read this jurisdiction's table (none is printed, or its form is not verified against our section numbers), see `coverage.note`. `not_a_state_code_section`: the section is not a state statute (a federal, regulation or constitution section). `section_not_in_proven_form`: the jurisdiction is read, but this section's stored number is not in a form the mapping was proven on, so it is not guessed at. Null when `supported` is true. */
        reason?: "unsupported_jurisdiction" | "not_a_state_code_section" | "section_not_in_proven_form" | null;
        /** The entries of the publisher's tables whose printed section is this section, newest act first (by approval date, undated last), one per printed entry: an act that lists the section twice appears twice. NEVER a complete history: only acts we hold, in sessions we hold, whose table lists the section in the printed form this jurisdiction's mapping reads. Empty with `supported: true` is a real answer: no held table lists it. */
        enactments?: Array<Record<string, unknown>>;
        /** Entries returned in `enactments`. */
        count?: number;
        /** True when more entries matched than are returned (the newest are kept). A section amended by that many acts is not a case we have met. */
        truncated?: boolean;
        /** What this answer is read from, and what it is not. Show it with the list. */
        coverage: Record<string, unknown>;
        /** Credits actually charged for this call, never the list price. 0 when `supported` is false (refunded) and on a failure. A citation sent in place of the act_id adds the `/us/statutes/resolve` price, charged whether or not it resolves. */
        creditsConsumed?: number;
        /** Server-side time for this request in milliseconds, excluding network transit. Not billed on. */
        processingTimeMs?: number;
        [key: string]: unknown;
      };
    };
    /** Get metadata for many statute sections. */
    "vaquill.get_sections": {
      input: {
        /**
         * Section identifiers from a prior `/us/statutes/search` response. Up to 50 per call. Duplicates are collapsed, and order is preserved in the response. Each id encodes the citation's hierarchy: `USC_T42_C21_S1983` is Title 42, Chapter 21, Section 1983. DO NOT BUILD THESE FROM A CITATION: the chapter/article/part segments exist only in the data, so `Tex. Property Code § 93.005` is `STATE_TX_Cpr_C93_S93.005`, not `STATE_TX_C93_S93.005`. Assembled ids miss, and `notFoundDetail` will say so and suggest the real ones. A citation (`26 U.S.C. § 1`) is also accepted in place of an id: it is resolved and served, and listed in `resolved`.
         * @minItems 1
         * @maxItems 50
         */
        actIds: Array<string>;
        /** Return each section's full text inline on `body`, instead of metadata only. Adds the ordinary body price per row that returns text, so 20 ids resolving 20 bodies is 40 + 120 = 160 credits. Rows whose text cannot be resolved come back with `body: null` and are not charged for it, so read `creditsConsumed` rather than computing the total. Without this, use `/us/statutes/section/{actId}/body` one id at a time. */
        includeBody?: boolean;
      };
      output: {
        /** Found sections, in the order the ids were supplied. */
        sections?: Array<Record<string, unknown>>;
        /** Identifiers with no match. These are NOT charged, so a batch with misses costs less than `len(actIds)` times the per-section rate. */
        notFound?: Array<string>;
        /** One entry per id in `notFound`, saying whether the id was assembled rather than taken from a search result, and suggesting the real ids where they could be recovered. Diagnostic only and never charged; it can come back empty if the lookup is unavailable, so treat it as a hint rather than a contract. */
        notFoundDetail?: Array<Record<string, unknown>>;
        /** One entry per input that did NOT match as sent: a citation resolved to its section, or an id cleaned of whitespace, quotes or a trailing period. Use it to map your inputs onto `sections`, which carry the real act_ids. Empty when every input was an exact id. */
        resolved?: Array<Record<string, unknown>>;
        /** Number of sections returned. */
        count?: number;
        /** Server-side time for this request in milliseconds, excluding network transit. Useful for spotting a slow query; not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call. Read it rather than assuming the list price: failed and refunded work bills 0, and batch endpoints charge per item returned, so a partial result costs less than a full one. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
    /** Get a state session law, by id or by citation. */
    "vaquill.get_session_law": {
      input: {
        /**
         * A STATE session law's id, for example `SSL_MN_2025S1_G_Y2025_C1`, from a `/us/session-laws/list` result.
         *
         * A citation also works here on `GET /us/session-laws/{sessionLawId}`, and `resolvedFrom` says what your input matched. Name the state in the citation: `Minn. Laws 2025, ch. 1`, `2025 Minn. Laws ch. 1`, `Ch. 1, Laws of Minnesota 2025`, `Ch. 2025-12, Laws of Fla.`, `2025 Wash. Sess. Laws ch. 12`, `La. Acts 2025, No. 12`, `Pa. Act 12 of 2025`, `Minn. S.F. 1552 (2025)`, `MN: Laws 2025, ch. 1`. A form only one state uses needs no state: `P.A. 104-0001` (Illinois), `Pub. Act No. 26-151` (Connecticut), `S.L. 2025-12` (North Carolina), `Stats. 2025, ch. 12` (California), `D.C. Law 25-713`. The publisher's printed form (`CHAPTER 2025-12`, `S.F.No. 1552`) and the `citation` we print on every law also work. A form several states share (`Laws 2025, ch. 1`, `HB 123`, `Act 12 of 2025`) is a 404 with `reason: needs_jurisdiction`, the states it exists in and one candidate per state: we never guess the state. A citation naming several laws of one state (Minnesota 2025 has two Chapter 1s) is a 404 listing all of them, `candidateCount` and `truncated` saying whether the list is complete, and `defaultSessionLawId` the regular session's law where there is exactly one conventional reading. An id or citation that matches nothing in a session we have only partly collected is a 404 with `reason: session_not_fully_collected` and that session's coverage: the law may exist and not be held yet, so it is never charged, the resolve price included. A citation costs the route's price PLUS the `/us/statutes/resolve` price (2 credits), the second charged whether or not it resolves. URL-encode the citation; one containing `/` cannot travel in a path segment.
         *
         * Federal session laws (`SAL_...`, `Pub. L. 118-5`, the Statutes at Large) are served by `/us/statutes/section`, not here, and code citations (`26 U.S.C. § 1`) by `/us/statutes/resolve`.
         * @minLength 1
         * @maxLength 300
         */
        session_law_id: string;
        /** Optional two-letter state code that scopes how a CITATION sent in place of the id is read. It supplies the state a citation does not name (`Laws 2025, ch. 1` with `jurisdiction=mn` is Minnesota's) and it vetoes a state the citation does name or whose form belongs to another: `Minn. Laws 2025, ch. 1` with `jurisdiction=tx` is a 404 `unresolved_citation` (the resolution fee is kept), never answered from Minnesota. Ignored, with no effect, when you send an id. The same codes as the list's `jurisdiction`: the 50 states, `dc` and `pr`, case-insensitive; `federal` or an unknown code is a 422 and is never charged. */
        jurisdiction?: "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY" | null;
      };
      output: {
        /** Server-side time for this request in milliseconds, excluding network transit. Not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call, never the list price. It includes the `/us/statutes/resolve` fee when a citation was sent where an id goes. 0 when the call was not charged or was refunded (a body that answers `available: false`). */
        creditsConsumed?: number;
        /** Permanent identifier of the law, the key to use everywhere. Shape `SSL_{state}_{session code}_{series}[_Y{numberingYear}]_{C<chapter>|B<billKey>}`. It never changes: a correction to our reading of a law keeps the old id working. Pass it to `GET /us/session-laws/{sessionLawId}`. */
        sessionLawId: string;
        /** The law's identifier in the open us1 scheme. Null until its identity is confirmed by a second source and the us1 state shape is minted, so it is null on every state law today. Use `sessionLawId`, which is always present. */
        lawId?: string | null;
        /** Lowercase two-letter code of the state, `dc` or `pr`. Federal acts are not served by this family: they are on `/us/statutes/section`. */
        jurisdiction: string;
        /** The act's citation as its publisher prints it, falling back to `{session label}, ch. {number}` when none is printed. It is NOT unique: many states print a bare `CHAPTER 1` every session. Key on `sessionLawId`. */
        citation: string;
        /** The law cited the way a lawyer writes it, from the state's own form: `Minn. Laws 2025, ch. 1`, `2025 Fla. Laws ch. 3`, `Ill. Pub. Act 104-0001`, `S.L. 2025-12` (North Carolina), `Stats. 2025, ch. 12` (California), `Ohio S.B. 1 (2025)` for a state that numbers no chapters. A law in a special or extraordinary session carries it (`Minn. Laws 2025, 1st Spec. Sess., ch. 1`). Every value is read back through the grammar that `GET /us/session-laws/{sessionLawId}` accepts a citation in, and must name this law; one that would not is null, never guessed. Null where the state's form is not known, for a series with no standard form (resolutions, memorials), or for a law with neither a chapter nor a bill key. Where a regular and a special session each have a chapter 1, the bare form is the regular session's law and resolves with that law flagged as the default; the special session's carries its session. Distinct from `citation`, which is the publisher's printed form. */
        citableAs?: string | null;
        /** A compact label for tables and badges: `MN ch. 1 (2025)`, `IL P.A. 104-0001`, `OH S.B. 1 (2025)`. Not a form to send back: use `citableAs` or the `sessionLawId`. Null exactly when `citableAs` is null. */
        citationShort?: string | null;
        /** The legislative session the law was enacted in, and whether we hold all of it (`coverageStatus`). */
        session: Record<string, unknown>;
        /** The numbering series the law belongs to within its session. Most states have one, `general`. Others number acts, resolutions or local laws separately (`public`, `act`, `acts`, `law`, `public_act`, `resolve`, `resolution_chapter`, `local`, ...). An open list that grows as jurisdictions load. Filter with `series` on the list. */
        series: string;
        /** What kind of measure this is: `act`, `joint_resolution`, `concurrent_resolution`, `resolution`, `resolve`, `memorial` or `other`. An open list. A resolution that was numbered and published among the session laws is included, with `isLaw` saying whether it binds as law. */
        instrumentType: string;
        /** The chapter or act number exactly as printed, as a string. It is not always an integer: `1`, `2025-12` (Florida), `104-0001` (Illinois), `1A`. Null where the state does not number its acts (see `billKey`). */
        number?: string | null;
        /** Normalised bill identifier (chamber and type letters plus the number) that stands in for a chapter number in states that do not number their acts (Missouri, Ohio, Nebraska). `House Bill 2` is `HB2`. Null whenever `number` is set. Part of the `sessionLawId` as `B<billKey>`. */
        billKey?: string | null;
        /** The bill the act originated as, as the publisher prints it. Matches as a citation on `GET /us/session-laws/{sessionLawId}`. */
        billNumber?: string | null;
        /** The year of the numbering sequence the chapter number belongs to, where the state numbers by year (Minnesota, Florida, Texas). It appears in the `sessionLawId` as `_Y2025`. A chapter number is only unique within a session and numbering year: Minnesota's regular and first special sessions of 2025 each have a Chapter 1. Null where one sequence runs across the session (Louisiana). */
        numberingYear?: number | null;
        /** The act's long title as printed, usually beginning `An act relating to`. It names the code sections the act amends in prose. */
        title?: string | null;
        /** The act's short title when the publisher gives one (Ohio, New York, the District of Columbia and a few others do), otherwise null. */
        shortTitle?: string | null;
        /** Date the governor (or the equivalent authority) approved the act, ISO 8601. Never an effective date: an act is usually in force on a different day, which is `effectiveDates`. Null when the publisher prints no approval date. Where the registry holds none but the publisher's own dated label on `otherDates` names the governor's signature, it is filled from that label and `approvedDateDerived` is true. The `approvedFrom` and `approvedTo` filters do NOT match a derived date: they read the registry's own approval date. */
        approvedDate?: string | null;
        /** True only when `approvedDate` was not held as an approval date and we filled it from a dated label printed on the act (today South Dakota's `Signed by the Governor`, listed under `otherDates`), on an act whose `enactmentOutcome` is `signed` or `line_item_veto`. False when `approvedDate` is null or is the registry's own. We never read a `presented` or `passed` date as an approval, nor a signing label on an act that became law without signature. */
        approvedDateDerived?: boolean;
        /** Earliest of the act's effective dates we hold. Null when we hold none: a date the publisher does not print, or prints as a relative rule (`the day following final enactment`), is not guessed. The full list is `effectiveDates` on `GET /us/session-laws/{sessionLawId}`. */
        effectiveFirst?: string | null;
        /** Latest of the act's effective dates we hold. Equal to `effectiveFirst` for an act with one date; null when we hold none. */
        effectiveLast?: string | null;
        /** How the measure became, or failed to become, law. `signed`; `became_law_without_signature`; `veto_overridden`; `line_item_veto` (signed with some items vetoed); `vetoed` and `pocket_veto` (not law); `not_presented` (no governor action recorded, usual for resolutions); `approved_by_voters`; `unknown` (the publisher does not say). */
        enactmentOutcome: string;
        /** True for an act that is law. False for a numbered measure that is not: a vetoed bill, a pocket veto. Null when `enactmentOutcome` does not settle it (`not_presented`, `unknown`). */
        isLaw?: boolean | null;
        /** Whether we serve this law's text. `held`: the text is served by `/us/session-laws/{sessionLawId}/body`. `withheld`: we hold the text but a measured defect keeps it from being served, and `withheldReason` says what. `not_held`: we know the act exists and do not hold its text. `pending`: collected and not yet verified. */
        textStatus: "held" | "withheld" | "not_held" | "pending";
        /** Present only when `textStatus` is `withheld`: a plain sentence saying what is wrong with the text we hold and what would release it. Free text, not an enum: show it, do not branch on it. The record itself (dates, sources, title) is still served and still correct. */
        withheldReason?: string | null;
        /** Length of the law's full text in characters, the same as `totalChars` on the body. Null when there is no text. It is reported for a withheld law too (a fact about the text we hold), though that text is not served. */
        charCount?: number | null;
        /** How many body pages the text takes: `charCount` divided by the page size (30,000 characters), rounded up. Pages are cut back to a paragraph break, so a long act can run a few percent over. Null unless `textStatus` is `held`: there is nothing to read. Reading a whole law costs `estimatedBodyPages` times the price of one body page (6 credits per page on `GET /us/session-laws/{sessionLawId}/body`). Ohio's 2025 budget act (HB 96) is 9,571,132 characters, about 320 pages or 1,920 credits to read in full; most acts are a page or two. */
        estimatedBodyPages?: number | null;
        /** SHA-256 (hex) of the full text of this law. It changes only when the text does, so it is the cheap way to tell whether a copy you hold is current. Body pages carry the same value. */
        textSha256?: string | null;
        /** Revision counter of our record of this law: 1 for the first collection, higher after a re-collection changed the text or the metadata. Not a legislative version. */
        versionNo?: number | null;
        /** Whether the language an amending act strikes and inserts survives in the text. `preserved`: it is in `text`, in the convention `markupConvention` names. `lost`: the publisher printed it and our text does not keep it, so deleted words can read as law: check the source before quoting. `absent`: the act carries no such markup that we found. `not_applicable`: there is no text to carry it. */
        amendatoryMarkup?: string | null;
        /** How preserved markup is written, set only when `amendatoryMarkup` is `preserved`. `wdiff`: deleted language is `[-like this-]` and inserted language `{+like this+}`. `publisher_literal`: the publisher's own words are left as printed (Minnesota prints `new text begin` / `new text end` and `deleted text begin` / `deleted text end` markers). `mixed`: both in one text. */
        markupConvention?: string | null;
        /** What kind of document the text was taken from: `session_law_print` (the publisher's printed chapter), `enrolled_bill`, `slip_law`, `volume_extract` (carved out of a bound volume) or `other`. An open list. Null when there is no text. */
        documentKind?: string | null;
        /** How firmly the law's identity (session and number) is established. `single_source`: read from one publisher source, which is every state law at launch. `confirmed`: agreed by a second independent source, the level at which a `lawId` can be minted. `inferred`: derived by us rather than printed. `disputed`: sources disagree. The `sessionLawId` is the same at every level. */
        identityConfidence: string;
        /** What the law's licence class is and what it means for reuse, in a plain sentence: `Government public: published by a government body with no restrictive terms, so the text may be reused, including commercially.` Every law served with text is of a class that permits reuse; a note saying otherwise describes a record whose text is held back. Free text to show, not an enum to branch on: branch on `textStatus`. */
        licenseNote?: string | null;
        /** When this law's record last changed in our registry, ISO 8601 UTC with a `+00:00` offset, the same form as the statutes routes. Use it with `updatedSince` on the list to sync only what changed. */
        updatedAt?: string | null;
        /** The citation exactly as the publisher prints it. Null when none is printed. */
        citationAsPrinted?: string | null;
        /** The publisher's own words on the governor's action. `enactmentOutcome` is our normalised reading of it. */
        vetoStatusAsPrinted?: string | null;
        /** Pages in the source document when it is a PDF. Null for HTML sources. */
        pageCount?: number | null;
        /** The official page or file the act's text was collected from, on a government publisher's host: the first `sources` entry whose `role` is `text` and whose `hostClass` is `gov`. Open it to verify the text against the publisher. Null when we hold no such source (a law we know exists and have not collected) or when the text source is not a government host. Present on a withheld law too: the official copy is always where to go when we hold the text back. */
        sourceUrl?: string | null;
        /** Every effective date the publisher prints for the act, in printed order. Always a list, never null; empty when none is held. Empty does NOT mean the act is not in force: a date printed as a rule (`the day following final enactment`) or not printed in the publisher's metadata is not guessed, and the approval date is never substituted for it. An act can take effect in parts, so a date may carry a `scopeAsPrinted`. */
        effectiveDates?: Array<Record<string, unknown>>;
        /** Every other date printed on the act, each with its `kind`: the approval date, filing dates and the publisher's own milestones (presentment to the governor). */
        otherDates?: Array<Record<string, unknown>>;
        /** The code sections the publisher's own table lists the act as affecting, as printed. Always a list. Empty when the publisher prints no such table, which is common: the title still names sections in prose. We do not read sections out of the act text into this list. */
        codeSectionsAffected?: Array<Record<string, unknown>>;
        /** The publisher documents the record was collected from, with the hash and fetch time of each: the audit trail from this response back to the official copy. */
        sources?: Array<Record<string, unknown>>;
        /** What the publisher itself printed or published about the act, beyond the dates and citation above: its own structured fields verbatim (`publisherFields`: the bill's action history, committees, sponsors, and vote counts where the publisher gives them), its own identifiers, the legislature number and the printed pages. Omitted, not null, when it cannot be read or we only know the act exists. */
        publisher?: Record<string, unknown> | null;
        /** How we came by the text (the extraction method, the bound volume it was cut from) and the collector's own `caveats` on the record. Omitted, not null, when it cannot be read or we only know the act exists. */
        provenance?: Record<string, unknown> | null;
        /** Present only when your input did not match an id as sent: it says what was matched and how. Null when you sent an exact id. */
        resolvedFrom?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Get a state session law's text. */
    "vaquill.get_session_law_body": {
      input: {
        /**
         * A STATE session law's id, for example `SSL_MN_2025S1_G_Y2025_C1`, from a `/us/session-laws/list` result.
         *
         * A citation also works here on `GET /us/session-laws/{sessionLawId}`, and `resolvedFrom` says what your input matched. Name the state in the citation: `Minn. Laws 2025, ch. 1`, `2025 Minn. Laws ch. 1`, `Ch. 1, Laws of Minnesota 2025`, `Ch. 2025-12, Laws of Fla.`, `2025 Wash. Sess. Laws ch. 12`, `La. Acts 2025, No. 12`, `Pa. Act 12 of 2025`, `Minn. S.F. 1552 (2025)`, `MN: Laws 2025, ch. 1`. A form only one state uses needs no state: `P.A. 104-0001` (Illinois), `Pub. Act No. 26-151` (Connecticut), `S.L. 2025-12` (North Carolina), `Stats. 2025, ch. 12` (California), `D.C. Law 25-713`. The publisher's printed form (`CHAPTER 2025-12`, `S.F.No. 1552`) and the `citation` we print on every law also work. A form several states share (`Laws 2025, ch. 1`, `HB 123`, `Act 12 of 2025`) is a 404 with `reason: needs_jurisdiction`, the states it exists in and one candidate per state: we never guess the state. A citation naming several laws of one state (Minnesota 2025 has two Chapter 1s) is a 404 listing all of them, `candidateCount` and `truncated` saying whether the list is complete, and `defaultSessionLawId` the regular session's law where there is exactly one conventional reading. An id or citation that matches nothing in a session we have only partly collected is a 404 with `reason: session_not_fully_collected` and that session's coverage: the law may exist and not be held yet, so it is never charged, the resolve price included. A citation costs the route's price PLUS the `/us/statutes/resolve` price (2 credits), the second charged whether or not it resolves. URL-encode the citation; one containing `/` cannot travel in a path segment.
         *
         * Federal session laws (`SAL_...`, `Pub. L. 118-5`, the Statutes at Large) are served by `/us/statutes/section`, not here, and code citations (`26 U.S.C. § 1`) by `/us/statutes/resolve`.
         * @minLength 1
         * @maxLength 300
         */
        session_law_id: string;
        /** Where to resume: the previous page's `nextCursor`, unchanged. Omit for the first page. It is opaque, signed and tied to the exact text it was cut from: a value we did not issue (`reason: invalid_cursor`), from an older cursor format (`cursor_expired`) or past the end of the text (`cursor_past_end`) is a 422, and one from before the text was re-collected is a 409 (start again without it). None is charged. Send either `cursor` or `startChar`, never both (a 422, never charged). */
        cursor?: string | null;
        /** Start the page at this character offset into the text (0-based, the same scale as `pageStart` and `totalChars`): an alternative to `cursor` for jumping to a place you already know, such as the character where a section begins, without paging from the start. The page that comes back is the same size and price as any other, its `nextCursor` is a normal signed cursor you can follow, and a page is still cut at a paragraph break near its end. Send either `startChar` or `cursor`, never both (a 422, never charged). 0 to 100,000,000; a value at or beyond the end of the text is a 422 and is refunded. There is no page-size parameter: the price per page is fixed. */
        startChar?: number | null;
        /** The `textSha256` you read the text under, in lowercase hex (the whole 64 characters, or any prefix of 16 or more). When this law's text no longer has that hash (it was re-collected), the answer is a 409 and nothing is charged, exactly as for a `cursor` cut from an earlier version: use it with `startChar`, which otherwise has no version binding of its own. Anything that is not 16 to 64 lowercase hex characters is a 422. */
        expectTextSha256?: string | null;
      };
      output: {
        /** Server-side time for this request in milliseconds, excluding network transit. Not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call, never the list price. It includes the `/us/statutes/resolve` fee when a citation was sent where an id goes. 0 when the call was not charged or was refunded (a body that answers `available: false`). */
        creditsConsumed?: number;
        /** The law this page belongs to. */
        sessionLawId: string;
        /** The act's citation as its publisher prints it, the same as `citation` on `GET /us/session-laws/{sessionLawId}`. Carried here so a page is attributable on its own, with no second call. */
        citation: string;
        /** Lowercase two-letter code of the state, `dc` or `pr`. */
        jurisdiction: string;
        /** The legislative session the law was enacted in. */
        session: Record<string, unknown>;
        /** Date the governor approved the act, ISO 8601, as on `GET /us/session-laws/{sessionLawId}`: never an effective date. Null when none is held. See `approvedDateDerived`. */
        approvedDate?: string | null;
        /** True only when `approvedDate` was filled from the publisher's dated signature label rather than held as the approval date. See the same field on `GET /us/session-laws/{sessionLawId}`. */
        approvedDateDerived?: boolean;
        /** The official page or file this text was collected from, on a government publisher's host. Present on EVERY outcome, a withheld or not-held law included, so a reader is never at a dead end: where we do not serve the text, this is where to read it. Null only when we hold no government text source for the law. */
        sourceUrl?: string | null;
        /** False when we do not serve this law's text; `reason` says why. A page with `available: false` is not charged. */
        available: boolean;
        /** Why `available` is false: `not_held`, `withheld`, `pending` or `empty_text`. Null when the text is served. */
        reason?: string | null;
        /** Whether we serve this law's text. `held`: the text is served by `/us/session-laws/{sessionLawId}/body`. `withheld`: we hold the text but a measured defect keeps it from being served, and `withheldReason` says what. `not_held`: we know the act exists and do not hold its text. `pending`: collected and not yet verified. */
        textStatus: "held" | "withheld" | "not_held" | "pending";
        /** Present only when `textStatus` is `withheld`: what is wrong with the text we hold. A plain sentence to show, not an enum to branch on. */
        withheldReason?: string | null;
        /** This page of the act's text, exactly as printed, in reading order. Concatenating every page's `text` in order reproduces the whole text. Where `amendatoryMarkup` is `preserved`, struck and inserted language is in the text in the convention `markupConvention` names. Null when `available` is false. */
        text?: string | null;
        /** Character offset in the full text where this page starts (0-based). Pages are contiguous: the next page's `pageStart` equals this page's `pageEnd`. */
        pageStart?: number | null;
        /** Character offset just past this page. A page is about 30,000 characters, cut back to a paragraph break where one is near, so the length varies. */
        pageEnd?: number | null;
        /** Length of the whole text in characters. This page is the last when `pageEnd` equals it. */
        totalChars?: number | null;
        /** Estimated pages in the whole text: `totalChars` divided by the page size, rounded up. Pages are cut back to a paragraph break, so a long act can run a few percent over. Null when no text is served. */
        totalPages?: number | null;
        /** Credits charged for the page in this response, the same as `creditsConsumed` on this route: the price of one page when a page was served, 0 when none was (`available` is false). Each further page costs the same. */
        pagePrice?: number;
        /** Estimated credits to read the rest of the text from `pageEnd`: the pages still to come (`totalChars` less `pageEnd`, over the page size, rounded up) times the price of a page. 0 on the last page. Null when no text is served. An estimate: a page cut back to a paragraph break can add a page on a long act. Reading a whole law costs `estimatedBodyPages` times the price of one body page (6 credits per page on `GET /us/session-laws/{sessionLawId}/body`). Ohio's 2025 budget act (HB 96) is 9,571,132 characters, about 320 pages or 1,920 credits to read in full; most acts are a page or two. */
        estimatedRemainingCredits?: number | null;
        /** SHA-256 (hex) of the full text of this law. It changes only when the text does, so it is the cheap way to tell whether a copy you hold is current. Body pages carry the same value. */
        textSha256?: string | null;
        /** Whether the language an amending act strikes and inserts survives in the text. `preserved`: it is in `text`, in the convention `markupConvention` names. `lost`: the publisher printed it and our text does not keep it, so deleted words can read as law: check the source before quoting. `absent`: the act carries no such markup that we found. `not_applicable`: there is no text to carry it. */
        amendatoryMarkup?: string | null;
        /** How preserved markup is written, set only when `amendatoryMarkup` is `preserved`. `wdiff`: deleted language is `[-like this-]` and inserted language `{+like this+}`. `publisher_literal`: the publisher's own words are left as printed (Minnesota prints `new text begin` / `new text end` and `deleted text begin` / `deleted text end` markers). `mixed`: both in one text. */
        markupConvention?: string | null;
        /** Opaque cursor for the next page: send it as `cursor` on the same path. Null on the last page. It is tied to this exact text, so a cursor from before the text was re-collected is a 409. */
        nextCursor?: string | null;
        /** True when more pages follow; fetch them with `nextCursor`. Each page is charged. */
        hasMore?: boolean;
        [key: string]: unknown;
      };
    };
    /** Feed of changes to the session-law registry. */
    "vaquill.get_session_law_changes": {
      input: {
        /**
         * Return only entries with an `id` greater than this: the cursor for walking the feed forward. Send 0 (the default) to start from the beginning, then the `cursor` of your last page. `id` is an integer that only grows, so this is exact and immune to clock skew. A negative or non-integer value is a 422 and is never charged; a value past the newest `id` is an empty page, which is charged.
         * @minimum 0
         * @maximum 9223372036854776000
         */
        sinceId?: number;
        /** Limit the feed to one jurisdiction: a two-letter state code, `dc` or `pr`, case-insensitive. Omit for every jurisdiction. `federal` and any unknown code is a 422 and is never charged: federal session laws are not in this feed. The cursor is a position in the whole feed, so a filtered page may have gaps in `id`. */
        jurisdiction?: "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY" | null;
        /**
         * Most entries on this page: 1 to 200, default 50. The price is per page, however many entries it holds, so a larger page is cheaper per entry. Out of range is a 422 and is never charged.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
      };
      output: {
        /** The entries after `sinceId`, oldest first, at most `limit`. Empty when nothing changed since your cursor, which is an answer and is charged. */
        changes?: Array<Record<string, unknown>>;
        /** Entries on this page. */
        count?: number;
        /** The largest `id` on this page: send it as `sinceId` for the next page. Null when the page is empty, so keep the cursor you already hold. */
        cursor?: number | null;
        /** True when more entries follow this page: call again with `sinceId` set to `cursor` straight away. False means you have caught up as of this call. */
        hasMore?: boolean;
        /** Credits actually charged for this call, never the list price. 0 when the call was refunded (a failure on our side). */
        creditsConsumed?: number;
        /** Server-side time for this request in milliseconds, excluding network transit. Not billed on. */
        processingTimeMs?: number;
        [key: string]: unknown;
      };
    };
    /** Get many state session laws at once, by id or citation. */
    "vaquill.get_session_laws": {
      input: {
        /**
         * State session law ids, or citations, to read: up to 50 DISTINCT entries per call. Each entry is read exactly as the `{sessionLawId}` path of `GET /us/session-laws/{sessionLawId}` reads one: an id as sent, an id carrying copy damage, or a citation (`Minn. Laws 2025, ch. 1`, `P.A. 104-0001`, `S.F.No. 1552`). Entries are trimmed, and blank ones are dropped. Duplicates collapse FIRST (the first spelling wins, order is kept) and the cap applies to what is left, so a list quoting one law sixty times is one entry; `deduped` says how many were collapsed. 200 is the ceiling on the raw list. An entry is at most 300 characters. Federal ids (`SAL_...`) and endpoint names are misses, never charged.
         * @minItems 1
         * @maxItems 200
         */
        ids: Array<string>;
        /** Optional two-letter state code that scopes how a CITATION in `ids` is read, for the whole batch: it supplies the state a citation does not name (`Laws 2025, ch. 1` with `mn` is Minnesota's) and vetoes a state the citation does name or whose form belongs to another. Ignored for an id. The 50 states, `dc` and `pr`, case-insensitive; `federal` or an unknown code is a 422 and nothing is charged. Omit it for a batch whose citations each name their own state. */
        jurisdiction?: "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY" | null;
        /** Return the FIRST page of each served law's text inline, on `body`, beside the record. A page is about 30,000 characters and costs the ordinary body price (6 credits) per law whose page is served; a law whose text is withheld, not held or empty comes back with `body: null` and is not charged for it. Read `creditsConsumed` rather than computing the total: the worst case is 50 laws at 2 + 6 credits each. `bodyNextCursor` continues a longer act on `GET /us/session-laws/{sessionLawId}/body`. */
        includeBody?: boolean;
      };
      output: {
        /** The served laws, one per distinct law, in the order the entries of `ids` first reached them. Entries that missed are NOT here, so a client mapping by position must use `input` on each law (or `notFound`), never the index. */
        laws?: Array<Record<string, unknown>>;
        /** One entry per input that did NOT match an id exactly as sent: a citation resolved to its law, or an id cleaned of whitespace, quotes or a trailing period. Includes an input whose law an earlier entry already produced, so every input is mappable onto `laws`. Empty when every entry was an exact id. */
        resolved?: Array<Record<string, unknown>>;
        /** Every entry that did not yield a law, in the order sent, each with its `status` and `reason`. A miss is not charged for the route's own price. An entry read as a CITATION also paid the resolve price, kept whenever we gave a verdict on it (`unparsed`, `ambiguous`, `needs_jurisdiction`, `federal`) and refunded on `session_not_fully_collected` and `error`. An id pays no resolve price. */
        notFound?: Array<Record<string, unknown>>;
        /** Number of laws returned in `laws`. */
        count?: number;
        /** How many entries of `ids` were collapsed because an earlier entry was identical after trimming. Zero when none were. Two DIFFERENT spellings of one law are not counted here: the law appears once in `laws` and both spellings are in `resolved`. */
        deduped?: number;
        /** Credits actually charged for this call, never the list price: 2 per law served, plus the 2-credit resolve price for each citation whose resolution is kept, plus the body price per `body` served. Misses and failures bill nothing for the route. */
        creditsConsumed?: number;
        /** Server-side time for this request in milliseconds, excluding network transit. Not billed on. */
        processingTimeMs?: number;
        [key: string]: unknown;
      };
    };
    /** List what changed on a watch's source. */
    "vaquill.get_watch_changes": {
      input: {
        /** watch_id parameter. */
        watch_id: string;
        /**
         * Max changes to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** Return only changes with an `id` greater than this. The cursor to build on: ids are a monotonic sequence, so this is exact, immune to clock skew, and cannot drop two changes that share a timestamp. Carry `meta.cursor` forward from your last page. */
        sinceId?: number | null;
        /** Return only changes with an `id` less than this: the cursor for walking BACK through history, where `sinceId` walks forward into new changes. A newest-first reader needs this one, since paging down a descending list means asking for what sits below the lowest id already held. Pass the smallest `id` on your last page. */
        beforeId?: number | null;
        /** Return only changes detected strictly after this ISO-8601 timestamp. Coarser than `sinceId` (a single refresh writes many rows at the same instant, and this drops all of them), but useful when all you kept was the `detectedAt` off a `changes[]` item in a webhook body. Prefer that item's `id` as `sinceId` where you still have it. Both may be combined. */
        since?: string | null;
        /** Filter to these kinds. Repeat the parameter to pass several (`?changeKind=added&changeKind=amended`). Omit for all three. */
        changeKind?: Array<"added" | "amended" | "removed"> | null;
        /** `desc` (default) is newest first, for showing a recent-activity list. Use `asc` when catching up from a cursor: walking forward means a page that hits `limit` leaves the gap at a known end. */
        order?: "asc" | "desc";
      };
      output: {
        /** Business data returned by Vaquill. */
        data?: Record<string, unknown>;
        /** Timing, credit usage and pagination metadata returned by Vaquill. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List delivery history for a watch. */
    "vaquill.get_watch_deliveries": {
      input: {
        /** watch_id parameter. */
        watch_id: string;
        /**
         * Max deliveries to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
      };
      output: {
        /** Business data returned by Vaquill. */
        data?: Record<string, unknown>;
        /** Timing, credit usage and pagination metadata returned by Vaquill. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Old-vs-new text for one change. */
    "vaquill.get_watch_diff": {
      input: {
        /** watch_id parameter. */
        watch_id: string;
        /** change_id parameter. */
        change_id: number;
      };
      output: {
        /** Business data returned by Vaquill. */
        data?: Record<string, unknown>;
        /** Timing, credit usage and pagination metadata returned by Vaquill. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List watchable boards. */
    "vaquill.list_boards": {
      input: {
        /** Only boards for this corpus type, matched case-insensitively so the uppercase spelling used by the statutes endpoints (`CFR`) finds the board (`cfr`). An unknown value is an empty page with `total: 0`, not an error. */
        corpusType?: string | null;
        /** Only boards for this jurisdiction. Pass `federal` for the boards that have no state (USC, eCFR, the Federal Register). Omit for no jurisdiction filter -- which is NOT the same as `federal`. */
        state?: "federal" | "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "FEDERAL" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY" | null;
        /**
         * Max boards to return. The default covers the whole registry today; check `total` rather than assuming it always will.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Number of boards to skip, for paging.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Business data returned by Vaquill. */
        data?: Record<string, unknown>;
        /** Timing, credit usage and pagination metadata returned by Vaquill. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Browse the statutory hierarchy. */
    "vaquill.list_divisions": {
      input: {
        /** Corpus to browse. Case-insensitive. The browsable subset of the `corpusType` tokens on `/us/statutes/coverage`. */
        corpusType: "USC" | "CFR" | "STATE" | "REGULATION" | "CONSTITUTION" | "STATE_CONSTITUTION" | "FEDERAL_RULES";
        /** 2-letter jurisdiction code, required for the state-scoped corpora (STATE, REGULATION, STATE_CONSTITUTION). Case-insensitive. */
        state?: "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY" | null;
        /** USC/CFR title number to drill into. */
        titleNumber?: number | null;
        /** Code to drill into: a state code such as `tx_pe` (list them with `corpusType=STATE&state=<state>`), or a federal rule set such as `frcp` (list them with `corpusType=FEDERAL_RULES`). */
        code?: string | null;
        /** Chapter identifier to drill into (USC and state codes). Accepted alongside `part` on CFR, where it is not needed: part numbers are unique within a title. */
        chapter?: string | null;
        /** Part identifier to drill into (CFR). */
        part?: string | null;
        /** Article to drill into: a constitution's article or amendment (`Article III`, `Amendment XIV`), or the article of a state code that is divided by articles rather than chapters (New York, where the listing's `kind` is `article`). Pass the `identifier` exactly as the listing returned it. */
        article?: string | null;
        /** Leave out sections whose status is affirmatively dead (repealed, superseded, renumbered and similar). A section carrying no recorded status is KEPT: a missing status is not evidence of repeal. Same vocabulary as the filter of this name on `POST /us/statutes/search`. */
        excludeRepealed?: boolean;
        /** List only sections carrying this status, e.g. `repealed`. The inverse of `excludeRepealed`, and useful for auditing what a container holds that is no longer operative. */
        actStatus?: "abolished" | "deleted" | "expired" | "in_force" | "inactive" | "non_precedential" | "not_funded" | "not_yet_effective" | "omitted" | "proposed" | "recodified" | "recompiled" | "rejected" | "relocated" | "removed" | "renumbered" | "repealed" | "rescinded" | "reserved" | "revoked" | "superseded" | "terminated" | "transferred" | "unconstitutional" | "vacant" | "vacated" | "vetoed" | "withdrawn" | null;
        /** Resume token from a previous response's `nextCursor`. Only meaningful at the level that lists sections. Omit it to start at the beginning of the container. */
        cursor?: string | null;
      };
      output: {
        /** The corpus being walked, echoed back from the request. */
        corpusType: string;
        /** The jurisdiction, for state-scoped corpora. */
        state?: string | null;
        /** Kind of children returned: `titles`, `chapters`, `parts`, `codes`, `articles`, or `sections`. */
        level: string;
        /** Human label for the container these divisions sit under. */
        parentLabel?: string | null;
        /** The child divisions, in statutory (natural) order. */
        divisions?: Array<Record<string, unknown>>;
        /** Number of divisions returned. */
        count?: number;
        /**
         * Opaque token to resume this listing. Present only when `truncated` is true. Pass it back as `cursor` to get the next batch of sections in the same container, and keep going until it comes back null. Treat it as opaque: it encodes a storage position, and building one by hand will not work.
         *
         * One ordering caveat. `divisions` is sorted into statutory order WITHIN each response, and pages are walked in storage order, so concatenating pages does not give you one globally sorted list. The union of every page is the complete container; sort it yourself once you hold it all.
         */
        nextCursor?: string | null;
        /** True when this container held more sections than one call can walk, so `divisions` is a PREFIX of its contents rather than all of them. Check it before treating a listing as complete: the level that returns sections is bounded, and a container past that bound previously returned a short list that looked whole. When it is true, narrow the scope (drill into a chapter or part rather than a whole code), or page through it with `nextCursor`. */
        truncated?: boolean;
        /** Why the result is empty, when it is. Absent on a normal result. An empty `divisions` with a note is an answer; without one it would be ambiguous between a bad identifier and a level this corpus does not store. */
        note?: string | null;
        /** Server-side time for this request in milliseconds, excluding network transit. Useful for spotting a slow query; not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call. Read it rather than assuming the list price: failed and refunded work bills 0, and batch endpoints charge per item returned, so a partial result costs less than a full one. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
    /** List a state's session laws. */
    "vaquill.list_session_laws": {
      input: {
        /** Two-letter code of the state whose session laws to list: the 50 states, `dc` and `pr`. Case-insensitive (`MN` works). Required: the list is scoped to one jurisdiction at a time. `federal` and any unknown code is a 422; federal session laws are on `/us/statutes/section`. A jurisdiction we hold no session laws for returns an empty page with a `coverage` block saying so, which is not charged: see `sessionLaws` on `/us/statutes/coverage` for what is held. */
        jurisdiction: "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
        /** Only laws enacted in this session. Use the code exactly as `session.code` reports it: `2025R` is the 2025 regular session, `2025S1` the first special session of 2025. Case-sensitive, so `2025r` matches nothing. A code that matches no session returns an empty page (charged), not an error; characters other than letters, digits, `.`, `_` and `-` are a 422. Omit to list every session. */
        session?: string | null;
        /** Only laws in one of these numbering series. Repeat the parameter for several (`series=resolve&series=resolves`); they combine with OR. `general` is the ordinary chapter sequence of most states; others number acts, resolutions or local laws apart. One of `general`, `public`, `public_act`, `special_act`, `private_and_special`, `act`, `acts`, `law`, `local`, `municipal`, `appropriation`, `resolve`, `resolves`, `resolution`, `resolution_chapter`, `joint_resolution`, `concurrent_resolution`, `memorial`, `initiated_bill`, `constitutional_amendment`, as a result's `series` reports it. Not every jurisdiction uses every series: `sessionLaws` on `/us/statutes/coverage` lists each one's. Any other value is a 422, never charged; a valid series nothing matches returns an empty page (charged). Omit for every series. */
        series?: Array<"general" | "public" | "public_act" | "special_act" | "private_and_special" | "act" | "acts" | "law" | "local" | "municipal" | "appropriation" | "resolve" | "resolves" | "resolution" | "resolution_chapter" | "joint_resolution" | "concurrent_resolution" | "memorial" | "initiated_bill" | "constitutional_amendment"> | null;
        /** Only these kinds of measure. Repeat the parameter for several (`instrumentType=joint_resolution&instrumentType=concurrent_resolution`); they combine with OR. One of `act`, `joint_resolution`, `concurrent_resolution`, `resolution`, `resolve`, `memorial`, `other` (`act` is an ordinary law), as `instrumentType` reports it. Any other value is a 422, never charged; a valid kind nothing matches returns an empty page (charged). Omit for every kind. */
        instrumentType?: Array<"act" | "joint_resolution" | "concurrent_resolution" | "resolution" | "resolve" | "memorial" | "other"> | null;
        /**
         * Only laws approved (signed) on or after this date. Format `YYYY-MM-DD`, inclusive; it must be a real calendar date (`2025-02-30` is a 422). A law with no printed approval date never matches, and neither does one whose `approvedDate` we derived (`approvedDateDerived: true`): this filter reads the registry's own approval date, so South Dakota's derived dates are not found by it. Pair with `approvedTo` for a range; an end before the start is a 422 (never charged).
         * @format date
         */
        approvedFrom?: string | null;
        /**
         * Only laws approved (signed) on or before this date. Format `YYYY-MM-DD`, inclusive; it must be a real calendar date (`2025-02-30` is a 422). Like `approvedFrom`, it does not match a derived `approvedDate`.
         * @format date
         */
        approvedTo?: string | null;
        /**
         * Only laws with an effective date on or after this date. Format `YYYY-MM-DD`, inclusive; it must be a real calendar date (`2025-02-30` is a 422). A law matches when the span from its first to its last effective date (`effectiveFirst` to `effectiveLast`) overlaps your window, so one whose dates straddle your day is returned even though none falls exactly on it: read `effectiveDates` on the law for the dates themselves. Only laws with a held effective date can match, and not every state's publisher prints them (Texas, Washington and Iowa do; Minnesota does not yet): a law with no effective date is never returned by this filter, though it may well be in force. To get everything taking effect on one day, send the same date to both `effectiveFrom` and `effectiveTo`; for example `jurisdiction=tx`, `effectiveFrom=2025-09-01`, `effectiveTo=2025-09-01` lists the Texas acts effective September 1, 2025.
         * @format date
         */
        effectiveFrom?: string | null;
        /**
         * Only laws with an effective date on or before this date. Format `YYYY-MM-DD`, inclusive; it must be a real calendar date (`2025-02-30` is a 422). Overlap rule as for `effectiveFrom`. An end before `effectiveFrom` is a 422 (never charged).
         * @format date
         */
        effectiveTo?: string | null;
        /** `true`: only laws whose text is served (`textStatus: held`), the ones `/{sessionLawId}/body` will return. `false`: only laws whose text is not served (`withheld`, `not_held` or `pending`). Omit for both. Combined with `textStatus` by AND, so `hasText=true&textStatus=withheld` is always empty. Anything but a boolean is a 422. */
        hasText?: boolean | null;
        /** Only laws with this text status. One of `held`, `withheld`, `not_held`, `pending`: `held` is served, `withheld` is held but kept back for a measured defect, `not_held` is known to exist without text, `pending` is collected and not yet verified. Any other value is a 422. Omit for every status. */
        textStatus?: "held" | "withheld" | "not_held" | "pending" | null;
        /** `true`: only measures that are law. `false`: only numbered measures that are NOT law (a vetoed bill, a pocket veto), the ones `isLaw: false` marks. Omit for both. A measure whose outcome does not settle it (`not_presented`, `unknown`) has a null `isLaw`, so it matches neither `true` nor `false`: use `enactmentOutcome` for those. Anything but a boolean is a 422. */
        isLaw?: boolean | null;
        /** Only laws with one of these outcomes. Repeat the parameter for several (`enactmentOutcome=vetoed&enactmentOutcome=pocket_veto`); they combine with OR. One of `signed`, `became_law_without_signature`, `veto_overridden`, `line_item_veto`, `vetoed`, `pocket_veto`, `not_presented`, `approved_by_voters`, `unknown`, as `enactmentOutcome` reports it. Any other value is a 422, never charged; a valid outcome nothing matches returns an empty page (charged). The order you send them in does not matter, and a cursor stays valid for the same set. */
        enactmentOutcome?: Array<"signed" | "became_law_without_signature" | "veto_overridden" | "line_item_veto" | "vetoed" | "pocket_veto" | "not_presented" | "approved_by_voters" | "unknown"> | null;
        /**
         * Only laws whose record changed on or after this date, midnight UTC, by `updatedAt`: the filter for a sync job that pulls only what is new or corrected since its last run. Format `YYYY-MM-DD`, inclusive; it must be a real calendar date (`2025-02-30` is a 422). A day with no change returns an empty page (charged), not an error.
         * @format date
         */
        updatedSince?: string | null;
        /** Only laws whose `title` or printed `billNumber` contains this text, case-insensitively (`grain buyers` finds `An act relating to agriculture; modifying financial reporting requirements for grain buyers ...`). A plain substring, not a search engine: no stemming, no ranking, and `%` and `_` mean themselves. The bill number is matched as the publisher prints it (`S.F.No. 1552`, not `SF 1552`): to find a law by citation, use `GET /us/session-laws/{sessionLawId}`. 3 to 100 characters after trimming and without control characters, else a 422 (never charged); text that matches nothing returns an empty page (charged). Combines with the other filters by AND within the required `jurisdiction`. */
        q?: string | null;
        /** Where to resume: the previous page's `nextCursor`, unchanged. Send it with the same filters that produced it (`limit` may change). It is opaque, signed and tied to those filters, and is only ever issued by this API: a value we did not issue is a 422 with `reason: invalid_cursor`, one from an older cursor format is `cursor_expired`, and one sent with different filters is `cursor_query_mismatch` (restart without `cursor`). Never an empty page. Omit for the first page. */
        cursor?: string | null;
        /**
         * Rows per page, 1 to 200; default 50. A page costs the same however many rows it holds, so a larger `limit` is cheaper per law. Outside the range is a 422.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
      };
      output: {
        /** Server-side time for this request in milliseconds, excluding network transit. Not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call, never the list price. It includes the `/us/statutes/resolve` fee when a citation was sent where an id goes. 0 when the call was not charged or was refunded (a body that answers `available: false`). */
        creditsConsumed?: number;
        /** The page of laws, by `session.code` and then `sessionLawId`, both as text in the database's collation, not chapter order (so `..._C10` comes before `..._C2`; sort by `number` client-side if you need chapter order). The record without its dates list, sources or text: fetch those with `GET /us/session-laws/{sessionLawId}`. */
        results?: Array<Record<string, unknown>>;
        /** Rows on this page. Never a total: the list is paged by cursor and has no corpus-wide count. */
        count?: number;
        /** Opaque cursor for the next page: send it as `cursor`, with the same filters. Null on the last page. */
        nextCursor?: string | null;
        /** True when another page follows. Each page is charged, an empty one included, except an empty page that `coverage` reports as a gap in our collection. */
        hasMore?: boolean;
        /** Present only on an EMPTY page: what we hold of the session (or state) you asked about, so you can tell `nothing matches your filters` from `we have not collected this`. `status: complete` means the first: the page is charged. `partial` (the collection stopped short) and `not_held` (we hold nothing of it) mean the second: the page is NOT charged and `creditsConsumed` is 0. Omitted when the coverage cannot be read, in which case the empty page is charged as before. */
        coverage?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** List your board watches. */
    "vaquill.list_watches": {
      input: {
        /**
         * Max watches to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Number of watches to skip, for paging.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Business data returned by Vaquill. */
        data?: Record<string, unknown>;
        /** Timing, credit usage and pagination metadata returned by Vaquill. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Resolve a citation to its section. */
    "vaquill.resolve_citation": {
      input: {
        /**
         * A Bluebook citation string, e.g. '42 U.S.C. 1983' or '16 C.F.R. 444.1'.
         * @minLength 2
         * @maxLength 200
         */
        cite: string;
        /** Optional jurisdiction to resolve WITHIN: a two-letter state code, e.g. `tx`, or `federal` for the U.S. Code, the C.F.R., federal rules and the U.S. Constitution. Some citation forms are shared: `8 CCR 1206-2` is Colorado and `22 CCR 76227` is California, and the acronym alone cannot say which. This is a constraint, not a hint -- a citation that names a different jurisdiction returns `resolved: false` rather than being forced into this one, and `citationOutsideFilters` says which section it names. */
        state?: "federal" | "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "FEDERAL" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY" | null;
        /** Optional corpus to resolve WITHIN: `STATE` (statutory text, federal or state), `REGULATION` (administrative codes), `STATE_RULES` (court rules), `CONSTITUTION` (constitutional text), `STATE_CONSTITUTION` (constitutional text; a synonym of `CONSTITUTION` here, since `state` is what separates the two). Narrows a citation whose form several corpora share; like `state`, a citation belonging to another corpus resolves to nothing instead. */
        corpusType?: "CONSTITUTION" | "REGULATION" | "STATE" | "STATE_CONSTITUTION" | "STATE_RULES" | null;
      };
      output: {
        /** True when the citation resolved to an exact section. */
        resolved: boolean;
        /** The citation string you asked to resolve, echoed back. */
        inputCitation: string;
        /** The resolved section, or null when the citation did not resolve. */
        section?: Record<string, unknown> | null;
        /** Parsed pinpoint subsection when the citation carried one, e.g. 'b.2' for '42 U.S.C. 1983(b)(2)'. The returned section is the parent. It is also set when the citation names a unit SMALLER than the one the publisher issues: Rhode Island cites a regulation by section ('250-RICR-120-05-15.2') but publishes the whole Part, so `section` is Part 15 and `subsection` is '15.2'. A non-null `subsection` always means `section` is the containing document, not the exact unit you cited. */
        subsection?: string | null;
        /** Set only when `resolved` is false because your `state` or `corpusType` scope excludes a section this citation DOES name, e.g. `42 U.S.C. 1983` under `state=ca`. The scope is a constraint, so the verdict stays `resolved: false`; this says why, so an unresolved result is not read as 'no such section'. Retry without the scope named in `excludedBy` to resolve it. No extra charge. */
        citationOutsideFilters?: Record<string, unknown> | null;
        /** Present only when the citation names a STATE session law (an act as enacted, for example `CHAPTER 2025-12` or `S.F.No. 1552`) rather than a code section. `resolved` stays false and `section` stays null, because both describe a code section; the law is in `sessionLaw`. */
        matchedCorpus?: "session_law" | null;
        /** The state session law this citation names, when it names no code section. `status` is `matched` (one law, read it at `href`) or `ambiguous` (several, all in `candidates`, none chosen for you). Absent when the citation resolved to a section, and whenever session laws cannot be checked. No extra charge. */
        sessionLaw?: Record<string, unknown> | null;
        /** Present only when `section` is NOT the exact unit you cited. `container`: you cited a chapter, series, article, part or amendment, and `section` is the FIRST section inside it (see `container` for how many there are and what they are). `multiple`: you cited several sections (`§§ 8, 10`, `§§ 1983-1985`) and `section` is the first of them (see `citedSections`), or your citation fits more than one held section (`D.C.COLO.LR 7.1` is both Local Civil and Local Criminal Rule 7.1) and every candidate is listed in `container`. `repaired`: the code name you wrote is a recognised miscite and `section` is the one it names (see `repair`); or (`repair.kind: prior_edition`) the text you cited has been replaced by a current one, and `section` is NOT the text you cited: a C.F.R. or U.S.C. section the current code no longer holds, answered with the MOST RECENT historical annual edition we hold, or a superseded rule set whose rule numbers were kept, answered with the current rule (`Tex. R. Civ. Evid. 803` is answered by `Tex. R. Evid. 803`); `repair.interpretedAs` names what was served and why, and `repair.alternatives` lists the other held editions, if any; or (`repair.kind: former_law`, `former_number`) you cited a FORMER section number, recodified or renumbered since, and `section` is the successor the state's own disposition table or history line names, never the former text (a former section split into several answers `multiple`, every successor in `citedSections`). or (`repair.kind: code_name_inferred`) your citation named no code (`CODE ANN. § 73.001`, `Code 4121-3-34`) and `section` is the only one in the state that carries that number, so the code was inferred from the number and not read from your citation; `register_reference`: you cited a state register page, and `section` is a rule whose history cites it (see `registerReference`). `resolved` keeps its meaning (a section was returned) and is true at every level; read `matchLevel` to tell an exact section from a first-of-several. Absent for an exact match. */
        matchLevel?: "container" | "multiple" | "repaired" | "register_reference" | null;
        /** Set with `matchLevel: container`. What you cited and the sections inside it; `section` is the first of them. Also set with `matchLevel: multiple` when the citation fits several held sections and none is the one cited (kind `alternatives`): every candidate is listed, `section` is only the first offered. */
        container?: Record<string, unknown> | null;
        /** Set with `matchLevel: multiple`. The sections your citation named, as written (a range such as `1983-1985` is one entry); `section` is the first. */
        citedSections?: Array<string> | null;
        /** Set with `matchLevel: repaired`. The miscite we corrected and how we read it. */
        repair?: Record<string, unknown> | null;
        /** Present only when `matchLevel` is `register_reference`: the citation names a page, issue or filing of a state register or bulletin. When `registerItemHeld` is true `section` IS that register item (corpusType STATE_REGISTER, a notice as printed, not codified law). Otherwise the item is not held and `section` is a RULE whose history note cites it (the first of `ruleCount`, in document order); read `rules` for the others. */
        registerReference?: Record<string, unknown> | null;
        /** Present only when `resolved` is false and none of `citationOutsideFilters` / `sessionLaw` already explains it. WHY the citation did not resolve: `ambiguous_jurisdiction` (the form is one several jurisdictions print, or names none, and no `state` was given: pass `state`; `candidates` lists the held sections it could mean when we can name them, and never picks one), `out_of_scope_corpus` (it names a body of law this route does not serve; `missReasonHint` says which and where to look), `former_law` (it names a repealed, renumbered or retired compilation we do not serve as current law; `missReasonHint` names the successor where one is known), `malformed` (no parser reads it: a docket or database token, a case or treatise citation, a string with no section number), `not_held` (it reads as a citation to a jurisdiction and corpus we serve, and that corpus does not hold the section). A miss is still charged, because the verdict is the product; the reason adds no charge. Absent on a resolved citation. */
        missReason?: "not_held" | "former_law" | "ambiguous_jurisdiction" | "malformed" | "out_of_scope_corpus" | null;
        /** Present only with `missReason: ambiguous_jurisdiction`, and only when we can name the held sections the citation could mean (an acronym two states print, such as `CCR`). At most 10 entries. Pass the right one's `state` to `GET /us/statutes/resolve` to resolve it. Never a pick: when several are listed, none is the answer. */
        candidates?: Array<Record<string, unknown>> | null;
        /** Present with `missReason`. One sentence on what to try next. Prose for a human or an agent; do not parse it. */
        missReasonHint?: string | null;
        /** Server-side time for this request in milliseconds, excluding network transit. Useful for spotting a slow query; not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call. Read it rather than assuming the list price: failed and refunded work bills 0, and batch endpoints charge per item returned, so a partial result costs less than a full one. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
    /** Resolve many citations at once. */
    "vaquill.resolve_citations": {
      input: {
        /**
         * Bluebook citation strings to resolve. Duplicates are collapsed FIRST and order is preserved, so the response's `results` array lines up with the de-duplicated input.
         *
         * The cap is **50 UNIQUE citations, applied after that collapse**, so a brief quoting one section sixty times is one citation and is accepted. 500 is the raw list ceiling, which exists so an unbounded list of duplicates cannot make us walk it.
         *
         * Priced PER CITATION at the single-resolve rate, exactly like `POST /us/statutes/sections`: batching is a round-trip and latency win, not a discount. Thirty citations cost the same 60 credits either way and take one request instead of thirty.
         * @minItems 1
         * @maxItems 500
         */
        citations: Array<string>;
        /** Optional jurisdiction to resolve every citation WITHIN: a two-letter state code, or `federal` for the U.S. Code, the C.F.R., federal rules and the U.S. Constitution. Applies to the whole batch: a batch spanning jurisdictions should omit it and let each citation name its own. Same semantics as the single-citation route -- a constraint, not a hint. */
        state?: "federal" | "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "FEDERAL" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY" | null;
        /** Optional corpus to resolve every citation WITHIN: `STATE` (statutory text, federal or state), `REGULATION` (administrative codes), `STATE_RULES` (court rules), `CONSTITUTION` (constitutional text), `STATE_CONSTITUTION` (constitutional text; a synonym of `CONSTITUTION` here, since `state` is what separates the two). Same semantics as the single-citation route. */
        corpusType?: "CONSTITUTION" | "REGULATION" | "STATE" | "STATE_CONSTITUTION" | "STATE_RULES" | null;
      };
      output: {
        /** One entry per de-duplicated input citation, in the order supplied. An unresolved citation is an entry with `resolved: false`, never an omission: a caller checking thirty citations needs to know which of them failed, and a shorter array cannot say. */
        results?: Array<Record<string, unknown>>;
        /** How many of the submitted citations resolved to a code section. A citation answered only by a `sessionLaw` block is not counted. */
        resolvedCount?: number;
        /** Total entries in `results`, after de-duplication. */
        count?: number;
        /** Server-side time for this request in milliseconds. */
        processingTimeMs?: number;
        /** Credits actually charged. Read it rather than multiplying the list price by your input length: a backend failure on some citations refunds those, so this can be lower than 2 x `count`. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
    /** Search the text of state session laws. */
    "vaquill.search_session_laws": {
      input: {
        /**
         * What to look for: a question in plain words (`can a sheriff pay with a debit card`), words from a title, a quoted phrase (`"credit card or debit card"`), a citation (`63-3004`), a code section or a bill number (`S.F.No. 1552`). Quoted parts must appear verbatim; everything else is matched on its words, stemmed, so `licensing` finds `licensed`. Words are matched as the legislature wrote them: `teeth cleaning professional` does not find an act that says `dental hygienist`. 2 to 300 characters.
         * @minLength 2
         * @maxLength 300
         */
        query: string;
        /** Limit to one state, `dc` or `pr`. Two-letter code, case-insensitive. Omit to search every jurisdiction we hold. `federal` and an unknown code are a 422, never charged. */
        jurisdiction?: "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY" | null;
        /** Limit to one session, by the code `session.code` reports (`2025R`, `2025S1`). Case-sensitive. Matches the act's own session, so it narrows the TITLE, citation and bill signals; the passage text of an act carries its session year and type but not the code. */
        session?: string | null;
        /** Limit to these numbering series, one or more (they combine with OR). One of `general`, `public`, `public_act`, `special_act`, `private_and_special`, `act`, `acts`, `law`, `local`, `municipal`, `appropriation`, `resolve`, `resolves`, `resolution`, `resolution_chapter`, `joint_resolution`, `concurrent_resolution`, `memorial`, `initiated_bill`, `constitutional_amendment`. Any other value is a 422, never charged. */
        series?: Array<"general" | "public" | "public_act" | "special_act" | "private_and_special" | "act" | "acts" | "law" | "local" | "municipal" | "appropriation" | "resolve" | "resolves" | "resolution" | "resolution_chapter" | "joint_resolution" | "concurrent_resolution" | "memorial" | "initiated_bill" | "constitutional_amendment"> | null;
        /** Limit to these kinds of measure, one or more (OR). One of `act`, `joint_resolution`, `concurrent_resolution`, `resolution`, `resolve`, `memorial`, `other`. Any other value is a 422, never charged. */
        instrumentType?: Array<"act" | "joint_resolution" | "concurrent_resolution" | "resolution" | "resolve" | "memorial" | "other"> | null;
        /**
         * Only laws approved on or after this date, `YYYY-MM-DD`, inclusive; a real calendar date (`2025-02-30` is a 422). A law with no printed approval date never matches.
         * @format date
         */
        approvedFrom?: string | null;
        /**
         * Only laws approved on or before this date, `YYYY-MM-DD`, inclusive. An end before `approvedFrom` is a 422, never charged.
         * @format date
         */
        approvedTo?: string | null;
        /**
         * Laws per page, 1 to 25. A page costs the same however many laws it holds, so a larger `limit` is cheaper per law.
         * @minimum 1
         * @maximum 25
         */
        limit?: number;
        /**
         * Laws to skip, for the next page: `offset` plus `limit` can reach at most the 60 best matches. Each page is a new search and is charged. Deeper than 60 is a 422, never charged: narrow the search with a filter instead.
         * @minimum 0
         * @maximum 59
         */
        offset?: number;
      };
      output: {
        /** The query as read, whitespace collapsed. */
        query: string;
        /** How the query was split into words, phrases, citations and bill numbers. */
        parsed: Record<string, unknown>;
        /** The laws, best first. Empty when nothing matched, which is an answer and is charged. */
        results?: Array<Record<string, unknown>>;
        /** Laws on this page. */
        count?: number;
        /** The `offset` this page was read from. */
        offset?: number;
        /** The `limit` this page was read with. */
        limit?: number;
        /** True when more laws follow: call again with `offset` raised by `limit` (within the 60 best). */
        hasMore?: boolean;
        /** Credits actually charged for this call, never the list price. 0 when the call was refunded. */
        creditsConsumed?: number;
        /** Server-side time for this request in milliseconds, excluding network transit. Not billed on. */
        processingTimeMs?: number;
        [key: string]: unknown;
      };
    };
    /** Search US statutes, constitutions, court rules, and executive actions. */
    "vaquill.search_statutes": {
      input: {
        /**
         * Search query in natural language.
         * @minLength 2
         * @maxLength 500
         */
        query: string;
        /** Restrict to one corpus, or to several by passing a list (`"corpusType": ["USC", "CFR"]`). One of: `USC` (United States Code), `CFR` (Code of Federal Regulations), `STATE` (state statutory codes; call `/us/statutes/coverage` for the list of ingested jurisdictions), `CONSTITUTION` (U.S. Constitution), `FEDERAL_RULES` (FRCP / FRCrP / FRE / FRAP / FRBP), `STATE_CONSTITUTION` (state constitutions; call `/us/statutes/coverage` for the current jurisdiction list), `STATE_RULES` (state court rules; see `/us/statutes/coverage`), `EXECUTIVE_ACTION` (Federal Register Presidential Documents), `REGULATION` (state administrative regulations; pair with `state`), `FEDERAL_REGISTER` (Federal Register agency rules, final and proposed), `AGENCY_GUIDANCE` (sub-regulatory federal agency guidance, 53 named sources spanning the tax, banking, securities, labor, immigration, health-privacy, export-control, intellectual-property, antitrust, energy and communications agencies; each is independently filterable with `source`, which lists them all), `STATE_AGENCY_GUIDANCE` (state-issued regulatory guidance, currently state Department of Insurance bulletins and circular letters; pair with `state`, and see `/us/statutes/coverage`), `SENTENCING_GUIDELINES` (US Sentencing Guidelines Manual), `US_TAX_TREATY` (US income tax treaties and protocols), `SESSION_LAW` (US Statutes at Large: federal public and private laws AS ENACTED, 1789 to date. This is the source the US Code is compiled from, so a section's `publicLawCites` resolve here to the enacting text; call `/us/statutes/coverage` for the live section count). Omit to search across all corpora. The `enum` on this field is the complete token list, and `/us/statutes/coverage` serves a one-line description of each in its legend. */
        corpusType?: "USC" | "CFR" | "STATE" | "CONSTITUTION" | "FEDERAL_RULES" | "FEDERAL_LOCAL_RULES" | "STATE_CONSTITUTION" | "STATE_RULES" | "EXECUTIVE_ACTION" | "REGULATION" | "FEDERAL_REGISTER" | "FEDERAL_REGISTER_NOTICE" | "AGENCY_GUIDANCE" | "SENTENCING_GUIDELINES" | "US_TAX_TREATY" | "STATE_AGENCY_GUIDANCE" | "STATE_AG_OPINION" | "STATE_REGISTER" | "SESSION_LAW" | "STATUTE_COMPILATION" | "AGENCY_ADJUDICATION" | "CFR_ANNUAL" | "USC_ANNUAL" | Array<"USC" | "CFR" | "STATE" | "CONSTITUTION" | "FEDERAL_RULES" | "FEDERAL_LOCAL_RULES" | "STATE_CONSTITUTION" | "STATE_RULES" | "EXECUTIVE_ACTION" | "REGULATION" | "FEDERAL_REGISTER" | "FEDERAL_REGISTER_NOTICE" | "AGENCY_GUIDANCE" | "SENTENCING_GUIDELINES" | "US_TAX_TREATY" | "STATE_AGENCY_GUIDANCE" | "STATE_AG_OPINION" | "STATE_REGISTER" | "SESSION_LAW" | "STATUTE_COMPILATION" | "AGENCY_ADJUDICATION" | "CFR_ANNUAL" | "USC_ANNUAL"> | null;
        /** Jurisdiction filter. A 2-letter code for one of the 52 supported US jurisdictions (50 states + DC + PR), or `federal` to scope to USC / CFR / Constitution / federal rules. Pass a LIST to search several at once (`"state": ["ca", "ny", "tx"]`), which is one call instead of one per jurisdiction. Case-insensitive: `ca` and `CA` both work. An unrecognized value is rejected with 422 rather than silently matching nothing. Omit to search every jurisdiction. */
        state?: "federal" | "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "FEDERAL" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY" | Array<"federal" | "al" | "ak" | "as" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "gu" | "hi" | "id" | "il" | "in" | "ia" | "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" | "ny" | "nc" | "nd" | "mp" | "oh" | "ok" | "or" | "pa" | "pr" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "vi" | "va" | "wa" | "wv" | "wi" | "wy" | "FEDERAL" | "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY"> | null;
        /**
         * Restrict to specific state statutory codes, e.g. `tx_pe` for the Texas Penal Code. Values are the `identifier`s returned by `GET /us/statutes/divisions?corpusType=STATE&state=XX`, so the browse output can be fed straight back in. Pass a list to search several codes, across states if you like (`["tx_pe", "ca_pen"]`). This is the only way to scope below a whole jurisdiction: `state=tx` alone searches every Texas code at once.
         *
         * With `corpusType=FEDERAL_RULES`, a value can instead be a federal rule set as `GET /us/statutes/divisions?corpusType=FEDERAL_RULES` lists it: `frcp`, `fre`, `frcpsuppadm`, or an appendix copy such as `uscapp_t28a_fre`. Without that corpusType a bare `frcp` is refused, because it cannot be told apart from a state code missing its state.
         */
        code?: string | Array<string> | null;
        /**
         * Scope a search to one or more articles. On `CONSTITUTION` and `STATE_CONSTITUTION` this is the article label as `GET /us/statutes/divisions` lists it (`Amendment XIV`, `Article IV`, `Preamble`). On `STATE` / `REGULATION` it is the article of a code divided by article instead of chapter, such as New York (`2-A` in `ny_jud`). This is the search side of `parent.article`: pass a hit's `parent` straight back to search within its article.
         *
         * Pass the `identifier` exactly as the listing returned it; a case slip such as `amendment xiv` also matches. Article labels repeat, so `article` needs a `corpusType` from one of those two families, `STATE_CONSTITUTION` also needs `state`, and `STATE` / `REGULATION` need the `code`. A request missing one is refused with 422 before anything is charged. String or list.
         */
        article?: string | Array<string> | null;
        /** Only return sections dated in or after this year. Combine with `yearTo` for a window. A section matches on the first of three years it carries: the most recent amendment the publisher credits in its own history note; else its effective year, for a section adopted once and never amended; else, for corpora dated by publication rather than amendment (Federal Register proposed rules, agency guidance, adjudications, the treaty record), the document's own publication or issue year. Every one of those tracks the LAW or the document, never when we last rebuilt the corpus. A section carrying none of the three is excluded once either bound is set, so an unbounded search returns strictly more. */
        yearFrom?: number | null;
        /** Only return sections dated in or before this year, on the same three years `yearFrom` describes. Note it filters the LAST such date, so a section amended in 2025 is excluded by `yearTo=2024` even though it existed in 2024. This is a currency filter, not point-in-time retrieval: the corpus holds one current text per citation. */
        yearTo?: number | null;
        /**
         * Drop sections whose own status says they are no longer operative: repealed, renumbered, transferred, recodified, rescinded, revoked, expired, superseded, omitted, reserved, and the rest of the dead and not-operative vocabulary (the full set is the one behind each result's `goodLawStatus`).
         *
         * **This removes what we KNOW is dead. It does not promise the remainder is good law.** A section survives this filter when its status is `in_force` OR when we hold no trustworthy repeal signal for its jurisdiction, and those two are not the same thing. Read `goodLawStatus` on each surviving result to tell them apart: `good_law` is checked, `unknown` is unchecked. Filtering on the status we store and reporting the verdict we derive are deliberately separate, because only the first is indexable.
         *
         * **The United States Code is served from a stored annual edition** (`year` 2024, `currentThrough` 2025-01-06), so a section repealed after that edition closed still carries `actStatus: in_force` and survives this filter. Every USC result therefore reports `goodLawStatus: unknown`, which is the honest answer and the one this field's second paragraph tells you to read. Use `/section/{actId}/changes` for the timeline on a section you depend on.
         */
        excludeRepealed?: boolean;
        /**
         * Positively scope to one or more raw publisher statuses, e.g. `"repealed"` to find only dead law, or `["in_force"]` for only sections affirmatively marked current. This is the inverse of `excludeRepealed` and is what you want for a compliance diff that asks what was LOST rather than what remains.
         *
         * Values are the `actStatus` returned on each result. Combining a dead status here with `excludeRepealed: true` contradicts itself and is rejected with 422 rather than silently returning nothing.
         */
        actStatus?: "abolished" | "deleted" | "expired" | "in_force" | "inactive" | "non_precedential" | "not_funded" | "not_yet_effective" | "omitted" | "proposed" | "recodified" | "recompiled" | "rejected" | "relocated" | "removed" | "renumbered" | "repealed" | "rescinded" | "reserved" | "revoked" | "superseded" | "terminated" | "transferred" | "unconstitutional" | "vacant" | "vacated" | "vetoed" | "withdrawn" | Array<"abolished" | "deleted" | "expired" | "in_force" | "inactive" | "non_precedential" | "not_funded" | "not_yet_effective" | "omitted" | "proposed" | "recodified" | "recompiled" | "rejected" | "relocated" | "removed" | "renumbered" | "repealed" | "rescinded" | "reserved" | "revoked" | "superseded" | "terminated" | "transferred" | "unconstitutional" | "vacant" | "vacated" | "vetoed" | "withdrawn"> | null;
        /**
         * Only return sections we have OBSERVED change on or after this date (`YYYY-MM-DD`). This is the sync filter: it turns a lookup API into something a nightly job can poll, without creating a board watch per jurisdiction.
         *
         * **These are observed changes, not effective dates.** A refresh compared the publisher against the copy we held and found it different; the date is when we SAW it, an upper bound on when it took effect. It is the same event stream `GET /us/statutes/section/{actId}/changes` serves per section, so a hit here has a history there.
         *
         * **Coverage is bounded by capture, not by the age of the law.** Change capture began long after the corpus did, it is per-source, and events are swept at 5 years. An empty result means no captured change in the window, never that nothing was amended.
         *
         * Narrow with `corpusType` and `state` for a tighter window: the change set is resolved to concrete sections before the search runs, and a window matching too many sections is rejected with a 422 that says so rather than silently truncating your answer.
         * @format date
         */
        changedSince?: string | null;
        /** Federal Register agency slug, e.g. `environmental-protection-agency`. The agency's full name (`Environmental Protection Agency`) or its Federal Register acronym (`EPA`, `e.p.a.`) resolves to the same slug; an acronym the Federal Register gives to more than one agency (`FS`) or a value naming no agency the corpus holds is a 422, never a charge. Pass a list to match any of several. Applies to `FEDERAL_REGISTER` and `EXECUTIVE_ACTION`; other corpora carry no agency, so combining this with them returns nothing. */
        agency?: string | Array<string> | null;
        /** Federal Register document stage: `final` (a rule in force), `proposed` (an NPRM), or `presidential` (a Presidential Document, the `EXECUTIVE_ACTION` corpus). The same distinction appears in each row's `actId` prefix (`FR_RULE_` vs `FR_PRORULE_`). */
        documentType?: "final" | "proposed" | "presidential" | null;
        /**
         * Only return Federal Register documents published on or after this date (`YYYY-MM-DD`). This is the PUBLICATION date, which is not the same as `yearFrom`: that filters the version year of a section.
         * @format date
         */
        publishedFrom?: string | null;
        /**
         * Only return Federal Register documents published on or before this date.
         * @format date
         */
        publishedTo?: string | null;
        /** Filter by USC/CFR title number (e.g., 17 for SEC, 42 for civil rights). Only meaningful for `USC`/`CFR`; ignored for state corpora whose titles are alphabetic (e.g. Texas `pe` = Penal Code). */
        titleNumber?: number | null;
        /** Scope a search to one or more chapters within a title or code, e.g. `21` for USC Title 42 Chapter 21. This is the search-side of the `parent` object on each result: pass a hit's `parent.chapter` straight back to search that hit's neighbors. Chapter numbers repeat across titles, so pair it with `titleNumber` (USC) or `code` (state); an unpaired chapter is rejected. String or list. */
        chapter?: string | Array<string> | null;
        /** Scope a search to one or more parts within a title, e.g. `240` for 17 C.F.R. Part 240. The CFR counterpart to `chapter`: pass a hit's `parent.part` straight back to search within that part. Pair it with `titleNumber`; an unpaired part is rejected. String or list. */
        part?: string | Array<string> | null;
        /**
         * Scope to one or more of the following. The named source within `corpusType`, for corpora that fold several independently filterable bodies of law into one token.
         *
         * `FEDERAL_RULES` sources: `frcp` (Federal Rules of Civil Procedure), `frcrp` (Federal Rules of Criminal Procedure), `fre` (Federal Rules of Evidence), `frap` (Federal Rules of Appellate Procedure), `frbp` (Federal Rules of Bankruptcy Procedure), `sct` (Rules of the Supreme Court of the United States).
         *
         * `CFR` sources: `far` (Federal Acquisition Regulation (48 C.F.R. ch. 1)), `dfars` (Defense Federal Acquisition Regulation Supplement (48 C.F.R. ch. 2)) (both are already part of `CFR`; this only splits the existing Title 48 data by chapter, it does not add new sections).
         *
         * `AGENCY_GUIDANCE` sources: `administrative_guidance` (Synthesized administrative guidance (e.g. SALT cap, CTC, 401(k) limits)), `ssa_ruling` (Social Security Administration Rulings), `irs_rev_proc` (IRS Revenue Procedures), `irs_notice` (IRS Notices), `irs_rev_rul` (IRS Revenue Rulings), `irs_announcement` (IRS Announcements), `irs_irm` (Internal Revenue Manual (IRS internal procedure)), `merger_guidelines` (DOJ & FTC Merger Guidelines (2023)), `doj_leniency` (DOJ Antitrust Division Leniency Policy), `doj_business_review` (DOJ Antitrust Division Business Review Letters (1991-2021)), `cms_iom` (CMS Medicare Internet-Only Manuals (instruction to Medicare contractors, not a regulation)), `copyright_circular` (US Copyright Office Circulars), `copyright_compendium` (Compendium of U.S. Copyright Office Practices, Third Edition (2014, 2017 and 2021 editions)), `doj_justice_manual` (DOJ Justice Manual), `uscis_policy_manual` (USCIS Policy Manual), `mpep` (USPTO Manual of Patent Examining Procedure (MPEP)), `tmep` (USPTO Trademark Manual of Examining Procedure (TMEP)), `cftc_staff_letter` (CFTC Staff Letters (no-action, exemptive, interpretative; 2008-present)), `fincen_ruling` (FinCEN Administrative Rulings), `fincen_guidance` (FinCEN Guidance (alerts, advisories, notices, bulletins, fact sheets)), `fincen_boi_faq` (FinCEN Beneficial Ownership Information FAQs), `fincen_boi_rule_qa` (FinCEN BOI Rulemaking Q&As (final rule and interim final rule)), `fincen_boi_compliance_guide` (FinCEN Small Entity Compliance Guide (Beneficial Ownership Information Reporting)), `fincen_amla_material` (FinCEN Anti-Money Laundering Act of 2020 Implementation Material), `frb_sr_letter` (Federal Reserve Supervision and Regulation (SR) / Consumer Affairs (CA) Letters), `occ_bulletin` (OCC Bulletins), `occ_interpretive_letter` (OCC Interpretive Letters), `fdic_fil` (FDIC Financial Institution Letters (FILs)), `cfpb_supervisory_guidance` (CFPB Supervisory Guidance), `cfpb_circular` (CFPB Consumer Financial Protection Circulars), `dfars_pgi` (DFARS PGI (Procedures, Guidance, and Information)), `ftc_advisory_opinion` (FTC Advisory Opinions), `ftc_policy_statement` (FTC Policy Statements (1967-present)), `ftc_hsr_interpretation` (FTC HSR Premerger Notification Interpretations: the Commission's formal interpretations under 16 C.F.R. 803.30 (1978-2000, a closed series) and the Premerger Notification Office's informal interpretations (1983-present; the publisher serves none from 1997)), `ftc_advocacy_filing` (FTC Advocacy Filings: comments and letters to state legislatures, state courts, governors and other federal agencies on the competition effects of a proposed measure (1985-present). Advisory only: they bind nobody and decide no case), `nlrb_gc_memo` (NLRB General Counsel Memoranda), `nlrb_advice_memo` (NLRB Division of Advice Memoranda (rolling 10-year window, not the full archive)), `cpsc_advisory_opinion` (CPSC Office of General Counsel Advisory Opinions (historical, 1970s-2012)), `cpsc_secg` (CPSC Small Entity Compliance Guides), `whd_opinion_letter` (DOL Wage and Hour Division Opinion, Ruling and Administrator Interpretation Letters (FLSA, FMLA, DBRA, SCA, CCPA, MSPA; 1993-present)), `whd_foh` (DOL Wage and Hour Field Operations Handbook (WHD internal enforcement procedure, not law; 22 chapters)), `bis_advisory_opinion` (BIS (Bureau of Industry and Security) Advisory Opinions), `ddtc_commodity_jurisdiction` (DDTC (Directorate of Defense Trade Controls) Commodity Jurisdiction Determinations), `ddtc_guidance` (DDTC (Directorate of Defense Trade Controls) Policy Guidance Documents), `ofac_faq` (OFAC (Office of Foreign Assets Control) Frequently Asked Questions), `hhs_ocr_hipaa_faq` (HHS Office for Civil Rights HIPAA FAQs), `hhs_ocr_hipaa_guidance` (HHS Office for Civil Rights HIPAA Guidance Materials), `hhs_ocr_resolution_agreement` (HHS Office for Civil Rights HIPAA Resolution Agreements and Civil Money Penalties), `fcc_declaratory_ruling` (FCC (Federal Communications Commission) Declaratory Rulings), `ferc_policy_statement` (FERC (Federal Energy Regulatory Commission) Policy Statements), `doe_appliance_guidance` (DOE Appliance Standards Guidance and FAQs), `eeoc_guidance` (EEOC (Equal Employment Opportunity Commission) Enforcement and Policy Guidance, including Compliance Manual sections), `irs_written_determination` (IRS Written Determinations under 26 U.S.C. § 6110: Private Letter Rulings (PLR), Technical Advice Memoranda (TAM) and Chief Counsel Advice (CCA). Each is directed only to the taxpayer who requested it and, by § 6110(k)(3), may not be used or cited as precedent).
         *
         * `US_TAX_TREATY` sources: `us_tax_treaty` (U.S. Bilateral Income and Estate Tax Treaties), `us_tax_treaty_technical_explanation` (Treasury Technical Explanations (article-by-article commentary on a tax treaty)), `senate_treaty` (Senate Treaty Records (transmittal, parties and proceedings)), `senate_treaty_resolution` (Senate Resolutions of Advice and Consent, including the reservations, understandings and declarations that narrow a treaty's effect in US law), `senate_treaty_document` (Treaty Documents (CDOC TDOC series): the President's message transmitting a treaty to the Senate, with the instrument's text).
         *
         * `STATE_AGENCY_GUIDANCE` sources: `state_insurance_bulletin` (State Department of Insurance Bulletins), `state_financial_bulletin` (State Financial-Institutions Regulator Bulletins (banking, credit unions, trust companies, escrow agents, consumer lenders, money transmitters; AZ and OR only, where that regulator shares an index with the insurance regulator)).
         *
         * `AGENCY_ADJUDICATION` sources: `mspb_precedential` (MSPB Precedential Decisions), `mspb_nonprecedential` (MSPB Nonprecedential Orders), `olc_opinion` (DOJ Office of Legal Counsel Opinions (official bound volumes, 1933-2020)), `cfpb_enforcement_action` (CFPB Enforcement Actions), `sec_commission_opinion` (SEC Commission Opinions and Adjudicatory Orders), `bia_precedent` (BIA Precedent Decisions (I&N Dec.)), `ag_precedent` (Attorney General Immigration Decisions (I&N Dec.)), `immigration_admin_precedent` (INS and USCIS Administrative Precedent Decisions (I&N Dec.)), `nlrb_board_decision` (NLRB Board Decisions (bounded window; see coverage.mdx for the exact years covered)), `ftc_administrative_decision` (FTC Part 3 Administrative Decisions). Every result carries its own `source`, so you can pass a hit's value straight back. An unrecognized value is rejected with 422.
         */
        source?: "administrative_guidance" | "ag_precedent" | "agency_guidance" | "bia_precedent" | "bis_advisory_opinion" | "cfpb_circular" | "cfpb_enforcement_action" | "cfpb_supervisory_guidance" | "cftc_staff_letter" | "cms_iom" | "copyright_circular" | "copyright_compendium" | "cpsc_advisory_opinion" | "cpsc_secg" | "ddtc_commodity_jurisdiction" | "ddtc_guidance" | "dfars" | "dfars_pgi" | "doe_appliance_guidance" | "doj_business_review" | "doj_justice_manual" | "doj_leniency" | "eeoc_guidance" | "far" | "fcc_declaratory_ruling" | "fdic_fil" | "ferc_policy_statement" | "fincen_amla_material" | "fincen_boi_compliance_guide" | "fincen_boi_faq" | "fincen_boi_rule_qa" | "fincen_guidance" | "fincen_ruling" | "frap" | "frb_sr_letter" | "frbp" | "frcp" | "frcrp" | "fre" | "ftc_administrative_decision" | "ftc_advisory_opinion" | "ftc_advocacy_filing" | "ftc_hsr_interpretation" | "ftc_policy_statement" | "hhs_ocr_hipaa_faq" | "hhs_ocr_hipaa_guidance" | "hhs_ocr_resolution_agreement" | "immigration_admin_precedent" | "irs_announcement" | "irs_irm" | "irs_notice" | "irs_rev_proc" | "irs_rev_rul" | "irs_written_determination" | "merger_guidelines" | "mpep" | "mspb_nonprecedential" | "mspb_precedential" | "nlrb_advice_memo" | "nlrb_board_decision" | "nlrb_gc_memo" | "occ_bulletin" | "occ_interpretive_letter" | "ofac_faq" | "olc_opinion" | "sct" | "sec_commission_opinion" | "senate_treaty" | "senate_treaty_document" | "senate_treaty_resolution" | "ssa_ruling" | "state_financial_bulletin" | "state_insurance_bulletin" | "tmep" | "us_tax_treaty" | "us_tax_treaty_technical_explanation" | "uscis_policy_manual" | "whd_foh" | "whd_opinion_letter" | Array<"administrative_guidance" | "ag_precedent" | "agency_guidance" | "bia_precedent" | "bis_advisory_opinion" | "cfpb_circular" | "cfpb_enforcement_action" | "cfpb_supervisory_guidance" | "cftc_staff_letter" | "cms_iom" | "copyright_circular" | "copyright_compendium" | "cpsc_advisory_opinion" | "cpsc_secg" | "ddtc_commodity_jurisdiction" | "ddtc_guidance" | "dfars" | "dfars_pgi" | "doe_appliance_guidance" | "doj_business_review" | "doj_justice_manual" | "doj_leniency" | "eeoc_guidance" | "far" | "fcc_declaratory_ruling" | "fdic_fil" | "ferc_policy_statement" | "fincen_amla_material" | "fincen_boi_compliance_guide" | "fincen_boi_faq" | "fincen_boi_rule_qa" | "fincen_guidance" | "fincen_ruling" | "frap" | "frb_sr_letter" | "frbp" | "frcp" | "frcrp" | "fre" | "ftc_administrative_decision" | "ftc_advisory_opinion" | "ftc_advocacy_filing" | "ftc_hsr_interpretation" | "ftc_policy_statement" | "hhs_ocr_hipaa_faq" | "hhs_ocr_hipaa_guidance" | "hhs_ocr_resolution_agreement" | "immigration_admin_precedent" | "irs_announcement" | "irs_irm" | "irs_notice" | "irs_rev_proc" | "irs_rev_rul" | "irs_written_determination" | "merger_guidelines" | "mpep" | "mspb_nonprecedential" | "mspb_precedential" | "nlrb_advice_memo" | "nlrb_board_decision" | "nlrb_gc_memo" | "occ_bulletin" | "occ_interpretive_letter" | "ofac_faq" | "olc_opinion" | "sct" | "sec_commission_opinion" | "senate_treaty" | "senate_treaty_document" | "senate_treaty_resolution" | "ssa_ruling" | "state_financial_bulletin" | "state_insurance_bulletin" | "tmep" | "us_tax_treaty" | "us_tax_treaty_technical_explanation" | "uscis_policy_manual" | "whd_foh" | "whd_opinion_letter"> | null;
        /** Return only these result fields, e.g. `["title", "excerpt"]`. A result carries 40+ fields and most are null on any given row, so a full page of 50 ships a lot of nulls. `actId` and `citation` are always included, because a row without them cannot be used or attributed. Unknown names are rejected with 422 so a typo does not silently drop a field you needed. Omit for the full object. */
        fields?: Array<"abstract" | "actId" | "actStatus" | "action" | "adoptedAfterCurrentThrough" | "adoptingCitations" | "agencies" | "agencySlugs" | "alternateCitations" | "amendmentHistory" | "amendmentNote" | "amendmentYears" | "amendmentsCount" | "articleName" | "articleNumber" | "audience" | "body" | "breadcrumb" | "caseName" | "chapter" | "chapterName" | "citation" | "citationShort" | "committeeNote" | "corpusType" | "court" | "crossReferencesCfr" | "crossReferencesUsc" | "currencyNote" | "currencyYear" | "currentThrough" | "datesText" | "displayLabel" | "displayPath" | "documentNumber" | "documentSubtype" | "documentTypeLabel" | "docxUrl" | "edition" | "effectiveDate" | "effectiveDateRaw" | "excerpt" | "expirationDate" | "expirationDateRaw" | "externalUrl" | "federalRegisterCitations" | "forum" | "frCommentsCloseOn" | "frCorrectionOf" | "frCorrections" | "frDocketIds" | "frEffectiveOn" | "frEndPage" | "frRegulationIdNumbers" | "frRegulationsDotGovUrl" | "frRelatedDocuments" | "frSignificant" | "frStartPage" | "frVolume" | "goodLawStatus" | "govInfoHtmlUrl" | "govInfoPdfUrl" | "granuleId" | "history" | "historyEffectiveDate" | "htmlUrl" | "implementingRegulations" | "issueDate" | "issueDateRaw" | "issuingAgency" | "languageCode" | "lastAmendedDate" | "lastAmendedDateRaw" | "lastAmendedYear" | "lawImplemented" | "licenseNote" | "originalEnactmentDate" | "originalEnactmentDateRaw" | "packageId" | "parent" | "part" | "partName" | "pdfUrl" | "pendingAdoptions" | "popularName" | "president" | "priorEffectiveDates" | "program" | "publicLawCites" | "publicLaws" | "publicationDate" | "publicationDateRaw" | "publisherKey" | "referencedShortTitles" | "relatedCitations" | "relatedDocuments" | "releaseDate" | "releaseDateRaw" | "relevanceScore" | "renumberedTo" | "renumberedToLabel" | "requesters" | "rescindedOn" | "rescindedOnRaw" | "reviewDate" | "reviewDateRaw" | "ruleSet" | "ruleSetCode" | "sectionNumber" | "sectionTitle" | "settlementAmount" | "signingDate" | "signingDateRaw" | "source" | "sourceCharEnd" | "sourceCharStart" | "sourceCredit" | "sourceNote" | "sourcePageEnd" | "sourcePageStart" | "sourceUrl" | "state" | "stateHtmlUrl" | "statutoryAuthority" | "subchapter" | "subchapterName" | "subject" | "subjectNumber" | "subpart" | "subpartName" | "subtitle" | "subtitleName" | "supersededBy" | "supersedes" | "supersessionActions" | "textUrl" | "title" | "titleName" | "titleNumber" | "topLevelTitle" | "topics" | "transferredTo" | "transferredToLabel" | "versionId" | "volume" | "wordCount" | "xmlUrl" | "year"> | null;
        /**
         * Number of results to return per page.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * How many results to skip, for paging. Every page of a given query is cut from one ranking, so results never repeat or go missing between pages, and a later page costs no more than the first. The deepest reachable result is `offset` + `limit`; check `hasMore` to know when there is nothing further.
         * @minimum 0
         * @maximum 70
         */
        offset?: number;
        /**
         * Return the full text of every hit inline, on each result's `body`, instead of making you fetch it per section afterwards.
         *
         * **Why it exists.** Search returns a ranking preview, so the alternative is a search call plus one `/section/{actId}/body` call per hit. This collapses a whole page to a single round trip.
         *
         * **Cost**: the 4-credit search PLUS the ordinary 6-credit body price for each row that actually returns text. Ten rows with text is 4 + 60 = 64 credits. A row whose text cannot be resolved comes back with `body: null` and is NOT charged, so read `creditsConsumed` rather than computing it from `limit` -- it is the same price as fetching them yourself, so this buys latency, not a discount.
         *
         * ⚠️ It multiplies with `limit`. `limit: 50` with this set is 304 credits in a single call. Page deliberately.
         *
         * Prefer this over raising `excerptChars`: the excerpt is windowed around the match and can begin mid-section, dropping a leading subsection marker, so it is not safe to quote. `body` is the publisher's text.
         */
        includeBody?: boolean;
        /**
         * Characters of matching text to include in each result's `excerpt`. The excerpt is a ranking preview; use `/us/statutes/section/{actId}/body` for the full text. Default 500.
         * @minimum 100
         * @maximum 4000
         */
        excerptChars?: number;
        /** Controls exact vs. semantic matching, so there is no need for a separate keyword-only search mode. `any` (default) is hybrid semantic + keyword ranking and suits natural-language questions. Use `all` for strict keyword matching (every query word must appear in the text) or `phrase` for an exact-phrase match (the query's words, contiguous and in order), e.g. a defined term or a statutory phrase, when you want lexical precision. Both match WHOLE words, case-insensitively, ignoring punctuation: `act` does not match `fact`, `10b-5` matches `10b 5`, and `§ 1983` matches `section 1983`. To pull up one specific section, pass its citation as the query (e.g. `42 U.S.C. § 1983`, `Cal. Civ. Code § 1950.5`) and it resolves to that section at rank 1. */
        matchType?: "any" | "all" | "phrase";
      };
      output: {
        /** Matching sections, most relevant first. Ordering is by relevance, not statutory order; use `/us/statutes/section/{actId}/related` for what sits either side of a section in its code. */
        results?: Array<Record<string, unknown>>;
        /** How many results came back in THIS response, i.e. the length of `results`. It is not a total match count: the API ranks a bounded set of candidates rather than scoring the whole corpus, so no such total exists. Use `hasMore` to decide whether to ask for another page. */
        count?: number;
        /** DEPRECATED alias for `count`, kept for backward compatibility. The name reads as a corpus-wide match total, which it never was. Use `count` instead. */
        total?: number;
        /** The offset applied to this page. */
        offset?: number;
        /** Whether more results exist beyond this page. */
        hasMore?: boolean;
        /** Only present when `changedSince` is set: how many sections changed in that window, before ranking. Compare it against `count`. `changedSince` is a filter on a RANKED search, so a window holding more sections than one query can return is normal and the page you get is the most relevant slice of it, not all of it. When this number is larger than you can page to, the filter is a trigger rather than an inventory: subscribe to the board and poll `GET /watches/{id}/changes`, which is complete and costs no credits. */
        changedSectionCount?: number | null;
        /** True when the relevance model (a cross-encoder) was unavailable and the results are in hybrid-retrieval order instead. The sections are still real matches for the query, but the ordering is coarser and `relevanceScore` is a retrieval score rather than a 0-1 relevance, so do not threshold on it. Such a ranking is never cached: retrying shortly returns the fully ranked result once the model recovers. */
        rankingDegraded?: boolean;
        /** True when nothing in the corpus looks on point for this query. It says nothing about whether the top result is the right section; check its citation and jurisdiction. False when the top result clears the relevance bar, or when the query is a citation or a section number that matched exactly. Null when `rankingDegraded` is true, because the bar is on the relevance model's scale. The same on every page of a query. */
        noGoodMatch?: boolean | null;
        /** How strongly the evidence says result #1 answers the query. exact: a citation or section-number match. strong: the top result was correct about 94% of the time in our measurements (about 91% on questions whose answer is a statute or regulation). moderate: about 67%. weak: about 35%. none: nothing on point (same as noGoodMatch). Measured on our labelled evaluation set; tiers may be re-cut as the index changes, so treat unknown values as moderate. Null when `rankingDegraded` is true. The same on every page of a query. */
        matchQuality?: "exact" | "strong" | "moderate" | "weak" | "none" | null;
        /** Your query is a citation to a real section that your filters exclude. To read it, retry without the filters named in `excludedBy`, or call `GET /us/statutes/resolve` without them. Null when the query is not a citation, when the citation is inside your filters (it then ranks first), or when it names no section we hold. `results` are unchanged: a filter is a promise, so the section is reported here and not forced into the results. The same on every page of a query. */
        citationOutsideFilters?: Record<string, unknown> | null;
        /** Present only when the whole query is a citation that did not resolve to a section, so the results are an ordinary search and not the section it names. `missReason` says why (`not_held`, `former_law`, `ambiguous_jurisdiction`, `out_of_scope_corpus`), `missReasonHint` what to try, and `candidates` the held sections an ambiguous citation could mean. Absent for a question, for a citation that resolved, and when `citationOutsideFilters` already explains it. `malformed` is never reported here: a free-text question is not malformed. The same on every page of a query. No extra charge. */
        citationMissReason?: Record<string, unknown> | null;
        /** The search query used. */
        query?: string;
        /** Server-side time for this request in milliseconds, excluding network transit. Useful for spotting a slow query; not billed on. */
        processingTimeMs?: number;
        /** Credits actually charged for this call. Read it rather than assuming the list price: failed and refunded work bills 0, and batch endpoints charge per item returned, so a partial result costs less than a full one. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
    /** Send a test delivery. */
    "vaquill.test_watch": {
      input: {
        /** watch_id parameter. */
        watch_id: string;
      };
      output: {
        /** Business data returned by Vaquill. */
        data?: Record<string, unknown>;
        /** Timing, credit usage and pagination metadata returned by Vaquill. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update a board watch. */
    "vaquill.update_watch": {
      input: {
        /** Pause (false) or resume (true) the watch. */
        isActive?: boolean | null;
        /** New webhook URL. Only valid on a webhook/both channel watch. Re-validated against the SSRF blocklist. Cannot be cleared. */
        webhookUrl?: string | null;
        /** New signing secret, or empty string to stop signing deliveries. Only valid on a webhook/both channel watch. */
        webhookSecret?: string | null;
        /**
         * Optional narrowing so this alert covers one citation instead of an entire source. Four mutually exclusive forms.
         *
         * **Hierarchy prefix** -- keys `title`, `chapter`, `part`, `section`, e.g. `{"title": "21", "part": "314"}` for 21 CFR part 314. Every level you set must match, so each one narrows further. `title` is required whenever any narrower level is set, and `section` also needs `chapter` or `part`: a bare part number matches across unrelated titles. Only sources whose documents carry a title/chapter/part hierarchy accept this form; the rest return 400.
         *
         * **Exact section** -- `{"actId": "CFR_T21_P314_S314_50"}`, using the `actId` returned by search results and change events. Case-sensitive, and validated at create time against the corpus: an act_id we do not hold, or one belonging to a different source, is a 400 rather than a watch that could never fire. This form works on EVERY source, including flat ones with no hierarchy, so it is the only way to follow a single Federal Register document.
         *
         * **Named source** -- `{"source": "fdic_fil"}`, for the corpora that fold several independent bodies of law behind one `corpusType`. The `agency_guidance` board alone carries 47 named sources across 24 agencies, so an unscoped watch on it delivers FDIC letters, IRS notices, OFAC FAQs and DOE appliance standards together. Accepted on `agency_adjudication`, `agency_guidance`, `agency_manuals`, `cfr`, `federal_rules`; anything else returns 400. The pickable values for a given board are on that board's `sources` array in `GET /boards` -- deliberately narrower than the `source` filter published on `POST /us/statutes/search`, because `agency_guidance` and `agency_manuals` are two boards reading one `corpusType` and each emits only its own half.
         *
         * **Publishing agency** -- `{"agency": "irs"}`, covering every source that agency issues on the board. `source` is the unit we ingest and it is finer than the unit most callers think in: the IRS alone publishes 5 named series, so following it by source means one watch per series and a gap if you miss one. An agency scope is expanded WHEN AN EVENT IS MATCHED rather than when the watch is created, so a source registered after your watch is covered by it automatically, with no action from you. Accepted on `agency_adjudication`, `agency_guidance`, `agency_manuals`; the pickable values are on that board's `agencies` array in `GET /boards`.
         *
         * Omit entirely to watch the whole source, which is the default and the pre-existing behavior.
         */
        scope?: Record<string, string> | null;
        /** New email address. Only valid on an email/both channel watch. Cannot be cleared. */
        emailAddress?: string | null;
        /** Replace the outbound credential config. Sent as a whole object, not field by field: a scheme without a credential is not a partial edit, it is a broken config. Send `{"scheme": "none"}` to remove auth entirely. Keeping the same scheme and omitting `secret` retains the stored credential, so you can rename a header without re-entering the token. */
        webhookAuth?: {
          /** `bearer` sends `Authorization: Bearer <secret>`. `basic` sends `Authorization: Basic <secret>` with the secret already base64-encoded by you. `header` sends `<headerName>: <secret>`, for gateways that read something like `X-Api-Key`. `none` removes any credential currently stored. */
          scheme?: "none" | "bearer" | "basic" | "header";
          /** The credential value. Stored encrypted and never returned. Required when setting a scheme for the first time or changing scheme; on PATCH you may omit it to keep the stored one while changing only `headerName`. */
          secret?: string | null;
          /** Header to send the credential on. Required for `header`, and rejected for every other scheme. Cannot be `Authorization` (use `bearer`/`basic`), a transport header, or one of ours. */
          headerName?: string | null;
        } | null;
        /** watch_id parameter. */
        watch_id: string;
      };
      output: {
        /** Business data returned by Vaquill. */
        data?: Record<string, unknown>;
        /** Timing, credit usage and pagination metadata returned by Vaquill. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
