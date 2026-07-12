import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Resend an existing MSG91 OTP by text message or voice call. */
    "msg91.resend_otp": {
      input: {
        /**
         * Mobile number in international format with country code and without a plus sign.
         * @minLength 1
         */
        mobile: string;
        /** The MSG91 retry channel for resending the OTP. */
        retryType: "voice" | "text";
      };
      output: {
        /** Whether MSG91 accepted the OTP resend request. */
        sent: boolean;
        /**
         * The MSG91 response type.
         * @minLength 1
         */
        type: string;
        /** The MSG91 response message when returned. */
        message: string | null;
        /** The raw JSON object returned by MSG91. */
        raw: Record<string, unknown>;
      };
    };
    /** Send an SMS through an approved MSG91 Flow template. */
    "msg91.send_flow_sms": {
      input: {
        /**
         * The MSG91 Flow SMS template ID from the MSG91 dashboard.
         * @minLength 1
         */
        templateId: string;
        /**
         * The SMS recipients and template variables to send.
         * @minItems 1
         */
        recipients: Array<{
          /**
           * Recipient mobile number in international format with country code and without a plus sign.
           * @minLength 1
           */
          mobile: string;
          /** Template variable values keyed by the exact MSG91 template placeholder name. */
          variables?: Record<string, string>;
        }>;
        /** Whether MSG91 should enable this optional flag. */
        shortUrl?: boolean;
        /**
         * The optional short URL expiry time in seconds when shortUrl is enabled.
         * @exclusiveMinimum 0
         */
        shortUrlExpirySeconds?: number;
        /** Whether MSG91 should enable this optional flag. */
        realTimeResponse?: boolean;
      };
      output: {
        /** Whether MSG91 accepted the message submission. */
        accepted: boolean;
        /**
         * The MSG91 response type.
         * @minLength 1
         */
        type: string;
        /** The MSG91 response message when returned. */
        message: string | null;
        /** The MSG91 request identifier when returned. */
        requestId: string | null;
        /** The raw JSON object returned by MSG91. */
        raw: Record<string, unknown>;
      };
    };
    /** Generate or send an OTP with an MSG91 OTP template. */
    "msg91.send_otp": {
      input: {
        /**
         * Recipient mobile number in international format with country code and without a plus sign.
         * @minLength 1
         */
        mobile: string;
        /**
         * The MSG91 OTP template ID from the MSG91 dashboard.
         * @minLength 1
         */
        templateId: string;
        /**
         * A caller-supplied OTP value to send instead of an auto-generated OTP.
         * @minLength 1
         */
        otp?: string;
        /**
         * The number of digits for an auto-generated OTP.
         * @minimum 4
         * @maximum 9
         */
        otpLength?: number;
        /**
         * The OTP expiry duration in minutes.
         * @minimum 1
         * @maximum 10080
         */
        otpExpiryMinutes?: number;
        /**
         * The end user's IP address for MSG91 security tracking.
         * @minLength 1
         */
        userIp?: string;
        /** Whether MSG91 should enable this optional flag. */
        unicode?: boolean;
        /** Whether MSG91 should enable this optional flag. */
        invisible?: boolean;
        /** Whether MSG91 should enable this optional flag. */
        realTimeResponse?: boolean;
        /** Template variable values keyed by the exact MSG91 template placeholder name. */
        variables?: Record<string, string>;
      };
      output: {
        /** Whether MSG91 accepted the OTP send request. */
        sent: boolean;
        /**
         * The MSG91 response type.
         * @minLength 1
         */
        type: string;
        /** The MSG91 response message when returned. */
        message: string | null;
        /** The MSG91 OTP request identifier when returned. */
        requestId: string | null;
        /** The raw JSON object returned by MSG91. */
        raw: Record<string, unknown>;
      };
    };
    /** Verify an OTP previously sent through MSG91. */
    "msg91.verify_otp": {
      input: {
        /**
         * Mobile number in international format with country code and without a plus sign.
         * @minLength 1
         */
        mobile: string;
        /**
         * The OTP value entered by the user.
         * @minLength 1
         */
        otp: string;
      };
      output: {
        /** Whether MSG91 reported that the OTP was verified. */
        verified: boolean;
        /**
         * The MSG91 response type.
         * @minLength 1
         */
        type: string;
        /** The MSG91 verification message when returned. */
        message: string | null;
        /** The MSG91 response code when returned. */
        code: string | null;
        /** The raw JSON object returned by MSG91. */
        raw: Record<string, unknown>;
      };
    };
  }
}
