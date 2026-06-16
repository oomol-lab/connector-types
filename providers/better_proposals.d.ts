import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get default Better Proposals brand settings such as brand name and tax defaults. */
    "better_proposals.get_brand_settings": {
      input: Record<string, never>;
      output: {
        /** Default brand settings returned by the Better Proposals API. */
        resource: Record<string, unknown> | null;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for a single Better Proposals company by ID. */
    "better_proposals.get_company": {
      input: {
        /**
         * The Better Proposals resource identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Company details returned by the Better Proposals API. */
        resource: Record<string, unknown> | null;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for a single Better Proposals currency by ID. */
    "better_proposals.get_currency": {
      input: {
        /**
         * The Better Proposals resource identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Currency details returned by the Better Proposals API. */
        resource: Record<string, unknown> | null;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for a single Better Proposals proposal by ID. */
    "better_proposals.get_proposal": {
      input: {
        /**
         * The Better Proposals resource identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Proposal details returned by the Better Proposals API. */
        resource: Record<string, unknown> | null;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the total Better Proposals proposal count for the connected account. */
    "better_proposals.get_proposal_count": {
      input: Record<string, never>;
      output: {
        /** The proposal count returned by Better Proposals. */
        count: number | null;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for a single Better Proposals quote by ID. */
    "better_proposals.get_quote": {
      input: {
        /**
         * The Better Proposals resource identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Quote details returned by the Better Proposals API. */
        resource: Record<string, unknown> | null;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get current Better Proposals account settings such as tax and timezone defaults. */
    "better_proposals.get_settings": {
      input: Record<string, never>;
      output: {
        /** Account settings returned by the Better Proposals API. */
        resource: Record<string, unknown> | null;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for a single Better Proposals template by ID. */
    "better_proposals.get_template": {
      input: {
        /**
         * The Better Proposals resource identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Template details returned by the Better Proposals API. */
        resource: Record<string, unknown> | null;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Better Proposals companies with optional pagination. */
    "better_proposals.list_companies": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @minimum 1
         */
        per_page?: number;
      };
      output: {
        /** Company records returned by the Better Proposals API. */
        items: Array<Record<string, unknown>>;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Better Proposals currencies with optional pagination. */
    "better_proposals.list_currencies": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @minimum 1
         */
        per_page?: number;
      };
      output: {
        /** Currency records returned by the Better Proposals API. */
        items: Array<Record<string, unknown>>;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Better Proposals document types with optional pagination. */
    "better_proposals.list_document_types": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @minimum 1
         */
        per_page?: number;
      };
      output: {
        /** Document type records returned by the Better Proposals API. */
        items: Array<Record<string, unknown>>;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Better Proposals custom merge tags with optional pagination. */
    "better_proposals.list_merge_tags": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @minimum 1
         */
        per_page?: number;
      };
      output: {
        /** Merge tag records returned by the Better Proposals API. */
        items: Array<Record<string, unknown>>;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Better Proposals proposals that are currently in the new proposal lifecycle state. */
    "better_proposals.list_new_proposals": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @minimum 1
         */
        per_page?: number;
        /**
         * Filter proposals by Better Proposals document type ID.
         * @minLength 1
         */
        document_type_id?: string;
      };
      output: {
        /** New proposal records returned by the Better Proposals API. */
        items: Array<Record<string, unknown>>;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Better Proposals proposals that have been opened by recipients. */
    "better_proposals.list_opened_proposals": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @minimum 1
         */
        per_page?: number;
        /**
         * Filter proposals by Better Proposals document type ID.
         * @minLength 1
         */
        document_type_id?: string;
      };
      output: {
        /** Opened proposal records returned by the Better Proposals API. */
        items: Array<Record<string, unknown>>;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Better Proposals proposals that have been paid. */
    "better_proposals.list_paid_proposals": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @minimum 1
         */
        per_page?: number;
        /**
         * Filter proposals by Better Proposals document type ID.
         * @minLength 1
         */
        document_type_id?: string;
      };
      output: {
        /** Paid proposal records returned by the Better Proposals API. */
        items: Array<Record<string, unknown>>;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Better Proposals proposals with optional pagination and document type filtering. */
    "better_proposals.list_proposals": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @minimum 1
         */
        per_page?: number;
        /**
         * Filter proposals by Better Proposals document type ID.
         * @minLength 1
         */
        document_type_id?: string;
      };
      output: {
        /** Proposal records returned by the Better Proposals API. */
        items: Array<Record<string, unknown>>;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Better Proposals quotes with optional pagination. */
    "better_proposals.list_quotes": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @minimum 1
         */
        per_page?: number;
      };
      output: {
        /** Quote records returned by the Better Proposals API. */
        items: Array<Record<string, unknown>>;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Better Proposals proposals that have been sent to recipients. */
    "better_proposals.list_sent_proposals": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @minimum 1
         */
        per_page?: number;
        /**
         * Filter proposals by Better Proposals document type ID.
         * @minLength 1
         */
        document_type_id?: string;
      };
      output: {
        /** Sent proposal records returned by the Better Proposals API. */
        items: Array<Record<string, unknown>>;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Better Proposals proposals that have been signed by recipients. */
    "better_proposals.list_signed_proposals": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @minimum 1
         */
        per_page?: number;
        /**
         * Filter proposals by Better Proposals document type ID.
         * @minLength 1
         */
        document_type_id?: string;
      };
      output: {
        /** Signed proposal records returned by the Better Proposals API. */
        items: Array<Record<string, unknown>>;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Better Proposals templates with optional pagination. */
    "better_proposals.list_templates": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @minimum 1
         */
        per_page?: number;
      };
      output: {
        /** Template records returned by the Better Proposals API. */
        items: Array<Record<string, unknown>>;
        /** The upstream Better Proposals response status. */
        status: string | null;
        /** The upstream Better Proposals message, when returned. */
        message: string | null;
        /** Raw object returned by the Better Proposals API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
