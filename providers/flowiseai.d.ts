import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the FlowiseAI chatflow currently protected by the connected API key. */
    "flowiseai.get_chatflow": {
      input: Record<string, never>;
      output: {
        /** The protected FlowiseAI chatflow tied to the API key. */
        chatflow: {
          /**
           * The FlowiseAI chatflow identifier.
           * @minLength 1
           */
          id: string;
          /** The FlowiseAI chatflow name. */
          name: string;
          /** The serialized FlowiseAI flow definition. */
          flowData: string;
          /** Whether the chatflow is deployed. */
          deployed: boolean;
          /** Whether the chatflow remains publicly accessible. */
          isPublic: boolean;
          /** The FlowiseAI API key identifier assigned to the chatflow. */
          apiKeyId: string | null;
          /** The serialized FlowiseAI chatbot configuration. */
          chatbotConfig: string;
          /** The serialized FlowiseAI API configuration. */
          apiConfig: string;
          /** The serialized FlowiseAI analytics configuration. */
          analytic: string;
          /** The serialized FlowiseAI speech-to-text configuration. */
          speechToText: string;
          /** The optional FlowiseAI category string. */
          category: string | null;
          /** The FlowiseAI flow type. */
          type: "CHATFLOW" | "MULTIAGENT";
          /**
           * The ISO timestamp when the chatflow was created.
           * @format date-time
           */
          createdDate: string;
          /**
           * The ISO timestamp when the chatflow was last updated.
           * @format date-time
           */
          updatedDate: string;
        };
      };
    };
    /** Send a JSON-only prediction request to the FlowiseAI chatflow protected by the connected API key. */
    "flowiseai.send_message": {
      input: {
        /**
         * The user message to send to the FlowiseAI chatflow.
         * @minLength 1
         */
        question?: string;
        /** The form payload to send instead of question for Agentflow V2. */
        form?: Record<string, unknown>;
        /** FlowiseAI runtime overrideConfig values such as variables or session identifiers. */
        overrideConfig?: Record<string, unknown>;
        /** Previous conversation messages to pass back for context. */
        history?: Array<{
          /** The role of one prior chat message. */
          role: "apiMessage" | "userMessage";
          /** The content of the prior message. */
          content: string;
        }>;
        /** Human feedback used to resume a stopped FlowiseAI execution. */
        humanInput?: {
          /** The human decision used to resume execution. */
          type: "proceed" | "reject";
          /** Optional feedback returned to the paused flow. */
          feedback?: string;
        };
      };
      output: {
        /** The AI-generated response text. */
        text: string;
        /** The optional structured JSON payload returned by FlowiseAI. */
        json: Record<string, unknown> | null;
        /** The original question echoed by FlowiseAI when it returns one. */
        question: string | null;
        /** The FlowiseAI chat session identifier. */
        chatId: string | null;
        /** The FlowiseAI chat message identifier. */
        chatMessageId: string | null;
        /** The FlowiseAI session identifier. */
        sessionId: string | null;
        /** The FlowiseAI memory type used for this response. */
        memoryType: string | null;
        /** The source documents returned by FlowiseAI. */
        sourceDocuments: Array<{
          /** The page content retrieved by FlowiseAI. */
          pageContent: string;
          /** The document metadata returned by FlowiseAI. */
          metadata: Record<string, string>;
        }> | null;
        /** The tools invoked by FlowiseAI while producing the response. */
        usedTools: Array<{
          /** The tool name that FlowiseAI used. */
          tool: string;
          /** The input object passed to the tool. */
          toolInput: Record<string, unknown>;
          /** The output returned by the tool. */
          toolOutput: string;
        }> | null;
      };
    };
  }
}
