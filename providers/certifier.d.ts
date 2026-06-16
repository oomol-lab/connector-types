import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create, issue, and send one Certifier credential in a single request using a group, recipient, and optional custom attributes. */
    "certifier.create_issue_send_credential": {
      input: {
        /**
         * Group ID the credential should belong to.
         * @minLength 1
         */
        groupId: string;
        /** Recipient details used when creating, issuing, and sending a credential. */
        recipient: {
          /**
           * Recipient full name.
           * @minLength 1
           */
          name: string;
          /**
           * Recipient email address.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email: string;
        };
        /**
         * Issue date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        issueDate?: string;
        /**
         * Expiry date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        expiryDate?: string;
        /** Optional custom attributes forwarded to Certifier. */
        customAttributes?: Record<string, string>;
      };
      output: {
        /** Credential returned after the create-issue-send call. */
        credential: {
          /**
           * The internal identifier of the credential.
           * @minLength 1
           */
          id: string;
          /**
           * The public identifier of the credential.
           * @minLength 1
           */
          publicId: string;
          /**
           * The group identifier the credential belongs to.
           * @minLength 1
           */
          groupId: string;
          /**
           * The current credential lifecycle status.
           * @minLength 1
           */
          status: string;
          /** Recipient details associated with the credential. */
          recipient: {
            /** Recipient full name. */
            name?: string;
            /** Recipient email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** Issue date returned by Certifier. */
          issueDate: string;
          /** Timestamp when the credential was created. */
          createdAt: string;
          /** Timestamp when the credential was last updated. */
          updatedAt: string;
          /** Expiry date when the credential expires. */
          expiryDate?: string;
          /** Resolved credential attributes. */
          attributes?: Record<string, unknown>;
          /** Custom attributes attached to the credential. */
          customAttributes?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Certifier credential interaction events with optional credential filtering and cursor pagination. */
    "certifier.list_credential_interactions": {
      input: {
        /**
         * Credential ID used to filter interaction events.
         * @minLength 1
         */
        credentialId?: string;
        /**
         * Maximum number of interaction events to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Cursor from a previous response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Credential interaction events returned by Certifier. */
        interactions: Array<{
          /**
           * The unique identifier of the interaction event.
           * @minLength 1
           */
          id: string;
          /**
           * Credential ID referenced by the interaction.
           * @minLength 1
           */
          credentialId: string;
          /**
           * Event type reported by Certifier.
           * @minLength 1
           */
          eventType: string;
          /**
           * Actor who triggered the interaction.
           * @minLength 1
           */
          triggeredBy: string;
          /** Timestamp when the interaction occurred. */
          triggeredAt: string;
          [key: string]: unknown;
        }>;
        /** Pagination cursors for the interaction list. */
        pagination: {
          /** Cursor for the next page, or null when there is none. */
          next: string | null;
          /** Cursor for the previous page, or null when there is none. */
          prev: string | null;
        };
      };
    };
    /** List Certifier credentials with cursor pagination. */
    "certifier.list_credentials": {
      input: {
        /**
         * Maximum number of credentials to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Cursor from a previous response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Credentials returned by Certifier. */
        credentials: Array<{
          /**
           * The internal identifier of the credential.
           * @minLength 1
           */
          id: string;
          /**
           * The public identifier of the credential.
           * @minLength 1
           */
          publicId: string;
          /**
           * The group identifier the credential belongs to.
           * @minLength 1
           */
          groupId: string;
          /**
           * The current credential lifecycle status.
           * @minLength 1
           */
          status: string;
          /** Recipient details associated with the credential. */
          recipient: {
            /** Recipient full name. */
            name?: string;
            /** Recipient email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** Issue date returned by Certifier. */
          issueDate: string;
          /** Timestamp when the credential was created. */
          createdAt: string;
          /** Timestamp when the credential was last updated. */
          updatedAt: string;
          /** Expiry date when the credential expires. */
          expiryDate?: string;
          /** Resolved credential attributes. */
          attributes?: Record<string, unknown>;
          /** Custom attributes attached to the credential. */
          customAttributes?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination cursors for the credential list. */
        pagination: {
          /** Cursor for the next page, or null when there is none. */
          next: string | null;
          /** Cursor for the previous page, or null when there is none. */
          prev: string | null;
        };
      };
    };
    /** List Certifier certificate and badge designs with cursor pagination. */
    "certifier.list_designs": {
      input: {
        /**
         * Maximum number of designs to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Cursor from a previous response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Designs returned by Certifier. */
        designs: Array<{
          /**
           * The unique identifier of the design.
           * @minLength 1
           */
          id: string;
          /**
           * The design name.
           * @minLength 1
           */
          name: string;
          /** The design type returned by Certifier. */
          type: string;
          [key: string]: unknown;
        }>;
        /** Pagination cursors for the design list. */
        pagination: {
          /** Cursor for the next page, or null when there is none. */
          next: string | null;
          /** Cursor for the previous page, or null when there is none. */
          prev: string | null;
        };
      };
    };
    /** List Certifier groups with cursor pagination. */
    "certifier.list_groups": {
      input: {
        /**
         * Maximum number of groups to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Cursor from a previous response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Groups returned by Certifier. */
        groups: Array<{
          /**
           * The unique identifier of the group.
           * @minLength 1
           */
          id: string;
          /**
           * The group name.
           * @minLength 1
           */
          name: string;
          /** Timestamp when the group was created. */
          createdAt: string;
          /** Timestamp when the group was last updated. */
          updatedAt: string;
          /** Badge design ID associated with the group when available. */
          badgeDesignId?: string;
          /** Learning event URL associated with the group when available. */
          learningEventUrl?: string;
          /** Certificate design ID associated with the group when available. */
          certificateDesignId?: string;
          [key: string]: unknown;
        }>;
        /** Pagination cursors for the group list. */
        pagination: {
          /** Cursor for the next page, or null when there is none. */
          next: string | null;
          /** Cursor for the previous page, or null when there is none. */
          prev: string | null;
        };
      };
    };
    /** Search Certifier credentials with structured filter, sorting, and cursor pagination. */
    "certifier.search_credentials": {
      input: {
        /** Structured Certifier search filter object such as `AND` / `OR` conditions. */
        filter: Record<string, unknown>;
        /** Optional sort configuration. */
        sort?: {
          /** Credential field used to sort the search result. */
          property: "id" | "createdAt" | "updatedAt" | "issueDate" | "expiryDate";
          /** Sort order for the search result. */
          order?: "asc" | "desc";
        };
        /**
         * Maximum number of credentials to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Cursor from a previous search response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Credentials matching the search filter. */
        credentials: Array<{
          /**
           * The internal identifier of the credential.
           * @minLength 1
           */
          id: string;
          /**
           * The public identifier of the credential.
           * @minLength 1
           */
          publicId: string;
          /**
           * The group identifier the credential belongs to.
           * @minLength 1
           */
          groupId: string;
          /**
           * The current credential lifecycle status.
           * @minLength 1
           */
          status: string;
          /** Recipient details associated with the credential. */
          recipient: {
            /** Recipient full name. */
            name?: string;
            /** Recipient email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** Issue date returned by Certifier. */
          issueDate: string;
          /** Timestamp when the credential was created. */
          createdAt: string;
          /** Timestamp when the credential was last updated. */
          updatedAt: string;
          /** Expiry date when the credential expires. */
          expiryDate?: string;
          /** Resolved credential attributes. */
          attributes?: Record<string, unknown>;
          /** Custom attributes attached to the credential. */
          customAttributes?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination cursors for the search result. */
        pagination: {
          /** Cursor for the next page, or null when there is none. */
          next: string | null;
          /** Cursor for the previous page, or null when there is none. */
          prev: string | null;
        };
      };
    };
  }
}
