import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch health information from the connected Gotify instance. */
    "gotify.get_health": {
      input: Record<string, never>;
      output: {
        /** The overall Gotify application health value. */
        health: string;
        /** The Gotify database health value. */
        database: string;
      };
    };
    /** Fetch version information from the connected Gotify instance. */
    "gotify.get_version": {
      input: Record<string, never>;
      output: {
        /** The current Gotify server version. */
        version: string;
        /** The git commit hash used to build the Gotify server. */
        commit: string;
        /** The date when the Gotify server binary was built. */
        buildDate: string;
      };
    };
    /** Send a message through the connected Gotify application token and return the created message. */
    "gotify.send_message": {
      input: {
        /**
         * The message body to send. Markdown excluding HTML is allowed.
         * @minLength 1
         */
        message: string;
        /**
         * An optional title for the Gotify message.
         * @minLength 1
         */
        title?: string;
        /** An optional message priority. If omitted, Gotify uses the application default priority. */
        priority?: number;
        /** Optional Gotify message extras keyed by the official namespace format. */
        extras?: Record<string, unknown>;
      };
      output: {
        /** The Gotify message id. */
        id: number;
        /** The id of the Gotify application that sent this message. */
        appid: number;
        /** The Gotify message body. Markdown excluding HTML is allowed. */
        message: string;
        /** The date and time when the message was created. */
        date: string;
        /** The optional Gotify message title. */
        title?: string;
        /** The Gotify message priority. */
        priority?: number;
        /** Optional Gotify message extras keyed by the official namespace format. */
        extras?: Record<string, unknown>;
      };
    };
  }
}
