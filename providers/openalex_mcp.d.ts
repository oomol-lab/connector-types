import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Build a one-call profile of any set of works defined by a query and/or filters: an institution's output, a funder's portfolio, an author's career, a topic, a country, a journal. Returns total works, open-access share by status, share of works in the top 10% and top 1% most-cited (field-normalized), counts by year and by type, and the top fields, topics, institutions, countries, sources, funders and authors, plus international and industry collaboration shares. Use it for research-office, library, and funder reporting questions ("summarize our 2024 research", "how much of NIH-funded work at UW is open access", "who does MIT collaborate with on AI"). Pick sections to keep the response small. Keyword queries only (no semantic mode). Each section costs one cheap API call. */
    "openalex_mcp.analyze_works": {
      input: {
        /**
         * Optional keyword search text (Boolean supported).
         * @maxLength 2000
         */
        query?: string;
        /** Where keyword/exact queries match. title_abstract_keywords (default, what openalex.org searches) matches title and abstract text, and also works tagged with a keyword that a phrase in the query names (catches other wordings, other languages and works with no abstract; every other word must still be in the text); title_and_abstract matches the text only; fulltext also matches the body text of ~100M works, plus keywords (broader, more noise; large reviews that merely mention a term will rank high); title matches titles only. Ignored for semantic mode. */
        search_in?: "title_abstract_keywords" | "title_and_abstract" | "fulltext" | "title";
        /** Which sections to compute. Default: all. */
        sections?: Array<"by_year" | "by_type" | "open_access" | "citation_impact" | "top_fields" | "top_topics" | "top_institutions" | "top_countries" | "top_sources" | "top_funders" | "top_authors" | "collaboration">;
        /**
         * How many entries per top_* list. Default 10.
         * @minimum 3
         * @maximum 50
         */
        top_n?: number;
        /**
         * Earliest publication year, inclusive (e.g. 2020).
         * @minimum 1000
         * @maximum 2100
         */
        from_year?: number;
        /**
         * Latest publication year, inclusive.
         * @minimum 1000
         * @maximum 2100
         */
        to_year?: number;
        /** Only these work types (OR). Common: article, review, preprint, book-chapter, dataset. */
        types?: Array<"article" | "review" | "preprint" | "book" | "book-chapter" | "dissertation" | "dataset" | "report" | "editorial" | "letter" | "erratum" | "retraction" | "paratext" | "libguides" | "reference-entry" | "peer-review" | "standard" | "supplementary-materials" | "grant" | "other">;
        /** Only works with a free-to-read copy. */
        open_access_only?: boolean;
        /** Only these open-access statuses (OR). */
        oa_status?: Array<"gold" | "green" | "hybrid" | "bronze" | "diamond" | "closed">;
        /**
         * Minimum cited_by_count. Not supported with semantic search.
         * @minimum 0
         */
        min_citations?: number;
        /** OpenAlex author IDs (e.g. A5067184382). Resolve names with search_entities first. */
        author_ids?: Array<string>;
        /** OpenAlex institution IDs (e.g. I27837315). Matches any author's affiliation. */
        institution_ids?: Array<string>;
        /** OpenAlex source (journal/repository) IDs (e.g. S137773608). */
        source_ids?: Array<string>;
        /** OpenAlex topic IDs (e.g. T10102), any of them (OR): works whose PRIMARY topic is one of these. Same meaning as OQL's `in the topic`, group_by topic and analyze_works top_topics. For works that carry the topic among any of their (up to 3) topics, use any_topic_ids. */
        topic_ids?: Array<string>;
        /** OpenAlex topic IDs (OR): works that carry one of these among ANY of their topics, primary or not (typically ~3x as many works as topic_ids). OQL: `where topics is (T10102)`. */
        any_topic_ids?: Array<string>;
        /** OpenAlex keyword ids (e.g. microplastics, human-health), any of them (OR). Find them with find_keywords. Keywords widen a text search; they do not replace it. */
        keyword_ids?: Array<string>;
        /** OpenAlex funder IDs (e.g. F4320332161). */
        funder_ids?: Array<string>;
        /** OpenAlex publisher IDs (e.g. P4310319908). */
        publisher_ids?: Array<string>;
        /** ISO-3166 alpha-2 country codes of author institutions (OR), e.g. ["US","GB"]. Not supported with semantic search. */
        countries?: Array<string>;
        /**
         * ISO-639-1 language code, e.g. "en".
         * @minLength 2
         * @maxLength 2
         */
        language?: string;
        /** Only works published in 'core' sources: reputable, well-indexed journals and repositories (see https://help.openalex.org/data/sources/). Useful to exclude low-quality venues. */
        core_sources_only?: boolean;
        /** Include retracted works. Default false: retracted works are hidden and the response says so (retracted_works). Also honoured with oql, where the default leaves them out unless the query says otherwise (the echo then reads `it's not retracted`, or `non-retracted works` in the new form). */
        include_retracted?: boolean;
        /**
         * Escape hatch: extra OpenAlex filter expression appended verbatim, using the syntax documented at https://help.openalex.org/api/filtering/ (e.g. "has_abstract:true,primary_topic.field.id:17"). Combined with the structured filters above using AND.
         * @maxLength 2000
         */
        raw_filter?: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Run an OQL calculation and get the calculated groups: split a set of works by one to three fields, named values, searches, conditions or bins, and calculate count, mean/median/sum/min/max of a number, percent of a yes/no field, or each group's share. Write it as a pipeline: get works where <conditions>; then, group those works by <field>; finally, summarize using <measures>. For one row per author, institution, source, publisher, funder, country or topic, start with them and say which works count, e.g. get authors at [University of British Columbia](I141945490) since 2022 who published works where title-abstract has kelp; then, summarize each author using count and mean FWCI (`at` reads the author's own record; `in [Asia](Q48)` for institutions; then, group each author's works by year for a further split). Or compare named things in one step, e.g. get works where topic is [CRISPR and Genetic Engineering](T10878); then, compare institution [Massachusetts Institute of Technology](I63966007) versus [Stanford University](I97018004) versus [Harvard University](I136199984) using count, mean FWCI, and percent open access. The full guide is the OQL reference in the server instructions (read_docs topic oql). Check a new query with check_oql first (free: limits with fixes, time estimate, price). Returns one row per group, keyed by the OQL words of each calculation (count, mean FWCI, ...), nested splits under groups, the summary (summary.all for the whole starting set; with two or more splits, summary.splits with each split's groups on their own, computed from the works: read these, never sum or average group rows), groups_count and next_page, the price, the canonical OQL and a reproduce_url. A query with no split or calculation gets then, summarize using count; a query that starts from authors, institutions, sources, topics, funders or publishers with no split lists them with their own fields. Retracted works are left out unless include_retracted=true or the query says otherwise. */
    "openalex_mcp.calculate_works": {
      input: {
        /**
         * A pipeline OQL query, e.g. get works where country is [Kenya](KE) and published since 2015; then, group those works by year; finally, summarize using percent open access.
         * @maxLength 20000
         */
        oql: string;
        /**
         * Groups per page (the outer split), 1-200. Default 50. Groups come back by count.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Page of groups. Default 1.
         * @minimum 1
         * @maximum 200
         */
        page?: number;
        /**
         * Order this page's rows by a calculated column, e.g. "mean FWCI" (descending). OQL itself has no sort; the API picks each page's groups by count.
         * @maxLength 100
         */
        sort?: string;
        /** Include retracted works. Default false. */
        include_retracted?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Free check of any OQL query before running it, the calculation pipelines above all: whether it is valid, every problem with its fix (a parse error, a fourth split, too many groups, too slow), the time estimate against the ~10-second budget, the price in credits and USD, and the canonical text with each entity's name in brackets so you can confirm the IDs mean what you think. The query is checked as calculate_works would run it (retracted works left out unless include_retracted=true). When it is not valid, apply the fix and check again. */
    "openalex_mcp.check_oql": {
      input: {
        /**
         * The OQL query to check.
         * @maxLength 6000
         */
        oql: string;
        /** Check it with retracted works included. Default false, as the tools run it. */
        include_retracted?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Claim an OpenAlex author profile for the connected account so it can be curated (one per account). Confirm the profile with the user first (show its name, institutions, works count and a few titles from search_works). Approved instantly if any verified email on the account is from a university, research institute or government agency (get_my_account reports claim_eligibility). Otherwise, first suggest the user add their university email in Settings at openalex.org (they keep their current email); that makes the claim instant. If the profile has their ORCID iD, they can sign in with ORCID on the profile page instead. If neither works, ask for a link (or DOI) to one of their papers ON THIS PROFILE that lists their OpenAlex account email. A web page alone never passes, not even their page on a university's website, and neither does a page with only their name. The claim is checked automatically within minutes; if it fails, the result says what is missing and the user can send a new link by calling this again. */
    "openalex_mcp.claim_author_profile": {
      input: {
        /**
         * OpenAlex author ID, e.g. A5023888391.
         * @minLength 2
         * @maxLength 300
         */
        author_id: string;
        /**
         * A link (URL or DOI) to one of the user's papers on THIS profile that lists their OpenAlex account email. A web page alone (even a university page) does not pass. Required when claim_eligibility is "review"; not needed when "instant".
         * @maxLength 2000
         */
        evidence?: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Email the user new works that match a search, daily, weekly or monthly (saved as a saved search with an alert, visible on openalex.org under My alerts). Build the search with search_works first and pass its OQL (or an api.openalex.org works URL). The first email covers works added from now on, and an email goes out only when there are new works. Returns the alert and the newest works the search matches today: show the user a few so they know what will arrive. Refusals come back with a code: works_collection_cannot_alert, collection_type_mismatch (the message names the right field), semantic_search_cannot_alert, search_is_empty, alert_requires_works_search, collection_not_found, saved_search_exists (the user already saved this search, maybe without an alert: turn it on with update_alert on the existing id). */
    "openalex_mcp.create_alert": {
      input: {
        /**
         * What the user asked for, in their words; it is the email's subject line.
         * @minLength 1
         * @maxLength 400
         */
        name: string;
        /**
         * The search as OQL, e.g. the oql search_works returned. Give oql or url.
         * @minLength 1
         * @maxLength 8000
         */
        oql?: string;
        /**
         * Or the search as an api.openalex.org/works?filter=… URL.
         * @minLength 1
         * @maxLength 8000
         */
        url?: string;
        /** How often to email. Default weekly. */
        frequency?: "daily" | "weekly" | "monthly";
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Delete one of the user's alerts together with its saved search. To stop the emails but keep the saved search, use update_alert with frequency "off" instead. Confirm with the user first. */
    "openalex_mcp.delete_alert": {
      input: {
        /**
         * The alert's id, from list_my_alerts.
         * @minLength 1
         * @maxLength 64
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Works that are probably this author's but are not on their profile, from up to three sources: (1) name: the website's name ladder over raw bylines (as typed, reversed, initials, then looser word order) with a surname-plus-given-name gate, ranked by how much of the name the byline matches; (2) orcid: works carrying the ORCID in OpenAlex plus works listed on the public ORCID record (readable without login unless the author made them private); (3) siblings: other author profiles with the same name, with overlap signals, which may be duplicates of this person. Every work reports this_authorship (the byline that would be attached, with affiliations and coauthors) so the user can be asked about anything unclear. Pass alternate names (from get_my_account, the profile, or a CV) one call at a time; for common names add institution, topic or year filters. */
    "openalex_mcp.find_candidate_works": {
      input: {
        /**
         * The profile being curated (A…). Works already on it are excluded.
         * @minLength 2
         * @maxLength 300
         */
        author_id: string;
        /**
         * Name to search bylines for. Default: the profile's display name. Try each alternate name the person publishes under.
         * @maxLength 200
         */
        name?: string;
        /**
         * The author's ORCID, if they gave one.
         * @maxLength 60
         */
        orcid?: string;
        /** Which sources to run. Default: all that apply. */
        sources?: Array<"name" | "orcid" | "siblings">;
        /**
         * Max works per source. Default 25.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /** Narrow the name search to works with an author at these institutions (I…). */
        institution_ids?: Array<string>;
        /** Narrow the name search to works that carry one of these topics (T…) among any of their topics, not only the primary one (a wide net for finding a person's works). */
        any_topic_ids?: Array<string>;
        /**
         * @minimum 1000
         * @maximum 2100
         */
        from_year?: number;
        /**
         * @minimum 1000
         * @maximum 2100
         */
        to_year?: number;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Find the researchers who work most on a topic, optionally at an institution or in a country, ranked with evidence: how many matching works, how many in the last few years, h-index, current institution, topic share, and up to five matching titles each. Use it for expert finding, reviewer and panel search (exclude_coauthors_of + exclude_institution_ids for conflicts), collaborator search (institution_ids), and "who at my university works on X" (institution_ids with institution_scope="current"). Describe the topic as a Boolean keyword query (AND, OR, NOT, "quoted phrases", wildcards*): the census then covers every matching work in OpenAlex. Turn a descriptive paragraph into synonyms grouped with OR and concepts joined with AND rather than using semantic mode, which sees only the 50 most relevant works. Topic IDs (topic_ids) are coarse; text is usually better. Pass an OQL selection in `oql` for full control. One call replaces the search_entities / group_works / get_entity chain and costs three to five API requests. */
    "openalex_mcp.find_experts": {
      input: {
        /**
         * The topic as search text. Keyword mode supports Boolean syntax; prefer a rich Boolean query over a plain phrase (e.g. (CRISPR OR Cas9 OR "base editor*") AND ("off-target" OR specificity)).
         * @maxLength 2000
         */
        query?: string;
        /** keyword (default; Boolean; whole corpus) | exact (no stemming) | semantic (by meaning; only the 50 most relevant works are seen, so counts are partial). */
        mode?: "keyword" | "semantic" | "exact";
        /** Where keyword/exact queries match. title_abstract_keywords (default, what openalex.org searches) matches title and abstract text, and also works tagged with a keyword that a phrase in the query names (catches other wordings, other languages and works with no abstract; every other word must still be in the text); title_and_abstract matches the text only; fulltext also matches the body text of ~100M works, plus keywords (broader, more noise; large reviews that merely mention a term will rank high); title matches titles only. Ignored for semantic mode. */
        search_in?: "title_abstract_keywords" | "title_and_abstract" | "fulltext" | "title";
        /**
         * A works selection in OQL (any where-clause, no group by / sort by / sample). Mutually exclusive with query, mode, search_in and the works filters; institution_ids and topic_ids go inside the OQL then. institution_scope, country and the exclusions still apply.
         * @maxLength 20000
         */
        oql?: string;
        /** With institution_ids: current (default) keeps only people whose current institution is inside the given institutions (their lineage); any_affiliation keeps anyone who has ever been affiliated there, including people who have since moved. */
        institution_scope?: "current" | "any_affiliation";
        /**
         * ISO-3166 alpha-2 code: keep only people whose current institution is in this country.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * Window for recent_matching_works and the recent sort, in calendar years including this one. Default 3.
         * @minimum 1
         * @maximum 10
         */
        recent_years?: number;
        /** Author IDs to drop (the applicant, the person asking, already-chosen panelists). */
        exclude_author_ids?: Array<string>;
        /** Drop people whose current institution is inside these (conflict of interest, "not from our own university"). */
        exclude_institution_ids?: Array<string>;
        /**
         * Author IDs: drop anyone who coauthored with any of them within recent_years (reviewer conflicts). One extra API call per ID.
         * @maxItems 10
         */
        exclude_coauthors_of?: Array<string>;
        /**
         * Fewer matching works than this and a person is a one-off coauthor, not an expert. Default 2; lower it for very narrow topics.
         * @minimum 1
         */
        min_matching_works?: number;
        /** matching_works (default): most matching works, citations as tiebreak. recent: most matching works within recent_years (rising researchers, active reviewers). citations: citations to their matching works in the evidence sample. h_index: overall standing. */
        sort?: "matching_works" | "recent" | "citations" | "h_index";
        /**
         * How many experts to return. Default 10.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Earliest publication year, inclusive (e.g. 2020).
         * @minimum 1000
         * @maximum 2100
         */
        from_year?: number;
        /**
         * Latest publication year, inclusive.
         * @minimum 1000
         * @maximum 2100
         */
        to_year?: number;
        /** Only these work types (OR). Common: article, review, preprint, book-chapter, dataset. */
        types?: Array<"article" | "review" | "preprint" | "book" | "book-chapter" | "dissertation" | "dataset" | "report" | "editorial" | "letter" | "erratum" | "retraction" | "paratext" | "libguides" | "reference-entry" | "peer-review" | "standard" | "supplementary-materials" | "grant" | "other">;
        /** OpenAlex topic IDs (e.g. T10102), any of them (OR): works whose PRIMARY topic is one of these. Same meaning as OQL's `in the topic`, group_by topic and analyze_works top_topics. For works that carry the topic among any of their (up to 3) topics, use any_topic_ids. */
        topic_ids?: Array<string>;
        /** OpenAlex institution IDs (e.g. I27837315). Matches any author's affiliation. */
        institution_ids?: Array<string>;
        /** OpenAlex funder IDs (e.g. F4320332161). */
        funder_ids?: Array<string>;
        /**
         * ISO-639-1 language code, e.g. "en".
         * @minLength 2
         * @maxLength 2
         */
        language?: string;
        /** Only works published in 'core' sources: reputable, well-indexed journals and repositories (see https://help.openalex.org/data/sources/). Useful to exclude low-quality venues. */
        core_sources_only?: boolean;
        /** Include retracted works. Default false: retracted works are hidden and the response says so (retracted_works). Also honoured with oql, where the default leaves them out unless the query says otherwise (the echo then reads `it's not retracted`, or `non-retracted works` in the new form). */
        include_retracted?: boolean;
        /**
         * Escape hatch: extra OpenAlex filter expression appended verbatim, using the syntax documented at https://help.openalex.org/api/filtering/ (e.g. "has_abstract:true,primary_topic.field.id:17"). Combined with the structured filters above using AND.
         * @maxLength 2000
         */
        raw_filter?: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Find the OpenAlex keywords for a topic, the first step of a thorough (high-recall) search. OpenAlex tags works with keywords (e.g. microplastics, human-health, antimicrobial-resistance) that also catch works using other wordings, other languages, or no abstract at all. search_works and keyword_search already match the keywords that the search's own phrases name; use this to find keywords that mean a facet under other names. Give the topic as a sentence (description) and, for better coverage, each facet's main phrase and synonyms (phrases). Returns candidate keywords with a match score, how many works carry each, and their three most-cited titles, so you can keep the ones that mean each facet and drop the rest. Then pass them to keyword_search. Costs about $0.01 (one /text/keywords call) plus a few cheap lookups. */
    "openalex_mcp.find_keywords": {
      input: {
        /**
         * The topic in a sentence or short paragraph, e.g. "how microplastics affect human health". At least 20 characters to be matched as text.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /**
         * Short names to look up among keyword names: each facet's main phrase and a synonym or two, e.g. ["microplastics", "nanoplastics", "human health"].
         * @maxItems 12
         */
        phrases?: Array<string>;
        /**
         * Keyword-name matches kept per phrase. Default 5.
         * @minimum 1
         * @maximum 10
         */
        per_phrase?: number;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Fetch the full profile of one non-work entity by OpenAlex ID, or by ORCID (authors), ROR (institutions), or ISSN (sources). Includes works and citation counts, h-index, works/citations by year, top topics, affiliation history (authors), and identifiers. */
    "openalex_mcp.get_entity": {
      input: {
        /** Which kind of entity the ID refers to. */
        entity_type: "authors" | "institutions" | "sources" | "topics" | "funders" | "publishers";
        /**
         * OpenAlex ID (A5067184382, I27837315, S137773608, T10102, F…, P…), ORCID, ROR, or ISSN.
         * @minLength 1
         * @maxLength 300
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Who is connected: name, email addresses (and which are verified), which API key this connection spends (personal or organization), the author profile this account has claimed (with a compact summary: names, institutions, topics, works count), the claim's status, and claim_eligibility: "instant" means a claim from this account is approved immediately (a verified academic, institutional or government email), "review" means the claim needs ORCID sign-in or a link to one of the user's papers on the profile that lists the account email (checked automatically within minutes; a web page alone never passes). Call this first for anything about the user's own profile. */
    "openalex_mcp.get_my_account": {
      input: Record<string, unknown>;
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Fetch the full record for one scholarly work by OpenAlex ID (W2741809807), DOI (10.7717/peerj.4375 or a doi.org URL), PMID, or PMCID. Returns the authors with affiliations and ORCIDs (all of them up to 100; a bigger collaboration lists the first 100, the last and the corresponding authors, numbered, with authors_total), the full abstract, venue, open-access links, topics, keywords, funding, citations in every year the API counts, and related works. */
    "openalex_mcp.get_work": {
      input: {
        /**
         * OpenAlex work ID, DOI, PMID, or PMCID.
         * @minLength 1
         * @maxLength 300
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Aggregate works matching a query and/or filters, counting them by one dimension: author, institution, institution_type, country, source (journal), publisher, funder, year, type, topic, subfield, field, domain, keyword, oa_status, is_oa, top_10_percent, top_1_percent, language, or sdg. Answers "who are the top authors on X", "which institutions publish most on Y", "how has research on Z grown per year", "which journals carry the most papers on W", "who does institution A collaborate with" (institution_ids + group_by institution). Returns each group's ID, display name and work count, sorted by count. Keyword/exact queries aggregate over all matching works; semantic queries aggregate over the 50 most relevant works only. For two or three dimensions in one call (by year and country, by field and open access status) or numbers beyond the count (mean FWCI, percent open access, share), use calculate_works instead of one group_works call per value. Accepts an OQL query in `oql` for complex selections (the group by is added from group_by if the query has none). Note: group_by author over institution-filtered works also counts co-authors from other institutions; for "researchers AT institution X on topic Y" use search_entities with institution_ids and topic_ids instead. */
    "openalex_mcp.group_works": {
      input: {
        /** Dimension to count by. */
        group_by: "author" | "institution" | "institution_type" | "country" | "source" | "publisher" | "funder" | "year" | "type" | "topic" | "subfield" | "field" | "domain" | "keyword" | "oa_status" | "is_oa" | "top_10_percent" | "top_1_percent" | "language" | "sdg";
        /**
         * OQL query selecting the works to count (see search_works). Mutually exclusive with query and the structured filters.
         * @maxLength 20000
         */
        oql?: string;
        /**
         * Optional search text (same as search_works).
         * @maxLength 2000
         */
        query?: string;
        /** Search mode. Default keyword. */
        mode?: "keyword" | "semantic" | "exact";
        /** Where keyword/exact queries match. title_abstract_keywords (default, what openalex.org searches) matches title and abstract text, and also works tagged with a keyword that a phrase in the query names (catches other wordings, other languages and works with no abstract; every other word must still be in the text); title_and_abstract matches the text only; fulltext also matches the body text of ~100M works, plus keywords (broader, more noise; large reviews that merely mention a term will rank high); title matches titles only. Ignored for semantic mode. */
        search_in?: "title_abstract_keywords" | "title_and_abstract" | "fulltext" | "title";
        /**
         * Max groups to return, 1-200. Default 25.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Earliest publication year, inclusive (e.g. 2020).
         * @minimum 1000
         * @maximum 2100
         */
        from_year?: number;
        /**
         * Latest publication year, inclusive.
         * @minimum 1000
         * @maximum 2100
         */
        to_year?: number;
        /** Only these work types (OR). Common: article, review, preprint, book-chapter, dataset. */
        types?: Array<"article" | "review" | "preprint" | "book" | "book-chapter" | "dissertation" | "dataset" | "report" | "editorial" | "letter" | "erratum" | "retraction" | "paratext" | "libguides" | "reference-entry" | "peer-review" | "standard" | "supplementary-materials" | "grant" | "other">;
        /** Only works with a free-to-read copy. */
        open_access_only?: boolean;
        /** Only these open-access statuses (OR). */
        oa_status?: Array<"gold" | "green" | "hybrid" | "bronze" | "diamond" | "closed">;
        /**
         * Minimum cited_by_count. Not supported with semantic search.
         * @minimum 0
         */
        min_citations?: number;
        /** OpenAlex author IDs (e.g. A5067184382). Resolve names with search_entities first. */
        author_ids?: Array<string>;
        /** OpenAlex institution IDs (e.g. I27837315). Matches any author's affiliation. */
        institution_ids?: Array<string>;
        /** OpenAlex source (journal/repository) IDs (e.g. S137773608). */
        source_ids?: Array<string>;
        /** OpenAlex topic IDs (e.g. T10102), any of them (OR): works whose PRIMARY topic is one of these. Same meaning as OQL's `in the topic`, group_by topic and analyze_works top_topics. For works that carry the topic among any of their (up to 3) topics, use any_topic_ids. */
        topic_ids?: Array<string>;
        /** OpenAlex topic IDs (OR): works that carry one of these among ANY of their topics, primary or not (typically ~3x as many works as topic_ids). OQL: `where topics is (T10102)`. */
        any_topic_ids?: Array<string>;
        /** OpenAlex keyword ids (e.g. microplastics, human-health), any of them (OR). Find them with find_keywords. Keywords widen a text search; they do not replace it. */
        keyword_ids?: Array<string>;
        /** OpenAlex funder IDs (e.g. F4320332161). */
        funder_ids?: Array<string>;
        /** OpenAlex publisher IDs (e.g. P4310319908). */
        publisher_ids?: Array<string>;
        /** ISO-3166 alpha-2 country codes of author institutions (OR), e.g. ["US","GB"]. Not supported with semantic search. */
        countries?: Array<string>;
        /**
         * ISO-639-1 language code, e.g. "en".
         * @minLength 2
         * @maxLength 2
         */
        language?: string;
        /** Only works published in 'core' sources: reputable, well-indexed journals and repositories (see https://help.openalex.org/data/sources/). Useful to exclude low-quality venues. */
        core_sources_only?: boolean;
        /** Include retracted works. Default false: retracted works are hidden and the response says so (retracted_works). Also honoured with oql, where the default leaves them out unless the query says otherwise (the echo then reads `it's not retracted`, or `non-retracted works` in the new form). */
        include_retracted?: boolean;
        /**
         * Escape hatch: extra OpenAlex filter expression appended verbatim, using the syntax documented at https://help.openalex.org/api/filtering/ (e.g. "has_abstract:true,primary_topic.field.id:17"). Combined with the structured filters above using AND.
         * @maxLength 2000
         */
        raw_filter?: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Build and measure a thorough search: each facet matches on its text (over titles, abstracts and the keywords the text names) OR on the keywords you chose for it, and all facets must match. Returns the combined OQL with a reproduce_url, and counts for every part: the search alone (what search_works finds for the facets' text), what the chosen keywords add, the combined total, and each facet's text, keyword and keyword-only counts, plus random samples of the whole search and of the works found only through keywords, so you can check precision. Filters (open access, years, types, language, any OQL condition) apply to every count. Use after find_keywords; then list the results with search_works(oql=<combined oql>). Every facet should have text; give a facet keyword_ids only when a keyword really means it. */
    "openalex_mcp.keyword_search": {
      input: {
        /**
         * The parts of the topic that must all hold, each with its text and keywords.
         * @minItems 1
         * @maxItems 6
         */
        facets: Array<{
          /**
           * Short name for the facet, e.g. "microplastics".
           * @maxLength 100
           */
          label?: string;
          /**
           * Search text for the facet, matched over title, abstract and the keywords it names: OQL text inside `title-abstract-keywords has (…)`. Synonyms joined with or, "quoted phrases", wildcards only inside quotes, e.g. microplastic or microplastics or "nanoplastic*".
           * @maxLength 2000
           */
          text?: string;
          /**
           * Keyword ids from find_keywords that mean this facet, e.g. ["microplastics"]. Any of them matches.
           * @maxItems 15
           */
          keyword_ids?: Array<string>;
          [key: string]: unknown;
        }>;
        /**
         * Earliest publication year, inclusive.
         * @minimum 1000
         * @maximum 2100
         */
        from_year?: number;
        /**
         * Latest publication year, inclusive.
         * @minimum 1000
         * @maximum 2100
         */
        to_year?: number;
        /** Only these work types (OR), e.g. ["article","review"]. */
        types?: Array<"article" | "review" | "preprint" | "book" | "book-chapter" | "dissertation" | "dataset" | "report" | "editorial" | "letter" | "erratum" | "retraction" | "paratext" | "libguides" | "reference-entry" | "peer-review" | "standard" | "supplementary-materials" | "grant" | "other">;
        /** Only works with a free-to-read copy. */
        open_access_only?: boolean;
        /**
         * ISO-639-1 language code, e.g. "en". Note that keywords are what find works in other languages.
         * @minLength 2
         * @maxLength 2
         */
        language?: string;
        /**
         * Any further OQL condition ANDed onto every count, e.g. country is (BR) or "citation count is at least 10".
         * @maxLength 2000
         */
        extra_oql?: string;
        /** Include retracted works. Default false. */
        include_retracted?: boolean;
        /**
         * Random works to show from the keyword-only additions (up to 8 are also drawn from the whole search). Default 8.
         * @minimum 0
         * @maximum 25
         */
        sample_size?: number;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** List works connected to a given work: direction="citing" (default) returns works that cite it; "references" returns the works it cites; "related" returns OpenAlex's related works (similar topic and citation neighbourhood). Useful for tracing influence, finding follow-up studies, or reading a paper's bibliography. Supports the same year/type/open-access filters as search_works. */
    "openalex_mcp.list_citations": {
      input: {
        /**
         * OpenAlex work ID or DOI of the anchor work.
         * @minLength 1
         * @maxLength 300
         */
        work_id: string;
        /** citing (default), references, or related. */
        direction?: "citing" | "references" | "related";
        /** Default cited_by_count (descending). */
        sort?: "cited_by_count" | "publication_date";
        /**
         * Results per page, 1-50. Default 15.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Page number. Default 1.
         * @minimum 1
         * @maximum 200
         */
        page?: number;
        /** Include a truncated abstract per result. Default false. */
        include_abstracts?: boolean;
        /**
         * Earliest publication year, inclusive (e.g. 2020).
         * @minimum 1000
         * @maximum 2100
         */
        from_year?: number;
        /**
         * Latest publication year, inclusive.
         * @minimum 1000
         * @maximum 2100
         */
        to_year?: number;
        /** Only these work types (OR). Common: article, review, preprint, book-chapter, dataset. */
        types?: Array<"article" | "review" | "preprint" | "book" | "book-chapter" | "dissertation" | "dataset" | "report" | "editorial" | "letter" | "erratum" | "retraction" | "paratext" | "libguides" | "reference-entry" | "peer-review" | "standard" | "supplementary-materials" | "grant" | "other">;
        /** Only works with a free-to-read copy. */
        open_access_only?: boolean;
        /** Only these open-access statuses (OR). */
        oa_status?: Array<"gold" | "green" | "hybrid" | "bronze" | "diamond" | "closed">;
        /**
         * Minimum cited_by_count. Not supported with semantic search.
         * @minimum 0
         */
        min_citations?: number;
        /** OpenAlex author IDs (e.g. A5067184382). Resolve names with search_entities first. */
        author_ids?: Array<string>;
        /** OpenAlex institution IDs (e.g. I27837315). Matches any author's affiliation. */
        institution_ids?: Array<string>;
        /** OpenAlex source (journal/repository) IDs (e.g. S137773608). */
        source_ids?: Array<string>;
        /** OpenAlex topic IDs (e.g. T10102), any of them (OR): works whose PRIMARY topic is one of these. Same meaning as OQL's `in the topic`, group_by topic and analyze_works top_topics. For works that carry the topic among any of their (up to 3) topics, use any_topic_ids. */
        topic_ids?: Array<string>;
        /** OpenAlex topic IDs (OR): works that carry one of these among ANY of their topics, primary or not (typically ~3x as many works as topic_ids). OQL: `where topics is (T10102)`. */
        any_topic_ids?: Array<string>;
        /** OpenAlex keyword ids (e.g. microplastics, human-health), any of them (OR). Find them with find_keywords. Keywords widen a text search; they do not replace it. */
        keyword_ids?: Array<string>;
        /** OpenAlex funder IDs (e.g. F4320332161). */
        funder_ids?: Array<string>;
        /** OpenAlex publisher IDs (e.g. P4310319908). */
        publisher_ids?: Array<string>;
        /** ISO-3166 alpha-2 country codes of author institutions (OR), e.g. ["US","GB"]. Not supported with semantic search. */
        countries?: Array<string>;
        /**
         * ISO-639-1 language code, e.g. "en".
         * @minLength 2
         * @maxLength 2
         */
        language?: string;
        /** Only works published in 'core' sources: reputable, well-indexed journals and repositories (see https://help.openalex.org/data/sources/). Useful to exclude low-quality venues. */
        core_sources_only?: boolean;
        /** Include retracted works. Default false: retracted works are hidden and the response says so (retracted_works). Also honoured with oql, where the default leaves them out unless the query says otherwise (the echo then reads `it's not retracted`, or `non-retracted works` in the new form). */
        include_retracted?: boolean;
        /**
         * Escape hatch: extra OpenAlex filter expression appended verbatim, using the syntax documented at https://help.openalex.org/api/filtering/ (e.g. "has_abstract:true,primary_topic.field.id:17"). Combined with the structured filters above using AND.
         * @maxLength 2000
         */
        raw_filter?: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** The user's email alerts: each saved search that emails new matching works, with its frequency, when it last sent and when it next checks. Set include_saved_searches to also list saved searches with no alert. Use it to answer "what alerts do I have?" or to find an id to change or delete. */
    "openalex_mcp.list_my_alerts": {
      input: {
        /** Also list saved searches that have no alert. Default false. */
        include_saved_searches?: boolean;
        /**
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** The corrections this account has submitted and their status: pending (waiting for the nightly refresh), applied (live), superseded (a newer correction to the same item, by this user or someone else, superseded it, so it will never apply; superseded_by names that correction), or timed_out (not seen live after a week; rechecked daily). Each row carries a plain-language description. Use it to report progress or to find a curation_id to cancel. */
    "openalex_mcp.list_my_curations": {
      input: {
        /** Only these statuses. Default: all. */
        status?: Array<"pending" | "applied" | "superseded" | "timed_out">;
        /** works = add/remove work curations; authors = name and ORCID changes. */
        entity?: "works" | "authors";
        /**
         * Rows per page. Default 25.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * @minimum 1
         * @maximum 1000
         */
        page?: number;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Return a canonical OpenAlex documentation page, bundled from help.openalex.org: oql (OQL: the OpenAlex Query Language (overview)); oql_spec (OQL specification (normative, every rule and error code)); api_quick_reference (OpenAlex API quick reference for agents (entities, filters, syntax)); fixing_authors (Fixing author profiles: claiming, adding and removing works, merging duplicates); author_curation (Author curation API: the exact curation payloads and how they are applied). Use oql_spec when an OQL query is rejected and the fix-it isn't enough, api_quick_reference for entity fields and filter names, and fixing_authors before curating a profile. */
    "openalex_mcp.read_docs": {
      input: {
        /** Which page. */
        topic: "oql" | "oql_spec" | "api_quick_reference" | "fixing_authors" | "author_curation";
        /**
         * Optional heading text; returns only that section (case-insensitive substring match on headings).
         * @maxLength 100
         */
        section?: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Check up to 25 references against OpenAlex in one call and report what each one matched. Each item may be a DOI, PMID, OpenAlex ID, or a free-text citation (e.g. "Piwowar et al. (2018) The state of OA. PeerJ"). IDs are looked up exactly; free-text citations are matched on title with a confidence rating (exact, likely, uncertain, none). Use it to verify a bibliography, detect fabricated or garbled citations, fill in missing DOIs, or turn a reading list into OpenAlex IDs. */
    "openalex_mcp.resolve_references": {
      input: {
        /**
         * Citations to resolve, one per item.
         * @minItems 1
         * @maxItems 25
         */
        references: Array<string>;
        /**
         * Profile curation: an author ID (A…). Each matched work then reports on_profile (already attributed to that author) and authorship_match (the byline to attach, with raw_author_name for submit_curations add_work), so a CV or publication list can be reconciled against the profile.
         * @maxLength 300
         */
        author_id?: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Find OpenAlex entities by name and/or filters, returning IDs plus a short profile. Entity types: authors (researchers), institutions (universities, labs, companies), sources (journals, conferences, repositories), topics (research areas), funders, publishers. Use it to resolve a name to an ID before filtering works, or as a directory. It is the right tool for expert finding: authors currently at an institution working on a topic (institution_ids + topic_ids, sort by works_count or h_index; each result reports works_in_topic), journals in a field that are open access (sources + topic_ids + is_oa), institutions of a type in a country. Author results include current institutions, h-index and top topics so the right person can be picked when names collide. */
    "openalex_mcp.search_entities": {
      input: {
        /** Which kind of entity to search. */
        entity_type: "authors" | "institutions" | "sources" | "topics" | "funders" | "publishers";
        /**
         * Name or partial name, e.g. "Jennifer Doudna", "MIT", "Nature Communications", "CRISPR". Optional when filters are given.
         * @maxLength 500
         */
        query?: string;
        /** authors: current institution (includes child institutions). institutions: restrict to these or their children. */
        institution_ids?: Array<string>;
        /** authors/sources/institutions: only those with works carrying these topics (T…) among any of their topics; works_in_topic counts those works (the any_topic_ids meaning in the works tools, not their primary-topic topic_ids). */
        topic_ids?: Array<string>;
        /**
         * ISO country code: authors (current institution), institutions, sources, funders, publishers.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * institutions: education, healthcare, company, government, nonprofit, facility, funder, archive, other. sources: journal, repository, conference, ebook platform, book series.
         * @maxLength 40
         */
        type?: string;
        /** authors: only profiles with an ORCID. */
        has_orcid?: boolean;
        /** sources: only fully open-access venues. */
        is_oa?: boolean;
        /** sources: only venues listed in DOAJ. */
        is_in_doaj?: boolean;
        /**
         * sources: article processing charge at most this many USD (0 = no APC).
         * @minimum 0
         */
        max_apc_usd?: number;
        /**
         * Minimum number of works.
         * @minimum 0
         */
        min_works_count?: number;
        /**
         * authors/sources/institutions: minimum h-index.
         * @minimum 0
         */
        min_h_index?: number;
        /** Default: relevance when there is a query, otherwise works_count. Descending. */
        sort?: "relevance" | "works_count" | "cited_by_count" | "h_index";
        /**
         * Results per page, 1-50. Default 10.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Page number. Default 1.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * Escape hatch: extra filter expression appended verbatim, using the syntax at https://help.openalex.org/api/filtering/ for this entity type.
         * @maxLength 1000
         */
        raw_filter?: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Search OpenAlex for scholarly works (papers, preprints, books, datasets). mode="keyword" (default) supports Boolean syntax: AND, OR, NOT, "quoted phrases", parentheses. By default it searches titles, abstracts and keywords: a phrase in the query that names an OpenAlex keyword also matches works carrying that keyword (search_in to change). Relevance-sorted results are reranked by default: the top 100 are reordered by how well each work answers the query, so the first results are the most on-topic ones and rerank_score says how sure the reranker is (rerank=false to turn it off). mode="semantic" matches by meaning and is best for descriptive or long queries (up to 2,000 characters; max 50 results; no min_citations/countries filters). mode="exact" matches words without stemming. Omit query to list works by filters alone (e.g. everything by an author, institution or funder). For anything the structured parameters can't express (nested Boolean groups across fields, exclusions, proximity, exact phrases, wildcards) pass an OQL query in `oql` instead; the OQL reference is in the server instructions and at https://help.openalex.org/access/oql/. Set preview=true to get only the result count, the canonical OQL and a small sample, which is the cheap way to tune a query before running it. Every response includes the canonical OQL and a reproduce_url. Returns compact records: title, year, authors (first 5), venue, citations, FWCI, open-access link, primary topic, truncated abstract. Use get_work for a full record. */
    "openalex_mcp.search_works": {
      input: {
        /**
         * An OQL query, e.g. works where title-abstract-keywords has ((vaping or "vape*" or "electronic cigarette*") and (youth or "adolescen*")) and published since 2018. A bare where-clause is accepted. Mutually exclusive with query and the structured filters.
         * @maxLength 20000
         */
        oql?: string;
        /** Return only total_results, canonical OQL and a sample of preview_limit works (no abstracts). Use while tuning a query. */
        preview?: boolean;
        /**
         * Sample size for preview. Default 10.
         * @minimum 1
         * @maximum 25
         */
        preview_limit?: number;
        /** Preview sample: top = highest-ranked (default); random = a random draw from the whole result set, better for judging precision. */
        preview_sample?: "top" | "random";
        /**
         * Search text. Keyword mode supports Boolean operators.
         * @maxLength 2000
         */
        query?: string;
        /** Search mode. Default keyword. */
        mode?: "keyword" | "semantic" | "exact";
        /** Where keyword/exact queries match. title_abstract_keywords (default, what openalex.org searches) matches title and abstract text, and also works tagged with a keyword that a phrase in the query names (catches other wordings, other languages and works with no abstract; every other word must still be in the text); title_and_abstract matches the text only; fulltext also matches the body text of ~100M works, plus keywords (broader, more noise; large reviews that merely mention a term will rank high); title matches titles only. Ignored for semantic mode. */
        search_in?: "title_abstract_keywords" | "title_and_abstract" | "fulltext" | "title";
        /** Sort order, descending. Default: relevance when there is a query, otherwise cited_by_count. */
        sort?: "relevance" | "cited_by_count" | "publication_date" | "fwci";
        /** Relevance-sorted searches are reranked by default: the top 100 results are reordered by how well each work answers the query, so the first page holds the most on-topic works. Result 101 onward keeps the normal relevance order, and pages never repeat or skip a work. Costs twice a plain search. false = plain relevance order. Ignored for other sorts and semantic mode. */
        rerank?: boolean;
        /**
         * Results per page, 1-50. Default 15.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Page number. Default 1.
         * @minimum 1
         * @maximum 200
         */
        page?: number;
        /** Include a truncated abstract per result. Default true. */
        include_abstracts?: boolean;
        /**
         * Profile-curation audit view: an author ID (A…). Each result then carries this_authorship (the byline belonging to that author, with raw affiliations and raw ORCID, or the byline that best matches the author's name on works not yet attributed) plus coauthors; page 1 carries a summary of the profile. Typically used with author_ids=[same id] to list the profile's works, or with author_ids=[a duplicate profile] to review its works for merging.
         * @maxLength 300
         */
        for_author?: string;
        /**
         * Earliest publication year, inclusive (e.g. 2020).
         * @minimum 1000
         * @maximum 2100
         */
        from_year?: number;
        /**
         * Latest publication year, inclusive.
         * @minimum 1000
         * @maximum 2100
         */
        to_year?: number;
        /** Only these work types (OR). Common: article, review, preprint, book-chapter, dataset. */
        types?: Array<"article" | "review" | "preprint" | "book" | "book-chapter" | "dissertation" | "dataset" | "report" | "editorial" | "letter" | "erratum" | "retraction" | "paratext" | "libguides" | "reference-entry" | "peer-review" | "standard" | "supplementary-materials" | "grant" | "other">;
        /** Only works with a free-to-read copy. */
        open_access_only?: boolean;
        /** Only these open-access statuses (OR). */
        oa_status?: Array<"gold" | "green" | "hybrid" | "bronze" | "diamond" | "closed">;
        /**
         * Minimum cited_by_count. Not supported with semantic search.
         * @minimum 0
         */
        min_citations?: number;
        /** OpenAlex author IDs (e.g. A5067184382). Resolve names with search_entities first. */
        author_ids?: Array<string>;
        /** OpenAlex institution IDs (e.g. I27837315). Matches any author's affiliation. */
        institution_ids?: Array<string>;
        /** OpenAlex source (journal/repository) IDs (e.g. S137773608). */
        source_ids?: Array<string>;
        /** OpenAlex topic IDs (e.g. T10102), any of them (OR): works whose PRIMARY topic is one of these. Same meaning as OQL's `in the topic`, group_by topic and analyze_works top_topics. For works that carry the topic among any of their (up to 3) topics, use any_topic_ids. */
        topic_ids?: Array<string>;
        /** OpenAlex topic IDs (OR): works that carry one of these among ANY of their topics, primary or not (typically ~3x as many works as topic_ids). OQL: `where topics is (T10102)`. */
        any_topic_ids?: Array<string>;
        /** OpenAlex keyword ids (e.g. microplastics, human-health), any of them (OR). Find them with find_keywords. Keywords widen a text search; they do not replace it. */
        keyword_ids?: Array<string>;
        /** OpenAlex funder IDs (e.g. F4320332161). */
        funder_ids?: Array<string>;
        /** OpenAlex publisher IDs (e.g. P4310319908). */
        publisher_ids?: Array<string>;
        /** ISO-3166 alpha-2 country codes of author institutions (OR), e.g. ["US","GB"]. Not supported with semantic search. */
        countries?: Array<string>;
        /**
         * ISO-639-1 language code, e.g. "en".
         * @minLength 2
         * @maxLength 2
         */
        language?: string;
        /** Only works published in 'core' sources: reputable, well-indexed journals and repositories (see https://help.openalex.org/data/sources/). Useful to exclude low-quality venues. */
        core_sources_only?: boolean;
        /** Include retracted works. Default false: retracted works are hidden and the response says so (retracted_works). Also honoured with oql, where the default leaves them out unless the query says otherwise (the echo then reads `it's not retracted`, or `non-retracted works` in the new form). */
        include_retracted?: boolean;
        /**
         * Escape hatch: extra OpenAlex filter expression appended verbatim, using the syntax documented at https://help.openalex.org/api/filtering/ (e.g. "has_abstract:true,primary_topic.field.id:17"). Combined with the structured filters above using AND.
         * @maxLength 2000
         */
        raw_filter?: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Submit corrections to the user's claimed author profile as OpenAlex curations, up to 100 per call: add_work (attach a byline on a work to the profile), remove_work (detach the profile from a work), set_display_name, set_full_name (the name used to match future works), set_orcid, remove_orcid, and cancel (withdraw a pending curation). Every correction is reversible by the opposite action and each item succeeds or fails on its own. Only submit what the user has agreed to: propose removes and adds with the evidence first, ask about anything that does not clearly fit. Adds are capped at 1,000 per rolling 24 hours. Curations apply on the nightly data refresh and are live within about two days; track them with list_my_curations. Do not re-check in minutes and conclude they failed. */
    "openalex_mcp.submit_curations": {
      input: {
        /**
         * @minItems 1
         * @maxItems 100
         */
        items: Array<{
          action: "add_work";
          /**
           * @minLength 2
           * @maxLength 300
           */
          work_id: string;
          /**
           * The byline exactly as OpenAlex returns it (this_authorship.raw_author_name).
           * @minLength 1
           * @maxLength 300
           */
          raw_author_name: string;
          [key: string]: unknown;
        } | {
          action: "remove_work";
          /**
           * @minLength 2
           * @maxLength 300
           */
          work_id: string;
          [key: string]: unknown;
        } | {
          action: "set_display_name";
          /**
           * @minLength 1
           * @maxLength 300
           */
          value: string;
          [key: string]: unknown;
        } | {
          action: "set_full_name";
          /**
           * Must be one of the author's existing raw bylines; it becomes the matching name for future works.
           * @minLength 1
           * @maxLength 300
           */
          value: string;
          [key: string]: unknown;
        } | {
          action: "set_orcid";
          /**
           * @minLength 9
           * @maxLength 60
           */
          value: string;
          [key: string]: unknown;
        } | {
          action: "remove_orcid";
          /**
           * The ORCID being detached.
           * @minLength 9
           * @maxLength 60
           */
          value: string;
          [key: string]: unknown;
        } | {
          action: "cancel";
          /**
           * A pending curation id from list_my_curations.
           * @minLength 3
           * @maxLength 60
           */
          curation_id: string;
          [key: string]: unknown;
        }>;
        /**
         * The claimed profile (A…). Default: the account's claimed author.
         * @minLength 2
         * @maxLength 300
         */
        author_id?: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Change one of the user's alerts: how often it emails (daily, weekly, monthly), or "off" to stop the emails but keep the saved search; or rename it. Turning an alert back on for a saved search also uses this. Ids come from list_my_alerts. */
    "openalex_mcp.update_alert": {
      input: {
        /**
         * The alert's id, from list_my_alerts or create_alert.
         * @minLength 1
         * @maxLength 64
         */
        id: string;
        frequency?: "daily" | "weekly" | "monthly" | "off";
        /**
         * @minLength 1
         * @maxLength 400
         */
        name?: string;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAlex MCP tool's structured answer, exactly as the server returned it. null when the tool answers in text only. */
        result: unknown;
        /** The untouched text OpenAlex's MCP tool returned. Read it when `result` is null; OpenAlex can change its MCP output shape without notice. */
        raw: string;
      };
    };
  }
}
