import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the current balance of the connected Vonage API account. */
    "vonage.get_balance": {
      input: Record<string, never>;
      output: {
        /** The account balance in euros. */
        value: number;
        /** Whether automatic balance reload is enabled. */
        autoReload: boolean;
      };
    };
    /** Send a text or Unicode SMS through the Vonage SMS API. */
    "vonage.send_sms": {
      input: {
        /**
         * The sender name or number. Number senders use E.164 format; sender ID rules vary by country.
         * @minLength 1
         */
        from: string;
        /**
         * The destination number in E.164 format without a leading plus sign.
         * @minLength 7
         * @maxLength 15
         * @pattern ^[0-9]{7,15}$
         */
        to: string;
        /**
         * The text body of the outbound SMS.
         * @minLength 1
         */
        text: string;
        /** The SMS text encoding. */
        type?: "text" | "unicode";
        /**
         * How long Vonage should attempt delivery, in milliseconds.
         * @minimum 20000
         * @maximum 604800000
         */
        ttl?: number;
        /** Whether Vonage should request a delivery receipt. */
        statusReportRequired?: boolean;
        /**
         * The delivery receipt callback URL for this message.
         * @maxLength 100
         * @format uri
         */
        callback?: string;
        /**
         * A caller-defined reference included in the submission result.
         * @maxLength 100
         */
        clientRef?: string;
      };
      output: {
        /** The number of SMS submission results returned by Vonage. */
        messageCount: number;
        /** The submitted SMS results. */
        messages: Array<{
          /** The destination number in E.164 format. */
          to: string;
          /** The Vonage message identifier. */
          messageId: string;
          /** The Vonage SMS status code. */
          status: string;
          /** The estimated remaining account balance. */
          remainingBalance: string | null;
          /** The estimated price of the message. */
          messagePrice: string | null;
          /** The destination network identifier. */
          network: string | null;
          /** The caller-supplied client reference. */
          clientRef: string | null;
        }>;
      };
    };
  }
}
