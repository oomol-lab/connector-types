import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new template in the current Postmark server. */
    "postmark.create_template": {
      input: {
        /**
         * Template name.
         * @minLength 1
         */
        Name: string;
        /** Subject content for the template. Required for standard templates. */
        Subject?: string;
        /** HTML body content of the template. */
        HtmlBody?: string;
        /** Plain-text body content of the template. */
        TextBody?: string;
        /** Template type recognized by the official Postmark API. */
        TemplateType?: "Standard" | "Layout";
        /** Optional alias that identifies the template within the server. */
        Alias?: string;
        /** Optional layout template alias used by a standard template. */
        LayoutTemplate?: string;
      };
      output: {
        /** Template ID. */
        TemplateId: number;
        /** Template name. */
        Name: string;
        /** Template alias, when present. */
        Alias?: string | null;
        /** Template type recognized by the official Postmark API. */
        TemplateType: "Standard" | "Layout";
        /** Whether the template is active. */
        Active: boolean;
        /** Layout template alias used by the template, when present. */
        LayoutTemplate?: string | null;
        [key: string]: unknown;
      };
    };
    /** Edit an existing Postmark template by template ID or alias. */
    "postmark.edit_template": {
      input: {
        /** Template ID or template alias accepted by the Postmark path parameter. */
        templateIdOrAlias: number | string;
        /**
         * Updated template name.
         * @minLength 1
         */
        Name: string;
        /** Updated template subject content when the template is standard. */
        Subject?: string;
        /** Updated HTML body content. */
        HtmlBody?: string;
        /** Updated plain-text body content. */
        TextBody?: string;
        /** Updated alias that identifies the template within the server. */
        Alias?: string;
        /** Updated layout template alias for a standard template. */
        LayoutTemplate?: string;
      };
      output: {
        /** Template ID. */
        TemplateId: number;
        /** Template name. */
        Name: string;
        /** Template alias, when present. */
        Alias?: string | null;
        /** Template type recognized by the official Postmark API. */
        TemplateType: "Standard" | "Layout";
        /** Whether the template is active. */
        Active: boolean;
        /** Layout template alias used by the template, when present. */
        LayoutTemplate?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get Postmark bounces for the current server with optional filters. */
    "postmark.get_bounces": {
      input: {
        /**
         * Number of results to return per request.
         * @minimum 1
         * @maximum 500
         */
        count?: number;
        /**
         * Number of results to skip before returning the current page.
         * @minimum 0
         */
        offset?: number;
        /** Filter by bounce type. */
        type?: string;
        /** Whether to return only inactive bounces. */
        inactive?: boolean;
        /** Filter by bounced email address. */
        emailFilter?: string;
        /** Filter by outbound message ID. */
        messageID?: string;
        /** Filter by the mailbox hash portion of the address. */
        mailboxHash?: string;
        /** Filter by tag. */
        tag?: string;
        /** Only include bounces before this datetime. */
        todate?: string;
        /** Only include bounces after this datetime. */
        fromdate?: string;
      };
      output: {
        /** Total number of bounces that matched the filter. */
        TotalCount: number;
        /** Bounce records returned by Postmark. */
        Bounces: Array<{
          /** Bounce ID. */
          ID: number;
          /** Bounce type. */
          Type: string;
          /** Bounce type code. */
          TypeCode: number;
          /** Name of the bounce type. */
          Name: string;
          /** Outbound message ID associated with the bounce. */
          MessageID: string;
          /** Description of the bounce event. */
          Description: string;
          /** Additional bounce details. */
          Details?: string;
          /** Email address that bounced. */
          Email: string;
          /** Datetime when the bounce occurred. */
          BouncedAt: string;
          /** Whether bounce dump content is available. */
          DumpAvailable: boolean;
          /** Whether the recipient is inactive. */
          Inactive: boolean;
          /** Whether the bounce can be reactivated. */
          CanActivate: boolean;
          /** Bounce content returned by Postmark, when present. */
          Content?: string;
          /** Subject of the original message, when present. */
          Subject?: string;
          /** Tag associated with the bounced message, when present. */
          Tag?: string;
          /** Message stream ID associated with the bounced message. */
          MessageStream?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get detailed content and events for one outbound Postmark message. */
    "postmark.get_outbound_message_details": {
      input: {
        /**
         * Outbound message ID returned by Postmark.
         * @minLength 1
         */
        messageId: string;
      };
      output: {
        /** Unique message ID returned by Postmark. */
        MessageID?: string;
        /** Message stream ID used when sending. */
        MessageStream?: string;
        /** Outbound message status. */
        Status?: string;
        /** Sender string returned by Postmark. */
        From?: string;
        /** Primary recipients. */
        To?: Array<{
          /** Recipient display name, when present. */
          Name?: string | null;
          /** Recipient email address. */
          Email: string;
          [key: string]: unknown;
        }>;
        /** Cc recipients. */
        Cc?: Array<{
          /** Recipient display name, when present. */
          Name?: string | null;
          /** Recipient email address. */
          Email: string;
          [key: string]: unknown;
        }>;
        /** Bcc recipients. */
        Bcc?: Array<{
          /** Recipient display name, when present. */
          Name?: string | null;
          /** Recipient email address. */
          Email: string;
          [key: string]: unknown;
        }>;
        /** Message subject. */
        Subject?: string;
        /** Message tag, when present. */
        Tag?: string;
        /** Plain-text body of the message. */
        TextBody?: string;
        /** HTML body of the message. */
        HtmlBody?: string;
        /** Raw message source returned by Postmark. */
        Body?: string;
        /** Message headers returned by Postmark. */
        Headers?: Array<Record<string, unknown>>;
        /** Attachments returned by Postmark. */
        Attachments?: Array<Record<string, unknown>>;
        /** Custom metadata returned by Postmark. */
        Metadata?: Record<string, unknown>;
        /** Timeline events returned for the message. */
        MessageEvents?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the current Postmark server configuration for the connected server token. */
    "postmark.get_server": {
      input: Record<string, never>;
      output: {
        /** Server ID. */
        ID: number;
        /** Server name. */
        Name: string;
        /** API tokens associated with the server. */
        ApiTokens?: Array<string>;
        /** Configured color of the server. */
        Color?: string;
        /** Whether the SMTP API is enabled on the server. */
        SmtpApiActivated?: boolean;
        /** Whether raw email is enabled on the server. */
        RawEmailEnabled?: boolean;
        /** Server delivery type such as Live or Sandbox. */
        DeliveryType?: string;
        /** Link to the server inside the Postmark console. */
        ServerLink?: string;
        /** Inbound email address of the server. */
        InboundAddress?: string;
        /** Inbound webhook URL. */
        InboundHookUrl?: string;
        /** Bounce webhook URL. */
        BounceHookUrl?: string;
        /** Open webhook URL. */
        OpenHookUrl?: string;
        /** Delivery webhook URL. */
        DeliveryHookUrl?: string;
        /** Whether only the first open should trigger a webhook. */
        PostFirstOpenOnly?: boolean;
        /** Inbound domain configured on the server. */
        InboundDomain?: string;
        /** Inbound hash configured on the server. */
        InboundHash?: string;
        /** Inbound spam threshold configured on the server. */
        InboundSpamThreshold?: number;
        /** Whether open tracking is enabled by default for the server. */
        TrackOpens?: boolean;
        /** Link tracking mode recognized by the official Postmark API. */
        TrackLinks?: "None" | "HtmlAndText" | "HtmlOnly" | "TextOnly";
        /** Whether bounce webhook payloads include full content. */
        IncludeBounceContentInHook?: boolean;
        /** Click webhook URL. */
        ClickHookUrl?: string;
        /** Whether SMTP API errors are included in bounce webhooks. */
        EnableSmtpApiErrorHooks?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get one Postmark template by template ID or alias. */
    "postmark.get_template": {
      input: {
        /** Template ID or template alias accepted by the Postmark path parameter. */
        templateIdOrAlias: number | string;
      };
      output: {
        /** Template ID. */
        TemplateId: number;
        /** Template name. */
        Name: string;
        /** Template subject content. */
        Subject?: string;
        /** Template HTML body. */
        HtmlBody?: string;
        /** Template plain-text body. */
        TextBody?: string;
        /** Server ID associated with the template. */
        AssociatedServerId?: number;
        /** Whether the template is active. */
        Active: boolean;
        /** Template alias, when present. */
        Alias?: string | null;
        /** Template type recognized by the official Postmark API. */
        TemplateType: "Standard" | "Layout";
        /** Layout template alias used by the template, when present. */
        LayoutTemplate?: string | null;
        [key: string]: unknown;
      };
    };
    /** List templates available in the current Postmark server. */
    "postmark.list_templates": {
      input: {
        /**
         * Number of results to return per request.
         * @minimum 1
         * @maximum 500
         */
        count?: number;
        /**
         * Number of results to skip before returning the current page.
         * @minimum 0
         */
        offset?: number;
        /** Filter templates by template type. */
        TemplateType?: "All" | "Standard" | "Layout";
        /** Filter templates by layout template alias. */
        LayoutTemplate?: string;
      };
      output: {
        /** Total number of templates in the result set. */
        TotalCount: number;
        /** Templates returned by Postmark. */
        Templates: Array<{
          /** Template ID. */
          TemplateId: number;
          /** Template name. */
          Name: string;
          /** Template alias, when present. */
          Alias?: string | null;
          /** Template type recognized by the official Postmark API. */
          TemplateType: "Standard" | "Layout";
          /** Whether the template is active. */
          Active: boolean;
          /** Layout template alias used by the template, when present. */
          LayoutTemplate?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search outbound Postmark messages with filters and pagination. */
    "postmark.search_outbound_messages": {
      input: {
        /**
         * Number of results to return per request.
         * @minimum 1
         * @maximum 500
         */
        count?: number;
        /**
         * Number of results to skip before returning the current page.
         * @minimum 0
         */
        offset?: number;
        /** Filter by the user who was receiving the email. */
        recipient?: string;
        /** Filter by the sender email address. */
        fromemail?: string;
        /** Filter by message tag. */
        tag?: string;
        /** Outbound message status filter accepted by Postmark search. */
        status?: "queued" | "sent" | "processed";
        /** Filter messages up to this datetime, inclusive. */
        todate?: string;
        /** Filter messages starting from this datetime, inclusive. */
        fromdate?: string;
        /** Filter by email subject. */
        subject?: string;
        /** Filter by message stream ID. */
        messagestream?: string;
        /** Metadata filters mapped to Postmark metadata_<key> query parameters for outbound search. */
        metadata?: Record<string, string>;
      };
      output: {
        /** Total number of messages that matched the search. */
        TotalCount: number;
        /** Outbound messages returned by the search. */
        Messages: Array<{
          /** Unique message ID returned by Postmark. */
          MessageID: string;
          /** Message stream ID used when sending the message. */
          MessageStream: string;
          /** Primary recipients. */
          To: Array<{
            /** Recipient display name, when present. */
            Name?: string | null;
            /** Recipient email address. */
            Email: string;
            [key: string]: unknown;
          }>;
          /** Cc recipients. */
          Cc: Array<{
            /** Recipient display name, when present. */
            Name?: string | null;
            /** Recipient email address. */
            Email: string;
            [key: string]: unknown;
          }>;
          /** Bcc recipients. */
          Bcc: Array<{
            /** Recipient display name, when present. */
            Name?: string | null;
            /** Recipient email address. */
            Email: string;
            [key: string]: unknown;
          }>;
          /** Flattened list of recipient email addresses. */
          Recipients: Array<string>;
          /** Datetime when Postmark received the message. */
          ReceivedAt: string;
          /** Sender string returned by Postmark. */
          From: string;
          /** Message subject. */
          Subject: string;
          /** Attachments returned by Postmark. */
          Attachments: Array<Record<string, unknown>>;
          /** Outbound message status. */
          Status: string;
          /** Message tag, when present. */
          Tag?: string;
          /** Custom metadata returned by Postmark. */
          Metadata?: Record<string, unknown>;
          /** Whether open tracking was enabled. */
          TrackOpens?: boolean;
          /** Link tracking mode used for the message. */
          TrackLinks?: string;
          /** Whether the message was sent in sandbox mode. */
          Sandboxed?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Send up to 500 templated emails in a single Postmark batch request. */
    "postmark.send_batch_with_templates": {
      input: {
        /**
         * Templated messages to send in this batch request.
         * @minItems 1
         * @maxItems 500
         */
        Messages: Array<{
          /**
           * Template ID to use when rendering this message.
           * @exclusiveMinimum 0
           */
          TemplateId?: number;
          /**
           * Template alias to use when rendering this message.
           * @minLength 1
           */
          TemplateAlias?: string;
          /** Template model applied to the selected template before sending. */
          TemplateModel: Record<string, unknown>;
          /** Whether CSS blocks should be inlined into rendered HTML content. */
          InlineCss?: boolean;
          /**
           * Sender email address or full formatted sender string accepted by Postmark.
           * @minLength 1
           */
          From: string;
          /**
           * Recipient email address string. Multiple recipients are comma separated.
           * @minLength 1
           */
          To: string;
          /** Cc recipient email address string. */
          Cc?: string;
          /** Bcc recipient email address string. */
          Bcc?: string;
          /** Email tag used for categorization and analytics. */
          Tag?: string;
          /** Reply-To email address override. */
          ReplyTo?: string;
          /** Custom headers to include on the email. */
          Headers?: Array<{
            /**
             * Custom header name.
             * @minLength 1
             */
            Name: string;
            /** Custom header value. */
            Value: string;
          }>;
          /** Whether open tracking is enabled. */
          TrackOpens?: boolean;
          /** Link tracking mode recognized by the official Postmark API. */
          TrackLinks?: "None" | "HtmlAndText" | "HtmlOnly" | "TextOnly";
          /** Attachments to include on the email. */
          Attachments?: Array<{
            /**
             * Attachment file name.
             * @minLength 1
             */
            Name: string;
            /**
             * Base64-encoded attachment content.
             * @minLength 1
             */
            Content: string;
            /**
             * Attachment MIME type.
             * @minLength 1
             */
            ContentType: string;
            /**
             * Optional content ID for inline attachments.
             * @minLength 1
             */
            ContentID?: string;
          }>;
          /** Custom metadata key-value pairs attached to the message. */
          Metadata?: Record<string, string>;
          /** Message stream ID to use when sending the email. */
          MessageStream?: string;
        }>;
      };
      output: Array<{
        /** Recipient email address string for this batch item. */
        To?: string;
        /** Datetime when Postmark accepted this batch item, when successful. */
        SubmittedAt?: string;
        /** Unique message ID returned by Postmark for this batch item. */
        MessageID?: string;
        /** Postmark API error code for this batch item. */
        ErrorCode: number;
        /** Postmark response message for this batch item. */
        Message: string;
      }>;
    };
    /** Send a transactional email through the current Postmark server. */
    "postmark.send_email": {
      input: {
        /**
         * Sender email address or full formatted sender string accepted by Postmark.
         * @minLength 1
         */
        From: string;
        /**
         * Recipient email address string. Multiple recipients are comma separated.
         * @minLength 1
         */
        To: string;
        /**
         * Email subject line.
         * @minLength 1
         */
        Subject: string;
        /** HTML body content of the email. */
        HtmlBody?: string;
        /** Plain-text body content of the email. */
        TextBody?: string;
        /** Cc recipient email address string. */
        Cc?: string;
        /** Bcc recipient email address string. */
        Bcc?: string;
        /** Email tag used for categorization and analytics. */
        Tag?: string;
        /** Reply-To email address override. */
        ReplyTo?: string;
        /** Custom headers to include on the email. */
        Headers?: Array<{
          /**
           * Custom header name.
           * @minLength 1
           */
          Name: string;
          /** Custom header value. */
          Value: string;
        }>;
        /** Whether open tracking is enabled. */
        TrackOpens?: boolean;
        /** Link tracking mode recognized by the official Postmark API. */
        TrackLinks?: "None" | "HtmlAndText" | "HtmlOnly" | "TextOnly";
        /** Attachments to include on the email. */
        Attachments?: Array<{
          /**
           * Attachment file name.
           * @minLength 1
           */
          Name: string;
          /**
           * Base64-encoded attachment content.
           * @minLength 1
           */
          Content: string;
          /**
           * Attachment MIME type.
           * @minLength 1
           */
          ContentType: string;
          /**
           * Optional content ID for inline attachments.
           * @minLength 1
           */
          ContentID?: string;
        }>;
        /** Custom metadata key-value pairs attached to the message. */
        Metadata?: Record<string, string>;
        /** Message stream ID to use when sending the email. */
        MessageStream?: string;
      };
      output: {
        /** Recipient email address string. */
        To: string;
        /** Datetime when Postmark accepted the message. */
        SubmittedAt: string;
        /** Unique message ID returned by Postmark. */
        MessageID: string;
        /** Postmark API error code. Zero indicates success. */
        ErrorCode: number;
        /** Postmark response message. */
        Message: string;
      };
    };
    /** Send a single templated email through the current Postmark server. */
    "postmark.send_email_with_template": {
      input: {
        /**
         * Template ID to use when rendering this message.
         * @exclusiveMinimum 0
         */
        TemplateId?: number;
        /**
         * Template alias to use when rendering this message.
         * @minLength 1
         */
        TemplateAlias?: string;
        /** Template model applied to the selected template before sending. */
        TemplateModel: Record<string, unknown>;
        /** Whether CSS blocks should be inlined into rendered HTML content. */
        InlineCss?: boolean;
        /**
         * Sender email address or full formatted sender string accepted by Postmark.
         * @minLength 1
         */
        From: string;
        /**
         * Recipient email address string. Multiple recipients are comma separated.
         * @minLength 1
         */
        To: string;
        /** Cc recipient email address string. */
        Cc?: string;
        /** Bcc recipient email address string. */
        Bcc?: string;
        /** Email tag used for categorization and analytics. */
        Tag?: string;
        /** Reply-To email address override. */
        ReplyTo?: string;
        /** Custom headers to include on the email. */
        Headers?: Array<{
          /**
           * Custom header name.
           * @minLength 1
           */
          Name: string;
          /** Custom header value. */
          Value: string;
        }>;
        /** Whether open tracking is enabled. */
        TrackOpens?: boolean;
        /** Link tracking mode recognized by the official Postmark API. */
        TrackLinks?: "None" | "HtmlAndText" | "HtmlOnly" | "TextOnly";
        /** Attachments to include on the email. */
        Attachments?: Array<{
          /**
           * Attachment file name.
           * @minLength 1
           */
          Name: string;
          /**
           * Base64-encoded attachment content.
           * @minLength 1
           */
          Content: string;
          /**
           * Attachment MIME type.
           * @minLength 1
           */
          ContentType: string;
          /**
           * Optional content ID for inline attachments.
           * @minLength 1
           */
          ContentID?: string;
        }>;
        /** Custom metadata key-value pairs attached to the message. */
        Metadata?: Record<string, string>;
        /** Message stream ID to use when sending the email. */
        MessageStream?: string;
      };
      output: {
        /** Recipient email address string. */
        To: string;
        /** Datetime when Postmark accepted the message. */
        SubmittedAt: string;
        /** Unique message ID returned by Postmark. */
        MessageID: string;
        /** Postmark API error code. Zero indicates success. */
        ErrorCode: number;
        /** Postmark response message. */
        Message: string;
      };
    };
    /** Validate Postmark template content against the official template renderer. */
    "postmark.validate_template": {
      input: {
        /** Subject content to validate against Postmark template syntax. */
        Subject?: string;
        /** HTML body content to validate. */
        HtmlBody?: string;
        /** Plain-text body content to validate. */
        TextBody?: string;
        /** Template model used for validation rendering. */
        TestRenderModel: Record<string, unknown>;
        /** Whether CSS blocks should be inlined when rendering HTML test output. */
        InlineCssForHtmlTestRender?: boolean;
        /** Template type recognized by the official Postmark API. */
        TemplateType?: "Standard" | "Layout";
        /** Optional layout template alias used while validating a standard template. */
        LayoutTemplate?: string;
      };
      output: {
        /** Whether all provided template content is valid. */
        AllContentIsValid: boolean;
        /** Validation result for the subject content, when provided. */
        Subject?: {
          /** Whether this content fragment is valid. */
          ContentIsValid: boolean;
          /** Rendered content returned for this fragment, when available. */
          RenderedContent?: string;
          /** Validation errors returned for this fragment. */
          ValidationErrors: Array<{
            /** Validation error message. */
            Message?: string;
            /** 1-based line offset of the error. */
            Line?: number | null;
            /** 1-based character offset of the error. */
            CharacterPosition?: number | null;
            [key: string]: unknown;
          }>;
        };
        /** Validation result for the HTML body, when provided. */
        HtmlBody?: {
          /** Whether this content fragment is valid. */
          ContentIsValid: boolean;
          /** Rendered content returned for this fragment, when available. */
          RenderedContent?: string;
          /** Validation errors returned for this fragment. */
          ValidationErrors: Array<{
            /** Validation error message. */
            Message?: string;
            /** 1-based line offset of the error. */
            Line?: number | null;
            /** 1-based character offset of the error. */
            CharacterPosition?: number | null;
            [key: string]: unknown;
          }>;
        };
        /** Validation result for the plain-text body, when provided. */
        TextBody?: {
          /** Whether this content fragment is valid. */
          ContentIsValid: boolean;
          /** Rendered content returned for this fragment, when available. */
          RenderedContent?: string;
          /** Validation errors returned for this fragment. */
          ValidationErrors: Array<{
            /** Validation error message. */
            Message?: string;
            /** 1-based line offset of the error. */
            Line?: number | null;
            /** 1-based character offset of the error. */
            CharacterPosition?: number | null;
            [key: string]: unknown;
          }>;
        };
        /** Suggested template model returned by Postmark, when present. */
        SuggestedTemplateModel?: Record<string, unknown>;
      };
    };
  }
}
