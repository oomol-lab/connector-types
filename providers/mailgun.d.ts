import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one Mailgun suppression or allowlist record. */
    "mailgun.add_suppression": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
        /** Suppression table to operate on. */
        kind: "bounce" | "complaint" | "unsubscribe" | "allowlist";
        /**
         * Suppressed email address.
         * @format email
         */
        address?: string;
        /**
         * Domain value to add to the Mailgun allowlist.
         * @minLength 1
         */
        allowlistDomain?: string;
        /**
         * Bounce error code. Defaults to Mailgun's value when omitted.
         * @minLength 1
         */
        code?: string;
        /**
         * Bounce error description.
         * @minLength 1
         */
        error?: string;
        /**
         * Unsubscribe tag, or * for all domain correspondence.
         * @minLength 1
         */
        tags?: string;
        /**
         * Event timestamp in RFC 2822 format.
         * @minLength 1
         */
        createdAt?: string;
      };
      output: {
        /** Mailgun status message. */
        message: string | null;
        /** Object returned by Mailgun. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Mailgun template and optionally its initial active version. */
    "mailgun.create_template": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
        /**
         * Mailgun template name.
         * @minLength 1
         */
        name: string;
        /**
         * Template description.
         * @minLength 1
         */
        description?: string;
        /**
         * Optional creator metadata stored by Mailgun.
         * @minLength 1
         */
        createdBy?: string;
        /**
         * Initial template content.
         * @minLength 1
         */
        template?: string;
        /**
         * Initial version tag. Mailgun defaults to initial when omitted.
         * @minLength 1
         */
        tag?: string;
        /**
         * Initial version comment.
         * @minLength 1
         */
        comment?: string;
        /** String map forwarded to Mailgun. */
        headers?: Record<string, string>;
      };
      output: {
        /** Mailgun status message. */
        message: string | null;
        /** Object returned by Mailgun. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a new version for a Mailgun template. */
    "mailgun.create_template_version": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
        /**
         * Mailgun template name.
         * @minLength 1
         */
        templateName: string;
        /**
         * Template version content.
         * @minLength 1
         */
        template: string;
        /**
         * Unique tag for the new template version.
         * @minLength 1
         */
        tag: string;
        /**
         * Comment for the new template version.
         * @minLength 1
         */
        comment?: string;
        /** Whether the new version should become active. */
        active?: boolean;
        /** String map forwarded to Mailgun. */
        headers?: Record<string, string>;
      };
      output: {
        /** Mailgun status message. */
        message: string | null;
        /** Object returned by Mailgun. */
        raw: Record<string, unknown>;
      };
    };
    /** Remove one Mailgun suppression or allowlist record. */
    "mailgun.delete_suppression": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
        /** Suppression table to operate on. */
        kind: "bounce" | "complaint" | "unsubscribe" | "allowlist";
        /**
         * Suppressed email address or allowlist entry value.
         * @minLength 1
         */
        value: string;
      };
      output: {
        /** Mailgun status message. */
        message: string | null;
        /** Object returned by Mailgun. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Mailgun domain details including DNS records and sending state. */
    "mailgun.get_domain": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
      };
      output: Record<string, unknown>;
    };
    /** Get open, click, unsubscribe, and web scheme tracking settings for a domain. */
    "mailgun.get_domain_tracking_settings": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** Object returned by Mailgun. */
        tracking: Record<string, unknown>;
        /** Object returned by Mailgun. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Mailgun suppression or allowlist record. */
    "mailgun.get_suppression": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
        /** Suppression table to operate on. */
        kind: "bounce" | "complaint" | "unsubscribe" | "allowlist";
        /**
         * Suppressed email address or allowlist entry value.
         * @minLength 1
         */
        value: string;
      };
      output: Record<string, unknown>;
    };
    /** Get metadata for one Mailgun template and optionally its active version. */
    "mailgun.get_template": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
        /**
         * Mailgun template name.
         * @minLength 1
         */
        templateName: string;
        /** Whether to include the active template version content. */
        active?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Get content and metadata for one Mailgun template version. */
    "mailgun.get_template_version": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
        /**
         * Mailgun template name.
         * @minLength 1
         */
        templateName: string;
        /**
         * Mailgun template version tag.
         * @minLength 1
         */
        versionName: string;
      };
      output: Record<string, unknown>;
    };
    /** List Mailgun domains available to the current API key. */
    "mailgun.list_domains": {
      input: {
        /**
         * Maximum number of domains to return. Mailgun allows up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of domains to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /** Domain state filter. */
        state?: "active" | "unverified" | "disabled";
        /**
         * Sort option such as name, name:asc, or name:desc.
         * @minLength 1
         */
        sort?: string;
        /**
         * Authority filter for domains.
         * @minLength 1
         */
        authority?: string;
        /**
         * Partial or complete domain name to search for.
         * @minLength 1
         */
        search?: string;
        /** Whether to include domains from subaccounts. */
        includeSubaccounts?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List delivery, engagement, and failure events for a Mailgun domain. */
    "mailgun.list_events": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
        /**
         * Beginning of the event search range in epoch seconds.
         * @minLength 1
         */
        begin?: string;
        /**
         * End of the event search range in epoch seconds.
         * @minLength 1
         */
        end?: string;
        /** Mailgun yes/no option value. */
        ascending?: "yes" | "no";
        /**
         * Maximum number of events to return. Mailgun allows up to 300.
         * @minimum 1
         * @maximum 300
         */
        limit?: number;
        /** Mailgun event type filter. */
        event?: "accepted" | "delivered" | "failed" | "rejected" | "clicked" | "opened" | "unsubscribed" | "stored" | "complained" | "email_validation" | "list_member_uploaded" | "list_member_upload_error" | "list_uploaded";
        /** Failure severity filter for failed events. */
        severity?: "temporary" | "permanent";
        /**
         * Filter by recipient email address.
         * @minLength 1
         */
        recipient?: string;
        /**
         * Filter by From header email address.
         * @minLength 1
         */
        from?: string;
        /**
         * Filter by To header email address.
         * @minLength 1
         */
        to?: string;
        /**
         * Filter by subject line.
         * @minLength 1
         */
        subject?: string;
        /**
         * Filter by Mailgun message id.
         * @minLength 1
         */
        messageId?: string;
        /**
         * Filter by user-defined tags.
         * @minLength 1
         */
        tags?: string;
      };
      output: {
        /** Items returned by Mailgun. */
        items: Array<Record<string, unknown>>;
        /** Paging links returned by Mailgun. */
        paging?: Record<string, unknown>;
        /** Object returned by Mailgun. */
        raw: Record<string, unknown>;
      };
    };
    /** List records from a Mailgun suppression or allowlist table. */
    "mailgun.list_suppressions": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
        /** Suppression table to operate on. */
        kind: "bounce" | "complaint" | "unsubscribe" | "allowlist";
        /**
         * Maximum number of suppression records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Suppression page direction. */
        page?: "next" | "previous" | "last";
        /**
         * Address divider for paginated suppression responses.
         * @minLength 1
         */
        address?: string;
        /**
         * Prefix used to filter suppression records.
         * @minLength 1
         */
        term?: string;
      };
      output: {
        /** Items returned by Mailgun. */
        items: Array<Record<string, unknown>>;
        /** Paging links returned by Mailgun. */
        paging?: Record<string, unknown>;
        /** Object returned by Mailgun. */
        raw: Record<string, unknown>;
      };
    };
    /** List versions for a Mailgun template. */
    "mailgun.list_template_versions": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
        /**
         * Mailgun template name.
         * @minLength 1
         */
        templateName: string;
        /** Mailgun page direction. */
        page?: "first" | "last" | "next" | "previous";
        /**
         * Number of template versions to retrieve. Mailgun allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pivot value used by Mailgun for next or previous pages.
         * @minLength 1
         */
        pivot?: string;
      };
      output: Record<string, unknown>;
    };
    /** List templates stored for a Mailgun domain. */
    "mailgun.list_templates": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
        /** Mailgun page direction. */
        page?: "first" | "last" | "next" | "previous";
        /**
         * Number of templates or versions to retrieve. Mailgun allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pivot value used by Mailgun for next or previous pages.
         * @minLength 1
         */
        pivot?: string;
      };
      output: {
        /** Items returned by Mailgun. */
        items: Array<Record<string, unknown>>;
        /** Paging links returned by Mailgun. */
        paging?: Record<string, unknown>;
        /** Object returned by Mailgun. */
        raw: Record<string, unknown>;
      };
    };
    /** Send an email through Mailgun using a stored domain. */
    "mailgun.send_email": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
        /**
         * Email address for the From header. Friendly name format is supported.
         * @minLength 1
         */
        from?: string;
        /**
         * Primary recipients. Mailgun accepts email addresses or friendly name strings.
         * @minItems 1
         */
        to: Array<string>;
        /** Carbon copy recipients. */
        cc?: Array<string>;
        /** Blind carbon copy recipients. */
        bcc?: Array<string>;
        /**
         * Message subject line.
         * @minLength 1
         */
        subject?: string;
        /**
         * Plain text message body.
         * @minLength 1
         */
        text?: string;
        /**
         * HTML message body.
         * @minLength 1
         */
        html?: string;
        /**
         * AMP HTML message body.
         * @minLength 1
         */
        ampHtml?: string;
        /**
         * Stored Mailgun template name to render for this email.
         * @minLength 1
         */
        template?: string;
        /**
         * Template version tag to render.
         * @minLength 1
         */
        templateVersion?: string;
        /** Whether Mailgun should generate a text part from the template. */
        templateText?: boolean;
        /** Template variables encoded into Mailgun t:variables. */
        templateVariables?: Record<string, unknown>;
        /** Recipient variables for Mailgun batch sending. */
        recipientVariables?: Record<string, Record<string, unknown>>;
        /** Mailgun tags attached to the message. */
        tags?: Array<string>;
        /** String map forwarded to Mailgun. */
        headers?: Record<string, string>;
        /** Custom Mailgun user variables stored with events and webhooks. */
        variables?: Record<string, unknown>;
        /**
         * Scheduled delivery time in RFC 2822 format.
         * @minLength 1
         */
        deliveryTime?: string;
        /**
         * Maximum delivery window such as 1h30m or 24h.
         * @minLength 1
         */
        deliverWithin?: string;
        /** Whether to send in Mailgun test mode. */
        testMode?: boolean;
        /** Mailgun yes/no or boolean string option value. */
        dkim?: "yes" | "no" | "true" | "false";
        /** Mailgun tracking option value. */
        tracking?: "yes" | "no" | "true" | "false" | "htmlonly";
        /** Mailgun tracking option value. */
        trackingClicks?: "yes" | "no" | "true" | "false" | "htmlonly";
        /** Mailgun yes/no or boolean string option value. */
        trackingOpens?: "yes" | "no" | "true" | "false";
        /** Whether Mailgun must deliver only over TLS. */
        requireTls?: boolean;
        /** Whether Mailgun should skip MX TLS certificate verification. */
        skipVerification?: boolean;
        /**
         * Dedicated sending IP address to use.
         * @minLength 1
         */
        sendingIp?: string;
        /**
         * Dedicated IP pool ID to use.
         * @minLength 1
         */
        sendingIpPool?: string;
      };
      output: {
        /** Mailgun message identifier. */
        id: string | null;
        /** Mailgun status message. */
        message: string | null;
        /** Object returned by Mailgun. */
        raw: Record<string, unknown>;
      };
    };
    /** Update open, click, or unsubscribe tracking settings for a Mailgun domain. */
    "mailgun.update_domain_tracking_settings": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
        /** Open tracking settings to update. */
        open?: {
          /** Whether open tracking should be active. */
          active?: boolean;
          /** Whether to place the open tracking pixel at the top. */
          placeAtTheTop?: boolean;
        };
        /** Click tracking settings to update. */
        click?: {
          /** Click tracking state. */
          active?: "true" | "false" | "htmlonly";
        };
        /** Unsubscribe tracking settings to update. */
        unsubscribe?: {
          /** Whether unsubscribe tracking should be active. */
          active?: boolean;
          /**
           * HTML unsubscribe footer content.
           * @minLength 1
           */
          htmlFooter?: string;
          /**
           * Plain text unsubscribe footer content.
           * @minLength 1
           */
          textFooter?: string;
        };
      };
      output: {
        /** Mailgun domain tracking mutation response. */
        open?: {
          /** Mailgun status message. */
          message: string | null;
          /** Object returned by Mailgun. */
          raw: Record<string, unknown>;
        };
        /** Mailgun domain tracking mutation response. */
        click?: {
          /** Mailgun status message. */
          message: string | null;
          /** Object returned by Mailgun. */
          raw: Record<string, unknown>;
        };
        /** Mailgun domain tracking mutation response. */
        unsubscribe?: {
          /** Mailgun status message. */
          message: string | null;
          /** Object returned by Mailgun. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Ask Mailgun to verify DNS records for a sending domain. */
    "mailgun.verify_domain": {
      input: {
        /**
         * Mailgun sending domain name.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** Mailgun status message. */
        message: string | null;
        /** Object returned by Mailgun. */
        raw: Record<string, unknown>;
      };
    };
  }
}
