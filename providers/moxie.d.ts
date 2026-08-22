import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List all clients in the connected Moxie workspace. */
    "moxie.list_clients": {
      input: Record<string, never>;
      output: {
        /** Clients returned by Moxie. */
        clients: Array<{
          /** The client business name. */
          name?: string;
          /** The client record type. */
          clientType?: "Client" | "Prospect";
          /** Whether the client is archived. */
          archive?: boolean;
          /** The client's ISO 4217 currency code. */
          currency?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List sales pipeline stages configured in the Moxie workspace. */
    "moxie.list_pipeline_stages": {
      input: Record<string, never>;
      output: {
        /** Sales pipeline stages returned by Moxie. */
        stages: Array<{
          /** The pipeline stage ID. */
          id?: string;
          /** The pipeline stage label. */
          label?: string;
          /** The hexadecimal color assigned to the stage. */
          hexColor?: string;
          /** The pipeline stage type. */
          stageType?: "New" | "InProgress" | "OnHold" | "ClosedWon" | "ClosedLost" | "Complete";
          [key: string]: unknown;
        }>;
      };
    };
    /** List project task stages configured in the Moxie workspace. */
    "moxie.list_task_stages": {
      input: Record<string, never>;
      output: {
        /** Project task stages returned by Moxie. */
        stages: Array<{
          /** The task stage ID. */
          id?: string;
          /** The task stage label. */
          label?: string;
          /** The hexadecimal color assigned to the stage. */
          hexColor?: string;
          /** Whether tasks in this stage are complete. */
          complete?: boolean;
          /** Whether this stage requires client approval. */
          clientApproval?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Moxie clients by client name or contact information. */
    "moxie.search_clients": {
      input: {
        /**
         * The text to search for.
         * @minLength 1
         * @pattern \S
         */
        query: string;
      };
      output: {
        /** Clients matching the search text. */
        clients: Array<{
          /** The client business name. */
          name?: string;
          /** The client record type. */
          clientType?: "Client" | "Prospect";
          /** Whether the client is archived. */
          archive?: boolean;
          /** The client's ISO 4217 currency code. */
          currency?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Moxie contacts by first name, last name, or email address. */
    "moxie.search_contacts": {
      input: {
        /**
         * The text to search for.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
      };
      output: {
        /** Contacts matching the search text. */
        contacts: Array<{
          /** The contact ID. */
          id?: string;
          /** The associated client ID. */
          clientId?: string;
          /** The contact's first name. */
          firstName?: string;
          /** The contact's last name. */
          lastName?: string;
          /** The contact's email address. */
          email?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search active Moxie projects, optionally filtering by client name. */
    "moxie.search_projects": {
      input: {
        /**
         * The text to search for.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
      };
      output: {
        /** Active projects matching the client filter. */
        projects: Array<{
          /** The project ID. */
          id?: string;
          /** The associated client ID. */
          clientId?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is active. */
          active?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
