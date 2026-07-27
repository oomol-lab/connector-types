import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether one email domain is disposable with EmailListVerify. */
    "emaillistverify.check_disposable": {
      input: {
        /**
         * The email domain to check for disposable-email status.
         * @minLength 1
         * @maxLength 255
         */
        domain: string;
      };
      output: {
        /** The email domain that was checked. */
        domain: string;
        /** The disposability status returned for the email domain. */
        result: "ok" | "disposable" | "dead_server" | "invalid_mx" | "unknown";
        /** The provider's internal disposable-domain processing result, or null when unavailable. */
        internalResult: string | null;
        /** The MX server associated with the email domain, or null when unavailable. */
        mxServer: string | null;
        /** The IP address corresponding to the MX server, or null when unavailable. */
        mxServerIp: string | null;
      };
    };
    /** Delete one finished EmailListVerify email list. */
    "emaillistverify.delete_email_list": {
      input: {
        /**
         * The email list identifier returned by EmailListVerify.
         * @minLength 1
         */
        emailListId: string;
      };
      output: {
        /** Whether the email list was deleted successfully. */
        deleted: boolean;
        /**
         * The email list identifier that was deleted.
         * @minLength 1
         */
        emailListId: string;
      };
    };
    /** Download one finished EmailListVerify email list as base64 content. */
    "emaillistverify.download_email_list": {
      input: {
        /**
         * The email list identifier to download.
         * @minLength 1
         */
        emailListId: string;
        /** The output file format to request. */
        format?: "csv" | "xlsx";
        /**
         * Only include rows whose verification result matches one of these statuses.
         * @minItems 1
         */
        results?: Array<"ok" | "unknown" | "dead_server" | "invalid_mx" | "email_disabled" | "antispam_system" | "ok_for_all" | "smtp_protocol" | "invalid_syntax" | "disposable" | "spamtrap">;
      };
      output: {
        /** The downloaded file name. */
        fileName: string;
        /** The response content type returned by EmailListVerify. */
        contentType: string;
        /** The downloaded file content encoded as base64. */
        contentBase64: string;
      };
    };
    /** Retrieve the available EmailListVerify on-demand and subscription credits. */
    "emaillistverify.get_credits": {
      input: Record<string, never>;
      output: {
        /** On-demand credits that never expire. */
        onDemand: {
          /**
           * Remaining balance of on-demand credits.
           * @minimum 0
           */
          available: number;
        };
        /** Subscription credits for the current billing period, or null when unavailable. */
        subscription: {
          /**
           * Remaining subscription credits for the current period.
           * @minimum 0
           */
          available: number;
          /**
           * The ISO 8601 expiration timestamp of the current subscription period.
           * @format date-time
           */
          expiresAt: string;
        } | null;
      };
    };
    /** Get the current progress of one uploaded EmailListVerify email list. */
    "emaillistverify.get_email_list_progress": {
      input: {
        /**
         * The email list identifier returned by EmailListVerify.
         * @minLength 1
         */
        emailListId: string;
      };
      output: {
        /** The current status of the uploaded email list. */
        status: "uploaded" | "processing" | "finished" | "inQueue" | "starting" | "error";
        /**
         * The percentage completion of the uploaded email list.
         * @minimum 0
         * @maximum 100
         */
        progress: number;
        /** Credit usage information for the uploaded email list. */
        credits: {
          /** Credits charged for the email list, or null before charging. */
          charged: number | null;
          /** Credits returned after non-chargeable verifications, or null when absent. */
          returned: number | null;
        };
        /** The uploaded file name. */
        name: string;
        /**
         * The ISO 8601 timestamp when the email list was uploaded.
         * @format date-time
         */
        createdAt: string;
        /**
         * The ISO 8601 timestamp when the email list was last updated.
         * @format date-time
         */
        updatedAt: string;
      };
    };
    /** Upload one email list file to EmailListVerify for batch verification. */
    "emaillistverify.upload_email_list": {
      input: {
        /**
         * The file name sent to EmailListVerify.
         * @minLength 1
         */
        fileName: string;
        /**
         * Plain text file content for csv or txt email lists.
         * @minLength 1
         */
        contentText?: string;
        /**
         * Base64-encoded file content for csv, txt, or xlsx email lists.
         * @minLength 1
         */
        contentBase64?: string;
        /** The verification quality requested for the uploaded email list. */
        quality?: "standard" | "high";
      };
      output: {
        /**
         * The identifier of the uploaded EmailListVerify email list.
         * @minLength 1
         */
        emailListId: string;
      };
    };
    /** Verify a single email address with EmailListVerify's real-time API. */
    "emaillistverify.verify_email": {
      input: {
        /**
         * The email address to verify with EmailListVerify.
         * @format email
         */
        email: string;
      };
      output: {
        /**
         * The email address that was verified.
         * @format email
         */
        email: string;
        /** The EmailListVerify deliverability status for the email address. */
        status: "ok" | "unknown" | "dead_server" | "invalid_mx" | "email_disabled" | "antispam_system" | "ok_for_all" | "smtp_protocol" | "invalid_syntax" | "disposable" | "spamtrap";
      };
    };
    /** Verify and enrich a single email address with EmailListVerify's detailed API. */
    "emaillistverify.verify_email_detailed": {
      input: {
        /**
         * The email address to verify with EmailListVerify.
         * @format email
         */
        email: string;
      };
      output: {
        /**
         * The email address that was verified.
         * @format email
         */
        email: string;
        /** The detailed EmailListVerify deliverability result. */
        result: "ok" | "unknown" | "dead_server" | "invalid_mx" | "email_disabled" | "antispam_system" | "ok_for_all" | "smtp_protocol" | "invalid_syntax" | "disposable" | "spamtrap";
        /** The local part of the email address before the at sign. */
        account: string;
        /** The domain part of the email address. */
        domain: string;
        /** Whether the email address belongs to a role account. */
        isRole: boolean;
        /** Whether the email address uses a free email provider. */
        isFree: boolean;
        /** Whether the email address is a no-reply inbox. */
        isNoReply: boolean;
        /** The MX server associated with the email domain. */
        mxServer?: string;
        /** The IP address of the MX server. */
        mxServerIp?: string;
        /** The detected email service provider. */
        esp?: string;
        /** The first name inferred from the email address, when available. */
        firstName?: string;
        /** The last name inferred from the email address, when available. */
        lastName?: string;
        /** The gender inferred from the email address, when available. */
        gender?: string;
        /** The plus-addressing tag, when present. */
        tag?: string;
        /** The provider's internal processing result, when available. */
        internalResult?: string;
      };
    };
  }
}
