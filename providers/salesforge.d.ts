import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count matching active workspace contacts. Request exact counts only when needed. */
    "salesforge.count_contacts": {
      input: {
        /**
         * Workspace ID.
         * @minLength 1
         */
        workspaceID: string;
        /** Filter by existing tag IDs. */
        "tag_ids[]"?: Array<string>;
        /** Filter by email validation statuses. */
        "validation_statuses[]"?: Array<"safe" | "valid" | "invalid" | "disabled" | "disposable" | "inbox_full" | "catch_all" | "role_account" | "spamtrap" | "unknown" | "unvalidated">;
        /** Exclude contacts enrolled in this sequence. */
        not_in_sequence_id?: string;
        /** Filter by valid LinkedIn profile URL. */
        has_valid_linkedin?: boolean;
        /** Exclude contacts whose email domains belong to these ESPs. */
        "not_in_esps[]"?: Array<string>;
      };
      output: {
        /** Total matching contacts. */
        total?: number;
        [key: string]: unknown;
      };
    };
    /** Create a workspace contact with an email address or LinkedIn URL. If no tags are supplied, Salesforge applies a date-based tag. */
    "salesforge.create_contact": {
      input: {
        /** @minLength 1 */
        email: unknown;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        linkedinUrl: unknown;
        [key: string]: unknown;
      };
      output: {
        /** Contact ID. */
        id?: string;
        /** First name. */
        firstName?: string;
        /** Last name. */
        lastName?: string;
        /** Email address. */
        email?: string;
        /** LinkedIn profile URL. */
        linkedinUrl?: string;
        /** Company name. */
        company?: string;
        /** Job position. */
        position?: string;
        /** Free-text location. */
        location?: string;
        /** Derived IANA timezone; empty when unknown. */
        timezone?: string;
        /** Contact tags. */
        tags?: Array<string>;
        /** Custom variable values. */
        customVars?: Record<string, string>;
        /** Sequence enrollments. */
        sequences?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Add up to 1000 email addresses, domains, or LinkedIn URLs to the workspace do-not-contact list. */
    "salesforge.create_dncs": {
      input: {
        /**
         * Workspace ID.
         * @minLength 1
         */
        workspaceID: string;
        /**
         * Email addresses, domains, or LinkedIn URLs to add to or remove from the do-not-contact list.
         * @minItems 1
         * @maxItems 1000
         */
        dncs: Array<string>;
      };
      output: {
        /** Number of entries created. */
        created?: number;
        [key: string]: unknown;
      };
    };
    /** Delete a contact from a workspace. */
    "salesforge.delete_contact": {
      input: {
        /**
         * Workspace ID.
         * @minLength 1
         */
        workspaceID: string;
        /**
         * Contact ID.
         * @minLength 1
         */
        contactID: string;
      };
      output: {
        /** Whether deletion succeeded. */
        success: boolean;
      };
    };
    /** Get a contact, including tags and sequence enrollments. */
    "salesforge.get_contact": {
      input: {
        /**
         * Workspace ID.
         * @minLength 1
         */
        workspaceID: string;
        /**
         * Contact ID.
         * @minLength 1
         */
        contactID: string;
      };
      output: {
        /** Contact ID. */
        id?: string;
        /** First name. */
        firstName?: string;
        /** Last name. */
        lastName?: string;
        /** Email address. */
        email?: string;
        /** LinkedIn profile URL. */
        linkedinUrl?: string;
        /** Company name. */
        company?: string;
        /** Job position. */
        position?: string;
        /** Free-text location. */
        location?: string;
        /** Derived IANA timezone; empty when unknown. */
        timezone?: string;
        /** Contact tags. */
        tags?: Array<string>;
        /** Custom variable values. */
        customVars?: Record<string, string>;
        /** Sequence enrollments. */
        sequences?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Validate the API key and retrieve its account ID, name, and read-only flag. */
    "salesforge.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Account ID. */
        accountId?: string;
        /** API key name. */
        apiKeyName?: string;
        /** Whether the key permits only GET requests. */
        readOnly?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get a workspace by ID. */
    "salesforge.get_workspace": {
      input: {
        /**
         * Workspace ID.
         * @minLength 1
         */
        workspaceID: string;
      };
      output: {
        /** Workspace ID. */
        id?: string;
        /** Account ID. */
        accountId?: string;
        /** Workspace name. */
        name?: string;
        /** Workspace slug. */
        slug?: string;
        [key: string]: unknown;
      };
    };
    /** List workspace contacts with filters and offset or cursor pagination. Use pagination=cursor for the first cursor page and nextCursor as cursor for subsequent pages with the same filters. */
    "salesforge.list_contacts": {
      input: {
        /**
         * Workspace ID.
         * @minLength 1
         */
        workspaceID: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of results to skip.
         * @minimum 0
         */
        offset?: number;
        /** Filter by existing tag IDs. */
        "tag_ids[]"?: Array<string>;
        /** Filter by email validation statuses. */
        "validation_statuses[]"?: Array<"safe" | "valid" | "invalid" | "disabled" | "disposable" | "inbox_full" | "catch_all" | "role_account" | "spamtrap" | "unknown" | "unvalidated">;
        /** Exclude contacts enrolled in this sequence. */
        not_in_sequence_id?: string;
        /** Pagination mode; defaults to offset. */
        pagination?: "offset" | "cursor";
        /**
         * Opaque cursor from the preceding page; implies cursor pagination.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Contacts. */
        data?: Array<{
          /** Contact ID. */
          id?: string;
          /** First name. */
          firstName?: string;
          /** Last name. */
          lastName?: string;
          /** Email address. */
          email?: string;
          /** LinkedIn profile URL. */
          linkedinUrl?: string;
          /** Company name. */
          company?: string;
          /** Job position. */
          position?: string;
          /** Free-text location. */
          location?: string;
          /** Derived IANA timezone; empty when unknown. */
          timezone?: string;
          /** Contact tags. */
          tags?: Array<string>;
          /** Custom variable values. */
          customVars?: Record<string, string>;
          /** Sequence enrollments. */
          sequences?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Page size. */
        limit?: number;
        /** Page offset. */
        offset?: number;
        /** Total matching records. */
        total?: number;
        /** Whether another cursor page exists. */
        hasMore?: boolean;
        /** Opaque cursor for the next page; omitted on the last page. */
        nextCursor?: string;
        [key: string]: unknown;
      };
    };
    /** List workspace do-not-contact entries with offset pagination. */
    "salesforge.list_dncs": {
      input: {
        /**
         * Workspace ID.
         * @minLength 1
         */
        workspaceID: string;
        /**
         * Page size, at most 1000; defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of results to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Do-not-contact entries. */
        data?: Array<{
          /** Blocked email address, domain, or LinkedIn URL. */
          value?: string;
          /** Entry type. */
          type?: string;
          /** Creation timestamp. */
          createdAt?: string;
          [key: string]: unknown;
        }>;
        /** Page size. */
        limit?: number;
        /** Page offset. */
        offset?: number;
        /** Total matching records. */
        total?: number;
        [key: string]: unknown;
      };
    };
    /** List non-hidden workspace tags ordered by name, optionally filtered by name. */
    "salesforge.list_tags": {
      input: {
        /**
         * Workspace ID.
         * @minLength 1
         */
        workspaceID: string;
        /**
         * Page size, at most 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of results to skip.
         * @minimum 0
         */
        offset?: number;
        /** Filter tags whose name contains this value. */
        search?: string;
        /** Match search case exactly; defaults to false. */
        caseSensitive?: boolean;
      };
      output: {
        /** Tags. */
        data?: Array<{
          /** Tag ID. */
          id?: string;
          /** Tag name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Page size. */
        limit?: number;
        /** Page offset. */
        offset?: number;
        /** Total matching records. */
        total?: number;
        [key: string]: unknown;
      };
    };
    /** List account workspaces with offset pagination. */
    "salesforge.list_workspaces": {
      input: {
        /**
         * Maximum number of results to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of results to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Workspaces. */
        data?: Array<{
          /** Workspace ID. */
          id?: string;
          /** Account ID. */
          accountId?: string;
          /** Workspace name. */
          name?: string;
          /** Workspace slug. */
          slug?: string;
          [key: string]: unknown;
        }>;
        /** Page size. */
        limit?: number;
        /** Page offset. */
        offset?: number;
        /** Total matching records. */
        total?: number;
        [key: string]: unknown;
      };
    };
    /** Remove up to 1000 values from the workspace do-not-contact list, allowing them to be contacted again. */
    "salesforge.remove_dncs": {
      input: {
        /**
         * Workspace ID.
         * @minLength 1
         */
        workspaceID: string;
        /**
         * Email addresses, domains, or LinkedIn URLs to add to or remove from the do-not-contact list.
         * @minItems 1
         * @maxItems 1000
         */
        dncs: Array<string>;
      };
      output: {
        /** Whether deletion succeeded. */
        success: boolean;
      };
    };
  }
}
