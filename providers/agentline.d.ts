import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a voice agent with default instructions, greeting, voice and owner phone. */
    "agentline.create_agent": {
      input: {
        /** Display name of the voice agent. */
        name: string;
        /** Default instructions for future inbound and outbound calls; a call may override them. */
        system_prompt?: string | null;
        /** Default opening line for future calls. */
        initial_greeting?: string | null;
        /** Voice preset name or UUID; null uses the account or system default. */
        voice_id?: string | null;
        /** Transfer destination; must equal owner_phone. Setting owner_phone fills this automatically. */
        transfer_number?: string | null;
        /** Message to leave when a call reaches voicemail. */
        voicemail_message?: string | null;
        /** Owner phone in E.164 format, used for task mode and live-call transfers. */
        owner_phone?: string | null;
      };
      output: {
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        id: string;
        /** Account owning the agent. */
        account_id: string;
        /** Display name of the voice agent. */
        name: string;
        /** Default instructions for future inbound and outbound calls; a call may override them. */
        system_prompt?: string | null;
        /** Default opening line for future calls. */
        initial_greeting?: string | null;
        /** Voice preset name or UUID; null uses the account or system default. */
        voice_id?: string | null;
        /** Transfer destination; must equal owner_phone. Setting owner_phone fills this automatically. */
        transfer_number?: string | null;
        /** Message to leave when a call reaches voicemail. */
        voicemail_message?: string | null;
        /** Owner phone in E.164 format, used for task mode and live-call transfers. */
        owner_phone?: string | null;
        /** Agent creation time in ISO 8601 format. */
        created_at: string;
        [key: string]: unknown;
      };
    };
    /** Save a contact for an agent. Each phone number can appear once per agent; duplicates return HTTP 409. */
    "agentline.create_contact": {
      input: {
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
        /**
         * Contact name.
         * @minLength 1
         * @maxLength 120
         */
        name: string;
        /** Phone number with + and country code; AgentLine removes spaces, dashes, dots and parentheses. */
        phone_number: string;
        /**
         * Purpose or relationship; null or an empty string clears the label on update.
         * @maxLength 64
         */
        label?: string | null;
      };
      output: {
        /**
         * Contact ID returned by create_contact or list_contacts.
         * @minLength 1
         */
        id: string;
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
        /**
         * Contact name.
         * @minLength 1
         * @maxLength 120
         */
        name: string;
        /** Phone number with + and country code; AgentLine removes spaces, dashes, dots and parentheses. */
        phone_number: string;
        /**
         * Purpose or relationship; null or an empty string clears the label on update.
         * @maxLength 64
         */
        label?: string | null;
        /** Contact creation time in ISO 8601 format. */
        created_at: string;
        /** Last contact update time in ISO 8601 format. */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete an agent and its calls, transcripts, messages, contacts and webhook. Assigned numbers are detached but remain active on the account. */
    "agentline.delete_agent": {
      input: {
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
      };
      output: {
        /** Whether the agent was deleted. */
        deleted: boolean;
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete a contact. Calls, messages and transcripts with that number are unaffected. */
    "agentline.delete_contact": {
      input: {
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
        /**
         * Contact ID returned by create_contact or list_contacts.
         * @minLength 1
         */
        contact_id: string;
      };
      output: {
        /** Whether the contact was deleted. */
        deleted: boolean;
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
        /**
         * Contact ID returned by create_contact or list_contacts.
         * @minLength 1
         */
        contact_id: string;
        [key: string]: unknown;
      };
    };
    /** Read the account default voice and its resolved voice UUID. */
    "agentline.get_account_voice": {
      input: Record<string, never>;
      output: {
        /** Account identifier. */
        account_id: string;
        /** Stored account voice preset or UUID, or null when no override is set. */
        default_voice_id: string | null;
        /** Effective voice UUID used unless overridden by an agent or call. */
        resolved_voice_id: string;
        [key: string]: unknown;
      };
    };
    /** Get a voice agent's full configuration. */
    "agentline.get_agent": {
      input: {
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
      };
      output: {
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        id: string;
        /** Account owning the agent. */
        account_id: string;
        /** Display name of the voice agent. */
        name: string;
        /** Default instructions for future inbound and outbound calls; a call may override them. */
        system_prompt?: string | null;
        /** Default opening line for future calls. */
        initial_greeting?: string | null;
        /** Voice preset name or UUID; null uses the account or system default. */
        voice_id?: string | null;
        /** Transfer destination; must equal owner_phone. Setting owner_phone fills this automatically. */
        transfer_number?: string | null;
        /** Message to leave when a call reaches voicemail. */
        voicemail_message?: string | null;
        /** Owner phone in E.164 format, used for task mode and live-call transfers. */
        owner_phone?: string | null;
        /** Agent creation time in ISO 8601 format. */
        created_at: string;
        [key: string]: unknown;
      };
    };
    /** Get one contact from an agent's contact list. */
    "agentline.get_contact": {
      input: {
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
        /**
         * Contact ID returned by create_contact or list_contacts.
         * @minLength 1
         */
        contact_id: string;
      };
      output: {
        /**
         * Contact ID returned by create_contact or list_contacts.
         * @minLength 1
         */
        id: string;
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
        /**
         * Contact name.
         * @minLength 1
         * @maxLength 120
         */
        name: string;
        /** Phone number with + and country code; AgentLine removes spaces, dashes, dots and parentheses. */
        phone_number: string;
        /**
         * Purpose or relationship; null or an empty string clears the label on update.
         * @maxLength 64
         */
        label?: string | null;
        /** Contact creation time in ISO 8601 format. */
        created_at: string;
        /** Last contact update time in ISO 8601 format. */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** List all voice agents configured on the account. */
    "agentline.list_agents": {
      input: Record<string, never>;
      output: {
        /** Configured agents. */
        agents: Array<{
          /**
           * Agent ID returned by create_agent or list_agents.
           * @minLength 1
           */
          id: string;
          /** Account owning the agent. */
          account_id: string;
          /** Display name of the voice agent. */
          name: string;
          /** Default instructions for future inbound and outbound calls; a call may override them. */
          system_prompt?: string | null;
          /** Default opening line for future calls. */
          initial_greeting?: string | null;
          /** Voice preset name or UUID; null uses the account or system default. */
          voice_id?: string | null;
          /** Transfer destination; must equal owner_phone. Setting owner_phone fills this automatically. */
          transfer_number?: string | null;
          /** Message to leave when a call reaches voicemail. */
          voicemail_message?: string | null;
          /** Owner phone in E.164 format, used for task mode and live-call transfers. */
          owner_phone?: string | null;
          /** Agent creation time in ISO 8601 format. */
          created_at: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List contacts sorted by name. Advance offset by limit until it reaches total to retrieve further pages. */
    "agentline.list_contacts": {
      input: {
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
        /**
         * Case-insensitive substring to find in name, label or phone number.
         * @maxLength 120
         */
        q?: string | null;
        /**
         * Case-insensitive exact label filter.
         * @maxLength 64
         */
        label?: string | null;
        /** Exact phone filter with + and country code; formatting characters are ignored. */
        phone_number?: string | null;
        /**
         * Page size; defaults to 100.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Number of matching contacts to skip; defaults to 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
        /** Matching contacts sorted by name. */
        contacts: Array<{
          /**
           * Contact ID returned by create_contact or list_contacts.
           * @minLength 1
           */
          id: string;
          /**
           * Agent ID returned by create_agent or list_agents.
           * @minLength 1
           */
          agent_id: string;
          /**
           * Contact name.
           * @minLength 1
           * @maxLength 120
           */
          name: string;
          /** Phone number with + and country code; AgentLine removes spaces, dashes, dots and parentheses. */
          phone_number: string;
          /**
           * Purpose or relationship; null or an empty string clears the label on update.
           * @maxLength 64
           */
          label?: string | null;
          /** Contact creation time in ISO 8601 format. */
          created_at: string;
          /** Last contact update time in ISO 8601 format. */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** Total matching contacts before pagination. */
        total: number;
        /** Page size used. */
        limit: number;
        /** Offset used. */
        offset: number;
        [key: string]: unknown;
      };
    };
    /** List available voice presets and IDs for agent and account configuration. */
    "agentline.list_voices": {
      input: Record<string, never>;
      output: {
        /** Voice presets. */
        voices: Array<{
          /** Human-readable preset name. */
          preset_name?: string;
          /** Voice UUID. */
          voice_id?: string;
          /** Voice display name. */
          name?: string;
          /** Voice characteristics. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** System default voice ID. */
        default_voice_id: string;
        /** Guidance for selecting a voice. */
        usage_hint: string;
        [key: string]: unknown;
      };
    };
    /** Reset the account voice setting to the system default for future calls. */
    "agentline.reset_account_voice": {
      input: Record<string, never>;
      output: {
        /** Account identifier. */
        account_id: string;
        /** Stored account voice preset or UUID, or null when no override is set. */
        default_voice_id: string | null;
        /** Effective voice UUID used unless overridden by an agent or call. */
        resolved_voice_id: string;
        [key: string]: unknown;
      };
    };
    /** Set the default voice for future calls unless overridden by the agent or call. */
    "agentline.set_account_voice": {
      input: {
        /** Voice preset name or UUID returned by list_voices. */
        voice_id: string;
      };
      output: {
        /** Account identifier. */
        account_id: string;
        /** Stored account voice preset or UUID, or null when no override is set. */
        default_voice_id: string | null;
        /** Effective voice UUID used unless overridden by an agent or call. */
        resolved_voice_id: string;
        [key: string]: unknown;
      };
    };
    /** Update a voice agent for future calls. Omitted fields retain their values; active calls are unaffected. */
    "agentline.update_agent": {
      input: {
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
        /** Replacement agent name. */
        name?: string | null;
        /** Default instructions for future inbound and outbound calls; a call may override them. */
        system_prompt?: string | null;
        /** Default opening line for future calls. */
        initial_greeting?: string | null;
        /** Voice preset name or UUID; null uses the account or system default. */
        voice_id?: string | null;
        /** Transfer destination; must equal owner_phone. Setting owner_phone fills this automatically. */
        transfer_number?: string | null;
        /** Message to leave when a call reaches voicemail. */
        voicemail_message?: string | null;
        /** Owner phone in E.164 format, used for task mode and live-call transfers. */
        owner_phone?: string | null;
      };
      output: {
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        id: string;
        /** Account owning the agent. */
        account_id: string;
        /** Display name of the voice agent. */
        name: string;
        /** Default instructions for future inbound and outbound calls; a call may override them. */
        system_prompt?: string | null;
        /** Default opening line for future calls. */
        initial_greeting?: string | null;
        /** Voice preset name or UUID; null uses the account or system default. */
        voice_id?: string | null;
        /** Transfer destination; must equal owner_phone. Setting owner_phone fills this automatically. */
        transfer_number?: string | null;
        /** Message to leave when a call reaches voicemail. */
        voicemail_message?: string | null;
        /** Owner phone in E.164 format, used for task mode and live-call transfers. */
        owner_phone?: string | null;
        /** Agent creation time in ISO 8601 format. */
        created_at: string;
        [key: string]: unknown;
      };
    };
    /** Update contact fields. Omit a field to retain it; set label to null or an empty string to clear it. */
    "agentline.update_contact": {
      input: {
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
        /**
         * Contact ID returned by create_contact or list_contacts.
         * @minLength 1
         */
        contact_id: string;
        /**
         * Replacement contact name; omit to retain it.
         * @minLength 1
         * @maxLength 120
         */
        name?: string | null;
        /** Replacement phone number with + and country code; omit to retain it. */
        phone_number?: string | null;
        /**
         * Purpose or relationship; null or an empty string clears the label on update.
         * @maxLength 64
         */
        label?: string | null;
      };
      output: {
        /**
         * Contact ID returned by create_contact or list_contacts.
         * @minLength 1
         */
        id: string;
        /**
         * Agent ID returned by create_agent or list_agents.
         * @minLength 1
         */
        agent_id: string;
        /**
         * Contact name.
         * @minLength 1
         * @maxLength 120
         */
        name: string;
        /** Phone number with + and country code; AgentLine removes spaces, dashes, dots and parentheses. */
        phone_number: string;
        /**
         * Purpose or relationship; null or an empty string clears the label on update.
         * @maxLength 64
         */
        label?: string | null;
        /** Contact creation time in ISO 8601 format. */
        created_at: string;
        /** Last contact update time in ISO 8601 format. */
        updated_at: string;
        [key: string]: unknown;
      };
    };
  }
}
