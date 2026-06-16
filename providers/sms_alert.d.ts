import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate and send an OTP message through SMS Alert. */
    "sms_alert.generate_otp": {
      input: {
        /**
         * The sender ID used for the OTP message.
         * @minLength 1
         */
        senderId: string;
        /**
         * The destination mobile number for the OTP.
         * @minLength 1
         */
        mobileNumber: string;
        /**
         * The OTP template text, which must include the "[otp]" placeholder and may include optional length/retry/validity attributes.
         * @minLength 1
         */
        template: string;
      };
      output: {
        /** The provider message returned by SMS Alert. */
        message: string;
        /** The batch identifier returned by SMS Alert. */
        batchId: string;
        /** The batch delivery records returned by SMS Alert. */
        deliveries: Array<{
          /** The destination mobile number. */
          mobileNumber: string;
          /** The provider message identifier. */
          messageId: string;
          /** The provider delivery status string. */
          status: string;
        }>;
      };
    };
    /** Get the remaining SMS Alert credits grouped by delivery route. */
    "sms_alert.get_credit_balance": {
      input: Record<string, never>;
      output: {
        /** The raw balance summary string returned by SMS Alert. */
        summary: string;
        /** The route-level balances available on the account. */
        routes: Array<{
          /** The SMS Alert route identifier. */
          route: string;
          /** The display name for this route in SMS Alert. */
          displayName: string;
          /** The remaining credits for this route. */
          credits: number;
        }>;
      };
    };
    /** List the sender IDs available in the SMS Alert account. */
    "sms_alert.list_sender_ids": {
      input: Record<string, never>;
      output: {
        /** The sender IDs currently available for the account. */
        senders: Array<{
          /** The sender ID value. */
          sender: string;
          /** Whether SMS Alert marks the sender as approved. */
          approved: boolean;
          /** Whether the sender is currently open for use. */
          open: boolean;
          /** The sender creation timestamp returned by SMS Alert. */
          createdAt: string;
        }>;
      };
    };
    /** List SMS templates from the SMS Alert account with optional pagination. */
    "sms_alert.list_templates": {
      input: {
        /** The sort order for template listing. */
        order?: "asc" | "desc";
        /**
         * The 1-based page number to request from SMS Alert.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size to request from SMS Alert.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The SMS templates currently available for the account. */
        templates: Array<{
          /** The template identifier. */
          id: string;
          /** The template title. */
          title: string;
          /** The SMS template body. */
          template: string;
          /** The template creation timestamp returned by SMS Alert. */
          createdAt: string;
        }>;
      };
    };
    /** Send a direct SMS message through SMS Alert. */
    "sms_alert.send_sms": {
      input: {
        /**
         * The sender ID assigned to your SMS Alert account.
         * @minLength 1
         */
        senderId: string;
        /**
         * One or more destination numbers, separated by commas when sending to multiple recipients.
         * @minLength 1
         */
        mobileNumbers: string;
        /**
         * The SMS body to send.
         * @minLength 1
         */
        message: string;
      };
      output: {
        /** The provider message returned by SMS Alert. */
        message: string;
        /** The batch identifier returned by SMS Alert. */
        batchId: string;
        /** The batch delivery records returned by SMS Alert. */
        deliveries: Array<{
          /** The destination mobile number. */
          mobileNumber: string;
          /** The provider message identifier. */
          messageId: string;
          /** The provider delivery status string. */
          status: string;
        }>;
      };
    };
    /** Validate an OTP code previously generated through SMS Alert. */
    "sms_alert.validate_otp": {
      input: {
        /**
         * The destination mobile number used during OTP generation.
         * @minLength 1
         */
        mobileNumber: string;
        /**
         * The OTP code entered by the user.
         * @minLength 1
         */
        code: string;
      };
      output: {
        /** Whether SMS Alert reported that the OTP matched. */
        matched: boolean;
        /** The provider validation message returned by SMS Alert. */
        message: string;
      };
    };
  }
}
