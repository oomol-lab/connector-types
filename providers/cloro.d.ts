import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete all QUEUED tasks in the organization. Processing, completed and failed tasks are unaffected. */
    "cloro.clear_queue": {
      input: Record<string, never>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Number of removed queued tasks. */
        cleared: number;
        [key: string]: unknown;
      };
    };
    /** Submit up to 500 monitoring tasks. Each task is validated independently upstream; inspect results for partial failures. */
    "cloro.create_batch_tasks": {
      input: {
        /**
         * Tasks in submission order.
         * @minItems 1
         * @maxItems 500
         */
        tasks: Array<{
          /** Task engine. */
          taskType: "CHATGPT";
          /** ChatGPT monitoring parameters. */
          payload: (unknown);
          /**
           * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
           * @minimum 1
           * @maximum 10
           */
          priority?: number;
          /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
          idempotencyKey?: string;
          /** Optional completion webhook delivered by Cloro. */
          webhook?: {
            /**
             * Webhook destination URL.
             * @format uri
             */
            url: string;
          };
        } | {
          /** Task engine. */
          taskType: "GEMINI";
          /** Gemini monitoring parameters. */
          payload: (unknown);
          /**
           * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
           * @minimum 1
           * @maximum 10
           */
          priority?: number;
          /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
          idempotencyKey?: string;
          /** Optional completion webhook delivered by Cloro. */
          webhook?: {
            /**
             * Webhook destination URL.
             * @format uri
             */
            url: string;
          };
        } | {
          /** Task engine. */
          taskType: "GOOGLE";
          /** Google monitoring parameters. */
          payload: Record<string, unknown>;
          /**
           * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
           * @minimum 1
           * @maximum 10
           */
          priority?: number;
          /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
          idempotencyKey?: string;
          /** Optional completion webhook delivered by Cloro. */
          webhook?: {
            /**
             * Webhook destination URL.
             * @format uri
             */
            url: string;
          };
        } | {
          /** Task engine. */
          taskType: "GOOGLE_NEWS";
          /** GoogleNews monitoring parameters. */
          payload: Record<string, unknown>;
          /**
           * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
           * @minimum 1
           * @maximum 10
           */
          priority?: number;
          /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
          idempotencyKey?: string;
          /** Optional completion webhook delivered by Cloro. */
          webhook?: {
            /**
             * Webhook destination URL.
             * @format uri
             */
            url: string;
          };
        } | {
          /** Task engine. */
          taskType: "COPILOT";
          /** Copilot monitoring parameters. */
          payload: (unknown);
          /**
           * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
           * @minimum 1
           * @maximum 10
           */
          priority?: number;
          /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
          idempotencyKey?: string;
          /** Optional completion webhook delivered by Cloro. */
          webhook?: {
            /**
             * Webhook destination URL.
             * @format uri
             */
            url: string;
          };
        } | {
          /** Task engine. */
          taskType: "PERPLEXITY";
          /** Perplexity monitoring parameters. */
          payload: (unknown);
          /**
           * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
           * @minimum 1
           * @maximum 10
           */
          priority?: number;
          /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
          idempotencyKey?: string;
          /** Optional completion webhook delivered by Cloro. */
          webhook?: {
            /**
             * Webhook destination URL.
             * @format uri
             */
            url: string;
          };
        } | {
          /** Task engine. */
          taskType: "AIMODE";
          /** AiMode monitoring parameters. */
          payload: Record<string, unknown>;
          /**
           * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
           * @minimum 1
           * @maximum 10
           */
          priority?: number;
          /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
          idempotencyKey?: string;
          /** Optional completion webhook delivered by Cloro. */
          webhook?: {
            /**
             * Webhook destination URL.
             * @format uri
             */
            url: string;
          };
        } | {
          /** Task engine. */
          taskType: "GOOGLE_PRODUCT";
          /** GoogleProduct request parameters. */
          payload: {
            /**
             * The `productResultToken` from a Google Search shopping card, or from a Google AI Mode shopping card or inline product. The token carries the query, locale and location of the request that issued it, so the request takes no other field.
             * @minLength 1
             * @maxLength 512
             */
            productResultToken: string;
          };
          /**
           * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
           * @minimum 1
           * @maximum 10
           */
          priority?: number;
          /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
          idempotencyKey?: string;
          /** Optional completion webhook delivered by Cloro. */
          webhook?: {
            /**
             * Webhook destination URL.
             * @format uri
             */
            url: string;
          };
        }>;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Batch totals. */
        summary: {
          /** Total tasks. */
          total: number;
          /** Accepted tasks. */
          succeeded: number;
          /** Rejected tasks. */
          failed: number;
          [key: string]: unknown;
        };
        /** Per-task success or failure in original index order. */
        results: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Submit a native asynchronous monitoring task. Use get_task for the result; priority, idempotency and webhooks are supported. */
    "cloro.create_task": {
      input: {
        /** Task engine. */
        taskType: "CHATGPT";
        /** ChatGPT monitoring parameters. */
        payload: (unknown);
        /**
         * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
         * @minimum 1
         * @maximum 10
         */
        priority?: number;
        /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
        idempotencyKey?: string;
        /** Optional completion webhook delivered by Cloro. */
        webhook?: {
          /**
           * Webhook destination URL.
           * @format uri
           */
          url: string;
        };
      } | {
        /** Task engine. */
        taskType: "GEMINI";
        /** Gemini monitoring parameters. */
        payload: (unknown);
        /**
         * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
         * @minimum 1
         * @maximum 10
         */
        priority?: number;
        /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
        idempotencyKey?: string;
        /** Optional completion webhook delivered by Cloro. */
        webhook?: {
          /**
           * Webhook destination URL.
           * @format uri
           */
          url: string;
        };
      } | {
        /** Task engine. */
        taskType: "GOOGLE";
        /** Google monitoring parameters. */
        payload: Record<string, unknown>;
        /**
         * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
         * @minimum 1
         * @maximum 10
         */
        priority?: number;
        /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
        idempotencyKey?: string;
        /** Optional completion webhook delivered by Cloro. */
        webhook?: {
          /**
           * Webhook destination URL.
           * @format uri
           */
          url: string;
        };
      } | {
        /** Task engine. */
        taskType: "GOOGLE_NEWS";
        /** GoogleNews monitoring parameters. */
        payload: Record<string, unknown>;
        /**
         * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
         * @minimum 1
         * @maximum 10
         */
        priority?: number;
        /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
        idempotencyKey?: string;
        /** Optional completion webhook delivered by Cloro. */
        webhook?: {
          /**
           * Webhook destination URL.
           * @format uri
           */
          url: string;
        };
      } | {
        /** Task engine. */
        taskType: "COPILOT";
        /** Copilot monitoring parameters. */
        payload: (unknown);
        /**
         * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
         * @minimum 1
         * @maximum 10
         */
        priority?: number;
        /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
        idempotencyKey?: string;
        /** Optional completion webhook delivered by Cloro. */
        webhook?: {
          /**
           * Webhook destination URL.
           * @format uri
           */
          url: string;
        };
      } | {
        /** Task engine. */
        taskType: "PERPLEXITY";
        /** Perplexity monitoring parameters. */
        payload: (unknown);
        /**
         * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
         * @minimum 1
         * @maximum 10
         */
        priority?: number;
        /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
        idempotencyKey?: string;
        /** Optional completion webhook delivered by Cloro. */
        webhook?: {
          /**
           * Webhook destination URL.
           * @format uri
           */
          url: string;
        };
      } | {
        /** Task engine. */
        taskType: "AIMODE";
        /** AiMode monitoring parameters. */
        payload: Record<string, unknown>;
        /**
         * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
         * @minimum 1
         * @maximum 10
         */
        priority?: number;
        /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
        idempotencyKey?: string;
        /** Optional completion webhook delivered by Cloro. */
        webhook?: {
          /**
           * Webhook destination URL.
           * @format uri
           */
          url: string;
        };
      } | {
        /** Task engine. */
        taskType: "GOOGLE_PRODUCT";
        /** GoogleProduct request parameters. */
        payload: {
          /**
           * The `productResultToken` from a Google Search shopping card, or from a Google AI Mode shopping card or inline product. The token carries the query, locale and location of the request that issued it, so the request takes no other field.
           * @minLength 1
           * @maxLength 512
           */
          productResultToken: string;
        };
        /**
         * Priority from 1 to 10; higher runs first. Defaults to 1. Use high priority for product tokens that expire after five minutes.
         * @minimum 1
         * @maximum 10
         */
        priority?: number;
        /** Account-wide unique key to prevent duplicate task submission. Reuse returns a conflict rather than creating another task. */
        idempotencyKey?: string;
        /** Optional completion webhook delivered by Cloro. */
        webhook?: {
          /**
           * Webhook destination URL.
           * @format uri
           */
          url: string;
        };
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Task identity and state. */
        task: {
          /**
           * Task ID.
           * @format uuid
           */
          id: string;
          /** Task engine. */
          taskType: string;
          /** Task state: QUEUED, PROCESSING, COMPLETED or FAILED. */
          status: string;
          /** Task priority. */
          priority: number;
          /** Task creation timestamp. */
          createdAt: string;
          [key: string]: unknown;
        };
        /** Task credit usage reported by Cloro. */
        credits: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read organization credit balance and billing cycle. Values can be cached for up to 60 seconds. */
    "cloro.get_credits": {
      input: Record<string, never>;
      output: {
        /** Remaining credits. */
        remaining: number;
        /** Credits per billing cycle; null without a subscription. */
        perCycle: number | null;
        /** Cycle reset timestamp; null without a subscription. */
        cycleResetsAt: string | null;
        [key: string]: unknown;
      };
    };
    /** Read queued and processing task counts and concurrency usage. */
    "cloro.get_queue_status": {
      input: Record<string, never>;
      output: {
        /** Queued task count. */
        queuedTasks: number;
        /** Processing task count. */
        processingTasks: number;
        /** Queue counts by priority. */
        priorityBreakdown: Array<{
          /** Task priority. */
          priority: number;
          /** Queued task count. */
          count: number;
          [key: string]: unknown;
        }>;
        /** Concurrency usage. */
        concurrency?: {
          /** Used slots. */
          used: number;
          /** Maximum slots. */
          max: number;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Read task status and final engine response. Failed task details remain available in response. */
    "cloro.get_task": {
      input: {
        /**
         * Task ID.
         * @format uuid
         */
        taskId: string;
      };
      output: {
        /** Task identity and state. */
        task: {
          /**
           * Task ID.
           * @format uuid
           */
          id: string;
          /** Task engine. */
          taskType: string;
          /** Task state: QUEUED, PROCESSING, COMPLETED or FAILED. */
          status: string;
          /** Task priority. */
          priority: number;
          /** Task creation timestamp. */
          createdAt: string;
          [key: string]: unknown;
        };
        /** Task credit usage reported by Cloro. */
        credits: Record<string, unknown>;
        /** Completed engine response or failed task error, including its code, message and details. */
        response?: Record<string, unknown>;
        /** Webhook delivery status, if configured. */
        webhook?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List supported country codes, optionally filtered by engine. */
    "cloro.list_countries": {
      input: {
        /** Engine filter. */
        model?: "aimode" | "aioverview" | "chatgpt" | "copilot" | "gemini" | "google" | "perplexity";
      };
      output: {
        /** Country codes. */
        countries: Array<string>;
        [key: string]: unknown;
      };
    };
    /** List supported US states. Other country codes return an empty list. */
    "cloro.list_states": {
      input: {
        /**
         * Uppercase ISO country code. Only US returns states.
         * @pattern ^[A-Z]{2}$
         */
        country: string;
      };
      output: {
        /** States. */
        states: Array<{
          /** USPS state code. */
          code: string;
          /** State name. */
          name: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve Google AI Mode results synchronously. For long-running or bulk work, use create_task or create_batch_tasks. Sync calls include a credit surcharge; Google product tokens expire after five minutes. */
    "cloro.monitor_aimode": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Structured result, or one result per ChatGPT conversation turn. */
        result: Record<string, unknown> | Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Retrieve ChatGPT results synchronously. For long-running or bulk work, use create_task or create_batch_tasks. Sync calls include a credit surcharge; Google product tokens expire after five minutes. */
    "cloro.monitor_chatgpt": {
      input: (unknown);
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Structured result, or one result per ChatGPT conversation turn. */
        result: Record<string, unknown> | Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Retrieve Copilot results synchronously. For long-running or bulk work, use create_task or create_batch_tasks. Sync calls include a credit surcharge; Google product tokens expire after five minutes. */
    "cloro.monitor_copilot": {
      input: (unknown);
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Structured result, or one result per ChatGPT conversation turn. */
        result: Record<string, unknown> | Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Retrieve Gemini results synchronously. For long-running or bulk work, use create_task or create_batch_tasks. Sync calls include a credit surcharge; Google product tokens expire after five minutes. */
    "cloro.monitor_gemini": {
      input: (unknown);
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Structured result, or one result per ChatGPT conversation turn. */
        result: Record<string, unknown> | Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Retrieve Google Search results synchronously. For long-running or bulk work, use create_task or create_batch_tasks. Sync calls include a credit surcharge; Google product tokens expire after five minutes. */
    "cloro.monitor_google": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Structured result, or one result per ChatGPT conversation turn. */
        result: Record<string, unknown> | Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Retrieve Google News results synchronously. For long-running or bulk work, use create_task or create_batch_tasks. Sync calls include a credit surcharge; Google product tokens expire after five minutes. */
    "cloro.monitor_google_news": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Structured result, or one result per ChatGPT conversation turn. */
        result: Record<string, unknown> | Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Retrieve Google product details results synchronously. For long-running or bulk work, use create_task or create_batch_tasks. Sync calls include a credit surcharge; Google product tokens expire after five minutes. */
    "cloro.monitor_google_product": {
      input: {
        /**
         * The `productResultToken` from a Google Search shopping card, or from a Google AI Mode shopping card or inline product. The token carries the query, locale and location of the request that issued it, so the request takes no other field.
         * @minLength 1
         * @maxLength 512
         */
        productResultToken: string;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Structured result, or one result per ChatGPT conversation turn. */
        result: Record<string, unknown> | Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Retrieve Perplexity results synchronously. For long-running or bulk work, use create_task or create_batch_tasks. Sync calls include a credit surcharge; Google product tokens expire after five minutes. */
    "cloro.monitor_perplexity": {
      input: (unknown);
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Structured result, or one result per ChatGPT conversation turn. */
        result: Record<string, unknown> | Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Resolve a Google redirect link through Cloro without consuming credits. */
    "cloro.resolve_google_link": {
      input: {
        /**
         * The Google redirect link to resolve, as an absolute URL. Must be a `google.com` or `www.google.com` link with a `/goto` or `/url` path — the form shipped as `redirectLink` beside every resolved link on Google Search, Google News, and AI Mode responses.
         * @format uri
         */
        url: string;
      };
      output: {
        /** Resolved destination URL. */
        url: string;
        [key: string]: unknown;
      };
    };
  }
}
