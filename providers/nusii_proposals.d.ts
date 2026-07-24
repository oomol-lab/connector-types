import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Archive a Nusii proposal by ID. */
    "nusii_proposals.archive_proposal": {
      input: {
        /** The Nusii proposal ID */
        id: string | number;
      };
      output: {
        /** A Nusii JSON API resource. */
        data: {
          /** The Nusii resource identifier. */
          id: string;
          /** The Nusii JSON API resource type. */
          type: string;
          /** The provider-defined attributes returned for this Nusii resource. */
          attributes: Record<string, unknown>;
          /** The JSON API relationships returned for this Nusii resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related JSON API resources included by Nusii. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Create a client in the connected Nusii account. */
    "nusii_proposals.create_client": {
      input: {
        /**
         * The client's email address.
         * @format email
         */
        email: string;
        /**
         * The client's first name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * The client's surname.
         * @minLength 1
         * @pattern \S
         */
        surname?: string;
        /**
         * The client's currency code.
         * @minLength 1
         * @pattern \S
         */
        currency?: string;
        /**
         * The client's company or business name.
         * @minLength 1
         * @pattern \S
         */
        business?: string;
        /**
         * The client's locale code used for proposals.
         * @minLength 1
         * @pattern \S
         */
        locale?: string;
        /**
         * The PDF page size used for the client's proposals.
         * @minLength 1
         * @pattern \S
         */
        pdf_page_size?: string;
        /**
         * The client's website as accepted by Nusii.
         * @minLength 1
         * @pattern \S
         */
        web?: string;
        /**
         * The client's telephone number.
         * @minLength 1
         * @pattern \S
         */
        telephone?: string;
        /**
         * The client's street address.
         * @minLength 1
         * @pattern \S
         */
        address?: string;
        /**
         * The client's city.
         * @minLength 1
         * @pattern \S
         */
        city?: string;
        /**
         * The client's postal code.
         * @minLength 1
         * @pattern \S
         */
        postcode?: string;
        /**
         * The client's country name.
         * @minLength 1
         * @pattern \S
         */
        country?: string;
        /**
         * The client's state, province, or region.
         * @minLength 1
         * @pattern \S
         */
        state?: string;
      };
      output: {
        /** A Nusii JSON API resource. */
        data: {
          /** The Nusii resource identifier. */
          id: string;
          /** The Nusii JSON API resource type. */
          type: string;
          /** The provider-defined attributes returned for this Nusii resource. */
          attributes: Record<string, unknown>;
          /** The JSON API relationships returned for this Nusii resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related JSON API resources included by Nusii. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Create a Nusii proposal, optionally resolving a client and copying sections from a template. */
    "nusii_proposals.create_proposal": {
      input: {
        /**
         * The proposal title.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /** The existing Nusii client ID */
        client_id?: string | number;
        /**
         * The client email to resolve or create when client_id is not provided.
         * @format email
         */
        client_email?: string;
        /** The Nusii template ID whose sections should be copied */
        template_id?: string | number;
        /**
         * The proposal's document section title.
         * @minLength 1
         * @pattern \S
         */
        document_section_title?: string;
        /** The Nusii user ID that prepared the proposal */
        prepared_by_id?: string | number;
        /**
         * The proposal expiration timestamp in ISO 8601 format.
         * @format date-time
         */
        expires_at?: string;
        /**
         * The proposal display timestamp in ISO 8601 format.
         * @format date-time
         */
        display_date?: string;
        /** Whether Nusii should create the proposal as a report. */
        report?: boolean;
        /** Whether the proposal should hide its total. */
        exclude_total?: boolean;
        /** Whether the proposal PDF should hide its total. */
        exclude_total_in_pdf?: boolean;
        /**
         * The Nusii theme identifier for the proposal.
         * @minLength 1
         * @pattern \S
         */
        theme?: string;
      };
      output: {
        /** A Nusii JSON API resource. */
        data: {
          /** The Nusii resource identifier. */
          id: string;
          /** The Nusii JSON API resource type. */
          type: string;
          /** The provider-defined attributes returned for this Nusii resource. */
          attributes: Record<string, unknown>;
          /** The JSON API relationships returned for this Nusii resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related JSON API resources included by Nusii. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the Nusii account associated with the connected API token. */
    "nusii_proposals.get_account": {
      input: Record<string, never>;
      output: {
        /** A Nusii JSON API resource. */
        data: {
          /** The Nusii resource identifier. */
          id: string;
          /** The Nusii JSON API resource type. */
          type: string;
          /** The provider-defined attributes returned for this Nusii resource. */
          attributes: Record<string, unknown>;
          /** The JSON API relationships returned for this Nusii resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related JSON API resources included by Nusii. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get one Nusii client by ID. */
    "nusii_proposals.get_client": {
      input: {
        /** The Nusii client ID */
        id: string | number;
      };
      output: {
        /** A Nusii JSON API resource. */
        data: {
          /** The Nusii resource identifier. */
          id: string;
          /** The Nusii JSON API resource type. */
          type: string;
          /** The provider-defined attributes returned for this Nusii resource. */
          attributes: Record<string, unknown>;
          /** The JSON API relationships returned for this Nusii resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related JSON API resources included by Nusii. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get one Nusii proposal by ID, including any recipient resources Nusii returns. */
    "nusii_proposals.get_proposal": {
      input: {
        /** The Nusii proposal ID */
        id: string | number;
      };
      output: {
        /** A Nusii JSON API resource. */
        data: {
          /** The Nusii resource identifier. */
          id: string;
          /** The Nusii JSON API resource type. */
          type: string;
          /** The provider-defined attributes returned for this Nusii resource. */
          attributes: Record<string, unknown>;
          /** The JSON API relationships returned for this Nusii resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related JSON API resources included by Nusii. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get one Nusii proposal template by ID. */
    "nusii_proposals.get_template": {
      input: {
        /** The Nusii template ID */
        id: string | number;
      };
      output: {
        /** A Nusii JSON API resource. */
        data: {
          /** The Nusii resource identifier. */
          id: string;
          /** The Nusii JSON API resource type. */
          type: string;
          /** The provider-defined attributes returned for this Nusii resource. */
          attributes: Record<string, unknown>;
          /** The JSON API relationships returned for this Nusii resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related JSON API resources included by Nusii. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List clients in the connected Nusii account with optional pagination. */
    "nusii_proposals.list_clients": {
      input: {
        /**
         * The Nusii page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of Nusii records to return per page.
         * @exclusiveMinimum 0
         */
        per?: number;
      };
      output: {
        /** The Nusii JSON API resources in this page. */
        data: Array<{
          /** The Nusii resource identifier. */
          id: string;
          /** The Nusii JSON API resource type. */
          type: string;
          /** The provider-defined attributes returned for this Nusii resource. */
          attributes: Record<string, unknown>;
          /** The JSON API relationships returned for this Nusii resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Nusii, whose keys may use underscores or hyphens. */
        meta?: Record<string, unknown>;
        /** Related JSON API resources included by Nusii. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List Nusii proposals with pagination and optional status, archive, or recipient filters. */
    "nusii_proposals.list_proposals": {
      input: {
        /**
         * The Nusii page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of Nusii records to return per page.
         * @exclusiveMinimum 0
         */
        per?: number;
        /** The proposal lifecycle status to filter by. */
        status?: "draft" | "pending" | "accepted" | "rejected" | "clarification";
        /** Whether to return archived proposals instead of active proposals. */
        archived?: boolean;
        /**
         * A single proposal recipient email address to match.
         * @format email
         */
        recipient_email?: string;
        /**
         * Proposal recipient email addresses to match; Nusii accepts up to 30.
         * @minItems 1
         * @maxItems 30
         */
        recipient_emails?: Array<string>;
      };
      output: {
        /** The Nusii JSON API resources in this page. */
        data: Array<{
          /** The Nusii resource identifier. */
          id: string;
          /** The Nusii JSON API resource type. */
          type: string;
          /** The provider-defined attributes returned for this Nusii resource. */
          attributes: Record<string, unknown>;
          /** The JSON API relationships returned for this Nusii resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Nusii, whose keys may use underscores or hyphens. */
        meta?: Record<string, unknown>;
        /** Related JSON API resources included by Nusii. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List account or public Nusii templates with optional pagination. */
    "nusii_proposals.list_templates": {
      input: {
        /**
         * The Nusii page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of Nusii records to return per page.
         * @exclusiveMinimum 0
         */
        per?: number;
        /** Whether to return Nusii public templates instead of account templates. */
        public_templates?: boolean;
      };
      output: {
        /** The Nusii JSON API resources in this page. */
        data: Array<{
          /** The Nusii resource identifier. */
          id: string;
          /** The Nusii JSON API resource type. */
          type: string;
          /** The provider-defined attributes returned for this Nusii resource. */
          attributes: Record<string, unknown>;
          /** The JSON API relationships returned for this Nusii resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Nusii, whose keys may use underscores or hyphens. */
        meta?: Record<string, unknown>;
        /** Related JSON API resources included by Nusii. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List the proposal themes available in Nusii. */
    "nusii_proposals.list_themes": {
      input: Record<string, never>;
      output: Array<{
        /** The Nusii theme identifier. */
        id: string;
        /** The human-readable Nusii theme name. */
        name: string;
        [key: string]: unknown;
      }>;
    };
    /** List Nusii account users for prepared-by and sender selection. */
    "nusii_proposals.list_users": {
      input: {
        /**
         * The Nusii page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of Nusii records to return per page.
         * @exclusiveMinimum 0
         */
        per?: number;
      };
      output: {
        /** The Nusii JSON API resources in this page. */
        data: Array<{
          /** The Nusii resource identifier. */
          id: string;
          /** The Nusii JSON API resource type. */
          type: string;
          /** The provider-defined attributes returned for this Nusii resource. */
          attributes: Record<string, unknown>;
          /** The JSON API relationships returned for this Nusii resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Nusii, whose keys may use underscores or hyphens. */
        meta?: Record<string, unknown>;
        /** Related JSON API resources included by Nusii. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Send a Nusii proposal to one legacy email address or up to 10 structured recipients. */
    "nusii_proposals.send_proposal": {
      input: {
        /** The Nusii proposal ID */
        id: string | number;
        /**
         * The single recipient email used when recipients is not provided.
         * @format email
         */
        email?: string;
        /**
         * Structured recipients; when provided, Nusii ignores email.
         * @minItems 1
         * @maxItems 10
         */
        recipients?: Array<{
          /**
           * The recipient's display name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /**
           * The recipient's email address.
           * @format email
           */
          email: string;
          /** Whether the recipient may sign the proposal. */
          eligible_to_sign?: boolean;
        }>;
        /**
         * Comma-separated CC email addresses.
         * @minLength 1
         * @pattern \S
         */
        cc?: string;
        /**
         * Comma-separated BCC email addresses.
         * @minLength 1
         * @pattern \S
         */
        bcc?: string;
        /**
         * The proposal email subject.
         * @minLength 1
         * @pattern \S
         */
        subject?: string;
        /**
         * The proposal email body.
         * @minLength 1
         * @pattern \S
         */
        message?: string;
        /** Whether Nusii should overwrite the saved email template. */
        save_email_template?: boolean;
        /** The Nusii sender user ID */
        sender_id?: string | number;
        /**
         * The sender email to resolve when sender_id is not provided; the account owner is used when both are omitted.
         * @format email
         */
        sender_email?: string;
      };
      output: {
        /** The send status returned by Nusii. */
        status: string;
        /**
         * The timestamp when Nusii sent the proposal.
         * @format date-time
         */
        sent_at: string;
        /** The Nusii user ID that sent the proposal */
        sender_id: string | number;
        /** The name of the Nusii user that sent the proposal. */
        sender_name: string;
        [key: string]: unknown;
      };
    };
    /** Update one or more documented fields on a Nusii proposal. */
    "nusii_proposals.update_proposal": {
      input: {
        /** The Nusii proposal ID */
        id: string | number;
        /**
         * The proposal title.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /** The existing Nusii client ID */
        client_id?: string | number;
        /**
         * The client email to resolve or create when client_id is not provided.
         * @format email
         */
        client_email?: string;
        /**
         * The proposal's document section title.
         * @minLength 1
         * @pattern \S
         */
        document_section_title?: string;
        /** The Nusii user ID that prepared the proposal */
        prepared_by_id?: string | number;
        /**
         * The proposal expiration timestamp in ISO 8601 format.
         * @format date-time
         */
        expires_at?: string;
        /**
         * The proposal display timestamp in ISO 8601 format.
         * @format date-time
         */
        display_date?: string;
        /** Whether Nusii should create the proposal as a report. */
        report?: boolean;
        /** Whether the proposal should hide its total. */
        exclude_total?: boolean;
        /** Whether the proposal PDF should hide its total. */
        exclude_total_in_pdf?: boolean;
        /**
         * The Nusii theme identifier for the proposal.
         * @minLength 1
         * @pattern \S
         */
        theme?: string;
      };
      output: {
        /** A Nusii JSON API resource. */
        data: {
          /** The Nusii resource identifier. */
          id: string;
          /** The Nusii JSON API resource type. */
          type: string;
          /** The provider-defined attributes returned for this Nusii resource. */
          attributes: Record<string, unknown>;
          /** The JSON API relationships returned for this Nusii resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related JSON API resources included by Nusii. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
  }
}
