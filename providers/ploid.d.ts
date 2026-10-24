import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a deep person run */
    "ploid.cancel_person_run": {
      input: {
        /**
         * id.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** data. */
        data: {
          /** run id. */
          run_id: string;
          /** status. */
          status: "queued" | "running" | "cancelled";
          /** poll url. */
          poll_url?: string;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /** usage. */
          usage: Record<string, unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Cancel a running People Set search; keep already admitted people (preview). */
    "ploid.cancel_set": {
      input: {
        /**
         * People Set ID.
         * @minLength 1
         */
        id: string;
        /**
         * Idempotency key for replaying the same non-streaming request
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: Record<string, unknown>;
    };
    /** Compiles a natural-language query into targets, events and relevance criteria, and derives an output schema when `output.type` is `object` without a schema. Creates nothing. Compile and create cost 1 ACU. Each run costs 1 ACU per target fetched plus 1 ACU per emitted item. Baseline runs emit nothing. */
    "ploid.compile_monitor": {
      input: {
        /** Request body. */
        body: {
          /**
           * query.
           * @maxLength 1000
           */
          query: string;
          /** output. */
          output?: {
            /** `text` returns `{ summary }` per item. `object` returns the schema you give or one derived from the query. */
            type: "text" | "object";
            /** JSON Schema with an object root, at most 25 properties. */
            schema?: Record<string, unknown>;
            /** Describe the fields in prose, or paste example JSON or a JSON Schema, to derive `schema`. */
            description?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /**
         * Idempotency key for replaying the same non-streaming request.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** object. */
          object: "monitor_compilation";
          /** name. */
          name: string;
          /** plan. */
          plan: Record<string, unknown>;
          /** output. */
          output: Record<string, unknown>;
          /** unresolved. */
          unresolved: Array<{
            /** platform. */
            platform?: string | null;
            /** kind. */
            kind?: string | null;
            /** mention. */
            mention?: string;
            /** reason. */
            reason?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Seed up to 25 rows (sync) or 2000 rows (async) of people, companies, or custom entities, and name up to 30 columns. Every cell is fused from many sources into one answer with a 0..1 confidence and public evidence URLs. Sync requests answer within deadline_ms (default 20000); cells still running at the deadline return status timeout. mode async returns 202 and fills rows in the background; poll GET /v1/datasets/{id} and page rows_url. Pay on hit: 1 ACU per 10 found standard cells (rounded up per request), 1 ACU per found custom cell, 1 ACU per work email, 3 ACU per personal email, 10 ACU per phone. not_found, unverified, and timeout cells are free. The API key reserves the all-found upper bound and releases the rest after the run. Requires people:search. */
    "ploid.create_dataset": {
      input: {
        /** Request body. */
        body: {
          /** entity. */
          entity: {
            /** type. */
            type: "person" | "company" | "custom";
          };
          /** mode. */
          mode?: "sync" | "async";
          /**
           * At most 25 rows for sync requests.
           * @minItems 1
           * @maxItems 2000
           */
          rows: Array<{
            /**
             * name.
             * @minLength 1
             * @maxLength 200
             */
            name?: string;
            /**
             * domain.
             * @minLength 1
             * @maxLength 253
             */
            domain?: string;
            /**
             * A LinkedIn person (/in/) or company (/company/) URL.
             * @minLength 1
             * @maxLength 500
             */
            linkedin_url?: string;
            /** Handles or profile URLs per platform, plus the subject's own website. */
            socials?: {
              /**
               * linkedin.
               * @minLength 1
               * @maxLength 500
               */
              linkedin?: string;
              /**
               * x.
               * @minLength 1
               * @maxLength 500
               */
              x?: string;
              /**
               * instagram.
               * @minLength 1
               * @maxLength 500
               */
              instagram?: string;
              /**
               * youtube.
               * @minLength 1
               * @maxLength 500
               */
              youtube?: string;
              /**
               * tiktok.
               * @minLength 1
               * @maxLength 500
               */
              tiktok?: string;
              /**
               * github.
               * @minLength 1
               * @maxLength 500
               */
              github?: string;
              /**
               * website.
               * @minLength 1
               * @maxLength 500
               */
              website?: string;
            };
            /**
             * email.
             * @maxLength 320
             * @format email
             */
            email?: string;
            /**
             * company.
             * @minLength 1
             * @maxLength 200
             */
            company?: string;
            /** Free-form hints, echoed back. */
            extra?: Record<string, string>;
          }>;
          /**
           * Keys must be unique.
           * @minItems 1
           * @maxItems 30
           */
          columns: Array<{
            /** A built-in field for the entity type, or custom.<name> (1-60 lowercase letters, digits, or underscores). */
            key: "name" | "domain" | "description" | "founded_year" | "headquarters" | "headcount" | "industry" | "linkedin_url" | "page_text" | "socials.linkedin" | "socials.x" | "socials.instagram" | "socials.youtube" | "socials.tiktok" | "socials.github" | "title" | "company" | "location" | "email.work" | "email.personal" | "phone" | "website" | string;
            /**
             * Required for custom.* columns: what to find.
             * @minLength 1
             * @maxLength 500
             */
            description?: string;
            /** custom.* only; defaults to text. Built-in fields have a fixed format. */
            format?: "text" | "date" | "number" | "options" | "email" | "phone" | "url" | "boolean" | "range" | "currency";
            /**
             * page_text only; defaults to 3000.
             * @minimum 200
             * @maximum 20000
             */
            max_chars?: number;
          }>;
          /**
           * Sync only: cells not filled by then return status timeout. Ignored for async.
           * @minimum 1000
           * @maximum 60000
           */
          deadline_ms?: number;
          /** Oldest cached evidence reused without a live read; 0 re-reads everything. Omitted, each field uses its own window. */
          freshness?: {
            /**
             * max age days.
             * @minimum 0
             * @maximum 3650
             */
            max_age_days: number;
          };
          /** Also return the best value of unverified cells, with its confidence and evidence. They keep status unverified and are not billed; confidence folds in how likely the profile is the row's subject. */
          include_unverified?: boolean;
        };
        /**
         * Recommended on non-streaming POSTs. Reusing the same key and authenticated request within 24 hours replays the original response and bills once. Live SSE responses reject this header; use a durable async run for replayable work.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** dataset. */
          dataset: Record<string, unknown>;
          /** rows. */
          rows: Array<{
            /** id. */
            id: string;
            /**
             * index.
             * @minimum 0
             */
            index: number;
            /** status. */
            status: "pending" | "completed" | "failed";
            /** Identifies one row's subject. At least one of name, domain, linkedin_url, email, or a socials value is required. */
            seed: {
              /**
               * name.
               * @minLength 1
               * @maxLength 200
               */
              name?: string;
              /**
               * domain.
               * @minLength 1
               * @maxLength 253
               */
              domain?: string;
              /**
               * A LinkedIn person (/in/) or company (/company/) URL.
               * @minLength 1
               * @maxLength 500
               */
              linkedin_url?: string;
              /** Handles or profile URLs per platform, plus the subject's own website. */
              socials?: {
                /**
                 * linkedin.
                 * @minLength 1
                 * @maxLength 500
                 */
                linkedin?: string;
                /**
                 * x.
                 * @minLength 1
                 * @maxLength 500
                 */
                x?: string;
                /**
                 * instagram.
                 * @minLength 1
                 * @maxLength 500
                 */
                instagram?: string;
                /**
                 * youtube.
                 * @minLength 1
                 * @maxLength 500
                 */
                youtube?: string;
                /**
                 * tiktok.
                 * @minLength 1
                 * @maxLength 500
                 */
                tiktok?: string;
                /**
                 * github.
                 * @minLength 1
                 * @maxLength 500
                 */
                github?: string;
                /**
                 * website.
                 * @minLength 1
                 * @maxLength 500
                 */
                website?: string;
                [key: string]: unknown;
              };
              /**
               * email.
               * @maxLength 320
               * @format email
               */
              email?: string;
              /**
               * company.
               * @minLength 1
               * @maxLength 200
               */
              company?: string;
              /** Free-form hints, echoed back. */
              extra?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** One cell per requested column key. */
            cells: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * acu charged.
           * @minimum 0
           */
          acu_charged: number;
          /**
           * Upper bound if every requested cell were found; reserved against the API key budget.
           * @minimum 0
           */
          max_credits: number;
          /** remaining credits. */
          remaining_credits?: number;
          /** remaining acu. */
          remaining_acu?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      } | {
        /** data. */
        data: {
          /** dataset. */
          dataset: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * acu charged.
           * @minimum 0
           */
          acu_charged: number;
          /**
           * Upper bound if every requested cell were found; reserved against the API key budget.
           * @minimum 0
           */
          max_credits: number;
          /** remaining credits. */
          remaining_credits?: number;
          /** remaining acu. */
          remaining_acu?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a non-streaming chat completion with Ploid model routing and tool definitions. Requires agent:chat. The upstream enforces its current payload and tool limits. */
    "ploid.create_harness_chat_completion": {
      input: {
        /** Request body. */
        body: {
          /** Ploid Atlas uses Luna; Ploid Ox uses Sol. */
          model?: "ploid/atlas" | "ploid/ox";
          /**
           * messages.
           * @minItems 1
           * @maxItems 100
           */
          messages: Array<Record<string, unknown>>;
          /** tools. */
          tools?: Array<Record<string, unknown>>;
          /** tool choice. */
          tool_choice?: string | Record<string, unknown>;
          /** parallel tool calls. */
          parallel_tool_calls?: boolean;
          /** response format. */
          response_format?: Record<string, unknown>;
          /** Use the JSON response transport; streaming is not supported by this action. */
          stream?: false;
          /**
           * temperature.
           * @minimum 0
           * @maximum 2
           */
          temperature?: number;
          /**
           * top p.
           * @minimum 0
           * @maximum 1
           */
          top_p?: number;
          /** stop. */
          stop?: string | Array<string>;
          /** seed. */
          seed?: number;
          /**
           * Requested output budget.
           * @minimum 1
           * @maximum 4096
           */
          max_tokens?: number;
          /**
           * Requested output budget.
           * @minimum 1
           * @maximum 4096
           */
          max_completion_tokens?: number;
        };
        /**
         * Recommended on non-streaming POSTs. Reusing the same key and authenticated request within 24 hours replays the original response and bills once. Live SSE responses reject this header; use a durable async run for replayable work.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: Record<string, unknown>;
    };
    /** Creates a scheduled monitor over LinkedIn, X, Instagram and TikTok and starts a silent baseline run. `meta.baseline_run_id` identifies that run; `meta.unresolved` lists mentions that could not be turned into a target. Compile and create cost 1 ACU. Each run costs 1 ACU per target fetched plus 1 ACU per emitted item. Baseline runs emit nothing. */
    "ploid.create_monitor": {
      input: {
        /** Request body. */
        body: {
          /**
           * query.
           * @maxLength 1000
           */
          query: string;
          /** schedule. */
          schedule: {
            /** preset. */
            preset: "hourly" | "daily" | "weekly";
            /** timezone. */
            timezone?: string;
          } | {
            /** Five-field cron. The minute field must be a single value, so runs happen at most hourly. */
            cron: string;
            /** timezone. */
            timezone?: string;
          };
          /**
           * name.
           * @maxLength 120
           */
          name?: string;
          /** output. */
          output?: {
            /** `text` returns `{ summary }` per item. `object` returns the schema you give or one derived from the query. */
            type: "text" | "object";
            /** JSON Schema with an object root, at most 25 properties. */
            schema?: Record<string, unknown>;
            /** Describe the fields in prose, or paste example JSON or a JSON Schema, to derive `schema`. */
            description?: string;
            [key: string]: unknown;
          };
          /** plan. */
          plan?: {
            /**
             * targets.
             * @minItems 1
             * @maxItems 10
             */
            targets: Array<{
              /** platform. */
              platform: "linkedin" | "x" | "instagram" | "tiktok";
              /** `company` is LinkedIn-only; elsewhere brand accounts are profiles. */
              kind: "profile" | "company" | "keyword" | "hashtag";
              /** Profile or company URL or @handle; search terms for keyword; tag without # for hashtag. Instagram supports hashtags but not keyword search. */
              identifier: string;
              /** Defaults to posts. Topics support posts only. */
              events?: Array<"posts" | "engagement" | "profile" | "company">;
              [key: string]: unknown;
            }>;
            /** Every item must satisfy this to be emitted. Null emits all new activity. */
            relevance_criteria?: string | null;
            [key: string]: unknown;
          };
          /**
           * webhook url.
           * @format uri
           */
          webhook_url?: string;
          /**
           * Signs deliveries to webhook_url: `X-Ploid-Signature: sha256=<hex HMAC-SHA256 of the raw body>`.
           * @minLength 16
           * @maxLength 256
           */
          webhook_secret?: string;
          /**
           * max items per run.
           * @minimum 1
           * @maximum 100
           */
          max_items_per_run?: number;
          [key: string]: unknown;
        };
        /**
         * Idempotency key for replaying the same non-streaming request.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** object. */
          object?: "monitor";
          /** id. */
          id?: string;
          /** name. */
          name?: string;
          /** query. */
          query?: string;
          /** status. */
          status?: "active" | "paused" | "disabled";
          /** schedule. */
          schedule?: Record<string, unknown>;
          /** targets. */
          targets?: Array<({
            /** platform. */
            platform: "linkedin" | "x" | "instagram" | "tiktok";
            /** `company` is LinkedIn-only; elsewhere brand accounts are profiles. */
            kind: "profile" | "company" | "keyword" | "hashtag";
            /** Profile or company URL or @handle; search terms for keyword; tag without # for hashtag. Instagram supports hashtags but not keyword search. */
            identifier: string;
            /** Defaults to posts. Topics support posts only. */
            events?: Array<"posts" | "engagement" | "profile" | "company">;
            [key: string]: unknown;
          }) & ({
            /** id. */
            id?: string;
            [key: string]: unknown;
          })>;
          /** relevance criteria. */
          relevance_criteria?: string | null;
          /** output. */
          output?: Record<string, unknown>;
          /** webhook url. */
          webhook_url?: string | null;
          /** webhook secret set. */
          webhook_secret_set?: boolean;
          /** max items per run. */
          max_items_per_run?: number;
          /**
           * baseline at.
           * @format date-time
           */
          baseline_at?: string | null;
          /**
           * last run at.
           * @format date-time
           */
          last_run_at?: string | null;
          /**
           * next run at.
           * @format date-time
           */
          next_run_at?: string | null;
          /**
           * created at.
           * @format date-time
           */
          created_at?: string;
          /**
           * updated at.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** meta. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a preview People Set and start a durable criteria-verified search. Requires people:search. */
    "ploid.create_set": {
      input: {
        /** body. */
        body: {
          /** People Set search. */
          search: {
            /**
             * Natural-language people search query.
             * @minLength 1
             */
            query: string;
            /**
             * Requested people count; defaults to 25.
             * @minimum 1
             * @maximum 500
             */
            count?: number;
            /**
             * Conditions every admitted person must satisfy; omitted criteria are derived from the query.
             * @maxItems 5
             */
            criteria?: Array<string>;
            /** Hard filters, combined with AND, and enforced on every result. A row that contradicts one is dropped, and a row missing a filtered value is excluded. Each field takes one value, or { any_of, none_of }: any_of is OR, none_of drops a row whose stated value matches. title is a current-role match (word boundaries; a support role or an org name that only contains the word does not count). company is the current employer after legal-suffix normalization; Meta/Facebook, X/Twitter, and Google/Alphabet match. location must contain each place component, and short codes match whole tokens. seniority and industry match indexed fields only. company.employee_count, company.funding_stage, company_size, experience, and education are proven per person with cited evidence: they count toward the criteria limit and need type auto or deep or an async search. company_domain, radius_km, and tenure return 422 unsupported_filters and are never ignored. Each result's filter_match says how every filter was met. */
            filters?: {
              /** Current job title must hold this role, or one of any_of. */
              title?: string | {
                /**
                 * Matches when the field holds any of these values.
                 * @minItems 1
                 * @maxItems 10
                 */
                any_of?: Array<string>;
                /**
                 * Drops a row whose stated value matches any of these; a missing value is not an exclusion.
                 * @minItems 1
                 * @maxItems 10
                 */
                none_of?: Array<string>;
              };
              /** Indexed seniority or title must match. Recognized levels: entry, junior, mid, senior, staff, principal, director, vp, cxo. */
              seniority?: string | {
                /**
                 * Matches when the field holds any of these values.
                 * @minItems 1
                 * @maxItems 10
                 */
                any_of?: Array<string>;
                /**
                 * Drops a row whose stated value matches any of these; a missing value is not an exclusion.
                 * @minItems 1
                 * @maxItems 10
                 */
                none_of?: Array<string>;
              };
              /** Current employer name. Legal suffixes are ignored; a longer or different name does not match. */
              company?: string | {
                /**
                 * Matches when the field holds any of these values.
                 * @minItems 1
                 * @maxItems 10
                 */
                any_of?: Array<string>;
                /**
                 * Drops a row whose stated value matches any of these; a missing value is not an exclusion.
                 * @minItems 1
                 * @maxItems 10
                 */
                none_of?: Array<string>;
                /** Current employer headcount, verified with evidence. */
                employee_count?: {
                  /**
                   * gte.
                   * @minimum 1
                   */
                  gte?: number;
                  /**
                   * lte.
                   * @minimum 1
                   */
                  lte?: number;
                };
                /** Current employer's latest funding stage, verified with evidence. */
                funding_stage?: {
                  /**
                   * in.
                   * @minItems 1
                   */
                  in: Array<"pre_seed" | "seed" | "series_a" | "series_b" | "series_c" | "series_d_plus" | "public" | "bootstrapped">;
                };
              };
              /** Indexed industry must contain this value. Results without an indexed industry cannot satisfy it. */
              industry?: string | {
                /**
                 * Matches when the field holds any of these values.
                 * @minItems 1
                 * @maxItems 10
                 */
                any_of?: Array<string>;
                /**
                 * Drops a row whose stated value matches any of these; a missing value is not an exclusion.
                 * @minItems 1
                 * @maxItems 10
                 */
                none_of?: Array<string>;
              };
              /** City, state, or country must contain this place. State names and postal abbreviations match. */
              location?: string | {
                /**
                 * Matches when the field holds any of these values.
                 * @minItems 1
                 * @maxItems 10
                 */
                any_of?: Array<string>;
                /**
                 * Drops a row whose stated value matches any of these; a missing value is not an exclusion.
                 * @minItems 1
                 * @maxItems 10
                 */
                none_of?: Array<string>;
                /**
                 * Joined with cities and any_of as alternatives.
                 * @minItems 1
                 * @maxItems 10
                 */
                countries?: Array<string>;
                /**
                 * Joined with countries and any_of as alternatives.
                 * @minItems 1
                 * @maxItems 10
                 */
                cities?: Array<string>;
              };
              /** Current employer headcount, verified with evidence. Same as company.employee_count. */
              company_size?: {
                /**
                 * min.
                 * @minimum 1
                 */
                min?: number;
                /**
                 * max.
                 * @minimum 1
                 */
                max?: number;
              };
              /** A past role (not only the current one) at one of these companies, verified with evidence. */
              experience?: {
                /** past companies. */
                past_companies: {
                  /**
                   * any of.
                   * @minItems 1
                   * @maxItems 10
                   */
                  any_of: Array<string>;
                };
              };
              /** Attended one of these schools, verified with evidence. */
              education?: {
                /** schools. */
                schools: {
                  /**
                   * any of.
                   * @minItems 1
                   * @maxItems 10
                   */
                  any_of: Array<string>;
                };
              };
            };
            /** How recently the facts behind each result must have been confirmed. max_age_days caps the age of cached evidence for every candidate: 0 means always re-read live sources. Omitted, verification picks a window per request from the time-sensitive facts it depends on (current role, location) and refreshes only the top-ranked candidates. Requires verification: type auto or deep, or an async search; instant and fast return 422 unsupported_freshness. Tighter windows cost more live reads and can return fewer results within the deadline. The response echoes the applied window under request.freshness. */
            freshness?: {
              /**
               * Maximum age, in days, of the cached evidence behind each returned result.
               * @minimum 0
               * @maximum 365
               */
              max_age_days: number;
            };
          };
          /** budget. */
          budget?: {
            /**
             * Maximum credits for all searches in this Set.
             * @minimum 1
             */
            credits?: number;
            /** Compatibility value currently ignored by Ploid. */
            llm_tokens?: number;
          };
        };
        /**
         * Idempotency key for replaying the same non-streaming request
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: Record<string, unknown>;
    };
    /** Delete (disable) a monitor */
    "ploid.delete_monitor": {
      input: {
        /**
         * id.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the deletion succeeded. */
        success: boolean;
        [key: string]: unknown;
      };
    };
    /** Resolve contact fields for one person using a LinkedIn URL, permanent person_id, email (with first and last name at a work domain, or alone for a reverse lookup), or name plus company domain. Request work_email, personal_email, and/or phone; every field reports found, not_found, or unavailable with confidence, source, and last_seen. Responses include explicit usage.billed and usage.not_found. The legacy lightweight LinkedIn profile contract remains supported; use /v1/person for deep public evidence. Requires the people:enrich scope. */
    "ploid.enrich_person": {
      input: {
        /** Request body. */
        body: Record<string, unknown> | {
          /**
           * linkedin url.
           * @pattern ^https?://(?:[^/]+\.)?linkedin\.com/in/[^/?#]+/?(?:[?#].*)?$
           * @format uri
           */
          linkedin_url: string;
          /** first name. */
          first_name?: string;
          /** last name. */
          last_name?: string;
          /**
           * enrichments.
           * @minItems 1
           * @maxItems 3
           */
          enrichments?: Array<"profile" | "linkedin_profile" | "email" | "phone">;
          /** response format. */
          response_format?: "standard" | "markdown";
        };
        /**
         * Recommended on non-streaming POSTs. Reusing the same key and authenticated request within 24 hours replays the original response and bills once. Live SSE responses reject this header; use a durable async run for replayable work.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** Only requested contact fields are present. */
        data: {
          /** work email. */
          work_email?: Record<string, unknown>;
          /** personal email. */
          personal_email?: Record<string, unknown>;
          /** phone. */
          phone?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /** warnings. */
          warnings: Array<string>;
          /** usage. */
          usage: Record<string, unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      } | {
        /** Only requested enrichment fields are present; an unavailable field is null. */
        data: {
          /** linkedin profile. */
          linkedin_profile?: Record<string, unknown> | null;
          /** email. */
          email?: Record<string, unknown> | null;
          /** phone. */
          phone?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * acu used.
           * @minimum 0
           */
          acu_used: number;
          /**
           * acu remaining.
           * @minimum 0
           */
          acu_remaining: number | null;
          /** acu value usd. */
          acu_value_usd: 0.1;
          /** warnings. */
          warnings: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      } | {
        /** Enriched profile in Markdown format. */
        markdown: string;
        [key: string]: unknown;
      };
    };
    /** Resolve a public profile from a supported platform handle or URL. Requires the people:enrich scope. */
    "ploid.enrich_social_profile": {
      input: {
        /** Request body. */
        body: {
          /** Use x for new integrations; twitter remains a compatibility alias. */
          platform: "linkedin" | "x" | "twitter" | "instagram" | "tiktok" | "youtube" | "github" | "reddit" | "facebook";
          /**
           * Handle, vanity slug, or a profile URL belonging to the selected platform.
           * @minLength 1
           * @maxLength 500
           */
          identifier: string;
        };
        /**
         * Recommended on non-streaming POSTs. Reusing the same key and authenticated request within 24 hours replays the original response and bills once. Live SSE responses reject this header; use a durable async run for replayable work.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** platform. */
          platform: "linkedin" | "x" | "instagram" | "tiktok" | "youtube" | "github" | "reddit" | "facebook";
          /** Public profile fields vary by platform. Internal routing metadata is removed. */
          profile: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * remaining credits.
           * @minimum 0
           */
          remaining_credits?: number;
          /** cursor. */
          cursor?: string | null;
          /** message. */
          message?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Export admitted People Set items as JSON, preserving raw field values (preview). */
    "ploid.export_set": {
      input: {
        /**
         * People Set ID.
         * @minLength 1
         */
        id: string;
      };
      output: Record<string, unknown>;
    };
    /** Requires account:read. */
    "ploid.get_account_profile": {
      input: Record<string, never>;
      output: {
        /** data. */
        data: {
          /**
           * email.
           * @format email
           */
          email: string;
          /**
           * first name.
           * @maxLength 80
           */
          first_name: string;
          /**
           * last name.
           * @maxLength 80
           */
          last_name: string;
          /** image url. */
          image_url: string | null;
          /**
           * linkedin url.
           * @format uri
           */
          linkedin_url: string | null;
          /**
           * twitter url.
           * @format uri
           */
          twitter_url: string | null;
          /**
           * github url.
           * @format uri
           */
          github_url: string | null;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Returns workspace ACU usage plus the calling key's ID, budget, and the number of active keys. Requires account:read. */
    "ploid.get_account_usage": {
      input: Record<string, never>;
      output: {
        /** data. */
        data: {
          /** credits. */
          credits: Record<string, unknown>;
          /** api key. */
          api_key: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Returns the workspace ACU balance and budget state for the API key used on this request. Requires account:read. */
    "ploid.get_credits": {
      input: Record<string, never>;
      output: {
        /** data. */
        data: {
          /** plan. */
          plan: "FREE" | "PAYG" | "API_PRO" | "STARTER" | "PRO" | "SCALE" | "TEAMS";
          /** acu. */
          acu: Record<string, unknown>;
          /** acu value usd. */
          acu_value_usd: 0.1;
          /** api key budget. */
          api_key_budget: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Status, columns, and progress of a dataset owned by the caller's workspace. Requires people:search. */
    "ploid.get_dataset": {
      input: {
        /**
         * id.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** data. */
        data: {
          /** dataset. */
          dataset: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Returns the calling user's bounded Ploid user, company, and relevant memory context without running a model. Requires agent:chat. */
    "ploid.get_harness_context": {
      input: {
        /** Request body. */
        body: {
          /**
           * query.
           * @maxLength 20000
           */
          query?: string;
        };
        /**
         * Idempotency key for replaying the same non-streaming request.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /**
           * context.
           * @maxLength 32000
           */
          context: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Identity-bound LinkedIn read. Requires the linkedin:read scope. */
    "ploid.get_linkedin_company": {
      input: {
        /** url. */
        url?: string;
        /** universalName. */
        universalName?: string;
        /** search. */
        search?: string;
      };
      output: {
        /** Provider-neutral LinkedIn data. Fields vary by the selected read operation and internal credentials and status fields are removed. */
        data: Record<string, unknown> | Array<unknown> | string | number | boolean | null;
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * remaining credits.
           * @minimum 0
           */
          remaining_credits?: number;
          /** cursor. */
          cursor?: string | null;
          /** message. */
          message?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Returns a LinkedIn profile by URL, vanity slug, or @handle. Requires the linkedin:read scope. */
    "ploid.get_linkedin_profile": {
      input: {
        /** LinkedIn profile URL, slug, or @handle. */
        url?: string;
        /** Alias for `url`. */
        identifier?: string;
      };
      output: {
        /** data. */
        data: {
          /** socialId. */
          socialId: string | null;
          /** publicIdentifier. */
          publicIdentifier: string | null;
          /** profileUrl. */
          profileUrl: string | null;
          /** firstName. */
          firstName: string | null;
          /** lastName. */
          lastName: string | null;
          /** fullName. */
          fullName: string;
          /** headline. */
          headline: string | null;
          /** summary. */
          summary: string | null;
          /** location. */
          location: string | null;
          /** countryCode. */
          countryCode: string | null;
          /** industry. */
          industry: string | null;
          /** connectionDegree. */
          connectionDegree: 1 | 2 | 3 | null;
          /**
           * followerCount.
           * @minimum 0
           */
          followerCount: number | null;
          /**
           * connectionCount.
           * @minimum 0
           */
          connectionCount: number | null;
          /** profilePictureUrl. */
          profilePictureUrl: string | null;
          /** coverPictureUrl. */
          coverPictureUrl: string | null;
          /** currentPosition. */
          currentPosition: Record<string, unknown> | null;
          /** positions. */
          positions: Array<{
            /** title. */
            title: string | null;
            /** companyName. */
            companyName: string | null;
            /** companyUrl. */
            companyUrl: string | null;
            /** location. */
            location: string | null;
            /** description. */
            description: string | null;
            /** startsAt. */
            startsAt: string | null;
            /** endsAt. */
            endsAt: string | null;
            /** current. */
            current: boolean;
            [key: string]: unknown;
          }>;
          /** education. */
          education: Array<{
            /** school. */
            school: string | null;
            /** degree. */
            degree: string | null;
            /** field. */
            field: string | null;
            /** startsAt. */
            startsAt: string | null;
            /** endsAt. */
            endsAt: string | null;
            [key: string]: unknown;
          }>;
          /** isOpenToWork. */
          isOpenToWork: boolean;
          /** isPremium. */
          isPremium: boolean;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * remaining credits.
           * @minimum 0
           */
          remaining_credits?: number;
          /** cursor. */
          cursor?: string | null;
          /** message. */
          message?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a monitor */
    "ploid.get_monitor": {
      input: {
        /**
         * id.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** data. */
        data: {
          /** object. */
          object?: "monitor";
          /** id. */
          id?: string;
          /** name. */
          name?: string;
          /** query. */
          query?: string;
          /** status. */
          status?: "active" | "paused" | "disabled";
          /** schedule. */
          schedule?: Record<string, unknown>;
          /** targets. */
          targets?: Array<({
            /** platform. */
            platform: "linkedin" | "x" | "instagram" | "tiktok";
            /** `company` is LinkedIn-only; elsewhere brand accounts are profiles. */
            kind: "profile" | "company" | "keyword" | "hashtag";
            /** Profile or company URL or @handle; search terms for keyword; tag without # for hashtag. Instagram supports hashtags but not keyword search. */
            identifier: string;
            /** Defaults to posts. Topics support posts only. */
            events?: Array<"posts" | "engagement" | "profile" | "company">;
            [key: string]: unknown;
          }) & ({
            /** id. */
            id?: string;
            [key: string]: unknown;
          })>;
          /** relevance criteria. */
          relevance_criteria?: string | null;
          /** output. */
          output?: Record<string, unknown>;
          /** webhook url. */
          webhook_url?: string | null;
          /** webhook secret set. */
          webhook_secret_set?: boolean;
          /** max items per run. */
          max_items_per_run?: number;
          /**
           * baseline at.
           * @format date-time
           */
          baseline_at?: string | null;
          /**
           * last run at.
           * @format date-time
           */
          last_run_at?: string | null;
          /**
           * next run at.
           * @format date-time
           */
          next_run_at?: string | null;
          /**
           * created at.
           * @format date-time
           */
          created_at?: string;
          /**
           * updated at.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** meta. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a run */
    "ploid.get_monitor_run": {
      input: {
        /**
         * id.
         * @minLength 1
         */
        id: string;
        /**
         * runId.
         * @minLength 1
         */
        runId: string;
      };
      output: {
        /** data. */
        data: {
          /** object. */
          object?: "monitor_run";
          /** id. */
          id?: string;
          /** monitor id. */
          monitor_id?: string;
          /** trigger. */
          trigger?: "baseline" | "schedule" | "manual";
          /** `skipped` means available ACU or the API-key budget could not cover the run; `error` explains which. */
          status?: "queued" | "running" | "completed" | "failed" | "skipped";
          /** candidates. */
          candidates?: number;
          /** items emitted. */
          items_emitted?: number;
          /** acu charged. */
          acu_charged?: number;
          /** error. */
          error?: string | null;
          /**
           * started at.
           * @format date-time
           */
          started_at?: string | null;
          /**
           * completed at.
           * @format date-time
           */
          completed_at?: string | null;
          /**
           * created at.
           * @format date-time
           */
          created_at?: string;
          /** Delivery of this run's event to the monitor's webhook_url; null when the monitor has none or the run sent no event. */
          webhook?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** meta. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Returns this OpenAPI 3.1 contract. No authentication is required. */
    "ploid.get_open_api_document": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Resolve one reviewed deep person profile. An eligible cached profile returns 200, including stale data with a queued refresh. Unseen people and snapshots requiring new review return a durable 202 run. Fresh research can take minutes; poll the returned run ID. A completed uncertain identity returns data:null with meta.resolution=unsure and reason ambiguous_identity or insufficient_evidence. The first successful profile costs exactly 25 ACU on every plan; organization-wide rereads are free for 90 days. Failed, uncertain, and not-found runs are free. Current role fields, age, and social audience/activity metrics are not populated by the current reviewed projection. */
    "ploid.get_person": {
      input: {
        /** Request body. */
        body: {
          /** identifier. */
          identifier: {
            /**
             * person id.
             * @minLength 1
             * @maxLength 500
             */
            person_id: string;
          } | {
            /**
             * linkedin url.
             * @format uri
             */
            linkedin_url: string;
          } | {
            /**
             * name.
             * @minLength 1
             * @maxLength 200
             */
            name: string;
            /**
             * company domain.
             * @minLength 3
             * @maxLength 253
             */
            company_domain: string;
          };
        };
        /**
         * Recommended on POST. Reusing the same key replays the same run and bills once.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** queued or running while research is pending; completed for a final profile, no match, or unsure outcome. */
        status: string;
        /** Durable research handle, when one was created. */
        run_id?: string;
        /** Reviewed person, pending run metadata, or null when unresolved. */
        data: unknown;
        /** Request, resolution, and billing metadata. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Poll a deep person run */
    "ploid.get_person_run": {
      input: {
        /**
         * id.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** queued or running while research is pending; completed for a final profile, no match, or unsure outcome. */
        status: string;
        /** Durable research handle, when one was created. */
        run_id?: string;
        /** Reviewed person, pending run metadata, or null when unresolved. */
        data: unknown;
        /** Request, resolution, and billing metadata. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read a People Set and its searches, newest first. Inspect searches for progress and stop_reason (preview). */
    "ploid.get_set": {
      input: {
        /**
         * People Set ID.
         * @minLength 1
         */
        id: string;
      };
      output: Record<string, unknown>;
    };
    /** Merges live LinkedIn search, web search results, and the Ploid people index to return recruiters, role counts, and whether each count is complete. Placeholder company names are skipped. Up to 10 companies per request; each unique non-placeholder company is billed for returned matches. Requires people:search. */
    "ploid.list_company_recruiters": {
      input: {
        /** Request body. */
        body: {
          /**
           * companies.
           * @minItems 1
           * @maxItems 10
           */
          companies: Array<Record<string, unknown>>;
          /**
           * max recruiters.
           * @minimum 1
           * @maximum 150
           */
          max_recruiters?: number;
          [key: string]: unknown;
        };
        /**
         * Recommended on non-streaming POSTs. Reusing the same key and authenticated request within 24 hours replays the original response and bills once. Live SSE responses reject this header; use a durable async run for replayable work.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /**
           * companies searched.
           * @minimum 0
           */
          companies_searched: number;
          /** results. */
          results: Array<{
            /** input. */
            input: Record<string, unknown>;
            /** company name. */
            company_name: string;
            /** status. */
            status: "ok" | "failed" | "skipped";
            /** error. */
            error?: string;
            /**
             * recruiter count.
             * @minimum 0
             */
            recruiter_count: number;
            /** count complete. */
            count_complete: boolean;
            /** role counts. */
            role_counts: {
              /**
               * recruiter.
               * @minimum 0
               */
              recruiter: number;
              /**
               * sourcer.
               * @minimum 0
               */
              sourcer: number;
              /**
               * recruiting coordinator.
               * @minimum 0
               */
              recruiting_coordinator: number;
              /**
               * talent acquisition.
               * @minimum 0
               */
              talent_acquisition: number;
              [key: string]: unknown;
            };
            /** recruiters. */
            recruiters: Array<{
              /** person id. */
              person_id: string;
              /** name. */
              name: string | null;
              /** title. */
              title: string | null;
              /** company. */
              company: string | null;
              /** location. */
              location: string | null;
              /** linkedin url. */
              linkedin_url: string | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * remaining credits.
           * @minimum 0
           */
          remaining_credits?: number;
          /** cursor. */
          cursor?: string | null;
          /** message. */
          message?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Rows in seed order with their cells. Usable while an async dataset runs; pending rows report timeout cells until filled. Requires people:search. */
    "ploid.list_dataset_rows": {
      input: {
        /**
         * id.
         * @minLength 1
         */
        id: string;
        /**
         * next_cursor from the previous page.
         * @minimum 0
         */
        cursor?: number;
        /**
         * limit.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
      };
      output: {
        /** data. */
        data: {
          /** rows. */
          rows: Array<{
            /** id. */
            id: string;
            /**
             * index.
             * @minimum 0
             */
            index: number;
            /** status. */
            status: "pending" | "completed" | "failed";
            /** Identifies one row's subject. At least one of name, domain, linkedin_url, email, or a socials value is required. */
            seed: {
              /**
               * name.
               * @minLength 1
               * @maxLength 200
               */
              name?: string;
              /**
               * domain.
               * @minLength 1
               * @maxLength 253
               */
              domain?: string;
              /**
               * A LinkedIn person (/in/) or company (/company/) URL.
               * @minLength 1
               * @maxLength 500
               */
              linkedin_url?: string;
              /** Handles or profile URLs per platform, plus the subject's own website. */
              socials?: {
                /**
                 * linkedin.
                 * @minLength 1
                 * @maxLength 500
                 */
                linkedin?: string;
                /**
                 * x.
                 * @minLength 1
                 * @maxLength 500
                 */
                x?: string;
                /**
                 * instagram.
                 * @minLength 1
                 * @maxLength 500
                 */
                instagram?: string;
                /**
                 * youtube.
                 * @minLength 1
                 * @maxLength 500
                 */
                youtube?: string;
                /**
                 * tiktok.
                 * @minLength 1
                 * @maxLength 500
                 */
                tiktok?: string;
                /**
                 * github.
                 * @minLength 1
                 * @maxLength 500
                 */
                github?: string;
                /**
                 * website.
                 * @minLength 1
                 * @maxLength 500
                 */
                website?: string;
                [key: string]: unknown;
              };
              /**
               * email.
               * @maxLength 320
               * @format email
               */
              email?: string;
              /**
               * company.
               * @minLength 1
               * @maxLength 200
               */
              company?: string;
              /** Free-form hints, echoed back. */
              extra?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** One cell per requested column key. */
            cells: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** Pass as cursor for the next page; null on the last page. */
          next_cursor: number | null;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Identity-bound LinkedIn read. Requires the linkedin:read scope. */
    "ploid.list_linkedin_company_posts": {
      input: {
        /** company. */
        company?: string;
        /** companyId. */
        companyId?: string;
        /** companyUniversalName. */
        companyUniversalName?: string;
        /** postedLimit. */
        postedLimit?: string;
        /** scrapePostedLimit. */
        scrapePostedLimit?: string;
        /** page. */
        page?: string;
        /** paginationToken. */
        paginationToken?: string;
      };
      output: {
        /** Provider-neutral LinkedIn data. Fields vary by the selected read operation and internal credentials and status fields are removed. */
        data: Record<string, unknown> | Array<unknown> | string | number | boolean | null;
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * remaining credits.
           * @minimum 0
           */
          remaining_credits?: number;
          /** cursor. */
          cursor?: string | null;
          /** message. */
          message?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Returns recent posts for a LinkedIn profile. Requires the linkedin:read scope. */
    "ploid.list_linkedin_posts": {
      input: {
        /** LinkedIn profile URL, slug, or @handle. */
        identifier?: string;
        /** Alias for `identifier`. */
        url?: string;
        /**
         * limit.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
      };
      output: {
        /** data. */
        data: {
          /** items. */
          items: Array<{
            /** socialId. */
            socialId: string;
            /** postUrl. */
            postUrl: string | null;
            /** text. */
            text: string | null;
            /** publishedAt. */
            publishedAt: string | null;
            /**
             * reactionCount.
             * @minimum 0
             */
            reactionCount: number;
            /**
             * commentCount.
             * @minimum 0
             */
            commentCount: number;
            /**
             * shareCount.
             * @minimum 0
             */
            shareCount: number;
            /** kind. */
            kind: "post" | "share" | "article" | "unknown";
            /** author. */
            author: {
              /** socialId. */
              socialId: string | null;
              /** name. */
              name: string | null;
              /** headline. */
              headline: string | null;
              /** profileUrl. */
              profileUrl: string | null;
              /** profilePictureUrl. */
              profilePictureUrl: string | null;
              [key: string]: unknown;
            };
            /** mediaUrl. */
            mediaUrl: string | null;
            [key: string]: unknown;
          }>;
          /** cursor. */
          cursor: string | null;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * remaining credits.
           * @minimum 0
           */
          remaining_credits?: number;
          /** cursor. */
          cursor?: string | null;
          /** message. */
          message?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Identity-bound LinkedIn read. Requires the linkedin:read scope. */
    "ploid.list_linkedin_profile_comments": {
      input: {
        /** profile. */
        profile?: string;
        /** profileId. */
        profileId?: string;
        /** postedLimit. */
        postedLimit?: string;
        /** page. */
        page?: string;
        /** paginationToken. */
        paginationToken?: string;
      };
      output: {
        /** Provider-neutral LinkedIn data. Fields vary by the selected read operation and internal credentials and status fields are removed. */
        data: Record<string, unknown> | Array<unknown> | string | number | boolean | null;
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * remaining credits.
           * @minimum 0
           */
          remaining_credits?: number;
          /** cursor. */
          cursor?: string | null;
          /** message. */
          message?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List emitted items */
    "ploid.list_monitor_items": {
      input: {
        /**
         * id.
         * @minLength 1
         */
        id: string;
        /** run id. */
        run_id?: string;
        /** `next_cursor` from the previous page. */
        cursor?: string;
        /**
         * limit.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** data. */
        data: Array<Record<string, unknown>>;
        /** meta. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List runs */
    "ploid.list_monitor_runs": {
      input: {
        /**
         * id.
         * @minLength 1
         */
        id: string;
        /** `next_cursor` from the previous page. */
        cursor?: string;
        /**
         * limit.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** data. */
        data: Array<Record<string, unknown>>;
        /** meta. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List monitors */
    "ploid.list_monitors": {
      input: {
        /** `next_cursor` from the previous page. */
        cursor?: string;
        /**
         * limit.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** data. */
        data: Array<Record<string, unknown>>;
        /** meta. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Page admitted people from a People Set, including partial results while a search runs (preview). */
    "ploid.list_set_items": {
      input: {
        /**
         * People Set ID.
         * @minLength 1
         */
        id: string;
        /**
         * Pagination cursor.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum items per page.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** API keys receive admitted people for every supported status filter. */
        status?: "admitted" | "review" | "all";
      };
      output: Record<string, unknown>;
    };
    /** List the most recent workspace People Sets (preview). Requires people:search. */
    "ploid.list_sets": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Identify one person from a full name plus at least one clue (company name or domain, role, location, address, work or personal email, or phone) by fusing the people index with live web results. Returns the permanent person_id accepted by /v1/person and /v1/enrich, so a deep profile is only bought for the right person. Costs 2 ACU when a person is found; no match is free. A match is model-assessed, not identity-verified. Requires people:search. */
    "ploid.resolve_person": {
      input: {
        /** Request body. */
        body: Record<string, unknown>;
        /**
         * Recommended on non-streaming POSTs. Reusing the same key and authenticated request within 24 hours replays the original response and bills once. Live SSE responses reject this header; use a durable async run for replayable work.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** found. */
          found: boolean;
          /** person. */
          person: null | Record<string, unknown>;
          /**
           * confidence.
           * @minimum 0
           * @maximum 1
           */
          confidence: number;
          /** summary. */
          summary: string;
          /** sources. */
          sources: Array<string>;
          /** Present when found. A ready-to-send /v1/person request that looks for more public profiles. */
          more_profiles?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * remaining credits.
           * @minimum 0
           */
          remaining_credits?: number;
          /** cursor. */
          cursor?: string | null;
          /** message. */
          message?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Immediately revokes the calling API key. A successful response is the final response that key can authorize. Requires account:read. */
    "ploid.revoke_current_api_key": {
      input: Record<string, never>;
      output: {
        /** data. */
        data: {
          /** id. */
          id: string;
          /** revoked. */
          revoked: true;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Trigger a run now */
    "ploid.run_monitor": {
      input: {
        /**
         * id.
         * @minLength 1
         */
        id: string;
        /**
         * Idempotency key for replaying the same non-streaming request.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** object. */
          object?: "monitor_run";
          /** id. */
          id?: string;
          /** monitor id. */
          monitor_id?: string;
          /** trigger. */
          trigger?: "baseline" | "schedule" | "manual";
          /** `skipped` means available ACU or the API-key budget could not cover the run; `error` explains which. */
          status?: "queued" | "running" | "completed" | "failed" | "skipped";
          /** candidates. */
          candidates?: number;
          /** items emitted. */
          items_emitted?: number;
          /** acu charged. */
          acu_charged?: number;
          /** error. */
          error?: string | null;
          /**
           * started at.
           * @format date-time
           */
          started_at?: string | null;
          /**
           * completed at.
           * @format date-time
           */
          completed_at?: string | null;
          /**
           * created at.
           * @format date-time
           */
          created_at?: string;
          /** Delivery of this run's event to the monitor's webhook_url; null when the monitor has none or the run sent no event. */
          webhook?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** meta. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Filter Ploid's GitHub accounts index. Every criterion is AND; give at least one. Results come back by relevance when query or company is set, otherwise by merged pull requests and then commits; sort picks an activity ranking instead. Page with offset up to 1000 results deep; the last page before that shrinks to fit, so next_offset can always be followed with the same limit. With include_profiles, each account also carries its live public GitHub profile (limit defaults to and may not exceed 10). Costs 1 ACU per completed search plus 1 ACU per live profile found, charged together; failed searches are not charged. Emails and phone numbers are never returned. Requires people:search. */
    "ploid.search_github_accounts": {
      input: {
        /** Request body. */
        body: {
          /**
           * Free text over login, company, and repository names.
           * @minLength 1
           * @maxLength 200
           */
          query?: string;
          /**
           * Exact login, case-insensitive.
           * @pattern ^[A-Za-z0-9][A-Za-z0-9_-]{0,99}$
           */
          login?: string;
          /**
           * Login starts with this text.
           * @minLength 2
           * @maxLength 100
           * @pattern ^[A-Za-z0-9_-]+$
           */
          login_prefix?: string;
          /** type. */
          type?: "User" | "Organization" | "Bot" | "Mannequin";
          /**
           * Company on the profile; known aliases also match.
           * @minLength 1
           * @maxLength 200
           */
          company?: string;
          /**
           * Worked on this repository (owner/name).
           * @pattern ^[A-Za-z0-9_.-]{1,100}/[A-Za-z0-9_.-]{1,100}$
           */
          repo?: string;
          /**
           * Worked on any repository this user or organization owns.
           * @pattern ^[A-Za-z0-9][A-Za-z0-9_-]{0,99}$
           */
          repo_owner?: string;
          /** hireable. */
          hireable?: boolean;
          /** Whether a public email was ever listed. The address itself is never returned. */
          has_email?: boolean;
          /** site admin. */
          site_admin?: boolean;
          /** github star. */
          github_star?: boolean;
          /**
           * At least this many commits pushed, 2011 through October 2025.
           * @minimum 1
           */
          min_commits?: number;
          /**
           * At least this many authored pull requests merged, 2011 through October 2025.
           * @minimum 1
           */
          min_merged_pull_requests?: number;
          /**
           * At least this many pushes in the 12 months before the index was built.
           * @minimum 1
           */
          min_recent_pushes?: number;
          /**
           * Public activity on or after this date.
           * @format date
           */
          active_since?: string;
          /**
           * One of the account's ten most-used languages, for example Rust.
           * @minLength 1
           * @maxLength 50
           */
          language?: string;
          /** Keep likely bot, CI, and release accounts, which are left out unless login is given. */
          include_automation?: boolean;
          /** relevance, or most commits, merged pull requests, recent pushes (recent_activity), or latest activity (last_active) first. */
          sort?: "relevance" | "commits" | "merged_pull_requests" | "recent_activity" | "last_active";
          /**
           * Page size. Defaults to 25, or 10 when include_profiles is true.
           * @minimum 1
           * @maximum 100
           */
          limit?: number;
          /**
           * Results to skip; below 1000.
           * @minimum 0
           * @maximum 999
           */
          offset?: number;
          /** Attach live public profiles. Limits the page to 10. */
          include_profiles?: boolean;
        };
        /**
         * Reuse for retries of the same request to prevent duplicate charges.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** results. */
          results: Array<{
            /** login. */
            login: string;
            /** github id. */
            github_id: number;
            /** type. */
            type: string;
            /** company. */
            company: string;
            /** hireable. */
            hireable: boolean;
            /** has email. */
            has_email: boolean;
            /** site admin. */
            site_admin: boolean;
            /** github star. */
            github_star: boolean;
            /**
             * Up to 100 repositories worked on (owner/name). The repo filter searches all of them.
             * @maxItems 100
             */
            repos: Array<string>;
            /** repo count. */
            repo_count: number;
            /**
             * profile url.
             * @format uri
             */
            profile_url: string;
            /** Public activity from GH Archive; null when none is on record. Commits and pull requests cover 2011 through October 2025; pushes run to the index build. */
            activity: {
              /**
               * commits.
               * @minimum 0
               */
              commits: number;
              /**
               * pushes.
               * @minimum 0
               */
              pushes: number;
              /**
               * pushes last 12m.
               * @minimum 0
               */
              pushes_last_12m: number;
              /**
               * Pull requests opened by this account.
               * @minimum 0
               */
              pull_requests: number;
              /**
               * Pull requests opened by this account and merged.
               * @minimum 0
               */
              merged_pull_requests: number;
              /**
               * reviews.
               * @minimum 0
               */
              reviews: number;
              /**
               * Months with at least one push, pull request, or review.
               * @minimum 0
               */
              active_months: number;
              /**
               * first active at.
               * @format date
               */
              first_active_at: string;
              /**
               * last active at.
               * @format date
               */
              last_active_at: string;
              /**
               * Most-used languages, most first.
               * @maxItems 10
               */
              languages: Array<string>;
              /**
               * top repos.
               * @maxItems 10
               */
              top_repos: Array<{
                /** repo. */
                repo: string;
                /**
                 * commits.
                 * @minimum 0
                 */
                commits: number;
                /**
                 * pushes.
                 * @minimum 0
                 */
                pushes: number;
                /**
                 * pull requests.
                 * @minimum 0
                 */
                pull_requests: number;
                /**
                 * merged pull requests.
                 * @minimum 0
                 */
                merged_pull_requests: number;
                /**
                 * last active at.
                 * @format date
                 */
                last_active_at: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            /** Only with include_profiles: the live public profile, or null when GitHub returned none. */
            profile?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** returned. */
          returned: number;
          /** Matching accounts, counted exactly up to 10,000 (relation gte beyond that). */
          total: Record<string, unknown>;
          /** offset. */
          offset: number;
          /** limit. */
          limit: number;
          /** next offset. */
          next_offset: number;
          [key: string]: unknown;
        };
        /** meta. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Run a GitHub accounts search, read each account's live public profile, and tie it to a LinkedIn profile: one the user lists on GitHub, or the one indexed person whose name matches and whose employer or location agrees. Ambiguous matches are left unlinked. linkedin filters are hard: a person is returned only when their linked, indexed LinkedIn profile satisfies every one. Pages advance over GitHub accounts (scanned), so a page can return fewer people than it scanned; follow next_offset. At most 10 accounts per page. Costs 1 ACU per completed search plus 1 ACU per returned person, charged together; failed searches are not charged. Emails and phone numbers are never returned. Requires people:search. */
    "ploid.search_github_people": {
      input: {
        /** Request body. */
        body: {
          /**
           * Free text over login, company, and repository names.
           * @minLength 1
           * @maxLength 200
           */
          query?: string;
          /**
           * Exact login, case-insensitive.
           * @pattern ^[A-Za-z0-9][A-Za-z0-9_-]{0,99}$
           */
          login?: string;
          /**
           * Login starts with this text.
           * @minLength 2
           * @maxLength 100
           * @pattern ^[A-Za-z0-9_-]+$
           */
          login_prefix?: string;
          /** type. */
          type?: "User" | "Organization" | "Bot" | "Mannequin";
          /**
           * Company on the profile; known aliases also match.
           * @minLength 1
           * @maxLength 200
           */
          company?: string;
          /**
           * Worked on this repository (owner/name).
           * @pattern ^[A-Za-z0-9_.-]{1,100}/[A-Za-z0-9_.-]{1,100}$
           */
          repo?: string;
          /**
           * Worked on any repository this user or organization owns.
           * @pattern ^[A-Za-z0-9][A-Za-z0-9_-]{0,99}$
           */
          repo_owner?: string;
          /** hireable. */
          hireable?: boolean;
          /** Whether a public email was ever listed. The address itself is never returned. */
          has_email?: boolean;
          /** site admin. */
          site_admin?: boolean;
          /** github star. */
          github_star?: boolean;
          /**
           * At least this many commits pushed, 2011 through October 2025.
           * @minimum 1
           */
          min_commits?: number;
          /**
           * At least this many authored pull requests merged, 2011 through October 2025.
           * @minimum 1
           */
          min_merged_pull_requests?: number;
          /**
           * At least this many pushes in the 12 months before the index was built.
           * @minimum 1
           */
          min_recent_pushes?: number;
          /**
           * Public activity on or after this date.
           * @format date
           */
          active_since?: string;
          /**
           * One of the account's ten most-used languages, for example Rust.
           * @minLength 1
           * @maxLength 50
           */
          language?: string;
          /** Keep likely bot, CI, and release accounts, which are left out unless login is given. */
          include_automation?: boolean;
          /** relevance, or most commits, merged pull requests, recent pushes (recent_activity), or latest activity (last_active) first. */
          sort?: "relevance" | "commits" | "merged_pull_requests" | "recent_activity" | "last_active";
          /**
           * limit.
           * @minimum 1
           * @maximum 10
           */
          limit?: number;
          /**
           * Results to skip; below 1000.
           * @minimum 0
           * @maximum 999
           */
          offset?: number;
          /** Hard filters on the linked LinkedIn profile, as in POST /v1/search: one value, or any_of and none_of lists. */
          linkedin?: {
            /** title. */
            title?: string | {
              /**
               * any of.
               * @minItems 1
               * @maxItems 10
               */
              any_of?: Array<string>;
              /**
               * none of.
               * @minItems 1
               * @maxItems 10
               */
              none_of?: Array<string>;
            };
            /** seniority. */
            seniority?: string | {
              /**
               * any of.
               * @minItems 1
               * @maxItems 10
               */
              any_of?: Array<string>;
              /**
               * none of.
               * @minItems 1
               * @maxItems 10
               */
              none_of?: Array<string>;
            };
            /** company. */
            company?: string | {
              /**
               * any of.
               * @minItems 1
               * @maxItems 10
               */
              any_of?: Array<string>;
              /**
               * none of.
               * @minItems 1
               * @maxItems 10
               */
              none_of?: Array<string>;
            };
            /** industry. */
            industry?: string | {
              /**
               * any of.
               * @minItems 1
               * @maxItems 10
               */
              any_of?: Array<string>;
              /**
               * none of.
               * @minItems 1
               * @maxItems 10
               */
              none_of?: Array<string>;
            };
            /** location. */
            location?: string | {
              /**
               * any of.
               * @minItems 1
               * @maxItems 10
               */
              any_of?: Array<string>;
              /**
               * none of.
               * @minItems 1
               * @maxItems 10
               */
              none_of?: Array<string>;
              /**
               * countries.
               * @minItems 1
               * @maxItems 10
               */
              countries?: Array<string>;
              /**
               * cities.
               * @minItems 1
               * @maxItems 10
               */
              cities?: Array<string>;
            };
          };
          /** Drop accounts that could not be tied to a LinkedIn profile. */
          require_linkedin?: boolean;
        };
        /**
         * Reuse for retries of the same request to prevent duplicate charges.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** results. */
          results: Array<{
            /** github. */
            github: {
              /** login. */
              login: string;
              /** github id. */
              github_id: number;
              /** type. */
              type: string;
              /** company. */
              company: string;
              /** hireable. */
              hireable: boolean;
              /** has email. */
              has_email: boolean;
              /** site admin. */
              site_admin: boolean;
              /** github star. */
              github_star: boolean;
              /**
               * Up to 100 repositories worked on (owner/name). The repo filter searches all of them.
               * @maxItems 100
               */
              repos: Array<string>;
              /** repo count. */
              repo_count: number;
              /**
               * profile url.
               * @format uri
               */
              profile_url: string;
              /** Public activity from GH Archive; null when none is on record. Commits and pull requests cover 2011 through October 2025; pushes run to the index build. */
              activity: {
                /**
                 * commits.
                 * @minimum 0
                 */
                commits: number;
                /**
                 * pushes.
                 * @minimum 0
                 */
                pushes: number;
                /**
                 * pushes last 12m.
                 * @minimum 0
                 */
                pushes_last_12m: number;
                /**
                 * Pull requests opened by this account.
                 * @minimum 0
                 */
                pull_requests: number;
                /**
                 * Pull requests opened by this account and merged.
                 * @minimum 0
                 */
                merged_pull_requests: number;
                /**
                 * reviews.
                 * @minimum 0
                 */
                reviews: number;
                /**
                 * Months with at least one push, pull request, or review.
                 * @minimum 0
                 */
                active_months: number;
                /**
                 * first active at.
                 * @format date
                 */
                first_active_at: string;
                /**
                 * last active at.
                 * @format date
                 */
                last_active_at: string;
                /**
                 * Most-used languages, most first.
                 * @maxItems 10
                 */
                languages: Array<string>;
                /**
                 * top repos.
                 * @maxItems 10
                 */
                top_repos: Array<{
                  /** repo. */
                  repo: string;
                  /**
                   * commits.
                   * @minimum 0
                   */
                  commits: number;
                  /**
                   * pushes.
                   * @minimum 0
                   */
                  pushes: number;
                  /**
                   * pull requests.
                   * @minimum 0
                   */
                  pull_requests: number;
                  /**
                   * merged pull requests.
                   * @minimum 0
                   */
                  merged_pull_requests: number;
                  /**
                   * last active at.
                   * @format date
                   */
                  last_active_at: string;
                  [key: string]: unknown;
                }>;
                [key: string]: unknown;
              };
              /** Only with include_profiles: the live public profile, or null when GitHub returned none. */
              profile?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** linkedin. */
            linkedin: {
              /**
               * linkedin url.
               * @format uri
               */
              linkedin_url: string;
              /** name. */
              name: string;
              /** title. */
              title: string;
              /** company. */
              company: string;
              /** location. */
              location: string;
              /** seniority. */
              seniority: string;
              /** industry. */
              industry: string;
              /** False when the GitHub profile links a LinkedIn profile Ploid has not indexed yet. */
              indexed: boolean;
              [key: string]: unknown;
            };
            /** match. */
            match: {
              /** method. */
              method: "profile_link" | "name_company_location" | "name_company" | "name_location";
              /**
               * confidence.
               * @minimum 0
               * @maximum 1
               */
              confidence: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** returned. */
          returned: number;
          /** GitHub accounts this page examined; next_offset advances by this. */
          scanned: number;
          /** total. */
          total: Record<string, unknown>;
          /** offset. */
          offset: number;
          /** limit. */
          limit: number;
          /** next offset. */
          next_offset: number;
          [key: string]: unknown;
        };
        /** meta. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Structured LinkedIn people search by keywords, location, title, company, and school. Requires the linkedin:read scope. */
    "ploid.search_linkedin_people": {
      input: {
        /** Request body. */
        body: {
          /** filters. */
          filters?: {
            /**
             * keywords.
             * @maxLength 500
             */
            keywords?: string;
            /** location. */
            location?: string | Array<string>;
            /** title. */
            title?: string | Array<string>;
            /** currentCompany. */
            currentCompany?: string | Array<string>;
            /** school. */
            school?: string | Array<string>;
          };
          /**
           * limit.
           * @minimum 1
           * @maximum 100
           */
          limit?: number;
          /**
           * Pagination cursor from a previous response.
           * @maxLength 1000
           */
          cursor?: string;
        };
        /**
         * Idempotency key for replaying the same non-streaming request.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** items. */
          items: Array<{
            /** socialId. */
            socialId: string | null;
            /** publicIdentifier. */
            publicIdentifier: string | null;
            /** profileUrl. */
            profileUrl: string | null;
            /** fullName. */
            fullName: string;
            /** headline. */
            headline: string | null;
            /** location. */
            location: string | null;
            /** industry. */
            industry: string | null;
            /** profilePictureUrl. */
            profilePictureUrl: string | null;
            /** connectionDegree. */
            connectionDegree: 1 | 2 | 3 | null;
            [key: string]: unknown;
          }>;
          /** cursor. */
          cursor: string | null;
          /**
           * total.
           * @minimum 0
           */
          total: number | null;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * remaining credits.
           * @minimum 0
           */
          remaining_credits?: number;
          /** cursor. */
          cursor?: string | null;
          /** message. */
          message?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Return up to 10 basic indexed profiles matching all name terms plus optional company, location, and title filters. Requires people:search; legacy full-access keys with both people:enrich and agent:chat are accepted. Costs 1 ACU per completed search, including zero matches; failed searches are not charged. Never starts research or enrichment. Normal account billing, auto-recharge settings, and API-key spending caps apply. Send an Idempotency-Key to replay a request without another charge. Indexed identities and employment are unverified. Ask the user to choose before POST /v1/person, which costs 25 ACU unless the workspace already has active access. One bounded index request; no exhaustive count or pagination. Workspace limits: 30 requests/minute and 300/hour across keys. Active account eligibility still applies. */
    "ploid.search_people_candidates": {
      input: {
        /** Request body. */
        body: {
          /**
           * name.
           * @minLength 2
           * @maxLength 200
           */
          name: string;
          /**
           * company.
           * @minLength 1
           * @maxLength 200
           */
          company?: string;
          /**
           * location.
           * @minLength 1
           * @maxLength 200
           */
          location?: string;
          /**
           * title.
           * @minLength 1
           * @maxLength 200
           */
          title?: string;
          /**
           * limit.
           * @minimum 1
           * @maximum 10
           */
          limit?: number;
        };
        /**
         * Reuse for retries of the same request to prevent duplicate charges.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** source. */
          source: "ploid_people_index";
          /**
           * matches.
           * @maxItems 10
           */
          matches: Array<{
            /** person id. */
            person_id: string;
            /** name. */
            name: string;
            /** title. */
            title: string | null;
            /** company. */
            company: string | null;
            /** location. */
            location: string | null;
            /** linkedin url. */
            linkedin_url: string | null;
            /** profile url. */
            profile_url: string | null;
            /** identity verified. */
            identity_verified: false;
            [key: string]: unknown;
          }>;
          /**
           * returned.
           * @minimum 0
           * @maximum 10
           */
          returned: number;
          /**
           * limit.
           * @minimum 1
           * @maximum 10
           */
          limit: number;
          /** usage. */
          usage: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /** usage. */
          usage: Record<string, unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start an asynchronous dataset to fill up to 2000 rows with sourced column values. Requires people:search. */
    "ploid.start_dataset": {
      input: {
        /** Request body. */
        body: {
          /** entity. */
          entity: {
            /** type. */
            type: "person" | "company" | "custom";
          };
          /** Asynchronous mode; automatically supplied when omitted. */
          mode?: "async";
          /**
           * At most 25 rows for sync requests.
           * @minItems 1
           * @maxItems 2000
           */
          rows: Array<{
            /**
             * name.
             * @minLength 1
             * @maxLength 200
             */
            name?: string;
            /**
             * domain.
             * @minLength 1
             * @maxLength 253
             */
            domain?: string;
            /**
             * A LinkedIn person (/in/) or company (/company/) URL.
             * @minLength 1
             * @maxLength 500
             */
            linkedin_url?: string;
            /** Handles or profile URLs per platform, plus the subject's own website. */
            socials?: {
              /**
               * linkedin.
               * @minLength 1
               * @maxLength 500
               */
              linkedin?: string;
              /**
               * x.
               * @minLength 1
               * @maxLength 500
               */
              x?: string;
              /**
               * instagram.
               * @minLength 1
               * @maxLength 500
               */
              instagram?: string;
              /**
               * youtube.
               * @minLength 1
               * @maxLength 500
               */
              youtube?: string;
              /**
               * tiktok.
               * @minLength 1
               * @maxLength 500
               */
              tiktok?: string;
              /**
               * github.
               * @minLength 1
               * @maxLength 500
               */
              github?: string;
              /**
               * website.
               * @minLength 1
               * @maxLength 500
               */
              website?: string;
            };
            /**
             * email.
             * @maxLength 320
             * @format email
             */
            email?: string;
            /**
             * company.
             * @minLength 1
             * @maxLength 200
             */
            company?: string;
            /** Free-form hints, echoed back. */
            extra?: Record<string, string>;
          }>;
          /**
           * Keys must be unique.
           * @minItems 1
           * @maxItems 30
           */
          columns: Array<{
            /** A built-in field for the entity type, or custom.<name> (1-60 lowercase letters, digits, or underscores). */
            key: "name" | "domain" | "description" | "founded_year" | "headquarters" | "headcount" | "industry" | "linkedin_url" | "page_text" | "socials.linkedin" | "socials.x" | "socials.instagram" | "socials.youtube" | "socials.tiktok" | "socials.github" | "title" | "company" | "location" | "email.work" | "email.personal" | "phone" | "website" | string;
            /**
             * Required for custom.* columns: what to find.
             * @minLength 1
             * @maxLength 500
             */
            description?: string;
            /** custom.* only; defaults to text. Built-in fields have a fixed format. */
            format?: "text" | "date" | "number" | "options" | "email" | "phone" | "url" | "boolean" | "range" | "currency";
            /**
             * page_text only; defaults to 3000.
             * @minimum 200
             * @maximum 20000
             */
            max_chars?: number;
          }>;
          /**
           * Sync only: cells not filled by then return status timeout. Ignored for async.
           * @minimum 1000
           * @maximum 60000
           */
          deadline_ms?: number;
          /** Oldest cached evidence reused without a live read; 0 re-reads everything. Omitted, each field uses its own window. */
          freshness?: {
            /**
             * max age days.
             * @minimum 0
             * @maximum 3650
             */
            max_age_days: number;
          };
          /** Also return the best value of unverified cells, with its confidence and evidence. They keep status unverified and are not billed; confidence folds in how likely the profile is the row's subject. */
          include_unverified?: boolean;
        };
        /**
         * Recommended on non-streaming POSTs. Reusing the same key and authenticated request within 24 hours replays the original response and bills once. Live SSE responses reject this header; use a durable async run for replayable work.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** dataset. */
          dataset: Record<string, unknown>;
          /** rows. */
          rows: Array<{
            /** id. */
            id: string;
            /**
             * index.
             * @minimum 0
             */
            index: number;
            /** status. */
            status: "pending" | "completed" | "failed";
            /** Identifies one row's subject. At least one of name, domain, linkedin_url, email, or a socials value is required. */
            seed: {
              /**
               * name.
               * @minLength 1
               * @maxLength 200
               */
              name?: string;
              /**
               * domain.
               * @minLength 1
               * @maxLength 253
               */
              domain?: string;
              /**
               * A LinkedIn person (/in/) or company (/company/) URL.
               * @minLength 1
               * @maxLength 500
               */
              linkedin_url?: string;
              /** Handles or profile URLs per platform, plus the subject's own website. */
              socials?: {
                /**
                 * linkedin.
                 * @minLength 1
                 * @maxLength 500
                 */
                linkedin?: string;
                /**
                 * x.
                 * @minLength 1
                 * @maxLength 500
                 */
                x?: string;
                /**
                 * instagram.
                 * @minLength 1
                 * @maxLength 500
                 */
                instagram?: string;
                /**
                 * youtube.
                 * @minLength 1
                 * @maxLength 500
                 */
                youtube?: string;
                /**
                 * tiktok.
                 * @minLength 1
                 * @maxLength 500
                 */
                tiktok?: string;
                /**
                 * github.
                 * @minLength 1
                 * @maxLength 500
                 */
                github?: string;
                /**
                 * website.
                 * @minLength 1
                 * @maxLength 500
                 */
                website?: string;
                [key: string]: unknown;
              };
              /**
               * email.
               * @maxLength 320
               * @format email
               */
              email?: string;
              /**
               * company.
               * @minLength 1
               * @maxLength 200
               */
              company?: string;
              /** Free-form hints, echoed back. */
              extra?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** One cell per requested column key. */
            cells: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * acu charged.
           * @minimum 0
           */
          acu_charged: number;
          /**
           * Upper bound if every requested cell were found; reserved against the API key budget.
           * @minimum 0
           */
          max_credits: number;
          /** remaining credits. */
          remaining_credits?: number;
          /** remaining acu. */
          remaining_acu?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      } | {
        /** data. */
        data: {
          /** dataset. */
          dataset: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * acu charged.
           * @minimum 0
           */
          acu_charged: number;
          /**
           * Upper bound if every requested cell were found; reserved against the API key budget.
           * @minimum 0
           */
          max_credits: number;
          /** remaining credits. */
          remaining_credits?: number;
          /** remaining acu. */
          remaining_acu?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve up to 150 people inline per request; async:true or a larger num_results starts a background People Set instead and returns 202 with set_id, items_url and events_url. instant returns indexed candidates as ranked by the index. fast compiles the query, reads a pool of at least 200 indexed candidates (three times num_results when that is larger) and ranks them by the stated role, place, employer, keywords, industry and seniority before returning the first num_results, without web verification. auto and deep research the complete query and explicit filters before returning matches with verification references; uncertain and rejected candidates are excluded from results, grounding and billing. Auto/deep compile the query, verify candidates, and run one bounded web recovery pass when too few match. Each verification pass permits up to 30 seconds for auto or 45 seconds for deep; recovery discovery permits 45 or 60 seconds respectively; the whole verification stage answers within 60 seconds for auto and 120 seconds for deep. A partial status means the requested count was not filled or verification hit its deadline; coverage.has_more says more candidates remained. Use Sets for durable research of large result sets. Verification is evidence-based model assessment, separate from identity verification. Requires people:search. */
    "ploid.sync_people_search": {
      input: {
        /** Request body. */
        body: {
          /**
           * query.
           * @minLength 1
           */
          query: string;
          [key: string]: unknown;
        } | {
          /** filters. */
          filters: Record<string, unknown>;
          [key: string]: unknown;
        };
        /**
         * Recommended on non-streaming POSTs. Reusing the same key and authenticated request within 24 hours replays the original response and bills once. Live SSE responses reject this header; use a durable async run for replayable work.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** results. */
          results: Array<{
            /** url. */
            url: string | null;
            /** title. */
            title: string | null;
            /** Relative rank within this response on a 0..1 scale; 1 is the strongest match. */
            score: number | null;
            /** Only resolved people are returned. Requested profile fields are present when selected and may be null when the people index has no value. */
            person: {
              /** Stable Ploid identity. Deep person enrichment currently requires a linked LinkedIn profile. */
              person_id: string;
              /** name. */
              name?: string | null;
              /** title. */
              title?: string | null;
              /** company. */
              company?: string | null;
              /** location. */
              location?: string | null;
              /** linkedin url. */
              linkedin_url?: string | null;
              /** Canonical public profile or individual biography when discovered outside LinkedIn. */
              profile_url?: string;
              /**
               * Relative rank within this response on a 0..1 scale; 1 is the strongest match.
               * @minimum 0
               * @maximum 1
               */
              confidence: number | null;
              /** LinkedIn contact fields can be resolved through POST /v1/enrich. Results without LinkedIn report unavailable. */
              contact_status: "requires_enrichment" | "unavailable";
              /** Known public accounts by platform. */
              socials?: Record<string, unknown>;
              /** identity verified. */
              identity_verified: false;
              /** Always ploid. The other values are kept so clients built against earlier versions still parse. */
              resolution_source: "ploid" | "ploid_people_index" | "public_web";
              /** Verified searches with a location: whether the person's own location names the requested place or only lies inside it. */
              location_match?: "exact" | "metro";
              [key: string]: unknown;
            };
            /** One entry per requested filter, keyed by field (title, company) or path (experience.past_companies). indexed_field entries were checked against the stored profile; verified_evidence entries were proven by research, with matching evidence in verification. */
            filter_match?: Record<string, unknown>;
            /** verification. */
            verification?: Array<{
              /** criterionId. */
              criterionId: string;
              /** criterion. */
              criterion: string;
              /** status. */
              status: "satisfied";
              /** reasoning. */
              reasoning: string;
              /** references. */
              references: Array<{
                /** url. */
                url?: string;
                /** source. */
                source: string;
                /** quote. */
                quote: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** Bare-name searches: further verified people with the requested name. Not billed. */
          namesakes?: Array<{
            /** url. */
            url: string | null;
            /** title. */
            title: string | null;
            /** Relative rank within this response on a 0..1 scale; 1 is the strongest match. */
            score: number | null;
            /** Only resolved people are returned. Requested profile fields are present when selected and may be null when the people index has no value. */
            person: {
              /** Stable Ploid identity. Deep person enrichment currently requires a linked LinkedIn profile. */
              person_id: string;
              /** name. */
              name?: string | null;
              /** title. */
              title?: string | null;
              /** company. */
              company?: string | null;
              /** location. */
              location?: string | null;
              /** linkedin url. */
              linkedin_url?: string | null;
              /** Canonical public profile or individual biography when discovered outside LinkedIn. */
              profile_url?: string;
              /**
               * Relative rank within this response on a 0..1 scale; 1 is the strongest match.
               * @minimum 0
               * @maximum 1
               */
              confidence: number | null;
              /** LinkedIn contact fields can be resolved through POST /v1/enrich. Results without LinkedIn report unavailable. */
              contact_status: "requires_enrichment" | "unavailable";
              /** Known public accounts by platform. */
              socials?: Record<string, unknown>;
              /** identity verified. */
              identity_verified: false;
              /** Always ploid. The other values are kept so clients built against earlier versions still parse. */
              resolution_source: "ploid" | "ploid_people_index" | "public_web";
              /** Verified searches with a location: whether the person's own location names the requested place or only lies inside it. */
              location_match?: "exact" | "metro";
              [key: string]: unknown;
            };
            /** One entry per requested filter, keyed by field (title, company) or path (experience.past_companies). indexed_field entries were checked against the stored profile; verified_evidence entries were proven by research, with matching evidence in verification. */
            filter_match?: Record<string, unknown>;
            /** verification. */
            verification?: Array<{
              /** criterionId. */
              criterionId: string;
              /** criterion. */
              criterion: string;
              /** status. */
              status: "satisfied";
              /** reasoning. */
              reasoning: string;
              /** references. */
              references: Array<{
                /** url. */
                url?: string;
                /** source. */
                source: string;
                /** quote. */
                quote: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** disambiguation. */
          disambiguation?: "bare_name";
          /** grounding. */
          grounding: Record<string, unknown>;
          /**
           * Index search duration.
           * @minimum 0
           */
          search_time_ms: number;
          /**
           * Total search processing time, including planning, retrieval and verification.
           * @minimum 0
           */
          total_time_ms?: number;
          /**
           * rows indexed.
           * @minimum 0
           */
          rows_indexed: number;
          /** verification. */
          verification?: Record<string, unknown>;
          /** coverage. */
          coverage: Record<string, unknown>;
          /** request. */
          request: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * remaining credits.
           * @minimum 0
           */
          remaining_credits?: number;
          /** cursor. */
          cursor?: string | null;
          /** message. */
          message?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      } | {
        /** data. */
        data: {
          /** mode. */
          mode: "async";
          /** set id. */
          set_id: string;
          /** search id. */
          search_id: string;
          /** status. */
          status: "running";
          /** Criteria every admitted row is verified against. */
          criteria: Array<string>;
          /** Estimate; billing settles on admitted rows. */
          pricing: Record<string, unknown>;
          /** set url. */
          set_url: string;
          /** Page admitted rows, usable while the search runs. */
          items_url: string;
          /** Server-sent progress events. */
          events_url: string;
          /** request. */
          request: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          /**
           * credits charged.
           * @minimum 0
           */
          credits_charged: number;
          /**
           * remaining credits.
           * @minimum 0
           */
          remaining_credits?: number;
          /** cursor. */
          cursor?: string | null;
          /** message. */
          message?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Dry run. Fetches the monitor's targets now, judges recent activity against the query, and returns up to max_items_per_run relevant items, newest first. Nothing is saved: no run, no items, no seen-ledger or snapshot change, no webhooks, and the schedule is untouched. `already_seen` marks items an earlier run already recorded, which a real run would not send again. Works before and after the baseline. Costs 1 ACU per target fetched; no item or output-extraction charge (items carry `source`, not `output`). */
    "ploid.test_monitor": {
      input: {
        /**
         * id.
         * @minLength 1
         */
        id: string;
        /**
         * Idempotency key for replaying the same non-streaming request.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** object. */
          object?: "monitor_test";
          /** monitor id. */
          monitor_id?: string;
          /** Activity fetched across all targets. */
          candidates?: number;
          /** Candidates that passed the relevance check; items holds the newest max_items_per_run of them. */
          relevant?: number;
          /** items. */
          items?: Array<{
            /** object. */
            object?: "monitor_test_item";
            /** platform. */
            platform?: "linkedin" | "x" | "instagram" | "tiktok";
            /** event. */
            event?: "post.created" | "engagement.created" | "profile.changed" | "company.changed" | "job.posted";
            /** target. */
            target?: {
              /** id. */
              id?: string;
              /** kind. */
              kind?: string | null;
              /** identifier. */
              identifier?: string | null;
              [key: string]: unknown;
            };
            /** url. */
            url?: string | null;
            /**
             * occurred at.
             * @format date-time
             */
            occurred_at?: string | null;
            /** relevance. */
            relevance?: {
              /** score. */
              score?: number;
              /** reason. */
              reason?: string;
              [key: string]: unknown;
            } | null;
            /** An earlier run already recorded this item, so a real run would not send it again. */
            already_seen?: boolean;
            /** source. */
            source?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** targets. */
          targets?: Array<{
            /** id. */
            id?: string;
            /** platform. */
            platform?: "linkedin" | "x" | "instagram" | "tiktok";
            /** kind. */
            kind?: string;
            /** identifier. */
            identifier?: string;
            /** ok. */
            ok?: boolean;
            /** error. */
            error?: string | null;
            [key: string]: unknown;
          }>;
          /** acu charged. */
          acu_charged?: number;
          /**
           * tested at.
           * @format date-time
           */
          tested_at?: string;
          [key: string]: unknown;
        };
        /** meta. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Posts a `monitor.webhook.test` event to webhook_url right away, signed with webhook_secret when set, and returns the HTTP outcome. One attempt, no retries, no ACU. */
    "ploid.test_monitor_webhook": {
      input: {
        /**
         * id.
         * @minLength 1
         */
        id: string;
        /**
         * Idempotency key for replaying the same non-streaming request.
         * @maxLength 255
         */
        idempotencyKey?: string;
      };
      output: {
        /** data. */
        data: {
          /** object. */
          object?: "monitor_webhook_test";
          /** monitor id. */
          monitor_id?: string;
          /** url. */
          url?: string;
          /** event. */
          event?: "monitor.webhook.test";
          /** delivered. */
          delivered?: boolean;
          /** status code. */
          status_code?: number | null;
          /** attempts. */
          attempts?: number;
          /** duration ms. */
          duration_ms?: number;
          /** error. */
          error?: string | null;
          /** signed. */
          signed?: boolean;
          /**
           * sent at.
           * @format date-time
           */
          sent_at?: string;
          [key: string]: unknown;
        };
        /** meta. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Requires account:write. */
    "ploid.update_account_profile": {
      input: {
        /** Request body. */
        body: {
          /**
           * first name.
           * @minLength 1
           * @maxLength 80
           */
          first_name: string;
          /**
           * last name.
           * @maxLength 80
           */
          last_name: string;
          /** image url. */
          image_url: string | null;
          /**
           * linkedin url.
           * @format uri
           */
          linkedin_url: string | null;
          /**
           * twitter url.
           * @format uri
           */
          twitter_url: string | null;
          /**
           * github url.
           * @format uri
           */
          github_url: string | null;
        };
      };
      output: {
        /** data. */
        data: {
          /**
           * email.
           * @format email
           */
          email: string;
          /**
           * first name.
           * @maxLength 80
           */
          first_name: string;
          /**
           * last name.
           * @maxLength 80
           */
          last_name: string;
          /** image url. */
          image_url: string | null;
          /**
           * linkedin url.
           * @format uri
           */
          linkedin_url: string | null;
          /**
           * twitter url.
           * @format uri
           */
          twitter_url: string | null;
          /**
           * github url.
           * @format uri
           */
          github_url: string | null;
          [key: string]: unknown;
        };
        /** meta. */
        meta: {
          /** request id. */
          request_id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Changing `query` recompiles the plan; passing `plan` replaces the targets. Either starts a new baseline run. */
    "ploid.update_monitor": {
      input: {
        /** Request body. */
        body: {
          /**
           * name.
           * @maxLength 120
           */
          name?: string;
          /** status. */
          status?: "active" | "paused";
          /**
           * query.
           * @maxLength 1000
           */
          query?: string;
          /** schedule. */
          schedule?: {
            /** preset. */
            preset: "hourly" | "daily" | "weekly";
            /** timezone. */
            timezone?: string;
          } | {
            /** Five-field cron. The minute field must be a single value, so runs happen at most hourly. */
            cron: string;
            /** timezone. */
            timezone?: string;
          };
          /** output. */
          output?: {
            /** `text` returns `{ summary }` per item. `object` returns the schema you give or one derived from the query. */
            type: "text" | "object";
            /** JSON Schema with an object root, at most 25 properties. */
            schema?: Record<string, unknown>;
            /** Describe the fields in prose, or paste example JSON or a JSON Schema, to derive `schema`. */
            description?: string;
            [key: string]: unknown;
          };
          /** plan. */
          plan?: {
            /**
             * targets.
             * @minItems 1
             * @maxItems 10
             */
            targets: Array<{
              /** platform. */
              platform: "linkedin" | "x" | "instagram" | "tiktok";
              /** `company` is LinkedIn-only; elsewhere brand accounts are profiles. */
              kind: "profile" | "company" | "keyword" | "hashtag";
              /** Profile or company URL or @handle; search terms for keyword; tag without # for hashtag. Instagram supports hashtags but not keyword search. */
              identifier: string;
              /** Defaults to posts. Topics support posts only. */
              events?: Array<"posts" | "engagement" | "profile" | "company">;
              [key: string]: unknown;
            }>;
            /** Every item must satisfy this to be emitted. Null emits all new activity. */
            relevance_criteria?: string | null;
            [key: string]: unknown;
          };
          /**
           * webhook url.
           * @format uri
           */
          webhook_url?: string | null;
          /**
           * webhook secret.
           * @minLength 16
           * @maxLength 256
           */
          webhook_secret?: string | null;
          /**
           * max items per run.
           * @minimum 1
           * @maximum 100
           */
          max_items_per_run?: number;
          [key: string]: unknown;
        };
        /**
         * id.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** data. */
        data: {
          /** object. */
          object?: "monitor";
          /** id. */
          id?: string;
          /** name. */
          name?: string;
          /** query. */
          query?: string;
          /** status. */
          status?: "active" | "paused" | "disabled";
          /** schedule. */
          schedule?: Record<string, unknown>;
          /** targets. */
          targets?: Array<({
            /** platform. */
            platform: "linkedin" | "x" | "instagram" | "tiktok";
            /** `company` is LinkedIn-only; elsewhere brand accounts are profiles. */
            kind: "profile" | "company" | "keyword" | "hashtag";
            /** Profile or company URL or @handle; search terms for keyword; tag without # for hashtag. Instagram supports hashtags but not keyword search. */
            identifier: string;
            /** Defaults to posts. Topics support posts only. */
            events?: Array<"posts" | "engagement" | "profile" | "company">;
            [key: string]: unknown;
          }) & ({
            /** id. */
            id?: string;
            [key: string]: unknown;
          })>;
          /** relevance criteria. */
          relevance_criteria?: string | null;
          /** output. */
          output?: Record<string, unknown>;
          /** webhook url. */
          webhook_url?: string | null;
          /** webhook secret set. */
          webhook_secret_set?: boolean;
          /** max items per run. */
          max_items_per_run?: number;
          /**
           * baseline at.
           * @format date-time
           */
          baseline_at?: string | null;
          /**
           * last run at.
           * @format date-time
           */
          last_run_at?: string | null;
          /**
           * next run at.
           * @format date-time
           */
          next_run_at?: string | null;
          /**
           * created at.
           * @format date-time
           */
          created_at?: string;
          /**
           * updated at.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** meta. */
        meta: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
