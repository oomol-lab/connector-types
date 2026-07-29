import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List the commands available in the connected TRIGGERcmd account and the computer that owns each command. */
    "triggercmd.list_commands": {
      input: Record<string, never>;
      output: {
        /** The configured TRIGGERcmd commands. */
        records: Array<{
          /**
           * The configured command name.
           * @minLength 1
           */
          name: string;
          /** The computer that owns a TRIGGERcmd command. */
          computer: {
            /**
             * The configured computer name.
             * @minLength 1
             */
            name: string;
            /** The computer identifier. */
            id?: string;
            [key: string]: unknown;
          };
          /** The voice trigger phrase for the command. */
          voice?: string;
          /** Whether the command accepts caller-provided parameters. */
          allowParams?: boolean;
          /** The optional MCP tool description configured for the command. */
          mcpToolDescription?: string;
          [key: string]: unknown;
        }>;
        /**
         * The number of command records returned.
         * @minimum 0
         */
        queryRecordCount?: number;
        [key: string]: unknown;
      };
    };
    /** Trigger a saved TRIGGERcmd command on a named computer, with optional parameters when that command permits them. */
    "triggercmd.trigger_command": {
      input: {
        /**
         * The target computer name exactly as returned by list_commands.
         * @minLength 1
         */
        computer: string;
        /**
         * The saved command name exactly as returned by list_commands.
         * @minLength 1
         */
        trigger: string;
        /** Optional parameters for a saved command that has parameter support enabled. */
        params?: string;
      };
      output: {
        /**
         * The acknowledgement or command result returned by TRIGGERcmd.
         * @minLength 1
         */
        message?: string;
        [key: string]: unknown;
      };
    };
  }
}
