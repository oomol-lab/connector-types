import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete all messages from one Mailtrap inbox. */
    "mailtrap.clean_inbox": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap inbox ID.
         * @exclusiveMinimum 0
         */
        inboxId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The inbox returned by Mailtrap after cleaning messages. */
        inbox: {
          /**
           * The unique identifier of the inbox.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The display name of the inbox. */
          name?: string;
          /** The SMTP username currently assigned to the inbox. */
          username?: string;
          /** The inbox email username returned by Mailtrap. */
          email_username?: string;
          /**
           * The identifier of the parent project.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** The number of emails currently stored in the inbox. */
          emails_count?: number;
          /** The number of unread emails currently stored in the inbox. */
          emails_unread_count?: number;
          /** The inbox permissions object returned by Mailtrap. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create one Mailtrap contact. */
    "mailtrap.create_contact": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /** The contact fields to create. */
        contact: {
          /**
           * The email address of the contact to create.
           * @format email
           */
          email: string;
          /** The custom contact fields keyed by Mailtrap merge tag. */
          fields?: Record<string, unknown>;
          /** The contact list IDs to assign to the new contact. */
          listIds?: Array<number>;
        };
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The contact returned by Mailtrap. */
        contact: {
          /** The unique identifier of the contact. */
          id?: string;
          /** The email address stored on the contact. */
          email?: string;
          /** The custom contact fields keyed by Mailtrap merge tag. */
          fields?: Record<string, unknown>;
          /** The Mailtrap contact list IDs assigned to the contact. */
          list_ids?: Array<number>;
          /** The Mailtrap subscription status of the contact. */
          status?: string;
          /** The creation timestamp in milliseconds. */
          created_at?: number;
          /** The last update timestamp in milliseconds. */
          updated_at?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Create one custom Mailtrap contact event. */
    "mailtrap.create_contact_event": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact identifier. Provide a contact UUID or a plain email address; the connector URL-encodes email values automatically.
         * @minLength 1
         */
        contactIdentifier: string;
        /**
         * The Mailtrap custom event name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /** The scalar event parameters to send with the contact event. */
        params?: Record<string, unknown>;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /**
         * The Mailtrap contact identifier used for the event request.
         * @minLength 1
         */
        contactIdentifier: string;
        /** The contact event returned by Mailtrap. */
        contactEvent: {
          /** The Mailtrap contact UUID related to the event. */
          contact_id?: string;
          /** The Mailtrap contact email related to the event. */
          contact_email?: string;
          /** The custom event name. */
          name?: string;
          /** The scalar event parameters returned by Mailtrap. */
          params?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create one Mailtrap contact export job. */
    "mailtrap.create_contact_export": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /** The official Mailtrap contact export filters to apply. */
        filters?: Array<Record<string, unknown>>;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The contact export job returned by Mailtrap. */
        contactExport: {
          /**
           * The Mailtrap contact export ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap contact export status. */
          status?: string;
          /** The timestamp when the export job was created. */
          created_at?: string;
          /** The timestamp when the export job was last updated. */
          updated_at?: string;
          /** The download URL returned when the export job finishes. */
          url?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create one Mailtrap contact field. */
    "mailtrap.create_contact_field": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact field name.
         * @minLength 1
         * @maxLength 80
         */
        name: string;
        /** The Mailtrap contact field data type. */
        dataType: "text" | "integer" | "float" | "boolean" | "date";
        /**
         * The Mailtrap merge tag for the contact field.
         * @minLength 1
         * @maxLength 80
         */
        mergeTag: string;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The contact field returned by Mailtrap. */
        contactField: {
          /**
           * The Mailtrap contact field ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap contact field name. */
          name?: string;
          /** The Mailtrap contact field data type. */
          data_type?: string;
          /** The merge tag used for the contact field. */
          merge_tag?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create one Mailtrap contact list. */
    "mailtrap.create_contact_list": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact list name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The contact list returned by Mailtrap. */
        contactList: {
          /**
           * The Mailtrap contact list ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap contact list name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create one Mailtrap email template. */
    "mailtrap.create_email_template": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /** The email template fields to create. */
        emailTemplate: {
          /**
           * The Mailtrap email template name.
           * @minLength 1
           * @maxLength 255
           */
          name: string;
          /**
           * The default subject line for the template.
           * @minLength 1
           * @maxLength 255
           */
          subject: string;
          /**
           * The Mailtrap category for the template.
           * @minLength 1
           * @maxLength 255
           */
          category: string;
          /**
           * The HTML body content to store on the template.
           * @maxLength 10000000
           */
          bodyHtml?: string;
          /**
           * The plain-text body content to store on the template.
           * @maxLength 10000000
           */
          bodyText?: string;
        };
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The email template returned by Mailtrap. */
        emailTemplate: {
          /**
           * The Mailtrap email template ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap UUID of the email template. */
          uuid?: string;
          /** The Mailtrap email template name. */
          name?: string;
          /** The default subject line stored on the template. */
          subject?: string;
          /** The Mailtrap category stored on the template. */
          category?: string;
          /** The plain-text template content. */
          body_text?: string;
          /** The HTML template content. */
          body_html?: string;
          /** The template creation timestamp. */
          created_at?: string;
          /** The template update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create one Mailtrap sending domain. */
    "mailtrap.create_sending_domain": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /** The sending domain fields to create. */
        sendingDomain: {
          /**
           * The fully qualified domain name to register for Mailtrap sending.
           * @minLength 1
           */
          domainName: string;
        };
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The sending domain returned by Mailtrap. */
        sendingDomain: {
          /**
           * The Mailtrap sending domain ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The domain name registered in Mailtrap. */
          domain_name?: string;
          /** Whether Mailtrap has verified the DNS records. */
          dns_verified?: boolean;
          /** The Mailtrap compliance status returned for the sending domain. */
          compliance_status?: string;
          /** The timestamp when Mailtrap verified the sending domain DNS records. */
          dns_verified_at?: string | null;
          /** The DNS records Mailtrap expects for the sending domain. */
          dns_records?: Array<Record<string, unknown>>;
          /** The Mailtrap permissions object returned for the sending domain. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one Mailtrap contact by UUID or email. */
    "mailtrap.delete_contact": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact identifier. Provide a contact UUID or a plain email address; the connector URL-encodes email values automatically.
         * @minLength 1
         */
        contactIdentifier: string;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /**
         * The Mailtrap contact identifier that was deleted.
         * @minLength 1
         */
        contactIdentifier: string;
        /** Whether the Mailtrap contact delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete one Mailtrap contact field. */
    "mailtrap.delete_contact_field": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact field ID.
         * @exclusiveMinimum 0
         */
        fieldId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /**
         * The Mailtrap contact field ID that was deleted.
         * @exclusiveMinimum 0
         */
        fieldId: number;
        /** Whether the Mailtrap contact field delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete one Mailtrap contact list. */
    "mailtrap.delete_contact_list": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /**
         * The Mailtrap contact list ID that was deleted.
         * @exclusiveMinimum 0
         */
        listId: number;
        /** Whether the Mailtrap contact list delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete one Mailtrap email template. */
    "mailtrap.delete_email_template": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap email template ID.
         * @exclusiveMinimum 0
         */
        emailTemplateId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /**
         * The Mailtrap email template ID that was deleted.
         * @exclusiveMinimum 0
         */
        emailTemplateId: number;
        /** Whether the Mailtrap email template delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete one Mailtrap project. */
    "mailtrap.delete_project": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /**
         * The Mailtrap project ID that was deleted.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /** Whether the Mailtrap project delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete one Mailtrap sending domain. */
    "mailtrap.delete_sending_domain": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap sending domain ID.
         * @exclusiveMinimum 0
         */
        sendingDomainId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /**
         * The Mailtrap sending domain ID that was deleted.
         * @exclusiveMinimum 0
         */
        sendingDomainId: number;
        /** Whether the Mailtrap sending domain delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Get current Mailtrap billing cycle usage. */
    "mailtrap.get_billing_usage": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The Mailtrap billing usage returned by the API. */
        billingUsage: {
          /** The Mailtrap billing cycle window information. */
          billing?: Record<string, unknown>;
          /** The Email Sandbox billing plan and usage information. */
          testing?: Record<string, unknown>;
          /** The Email Sending billing plan and usage information. */
          sending?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Mailtrap contact by UUID or email. */
    "mailtrap.get_contact": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact identifier. Provide a contact UUID or a plain email address; the connector URL-encodes email values automatically.
         * @minLength 1
         */
        contactIdentifier: string;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The contact returned by Mailtrap. */
        contact: {
          /** The unique identifier of the contact. */
          id?: string;
          /** The email address stored on the contact. */
          email?: string;
          /** The custom contact fields keyed by Mailtrap merge tag. */
          fields?: Record<string, unknown>;
          /** The Mailtrap contact list IDs assigned to the contact. */
          list_ids?: Array<number>;
          /** The Mailtrap subscription status of the contact. */
          status?: string;
          /** The creation timestamp in milliseconds. */
          created_at?: number;
          /** The last update timestamp in milliseconds. */
          updated_at?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Mailtrap contact export job by ID. */
    "mailtrap.get_contact_export": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact export ID.
         * @exclusiveMinimum 0
         */
        exportId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The contact export job returned by Mailtrap. */
        contactExport: {
          /**
           * The Mailtrap contact export ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap contact export status. */
          status?: string;
          /** The timestamp when the export job was created. */
          created_at?: string;
          /** The timestamp when the export job was last updated. */
          updated_at?: string;
          /** The download URL returned when the export job finishes. */
          url?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Mailtrap contact field by ID. */
    "mailtrap.get_contact_field": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact field ID.
         * @exclusiveMinimum 0
         */
        fieldId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The contact field returned by Mailtrap. */
        contactField: {
          /**
           * The Mailtrap contact field ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap contact field name. */
          name?: string;
          /** The Mailtrap contact field data type. */
          data_type?: string;
          /** The merge tag used for the contact field. */
          merge_tag?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Mailtrap contact import job by ID. */
    "mailtrap.get_contact_import": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact import ID.
         * @exclusiveMinimum 0
         */
        importId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The contact import job returned by Mailtrap. */
        contactImport: {
          /**
           * The Mailtrap contact import ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap contact import status. */
          status?: string;
          /** The number of new contacts Mailtrap created during the import. */
          created_contacts_count?: number;
          /** The number of existing contacts Mailtrap updated during the import. */
          updated_contacts_count?: number;
          /** The number of contacts rejected because the account limit was exceeded. */
          contacts_over_limit_count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Mailtrap contact list by ID. */
    "mailtrap.get_contact_list": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The contact list returned by Mailtrap. */
        contactList: {
          /**
           * The Mailtrap contact list ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap contact list name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Mailtrap email template by ID. */
    "mailtrap.get_email_template": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap email template ID.
         * @exclusiveMinimum 0
         */
        emailTemplateId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The email template returned by Mailtrap. */
        emailTemplate: {
          /**
           * The Mailtrap email template ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap UUID of the email template. */
          uuid?: string;
          /** The Mailtrap email template name. */
          name?: string;
          /** The default subject line stored on the template. */
          subject?: string;
          /** The Mailtrap category stored on the template. */
          category?: string;
          /** The plain-text template content. */
          body_text?: string;
          /** The HTML template content. */
          body_html?: string;
          /** The template creation timestamp. */
          created_at?: string;
          /** The template update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Mailtrap inbox by ID. */
    "mailtrap.get_inbox": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap inbox ID.
         * @exclusiveMinimum 0
         */
        inboxId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The inbox returned by Mailtrap. */
        inbox: {
          /**
           * The unique identifier of the inbox.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The display name of the inbox. */
          name?: string;
          /** The SMTP username currently assigned to the inbox. */
          username?: string;
          /** The inbox email username returned by Mailtrap. */
          email_username?: string;
          /**
           * The identifier of the parent project.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** The number of emails currently stored in the inbox. */
          emails_count?: number;
          /** The number of unread emails currently stored in the inbox. */
          emails_unread_count?: number;
          /** The inbox permissions object returned by Mailtrap. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Mailtrap inbox message by ID. */
    "mailtrap.get_message": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap inbox ID.
         * @exclusiveMinimum 0
         */
        inboxId: number;
        /**
         * The Mailtrap message ID.
         * @exclusiveMinimum 0
         */
        messageId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /**
         * The Mailtrap inbox ID used for the request.
         * @exclusiveMinimum 0
         */
        inboxId: number;
        /** The message returned by Mailtrap. */
        message: {
          /**
           * The Mailtrap message ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /**
           * The Mailtrap inbox ID.
           * @exclusiveMinimum 0
           */
          inbox_id?: number;
          /** The message subject line. */
          subject?: string;
          /** The recipient email address when present. */
          to_email?: string;
          /** The sender email address when present. */
          from_email?: string;
          /** Whether the message is marked as read. */
          is_read?: boolean;
          /** The timestamp when Mailtrap reports the message as sent. */
          sent_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the raw HTML source of one Mailtrap inbox message. */
    "mailtrap.get_message_html_source": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap inbox ID.
         * @exclusiveMinimum 0
         */
        inboxId: number;
        /**
         * The Mailtrap message ID.
         * @exclusiveMinimum 0
         */
        messageId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /**
         * The Mailtrap inbox ID used for the request.
         * @exclusiveMinimum 0
         */
        inboxId: number;
        /**
         * The Mailtrap message ID used for the request.
         * @exclusiveMinimum 0
         */
        messageId: number;
        /** The raw HTML source returned by Mailtrap. */
        htmlSource: string;
      };
    };
    /** Get Mailtrap permission resources accessible to the token. */
    "mailtrap.get_permission_resources": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The permission resources returned by Mailtrap. */
        resources: Array<{
          /**
           * The unique identifier of the Mailtrap resource.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap resource name. */
          name?: string;
          /** The Mailtrap resource type. */
          type?: string;
          /** The Mailtrap access level granted for the resource. */
          access_level?: number;
          /** The nested Mailtrap resources under the current resource. */
          resources?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get one Mailtrap project by ID. */
    "mailtrap.get_project": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The project returned by Mailtrap. */
        project: {
          /**
           * The unique identifier of the project.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The display name of the project. */
          name?: string;
          /** The inboxes nested under the project when Mailtrap returns them. */
          inboxes?: Array<{
            /**
             * The unique identifier of the inbox.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The display name of the inbox. */
            name?: string;
            /** The SMTP username currently assigned to the inbox. */
            username?: string;
            /** The inbox email username returned by Mailtrap. */
            email_username?: string;
            /**
             * The identifier of the parent project.
             * @exclusiveMinimum 0
             */
            project_id?: number;
            /** The number of emails currently stored in the inbox. */
            emails_count?: number;
            /** The number of unread emails currently stored in the inbox. */
            emails_unread_count?: number;
            /** The inbox permissions object returned by Mailtrap. */
            permissions?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The project permissions object returned by Mailtrap. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Mailtrap sending domain by ID. */
    "mailtrap.get_sending_domain": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap sending domain ID.
         * @exclusiveMinimum 0
         */
        sendingDomainId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The sending domain returned by Mailtrap. */
        sendingDomain: {
          /**
           * The Mailtrap sending domain ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The domain name registered in Mailtrap. */
          domain_name?: string;
          /** Whether Mailtrap has verified the DNS records. */
          dns_verified?: boolean;
          /** The Mailtrap compliance status returned for the sending domain. */
          compliance_status?: string;
          /** The timestamp when Mailtrap verified the sending domain DNS records. */
          dns_verified_at?: string | null;
          /** The DNS records Mailtrap expects for the sending domain. */
          dns_records?: Array<Record<string, unknown>>;
          /** The Mailtrap permissions object returned for the sending domain. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get Mailtrap sending stats for one account. */
    "mailtrap.get_sending_stats": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The start date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * The end date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /** The Mailtrap sending domain IDs to include in the stats query. */
        sendingDomainIds?: Array<number>;
        /** The Mailtrap sending streams to include in the stats query. */
        sendingStreams?: Array<"transactional" | "bulk">;
        /** The Mailtrap sending categories to include in the stats query. */
        categories?: Array<string>;
        /** The Mailtrap email service providers to include in the stats query. */
        emailServiceProviders?: Array<string>;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The Mailtrap sending stats returned by the API. */
        stats: {
          /** The number of delivered emails. */
          delivery_count?: number;
          /** The delivery rate returned by Mailtrap. */
          delivery_rate?: number;
          /** The number of bounced emails. */
          bounce_count?: number;
          /** The bounce rate returned by Mailtrap. */
          bounce_rate?: number;
          /** The number of opened emails. */
          open_count?: number;
          /** The open rate returned by Mailtrap. */
          open_rate?: number;
          /** The number of clicked emails. */
          click_count?: number;
          /** The click rate returned by Mailtrap. */
          click_rate?: number;
          /** The number of spam complaints. */
          spam_count?: number;
          /** The spam complaint rate returned by Mailtrap. */
          spam_rate?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get Mailtrap sending stats grouped by category. */
    "mailtrap.get_sending_stats_by_categories": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The start date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * The end date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /** The Mailtrap sending domain IDs to include in the stats query. */
        sendingDomainIds?: Array<number>;
        /** The Mailtrap sending streams to include in the stats query. */
        sendingStreams?: Array<"transactional" | "bulk">;
        /** The Mailtrap sending categories to include in the stats query. */
        categories?: Array<string>;
        /** The Mailtrap email service providers to include in the stats query. */
        emailServiceProviders?: Array<string>;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The Mailtrap sending stats grouped by category. */
        statsByCategories: Array<{
          /** The Mailtrap sending category. */
          category?: string;
          /** The aggregated sending stats for one category. */
          stats?: {
            /** The number of delivered emails. */
            delivery_count?: number;
            /** The delivery rate returned by Mailtrap. */
            delivery_rate?: number;
            /** The number of bounced emails. */
            bounce_count?: number;
            /** The bounce rate returned by Mailtrap. */
            bounce_rate?: number;
            /** The number of opened emails. */
            open_count?: number;
            /** The open rate returned by Mailtrap. */
            open_rate?: number;
            /** The number of clicked emails. */
            click_count?: number;
            /** The click rate returned by Mailtrap. */
            click_rate?: number;
            /** The number of spam complaints. */
            spam_count?: number;
            /** The spam complaint rate returned by Mailtrap. */
            spam_rate?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Get Mailtrap sending stats grouped by date. */
    "mailtrap.get_sending_stats_by_date": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The start date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * The end date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /** The Mailtrap sending domain IDs to include in the stats query. */
        sendingDomainIds?: Array<number>;
        /** The Mailtrap sending streams to include in the stats query. */
        sendingStreams?: Array<"transactional" | "bulk">;
        /** The Mailtrap sending categories to include in the stats query. */
        categories?: Array<string>;
        /** The Mailtrap email service providers to include in the stats query. */
        emailServiceProviders?: Array<string>;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The Mailtrap sending stats grouped by date. */
        statsByDate: Array<{
          /** The Mailtrap stats date in YYYY-MM-DD format. */
          date?: string;
          /** The aggregated sending stats for one day. */
          stats?: {
            /** The number of delivered emails. */
            delivery_count?: number;
            /** The delivery rate returned by Mailtrap. */
            delivery_rate?: number;
            /** The number of bounced emails. */
            bounce_count?: number;
            /** The bounce rate returned by Mailtrap. */
            bounce_rate?: number;
            /** The number of opened emails. */
            open_count?: number;
            /** The open rate returned by Mailtrap. */
            open_rate?: number;
            /** The number of clicked emails. */
            click_count?: number;
            /** The click rate returned by Mailtrap. */
            click_rate?: number;
            /** The number of spam complaints. */
            spam_count?: number;
            /** The spam complaint rate returned by Mailtrap. */
            spam_rate?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Get Mailtrap sending stats grouped by sending domain. */
    "mailtrap.get_sending_stats_by_domains": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The start date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * The end date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /** The Mailtrap sending domain IDs to include in the stats query. */
        sendingDomainIds?: Array<number>;
        /** The Mailtrap sending streams to include in the stats query. */
        sendingStreams?: Array<"transactional" | "bulk">;
        /** The Mailtrap sending categories to include in the stats query. */
        categories?: Array<string>;
        /** The Mailtrap email service providers to include in the stats query. */
        emailServiceProviders?: Array<string>;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The Mailtrap sending stats grouped by sending domain. */
        statsByDomains: Array<{
          /**
           * The Mailtrap sending domain ID.
           * @exclusiveMinimum 0
           */
          sending_domain_id?: number;
          /** The aggregated sending stats for one domain. */
          stats?: {
            /** The number of delivered emails. */
            delivery_count?: number;
            /** The delivery rate returned by Mailtrap. */
            delivery_rate?: number;
            /** The number of bounced emails. */
            bounce_count?: number;
            /** The bounce rate returned by Mailtrap. */
            bounce_rate?: number;
            /** The number of opened emails. */
            open_count?: number;
            /** The open rate returned by Mailtrap. */
            open_rate?: number;
            /** The number of clicked emails. */
            click_count?: number;
            /** The click rate returned by Mailtrap. */
            click_rate?: number;
            /** The number of spam complaints. */
            spam_count?: number;
            /** The spam complaint rate returned by Mailtrap. */
            spam_rate?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Get Mailtrap sending stats grouped by email service provider. */
    "mailtrap.get_sending_stats_by_esp": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The start date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * The end date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /** The Mailtrap sending domain IDs to include in the stats query. */
        sendingDomainIds?: Array<number>;
        /** The Mailtrap sending streams to include in the stats query. */
        sendingStreams?: Array<"transactional" | "bulk">;
        /** The Mailtrap sending categories to include in the stats query. */
        categories?: Array<string>;
        /** The Mailtrap email service providers to include in the stats query. */
        emailServiceProviders?: Array<string>;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The Mailtrap sending stats grouped by email service provider. */
        statsByEmailServiceProviders: Array<{
          /** The Mailtrap email service provider name. */
          email_service_provider?: string;
          /** The aggregated sending stats for one email service provider. */
          stats?: {
            /** The number of delivered emails. */
            delivery_count?: number;
            /** The delivery rate returned by Mailtrap. */
            delivery_rate?: number;
            /** The number of bounced emails. */
            bounce_count?: number;
            /** The bounce rate returned by Mailtrap. */
            bounce_rate?: number;
            /** The number of opened emails. */
            open_count?: number;
            /** The open rate returned by Mailtrap. */
            open_rate?: number;
            /** The number of clicked emails. */
            click_count?: number;
            /** The click rate returned by Mailtrap. */
            click_rate?: number;
            /** The number of spam complaints. */
            spam_count?: number;
            /** The spam complaint rate returned by Mailtrap. */
            spam_rate?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Create one Mailtrap contact import job. */
    "mailtrap.import_contacts": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contacts to import.
         * @minItems 1
         */
        contacts: Array<{
          /**
           * The email address of the contact to import.
           * @format email
           */
          email: string;
          /** The custom contact fields keyed by Mailtrap merge tag. */
          fields?: Record<string, unknown>;
          /** The contact list IDs to add during the import. */
          listIdsIncluded?: Array<number>;
          /** The contact list IDs to remove during the import. */
          listIdsExcluded?: Array<number>;
        }>;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The contact import job returned by Mailtrap. */
        contactImport: {
          /**
           * The Mailtrap contact import ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap contact import status. */
          status?: string;
          /** The number of new contacts Mailtrap created during the import. */
          created_contacts_count?: number;
          /** The number of existing contacts Mailtrap updated during the import. */
          updated_contacts_count?: number;
          /** The number of contacts rejected because the account limit was exceeded. */
          contacts_over_limit_count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Mailtrap accounts accessible with the current API token. */
    "mailtrap.list_accounts": {
      input: Record<string, never>;
      output: {
        /** The Mailtrap accounts accessible with the current API token. */
        accounts: Array<{
          /**
           * The unique identifier of the Mailtrap account.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The display name of the Mailtrap account. */
          name?: string;
          /** The access levels granted for the current API token in this account. */
          access_levels?: Array<number>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Mailtrap contact fields. */
    "mailtrap.list_contact_fields": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The Mailtrap contact fields returned by the API. */
        contactFields: Array<{
          /**
           * The Mailtrap contact field ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap contact field name. */
          name?: string;
          /** The Mailtrap contact field data type. */
          data_type?: string;
          /** The merge tag used for the contact field. */
          merge_tag?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Mailtrap contact lists. */
    "mailtrap.list_contact_lists": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The Mailtrap contact lists returned by the API. */
        contactLists: Array<{
          /**
           * The Mailtrap contact list ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap contact list name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Mailtrap email templates. */
    "mailtrap.list_email_templates": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The Mailtrap email templates returned by the API. */
        emailTemplates: Array<{
          /**
           * The Mailtrap email template ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap UUID of the email template. */
          uuid?: string;
          /** The Mailtrap email template name. */
          name?: string;
          /** The default subject line stored on the template. */
          subject?: string;
          /** The Mailtrap category stored on the template. */
          category?: string;
          /** The plain-text template content. */
          body_text?: string;
          /** The HTML template content. */
          body_html?: string;
          /** The template creation timestamp. */
          created_at?: string;
          /** The template update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Mailtrap inboxes under one account. */
    "mailtrap.list_inboxes": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The inboxes returned by Mailtrap. */
        inboxes: Array<{
          /**
           * The unique identifier of the inbox.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The display name of the inbox. */
          name?: string;
          /** The SMTP username currently assigned to the inbox. */
          username?: string;
          /** The inbox email username returned by Mailtrap. */
          email_username?: string;
          /**
           * The identifier of the parent project.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** The number of emails currently stored in the inbox. */
          emails_count?: number;
          /** The number of unread emails currently stored in the inbox. */
          emails_unread_count?: number;
          /** The inbox permissions object returned by Mailtrap. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List messages captured in one Mailtrap inbox. */
    "mailtrap.list_messages": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap inbox ID.
         * @exclusiveMinimum 0
         */
        inboxId: number;
        /**
         * The page number requested from Mailtrap. Ignored when lastId is provided.
         * @minimum 1
         */
        page?: number;
        /**
         * The search string used to filter Mailtrap inbox messages.
         * @minLength 1
         */
        search?: string;
        /**
         * The Mailtrap last_id cursor used for older inbox messages pagination.
         * @exclusiveMinimum 0
         */
        lastId?: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /**
         * The Mailtrap inbox ID used for the request.
         * @exclusiveMinimum 0
         */
        inboxId: number;
        /** The messages returned by Mailtrap. */
        messages: Array<{
          /**
           * The Mailtrap message ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /**
           * The Mailtrap inbox ID.
           * @exclusiveMinimum 0
           */
          inbox_id?: number;
          /** The message subject line. */
          subject?: string;
          /** The recipient email address when present. */
          to_email?: string;
          /** The sender email address when present. */
          from_email?: string;
          /** Whether the message is marked as read. */
          is_read?: boolean;
          /** The timestamp when Mailtrap reports the message as sent. */
          sent_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Mailtrap projects under one account. */
    "mailtrap.list_projects": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The projects returned by Mailtrap. */
        projects: Array<{
          /**
           * The unique identifier of the project.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The display name of the project. */
          name?: string;
          /** The inboxes nested under the project when Mailtrap returns them. */
          inboxes?: Array<{
            /**
             * The unique identifier of the inbox.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The display name of the inbox. */
            name?: string;
            /** The SMTP username currently assigned to the inbox. */
            username?: string;
            /** The inbox email username returned by Mailtrap. */
            email_username?: string;
            /**
             * The identifier of the parent project.
             * @exclusiveMinimum 0
             */
            project_id?: number;
            /** The number of emails currently stored in the inbox. */
            emails_count?: number;
            /** The number of unread emails currently stored in the inbox. */
            emails_unread_count?: number;
            /** The inbox permissions object returned by Mailtrap. */
            permissions?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The project permissions object returned by Mailtrap. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Mailtrap sending domains. */
    "mailtrap.list_sending_domains": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The Mailtrap sending domains returned by the API. */
        sendingDomains: Array<{
          /**
           * The Mailtrap sending domain ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The domain name registered in Mailtrap. */
          domain_name?: string;
          /** Whether Mailtrap has verified the DNS records. */
          dns_verified?: boolean;
          /** The Mailtrap compliance status returned for the sending domain. */
          compliance_status?: string;
          /** The timestamp when Mailtrap verified the sending domain DNS records. */
          dns_verified_at?: string | null;
          /** The DNS records Mailtrap expects for the sending domain. */
          dns_records?: Array<Record<string, unknown>>;
          /** The Mailtrap permissions object returned for the sending domain. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Mailtrap suppressions. */
    "mailtrap.list_suppressions": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The suppressed email address to search for.
         * @format email
         */
        email?: string;
        /**
         * The lower bound timestamp for suppression creation, in ISO 8601 format.
         * @format date-time
         */
        startTime?: string;
        /**
         * The upper bound timestamp for suppression creation, in ISO 8601 format.
         * @format date-time
         */
        endTime?: string;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The Mailtrap suppressions returned by the API. */
        suppressions: Array<{
          /** The Mailtrap suppression ID. */
          id?: number | string;
          /** The suppressed email address. */
          email?: string;
          /** The Mailtrap suppression type. */
          type?: string;
          /** The suppression reason returned by Mailtrap. */
          reason?: string;
          /** The timestamp when the suppression was created. */
          created_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Mark all messages in one Mailtrap inbox as read. */
    "mailtrap.mark_inbox_as_read": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap inbox ID.
         * @exclusiveMinimum 0
         */
        inboxId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The inbox returned by Mailtrap after marking all messages as read. */
        inbox: {
          /**
           * The unique identifier of the inbox.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The display name of the inbox. */
          name?: string;
          /** The SMTP username currently assigned to the inbox. */
          username?: string;
          /** The inbox email username returned by Mailtrap. */
          email_username?: string;
          /**
           * The identifier of the parent project.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** The number of emails currently stored in the inbox. */
          emails_count?: number;
          /** The number of unread emails currently stored in the inbox. */
          emails_unread_count?: number;
          /** The inbox permissions object returned by Mailtrap. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Reset SMTP credentials for one Mailtrap inbox. */
    "mailtrap.reset_inbox_credentials": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap inbox ID.
         * @exclusiveMinimum 0
         */
        inboxId: number;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The inbox returned by Mailtrap after resetting credentials. */
        inbox: {
          /**
           * The unique identifier of the inbox.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The display name of the inbox. */
          name?: string;
          /** The SMTP username currently assigned to the inbox. */
          username?: string;
          /** The inbox email username returned by Mailtrap. */
          email_username?: string;
          /**
           * The identifier of the parent project.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** The number of emails currently stored in the inbox. */
          emails_count?: number;
          /** The number of unread emails currently stored in the inbox. */
          emails_unread_count?: number;
          /** The inbox permissions object returned by Mailtrap. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Mailtrap contact by UUID or email. */
    "mailtrap.update_contact": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact identifier. Provide a contact UUID or a plain email address; the connector URL-encodes email values automatically.
         * @minLength 1
         */
        contactIdentifier: string;
        /** The contact fields to update. */
        contact: {
          /**
           * The new email address to store on the contact.
           * @format email
           */
          email?: string;
          /** The custom contact fields keyed by Mailtrap merge tag. */
          fields?: Record<string, unknown>;
          /** The contact list IDs to add to the contact. */
          listIdsIncluded?: Array<number>;
          /** The contact list IDs to remove from the contact. */
          listIdsExcluded?: Array<number>;
          /** Whether Mailtrap should mark the contact as unsubscribed. */
          unsubscribed?: boolean;
        };
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The action Mailtrap reports for the contact upsert operation. */
        action: "created" | "updated";
        /** The contact returned by Mailtrap. */
        contact: {
          /** The unique identifier of the contact. */
          id?: string;
          /** The email address stored on the contact. */
          email?: string;
          /** The custom contact fields keyed by Mailtrap merge tag. */
          fields?: Record<string, unknown>;
          /** The Mailtrap contact list IDs assigned to the contact. */
          list_ids?: Array<number>;
          /** The Mailtrap subscription status of the contact. */
          status?: string;
          /** The creation timestamp in milliseconds. */
          created_at?: number;
          /** The last update timestamp in milliseconds. */
          updated_at?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Mailtrap contact field. */
    "mailtrap.update_contact_field": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact field ID.
         * @exclusiveMinimum 0
         */
        fieldId: number;
        /**
         * The new Mailtrap contact field name.
         * @minLength 1
         * @maxLength 80
         */
        name?: string;
        /**
         * The new Mailtrap merge tag for the contact field.
         * @minLength 1
         * @maxLength 80
         */
        mergeTag?: string;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The contact field returned by Mailtrap. */
        contactField: {
          /**
           * The Mailtrap contact field ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap contact field name. */
          name?: string;
          /** The Mailtrap contact field data type. */
          data_type?: string;
          /** The merge tag used for the contact field. */
          merge_tag?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Mailtrap contact list. */
    "mailtrap.update_contact_list": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap contact list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The Mailtrap contact list name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The contact list returned by Mailtrap. */
        contactList: {
          /**
           * The Mailtrap contact list ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap contact list name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Mailtrap email template. */
    "mailtrap.update_email_template": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap email template ID.
         * @exclusiveMinimum 0
         */
        emailTemplateId: number;
        /** The email template fields to update. */
        emailTemplate: {
          /**
           * The new Mailtrap email template name.
           * @minLength 1
           * @maxLength 255
           */
          name?: string;
          /**
           * The new subject line to store on the template.
           * @minLength 1
           * @maxLength 255
           */
          subject?: string;
          /**
           * The new Mailtrap category for the template.
           * @minLength 1
           * @maxLength 255
           */
          category?: string;
          /**
           * The new HTML body content to store on the template.
           * @maxLength 10000000
           */
          bodyHtml?: string;
          /**
           * The new plain-text body content to store on the template.
           * @maxLength 10000000
           */
          bodyText?: string;
        };
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The email template returned by Mailtrap. */
        emailTemplate: {
          /**
           * The Mailtrap email template ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Mailtrap UUID of the email template. */
          uuid?: string;
          /** The Mailtrap email template name. */
          name?: string;
          /** The default subject line stored on the template. */
          subject?: string;
          /** The Mailtrap category stored on the template. */
          category?: string;
          /** The plain-text template content. */
          body_text?: string;
          /** The HTML template content. */
          body_html?: string;
          /** The template creation timestamp. */
          created_at?: string;
          /** The template update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Mailtrap inbox. */
    "mailtrap.update_inbox": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap inbox ID.
         * @exclusiveMinimum 0
         */
        inboxId: number;
        /** The inbox fields to update. */
        inbox: {
          /**
           * The new Mailtrap inbox name.
           * @minLength 1
           */
          name?: string;
          /**
           * The new Mailtrap inbox email username.
           * @minLength 1
           */
          emailUsername?: string;
        };
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The updated inbox returned by Mailtrap. */
        inbox: {
          /**
           * The unique identifier of the inbox.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The display name of the inbox. */
          name?: string;
          /** The SMTP username currently assigned to the inbox. */
          username?: string;
          /** The inbox email username returned by Mailtrap. */
          email_username?: string;
          /**
           * The identifier of the parent project.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** The number of emails currently stored in the inbox. */
          emails_count?: number;
          /** The number of unread emails currently stored in the inbox. */
          emails_unread_count?: number;
          /** The inbox permissions object returned by Mailtrap. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Mailtrap project. */
    "mailtrap.update_project": {
      input: {
        /**
         * The Mailtrap account ID to use. When omitted, the connector uses the default accountId stored on the connection.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The Mailtrap project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /** The project fields to update. */
        project: {
          /**
           * The Mailtrap project name to store on the project.
           * @minLength 2
           * @maxLength 100
           */
          name: string;
        };
      };
      output: {
        /**
         * The Mailtrap account ID used for the request.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The updated project returned by Mailtrap. */
        project: {
          /**
           * The unique identifier of the project.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The display name of the project. */
          name?: string;
          /** The inboxes nested under the project when Mailtrap returns them. */
          inboxes?: Array<{
            /**
             * The unique identifier of the inbox.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The display name of the inbox. */
            name?: string;
            /** The SMTP username currently assigned to the inbox. */
            username?: string;
            /** The inbox email username returned by Mailtrap. */
            email_username?: string;
            /**
             * The identifier of the parent project.
             * @exclusiveMinimum 0
             */
            project_id?: number;
            /** The number of emails currently stored in the inbox. */
            emails_count?: number;
            /** The number of unread emails currently stored in the inbox. */
            emails_unread_count?: number;
            /** The inbox permissions object returned by Mailtrap. */
            permissions?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The project permissions object returned by Mailtrap. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
