import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add contacts to one Brevo contact list using exactly one official selector. */
    "brevo.add_contacts_to_list": {
      input: {
        /**
         * The Brevo contact list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The contact emails targeted by the request.
         * @minItems 1
         */
        emails?: Array<string>;
        /**
         * The contact IDs targeted by the request.
         * @minItems 1
         */
        ids?: Array<number>;
        /**
         * The external contact IDs targeted by the request.
         * @minItems 1
         */
        extIds?: Array<string>;
      };
      output: {
        /** The nested contact membership mutation result. */
        contacts: {
          /** The contacts successfully processed by Brevo. */
          success?: Array<number | string>;
          /** The contacts that Brevo could not process. */
          failure?: Array<number | string>;
          /** The Brevo async process ID, when returned. */
          processId?: number;
          /** The total number of contacts processed. */
          total?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create one Brevo contact with the official contact creation payload. */
    "brevo.create_contact": {
      input: {
        /**
         * The email address for the new contact.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
        /**
         * The optional external identifier attached to the contact.
         * @minLength 1
         */
        extId?: string;
        /**
         * The optional Brevo contact list IDs linked to the contact.
         * @minItems 1
         */
        listIds?: Array<number>;
        /** Whether the contact should be email blacklisted. */
        emailBlacklisted?: boolean;
        /** Whether the contact should be SMS blacklisted. */
        smsBlacklisted?: boolean;
        /** The Brevo attributes to attach to the contact. */
        attributes?: Record<string, unknown>;
      };
      output: {
        /** The numeric identifier returned by Brevo. */
        id: number;
        [key: string]: unknown;
      };
    };
    /** Create one Brevo contact list inside the specified Brevo folder. */
    "brevo.create_contact_list": {
      input: {
        /**
         * The Brevo contact list name.
         * @minLength 1
         */
        name: string;
        /**
         * The Brevo folder ID.
         * @exclusiveMinimum 0
         */
        folderId: number;
      };
      output: {
        /** The numeric identifier returned by Brevo. */
        id: number;
        [key: string]: unknown;
      };
    };
    /** Delete one Brevo contact by identifier and optional identifier type. */
    "brevo.delete_contact": {
      input: {
        /**
         * The Brevo contact identifier value used in the request path.
         * @minLength 1
         */
        identifier: string;
        /**
         * The optional Brevo identifier type used to interpret the identifier.
         * @minLength 1
         */
        identifierType?: string;
      };
      output: {
        /** Whether the requested Brevo mutation succeeded. */
        success: boolean;
      };
    };
    /** Retrieve the current Brevo account profile and plan information. */
    "brevo.get_account": {
      input: Record<string, never>;
      output: {
        /** The Brevo plans attached to the account. */
        plan: Array<{
          /** The Brevo plan type. */
          type: string;
          /** The available credits for this plan. */
          credits?: number;
          [key: string]: unknown;
        }>;
        /** The relay configuration returned by Brevo, when present. */
        relay?: Record<string, unknown>;
        /** The Brevo organization identifier. */
        organization_id: number;
        /** The email address of the connected Brevo account. */
        email: string;
        /** The company name returned by Brevo. */
        companyName?: string;
        /** The account first name returned by Brevo. */
        firstName?: string;
        /** The account last name returned by Brevo. */
        lastName?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Brevo contact by identifier and optional identifier type. */
    "brevo.get_contact": {
      input: {
        /**
         * The Brevo contact identifier value used in the request path.
         * @minLength 1
         */
        identifier: string;
        /**
         * The optional Brevo identifier type used to interpret the identifier.
         * @minLength 1
         */
        identifierType?: string;
      };
      output: {
        /** The Brevo contact ID. */
        id: number;
        /** The primary email address of the contact. */
        email?: string;
        /** The external identifier returned by Brevo. */
        ext_id?: string;
        /** The Brevo contact lists linked to this contact. */
        listIds?: Array<number>;
        /** The contact attributes returned by Brevo. */
        attributes?: Record<string, unknown>;
        /** Whether the contact is email blacklisted. */
        emailBlacklisted?: boolean;
        /** Whether the contact is SMS blacklisted. */
        smsBlacklisted?: boolean;
        /** The contact creation timestamp. */
        createdAt?: string;
        /** The contact last update timestamp. */
        modifiedAt?: string;
        /** The contact statistics returned by Brevo. */
        statistics?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List Brevo contact folders with the official pagination parameters. */
    "brevo.list_contact_folders": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The sort direction accepted by the official Brevo API. */
        sort?: "asc" | "desc";
      };
      output: {
        /** The total number of folders returned by Brevo. */
        count: number;
        /** The Brevo contact folders returned for this page. */
        folders: Array<{
          /** The Brevo folder ID. */
          id: number;
          /** The Brevo folder name. */
          name: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Brevo contact lists with the official pagination parameters. */
    "brevo.list_contact_lists": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The sort direction accepted by the official Brevo API. */
        sort?: "asc" | "desc";
      };
      output: {
        /** The total number of lists returned by Brevo. */
        count: number;
        /** The Brevo contact lists returned for this page. */
        lists: Array<{
          /** The Brevo list ID. */
          id: number;
          /** The Brevo list name. */
          name: string;
          /** The folder ID that owns this list. */
          folderId?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Brevo contacts with pagination and timestamp filters. */
    "brevo.list_contacts": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The sort direction accepted by the official Brevo API. */
        sort?: "asc" | "desc";
        /** Only return records modified after this ISO-8601 timestamp. */
        modifiedSince?: string;
        /** Only return records created after this ISO-8601 timestamp. */
        createdSince?: string;
      };
      output: {
        /** The total number of contacts returned by Brevo. */
        count: number;
        /** The Brevo contacts returned for this page. */
        contacts: Array<{
          /** The Brevo contact ID. */
          id: number;
          /** The primary email address of the contact. */
          email?: string;
          /** The external identifier returned by Brevo. */
          ext_id?: string;
          /** The Brevo contact lists linked to this contact. */
          listIds?: Array<number>;
          /** The contact attributes returned by Brevo. */
          attributes?: Record<string, unknown>;
          /** Whether the contact is email blacklisted. */
          emailBlacklisted?: boolean;
          /** Whether the contact is SMS blacklisted. */
          smsBlacklisted?: boolean;
          /** The contact creation timestamp. */
          createdAt?: string;
          /** The contact last update timestamp. */
          modifiedAt?: string;
          /** The contact statistics returned by Brevo. */
          statistics?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the Brevo contacts currently linked to one Brevo contact list. */
    "brevo.list_contacts_in_list": {
      input: {
        /**
         * The Brevo contact list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The sort direction accepted by the official Brevo API. */
        sort?: "asc" | "desc";
        /** Only return records modified after this ISO-8601 timestamp. */
        modifiedSince?: string;
      };
      output: {
        /** The Brevo contacts linked to the list. */
        contacts: Array<{
          /** The Brevo contact ID. */
          id: number;
          /** The primary email address of the contact. */
          email?: string;
          /** The external identifier returned by Brevo. */
          ext_id?: string;
          /** The Brevo contact lists linked to this contact. */
          listIds?: Array<number>;
          /** The contact attributes returned by Brevo. */
          attributes?: Record<string, unknown>;
          /** Whether the contact is email blacklisted. */
          emailBlacklisted?: boolean;
          /** Whether the contact is SMS blacklisted. */
          smsBlacklisted?: boolean;
          /** The contact creation timestamp. */
          createdAt?: string;
          /** The contact last update timestamp. */
          modifiedAt?: string;
          /** The contact statistics returned by Brevo. */
          statistics?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of contacts linked to the list. */
        count?: number;
        [key: string]: unknown;
      };
    };
    /** Remove contacts from one Brevo contact list using exactly one official selector. */
    "brevo.remove_contacts_from_list": {
      input: {
        /**
         * The Brevo contact list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The contact emails targeted by the request.
         * @minItems 1
         */
        emails?: Array<string>;
        /**
         * The contact IDs targeted by the request.
         * @minItems 1
         */
        ids?: Array<number>;
        /**
         * The external contact IDs targeted by the request.
         * @minItems 1
         */
        extIds?: Array<string>;
      };
      output: {
        /** The nested contact membership mutation result. */
        contacts: {
          /** The contacts successfully processed by Brevo. */
          success?: Array<number | string>;
          /** The contacts that Brevo could not process. */
          failure?: Array<number | string>;
          /** The Brevo async process ID, when returned. */
          processId?: number;
          /** The total number of contacts processed. */
          total?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update one Brevo contact list by ID. */
    "brevo.update_contact_list": {
      input: {
        /**
         * The Brevo contact list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The updated Brevo contact list name.
         * @minLength 1
         */
        name?: string;
        /**
         * The Brevo folder ID.
         * @exclusiveMinimum 0
         */
        folderId?: number;
      };
      output: {
        /** Whether the requested Brevo mutation succeeded. */
        success: boolean;
      };
    };
  }
}
