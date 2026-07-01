import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Octave agent by OId. */
    "octave.get_agent": {
      input: {
        /**
         * The Octave agent OId.
         * @minLength 1
         */
        oId: string;
      };
      output: {
        /** Request metadata returned by Octave. */
        metadata: {
          /** API usage reported by Octave for this request. */
          usage?: number;
          /** Octave request ID. */
          requestId: string;
          /** Metadata message returned by Octave. */
          message?: string;
          /** Timestamp returned by Octave. */
          timestamp: string;
          [key: string]: unknown;
        };
        /** One Octave agent. */
        agent: {
          /** The Octave OId of the agent. */
          oId: string;
          /** The name of the agent. */
          name: string;
          /** The description of the agent. */
          description: string;
          /** The Octave agent type identifier. */
          type: "PROSPECTOR" | "CONTENT" | "EMAIL" | "ENRICH_PERSON" | "ENRICH_COMPANY" | "QUALIFY_PERSON" | "QUALIFY_COMPANY" | "CALL_PREP" | "CONTEXT";
          /** The creation date of the agent. */
          createdAt: string | null;
          /** The last updated date of the agent. */
          updatedAt: string | null;
          /** The cost to run the agent. */
          costToRun?: number;
          /** The number of steps in the agent when provided. */
          steps?: number;
          /** The item type when experiments are included. */
          itemType?: string;
          /** The output format for content agents. */
          contentOutputFormat?: "JSON" | "TEXT" | "HTML" | "MARKDOWN";
          /** Full agent configuration data returned by Octave. */
          data?: unknown;
          /** Warnings returned for ignored or mismatched fields. */
          warnings?: Array<string>;
          [key: string]: unknown;
        };
        /** The raw response payload returned by Octave. */
        raw: Record<string, unknown>;
      };
    };
    /** List Octave agent types available to the workspace. */
    "octave.list_agent_types": {
      input: Record<string, never>;
      output: {
        /** Request metadata returned by Octave. */
        metadata: {
          /** API usage reported by Octave for this request. */
          usage?: number;
          /** Octave request ID. */
          requestId: string;
          /** Metadata message returned by Octave. */
          message?: string;
          /** Timestamp returned by Octave. */
          timestamp: string;
          [key: string]: unknown;
        };
        /** Total number of agent types. */
        total: number;
        /** The agent type definitions returned by Octave. */
        agentTypes: Array<{
          /** The Octave agent type identifier. */
          type: "PROSPECTOR" | "CONTENT" | "EMAIL" | "ENRICH_PERSON" | "ENRICH_COMPANY" | "QUALIFY_PERSON" | "QUALIFY_COMPANY" | "CALL_PREP" | "CONTEXT";
          /** The human-readable name of the agent type. */
          name: string;
          /** A description of what this agent type does. */
          description: string;
          /** The category this agent type belongs to. */
          category: string;
          [key: string]: unknown;
        }>;
        /** The raw response payload returned by Octave. */
        raw: Record<string, unknown>;
      };
    };
    /** List Octave agents in the current workspace. */
    "octave.list_agents": {
      input: {
        /** The Octave agent type identifier. */
        type?: "PROSPECTOR" | "CONTENT" | "EMAIL" | "ENRICH_PERSON" | "ENRICH_COMPANY" | "QUALIFY_PERSON" | "QUALIFY_COMPANY" | "CALL_PREP" | "CONTEXT";
        /**
         * Query used to filter the agents returned by Octave.
         * @minLength 1
         */
        query?: string;
        /**
         * Offset of the first agent to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum number of agents to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Field used to order returned agents. */
        orderField?: "createdAt" | "updatedAt";
        /** Direction used to order returned agents. */
        orderDirection?: "ASC" | "DESC";
        /** Whether to include experiments when listing EMAIL or CONTENT agents. */
        includeExperiments?: boolean;
      };
      output: {
        /** Request metadata returned by Octave. */
        metadata: {
          /** API usage reported by Octave for this request. */
          usage?: number;
          /** Octave request ID. */
          requestId: string;
          /** Metadata message returned by Octave. */
          message?: string;
          /** Timestamp returned by Octave. */
          timestamp: string;
          [key: string]: unknown;
        };
        /** Whether Octave has more agents after this page. */
        hasNext: boolean;
        /** Total number of matching agents. */
        total: number;
        /** The agents returned by Octave. */
        agents: Array<{
          /** The Octave OId of the agent. */
          oId: string;
          /** The name of the agent. */
          name: string;
          /** The description of the agent. */
          description: string;
          /** The Octave agent type identifier. */
          type: "PROSPECTOR" | "CONTENT" | "EMAIL" | "ENRICH_PERSON" | "ENRICH_COMPANY" | "QUALIFY_PERSON" | "QUALIFY_COMPANY" | "CALL_PREP" | "CONTEXT";
          /** The creation date of the agent. */
          createdAt: string | null;
          /** The last updated date of the agent. */
          updatedAt: string | null;
          /** The cost to run the agent. */
          costToRun?: number;
          /** The number of steps in the agent when provided. */
          steps?: number;
          /** The item type when experiments are included. */
          itemType?: string;
          /** The output format for content agents. */
          contentOutputFormat?: "JSON" | "TEXT" | "HTML" | "MARKDOWN";
          /** Full agent configuration data returned by Octave. */
          data?: unknown;
          /** Warnings returned for ignored or mismatched fields. */
          warnings?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The raw response payload returned by Octave. */
        raw: Record<string, unknown>;
      };
    };
    /** List languages supported by Octave agents. */
    "octave.list_languages": {
      input: Record<string, never>;
      output: {
        /** Request metadata returned by Octave. */
        metadata: {
          /** API usage reported by Octave for this request. */
          usage?: number;
          /** Octave request ID. */
          requestId: string;
          /** Metadata message returned by Octave. */
          message?: string;
          /** Timestamp returned by Octave. */
          timestamp: string;
          [key: string]: unknown;
        };
        /** The languages returned by Octave. */
        languages: Array<{
          /** The display name of the language. */
          name: string;
          /** The language code. */
          code: string;
          /** The language flag or emoji returned by Octave. */
          flag: string;
          [key: string]: unknown;
        }>;
        /** The raw response payload returned by Octave. */
        raw: Record<string, unknown>;
      };
    };
    /** Run an Octave call prep agent synchronously. */
    "octave.run_call_prep_agent": {
      input: {
        /**
         * The Octave agent OId. Find it in the Agents section of the Octave dashboard.
         * @minLength 1
         */
        agentOId: string;
        /**
         * Email address of the person to process.
         * @minLength 1
         */
        email?: string;
        /**
         * First name of the person to process.
         * @minLength 1
         */
        firstName?: string;
        /**
         * Last name of the person to process.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Job title of the person to process.
         * @minLength 1
         */
        jobTitle?: string;
        /**
         * Company domain associated with the person.
         * @minLength 1
         */
        companyDomain?: string;
        /**
         * Company name associated with the person.
         * @minLength 1
         */
        companyName?: string;
        /**
         * LinkedIn profile URL of the person.
         * @minLength 1
         */
        linkedInProfile?: string;
        /**
         * CRM contact ID associated with the person.
         * @minLength 1
         */
        crmContactId?: string;
        /**
         * CRM lead ID associated with the person.
         * @minLength 1
         */
        crmLeadId?: string;
        /**
         * CRM account ID associated with the person.
         * @minLength 1
         */
        crmAccountId?: string;
        /** Runtime context forwarded to Octave for the agent run. */
        runtimeContext?: unknown;
        /** Whether Octave should return full annotation data including metadata. */
        includeFullAnnotation?: boolean;
      };
      output: {
        /** Request metadata returned by Octave. */
        metadata: {
          /** API usage reported by Octave for this request. */
          usage?: number;
          /** Octave request ID. */
          requestId: string;
          /** Metadata message returned by Octave. */
          message?: string;
          /** Timestamp returned by Octave. */
          timestamp: string;
          [key: string]: unknown;
        };
        /** Whether Octave found a result for the agent run. */
        found: boolean;
        /** Message returned by Octave for the agent run. */
        message: string | null;
        /** Agent-specific data returned by Octave. */
        data: unknown;
        /** The raw response payload returned by Octave. */
        raw: Record<string, unknown>;
      };
    };
    /** Run an Octave context agent synchronously. */
    "octave.run_context_agent": {
      input: {
        /**
         * The Octave agent OId for the preset context configuration.
         * @minLength 1
         */
        agentOId: string;
        /**
         * Question or task to fetch context for.
         * @minLength 1
         */
        query?: string;
        /**
         * Runtime context string used by Octave when query is not provided.
         * @minLength 1
         */
        runtimeContext?: string;
        /** Optional person, company, and detail context for an Octave context agent run. */
        additionalContext?: {
          /** Optional person context for an Octave context agent run. */
          person?: {
            /**
             * First name of the person.
             * @minLength 1
             */
            firstName?: string;
            /**
             * Last name of the person.
             * @minLength 1
             */
            lastName?: string;
            /**
             * Title of the person.
             * @minLength 1
             */
            title?: string;
            /**
             * Email address of the person.
             * @format email
             */
            email?: string;
            /**
             * LinkedIn profile URL of the person.
             * @format uri
             */
            linkedInProfileUrl?: string;
            /**
             * CRM contact ID associated with the person.
             * @minLength 1
             */
            crmContactId?: string;
            /**
             * CRM lead ID associated with the person.
             * @minLength 1
             */
            crmLeadId?: string;
            /**
             * CRM account ID associated with the person.
             * @minLength 1
             */
            crmAccountId?: string;
          };
          /** Optional company context for an Octave context agent run. */
          company?: {
            /**
             * Company name.
             * @minLength 1
             */
            name?: string;
            /**
             * Company domain.
             * @minLength 1
             */
            domain?: string;
            /**
             * LinkedIn profile URL of the company.
             * @format uri
             */
            linkedInProfileUrl?: string;
            /**
             * CRM account ID associated with the company.
             * @minLength 1
             */
            crmAccountId?: string;
          };
          /**
           * Free-form text providing additional context.
           * @minLength 1
           */
          details?: string;
        };
      };
      output: {
        /** Request metadata returned by Octave. */
        metadata: {
          /** API usage reported by Octave for this request. */
          usage?: number;
          /** Octave request ID. */
          requestId: string;
          /** Metadata message returned by Octave. */
          message?: string;
          /** Timestamp returned by Octave. */
          timestamp: string;
          [key: string]: unknown;
        };
        /** Whether Octave found a result for the agent run. */
        found: boolean;
        /** Message returned by Octave for the agent run. */
        message: string | null;
        /** Agent-specific data returned by Octave. */
        data: unknown;
        /** The raw response payload returned by Octave. */
        raw: Record<string, unknown>;
      };
    };
    /** Run an Octave company enrichment agent synchronously. */
    "octave.run_enrich_company_agent": {
      input: {
        /**
         * The Octave agent OId. Find it in the Agents section of the Octave dashboard.
         * @minLength 1
         */
        agentOId: string;
        /**
         * Company domain to process.
         * @minLength 1
         */
        companyDomain?: string;
        /**
         * Company name to process.
         * @minLength 1
         */
        companyName?: string;
        /**
         * CRM account ID associated with the company.
         * @minLength 1
         */
        crmAccountId?: string;
        /** Runtime context forwarded to Octave for the agent run. */
        runtimeContext?: unknown;
        /** Whether Octave should return full annotation data including metadata. */
        includeFullAnnotation?: boolean;
      };
      output: {
        /** Request metadata returned by Octave. */
        metadata: {
          /** API usage reported by Octave for this request. */
          usage?: number;
          /** Octave request ID. */
          requestId: string;
          /** Metadata message returned by Octave. */
          message?: string;
          /** Timestamp returned by Octave. */
          timestamp: string;
          [key: string]: unknown;
        };
        /** Whether Octave found a result for the agent run. */
        found: boolean;
        /** Message returned by Octave for the agent run. */
        message: string | null;
        /** Agent-specific data returned by Octave. */
        data: unknown;
        /** The raw response payload returned by Octave. */
        raw: Record<string, unknown>;
      };
    };
    /** Run an Octave person enrichment agent synchronously. */
    "octave.run_enrich_person_agent": {
      input: {
        /**
         * The Octave agent OId. Find it in the Agents section of the Octave dashboard.
         * @minLength 1
         */
        agentOId: string;
        /**
         * Email address of the person to process.
         * @minLength 1
         */
        email?: string;
        /**
         * First name of the person to process.
         * @minLength 1
         */
        firstName?: string;
        /**
         * Last name of the person to process.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Job title of the person to process.
         * @minLength 1
         */
        jobTitle?: string;
        /**
         * Company domain associated with the person.
         * @minLength 1
         */
        companyDomain?: string;
        /**
         * Company name associated with the person.
         * @minLength 1
         */
        companyName?: string;
        /**
         * LinkedIn profile URL of the person.
         * @minLength 1
         */
        linkedInProfile?: string;
        /**
         * CRM contact ID associated with the person.
         * @minLength 1
         */
        crmContactId?: string;
        /**
         * CRM lead ID associated with the person.
         * @minLength 1
         */
        crmLeadId?: string;
        /**
         * CRM account ID associated with the person.
         * @minLength 1
         */
        crmAccountId?: string;
        /** Runtime context forwarded to Octave for the agent run. */
        runtimeContext?: unknown;
        /** Whether Octave should return full annotation data including metadata. */
        includeFullAnnotation?: boolean;
      };
      output: {
        /** Request metadata returned by Octave. */
        metadata: {
          /** API usage reported by Octave for this request. */
          usage?: number;
          /** Octave request ID. */
          requestId: string;
          /** Metadata message returned by Octave. */
          message?: string;
          /** Timestamp returned by Octave. */
          timestamp: string;
          [key: string]: unknown;
        };
        /** Whether Octave found a result for the agent run. */
        found: boolean;
        /** Message returned by Octave for the agent run. */
        message: string | null;
        /** Agent-specific data returned by Octave. */
        data: unknown;
        /** The raw response payload returned by Octave. */
        raw: Record<string, unknown>;
      };
    };
    /** Run an Octave company qualification agent synchronously. */
    "octave.run_qualify_company_agent": {
      input: {
        /**
         * The Octave agent OId. Find it in the Agents section of the Octave dashboard.
         * @minLength 1
         */
        agentOId: string;
        /**
         * Company domain to process.
         * @minLength 1
         */
        companyDomain?: string;
        /**
         * Company name to process.
         * @minLength 1
         */
        companyName?: string;
        /**
         * CRM account ID associated with the company.
         * @minLength 1
         */
        crmAccountId?: string;
        /** Runtime context forwarded to Octave for the agent run. */
        runtimeContext?: unknown;
        /** Whether Octave should return full annotation data including metadata. */
        includeFullAnnotation?: boolean;
      };
      output: {
        /** Request metadata returned by Octave. */
        metadata: {
          /** API usage reported by Octave for this request. */
          usage?: number;
          /** Octave request ID. */
          requestId: string;
          /** Metadata message returned by Octave. */
          message?: string;
          /** Timestamp returned by Octave. */
          timestamp: string;
          [key: string]: unknown;
        };
        /** Whether Octave found a result for the agent run. */
        found: boolean;
        /** Message returned by Octave for the agent run. */
        message: string | null;
        /** Agent-specific data returned by Octave. */
        data: unknown;
        /** The raw response payload returned by Octave. */
        raw: Record<string, unknown>;
      };
    };
    /** Run an Octave person qualification agent synchronously. */
    "octave.run_qualify_person_agent": {
      input: {
        /**
         * The Octave agent OId. Find it in the Agents section of the Octave dashboard.
         * @minLength 1
         */
        agentOId: string;
        /**
         * Email address of the person to process.
         * @minLength 1
         */
        email?: string;
        /**
         * First name of the person to process.
         * @minLength 1
         */
        firstName?: string;
        /**
         * Last name of the person to process.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Job title of the person to process.
         * @minLength 1
         */
        jobTitle?: string;
        /**
         * Company domain associated with the person.
         * @minLength 1
         */
        companyDomain?: string;
        /**
         * Company name associated with the person.
         * @minLength 1
         */
        companyName?: string;
        /**
         * LinkedIn profile URL of the person.
         * @minLength 1
         */
        linkedInProfile?: string;
        /**
         * CRM contact ID associated with the person.
         * @minLength 1
         */
        crmContactId?: string;
        /**
         * CRM lead ID associated with the person.
         * @minLength 1
         */
        crmLeadId?: string;
        /**
         * CRM account ID associated with the person.
         * @minLength 1
         */
        crmAccountId?: string;
        /** Runtime context forwarded to Octave for the agent run. */
        runtimeContext?: unknown;
        /** Whether Octave should return full annotation data including metadata. */
        includeFullAnnotation?: boolean;
      };
      output: {
        /** Request metadata returned by Octave. */
        metadata: {
          /** API usage reported by Octave for this request. */
          usage?: number;
          /** Octave request ID. */
          requestId: string;
          /** Metadata message returned by Octave. */
          message?: string;
          /** Timestamp returned by Octave. */
          timestamp: string;
          [key: string]: unknown;
        };
        /** Whether Octave found a result for the agent run. */
        found: boolean;
        /** Message returned by Octave for the agent run. */
        message: string | null;
        /** Agent-specific data returned by Octave. */
        data: unknown;
        /** The raw response payload returned by Octave. */
        raw: Record<string, unknown>;
      };
    };
    /** Validate the Octave API key and return workspace metadata. */
    "octave.validate_api_key": {
      input: Record<string, never>;
      output: {
        /** Request metadata returned by Octave. */
        metadata: {
          /** API usage reported by Octave for this request. */
          usage?: number;
          /** Octave request ID. */
          requestId: string;
          /** Metadata message returned by Octave. */
          message?: string;
          /** Timestamp returned by Octave. */
          timestamp: string;
          [key: string]: unknown;
        };
        /** Status of the API key validation. */
        status: "ok";
        /** Whether the API key is valid. */
        valid: boolean;
        /** The unique identifier for the workspace. */
        workspaceOId: string;
        /** The name of the workspace. */
        workspaceName: string;
        /** The domain associated with the workspace. */
        workspaceDomain: string | null;
        /** The unique identifier for the organization. */
        organizationOId: string;
        /** The name of the organization. */
        organizationName: string;
        /** The domain associated with the organization. */
        organizationDomain: string;
        /** The URL-friendly slug for the organization. */
        organizationSlug: string;
        /** The MCP server URL with encoded workspace context. */
        mcpUrl: string;
        /** Credit usage information for the API key. */
        credits: {
          /** Total credits used. */
          totalUsed: number;
          /** Total credits remaining. */
          totalRemaining: number;
          /** Total maximum credits available. */
          totalMax: number;
          /** Number of credits used in the current period. */
          quotaUsed: number;
          /** Number of credits available in the current period. */
          quotaAvailable: number;
          /** Maximum credits allowed in the current period. */
          quotaMax: number;
          /** The tracking period for the credits. */
          period: string;
          /** Credits used from the subscription credit pool. */
          creditsUsed: number;
          /** Credits available from the subscription credit pool. */
          creditsAvailable: number;
          [key: string]: unknown;
        };
        /** The raw response payload returned by Octave. */
        raw: Record<string, unknown>;
      };
    };
  }
}
