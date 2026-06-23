import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Dropbox Sign account properties and settings for the connected account or a specified account. */
    "dropbox_sign.get_account": {
      input: {
        /**
         * The Dropbox Sign account ID to retrieve.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The email address of the Dropbox Sign account to retrieve.
         * @format email
         */
        emailAddress?: string;
      };
      output: {
        /** A normalized Dropbox Sign account. */
        account: {
          /** The Dropbox Sign account ID. */
          accountId: string | null;
          /** The email address associated with the account. */
          emailAddress: string | null;
          /** Whether the account is locked. */
          isLocked: boolean | null;
          /** Whether the account has a paid Dropbox Sign plan. */
          isPaidSign: boolean | null;
          /** Whether the account has a paid Dropbox Fax plan. */
          isPaidFax: boolean | null;
          /** The configured account callback URL. */
          callbackUrl: string | null;
          /** The account role code within a team. */
          roleCode: string | null;
          /** The Dropbox Sign team ID when present. */
          teamId: string | null;
          /** The raw Dropbox Sign API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Dropbox Sign signature request by ID. */
    "dropbox_sign.get_signature_request": {
      input: {
        /**
         * The Dropbox Sign signature request ID.
         * @minLength 1
         */
        signatureRequestId: string;
      };
      output: {
        /** A normalized Dropbox Sign signature request. */
        signatureRequest: {
          /** The Dropbox Sign signature request ID. */
          signatureRequestId: string | null;
          /** The signature request title. */
          title: string | null;
          /** The email subject used for the signature request. */
          subject: string | null;
          /** The message used for the signature request. */
          message: string | null;
          /** Whether all required signers have completed the request. */
          isComplete: boolean | null;
          /** Whether a signer declined the request. */
          isDeclined: boolean | null;
          /** Whether Dropbox Sign reported an error on the request. */
          hasError: boolean | null;
          /** Whether the request was created in test mode. */
          testMode: boolean | null;
          /** The creation timestamp returned by Dropbox Sign. */
          createdAt: number | null;
          /** The expiration timestamp returned by Dropbox Sign. */
          expiresAt: number | null;
          /** The raw Dropbox Sign API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Dropbox Sign template by ID. */
    "dropbox_sign.get_template": {
      input: {
        /**
         * The Dropbox Sign template ID.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** A normalized Dropbox Sign template. */
        template: {
          /** The Dropbox Sign template ID. */
          templateId: string | null;
          /** The template title. */
          title: string | null;
          /** The default template message. */
          message: string | null;
          /** The raw signer roles configured on the template. */
          signerRoles: Array<Record<string, unknown>>;
          /** The raw CC roles configured on the template. */
          ccRoles: Array<Record<string, unknown>>;
          /** Whether the connected account created the template. */
          isCreator: boolean | null;
          /** Whether the connected account can edit the template. */
          canEdit: boolean | null;
          /** The creation timestamp returned by Dropbox Sign. */
          createdAt: number | null;
          /** The raw Dropbox Sign API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Dropbox Sign signature requests accessible to the connected account with optional search and pagination. */
    "dropbox_sign.list_signature_requests": {
      input: {
        /**
         * The Dropbox Sign account ID to list resources for. Use all to include all team members.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The page number to return. Dropbox Sign defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of objects per page. Dropbox Sign supports 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Search terms or field filters accepted by Dropbox Sign search.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Signature requests returned by Dropbox Sign. */
        signatureRequests: Array<{
          /** The Dropbox Sign signature request ID. */
          signatureRequestId: string | null;
          /** The signature request title. */
          title: string | null;
          /** The email subject used for the signature request. */
          subject: string | null;
          /** The message used for the signature request. */
          message: string | null;
          /** Whether all required signers have completed the request. */
          isComplete: boolean | null;
          /** Whether a signer declined the request. */
          isDeclined: boolean | null;
          /** Whether Dropbox Sign reported an error on the request. */
          hasError: boolean | null;
          /** Whether the request was created in test mode. */
          testMode: boolean | null;
          /** The creation timestamp returned by Dropbox Sign. */
          createdAt: number | null;
          /** The expiration timestamp returned by Dropbox Sign. */
          expiresAt: number | null;
          /** The raw Dropbox Sign API object. */
          raw: Record<string, unknown>;
        }>;
        /** Dropbox Sign pagination metadata. */
        listInfo: {
          /** The current page number returned by Dropbox Sign. */
          page: number | null;
          /** The total number of pages returned by Dropbox Sign. */
          numPages: number | null;
          /** The total number of matching resources. */
          numResults: number | null;
          /** The requested or returned page size. */
          pageSize: number | null;
        };
        /** The raw Dropbox Sign API object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Dropbox Sign templates accessible to the connected account with optional search and pagination. */
    "dropbox_sign.list_templates": {
      input: {
        /**
         * The Dropbox Sign account ID to list resources for. Use all to include all team members.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The page number to return. Dropbox Sign defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of objects per page. Dropbox Sign supports 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Search terms or field filters accepted by Dropbox Sign search.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Templates returned by Dropbox Sign. */
        templates: Array<{
          /** The Dropbox Sign template ID. */
          templateId: string | null;
          /** The template title. */
          title: string | null;
          /** The default template message. */
          message: string | null;
          /** The raw signer roles configured on the template. */
          signerRoles: Array<Record<string, unknown>>;
          /** The raw CC roles configured on the template. */
          ccRoles: Array<Record<string, unknown>>;
          /** Whether the connected account created the template. */
          isCreator: boolean | null;
          /** Whether the connected account can edit the template. */
          canEdit: boolean | null;
          /** The creation timestamp returned by Dropbox Sign. */
          createdAt: number | null;
          /** The raw Dropbox Sign API object. */
          raw: Record<string, unknown>;
        }>;
        /** Dropbox Sign pagination metadata. */
        listInfo: {
          /** The current page number returned by Dropbox Sign. */
          page: number | null;
          /** The total number of pages returned by Dropbox Sign. */
          numPages: number | null;
          /** The total number of matching resources. */
          numResults: number | null;
          /** The requested or returned page size. */
          pageSize: number | null;
        };
        /** The raw Dropbox Sign API object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
