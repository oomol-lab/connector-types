import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current TelTel account balance, credit, and credit limit. */
    "teltel.get_account_balance": {
      input: Record<string, never>;
      output: {
        /** The current credit value of the TelTel account. */
        credit: number;
        /** The maximum credit limit configured for the TelTel account. */
        creditLimit: number;
        /** The currently available TelTel balance. */
        balance: number;
      };
    };
    /** Get the delivery report for one outbound TelTel SMS message. */
    "teltel.get_sms_report": {
      input: {
        /**
         * The TelTel outbound SMS message ID.
         * @minLength 1
         */
        messageId: string;
        /** Comma-separated list of TelTel report fields to include in the response. */
        fields?: string;
      };
      output: {
        /** The TelTel message ID. */
        messageId: string;
        /** The sender ID or DID used for the outbound SMS. */
        from: string | null;
        /** The destination phone number in international format. */
        to: string | null;
        /** The current delivery state reported by TelTel. */
        state: string | null;
        /** The more detailed delivery state returned by TelTel. */
        detailedState: string | null;
        /** The timestamp when TelTel created the message. */
        createdAt: string | null;
        /** The timestamp when the message was delivered, if available. */
        deliveredAt: string | null;
        /** Whether TelTel split the message into multiple parts. */
        multipart: boolean | null;
        /** The number of SMS parts used for the message. */
        parts: number | null;
        /** The TelTel price per message part. */
        price: number | null;
        /** The total TelTel price for the whole message. */
        totalPrice: number | null;
        /** The outbound SMS message body. */
        message: string | null;
        /** The TelTel campaign ID when the SMS belongs to a campaign. */
        campaignId: number | null;
        /** The TelTel error description when delivery failed. */
        errorMessage: string | null;
      };
    };
    /** List outbound TelTel SMS delivery reports with optional paging and filter parameters. */
    "teltel.list_sms_reports": {
      input: {
        /**
         * Maximum number of reports to return, up to 5000.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
        /**
         * Number of reports to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Comma-separated list of TelTel report fields to include in the response. */
        fields?: string;
        /** Comma-separated TelTel sort expression, for example -created_at. */
        sort?: string;
        /** Comma-separated TelTel filter expression, for example from=37126118199. */
        filter?: string;
      };
      output: {
        /** The normalized TelTel outbound SMS reports. */
        reports: Array<{
          /** The TelTel message ID. */
          messageId: string;
          /** The sender ID or DID used for the outbound SMS. */
          from: string | null;
          /** The destination phone number in international format. */
          to: string | null;
          /** The current delivery state reported by TelTel. */
          state: string | null;
          /** The more detailed delivery state returned by TelTel. */
          detailedState: string | null;
          /** The timestamp when TelTel created the message. */
          createdAt: string | null;
          /** The timestamp when the message was delivered, if available. */
          deliveredAt: string | null;
          /** Whether TelTel split the message into multiple parts. */
          multipart: boolean | null;
          /** The number of SMS parts used for the message. */
          parts: number | null;
          /** The TelTel price per message part. */
          price: number | null;
          /** The total TelTel price for the whole message. */
          totalPrice: number | null;
          /** The outbound SMS message body. */
          message: string | null;
          /** The TelTel campaign ID when the SMS belongs to a campaign. */
          campaignId: number | null;
          /** The TelTel error description when delivery failed. */
          errorMessage: string | null;
        }>;
      };
    };
    /** Send a single outbound SMS message through the TelTel SMS outbox API. */
    "teltel.send_sms": {
      input: {
        /**
         * Sender ID or DID number used for the outbound SMS message.
         * @minLength 1
         */
        from: string;
        /**
         * Destination phone number in international format.
         * @minLength 1
         */
        to: string;
        /**
         * Plain-text SMS body to send through TelTel.
         * @minLength 1
         */
        message: string;
        /** Callback URL or boolean toggle for delivery notifications. Use true to reuse the account-level callback URL. */
        callback?: string | boolean | null;
      };
      output: {
        /** The TelTel message ID created for the new outbound SMS. */
        messageId: string;
      };
    };
  }
}
