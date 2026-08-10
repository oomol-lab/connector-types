import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a company in the connected Productlane workspace. */
    "productlane.create_company": {
      input: {
        /**
         * The company name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /**
         * The company logo URL.
         * @format uri
         */
        logo_url?: string | null;
        /** The complete set of domains associated with the company. */
        domains?: Array<string>;
        /** The complete set of caller-owned external IDs associated with the company. */
        external_ids?: Array<string>;
        /**
         * The Linear customer status ID, or null to clear it. Use the official linear-options endpoint through proxy to discover valid IDs.
         * @minLength 1
         */
        status_id?: string | null;
        /**
         * The Linear customer tier ID, or null to clear it. Use the official linear-options endpoint through proxy to discover valid IDs.
         * @minLength 1
         */
        tier_id?: string | null;
        /**
         * The Linear user ID of the company owner, or null to clear it. Use the official linear-options endpoint through proxy to discover valid IDs.
         * @minLength 1
         */
        owner_id?: string | null;
        /**
         * The company size.
         * @minimum 0
         */
        size?: number;
        /**
         * The company revenue.
         * @minimum 0
         */
        revenue?: number;
      };
      output: {
        /**
         * The unique Productlane company ID.
         * @minLength 1
         */
        id: string;
        /** The company name. */
        name: string;
        /** The company logo URL. */
        logo_url: string | null;
        /** The domains associated with the company. */
        domains: Array<string>;
        /** The company size. */
        size: number | null;
        /** The company revenue. */
        revenue: number | null;
        /** The linked Linear customer status ID. */
        status_id: string | null;
        /** The linked Linear customer status name. */
        status_name: string | null;
        /** The linked Linear customer tier ID. */
        tier_id: string | null;
        /** The linked Linear customer tier name. */
        tier_name: string | null;
        /** The Linear owner assigned to a company. */
        owner: {
          /**
           * The Linear user ID of the company owner.
           * @minLength 1
           */
          id: string;
          /** The display name of the company owner. */
          name: string | null;
          /** The avatar URL of the company owner. */
          avatar_url: string | null;
          [key: string]: unknown;
        } | null;
        /** Caller-owned external IDs associated with the company. */
        external_ids: Array<string>;
        /** The timestamp when the company was created. */
        created_at: string;
        /** The timestamp when the company was last updated. */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Create a contact in the connected Productlane workspace. */
    "productlane.create_contact": {
      input: {
        /**
         * The contact email address.
         * @maxLength 254
         * @format email
         */
        email: string;
        /**
         * The contact name.
         * @minLength 1
         * @maxLength 255
         */
        name?: string;
        /**
         * The contact avatar URL. Omit it to let Productlane resolve Gravatar.
         * @format uri
         */
        image_url?: string | null;
        /** Whether the contact receives changelog and project or issue update emails. Productlane defaults this to true. */
        is_subscribed?: boolean;
        /**
         * The Productlane company ID to associate. Mutually exclusive with company_name and company_external_id.
         * @minLength 1
         * @maxLength 255
         */
        company_id?: string;
        /**
         * An exact company name to resolve. Mutually exclusive with company_id and company_external_id.
         * @minLength 1
         * @maxLength 255
         */
        company_name?: string;
        /**
         * An external company ID to resolve. Mutually exclusive with company_id and company_name.
         * @minLength 1
         * @maxLength 255
         */
        company_external_id?: string;
      };
      output: {
        /**
         * The unique Productlane contact ID.
         * @minLength 1
         */
        id: string;
        /** The contact email address. */
        email: string;
        /** The contact name. */
        name: string | null;
        /** The contact avatar URL. */
        image_url: string | null;
        /** The Productlane company ID associated with the contact. */
        company_id: string | null;
        /** Whether the contact receives changelog and project or issue update emails. */
        is_subscribed: boolean;
        /** External service IDs associated with the Productlane contact. */
        external_ids: {
          /** The contact's Intercom ID. */
          intercom?: string;
          /** The contact's Front ID. */
          front?: string;
          /** The contact's Zendesk ID. */
          zendesk?: string;
          /** The contact's HubSpot ID. */
          hubspot?: string;
          /** The contact's Plain ID. */
          plain?: string;
          /** The contact's Productboard ID. */
          productboard?: string;
          /** The Slack channel ID associated with the contact. */
          slack_channel?: string;
          [key: string]: unknown;
        };
        /** The timestamp when the contact was created. */
        created_at: string;
        /** The timestamp when the contact was last updated. */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Soft-delete a Productlane company by ID. */
    "productlane.delete_company": {
      input: {
        /**
         * The Productlane company ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The ID of the deleted Productlane resource.
         * @minLength 1
         */
        id: string;
        /** Whether the resource was deleted. */
        deleted: true;
        [key: string]: unknown;
      };
    };
    /** Soft-delete a Productlane contact by ID. */
    "productlane.delete_contact": {
      input: {
        /**
         * The Productlane contact ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The ID of the deleted Productlane resource.
         * @minLength 1
         */
        id: string;
        /** Whether the resource was deleted. */
        deleted: true;
        [key: string]: unknown;
      };
    };
    /** Get the authenticated Productlane API key identity, granted scopes, and Linear team selection. */
    "productlane.get_authenticated_identity": {
      input: Record<string, never>;
      output: {
        /**
         * The Productlane workspace ID associated with the API key.
         * @minLength 1
         */
        workspace_id: string;
        /**
         * The unique ID of the Productlane API key.
         * @minLength 1
         */
        api_key_id: string;
        /** The scopes granted to the Productlane API key. */
        scopes: Array<string>;
        /** The Linear team IDs selected for this workspace. */
        linear_team_ids: Array<string>;
        /**
         * The default Linear team ID, or null when no default is configured.
         * @minLength 1
         */
        default_linear_team_id: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a Productlane company by ID. */
    "productlane.get_company": {
      input: {
        /**
         * The Productlane company ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The unique Productlane company ID.
         * @minLength 1
         */
        id: string;
        /** The company name. */
        name: string;
        /** The company logo URL. */
        logo_url: string | null;
        /** The domains associated with the company. */
        domains: Array<string>;
        /** The company size. */
        size: number | null;
        /** The company revenue. */
        revenue: number | null;
        /** The linked Linear customer status ID. */
        status_id: string | null;
        /** The linked Linear customer status name. */
        status_name: string | null;
        /** The linked Linear customer tier ID. */
        tier_id: string | null;
        /** The linked Linear customer tier name. */
        tier_name: string | null;
        /** The Linear owner assigned to a company. */
        owner: {
          /**
           * The Linear user ID of the company owner.
           * @minLength 1
           */
          id: string;
          /** The display name of the company owner. */
          name: string | null;
          /** The avatar URL of the company owner. */
          avatar_url: string | null;
          [key: string]: unknown;
        } | null;
        /** Caller-owned external IDs associated with the company. */
        external_ids: Array<string>;
        /** The timestamp when the company was created. */
        created_at: string;
        /** The timestamp when the company was last updated. */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Get a Productlane contact by ID. */
    "productlane.get_contact": {
      input: {
        /**
         * The Productlane contact ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The unique Productlane contact ID.
         * @minLength 1
         */
        id: string;
        /** The contact email address. */
        email: string;
        /** The contact name. */
        name: string | null;
        /** The contact avatar URL. */
        image_url: string | null;
        /** The Productlane company ID associated with the contact. */
        company_id: string | null;
        /** Whether the contact receives changelog and project or issue update emails. */
        is_subscribed: boolean;
        /** External service IDs associated with the Productlane contact. */
        external_ids: {
          /** The contact's Intercom ID. */
          intercom?: string;
          /** The contact's Front ID. */
          front?: string;
          /** The contact's Zendesk ID. */
          zendesk?: string;
          /** The contact's HubSpot ID. */
          hubspot?: string;
          /** The contact's Plain ID. */
          plain?: string;
          /** The contact's Productboard ID. */
          productboard?: string;
          /** The Slack channel ID associated with the contact. */
          slack_channel?: string;
          [key: string]: unknown;
        };
        /** The timestamp when the contact was created. */
        created_at: string;
        /** The timestamp when the contact was last updated. */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** List Productlane companies with cursor pagination and documented filters. */
    "productlane.list_companies": {
      input: {
        /**
         * The number of companies to return, from 1 through 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The opaque cursor returned by the previous page.
         * @minLength 1
         */
        cursor?: string;
        /** An external ID that must appear in the company's external_ids array. */
        external_id?: string;
        /**
         * A domain that must appear in the company's domains array.
         * @minLength 1
         */
        domain?: string;
        /**
         * A case-insensitive company name substring.
         * @minLength 1
         * @maxLength 255
         */
        name_contains?: string;
        /**
         * The Linear customer status ID to match.
         * @minLength 1
         */
        status_id?: string;
        /**
         * The Linear customer tier ID to match.
         * @minLength 1
         */
        tier_id?: string;
        /**
         * The minimum company size.
         * @minimum 0
         */
        size_gte?: number;
        /**
         * The maximum company size.
         * @minimum 0
         */
        size_lte?: number;
        /**
         * The minimum company revenue.
         * @minimum 0
         */
        revenue_gte?: number;
        /**
         * The maximum company revenue.
         * @minimum 0
         */
        revenue_lte?: number;
        /**
         * Return companies created after this timestamp.
         * @format date-time
         */
        created_after?: string;
        /**
         * Return companies created before this timestamp.
         * @format date-time
         */
        created_before?: string;
        /**
         * Return companies updated after this timestamp.
         * @format date-time
         */
        updated_after?: string;
        /**
         * Return companies updated before this timestamp.
         * @format date-time
         */
        updated_before?: string;
      };
      output: {
        /** The companies in this page. */
        data: Array<{
          /**
           * The unique Productlane company ID.
           * @minLength 1
           */
          id: string;
          /** The company name. */
          name: string;
          /** The company logo URL. */
          logo_url: string | null;
          /** The domains associated with the company. */
          domains: Array<string>;
          /** The company size. */
          size: number | null;
          /** The company revenue. */
          revenue: number | null;
          /** The linked Linear customer status ID. */
          status_id: string | null;
          /** The linked Linear customer status name. */
          status_name: string | null;
          /** The linked Linear customer tier ID. */
          tier_id: string | null;
          /** The linked Linear customer tier name. */
          tier_name: string | null;
          /** The Linear owner assigned to a company. */
          owner: {
            /**
             * The Linear user ID of the company owner.
             * @minLength 1
             */
            id: string;
            /** The display name of the company owner. */
            name: string | null;
            /** The avatar URL of the company owner. */
            avatar_url: string | null;
            [key: string]: unknown;
          } | null;
          /** Caller-owned external IDs associated with the company. */
          external_ids: Array<string>;
          /** The timestamp when the company was created. */
          created_at: string;
          /** The timestamp when the company was last updated. */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** Productlane cursor pagination metadata. */
        page: {
          /** The opaque cursor for the next page, or null on the final page. */
          cursor: string | null;
          /** Whether another page of results is available. */
          has_more: boolean;
          /** The effective number of rows requested per page. */
          limit: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Productlane contacts with cursor pagination and documented filters. */
    "productlane.list_contacts": {
      input: {
        /**
         * The number of contacts to return, from 1 through 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The opaque cursor returned by the previous page.
         * @minLength 1
         */
        cursor?: string;
        /**
         * A case-insensitive email substring to match.
         * @minLength 1
         */
        email?: string;
        /**
         * A case-insensitive contact name substring.
         * @minLength 1
         * @maxLength 255
         */
        name_contains?: string;
        /**
         * The Productlane company ID to match.
         * @minLength 1
         */
        company_id?: string;
        /**
         * Return contacts created after this timestamp.
         * @format date-time
         */
        created_after?: string;
        /**
         * Return contacts created before this timestamp.
         * @format date-time
         */
        created_before?: string;
        /**
         * Return contacts updated after this timestamp.
         * @format date-time
         */
        updated_after?: string;
        /**
         * Return contacts updated before this timestamp.
         * @format date-time
         */
        updated_before?: string;
      };
      output: {
        /** The contacts in this page. */
        data: Array<{
          /**
           * The unique Productlane contact ID.
           * @minLength 1
           */
          id: string;
          /** The contact email address. */
          email: string;
          /** The contact name. */
          name: string | null;
          /** The contact avatar URL. */
          image_url: string | null;
          /** The Productlane company ID associated with the contact. */
          company_id: string | null;
          /** Whether the contact receives changelog and project or issue update emails. */
          is_subscribed: boolean;
          /** External service IDs associated with the Productlane contact. */
          external_ids: {
            /** The contact's Intercom ID. */
            intercom?: string;
            /** The contact's Front ID. */
            front?: string;
            /** The contact's Zendesk ID. */
            zendesk?: string;
            /** The contact's HubSpot ID. */
            hubspot?: string;
            /** The contact's Plain ID. */
            plain?: string;
            /** The contact's Productboard ID. */
            productboard?: string;
            /** The Slack channel ID associated with the contact. */
            slack_channel?: string;
            [key: string]: unknown;
          };
          /** The timestamp when the contact was created. */
          created_at: string;
          /** The timestamp when the contact was last updated. */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** Productlane cursor pagination metadata. */
        page: {
          /** The opaque cursor for the next page, or null on the final page. */
          cursor: string | null;
          /** Whether another page of results is available. */
          has_more: boolean;
          /** The effective number of rows requested per page. */
          limit: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update a Productlane company by ID. */
    "productlane.update_company": {
      input: {
        /**
         * The Productlane company ID.
         * @minLength 1
         */
        id: string;
        /**
         * The company name.
         * @minLength 1
         * @maxLength 255
         */
        name?: string;
        /**
         * The company logo URL.
         * @format uri
         */
        logo_url?: string | null;
        /** The complete set of domains associated with the company. */
        domains?: Array<string>;
        /** The complete set of caller-owned external IDs associated with the company. */
        external_ids?: Array<string>;
        /**
         * The Linear customer status ID, or null to clear it. Use the official linear-options endpoint through proxy to discover valid IDs.
         * @minLength 1
         */
        status_id?: string | null;
        /**
         * The Linear customer tier ID, or null to clear it. Use the official linear-options endpoint through proxy to discover valid IDs.
         * @minLength 1
         */
        tier_id?: string | null;
        /**
         * The Linear user ID of the company owner, or null to clear it. Use the official linear-options endpoint through proxy to discover valid IDs.
         * @minLength 1
         */
        owner_id?: string | null;
        /**
         * The company size, or null to clear it.
         * @minimum 0
         */
        size?: number | null;
        /**
         * The company revenue, or null to clear it.
         * @minimum 0
         */
        revenue?: number | null;
      };
      output: {
        /**
         * The unique Productlane company ID.
         * @minLength 1
         */
        id: string;
        /** The company name. */
        name: string;
        /** The company logo URL. */
        logo_url: string | null;
        /** The domains associated with the company. */
        domains: Array<string>;
        /** The company size. */
        size: number | null;
        /** The company revenue. */
        revenue: number | null;
        /** The linked Linear customer status ID. */
        status_id: string | null;
        /** The linked Linear customer status name. */
        status_name: string | null;
        /** The linked Linear customer tier ID. */
        tier_id: string | null;
        /** The linked Linear customer tier name. */
        tier_name: string | null;
        /** The Linear owner assigned to a company. */
        owner: {
          /**
           * The Linear user ID of the company owner.
           * @minLength 1
           */
          id: string;
          /** The display name of the company owner. */
          name: string | null;
          /** The avatar URL of the company owner. */
          avatar_url: string | null;
          [key: string]: unknown;
        } | null;
        /** Caller-owned external IDs associated with the company. */
        external_ids: Array<string>;
        /** The timestamp when the company was created. */
        created_at: string;
        /** The timestamp when the company was last updated. */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Update a Productlane contact by ID. */
    "productlane.update_contact": {
      input: {
        /**
         * The Productlane contact ID.
         * @minLength 1
         */
        id: string;
        /**
         * The replacement contact email address.
         * @maxLength 254
         * @format email
         */
        email?: string;
        /**
         * The replacement contact name.
         * @minLength 1
         * @maxLength 255
         */
        name?: string;
        /**
         * The replacement avatar URL, or null to clear it.
         * @format uri
         */
        image_url?: string | null;
        /** Whether the contact receives changelog and project or issue update emails. */
        is_subscribed?: boolean;
        /**
         * The Productlane company ID to associate. Mutually exclusive with company_name and company_external_id.
         * @minLength 1
         * @maxLength 255
         */
        company_id?: string;
        /**
         * An exact company name to resolve. Mutually exclusive with company_id and company_external_id.
         * @minLength 1
         * @maxLength 255
         */
        company_name?: string;
        /**
         * An external company ID to resolve. Mutually exclusive with company_id and company_name.
         * @minLength 1
         * @maxLength 255
         */
        company_external_id?: string;
      };
      output: {
        /**
         * The unique Productlane contact ID.
         * @minLength 1
         */
        id: string;
        /** The contact email address. */
        email: string;
        /** The contact name. */
        name: string | null;
        /** The contact avatar URL. */
        image_url: string | null;
        /** The Productlane company ID associated with the contact. */
        company_id: string | null;
        /** Whether the contact receives changelog and project or issue update emails. */
        is_subscribed: boolean;
        /** External service IDs associated with the Productlane contact. */
        external_ids: {
          /** The contact's Intercom ID. */
          intercom?: string;
          /** The contact's Front ID. */
          front?: string;
          /** The contact's Zendesk ID. */
          zendesk?: string;
          /** The contact's HubSpot ID. */
          hubspot?: string;
          /** The contact's Plain ID. */
          plain?: string;
          /** The contact's Productboard ID. */
          productboard?: string;
          /** The Slack channel ID associated with the contact. */
          slack_channel?: string;
          [key: string]: unknown;
        };
        /** The timestamp when the contact was created. */
        created_at: string;
        /** The timestamp when the contact was last updated. */
        updated_at: string;
        [key: string]: unknown;
      };
    };
  }
}
