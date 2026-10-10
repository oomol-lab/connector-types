import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a queued or scheduled WhatsApp message. A message already being sent may still go out. */
    "wbiztool.cancel_message": {
      input: {
        /** The message ID returned by a send or schedule request. */
        msg_id: number;
      };
      output: {
        /** The request success flag, 1 when cancelled. */
        status: number;
        /** The upstream cancellation message. */
        message: string;
        [key: string]: unknown;
      };
    };
    /** Read a WhatsApp message state. Sent means sent from the account, not delivered or read. */
    "wbiztool.get_message_status": {
      input: {
        /** The message ID returned by a send or schedule request. */
        msg_id: number;
      };
      output: {
        /** The message state: 0 Created, 1 Sent, 2 Failed, 3 Cancelled, or 4 Expired. */
        status: number;
        /** The message state name: Created, Sent, Failed, Cancelled, or Expired. */
        status_text: string;
        /** The upstream message state description. */
        message: string;
        /** The reason sending failed, or empty when no error was reported. */
        error: string | null;
        [key: string]: unknown;
      };
    };
    /** Schedule a WhatsApp text, image or file for one phone number or group. */
    "wbiztool.schedule_message": {
      input: Record<string, unknown>;
      output: {
        /** The request success flag, 1 when accepted. */
        status: number;
        /** The upstream acceptance message. */
        message: string;
        /** The message ID returned by a send or schedule request. */
        msg_id: number;
        [key: string]: unknown;
      };
    };
    /** Queue a WhatsApp text, image or file for one phone number or group. */
    "wbiztool.send_message": {
      input: Record<string, unknown>;
      output: {
        /** The request success flag, 1 when accepted. */
        status: number;
        /** The upstream acceptance message. */
        message: string;
        /** The message ID returned by a send or schedule request. */
        msg_id: number;
        [key: string]: unknown;
      };
    };
  }
}
