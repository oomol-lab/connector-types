import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create and execute one or more Vapi analytics queries across call and subscription data. */
    "vapi.create_analytics_query": {
      input: {
        /**
         * The analytics queries to execute.
         * @minItems 1
         */
        queries: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
      output: {
        /** The analytics results returned by Vapi. */
        results: Array<{
          /** The query name returned by the analytics request. */
          name?: string;
          /** The analytics rows returned for the query. */
          rows?: Array<Record<string, unknown>>;
          /** The aggregate analytics result for the query. */
          result?: unknown;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create a new Vapi assistant with required transcriber, voice, and model settings plus optional messaging and duration controls. */
    "vapi.create_assistant": {
      input: {
        /** Assistant identifier or display name. */
        name?: string;
        /** The assistant model configuration. */
        model: Record<string, unknown>;
        /** The assistant voice configuration. */
        voice: Record<string, unknown>;
        /** The assistant transcriber configuration. */
        transcriber: Record<string, unknown>;
        /** The first message the assistant should say. */
        firstMessage?: string;
        /** The system prompt that controls assistant behavior. */
        systemPrompt?: string;
        /** The message types that should be sent to the client. */
        clientMessages?: Array<string>;
        /** The message types that should be sent to the server. */
        serverMessages?: Array<string>;
        /** The maximum call duration in seconds. */
        maxDurationSeconds?: number;
        /** Voicemail detection settings for the assistant. */
        voicemailDetection?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** The assistant created by Vapi. */
        assistant: {
          /** The unique identifier of the assistant. */
          id: string;
          /** The assistant name. */
          name?: string;
          /** The organization identifier that owns the assistant. */
          orgId?: string;
          /** The model configuration for the assistant. */
          model?: Record<string, unknown>;
          /** The voice configuration for the assistant. */
          voice?: Record<string, unknown>;
          /** Custom metadata attached to the assistant. */
          metadata?: Record<string, unknown>;
          /** The transcriber configuration for the assistant. */
          transcriber?: Record<string, unknown>;
          /** When the assistant was created. */
          createdAt?: string;
          /** When the assistant was last updated. */
          updatedAt?: string;
          /** The first message spoken by the assistant. */
          firstMessage?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Vapi eval for a mock conversation and define the checkpoint messages used to evaluate model behavior. */
    "vapi.create_eval": {
      input: {
        /** The eval name. */
        name?: string;
        /** The eval type. */
        type?: string;
        /**
         * The mock conversation and evaluation messages.
         * @minItems 1
         */
        messages: Array<Record<string, unknown>>;
        /** The eval description. */
        description?: string;
        [key: string]: unknown;
      };
      output: {
        /** The eval created by Vapi. */
        eval: {
          /** The unique identifier of the eval. */
          id: string;
          /** The eval name. */
          name?: string;
          /** The eval type. */
          type?: string;
          /** The eval description. */
          description?: string;
          /** The organization identifier that owns the eval. */
          orgId?: string;
          /** The eval conversation messages. */
          messages?: Array<Record<string, unknown>>;
          /** When the eval was created. */
          createdAt?: string;
          /** When the eval was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create an OpenAI-compatible Vapi chat response using an assistant or squad, with optional session and transport settings. */
    "vapi.create_openai_chat": {
      input: {
        /** The chat name for reference. */
        name?: string;
        /** The input text or messages for the chat. */
        input: string | Array<Record<string, unknown>>;
        /** An inline squad configuration for the chat. */
        squad?: Record<string, unknown>;
        /** Whether Vapi should stream the response. The connector only supports false. */
        stream?: boolean;
        /** The identifier of an existing squad. */
        squadId?: string;
        /** An inline assistant configuration for the chat. */
        assistant?: Record<string, unknown>;
        /** The identifier of an existing session. */
        sessionId?: string;
        /** Transport settings for sending the chat through channels such as SMS. */
        transport?: Record<string, unknown>;
        /** The identifier of an existing assistant. */
        assistantId?: string;
        /** The previous chat identifier used as conversation context. */
        previousChatId?: string;
        /** Variable overrides applied to assistant messages. */
        assistantOverrides?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** The OpenAI-compatible response returned by Vapi. */
        response: {
          /** The unique identifier of the OpenAI-compatible response. */
          id?: string;
          /** The response object type. */
          object?: string;
          /** The response status. */
          status?: string;
          /** The response output payload. */
          output?: unknown;
          /** The response error message, when present. */
          error?: string;
          /** The response message, when present. */
          message?: string;
          /** When the response was created. */
          createdAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Vapi phone number using Vapi, Twilio, Vonage, Telnyx, or bring-your-own provider settings. */
    "vapi.create_phone_number": {
      input: {
        /** The display name of the phone number. */
        name?: string;
        /** The E.164 phone number, when the provider requires one. */
        number?: string;
        /** The SIP URI used by Vapi-managed SIP numbers. */
        sipUri?: string;
        /** The phone number provider. */
        provider: "byo-phone-number" | "twilio" | "vonage" | "vapi" | "telnyx";
        /** The squad identifier attached to the phone number. */
        squadId?: string;
        /** Whether SMS is enabled for the phone number. */
        smsEnabled?: boolean;
        /** The workflow identifier attached to the phone number. */
        workflowId?: string;
        /** The assistant identifier attached to the phone number. */
        assistantId?: string;
        /** The credential identifier used by the phone provider. */
        credentialId?: string;
        /** The Twilio API key. */
        twilioApiKey?: string;
        /** The Twilio API secret. */
        twilioApiSecret?: string;
        /** The Twilio auth token. */
        twilioAuthToken?: string;
        /** The Twilio account SID. */
        twilioAccountSid?: string;
        /** The desired area code when Vapi provisions a number automatically. */
        numberDesiredAreaCode?: string;
        /** Whether E.164 validation should be enforced. */
        numberE164CheckEnabled?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The phone number created by Vapi. */
        phoneNumber: {
          /** The unique identifier of the phone number. */
          id: string;
          /** The display name of the phone number. */
          name?: string;
          /** The E.164 phone number. */
          number?: string;
          /** The provider that manages the phone number. */
          provider: string;
          /** The phone number status reported by Vapi. */
          status?: string;
          /** The assistant identifier attached to the phone number. */
          assistantId?: string;
          /** The workflow identifier attached to the phone number. */
          workflowId?: string;
          /** The squad identifier attached to the phone number. */
          squadId?: string;
          /** When the phone number was created. */
          createdAt?: string;
          /** When the phone number was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Vapi monitoring policy with severity, threshold, and schedule or interval configuration. */
    "vapi.create_policy": {
      input: {
        /** The policy name. */
        name: string;
        /** Interval-based scheduling configuration. */
        interval?: Record<string, unknown>;
        /** Cron-like scheduling configuration. */
        schedule?: Record<string, unknown>;
        /** The severity level of the policy. */
        severity: "error" | "warning" | "info";
        /** The threshold configuration for the policy. */
        threshold: Record<string, unknown>;
        /** Monitor identifiers attached to the policy. */
        monitorIds?: Array<string>;
        /** The lookback window, in minutes. */
        lookbackWindowMinutes: number;
        [key: string]: unknown;
      };
      output: {
        /** The monitoring policy created by Vapi. */
        policy: {
          /** The unique identifier of the monitoring policy. */
          id: string;
          /** The policy name. */
          name: string;
          /** The policy severity. */
          severity: string;
          /** The threshold definition for the policy. */
          threshold: Record<string, unknown>;
          /** The interval schedule for the policy. */
          interval?: Record<string, unknown>;
          /** The cron-like schedule for the policy. */
          schedule?: Record<string, unknown>;
          /** The monitor identifiers attached to the policy. */
          monitorIds?: Array<string>;
          /** The lookback window, in minutes. */
          lookbackWindowMinutes?: number;
          /** When the policy was created. */
          createdAt?: string;
          /** When the policy was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a pronunciation dictionary provider resource in Vapi, defaulting to the 11labs pronunciation-dictionary route used by the upstream toolkit. */
    "vapi.create_provider_resource": {
      input: {
        /** The provider that should own the resource. Defaults to 11labs. */
        provider?: "11labs" | "cartesia";
        /** The provider resource type. Defaults to pronunciation-dictionary for toolkit compatibility. */
        resourceName?: string;
        /** The display name of the pronunciation dictionary. */
        name: string;
        /**
         * The pronunciation rules to create.
         * @minItems 1
         */
        rules: Array<{
          /** The rule type for an alias-based replacement. */
          type: "alias";
          /** The alias phrase that should be spoken. */
          alias: string;
          /** The text that should be replaced. */
          stringToReplace: string;
        } | {
          /** The rule type for a phoneme-based replacement. */
          type: "phoneme";
          /** The phonetic pronunciation to use. */
          phoneme: string;
          /** The phonetic alphabet used by the phoneme. */
          alphabet: "ipa" | "cmu-arpabet";
          /** The text that should be replaced. */
          stringToReplace: string;
        }>;
        [key: string]: unknown;
      };
      output: {
        /** The provider resource created by Vapi. */
        providerResource: {
          /** The unique identifier of the provider resource. */
          id: string;
          /** The provider that owns the resource. */
          provider: string;
          /** The provider resource type. */
          resourceName: string;
          /** The provider-side resource identifier. */
          resourceId: string;
          /** The raw provider resource payload. */
          resource: Record<string, unknown>;
          /** The organization identifier that owns the resource. */
          orgId?: string;
          /** When the resource was created. */
          createdAt?: string;
          /** When the resource was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Vapi scorecard for observability and evaluation using structured output metrics and conditions. */
    "vapi.create_scorecard": {
      input: {
        /** The scorecard name. */
        name?: string;
        /**
         * The scorecard metrics.
         * @minItems 1
         */
        metrics: Array<Record<string, unknown>>;
        /** The scorecard description. */
        description?: string;
        /** Assistant identifiers linked to the scorecard. */
        assistantIds?: Array<string>;
        [key: string]: unknown;
      };
      output: {
        /** The scorecard created by Vapi. */
        scorecard: {
          /** The unique identifier of the scorecard. */
          id: string;
          /** The scorecard name. */
          name?: string;
          /** The scorecard description. */
          description?: string;
          /** The scorecard metrics. */
          metrics: Array<Record<string, unknown>>;
          /** The assistant identifiers linked to the scorecard. */
          assistantIds?: Array<string>;
          /** The organization identifier that owns the scorecard. */
          orgId?: string;
          /** When the scorecard was created. */
          createdAt?: string;
          /** When the scorecard was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Vapi session with either an assistant identifier or an inline assistant configuration. */
    "vapi.create_session": {
      input: {
        /** The session name. */
        name?: string;
        /** An inline assistant configuration for the session. */
        assistant?: Record<string, unknown>;
        /** The identifier of an existing assistant. */
        assistantId?: string;
        [key: string]: unknown;
      };
      output: {
        /** The session created by Vapi. */
        session: {
          /** The unique identifier of the session. */
          id: string;
          /** The session name. */
          name?: string;
          /** The assistant identifier attached to the session. */
          assistantId?: string;
          /** The organization identifier that owns the session. */
          orgId?: string;
          /** When the session was created. */
          createdAt?: string;
          /** When the session was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Vapi call by its unique identifier. */
    "vapi.delete_call": {
      input: {
        /**
         * The call identifier to delete.
         * @minLength 1
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The deleted call returned by Vapi. */
        call: {
          /** The unique identifier of the call. */
          id: string;
          /** The call status reported by Vapi. */
          status?: string;
          /** The call type. */
          type?: string;
          /** The total cost for the call. */
          cost?: number;
          /** The call duration in seconds. */
          duration?: number;
          /** The assistant identifier attached to the call. */
          assistantId?: string;
          /** The phone number identifier attached to the call. */
          phoneNumberId?: string;
          /** When the call was created. */
          createdAt?: string;
          /** When the call started. */
          startedAt?: string;
          /** When the call ended. */
          endedAt?: string;
          /** The message history captured for the call. */
          messages?: Array<Record<string, unknown>>;
          /** Artifacts captured for the call. */
          artifact?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Vapi chat by its unique identifier. */
    "vapi.delete_chat": {
      input: {
        /**
         * The chat identifier to delete.
         * @minLength 1
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The deleted chat returned by Vapi. */
        chat: {
          /** The unique identifier of the chat. */
          id: string;
          /** The chat name. */
          name?: string;
          /** The assistant identifier used for the chat. */
          assistantId?: string;
          /** The session identifier attached to the chat. */
          sessionId?: string;
          /** The squad identifier attached to the chat. */
          squadId?: string;
          /** The previous chat identifier used as context. */
          previousChatId?: string;
          /** When the chat was created. */
          createdAt?: string;
          /** When the chat was last updated. */
          updatedAt?: string;
          /** The messages returned for the chat. */
          messages?: Array<Record<string, unknown>>;
          /** The input payload that created the chat. */
          input?: unknown;
          /** The output payload produced by the chat. */
          output?: unknown;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Vapi eval by its unique identifier. */
    "vapi.delete_eval": {
      input: {
        /**
         * The eval identifier to delete.
         * @minLength 1
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The deleted eval returned by Vapi. */
        eval: {
          /** The unique identifier of the eval. */
          id: string;
          /** The eval name. */
          name?: string;
          /** The eval type. */
          type?: string;
          /** The eval description. */
          description?: string;
          /** The organization identifier that owns the eval. */
          orgId?: string;
          /** The eval conversation messages. */
          messages?: Array<Record<string, unknown>>;
          /** When the eval was created. */
          createdAt?: string;
          /** When the eval was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Vapi eval run by its unique identifier. */
    "vapi.delete_eval_run": {
      input: {
        /**
         * The eval run identifier to delete.
         * @minLength 1
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The deletion details returned by Vapi. */
        details: Record<string, unknown>;
      };
    };
    /** Delete a Vapi phone number by its unique identifier. */
    "vapi.delete_phone_number": {
      input: {
        /**
         * The phone number identifier to delete.
         * @minLength 1
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The deleted phone number returned by Vapi. */
        phoneNumber: {
          /** The unique identifier of the phone number. */
          id: string;
          /** The display name of the phone number. */
          name?: string;
          /** The E.164 phone number. */
          number?: string;
          /** The provider that manages the phone number. */
          provider: string;
          /** The phone number status reported by Vapi. */
          status?: string;
          /** The assistant identifier attached to the phone number. */
          assistantId?: string;
          /** The workflow identifier attached to the phone number. */
          workflowId?: string;
          /** The squad identifier attached to the phone number. */
          squadId?: string;
          /** When the phone number was created. */
          createdAt?: string;
          /** When the phone number was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Vapi assistant by its unique identifier. */
    "vapi.get_assistant": {
      input: {
        /**
         * The assistant identifier to retrieve.
         * @minLength 1
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The assistant returned by Vapi. */
        assistant: {
          /** The unique identifier of the assistant. */
          id: string;
          /** The assistant name. */
          name?: string;
          /** The organization identifier that owns the assistant. */
          orgId?: string;
          /** The model configuration for the assistant. */
          model?: Record<string, unknown>;
          /** The voice configuration for the assistant. */
          voice?: Record<string, unknown>;
          /** Custom metadata attached to the assistant. */
          metadata?: Record<string, unknown>;
          /** The transcriber configuration for the assistant. */
          transcriber?: Record<string, unknown>;
          /** When the assistant was created. */
          createdAt?: string;
          /** When the assistant was last updated. */
          updatedAt?: string;
          /** The first message spoken by the assistant. */
          firstMessage?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single Vapi call by its unique identifier. */
    "vapi.get_call": {
      input: {
        /**
         * The call identifier to retrieve.
         * @minLength 1
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The call returned by Vapi. */
        call: {
          /** The unique identifier of the call. */
          id: string;
          /** The call status reported by Vapi. */
          status?: string;
          /** The call type. */
          type?: string;
          /** The total cost for the call. */
          cost?: number;
          /** The call duration in seconds. */
          duration?: number;
          /** The assistant identifier attached to the call. */
          assistantId?: string;
          /** The phone number identifier attached to the call. */
          phoneNumberId?: string;
          /** When the call was created. */
          createdAt?: string;
          /** When the call started. */
          startedAt?: string;
          /** When the call ended. */
          endedAt?: string;
          /** The message history captured for the call. */
          messages?: Array<Record<string, unknown>>;
          /** Artifacts captured for the call. */
          artifact?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Vapi chat by its unique identifier. */
    "vapi.get_chat": {
      input: {
        /**
         * The chat identifier to retrieve.
         * @minLength 1
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The chat returned by Vapi. */
        chat: {
          /** The unique identifier of the chat. */
          id: string;
          /** The chat name. */
          name?: string;
          /** The assistant identifier used for the chat. */
          assistantId?: string;
          /** The session identifier attached to the chat. */
          sessionId?: string;
          /** The squad identifier attached to the chat. */
          squadId?: string;
          /** The previous chat identifier used as context. */
          previousChatId?: string;
          /** When the chat was created. */
          createdAt?: string;
          /** When the chat was last updated. */
          updatedAt?: string;
          /** The messages returned for the chat. */
          messages?: Array<Record<string, unknown>>;
          /** The input payload that created the chat. */
          input?: unknown;
          /** The output payload produced by the chat. */
          output?: unknown;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Vapi eval by its unique identifier. */
    "vapi.get_eval": {
      input: {
        /**
         * The eval identifier to retrieve.
         * @minLength 1
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The eval returned by Vapi. */
        eval: {
          /** The unique identifier of the eval. */
          id: string;
          /** The eval name. */
          name?: string;
          /** The eval type. */
          type?: string;
          /** The eval description. */
          description?: string;
          /** The organization identifier that owns the eval. */
          orgId?: string;
          /** The eval conversation messages. */
          messages?: Array<Record<string, unknown>>;
          /** When the eval was created. */
          createdAt?: string;
          /** When the eval was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Vapi file metadata by file identifier. */
    "vapi.get_file": {
      input: {
        /**
         * The file identifier to retrieve.
         * @minLength 1
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The file returned by Vapi. */
        file: {
          /** The unique identifier of the file. */
          id: string;
          /** The file name. */
          name?: string;
          /** The file processing status. */
          status: string;
          /** The canonical URL of the file. */
          url?: string;
          /** The storage path of the file. */
          path?: string;
          /** The file size in bytes. */
          bytes?: number;
          /** The storage bucket name. */
          bucket?: string;
          /** The file MIME type. */
          mimetype?: string;
          /** The purpose assigned to the file. */
          purpose?: string;
          /** Additional file metadata. */
          metadata?: Record<string, unknown>;
          /** The organization identifier that owns the file. */
          orgId?: string;
          /** When the file was created. */
          createdAt?: string;
          /** When the file was last updated. */
          updatedAt?: string;
          /** The URL of the parsed text artifact. */
          parsedTextUrl?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Vapi tool by its unique identifier. */
    "vapi.get_tool": {
      input: {
        /**
         * The tool identifier to retrieve.
         * @minLength 1
         */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The tool returned by Vapi. */
        tool: {
          /** The unique identifier of the tool. */
          id: string;
          /** The tool name. */
          name?: string;
          /** The tool type. */
          type?: string;
          /** Whether the tool executes asynchronously. */
          async?: boolean;
          /** The URL used by the tool. */
          url?: string;
          /** The HTTP method used by the tool. */
          method?: string;
          /** The tool description. */
          description?: string;
          /** The server configuration for the tool. */
          server?: Record<string, unknown>;
          /** The function definition for the tool. */
          function?: Record<string, unknown>;
          /** Lifecycle messages configured for the tool. */
          messages?: Array<Record<string, unknown>>;
          /** Transfer destinations configured for the tool. */
          destinations?: Array<Record<string, unknown>>;
          /** When the tool was created. */
          createdAt?: string;
          /** When the tool was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Vapi assistants with optional created/updated timestamp filters and a configurable page size. */
    "vapi.list_assistants": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Return items created on or after this ISO 8601 date-time string. */
        createdAtGe?: string;
        /** Return items created after this ISO 8601 date-time string. */
        createdAtGt?: string;
        /** Return items created on or before this ISO 8601 date-time string. */
        createdAtLe?: string;
        /** Return items created before this ISO 8601 date-time string. */
        createdAtLt?: string;
        /** Return items updated on or after this ISO 8601 date-time string. */
        updatedAtGe?: string;
        /** Return items updated after this ISO 8601 date-time string. */
        updatedAtGt?: string;
        /** Return items updated on or before this ISO 8601 date-time string. */
        updatedAtLe?: string;
        /** Return items updated before this ISO 8601 date-time string. */
        updatedAtLt?: string;
        [key: string]: unknown;
      };
      output: {
        /** The assistants returned by Vapi. */
        assistants: Array<{
          /** The unique identifier of the assistant. */
          id: string;
          /** The assistant name. */
          name?: string;
          /** The organization identifier that owns the assistant. */
          orgId?: string;
          /** The model configuration for the assistant. */
          model?: Record<string, unknown>;
          /** The voice configuration for the assistant. */
          voice?: Record<string, unknown>;
          /** Custom metadata attached to the assistant. */
          metadata?: Record<string, unknown>;
          /** The transcriber configuration for the assistant. */
          transcriber?: Record<string, unknown>;
          /** When the assistant was created. */
          createdAt?: string;
          /** When the assistant was last updated. */
          updatedAt?: string;
          /** The first message spoken by the assistant. */
          firstMessage?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Vapi calls with optional filtering by call, assistant, phone number, and created or updated timestamps. */
    "vapi.list_calls": {
      input: {
        /** Filter results by a specific call identifier. */
        id?: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Filter results by the assistant identifier. */
        assistantId?: string;
        /** Filter results by the phone number identifier. */
        phoneNumberId?: string;
        /** Return items created on or after this ISO 8601 date-time string. */
        createdAtGe?: string;
        /** Return items created after this ISO 8601 date-time string. */
        createdAtGt?: string;
        /** Return items created on or before this ISO 8601 date-time string. */
        createdAtLe?: string;
        /** Return items created before this ISO 8601 date-time string. */
        createdAtLt?: string;
        /** Return items updated on or after this ISO 8601 date-time string. */
        updatedAtGe?: string;
        /** Return items updated after this ISO 8601 date-time string. */
        updatedAtGt?: string;
        /** Return items updated on or before this ISO 8601 date-time string. */
        updatedAtLe?: string;
        /** Return items updated before this ISO 8601 date-time string. */
        updatedAtLt?: string;
        [key: string]: unknown;
      };
      output: {
        /** The calls returned by Vapi. */
        calls: Array<{
          /** The unique identifier of the call. */
          id: string;
          /** The call status reported by Vapi. */
          status?: string;
          /** The call type. */
          type?: string;
          /** The total cost for the call. */
          cost?: number;
          /** The call duration in seconds. */
          duration?: number;
          /** The assistant identifier attached to the call. */
          assistantId?: string;
          /** The phone number identifier attached to the call. */
          phoneNumberId?: string;
          /** When the call was created. */
          createdAt?: string;
          /** When the call started. */
          startedAt?: string;
          /** When the call ended. */
          endedAt?: string;
          /** The message history captured for the call. */
          messages?: Array<Record<string, unknown>>;
          /** Artifacts captured for the call. */
          artifact?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Vapi chats with pagination plus optional assistant, squad, session, previous chat, and timestamp filters. */
    "vapi.list_chats": {
      input: {
        /** Filter results by a specific chat identifier. */
        id?: string;
        /**
         * The page number for pagination.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Filter results by the squad identifier. */
        squadId?: string;
        /** Filter results by the session identifier. */
        sessionId?: string;
        /** The sort order for pagination. */
        sortOrder?: "ASC" | "DESC";
        /** Filter results by the assistant identifier. */
        assistantId?: string;
        /** Filter results by multiple assistant identifiers separated by commas. */
        assistantIdAny?: string;
        /** Filter results by the previous chat identifier. */
        previousChatId?: string;
        /** Return items created on or after this ISO 8601 date-time string. */
        createdAtGe?: string;
        /** Return items created after this ISO 8601 date-time string. */
        createdAtGt?: string;
        /** Return items created on or before this ISO 8601 date-time string. */
        createdAtLe?: string;
        /** Return items created before this ISO 8601 date-time string. */
        createdAtLt?: string;
        /** Return items updated on or after this ISO 8601 date-time string. */
        updatedAtGe?: string;
        /** Return items updated after this ISO 8601 date-time string. */
        updatedAtGt?: string;
        /** Return items updated on or before this ISO 8601 date-time string. */
        updatedAtLe?: string;
        /** Return items updated before this ISO 8601 date-time string. */
        updatedAtLt?: string;
        [key: string]: unknown;
      };
      output: {
        /** The chats returned by Vapi. */
        chats: Array<{
          /** The unique identifier of the chat. */
          id: string;
          /** The chat name. */
          name?: string;
          /** The assistant identifier used for the chat. */
          assistantId?: string;
          /** The session identifier attached to the chat. */
          sessionId?: string;
          /** The squad identifier attached to the chat. */
          squadId?: string;
          /** The previous chat identifier used as context. */
          previousChatId?: string;
          /** When the chat was created. */
          createdAt?: string;
          /** When the chat was last updated. */
          updatedAt?: string;
          /** The messages returned for the chat. */
          messages?: Array<Record<string, unknown>>;
          /** The input payload that created the chat. */
          input?: unknown;
          /** The output payload produced by the chat. */
          output?: unknown;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Vapi. */
        metadata: {
          /** The current page number. */
          page?: number;
          /** The configured page size. */
          limit?: number;
          /** The total number of matching items. */
          total?: number;
          /** The current page number reported by Vapi. */
          currentPage?: number;
          /** The number of items per page reported by Vapi. */
          itemsPerPage?: number;
          /** The total number of items reported by Vapi. */
          totalItems?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Vapi evals with pagination plus optional identifier and timestamp-based filters. */
    "vapi.list_evals": {
      input: {
        /** Filter results by a specific eval identifier. */
        id?: string;
        /**
         * The page number for pagination.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The sort order for pagination. */
        sortOrder?: "ASC" | "DESC";
        /** Return items created on or after this ISO 8601 date-time string. */
        createdAtGe?: string;
        /** Return items created after this ISO 8601 date-time string. */
        createdAtGt?: string;
        /** Return items created on or before this ISO 8601 date-time string. */
        createdAtLe?: string;
        /** Return items created before this ISO 8601 date-time string. */
        createdAtLt?: string;
        /** Return items updated on or after this ISO 8601 date-time string. */
        updatedAtGe?: string;
        /** Return items updated after this ISO 8601 date-time string. */
        updatedAtGt?: string;
        /** Return items updated on or before this ISO 8601 date-time string. */
        updatedAtLe?: string;
        /** Return items updated before this ISO 8601 date-time string. */
        updatedAtLt?: string;
        [key: string]: unknown;
      };
      output: {
        /** The evals returned by Vapi. */
        evals: Array<{
          /** The unique identifier of the eval. */
          id: string;
          /** The eval name. */
          name?: string;
          /** The eval type. */
          type?: string;
          /** The eval description. */
          description?: string;
          /** The organization identifier that owns the eval. */
          orgId?: string;
          /** The eval conversation messages. */
          messages?: Array<Record<string, unknown>>;
          /** When the eval was created. */
          createdAt?: string;
          /** When the eval was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Vapi. */
        metadata: {
          /** The current page number. */
          page?: number;
          /** The configured page size. */
          limit?: number;
          /** The total number of matching items. */
          total?: number;
          /** The current page number reported by Vapi. */
          currentPage?: number;
          /** The number of items per page reported by Vapi. */
          itemsPerPage?: number;
          /** The total number of items reported by Vapi. */
          totalItems?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Vapi insights with pagination plus optional identifier and timestamp filters. */
    "vapi.list_insights": {
      input: {
        /** Filter results by a specific insight identifier. */
        id?: string;
        /**
         * The page number for pagination.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The sort order for pagination. */
        sortOrder?: "ASC" | "DESC";
        /** Return items created on or after this ISO 8601 date-time string. */
        createdAtGe?: string;
        /** Return items created after this ISO 8601 date-time string. */
        createdAtGt?: string;
        /** Return items created on or before this ISO 8601 date-time string. */
        createdAtLe?: string;
        /** Return items created before this ISO 8601 date-time string. */
        createdAtLt?: string;
        /** Return items updated on or after this ISO 8601 date-time string. */
        updatedAtGe?: string;
        /** Return items updated after this ISO 8601 date-time string. */
        updatedAtGt?: string;
        /** Return items updated on or before this ISO 8601 date-time string. */
        updatedAtLe?: string;
        /** Return items updated before this ISO 8601 date-time string. */
        updatedAtLt?: string;
        [key: string]: unknown;
      };
      output: {
        /** The insights returned by Vapi. */
        insights: Array<{
          /** The unique identifier of the insight. */
          id: string;
          /** The insight name. */
          name?: string;
          /** The visualization type for the insight. */
          type: string;
          /** The field used to group the insight. */
          groupBy?: string;
          /** The query definitions used by the insight. */
          queries: Array<Record<string, unknown>>;
          /** The formulas used by the insight. */
          formulas?: Array<Record<string, unknown>>;
          /** The single formula used by the insight. */
          formula?: Record<string, unknown>;
          /** Additional chart metadata. */
          metadata?: Record<string, unknown>;
          /** The configured time range. */
          timeRange?: unknown;
          /** The organization identifier that owns the insight. */
          orgId?: string;
          /** When the insight was created. */
          createdAt?: string;
          /** When the insight was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Vapi. */
        metadata: {
          /** The current page number. */
          page?: number;
          /** The configured page size. */
          limit?: number;
          /** The total number of matching items. */
          total?: number;
          /** The current page number reported by Vapi. */
          currentPage?: number;
          /** The number of items per page reported by Vapi. */
          itemsPerPage?: number;
          /** The total number of items reported by Vapi. */
          totalItems?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Vapi monitoring policies with optional severity, monitor, and timestamp filters. */
    "vapi.list_monitoring_policies": {
      input: {
        /** Filter results by a specific policy identifier. */
        id?: string;
        /**
         * The page number for pagination.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The monitoring policy severity level. */
        severity?: "error" | "warning" | "info";
        /** Filter results by monitor identifier. */
        monitorId?: string;
        /** The sort order for pagination. */
        sortOrder?: "ASC" | "DESC";
        /** Return items created on or after this ISO 8601 date-time string. */
        createdAtGe?: string;
        /** Return items created after this ISO 8601 date-time string. */
        createdAtGt?: string;
        /** Return items created on or before this ISO 8601 date-time string. */
        createdAtLe?: string;
        /** Return items created before this ISO 8601 date-time string. */
        createdAtLt?: string;
        /** Return items updated on or after this ISO 8601 date-time string. */
        updatedAtGe?: string;
        /** Return items updated after this ISO 8601 date-time string. */
        updatedAtGt?: string;
        /** Return items updated on or before this ISO 8601 date-time string. */
        updatedAtLe?: string;
        /** Return items updated before this ISO 8601 date-time string. */
        updatedAtLt?: string;
        [key: string]: unknown;
      };
      output: {
        /** The monitoring policies returned by Vapi. */
        policies: Array<{
          /** The unique identifier of the monitoring policy. */
          id: string;
          /** The policy name. */
          name: string;
          /** The policy severity. */
          severity: string;
          /** The threshold definition for the policy. */
          threshold: Record<string, unknown>;
          /** The interval schedule for the policy. */
          interval?: Record<string, unknown>;
          /** The cron-like schedule for the policy. */
          schedule?: Record<string, unknown>;
          /** The monitor identifiers attached to the policy. */
          monitorIds?: Array<string>;
          /** The lookback window, in minutes. */
          lookbackWindowMinutes?: number;
          /** When the policy was created. */
          createdAt?: string;
          /** When the policy was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Vapi phone numbers with optional created and updated timestamp filters. */
    "vapi.list_phone_numbers": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Return items created on or after this ISO 8601 date-time string. */
        createdAtGe?: string;
        /** Return items created after this ISO 8601 date-time string. */
        createdAtGt?: string;
        /** Return items created on or before this ISO 8601 date-time string. */
        createdAtLe?: string;
        /** Return items created before this ISO 8601 date-time string. */
        createdAtLt?: string;
        /** Return items updated on or after this ISO 8601 date-time string. */
        updatedAtGe?: string;
        /** Return items updated after this ISO 8601 date-time string. */
        updatedAtGt?: string;
        /** Return items updated on or before this ISO 8601 date-time string. */
        updatedAtLe?: string;
        /** Return items updated before this ISO 8601 date-time string. */
        updatedAtLt?: string;
        [key: string]: unknown;
      };
      output: {
        /** The phone numbers returned by Vapi. */
        phoneNumbers: Array<{
          /** The unique identifier of the phone number. */
          id: string;
          /** The display name of the phone number. */
          name?: string;
          /** The E.164 phone number. */
          number?: string;
          /** The provider that manages the phone number. */
          provider: string;
          /** The phone number status reported by Vapi. */
          status?: string;
          /** The assistant identifier attached to the phone number. */
          assistantId?: string;
          /** The workflow identifier attached to the phone number. */
          workflowId?: string;
          /** The squad identifier attached to the phone number. */
          squadId?: string;
          /** When the phone number was created. */
          createdAt?: string;
          /** When the phone number was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Vapi provider resources for a provider and resource type with optional identifier and timestamp filters. */
    "vapi.list_provider_resources": {
      input: {
        /** Filter results by a specific connector resource identifier. */
        id?: string;
        /**
         * The page number for pagination.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The provider that owns the resource. */
        provider: "11labs" | "cartesia";
        /** The provider resource type, such as pronunciation-dictionary. */
        resourceName: string;
        /** Filter results by the provider-side resource identifier. */
        resourceId?: string;
        /** The sort order for pagination. */
        sortOrder?: "ASC" | "DESC";
        /** Return items created on or after this ISO 8601 date-time string. */
        createdAtGe?: string;
        /** Return items created after this ISO 8601 date-time string. */
        createdAtGt?: string;
        /** Return items created on or before this ISO 8601 date-time string. */
        createdAtLe?: string;
        /** Return items created before this ISO 8601 date-time string. */
        createdAtLt?: string;
        /** Return items updated on or after this ISO 8601 date-time string. */
        updatedAtGe?: string;
        /** Return items updated after this ISO 8601 date-time string. */
        updatedAtGt?: string;
        /** Return items updated on or before this ISO 8601 date-time string. */
        updatedAtLe?: string;
        /** Return items updated before this ISO 8601 date-time string. */
        updatedAtLt?: string;
        [key: string]: unknown;
      };
      output: {
        /** The provider resources returned by Vapi. */
        providerResources: Array<{
          /** The unique identifier of the provider resource. */
          id: string;
          /** The provider that owns the resource. */
          provider: string;
          /** The provider resource type. */
          resourceName: string;
          /** The provider-side resource identifier. */
          resourceId: string;
          /** The raw provider resource payload. */
          resource: Record<string, unknown>;
          /** The organization identifier that owns the resource. */
          orgId?: string;
          /** When the resource was created. */
          createdAt?: string;
          /** When the resource was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Vapi. */
        metadata: {
          /** The current page number. */
          page?: number;
          /** The configured page size. */
          limit?: number;
          /** The total number of matching items. */
          total?: number;
          /** The current page number reported by Vapi. */
          currentPage?: number;
          /** The number of items per page reported by Vapi. */
          itemsPerPage?: number;
          /** The total number of items reported by Vapi. */
          totalItems?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Vapi scorecards with pagination plus optional identifier and timestamp filters. */
    "vapi.list_scorecards": {
      input: {
        /** Filter results by a specific scorecard identifier. */
        id?: string;
        /**
         * The page number for pagination.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The sort order for pagination. */
        sortOrder?: "ASC" | "DESC";
        /** Return items created on or after this ISO 8601 date-time string. */
        createdAtGe?: string;
        /** Return items created after this ISO 8601 date-time string. */
        createdAtGt?: string;
        /** Return items created on or before this ISO 8601 date-time string. */
        createdAtLe?: string;
        /** Return items created before this ISO 8601 date-time string. */
        createdAtLt?: string;
        /** Return items updated on or after this ISO 8601 date-time string. */
        updatedAtGe?: string;
        /** Return items updated after this ISO 8601 date-time string. */
        updatedAtGt?: string;
        /** Return items updated on or before this ISO 8601 date-time string. */
        updatedAtLe?: string;
        /** Return items updated before this ISO 8601 date-time string. */
        updatedAtLt?: string;
        [key: string]: unknown;
      };
      output: {
        /** The scorecards returned by Vapi. */
        scorecards: Array<{
          /** The unique identifier of the scorecard. */
          id: string;
          /** The scorecard name. */
          name?: string;
          /** The scorecard description. */
          description?: string;
          /** The scorecard metrics. */
          metrics: Array<Record<string, unknown>>;
          /** The assistant identifiers linked to the scorecard. */
          assistantIds?: Array<string>;
          /** The organization identifier that owns the scorecard. */
          orgId?: string;
          /** When the scorecard was created. */
          createdAt?: string;
          /** When the scorecard was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Vapi. */
        metadata: {
          /** The current page number. */
          page?: number;
          /** The configured page size. */
          limit?: number;
          /** The total number of matching items. */
          total?: number;
          /** The current page number reported by Vapi. */
          currentPage?: number;
          /** The number of items per page reported by Vapi. */
          itemsPerPage?: number;
          /** The total number of items reported by Vapi. */
          totalItems?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Vapi sessions with pagination plus optional identifier, name, assistant, workflow, squad, and timestamp filters. */
    "vapi.list_sessions": {
      input: {
        /** Filter results by a specific session identifier. */
        id?: string;
        /** Filter results by a specific session name. */
        name?: string;
        /**
         * The page number for pagination.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Filter results by the squad identifier. */
        squadId?: string;
        /** The sort order for pagination. */
        sortOrder?: "ASC" | "DESC";
        /** Filter results by the workflow identifier. */
        workflowId?: string;
        /** Filter results by the assistant identifier. */
        assistantId?: string;
        /** Filter results by multiple assistant identifiers separated by commas. */
        assistantIdAny?: string;
        /** Return items created on or after this ISO 8601 date-time string. */
        createdAtGe?: string;
        /** Return items created after this ISO 8601 date-time string. */
        createdAtGt?: string;
        /** Return items created on or before this ISO 8601 date-time string. */
        createdAtLe?: string;
        /** Return items created before this ISO 8601 date-time string. */
        createdAtLt?: string;
        /** Return items updated on or after this ISO 8601 date-time string. */
        updatedAtGe?: string;
        /** Return items updated after this ISO 8601 date-time string. */
        updatedAtGt?: string;
        /** Return items updated on or before this ISO 8601 date-time string. */
        updatedAtLe?: string;
        /** Return items updated before this ISO 8601 date-time string. */
        updatedAtLt?: string;
        [key: string]: unknown;
      };
      output: {
        /** The sessions returned by Vapi. */
        sessions: Array<{
          /** The unique identifier of the session. */
          id: string;
          /** The session name. */
          name?: string;
          /** The assistant identifier attached to the session. */
          assistantId?: string;
          /** The organization identifier that owns the session. */
          orgId?: string;
          /** When the session was created. */
          createdAt?: string;
          /** When the session was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Vapi. */
        metadata: {
          /** The current page number. */
          page?: number;
          /** The configured page size. */
          limit?: number;
          /** The total number of matching items. */
          total?: number;
          /** The current page number reported by Vapi. */
          currentPage?: number;
          /** The number of items per page reported by Vapi. */
          itemsPerPage?: number;
          /** The total number of items reported by Vapi. */
          totalItems?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Vapi structured outputs with pagination plus optional identifier, name, and timestamp filters. */
    "vapi.list_structured_outputs": {
      input: {
        /** Filter results by a specific structured output identifier. */
        id?: string;
        /** Filter results by a specific structured output name. */
        name?: string;
        /**
         * The page number for pagination.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The sort order for pagination. */
        sortOrder?: "ASC" | "DESC";
        /** Return items created on or after this ISO 8601 date-time string. */
        createdAtGe?: string;
        /** Return items created after this ISO 8601 date-time string. */
        createdAtGt?: string;
        /** Return items created on or before this ISO 8601 date-time string. */
        createdAtLe?: string;
        /** Return items created before this ISO 8601 date-time string. */
        createdAtLt?: string;
        /** Return items updated on or after this ISO 8601 date-time string. */
        updatedAtGe?: string;
        /** Return items updated after this ISO 8601 date-time string. */
        updatedAtGt?: string;
        /** Return items updated on or before this ISO 8601 date-time string. */
        updatedAtLe?: string;
        /** Return items updated before this ISO 8601 date-time string. */
        updatedAtLt?: string;
        [key: string]: unknown;
      };
      output: {
        /** The structured outputs returned by Vapi. */
        structuredOutputs: Array<{
          /** The unique identifier of the structured output. */
          id: string;
          /** The structured output name. */
          name?: string;
          /** The JSON schema for the structured output. */
          schema?: Record<string, unknown>;
          /** When the structured output was created. */
          createdAt?: string;
          /** When the structured output was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Vapi. */
        metadata: {
          /** The current page number. */
          page?: number;
          /** The configured page size. */
          limit?: number;
          /** The total number of matching items. */
          total?: number;
          /** The current page number reported by Vapi. */
          currentPage?: number;
          /** The number of items per page reported by Vapi. */
          itemsPerPage?: number;
          /** The total number of items reported by Vapi. */
          totalItems?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Execute TypeScript code inside Vapi's code tool sandbox and return the logs, result, and execution outcome. */
    "vapi.test_code_tool_execution": {
      input: {
        /** The TypeScript code that should be executed in Vapi's sandbox. */
        code: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the code execution completed successfully. */
        success?: boolean;
        /** The value returned by the executed code. */
        result?: unknown;
        /** The error message returned by the execution. */
        error?: string;
        /** Console logs emitted during execution. */
        logs?: Array<string>;
        /** The execution duration in milliseconds. */
        executionTimeMs?: number;
      };
    };
    /** Update an existing Vapi assistant and keep only the fields that should change in the request body. */
    "vapi.update_assistant": {
      input: {
        /**
         * The assistant identifier to update.
         * @minLength 1
         */
        id: string;
        /** The updated assistant name. */
        name?: string;
        /** The updated model configuration. */
        model?: Record<string, unknown>;
        /** The updated voice configuration. */
        voice?: Record<string, unknown>;
        /** Custom metadata for the assistant. */
        metadata?: Record<string, unknown>;
        /** The server URL that should receive assistant events. */
        serverUrl?: string;
        /** The message routing plan for the assistant. */
        messagePlan?: Record<string, unknown>;
        /** The monitoring plan for the assistant. */
        monitorPlan?: Record<string, unknown>;
        /** The updated transcriber configuration. */
        transcriber?: Record<string, unknown>;
        /** The post-call analysis plan. */
        analysisPlan?: Record<string, unknown>;
        /** The artifact generation plan. */
        artifactPlan?: Record<string, unknown>;
        /** The first message that the assistant should say. */
        firstMessage?: string;
        /** Whether HIPAA mode should be enabled. */
        hipaaEnabled?: boolean;
        /** Credential identifiers attached to the assistant. */
        credentialIds?: Array<string>;
        /** Message types sent to the client. */
        clientMessages?: Array<string>;
        /** The maximum duration handling plan. */
        maxDurationPlan?: Record<string, unknown>;
        /** Message types sent to the server. */
        serverMessages?: Array<string>;
        /** The background sound profile to use during calls. */
        backgroundSound?: string;
        /** The message spoken before ending the call. */
        endCallMessage?: string;
        /** Phrases that should end the call when spoken by the user. */
        endCallPhrases?: Array<string>;
        /** The stop-speaking plan for interruptions. */
        stopSpeakingPlan?: Record<string, unknown>;
        /** The secret used to authenticate requests to the server URL. */
        serverUrlSecret?: string;
        /** The start-speaking plan for the assistant. */
        startSpeakingPlan?: Record<string, unknown>;
        /** The message spoken when voicemail is detected. */
        voicemailMessage?: string;
        /** Whether the assistant should speak first or wait for the user. */
        firstMessageMode?: string;
        /** Whether verbal backchannel acknowledgments are enabled. */
        backchannelEnabled?: boolean;
        /** The maximum call duration in seconds. */
        maxDurationSeconds?: number;
        /** The delay before the assistant responds. */
        responseDelaySeconds?: number;
        /** The silence timeout, in seconds. */
        silenceTimeoutSeconds?: number;
        /** Transport protocol configurations such as SIP or WebRTC. */
        transportConfigurations?: Array<Record<string, unknown>>;
        /** The delay before sending LLM requests. */
        llmRequestDelaySeconds?: number;
        /** Whether background denoising is enabled. */
        backgroundDenoisingEnabled?: boolean;
        /** Whether model output should be included in message payloads. */
        modelOutputInMessagesEnabled?: boolean;
        /** The number of spoken words required to interrupt the assistant. */
        numWordsToInterruptAssistant?: number;
        [key: string]: unknown;
      };
      output: {
        /** The updated assistant returned by Vapi. */
        assistant: {
          /** The unique identifier of the assistant. */
          id: string;
          /** The assistant name. */
          name?: string;
          /** The organization identifier that owns the assistant. */
          orgId?: string;
          /** The model configuration for the assistant. */
          model?: Record<string, unknown>;
          /** The voice configuration for the assistant. */
          voice?: Record<string, unknown>;
          /** Custom metadata attached to the assistant. */
          metadata?: Record<string, unknown>;
          /** The transcriber configuration for the assistant. */
          transcriber?: Record<string, unknown>;
          /** When the assistant was created. */
          createdAt?: string;
          /** When the assistant was last updated. */
          updatedAt?: string;
          /** The first message spoken by the assistant. */
          firstMessage?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Vapi eval and keep only the fields that should change in the request body. */
    "vapi.update_eval": {
      input: {
        /**
         * The eval identifier to update.
         * @minLength 1
         */
        id: string;
        /** The updated eval name. */
        name?: string;
        /** The updated eval type. */
        type?: string;
        /** The updated eval messages. */
        messages?: Array<Record<string, unknown>>;
        /** The updated eval description. */
        description?: string;
        [key: string]: unknown;
      };
      output: {
        /** The updated eval returned by Vapi. */
        eval: {
          /** The unique identifier of the eval. */
          id: string;
          /** The eval name. */
          name?: string;
          /** The eval type. */
          type?: string;
          /** The eval description. */
          description?: string;
          /** The organization identifier that owns the eval. */
          orgId?: string;
          /** The eval conversation messages. */
          messages?: Array<Record<string, unknown>>;
          /** When the eval was created. */
          createdAt?: string;
          /** When the eval was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Vapi insight by replacing its name, queries, formulas, grouping, and time range settings. */
    "vapi.update_insight": {
      input: {
        /**
         * The insight identifier to update.
         * @minLength 1
         */
        id: string;
        /** The updated insight name. */
        name?: string;
        /** The updated insight type. */
        type: string;
        /** The single formula used by text insights. */
        formula?: Record<string, unknown>;
        /** The grouping field for the insight. */
        groupBy?: string;
        /**
         * The updated query definitions.
         * @minItems 1
         */
        queries: Array<Record<string, unknown>>;
        /** The updated formula definitions. */
        formulas?: Array<Record<string, unknown>>;
        /** The updated chart metadata. */
        metadata?: Record<string, unknown>;
        /** The updated time range for the insight. */
        timeRange?: string | Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** The updated insight returned by Vapi. */
        insight: {
          /** The unique identifier of the insight. */
          id: string;
          /** The insight name. */
          name?: string;
          /** The visualization type for the insight. */
          type: string;
          /** The field used to group the insight. */
          groupBy?: string;
          /** The query definitions used by the insight. */
          queries: Array<Record<string, unknown>>;
          /** The formulas used by the insight. */
          formulas?: Array<Record<string, unknown>>;
          /** The single formula used by the insight. */
          formula?: Record<string, unknown>;
          /** Additional chart metadata. */
          metadata?: Record<string, unknown>;
          /** The configured time range. */
          timeRange?: unknown;
          /** The organization identifier that owns the insight. */
          orgId?: string;
          /** When the insight was created. */
          createdAt?: string;
          /** When the insight was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Vapi phone number and keep only the fields that should change in the request body. */
    "vapi.update_phone_number": {
      input: {
        /**
         * The phone number identifier to update.
         * @minLength 1
         */
        id: string;
        /** The updated display name of the phone number. */
        name?: string;
        /** Webhook configurations for the phone number. */
        hooks?: Array<Record<string, unknown>>;
        /** The updated E.164 phone number. */
        number?: string;
        /** Server settings for phone number webhooks. */
        server?: Record<string, unknown>;
        /** The updated SIP URI. */
        sipUri?: string;
        /** The updated squad identifier. */
        squadId?: string;
        /** Whether SMS is enabled. */
        smsEnabled?: boolean;
        /** The updated workflow identifier. */
        workflowId?: string;
        /** The updated assistant identifier. */
        assistantId?: string;
        /** The updated credential identifier. */
        credentialId?: string;
        /** Authentication settings for SIP-based phone numbers. */
        authentication?: Record<string, unknown>;
        /** The updated Twilio API key. */
        twilioApiKey?: string;
        /** The updated Twilio API secret. */
        twilioApiSecret?: string;
        /** The updated Twilio auth token. */
        twilioAuthToken?: string;
        /** The updated Twilio account SID. */
        twilioAccountSid?: string;
        /** The fallback destination configuration. */
        fallbackDestination?: Record<string, unknown>;
        /** Whether E.164 validation is enabled. */
        numberE164CheckEnabled?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The updated phone number returned by Vapi. */
        phoneNumber: {
          /** The unique identifier of the phone number. */
          id: string;
          /** The display name of the phone number. */
          name?: string;
          /** The E.164 phone number. */
          number?: string;
          /** The provider that manages the phone number. */
          provider: string;
          /** The phone number status reported by Vapi. */
          status?: string;
          /** The assistant identifier attached to the phone number. */
          assistantId?: string;
          /** The workflow identifier attached to the phone number. */
          workflowId?: string;
          /** The squad identifier attached to the phone number. */
          squadId?: string;
          /** When the phone number was created. */
          createdAt?: string;
          /** When the phone number was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Vapi tool configuration, including function definitions, HTTP request settings, and retry policies. */
    "vapi.update_tool": {
      input: {
        /**
         * The tool identifier to update.
         * @minLength 1
         */
        id: string;
        /** The request URL for apiRequest tools. */
        url?: string;
        /** The tool type. */
        type?: string;
        /** Whether the tool executes asynchronously. */
        async?: boolean;
        /** The HTTP method for apiRequest tools. */
        method?: string;
        /** The server configuration for the tool. */
        server?: Record<string, unknown>;
        /** The function definition for function tools. */
        function?: Record<string, unknown>;
        /** Lifecycle messages for the tool. */
        messages?: Array<Record<string, unknown>>;
        /** Retry and backoff settings for the tool. */
        backoffPlan?: Record<string, unknown>;
        /** Transfer destinations for transferCall tools. */
        destinations?: Array<Record<string, unknown>>;
        /** Conditions that should reject the tool execution. */
        rejectionPlan?: Record<string, unknown>;
        /** Variable extraction settings for the tool. */
        variableExtractionPlan?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** The updated tool returned by Vapi. */
        tool: {
          /** The unique identifier of the tool. */
          id: string;
          /** The tool name. */
          name?: string;
          /** The tool type. */
          type?: string;
          /** Whether the tool executes asynchronously. */
          async?: boolean;
          /** The URL used by the tool. */
          url?: string;
          /** The HTTP method used by the tool. */
          method?: string;
          /** The tool description. */
          description?: string;
          /** The server configuration for the tool. */
          server?: Record<string, unknown>;
          /** The function definition for the tool. */
          function?: Record<string, unknown>;
          /** Lifecycle messages configured for the tool. */
          messages?: Array<Record<string, unknown>>;
          /** Transfer destinations configured for the tool. */
          destinations?: Array<Record<string, unknown>>;
          /** When the tool was created. */
          createdAt?: string;
          /** When the tool was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Upload a file to Vapi knowledge storage from a public URL or base64 payload and return the resulting file metadata. */
    "vapi.upload_file": {
      input: {
        /** The file payload to upload. */
        file: {
          /** The filename that will be uploaded to Vapi. */
          name: string;
          /** The MIME type of the uploaded file. */
          mimetype: string;
          /**
           * A public URL that Vapi can fetch for upload.
           * @format uri
           */
          url?: string;
          /** Base64-encoded file content used when no public URL is available. */
          contentBase64?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** The uploaded file returned by Vapi. */
        file: {
          /** The unique identifier of the file. */
          id: string;
          /** The file name. */
          name?: string;
          /** The file processing status. */
          status: string;
          /** The canonical URL of the file. */
          url?: string;
          /** The storage path of the file. */
          path?: string;
          /** The file size in bytes. */
          bytes?: number;
          /** The storage bucket name. */
          bucket?: string;
          /** The file MIME type. */
          mimetype?: string;
          /** The purpose assigned to the file. */
          purpose?: string;
          /** Additional file metadata. */
          metadata?: Record<string, unknown>;
          /** The organization identifier that owns the file. */
          orgId?: string;
          /** When the file was created. */
          createdAt?: string;
          /** When the file was last updated. */
          updatedAt?: string;
          /** The URL of the parsed text artifact. */
          parsedTextUrl?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
