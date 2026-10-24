import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Ask the workspace assistant a question; the assistant may use workspace tools. */
    "saperly.ask_assistant": {
      input: {
        /**
         * Workspace URL slug.
         * @minLength 1
         * @maxLength 100
         */
        workspaceSlug: string;
        /**
         * Question for the workspace assistant.
         * @minLength 1
         * @maxLength 2000
         */
        question: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Answer. */
        answer: string;
        /** Provider. */
        provider: "workers-ai" | "openai-compatible" | "mock";
        /** Model id. */
        modelId: string;
        /** Used tools. */
        usedTools: Array<string>;
        /** Assistant configured. */
        assistantConfigured: boolean;
        [key: string]: unknown;
      };
    };
    /** Bind a connection to a number */
    "saperly.assign_connection": {
      input: {
        /** The id of the connection to bind to this number. The connection becomes the handler that answers calls and messages on the line. */
        connectionId: string;
        /**
         * The phone number's id.
         * @minLength 1
         */
        id: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Phone number. */
        phoneNumber: string;
        /** Connection id. */
        connectionId: string | null;
        /** Webhook url. */
        webhookUrl: string | null;
        /** Sms sender id. */
        smsSenderId?: string | null;
        /** Caller id name. */
        callerIdName?: string | null;
        /** Country. */
        country: string | null;
        /** Number type. */
        numberType: string | null;
        /** Monthly price cents. */
        monthlyPriceCents: number | null;
        /** Currency. */
        currency: string | null;
        /** Next charge at. */
        nextChargeAt: string | null;
        /** Released at. */
        releasedAt: string | null;
        /** Created at. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Check whether a contact has active consent */
    "saperly.check_consent": {
      input: {
        /** The id of your number to check consent against. */
        numberId: string;
        /** The contact phone number, in E.164 format (e.g. `+14155550123`), to check for active consent. */
        peerNumber: string;
      };
      output: {
        /** Has consent. */
        hasConsent: boolean;
        /** Configuration type. */
        type?: "implied_inbound" | "explicit_outbound" | null;
        [key: string]: unknown;
      };
    };
    /** Create a connection (provisions inline) */
    "saperly.create_connection": {
      input: {
        /**
         * A human-readable name for the connection (1–120 characters).
         * @minLength 1
         * @maxLength 120
         */
        name: string;
        /** How the line is handled. 'hosted' (default): an in-network voice assistant (cascade STT → LLM → TTS) is the brain. 'manual': your own LLM is the brain — Saperly forwards text turns and executes the directives you return. Audio stays in-network in both modes. */
        mode?: "hosted" | "manual" | null;
        /** The hosted brain backend. Today only 'network' (an in-network voice assistant) is available; 'openai_realtime' is disabled and rejected on create/update. */
        backend?: "network" | "openai_realtime" | null;
        /** The system prompt that defines the assistant's behavior. Put any opening line here — there is no separate greeting field. */
        instructions?: string | null;
        /** The model the hosted assistant runs. Omit to use the managed default. Hosted mode only. */
        llm?: {
          /** Always 'managed' — the hosted assistant runs the model in-network. */
          kind: "managed";
          /** The in-network managed model the hosted assistant runs, e.g. "openai/gpt-4o". */
          model: string;
        } | null;
        /** The hosted assistant's text-to-speech voice. Omit `tts` to use the managed default voice; otherwise `{ "voiceId": "<id from GET /voices>" }` is enough. */
        tts?: {
          /** The text-to-speech provider. Optional — defaults to the in-network provider, which is all you normally need. */
          provider?: string | null;
          /** The voice the hosted assistant speaks with. Use an `id` returned by `GET /voices` (optionally filtered by `?language=`). Hosted mode only. */
          voiceId: string;
        } | null;
        /** Background audio. */
        backgroundAudio?: {
          /** Configuration type. */
          type: "off";
        } | {
          /** Configuration type. */
          type: "office";
          /** Office background audio volume. */
          volume: number;
        } | null;
        /** The spoken language as a BCP-47 tag (e.g. "en", "es", "en-US"). On hosted lines it is the in-network transcription hint — which language the caller speaks (pair it with a voice that speaks the same language, and instruct the model to reply in it). On manual lines it is the Conversation Relay language, steering in-network transcription AND the spoken voice. Discover the supported set from `GET /languages` (or filter `GET /voices` by language); any well-formed tag is accepted. Send "" to clear it (auto-detect). */
        language?: string | null;
        /** MCP servers the hosted assistant may call as tools during a conversation. Hosted mode only. */
        mcpServers?: Array<{
          /** Public `https://` URL of your streamable-HTTP MCP server (commonly ending in `/mcp`). SSE-only servers are not supported. */
          url: string;
          /** How Saperly authenticates to your MCP server. Use { type: 'none' } (or omit `auth`) for an open server. */
          auth?: {
            /** Configuration type. */
            type: "bearer" | "none";
            /** Bearer token sent as `Authorization: Bearer <token>` on every request to your server. Required when `type` is 'bearer'; stored encrypted and never returned in reads. */
            token?: string | null;
          } | null;
          /** Allow-list of tool names to expose to the assistant. Omit to expose every tool the server advertises. */
          allowedTools?: Array<string> | null;
        }> | null;
        /** Which call-control actions the connection's brain may take, projected to whichever backend handles the call. Omitted fields fall back to defaults (end-call + DTMF on, transfer off). */
        callControl?: {
          /** Allow the brain to hang up the call. Defaults on. */
          endCall?: boolean | null;
          /** Allow the brain to send DTMF (touch-tone) digits. Defaults on. */
          sendDtmf?: boolean | null;
          /** Blind-transfer enablement and its allowed targets. */
          transfer?: {
            /** Allowed blind-transfer destinations (E.164 numbers or `sip:` URIs). Transfer only takes effect with at least one target. */
            targets: Array<string>;
            /** Optional caller ID to present on the transferred leg. */
            from?: string | null;
          } | null;
        } | null;
        /** When true (the default), the do-not-message tool is exposed and `disclosure` is spoken as the line's first, uninterruptible utterance (the TCPA notice). When on with no `disclosure`, a standard org-named default is filled in. */
        complianceEnabled?: boolean | null;
        /** Hosted-line opt-in to auto-answer inbound SMS with the model. Defaults off. (Manual lines forward to their webhook brain regardless.) */
        smsAutoReply?: boolean | null;
        /** The TCPA notice spoken first, uninterruptibly, when `complianceEnabled` is on. Leave empty with compliance on and Saperly fills a standard org-named default. */
        disclosure?: string | null;
        /** Config for the OpenAI-Realtime hosted backend. Only meaningful when `backend` is 'openai_realtime' (currently disabled). The OpenAI project is operator-hosted and not settable here. */
        openaiRealtime?: {
          /** The OpenAI Realtime model id. */
          model: string;
          /** The OpenAI Realtime voice. Distinct from the hosted `tts.voiceId` — this names a built-in OpenAI Realtime voice. */
          voice?: string | null;
        } | null;
        /** Manual-mode webhook-brain URL: where Saperly POSTs each turn (signed with the connection's `manualSecret`) when no live agent socket is connected. Only meaningful for manual mode; send "" to clear it. */
        manualWebhookUrl?: string | null;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Human-readable name. */
        name: string;
        /** Mode. */
        mode: "hosted" | "manual";
        /** Instructions. */
        instructions: string;
        /** Llm. */
        llm: {
          /** Kind. */
          kind: "managed";
          /** Model. */
          model: string;
          [key: string]: unknown;
        } | null;
        /** Background audio. */
        backgroundAudio?: {
          /** Configuration type. */
          type: "off";
          [key: string]: unknown;
        } | {
          /** Configuration type. */
          type: "office";
          /** Office background audio volume. */
          volume: number;
          [key: string]: unknown;
        } | null;
        /** Spoken language code. */
        language: string | null;
        /** Mcp servers. */
        mcpServers: Array<{
          /** Destination URL. */
          url: string;
          /** Auth. */
          auth?: Record<string, unknown> | null;
          /** Allowed tools. */
          allowedTools?: Array<string> | null;
          [key: string]: unknown;
        }> | null;
        /** Call control. */
        callControl: {
          /** End call. */
          endCall?: boolean | null;
          /** Send dtmf. */
          sendDtmf?: boolean | null;
          /** Transfer. */
          transfer?: {
            /** Targets. */
            targets: Array<string>;
            /** From. */
            from?: string | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        } | null;
        /** Compliance enabled. */
        complianceEnabled: boolean;
        /** Sms auto reply. */
        smsAutoReply: boolean;
        /** Disclosure. */
        disclosure: string;
        /** Recording enabled. */
        recordingEnabled: boolean;
        /** Openai realtime. */
        openaiRealtime: {
          /** Model. */
          model: string;
          /** Voice. */
          voice?: string | null;
          [key: string]: unknown;
        } | null;
        /** Manual-mode connection secret. */
        manualSecret: string | null;
        /** Manual webhook url. */
        manualWebhookUrl: string | null;
        /** Created at. */
        createdAt: string;
        /** Backend. */
        backend: "network" | "openai_realtime";
        /** Tts. */
        tts: {
          /** Voice id. */
          voiceId: string;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Upload a voice sample from a public URL; poll get_custom_voice until the voice is active or failed. */
    "saperly.create_custom_voice": {
      input: {
        /** Human-readable name. */
        name: string;
        /** Spoken language code. */
        language: string;
        /** Voice gender. */
        gender: "male" | "female" | "neutral";
        /**
         * Public URL of a voice sample to download and upload; connector limit is 20 MiB.
         * @format uri
         */
        audioUrl: string;
        /**
         * Audio filename with an extension matching the sample format.
         * @minLength 1
         */
        fileName?: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Human-readable name. */
        name: string;
        /** Spoken language code. */
        language: string;
        /** Voice gender. */
        gender: "male" | "female" | "neutral";
        /** Resource status. */
        status: "pending" | "active" | "failed" | "expired";
        /** Failure reason. */
        failureReason: string | null;
        /** Deletion pending. */
        deletionPending?: boolean | null;
        /** Created at. */
        createdAt: string;
        /** Updated at. */
        updatedAt: string;
        [key: string]: unknown;
      };
    };
    /** Create a scoped API token */
    "saperly.create_workspace_key": {
      input: {
        /**
         * Human-readable name.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /**
         * Granted API key scopes.
         * @minItems 1
         * @maxItems 3
         */
        scopes: Array<"read" | "write" | "admin">;
        /** Phone number allow-list; null or empty means all numbers within the parent grant. */
        numberScope?: Array<string> | null;
        /**
         * Per-key spending cap in cents.
         * @minimum 1
         */
        spendLimitCents?: number | null;
        /** Monthly reset or null for a lifetime cap. */
        spendLimitResetPeriod?: "monthly" | null;
        /**
         * The workspace's URL slug.
         * @minLength 1
         */
        slug: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Human-readable name. */
        name: string;
        /** Key prefix. */
        prefix: string;
        /** Granted API key scopes. */
        scopes: Array<"read" | "write" | "admin">;
        /** Last used at. */
        lastUsedAt: string | null;
        /** Created at. */
        createdAt: string;
        /** API key secret. */
        token: string;
        [key: string]: unknown;
      };
    };
    /** Create a webhook endpoint */
    "saperly.create_workspace_webhook": {
      input: {
        /**
         * The HTTPS URL Saperly will POST each subscribed event to.
         * @minLength 1
         * @maxLength 2048
         */
        url: string;
        /**
         * The event types this endpoint subscribes to (e.g. `call.completed`, `message.received`). At least one.
         * @minItems 1
         */
        events: Array<string>;
        /**
         * An optional human label for the endpoint.
         * @maxLength 500
         */
        description?: string | null;
        /**
         * The workspace's URL slug.
         * @minLength 1
         */
        slug: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** The HTTPS URL Saperly POSTs each subscribed event to. */
        url: string;
        /** Enabled. */
        enabled: boolean;
        /** The event types this endpoint is subscribed to. */
        events: Array<string>;
        /** Delivery success rate (0–100) over all recorded attempts for this endpoint; 100 when there are none yet. */
        successRate: number;
        /** The endpoint signing secret (`whsec_…`). Verify each delivery by recomputing HMAC-SHA256 over `${x-saperly-timestamp}.${rawBody}` and comparing (constant-time) against the hex in the `x-saperly-signature: v1=<hex>` header. */
        signingSecret: string;
        [key: string]: unknown;
      };
    };
    /** Delete a connection */
    "saperly.delete_connection": {
      input: {
        /**
         * The connection's id.
         * @minLength 1
         */
        id: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource status. */
        status: "deleted";
        [key: string]: unknown;
      };
    };
    /** Delete custom voice */
    "saperly.delete_custom_voice": {
      input: {
        /**
         * Resource identifier.
         * @minLength 1
         */
        id: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource status. */
        status: "deleted";
        [key: string]: unknown;
      };
    };
    /** End a live call */
    "saperly.end_call": {
      input: {
        /**
         * The call's id.
         * @minLength 1
         */
        id: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Number id. */
        numberId: string;
        /** Direction. */
        direction: "inbound" | "outbound";
        /** Recipient address or destination. */
        to: string;
        /** From. */
        from: string;
        /** Lifecycle status. `initiated` (placed or ringing, not yet finalized), `completed` (connected and hung up; billed by duration), `no_answer` (the callee never picked up; zero cost), `failed` (the carrier could not connect it, or it was expired unfinalized; zero cost), `rejected` (refused before answer — insufficient balance; zero cost). Only `completed` bills. */
        status: string;
        /** Rate cents per min. */
        rateCentsPerMin: number | null;
        /** Duration sec. */
        durationSec: number | null;
        /** Cost cents. */
        costCents: number | null;
        /** Has recording. */
        hasRecording: boolean;
        /** Has transcript. */
        hasTranscript: boolean;
        /** Created at. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Get a call by id */
    "saperly.get_call": {
      input: {
        /**
         * The call's id.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Number id. */
        numberId: string;
        /** Direction. */
        direction: "inbound" | "outbound";
        /** Recipient address or destination. */
        to: string;
        /** From. */
        from: string;
        /** Lifecycle status. `initiated` (placed or ringing, not yet finalized), `completed` (connected and hung up; billed by duration), `no_answer` (the callee never picked up; zero cost), `failed` (the carrier could not connect it, or it was expired unfinalized; zero cost), `rejected` (refused before answer — insufficient balance; zero cost). Only `completed` bills. */
        status: string;
        /** Rate cents per min. */
        rateCentsPerMin: number | null;
        /** Duration sec. */
        durationSec: number | null;
        /** Cost cents. */
        costCents: number | null;
        /** Has recording. */
        hasRecording: boolean;
        /** Has transcript. */
        hasTranscript: boolean;
        /** Created at. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Get a connection by id */
    "saperly.get_connection": {
      input: {
        /**
         * The connection's id.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Human-readable name. */
        name: string;
        /** Mode. */
        mode: "hosted" | "manual";
        /** Instructions. */
        instructions: string;
        /** Llm. */
        llm: {
          /** Kind. */
          kind: "managed";
          /** Model. */
          model: string;
          [key: string]: unknown;
        } | null;
        /** Background audio. */
        backgroundAudio?: {
          /** Configuration type. */
          type: "off";
          [key: string]: unknown;
        } | {
          /** Configuration type. */
          type: "office";
          /** Office background audio volume. */
          volume: number;
          [key: string]: unknown;
        } | null;
        /** Spoken language code. */
        language: string | null;
        /** Mcp servers. */
        mcpServers: Array<{
          /** Destination URL. */
          url: string;
          /** Auth. */
          auth?: Record<string, unknown> | null;
          /** Allowed tools. */
          allowedTools?: Array<string> | null;
          [key: string]: unknown;
        }> | null;
        /** Call control. */
        callControl: {
          /** End call. */
          endCall?: boolean | null;
          /** Send dtmf. */
          sendDtmf?: boolean | null;
          /** Transfer. */
          transfer?: {
            /** Targets. */
            targets: Array<string>;
            /** From. */
            from?: string | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        } | null;
        /** Compliance enabled. */
        complianceEnabled: boolean;
        /** Sms auto reply. */
        smsAutoReply: boolean;
        /** Disclosure. */
        disclosure: string;
        /** Recording enabled. */
        recordingEnabled: boolean;
        /** Openai realtime. */
        openaiRealtime: {
          /** Model. */
          model: string;
          /** Voice. */
          voice?: string | null;
          [key: string]: unknown;
        } | null;
        /** Manual-mode connection secret. */
        manualSecret: string | null;
        /** Manual webhook url. */
        manualWebhookUrl: string | null;
        /** Created at. */
        createdAt: string;
        /** Backend. */
        backend: "network" | "openai_realtime";
        /** Tts. */
        tts: {
          /** Voice id. */
          voiceId: string;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Get custom voice */
    "saperly.get_custom_voice": {
      input: {
        /**
         * Resource identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Human-readable name. */
        name: string;
        /** Spoken language code. */
        language: string;
        /** Voice gender. */
        gender: "male" | "female" | "neutral";
        /** Resource status. */
        status: "pending" | "active" | "failed" | "expired";
        /** Failure reason. */
        failureReason: string | null;
        /** Deletion pending. */
        deletionPending?: boolean | null;
        /** Created at. */
        createdAt: string;
        /** Updated at. */
        updatedAt: string;
        [key: string]: unknown;
      };
    };
    /** Get a phone number by id */
    "saperly.get_number": {
      input: {
        /**
         * The phone number's id.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Phone number. */
        phoneNumber: string;
        /** Connection id. */
        connectionId: string | null;
        /** Webhook url. */
        webhookUrl: string | null;
        /** Sms sender id. */
        smsSenderId?: string | null;
        /** Caller id name. */
        callerIdName?: string | null;
        /** Country. */
        country: string | null;
        /** Number type. */
        numberType: string | null;
        /** Monthly price cents. */
        monthlyPriceCents: number | null;
        /** Currency. */
        currency: string | null;
        /** Next charge at. */
        nextChargeAt: string | null;
        /** Released at. */
        releasedAt: string | null;
        /** Created at. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Quote the price of a phone number */
    "saperly.get_price_quote": {
      input: {
        /** ISO 3166-1 alpha-2 country code to price a number in (e.g. `US`, `GB`). */
        country: string;
        /** The kind of number to price (e.g. `local`, `toll_free`, `mobile`, `national`). */
        numberType: string;
      };
      output: {
        /** Customer monthly cents. */
        customerMonthlyCents: number;
        /** Customer upfront cents. */
        customerUpfrontCents: number;
        [key: string]: unknown;
      };
    };
    /** Get a temporary download URL for a completed call recording. */
    "saperly.get_recording": {
      input: {
        /**
         * The call's id.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * Temporary recording download URL.
         * @format uri
         */
        downloadUrl: string;
        [key: string]: unknown;
      };
    };
    /** Get a call transcript */
    "saperly.get_transcript": {
      input: {
        /**
         * The call's id.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Call transcript returned by Saperly. */
        transcript: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a usage summary (optionally since a timestamp) */
    "saperly.get_usage": {
      input: {
        /** Lower bound of the reporting window as an ISO-8601 timestamp (e.g. `2026-01-01T00:00:00Z`). Only usage at or after this instant is counted. Omit for all-time totals. */
        since?: string | null;
      };
      output: {
        /** Calls. */
        calls: {
          /** Count. */
          count: number;
          /** Total cost cents. */
          totalCostCents: number;
          /** Total duration sec. */
          totalDurationSec: number;
          [key: string]: unknown;
        };
        /** Messages. */
        messages: {
          /** Count. */
          count: number;
          [key: string]: unknown;
        };
        /** Balance cents. */
        balanceCents: number;
        [key: string]: unknown;
      };
    };
    /** Liveness probe */
    "saperly.health": {
      input: Record<string, never>;
      output: {
        /** Resource status. */
        status: "ok";
        [key: string]: unknown;
      };
    };
    /** List calls */
    "saperly.list_calls": {
      input: Record<string, never>;
      output: {
        /** Returned records. */
        items: Array<{
          /** Resource identifier. */
          id: string;
          /** Number id. */
          numberId: string;
          /** Direction. */
          direction: "inbound" | "outbound";
          /** Recipient address or destination. */
          to: string;
          /** From. */
          from: string;
          /** Lifecycle status. `initiated` (placed or ringing, not yet finalized), `completed` (connected and hung up; billed by duration), `no_answer` (the callee never picked up; zero cost), `failed` (the carrier could not connect it, or it was expired unfinalized; zero cost), `rejected` (refused before answer — insufficient balance; zero cost). Only `completed` bills. */
          status: string;
          /** Rate cents per min. */
          rateCentsPerMin: number | null;
          /** Duration sec. */
          durationSec: number | null;
          /** Cost cents. */
          costCents: number | null;
          /** Has recording. */
          hasRecording: boolean;
          /** Has transcript. */
          hasTranscript: boolean;
          /** Created at. */
          createdAt: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List all connections in the workspace */
    "saperly.list_connections": {
      input: Record<string, never>;
      output: {
        /** Returned records. */
        items: Array<{
          /** Resource identifier. */
          id: string;
          /** Human-readable name. */
          name: string;
          /** Mode. */
          mode: "hosted" | "manual";
          /** Instructions. */
          instructions: string;
          /** Llm. */
          llm: Record<string, unknown> | null;
          /** Background audio. */
          backgroundAudio?: Record<string, unknown> | null;
          /** Spoken language code. */
          language: string | null;
          /** Mcp servers. */
          mcpServers: Array<Record<string, unknown>> | null;
          /** Call control. */
          callControl: Record<string, unknown> | null;
          /** Compliance enabled. */
          complianceEnabled: boolean;
          /** Sms auto reply. */
          smsAutoReply: boolean;
          /** Disclosure. */
          disclosure: string;
          /** Recording enabled. */
          recordingEnabled: boolean;
          /** Openai realtime. */
          openaiRealtime: Record<string, unknown> | null;
          /** Manual-mode connection secret. */
          manualSecret: string | null;
          /** Manual webhook url. */
          manualWebhookUrl: string | null;
          /** Created at. */
          createdAt: string;
          /** Backend. */
          backend: "network" | "openai_realtime";
          /** Tts. */
          tts: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List all consent records in the workspace */
    "saperly.list_consent": {
      input: Record<string, never>;
      output: {
        /** Returned records. */
        items: Array<{
          /** Resource identifier. */
          id: string;
          /** Number id. */
          numberId: string;
          /** Peer number. */
          peerNumber: string;
          /** Consent type. */
          consentType: "implied_inbound" | "explicit_outbound";
          /** Source. */
          source: string;
          /** Granted at. */
          grantedAt: string;
          /** Revoked at. */
          revokedAt: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List custom voices */
    "saperly.list_custom_voices": {
      input: Record<string, never>;
      output: {
        /** Returned records. */
        items: Array<{
          /** Resource identifier. */
          id: string;
          /** Human-readable name. */
          name: string;
          /** Spoken language code. */
          language: string;
          /** Voice gender. */
          gender: "male" | "female" | "neutral";
          /** Resource status. */
          status: "pending" | "active" | "failed" | "expired";
          /** Failure reason. */
          failureReason: string | null;
          /** Deletion pending. */
          deletionPending?: boolean | null;
          /** Created at. */
          createdAt: string;
          /** Updated at. */
          updatedAt: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the workspace's API keys */
    "saperly.list_keys": {
      input: Record<string, never>;
      output: {
        /** Returned records. */
        items: Array<{
          /** Resource identifier. */
          id: string;
          /** Human-readable name. */
          name: string;
          /** API key secret. */
          token: string;
          /** Key prefix. */
          prefix: string;
          /** Granted API key scopes. */
          scopes: Array<"read" | "write" | "admin">;
          /** Last used at. */
          lastUsedAt: string | null;
          /** Created at. */
          createdAt: string;
          /** Phone number allow-list; null or empty means all numbers within the parent grant. */
          numberScope?: Array<string> | null;
          /** Per-key spending cap in cents. */
          spendLimitCents?: number | null;
          /** Monthly reset or null for a lifetime cap. */
          spendLimitResetPeriod?: "monthly" | null;
          /** Spent this period cents. */
          spentThisPeriodCents?: number | null;
          /** Can provision keys. */
          canProvisionKeys?: boolean | null;
          /** Permissions. */
          permissions?: Array<string> | null;
          /** Minted by token id. */
          mintedByTokenId?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the supported spoken languages */
    "saperly.list_languages": {
      input: Record<string, never>;
      output: {
        /** Returned records. */
        items: Array<{
          /** The BCP-47 primary language subtag (e.g. "en", "es", "fr"). Pass it as a connection's `language`. */
          code: string;
          /** The language's English display name (e.g. "English", "Spanish"). */
          name: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List messages (optionally filtered by number) */
    "saperly.list_messages": {
      input: {
        /** Filter to messages sent from or received on this number. Omit to list every message in the workspace. */
        numberId?: string | null;
      };
      output: {
        /** Returned records. */
        items: Array<{
          /** Resource identifier. */
          id: string;
          /** Number id. */
          numberId: string;
          /** Direction. */
          direction: "inbound" | "outbound";
          /** Recipient address or destination. */
          to: string;
          /** From. */
          from: string;
          /** Body. */
          body: string;
          /** Segments. */
          segments: number;
          /** Resource status. */
          status: string;
          /** Created at. */
          createdAt: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List all phone numbers in the workspace */
    "saperly.list_numbers": {
      input: Record<string, never>;
      output: {
        /** Returned records. */
        items: Array<{
          /** Resource identifier. */
          id: string;
          /** Phone number. */
          phoneNumber: string;
          /** Connection id. */
          connectionId: string | null;
          /** Webhook url. */
          webhookUrl: string | null;
          /** Sms sender id. */
          smsSenderId?: string | null;
          /** Caller id name. */
          callerIdName?: string | null;
          /** Country. */
          country: string | null;
          /** Number type. */
          numberType: string | null;
          /** Monthly price cents. */
          monthlyPriceCents: number | null;
          /** Currency. */
          currency: string | null;
          /** Next charge at. */
          nextChargeAt: string | null;
          /** Released at. */
          releasedAt: string | null;
          /** Created at. */
          createdAt: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List available voices (optionally filtered by language) */
    "saperly.list_voices": {
      input: {
        /** Filter voices by language — a case-insensitive BCP-47 prefix. "en" matches "en", "en-US", "en-GB", … Omit to list every voice. */
        language?: string | null;
      };
      output: {
        /** Returned records. */
        items: Array<{
          /** The voice's opaque, stable id. Pass it straight back as a connection's `tts.voiceId`. */
          id: string;
          /** The voice's display name (e.g. "Clara - Instructor"). */
          name: string;
          /** The voice's gender (e.g. "female", "male"). */
          gender: string;
          /** The language the voice speaks, as a BCP-47 tag (e.g. "en-US"). Also the value to use for a connection's `language` field if you want transcription in this language. */
          language: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List a webhook endpoint's recent delivery attempts */
    "saperly.list_webhook_deliveries": {
      input: {
        /**
         * The URL-safe slug identifying the workspace.
         * @minLength 1
         */
        slug: string;
        /**
         * The id of the webhook endpoint whose delivery history to read.
         * @minLength 1
         */
        webhookId: string;
      };
      output: {
        /** Returned records. */
        items: Array<{
          /** Resource identifier. */
          id: string;
          /** The event type that was delivered (e.g. `call.completed`). */
          eventType: string;
          /** The attempt outcome: `delivered` (a 2xx) or `failed`. */
          status: string;
          /** The global attempt number: 1 for the inline first attempt, ≥2 for a queued retry. */
          attempts: number;
          /** The HTTP status the receiver returned, or `null`/`0` when the request never got one (DNS/TLS/timeout — e.g. 530 = the receiver's origin/tunnel is unreachable). */
          responseStatus: number | null;
          /** ISO timestamp of this attempt. */
          lastAttemptAt: string | null;
          /** ISO timestamp of the next scheduled retry, or `null` when none is pending. */
          nextAttemptAt: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the workspace audit-log events */
    "saperly.list_workspace_audit_events": {
      input: {
        /**
         * The workspace's URL slug.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** Returned records. */
        items: Array<{
          /** Resource identifier. */
          id: string;
          /** Event type. */
          eventType: string;
          /** Target type. */
          targetType: string;
          /** Actor. */
          actor: string;
          /** Created at. */
          createdAt: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the workspace API tokens */
    "saperly.list_workspace_keys": {
      input: {
        /**
         * The workspace's URL slug.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** Returned records. */
        items: Array<{
          /** Resource identifier. */
          id: string;
          /** Human-readable name. */
          name: string;
          /** API key secret. */
          token: string;
          /** Key prefix. */
          prefix: string;
          /** Granted API key scopes. */
          scopes: Array<"read" | "write" | "admin">;
          /** Last used at. */
          lastUsedAt: string | null;
          /** Created at. */
          createdAt: string;
          /** Phone number allow-list; null or empty means all numbers within the parent grant. */
          numberScope?: Array<string> | null;
          /** Per-key spending cap in cents. */
          spendLimitCents?: number | null;
          /** Monthly reset or null for a lifetime cap. */
          spendLimitResetPeriod?: "monthly" | null;
          /** Spent this period cents. */
          spentThisPeriodCents?: number | null;
          /** Can provision keys. */
          canProvisionKeys?: boolean | null;
          /** Permissions. */
          permissions?: Array<string> | null;
          /** Minted by token id. */
          mintedByTokenId?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the workspace members */
    "saperly.list_workspace_members": {
      input: {
        /**
         * The workspace's URL slug.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** Returned records. */
        items: Array<{
          /** Resource identifier. */
          id: string;
          /** Human-readable name. */
          name: string;
          /** Email. */
          email: string;
          /** Image. */
          image: string | null;
          /** Role. */
          role: "owner" | "admin" | "member";
          /** System role. */
          systemRole: "admin" | "user";
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the workspace webhook endpoints */
    "saperly.list_workspace_webhooks": {
      input: {
        /**
         * The workspace's URL slug.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** Returned records. */
        items: Array<{
          /** Resource identifier. */
          id: string;
          /** The HTTPS URL Saperly POSTs each subscribed event to. */
          url: string;
          /** Enabled. */
          enabled: boolean;
          /** The event types this endpoint is subscribed to. */
          events: Array<string>;
          /** Delivery success rate (0–100) over all recorded attempts for this endpoint; 100 when there are none yet. */
          successRate: number;
          /** The endpoint signing secret (`whsec_…`). Verify each delivery by recomputing HMAC-SHA256 over `${x-saperly-timestamp}.${rawBody}` and comparing (constant-time) against the hex in the `x-saperly-signature: v1=<hex>` header. */
          signingSecret: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Mint a scoped API key */
    "saperly.mint_key": {
      input: {
        /**
         * Human-readable name.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /**
         * Granted API key scopes.
         * @minItems 1
         * @maxItems 3
         */
        scopes: Array<"read" | "write" | "admin">;
        /** Phone number allow-list; null or empty means all numbers within the parent grant. */
        numberScope?: Array<string> | null;
        /**
         * Per-key spending cap in cents.
         * @minimum 1
         */
        spendLimitCents?: number | null;
        /** Monthly reset or null for a lifetime cap. */
        spendLimitResetPeriod?: "monthly" | null;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Human-readable name. */
        name: string;
        /** Key prefix. */
        prefix: string;
        /** Granted API key scopes. */
        scopes: Array<"read" | "write" | "admin">;
        /** Last used at. */
        lastUsedAt: string | null;
        /** Created at. */
        createdAt: string;
        /** API key secret. */
        token: string;
        [key: string]: unknown;
      };
    };
    /** Place an outbound call */
    "saperly.place_call": {
      input: {
        /** The Saperly number id to place the call from. */
        fromNumberId: string;
        /** The destination in E.164 format, e.g. "+15555550123". */
        to: string;
        /** Optional. Use this connection for the call instead of the number's bound one. */
        connectionId?: string | null;
        /** A per-call system prompt that overrides the connection's saved instructions for this call only. Omit to run the call on the line's saved config. (Voice/model/language are not per-call overridable via the API — set them on the connection.) */
        instructions?: string | null;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Number id. */
        numberId: string;
        /** Direction. */
        direction: "inbound" | "outbound";
        /** Recipient address or destination. */
        to: string;
        /** From. */
        from: string;
        /** Lifecycle status. `initiated` (placed or ringing, not yet finalized), `completed` (connected and hung up; billed by duration), `no_answer` (the callee never picked up; zero cost), `failed` (the carrier could not connect it, or it was expired unfinalized; zero cost), `rejected` (refused before answer — insufficient balance; zero cost). Only `completed` bills. */
        status: string;
        /** Rate cents per min. */
        rateCentsPerMin: number | null;
        /** Duration sec. */
        durationSec: number | null;
        /** Cost cents. */
        costCents: number | null;
        /** Has recording. */
        hasRecording: boolean;
        /** Has transcript. */
        hasTranscript: boolean;
        /** Created at. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Provision a phone number */
    "saperly.provision_number": {
      input: {
        /** ISO 3166-1 alpha-2 country code to provision a number in (e.g. `US`, `GB`). Defaults to `US`. */
        country?: string | null;
        /** The kind of number to provision (e.g. `local`, `toll_free`, `mobile`, `national`). Defaults to `local`. */
        numberType?: string | null;
        /** Preferred area code / city prefix to search within the country (e.g. `415`). Omit to take any available number. */
        areaCode?: string | null;
        /** The monthly price (in cents) you quoted to the customer. If the live order price exceeds it, provision fails with `PriceChanged` instead of charging — resubmit with `approveHigherPrice: true` to accept the higher price. */
        expectedMonthlyPriceCents?: number | null;
        /** The one-time upfront price (in cents) you quoted to the customer. If the live order price exceeds it, provision fails with `PriceChanged` instead of charging — resubmit with `approveHigherPrice: true` to accept the higher price. */
        expectedUpfrontPriceCents?: number | null;
        /** Set true to accept a live order price higher than the `expected*` values you quoted, instead of failing with `PriceChanged`. */
        approveHigherPrice?: boolean | null;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Phone number. */
        phoneNumber: string;
        /** Connection id. */
        connectionId: string | null;
        /** Webhook url. */
        webhookUrl: string | null;
        /** Sms sender id. */
        smsSenderId?: string | null;
        /** Caller id name. */
        callerIdName?: string | null;
        /** Country. */
        country: string | null;
        /** Number type. */
        numberType: string | null;
        /** Monthly price cents. */
        monthlyPriceCents: number | null;
        /** Currency. */
        currency: string | null;
        /** Next charge at. */
        nextChargeAt: string | null;
        /** Released at. */
        releasedAt: string | null;
        /** Created at. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Record consent for a contact */
    "saperly.record_consent": {
      input: {
        /** The id of your number the consent is scoped to. */
        numberId: string;
        /** The contact phone number, in E.164 format (e.g. `+14155550123`), that the consent applies to. */
        peerNumber: string;
        /** How consent was obtained: `implied_inbound` (the contact messaged you first) or `explicit_outbound` (the contact explicitly agreed to be contacted). */
        consentType: "implied_inbound" | "explicit_outbound";
        /** A free-text note recording where or how consent was captured, kept for your audit trail (e.g. "web signup form"). */
        source: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Number id. */
        numberId: string;
        /** Peer number. */
        peerNumber: string;
        /** Consent type. */
        consentType: "implied_inbound" | "explicit_outbound";
        /** Source. */
        source: string;
        /** Granted at. */
        grantedAt: string;
        /** Revoked at. */
        revokedAt: string | null;
        [key: string]: unknown;
      };
    };
    /** Release a phone number */
    "saperly.release_number": {
      input: {
        /**
         * The phone number's id.
         * @minLength 1
         */
        id: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource status. */
        status: "released";
        [key: string]: unknown;
      };
    };
    /** Revoke consent for a contact */
    "saperly.revoke_consent": {
      input: {
        /** The id of your number the consent to revoke is scoped to. */
        numberId: string;
        /** The contact phone number, in E.164 format (e.g. `+14155550123`), whose consent should be revoked. */
        peerNumber: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource status. */
        status: "revoked";
        [key: string]: unknown;
      };
    };
    /** Revoke an API key */
    "saperly.revoke_key": {
      input: {
        /**
         * The API key's id.
         * @minLength 1
         */
        id: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource status. */
        status: "revoked";
        [key: string]: unknown;
      };
    };
    /** Revoke an API token */
    "saperly.revoke_workspace_key": {
      input: {
        /**
         * The URL-safe slug identifying the workspace.
         * @minLength 1
         */
        slug: string;
        /**
         * The id of the API token to revoke.
         * @minLength 1
         */
        tokenId: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource status. */
        status: "revoked";
        [key: string]: unknown;
      };
    };
    /** Send an SMS message */
    "saperly.send_message": {
      input: {
        /** The id of one of your numbers to send the SMS from. Must be a number you own; with a scoped key it must also be within the key's number allow-list. */
        fromNumberId: string;
        /** The recipient phone number in E.164 format (e.g. `+14155550123`). */
        to: string;
        /**
         * The message text (1–1600 characters). Long messages are split into multiple segments automatically and billed per segment.
         * @minLength 1
         * @maxLength 1600
         */
        body: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Number id. */
        numberId: string;
        /** Direction. */
        direction: "inbound" | "outbound";
        /** Recipient address or destination. */
        to: string;
        /** From. */
        from: string;
        /** Body. */
        body: string;
        /** Segments. */
        segments: number;
        /** Resource status. */
        status: string;
        /** Created at. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Invite a member by email */
    "saperly.send_workspace_invitation": {
      input: {
        /**
         * The email address to send the workspace invitation to.
         * @minLength 3
         * @maxLength 320
         * @pattern ^[^\s@]+@[^\s@]+$
         */
        to: string;
        /**
         * The workspace's URL slug.
         * @minLength 1
         */
        slug: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource status. */
        status: "queued";
        /** Delivery. */
        delivery: unknown;
        [key: string]: unknown;
      };
    };
    /** Set the outbound caller ID name (CNAM) */
    "saperly.set_caller_id": {
      input: {
        /** Outbound caller ID name (1–15 letters, digits, or spaces) registered as the line's CNAM listing, or `null` to clear it and show the bare number. */
        callerIdName: string | null;
        /**
         * The phone number's id.
         * @minLength 1
         */
        id: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Phone number. */
        phoneNumber: string;
        /** Connection id. */
        connectionId: string | null;
        /** Webhook url. */
        webhookUrl: string | null;
        /** Sms sender id. */
        smsSenderId?: string | null;
        /** Caller id name. */
        callerIdName?: string | null;
        /** Country. */
        country: string | null;
        /** Number type. */
        numberType: string | null;
        /** Monthly price cents. */
        monthlyPriceCents: number | null;
        /** Currency. */
        currency: string | null;
        /** Next charge at. */
        nextChargeAt: string | null;
        /** Released at. */
        releasedAt: string | null;
        /** Created at. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Set a number's manual-mode brain URL */
    "saperly.set_number_webhook": {
      input: {
        /** The per-number MANUAL-mode brain URL: a public `https://` endpoint Saperly POSTs each conversation turn to for a manual-mode line, as a fallback when the connection has no `manualWebhookUrl` and no live agent socket. This is NOT for receiving call/SMS event notifications — for those, register a workspace webhook endpoint (`POST /workspaces/:slug/webhooks`). */
        url: string;
        /**
         * The phone number's id.
         * @minLength 1
         */
        id: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Phone number. */
        phoneNumber: string;
        /** Connection id. */
        connectionId: string | null;
        /** Webhook url. */
        webhookUrl: string | null;
        /** Sms sender id. */
        smsSenderId?: string | null;
        /** Caller id name. */
        callerIdName?: string | null;
        /** Country. */
        country: string | null;
        /** Number type. */
        numberType: string | null;
        /** Monthly price cents. */
        monthlyPriceCents: number | null;
        /** Currency. */
        currency: string | null;
        /** Next charge at. */
        nextChargeAt: string | null;
        /** Released at. */
        releasedAt: string | null;
        /** Created at. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Set the alphanumeric SMS sender id */
    "saperly.set_sms_sender": {
      input: {
        /** Alphanumeric sender id (1–11 alphanumeric characters) to present on international SMS, or `null` to clear the override and send from the phone number itself. */
        smsSenderId: string | null;
        /**
         * The phone number's id.
         * @minLength 1
         */
        id: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Phone number. */
        phoneNumber: string;
        /** Connection id. */
        connectionId: string | null;
        /** Webhook url. */
        webhookUrl: string | null;
        /** Sms sender id. */
        smsSenderId?: string | null;
        /** Caller id name. */
        callerIdName?: string | null;
        /** Country. */
        country: string | null;
        /** Number type. */
        numberType: string | null;
        /** Monthly price cents. */
        monthlyPriceCents: number | null;
        /** Currency. */
        currency: string | null;
        /** Next charge at. */
        nextChargeAt: string | null;
        /** Released at. */
        releasedAt: string | null;
        /** Created at. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Blind-transfer a live call */
    "saperly.transfer_call": {
      input: {
        /** Where to blind-transfer the live leg — an E.164 number (e.g. "+15551230000") or a `sip:` URI. */
        to: string;
        /**
         * The call's id.
         * @minLength 1
         */
        id: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Number id. */
        numberId: string;
        /** Direction. */
        direction: "inbound" | "outbound";
        /** Recipient address or destination. */
        to: string;
        /** From. */
        from: string;
        /** Lifecycle status. `initiated` (placed or ringing, not yet finalized), `completed` (connected and hung up; billed by duration), `no_answer` (the callee never picked up; zero cost), `failed` (the carrier could not connect it, or it was expired unfinalized; zero cost), `rejected` (refused before answer — insufficient balance; zero cost). Only `completed` bills. */
        status: string;
        /** Rate cents per min. */
        rateCentsPerMin: number | null;
        /** Duration sec. */
        durationSec: number | null;
        /** Cost cents. */
        costCents: number | null;
        /** Has recording. */
        hasRecording: boolean;
        /** Has transcript. */
        hasTranscript: boolean;
        /** Created at. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Update a connection (re-syncs the carrier) */
    "saperly.update_connection": {
      input: {
        /**
         * A human-readable name for the connection (1–120 characters).
         * @minLength 1
         * @maxLength 120
         */
        name?: string | null;
        /** How the line is handled. 'hosted' (default): an in-network voice assistant (cascade STT → LLM → TTS) is the brain. 'manual': your own LLM is the brain — Saperly forwards text turns and executes the directives you return. Audio stays in-network in both modes. */
        mode?: "hosted" | "manual" | null;
        /** The hosted brain backend. Today only 'network' is available; 'openai_realtime' is disabled and rejected. */
        backend?: "network" | "openai_realtime" | null;
        /** The system prompt that defines the assistant's behavior. */
        instructions?: string | null;
        /** The model the hosted assistant runs. Omit to use the managed default. Hosted mode only. */
        llm?: {
          /** Always 'managed' — the hosted assistant runs the model in-network. */
          kind: "managed";
          /** The in-network managed model the hosted assistant runs, e.g. "openai/gpt-4o". */
          model: string;
        } | null;
        /** The hosted assistant's text-to-speech voice. Omit `tts` to use the managed default voice; otherwise `{ "voiceId": "<id from GET /voices>" }` is enough. */
        tts?: {
          /** The text-to-speech provider. Optional — defaults to the in-network provider, which is all you normally need. */
          provider?: string | null;
          /** The voice the hosted assistant speaks with. Use an `id` returned by `GET /voices` (optionally filtered by `?language=`). Hosted mode only. */
          voiceId: string;
        } | null;
        /** Background audio. */
        backgroundAudio?: {
          /** Configuration type. */
          type: "off";
        } | {
          /** Configuration type. */
          type: "office";
          /** Office background audio volume. */
          volume: number;
        } | null;
        /** The spoken language as a BCP-47 tag (e.g. "en", "es", "en-US"). Hosted: the in-network transcription hint. Manual: the Conversation Relay language (steers in-network transcription + the spoken voice). Discover values from `GET /languages`. Send "" to clear it back to auto-detect. */
        language?: string | null;
        /** Replaces the full set of MCP servers on the connection (send `[]` to clear). Hosted mode only. */
        mcpServers?: Array<{
          /** Public `https://` URL of your streamable-HTTP MCP server (commonly ending in `/mcp`). SSE-only servers are not supported. */
          url: string;
          /** How Saperly authenticates to your MCP server. Use { type: 'none' } (or omit `auth`) for an open server. */
          auth?: {
            /** Configuration type. */
            type: "bearer" | "none";
            /** Bearer token sent as `Authorization: Bearer <token>` on every request to your server. Required when `type` is 'bearer'; stored encrypted and never returned in reads. */
            token?: string | null;
          } | null;
          /** Allow-list of tool names to expose to the assistant. Omit to expose every tool the server advertises. */
          allowedTools?: Array<string> | null;
        }> | null;
        /** Which call-control actions the connection's brain may take, projected to whichever backend handles the call. Omitted fields fall back to defaults (end-call + DTMF on, transfer off). */
        callControl?: {
          /** Allow the brain to hang up the call. Defaults on. */
          endCall?: boolean | null;
          /** Allow the brain to send DTMF (touch-tone) digits. Defaults on. */
          sendDtmf?: boolean | null;
          /** Blind-transfer enablement and its allowed targets. */
          transfer?: {
            /** Allowed blind-transfer destinations (E.164 numbers or `sip:` URIs). Transfer only takes effect with at least one target. */
            targets: Array<string>;
            /** Optional caller ID to present on the transferred leg. */
            from?: string | null;
          } | null;
        } | null;
        /** Toggle the do-not-message tool + the TCPA `disclosure` opener. */
        complianceEnabled?: boolean | null;
        /** Hosted-line opt-in to auto-answer inbound SMS with the model. Default off. */
        smsAutoReply?: boolean | null;
        /** The TCPA notice spoken first, uninterruptibly, when compliance is on. */
        disclosure?: string | null;
        /** Config for the OpenAI-Realtime hosted backend. Only meaningful when `backend` is 'openai_realtime' (currently disabled). The OpenAI project is operator-hosted and not settable here. */
        openaiRealtime?: {
          /** The OpenAI Realtime model id. */
          model: string;
          /** The OpenAI Realtime voice. Distinct from the hosted `tts.voiceId` — this names a built-in OpenAI Realtime voice. */
          voice?: string | null;
        } | null;
        /** Manual-mode webhook-brain URL. Only meaningful for manual mode; send "" to clear it. */
        manualWebhookUrl?: string | null;
        /**
         * The connection's id.
         * @minLength 1
         */
        id: string;
        /**
         * Caller-supplied stable idempotency key. Use a UUID v4 and reuse it for retries of the same request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Resource identifier. */
        id: string;
        /** Human-readable name. */
        name: string;
        /** Mode. */
        mode: "hosted" | "manual";
        /** Instructions. */
        instructions: string;
        /** Llm. */
        llm: {
          /** Kind. */
          kind: "managed";
          /** Model. */
          model: string;
          [key: string]: unknown;
        } | null;
        /** Background audio. */
        backgroundAudio?: {
          /** Configuration type. */
          type: "off";
          [key: string]: unknown;
        } | {
          /** Configuration type. */
          type: "office";
          /** Office background audio volume. */
          volume: number;
          [key: string]: unknown;
        } | null;
        /** Spoken language code. */
        language: string | null;
        /** Mcp servers. */
        mcpServers: Array<{
          /** Destination URL. */
          url: string;
          /** Auth. */
          auth?: Record<string, unknown> | null;
          /** Allowed tools. */
          allowedTools?: Array<string> | null;
          [key: string]: unknown;
        }> | null;
        /** Call control. */
        callControl: {
          /** End call. */
          endCall?: boolean | null;
          /** Send dtmf. */
          sendDtmf?: boolean | null;
          /** Transfer. */
          transfer?: {
            /** Targets. */
            targets: Array<string>;
            /** From. */
            from?: string | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        } | null;
        /** Compliance enabled. */
        complianceEnabled: boolean;
        /** Sms auto reply. */
        smsAutoReply: boolean;
        /** Disclosure. */
        disclosure: string;
        /** Recording enabled. */
        recordingEnabled: boolean;
        /** Openai realtime. */
        openaiRealtime: {
          /** Model. */
          model: string;
          /** Voice. */
          voice?: string | null;
          [key: string]: unknown;
        } | null;
        /** Manual-mode connection secret. */
        manualSecret: string | null;
        /** Manual webhook url. */
        manualWebhookUrl: string | null;
        /** Created at. */
        createdAt: string;
        /** Backend. */
        backend: "network" | "openai_realtime";
        /** Tts. */
        tts: {
          /** Voice id. */
          voiceId: string;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
  }
}
