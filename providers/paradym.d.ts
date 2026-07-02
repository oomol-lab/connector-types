import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an OpenID4VC credential offer using one or more SD-JWT VC or mDoc credential templates. */
    "paradym.create_openid4vc_credential_offer": {
      input: {
        /**
         * The unique identifier of the Paradym project.
         * @minLength 1
         */
        projectId: string;
        /**
         * Credentials to offer. Each item requires a credential template ID and JSON attributes.
         * @minItems 1
         */
        credentials: Array<{
          /**
           * The unique identifier of the Paradym credential template.
           * @minLength 1
           */
          credentialTemplateId: string;
          /** Credential attributes keyed by template-defined attribute name. */
          attributes?: Record<string, unknown>;
        }>;
      };
      output: {
        /** A normalized OpenID4VC credential offer. */
        offer: {
          /** The credential offer ID. */
          id: string;
          /** The credential offer status returned by Paradym. */
          status: string | null;
          /** The URI that can be used to accept the credential offer. */
          offerUri: string | null;
          /** The QR-code URI for accepting the credential offer. */
          offerQrUri: string | null;
          /** The number of credentials included in the offer. */
          credentialCount: number;
          /** The offer creation timestamp returned by Paradym. */
          createdAt: string | null;
          /** The offer update timestamp returned by Paradym. */
          updatedAt: string | null;
          /** The offer expiration timestamp returned by Paradym. */
          expiresAt: string | null;
          /** The raw Paradym object returned by the API. */
          error: Record<string, unknown> | null;
          /** Credentials included in the offer. */
          credentials: Array<{
            /** The credential ID. */
            id?: string;
            /** The credential status returned by Paradym. */
            status?: string;
            /** The credential template ID used for this credential. */
            credentialTemplateId?: string;
            /** The credential format returned by Paradym. */
            format?: string;
            /** The exchange protocol returned by Paradym. */
            exchange?: string;
            /** Whether the credential can be revoked. */
            revocable?: boolean;
            [key: string]: unknown;
          }>;
          /** The raw Paradym object returned by the API. */
          raw: Record<string, unknown>;
        };
        /** The raw Paradym object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Create an OpenID4VC verification request for a Paradym presentation template. */
    "paradym.create_openid4vc_verification_request": {
      input: {
        /**
         * The unique identifier of the Paradym project.
         * @minLength 1
         */
        projectId: string;
        /**
         * The unique identifier of the Paradym presentation template.
         * @minLength 1
         */
        presentationTemplateId: string;
        /** Whether Paradym should require encrypted wallet presentation responses. */
        requireResponseEncryption?: boolean;
      };
      output: {
        /** A normalized OpenID4VC verification session. */
        verification: {
          /** The verification session ID. */
          id?: string;
          /** The verification status returned by Paradym. */
          status?: string;
          /** The presentation template ID used by this verification. */
          presentationTemplateId?: string;
          /** The authorization request URI returned by Paradym. */
          authorizationRequestUri?: string;
          /** The authorization request QR-code URI returned by Paradym. */
          authorizationRequestQrUri?: string;
          /** Credentials involved in the verification. */
          credentials?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** The raw Paradym object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one OpenID4VC issuance session by ID. */
    "paradym.get_openid4vc_issuance_session": {
      input: {
        /**
         * The unique identifier of the Paradym project.
         * @minLength 1
         */
        projectId: string;
        /**
         * The unique identifier of the OpenID4VC issuance session.
         * @minLength 1
         */
        openId4VcIssuanceId: string;
      };
      output: {
        /** A normalized OpenID4VC issuance session. */
        issuance: {
          /** The issuance session ID. */
          id?: string;
          /** The issuance session status returned by Paradym. */
          status?: string;
          /** The credential offer URI returned by Paradym. */
          offerUri?: string;
          /** The credential offer QR-code URI returned by Paradym. */
          offerQrUri?: string;
          /** Credentials included in the issuance session. */
          credentials?: Array<{
            /** The credential ID. */
            id?: string;
            /** The credential status returned by Paradym. */
            status?: string;
            /** The credential template ID used for this credential. */
            credentialTemplateId?: string;
            /** The credential format returned by Paradym. */
            format?: string;
            /** The exchange protocol returned by Paradym. */
            exchange?: string;
            /** Whether the credential can be revoked. */
            revocable?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The raw Paradym object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one OpenID4VC verification session by ID. */
    "paradym.get_openid4vc_verification_session": {
      input: {
        /**
         * The unique identifier of the Paradym project.
         * @minLength 1
         */
        projectId: string;
        /**
         * The unique identifier of the OpenID4VC verification session.
         * @minLength 1
         */
        openId4VcVerificationId: string;
      };
      output: {
        /** A normalized OpenID4VC verification session. */
        verification: {
          /** The verification session ID. */
          id?: string;
          /** The verification status returned by Paradym. */
          status?: string;
          /** The presentation template ID used by this verification. */
          presentationTemplateId?: string;
          /** The authorization request URI returned by Paradym. */
          authorizationRequestUri?: string;
          /** The authorization request QR-code URI returned by Paradym. */
          authorizationRequestQrUri?: string;
          /** Credentials involved in the verification. */
          credentials?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** The raw Paradym object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List issued credential metadata for a Paradym project. */
    "paradym.list_issued_credentials": {
      input: {
        /**
         * The unique identifier of the Paradym project.
         * @minLength 1
         */
        projectId: string;
        /** Filter issued credentials by status. */
        filterStatus?: "offered" | "deferred" | "failed" | "expired" | "issued" | "revoked";
        /**
         * Filter issued credentials by credential format.
         * @minLength 1
         */
        filterFormat?: string;
        /**
         * The unique identifier of the Paradym credential template.
         * @minLength 1
         */
        filterCredentialTemplateId?: string;
        /**
         * Filter issued credentials by exchange protocol, or use the string null for direct issuance.
         * @minLength 1
         */
        filterExchange?: string;
        /** Sort order accepted by the Paradym issued credentials endpoint. */
        sort?: "id" | "-id";
        /**
         * Maximum number of items to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Cursor for retrieving the page after this cursor.
         * @minLength 1
         */
        pageAfter?: string;
        /**
         * Cursor for retrieving the page before this cursor.
         * @minLength 1
         */
        pageBefore?: string;
      };
      output: {
        /** Issued credentials returned by Paradym. */
        credentials: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Paradym. */
        pagination: Record<string, unknown> | null;
        /** The raw Paradym object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List mDoc credential templates for a Paradym project with optional filters. */
    "paradym.list_mdoc_credential_templates": {
      input: {
        /**
         * The unique identifier of the Paradym project.
         * @minLength 1
         */
        projectId: string;
        /** Sort order accepted by Paradym list endpoints. */
        sort?: "id" | "-id" | "createdAt" | "-createdAt" | "updatedAt" | "-updatedAt";
        /**
         * Filter results by item ID.
         * @minLength 1
         */
        filterId?: string;
        /**
         * Maximum number of items to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Cursor for retrieving the page after this cursor.
         * @minLength 1
         */
        pageAfter?: string;
        /**
         * Cursor for retrieving the page before this cursor.
         * @minLength 1
         */
        pageBefore?: string;
        /**
         * Filter templates by credential type.
         * @minLength 1
         */
        filterType?: string;
        /**
         * Search results by name.
         * @minLength 1
         */
        searchName?: string;
        /** Filter templates by archived status. */
        filterArchived?: boolean;
        /** Filter templates by revocable status. */
        filterRevocable?: boolean;
      };
      output: {
        /** Templates returned by Paradym. */
        templates: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Paradym. */
        pagination: Record<string, unknown> | null;
        /** The raw Paradym object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List OpenID4VC issuance sessions for a Paradym project with optional status, ID, cursor, and sort filters. */
    "paradym.list_openid4vc_issuance_sessions": {
      input: {
        /**
         * The unique identifier of the Paradym project.
         * @minLength 1
         */
        projectId: string;
        /** Sort order accepted by Paradym list endpoints. */
        sort?: "id" | "-id" | "createdAt" | "-createdAt" | "updatedAt" | "-updatedAt";
        /**
         * Filter results by item ID.
         * @minLength 1
         */
        filterId?: string;
        /**
         * Maximum number of items to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Cursor for retrieving the page after this cursor.
         * @minLength 1
         */
        pageAfter?: string;
        /**
         * Cursor for retrieving the page before this cursor.
         * @minLength 1
         */
        pageBefore?: string;
        /**
         * Filter results by status.
         * @minLength 1
         */
        filterStatus?: string;
      };
      output: {
        /** Issuance sessions returned by Paradym. */
        issuances: Array<{
          /** The issuance session ID. */
          id?: string;
          /** The issuance session status returned by Paradym. */
          status?: string;
          /** The credential offer URI returned by Paradym. */
          offerUri?: string;
          /** The credential offer QR-code URI returned by Paradym. */
          offerQrUri?: string;
          /** Credentials included in the issuance session. */
          credentials?: Array<{
            /** The credential ID. */
            id?: string;
            /** The credential status returned by Paradym. */
            status?: string;
            /** The credential template ID used for this credential. */
            credentialTemplateId?: string;
            /** The credential format returned by Paradym. */
            format?: string;
            /** The exchange protocol returned by Paradym. */
            exchange?: string;
            /** Whether the credential can be revoked. */
            revocable?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Paradym. */
        pagination: Record<string, unknown> | null;
        /** The raw Paradym object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List OpenID4VC verification sessions for a Paradym project with optional status, template, ID, cursor, and sort filters. */
    "paradym.list_openid4vc_verification_sessions": {
      input: {
        /**
         * The unique identifier of the Paradym project.
         * @minLength 1
         */
        projectId: string;
        /** Sort order accepted by Paradym list endpoints. */
        sort?: "id" | "-id" | "createdAt" | "-createdAt" | "updatedAt" | "-updatedAt";
        /**
         * Filter results by item ID.
         * @minLength 1
         */
        filterId?: string;
        /**
         * Maximum number of items to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Cursor for retrieving the page after this cursor.
         * @minLength 1
         */
        pageAfter?: string;
        /**
         * Cursor for retrieving the page before this cursor.
         * @minLength 1
         */
        pageBefore?: string;
        /**
         * Filter results by status.
         * @minLength 1
         */
        filterStatus?: string;
        /**
         * The unique identifier of the Paradym presentation template.
         * @minLength 1
         */
        filterPresentationTemplateId?: string;
      };
      output: {
        /** Verification sessions returned by Paradym. */
        verifications: Array<{
          /** The verification session ID. */
          id?: string;
          /** The verification status returned by Paradym. */
          status?: string;
          /** The presentation template ID used by this verification. */
          presentationTemplateId?: string;
          /** The authorization request URI returned by Paradym. */
          authorizationRequestUri?: string;
          /** The authorization request QR-code URI returned by Paradym. */
          authorizationRequestQrUri?: string;
          /** Credentials involved in the verification. */
          credentials?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Paradym. */
        pagination: Record<string, unknown> | null;
        /** The raw Paradym object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Paradym presentation templates for a project with optional ID, name, cursor, and sort filters. */
    "paradym.list_presentation_templates": {
      input: {
        /**
         * The unique identifier of the Paradym project.
         * @minLength 1
         */
        projectId: string;
        /** Sort order accepted by Paradym list endpoints. */
        sort?: "id" | "-id" | "createdAt" | "-createdAt" | "updatedAt" | "-updatedAt";
        /**
         * Filter results by item ID.
         * @minLength 1
         */
        filterId?: string;
        /**
         * Maximum number of items to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Cursor for retrieving the page after this cursor.
         * @minLength 1
         */
        pageAfter?: string;
        /**
         * Cursor for retrieving the page before this cursor.
         * @minLength 1
         */
        pageBefore?: string;
        /**
         * Search results by name.
         * @minLength 1
         */
        searchName?: string;
      };
      output: {
        /** Templates returned by Paradym. */
        templates: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Paradym. */
        pagination: Record<string, unknown> | null;
        /** The raw Paradym object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Paradym projects accessible to the connected API key. */
    "paradym.list_projects": {
      input: Record<string, never>;
      output: {
        /** Projects returned by Paradym. */
        projects: Array<{
          /** The project ID. */
          id: string;
          /** The project name returned by Paradym. */
          name: string | null;
          /** The project description returned by Paradym. */
          description: string | null;
          /** Project tags returned by Paradym. */
          tags: Array<string>;
          /** The project creation timestamp returned by Paradym. */
          createdAt: string | null;
          /** The project update timestamp returned by Paradym. */
          updatedAt: string | null;
          /** The raw Paradym object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Paradym object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List SD-JWT VC credential templates for a Paradym project with optional filters. */
    "paradym.list_sd_jwt_vc_credential_templates": {
      input: {
        /**
         * The unique identifier of the Paradym project.
         * @minLength 1
         */
        projectId: string;
        /** Sort order accepted by Paradym list endpoints. */
        sort?: "id" | "-id" | "createdAt" | "-createdAt" | "updatedAt" | "-updatedAt";
        /**
         * Filter results by item ID.
         * @minLength 1
         */
        filterId?: string;
        /**
         * Maximum number of items to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Cursor for retrieving the page after this cursor.
         * @minLength 1
         */
        pageAfter?: string;
        /**
         * Cursor for retrieving the page before this cursor.
         * @minLength 1
         */
        pageBefore?: string;
        /**
         * Filter templates by credential type.
         * @minLength 1
         */
        filterType?: string;
        /**
         * Search results by name.
         * @minLength 1
         */
        searchName?: string;
        /** Filter templates by archived status. */
        filterArchived?: boolean;
        /** Filter templates by revocable status. */
        filterRevocable?: boolean;
      };
      output: {
        /** Templates returned by Paradym. */
        templates: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Paradym. */
        pagination: Record<string, unknown> | null;
        /** The raw Paradym object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
