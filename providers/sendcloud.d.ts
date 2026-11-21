import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a triggered or bulk SendCloud email template. */
    "sendcloud.create_template": {
      input: {
        /**
         * Template invocation name.
         * @minLength 1
         */
        invokeName: string;
        /**
         * Template display name.
         * @minLength 1
         */
        name: string;
        /**
         * HTML template content; percent-delimited variables are supported.
         * @minLength 1
         */
        html: string;
        /**
         * Email subject.
         * @minLength 1
         */
        subject: string;
        /**
         * Template type: 0 for triggered email, 1 for bulk email.
         * @minimum 0
         * @maximum 1
         */
        templateType: number;
        /** Optional plain-text template content. */
        text?: string;
      };
      output: {
        /** Whether SendCloud accepted the request. */
        result?: boolean;
        /** SendCloud business status code; success codes are not limited to 200. */
        statusCode?: number;
        /** SendCloud status message. */
        message?: string;
        /** Template result. */
        info?: {
          /** Template details, including upstream extension fields. */
          data?: {
            /** Template invocation name. */
            invokeName?: string;
            /** Template display name. */
            name?: string;
            /** HTML template content. */
            html?: string;
            /** Email subject. */
            subject?: string;
            /** Template type: 0 for triggered email, 1 for bulk email. */
            templateType?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Delete SendCloud templates by invocation name or inclusive update-date range. When both are supplied, invocation name takes precedence. */
    "sendcloud.delete_templates": {
      input: Record<string, unknown>;
      output: {
        /** Whether SendCloud accepted the request. */
        result?: boolean;
        /** SendCloud business status code; success codes are not limited to 200. */
        statusCode?: number;
        /** SendCloud status message. */
        message?: string;
        /** Mutation result. */
        info?: {
          /** Number of affected templates. */
          count?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read the SendCloud account profile, balance and daily quota. */
    "sendcloud.get_account": {
      input: Record<string, never>;
      output: {
        /** Whether SendCloud accepted the request. */
        result?: boolean;
        /** SendCloud business status code; success codes are not limited to 200. */
        statusCode?: number;
        /** SendCloud status message. */
        message?: string;
        /** Account information. */
        info?: {
          /** Account username. */
          userName?: string;
          /** Account email address. */
          email?: string;
          /** Available balance, using the upstream field spelling. */
          avaliableBalance?: number;
          /** Account balance. */
          balance?: number;
          /** Daily request quota. */
          quota?: number;
          /** Requests used today. */
          todayUsedQuota?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read a SendCloud template by its invocation name. */
    "sendcloud.get_template": {
      input: {
        /**
         * Template invocation name.
         * @minLength 1
         */
        invokeName: string;
      };
      output: {
        /** Whether SendCloud accepted the request. */
        result?: boolean;
        /** SendCloud business status code; success codes are not limited to 200. */
        statusCode?: number;
        /** SendCloud status message. */
        message?: string;
        /** Template result. */
        info?: {
          /** Template details, including upstream extension fields. */
          data?: {
            /** Template invocation name. */
            invokeName?: string;
            /** Template display name. */
            name?: string;
            /** HTML template content. */
            html?: string;
            /** Email subject. */
            subject?: string;
            /** Template type: 0 for triggered email, 1 for bulk email. */
            templateType?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List SendCloud templates with optional name and type filters and offset pagination. */
    "sendcloud.list_templates": {
      input: {
        /**
         * Template invocation name.
         * @minLength 1
         */
        invokeName?: string;
        /**
         * Template type: 0 for triggered email, 1 for bulk email.
         * @minimum 0
         * @maximum 1
         */
        templateType?: number;
        /**
         * Starting offset; defaults to 0.
         * @minimum 0
         */
        start?: number;
        /**
         * Page size; defaults to 100.
         * @minimum 0
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Whether SendCloud accepted the request. */
        result?: boolean;
        /** SendCloud business status code; success codes are not limited to 200. */
        statusCode?: number;
        /** SendCloud status message. */
        message?: string;
        /** Template page. */
        info?: {
          /** Templates on this page. */
          dataList?: Array<{
            /** Template invocation name. */
            invokeName?: string;
            /** Template display name. */
            name?: string;
            /** HTML template content. */
            html?: string;
            /** Email subject. */
            subject?: string;
            /** Template type: 0 for triggered email, 1 for bulk email. */
            templateType?: number;
            [key: string]: unknown;
          }>;
          /** Total matching templates. */
          total?: number;
          /** Templates returned on this page. */
          count?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Submit an HTML or plain-text email through SendCloud, with broadcast, individual or mailing-list recipients and optional hosted attachments. No automatic retries. */
    "sendcloud.send_email": {
      input: (Record<string, unknown>) & (Record<string, unknown>);
      output: {
        /** Whether SendCloud accepted the request. */
        result?: boolean;
        /** SendCloud business status code; success codes are not limited to 200. */
        statusCode?: number;
        /** SendCloud status message. */
        message?: string;
        /** Submission details; fields depend on the sending mode and respEmailId. */
        info?: {
          /** Accepted email IDs. */
          emailIdList?: Array<string>;
          /** Accepted mailing-list task IDs. */
          maillistTaskId?: Array<number>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Submit email using a SendCloud template compatible with the connected API_USER type. Use xsmtpapi for individual recipients or to for existing mailing lists or broadcasts. No automatic retries. */
    "sendcloud.send_template_email": {
      input: (Record<string, unknown>);
      output: {
        /** Whether SendCloud accepted the request. */
        result?: boolean;
        /** SendCloud business status code; success codes are not limited to 200. */
        statusCode?: number;
        /** SendCloud status message. */
        message?: string;
        /** Submission details; fields depend on the sending mode and respEmailId. */
        info?: {
          /** Accepted email IDs. */
          emailIdList?: Array<string>;
          /** Accepted mailing-list task IDs. */
          maillistTaskId?: Array<number>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update a SendCloud template's display name, HTML, subject or type. */
    "sendcloud.update_template": {
      input: {
        /**
         * Template invocation name.
         * @minLength 1
         */
        invokeName: string;
        /**
         * Template display name.
         * @minLength 1
         */
        name?: string;
        /**
         * HTML template content; percent-delimited variables are supported.
         * @minLength 1
         */
        html?: string;
        /**
         * Email subject.
         * @minLength 1
         */
        subject?: string;
        /**
         * Template type: 0 for triggered email, 1 for bulk email.
         * @minimum 0
         * @maximum 1
         */
        templateType?: number;
      };
      output: {
        /** Whether SendCloud accepted the request. */
        result?: boolean;
        /** SendCloud business status code; success codes are not limited to 200. */
        statusCode?: number;
        /** SendCloud status message. */
        message?: string;
        /** Mutation result. */
        info?: {
          /** Number of affected templates. */
          count?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
