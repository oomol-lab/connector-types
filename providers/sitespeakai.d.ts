import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one SiteSpeakAI updated answer entry from a chatbot. */
    "sitespeakai.delete_updated_answer": {
      input: {
        /**
         * The ID of your chatbot.
         * @minLength 1
         */
        chatbot_id: string;
        /**
         * The ID of the updated answer to delete.
         * @minLength 1
         */
        finetune_id: string;
      };
      output: {
        /** The confirmation message returned by SiteSpeakAI. */
        message: string;
      };
    };
    /** Retrieve the full SiteSpeakAI settings object for one chatbot. */
    "sitespeakai.get_chatbot": {
      input: {
        /**
         * The ID of your chatbot.
         * @minLength 1
         */
        chatbot_id: string;
      };
      output: {
        /** The SiteSpeakAI chatbot settings object. */
        chatbot: {
          /** The chatbot identifier. */
          id: string;
          /** The SiteSpeakAI user identifier that owns the chatbot. */
          user_id: string;
          /** The chatbot name. */
          name: string;
          /** The chatbot description. */
          description: string | null;
          /** The welcome message shown to visitors. */
          welcome_message: string;
          /** The input placeholder shown in the chat box. */
          placeholder: string;
          /** The chatbot accent color. */
          accent_color: string;
          /** The launcher icon URL or value. */
          launcher_icon: string | null;
          /** The launcher text. */
          launcher_text: string | null;
          /** The header icon URL or value. */
          header_icon: string | null;
          /** The share icon URL or value. */
          share_icon: string | null;
          /** The configured font size label. */
          font_size: string;
          /** The configured header size label. */
          header_size: string;
          /** The configured chatbot height. */
          height: number;
          /** The label used for the chatbot sources section. */
          sources_label: string;
          /** Whether sources are enabled. */
          enable_sources: number;
          /** Whether the powered-by badge is hidden. */
          hide_powered_by: number;
          /** Whether visitors can hide the chatbot. */
          enable_hide_chatbot: number;
          /** The chatbot position. */
          position: string;
          /** The connected domain. */
          domain: string | null;
          /** The domain identifier returned by SiteSpeakAI. */
          domain_id: string;
          /** Whether the domain is verified. */
          domain_verified: number;
          /** The goals prompt configured for the chatbot. */
          goals_prompt: string;
          /** The system prompt configured for the chatbot. */
          system_prompt: string;
          /** The optional user prompt. */
          user_prompt: string | null;
          /** The default fallback answer. */
          default_answer: string;
          /** The default language. */
          default_language: string;
          /** The conversation history count. */
          history_count: number;
          /** The AI model label configured for the chatbot. */
          gpt_model: string;
          /** The temperature value returned by SiteSpeakAI. */
          temperature: number;
          /** The topK retrieval count. */
          topK: number;
          /** Whether escalations are enabled. */
          enable_escalations: number;
          /** Whether escalation notifications are enabled. */
          enable_escalations_notification: number;
          /** The escalation email address. */
          escalations_email: string;
          /** The escalation message threshold. */
          escalate_message_threshold: number;
          /** Whether ChatGPT fallback is enabled. */
          enable_chatgpt_fallback: number;
          /** The excluded fallback topics string when set. */
          fallback_excluded_topics: string | null;
          /** The timestamp when the chatbot was created. */
          created_at: string;
          /** The timestamp when the chatbot was last updated. */
          updated_at: string;
          /** The deletion timestamp when the chatbot has been deleted. */
          deleted_at: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the connected SiteSpeakAI user account details. */
    "sitespeakai.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The connected SiteSpeakAI user account. */
        user: {
          /** The unique SiteSpeakAI user identifier. */
          id: string;
          /** The user display name. */
          name: string;
          /** The user email address. */
          email: string;
          /** The social account identifier when the user signed in with SSO. */
          social_id: string | null;
          /** The social provider type when the user signed in with SSO. */
          social_type: string | null;
          /** The current SiteSpeakAI team identifier. */
          current_team_id: string | null;
          /** The profile photo storage path. */
          profile_photo_path: string | null;
          /** The timestamp when the user account was created. */
          created_at: string;
          /** The timestamp when the user account was last updated. */
          updated_at: string;
          /** The avatar URL or value returned by SiteSpeakAI. */
          avatar: string;
          /** The profile photo URL. */
          profile_photo_url: string;
          [key: string]: unknown;
        };
      };
    };
    /** List every SiteSpeakAI chatbot available to the connected account. */
    "sitespeakai.list_chatbots": {
      input: Record<string, never>;
      output: {
        /** The chatbots returned by SiteSpeakAI. */
        chatbots: Array<{
          /** The chatbot identifier. */
          id: string;
          /** The chatbot name. */
          name: string;
          /** The chatbot type. */
          type: string;
          /** The timestamp when the chatbot was created. */
          created_at: string;
          /** The timestamp when the chatbot was last updated. */
          updated_at: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve conversation history for one SiteSpeakAI chatbot. */
    "sitespeakai.list_conversations": {
      input: {
        /**
         * The ID of your chatbot.
         * @minLength 1
         */
        chatbot_id: string;
        /**
         * Return only entries for this visitor conversation ID.
         * @minLength 1
         */
        conversation_id?: string;
        /** Whether cleared conversation entries should be included. */
        include_deleted?: boolean;
        /** Whether SiteSpeakAI should include source records for each conversation entry. */
        include_sources?: boolean;
        /**
         * The maximum number of conversation entries to return.
         * @minimum 1
         */
        limit?: number;
        /** The sort order for the returned conversation history. */
        order?: "asc" | "desc";
      };
      output: {
        /** The conversation entries returned by SiteSpeakAI. */
        conversations: Array<{
          /** The conversation entry identifier. */
          id: string;
          /** The chatbot identifier. */
          chatbot_id: string;
          /** The visitor identifier. */
          visitor_id: string;
          /** The thread identifier when present. */
          thread_id: string | null;
          /** The conversation message content. */
          entry: string;
          /** The speaker role for this conversation entry. */
          speaker: string;
          /** The avatar URL or value. */
          avatar: string | null;
          /** The conversation status. */
          status: string;
          /** The optional feedback value for the conversation entry. */
          feedback: string | number | null;
          /** The optional category identifier. */
          category_id: string | null;
          /** The timestamp when the conversation entry was created. */
          created_at: string;
          /** The timestamp when the conversation entry was last updated. */
          updated_at: string;
          /** The deletion timestamp when the conversation entry has been cleared. */
          deleted_at: string | null;
          /** The sources attached to this conversation entry when requested. */
          sources?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the leads captured by one SiteSpeakAI chatbot. */
    "sitespeakai.list_leads": {
      input: {
        /**
         * The ID of your chatbot.
         * @minLength 1
         */
        chatbot_id: string;
      };
      output: {
        /** The lead records returned by SiteSpeakAI. */
        leads: Array<{
          /** The lead identifier. */
          id: string;
          /** The chatbot identifier. */
          chatbot_id: string;
          /** The visitor identifier. */
          visitor_id: string;
          /** The lead name. */
          name: string | null;
          /** The lead email address. */
          email: string | null;
          /** The lead phone number. */
          phone: string | null;
          /** The lead status. */
          status: string;
          /** The timestamp of the latest conversation entry for the lead. */
          last_entry_at: string;
          /** The timestamp when the lead was created. */
          created_at: string;
          /** The timestamp when the lead was last updated. */
          updated_at: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the training sources and training statuses for one SiteSpeakAI chatbot. */
    "sitespeakai.list_sources": {
      input: {
        /**
         * The ID of your chatbot.
         * @minLength 1
         */
        chatbot_id: string;
      };
      output: {
        /** The sources attached to the chatbot. */
        sources: Array<{
          /** The source identifier. */
          id: string;
          /** The chatbot identifier. */
          chatbot_id: string;
          /** The source type. */
          type: string;
          /** The indexer label. */
          indexer: string;
          /** The optional indexer identifier. */
          indexer_id: string | null;
          /** The source URL. */
          url: string | null;
          /** The source file path. */
          path: string | null;
          /** The source title. */
          title: string | null;
          /** The source training status. */
          status: string;
          /** The source sync frequency. */
          sync_frequency: string;
          /** The timestamp when the source finished training. */
          trained_at: string | null;
          /** The timestamp when the source was created. */
          created_at: string;
          /** The timestamp when the source was last updated. */
          updated_at: string;
          /** The deletion timestamp when the source has been deleted. */
          deleted_at: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the suggested visitor prompts configured for one SiteSpeakAI chatbot. */
    "sitespeakai.list_suggested_messages": {
      input: {
        /**
         * The ID of your chatbot.
         * @minLength 1
         */
        chatbot_id: string;
      };
      output: {
        /** The suggested messages for the chatbot. */
        prompts: Array<{
          /** The prompt identifier. */
          id: string;
          /** The chatbot identifier. */
          chatbot_id: string;
          /** The prompt name. */
          name: string;
          /** The suggested visitor prompt. */
          prompt: string;
          /** The prompt type. */
          type: string;
          /** The optional action payload attached to the suggested message. */
          action: Record<string, unknown> | null;
          /** The timestamp when the prompt was created. */
          created_at: string;
          /** The timestamp when the prompt was last updated. */
          updated_at: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the updated answers configured for one SiteSpeakAI chatbot. */
    "sitespeakai.list_updated_answers": {
      input: {
        /**
         * The ID of your chatbot.
         * @minLength 1
         */
        chatbot_id: string;
      };
      output: {
        /** The updated answers returned by SiteSpeakAI. */
        finetunes: Array<{
          /** The finetune identifier. */
          id: string;
          /** The chatbot identifier. */
          chatbot_id: string;
          /** The question associated with the updated answer. */
          question: string;
          /** The custom answer that SiteSpeakAI should return. */
          suggested_answer: string;
          /** The SiteSpeakAI vector identifier for the updated answer. */
          vector_id: string;
          /** The timestamp when the updated answer was created. */
          created_at: string;
          /** The timestamp when the updated answer was last updated. */
          updated_at: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Send a question to one SiteSpeakAI chatbot and return its answer plus source URLs. */
    "sitespeakai.query_chatbot": {
      input: {
        /**
         * The ID of your chatbot.
         * @minLength 1
         */
        chatbot_id: string;
        /**
         * The question or prompt to send to the chatbot.
         * @minLength 1
         */
        prompt: string;
        /**
         * An optional identifier used to group messages into one chatbot conversation.
         * @minLength 1
         */
        conversation_id?: string;
        /** The response format returned by SiteSpeakAI. */
        format?: "html" | "markdown";
      };
      output: {
        /** The answer text returned by the chatbot. */
        text: string;
        /** The source URLs used by the chatbot to answer the query. */
        urls: Array<string>;
      };
    };
    /** Create or update one SiteSpeakAI updated answer entry for a chatbot. */
    "sitespeakai.upsert_updated_answer": {
      input: {
        /**
         * The ID of your chatbot.
         * @minLength 1
         */
        chatbot_id: string;
        /**
         * The question to associate with the updated answer.
         * @minLength 1
         */
        question: string;
        /**
         * The answer that SiteSpeakAI should return for the question.
         * @minLength 1
         */
        suggested_answer: string;
      };
      output: {
        /** The confirmation message returned by SiteSpeakAI. */
        message: string;
        /** One updated answer returned by SiteSpeakAI. */
        finetune: {
          /** The finetune identifier. */
          id: string;
          /** The chatbot identifier. */
          chatbot_id: string;
          /** The question associated with the updated answer. */
          question: string;
          /** The custom answer that SiteSpeakAI should return. */
          suggested_answer: string;
          /** The SiteSpeakAI vector identifier for the updated answer. */
          vector_id: string;
          /** The timestamp when the updated answer was created. */
          created_at: string;
          /** The timestamp when the updated answer was last updated. */
          updated_at: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
