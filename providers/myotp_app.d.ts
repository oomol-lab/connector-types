import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check the delivery and validity status of a MyOTP.App OTP message. */
    "myotp_app.check_otp_status": {
      input: {
        /** The message identifier of the OTP to inspect. */
        message_id: string;
      };
      output: {
        /** The delivery status returned by MyOTP.App. */
        status?: string;
        /** Whether the OTP is still active and valid. */
        is_valid?: boolean;
        /**
         * The OTP expiry timestamp in UTC.
         * @format date-time
         */
        expires_at?: string;
      };
    };
    /** Extend the expiry time of an existing MyOTP.App OTP. */
    "myotp_app.extend_otp": {
      input: {
        /** The message identifier of the OTP to extend. */
        message_id: string;
        /**
         * The number of seconds to add to the OTP expiry time.
         * @minimum 60
         * @maximum 14400
         */
        duration: number;
      };
      output: {
        /** The status returned by MyOTP.App. */
        status?: string;
        /** The human-readable message returned by MyOTP.App. */
        message?: string;
        /**
         * The new OTP expiry timestamp in UTC.
         * @format date-time
         */
        expires_at?: string;
      };
    };
    /** Generate and deliver an OTP through MyOTP.App by SMS or WhatsApp. */
    "myotp_app.generate_otp": {
      input: {
        /**
         * The E.164 phone number including country code without a prefix.
         * @pattern ^[1-9][0-9]{6,14}$
         */
        phone_number: string;
        /**
         * The number of digits in the generated OTP.
         * @minimum 4
         * @maximum 8
         */
        otp_length?: number;
        /**
         * The OTP validity period in seconds.
         * @minimum 60
         * @maximum 86400
         */
        otp_validity?: number;
        /** The channel used to deliver the OTP. */
        channel?: "sms" | "whatsapp";
        /**
         * The configured message template order.
         * @minimum 1
         * @maximum 5
         */
        template_order?: number;
        /** Whether to send a new OTP while an unexpired OTP exists. */
        force_send?: boolean;
        /** Whether to include the generated OTP in the response when permitted. */
        return_otp?: boolean;
        /**
         * The alphanumeric brand name that overrides the account default.
         * @minLength 3
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]+$
         */
        brand?: string;
      };
      output: {
        /** The unique identifier of the sent OTP message. */
        message_id?: string;
        /** The status returned by MyOTP.App. */
        status?: string;
        /** The human-readable message returned by MyOTP.App. */
        message?: string;
        /**
         * The UTC timestamp when the OTP was sent.
         * @format date-time
         */
        date_sent?: string;
        /**
         * The UTC timestamp when the OTP expires.
         * @format date-time
         */
        expires_at?: string;
        /** The cost charged for delivering the OTP. */
        cost?: number;
        /** The generated OTP when return_otp was requested and permitted. */
        otp?: string;
      };
    };
    /** Retrieve a paginated MyOTP.App transaction report for a date range. */
    "myotp_app.get_transactions_report": {
      input: {
        /**
         * The first report date in YYYY-MM-DD format.
         * @format date
         */
        start_date?: string;
        /**
         * The last report date in YYYY-MM-DD format.
         * @format date
         */
        end_date?: string;
        /**
         * The one-based report page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of transactions to return.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
      };
      output: {
        /** The transactions in the requested report page. */
        transactions: Array<{
          /** The unique identifier of the OTP message. */
          message_id?: string;
          /** The destination phone number. */
          phone_number?: string;
          /** The transaction cost. */
          cost?: number;
          /**
           * The transaction timestamp in UTC.
           * @format date-time
           */
          timestamp?: string;
          /** The numeric transaction type assigned by MyOTP.App. */
          message_type?: number;
          /** The transaction description. */
          description?: string;
          /** Whether the OTP was sent while another OTP was still active. */
          force_send?: boolean;
          /** The client IP recorded by MyOTP.App. */
          client_ip?: string;
          /** The application assigned to the API key. */
          application?: string;
          /**
           * The transaction creation timestamp in UTC.
           * @format date-time
           */
          created_at?: string;
        }>;
      };
    };
    /** Verify an OTP using its message id or destination phone number. */
    "myotp_app.verify_otp": {
      input: {
        /**
         * The numeric OTP to verify.
         * @pattern ^[0-9]{3,8}$
         */
        otp: string;
        /**
         * The message identifier returned when the OTP was generated.
         * @minLength 1
         * @pattern \S
         */
        message_id?: string;
        /**
         * The E.164 phone number used to generate the OTP.
         * @pattern ^[1-9][0-9]{6,14}$
         */
        phone_number?: string;
      };
      output: {
        /** The OTP verification status. */
        status?: "success" | "failed" | "expired";
        /** The human-readable verification result. */
        message?: string;
        /** The reason the verification failed when supplied. */
        reason?: string;
      };
    };
  }
}
