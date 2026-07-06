import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a static Cyberimpact group. */
    "cyberimpact.create_group": {
      input: {
        /**
         * The group name.
         * @minLength 1
         */
        title: string;
        /** Whether this is a public Cyberimpact group. */
        isPublic: boolean;
      };
      output: {
        /** Raw Cyberimpact group object. */
        group: Record<string, unknown>;
      };
    };
    /** Add a member to Cyberimpact and optionally subscribe them to groups. */
    "cyberimpact.create_member": {
      input: {
        /**
         * The member email address.
         * @format email
         */
        email: string;
        /** The member gender code accepted by Cyberimpact. */
        gender?: "m" | "f" | "o";
        /**
         * Cyberimpact group IDs to send as the official CSV groups field.
         * @minItems 1
         */
        groupIds?: Array<number>;
        /**
         * The member first name.
         * @minLength 1
         */
        firstname?: string;
        /**
         * The member last name.
         * @minLength 1
         */
        lastname?: string;
        /**
         * The member company name.
         * @minLength 1
         */
        company?: string;
        /** The member language code accepted by Cyberimpact. */
        language?: "en_ca" | "fr_ca";
        /**
         * The member birthdate in yyyy-mm-dd format.
         * @format date
         */
        birthdate?: string;
        /**
         * The member postal code.
         * @minLength 1
         */
        postalCode?: string;
        /**
         * The member ISO 3166-1 alpha-2 country code.
         * @minLength 1
         */
        country?: string;
        /**
         * A note stored on the member.
         * @minLength 1
         */
        note?: string;
        /** Custom field values keyed by Cyberimpact custom field ID. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** Raw Cyberimpact member object. */
        member: Record<string, unknown>;
      };
    };
    /** Create a Cyberimpact email template with HTML or plain text body content. */
    "cyberimpact.create_template": {
      input: {
        /**
         * The template title.
         * @minLength 1
         */
        title: string;
        /**
         * The HTML body for the template.
         * @minLength 1
         */
        bodyHtml?: string;
        /**
         * The plain text body for the template.
         * @minLength 1
         */
        bodyText?: string;
      };
      output: {
        /** Raw Cyberimpact template object. */
        template: Record<string, unknown>;
      };
    };
    /** Delete a Cyberimpact group by numerical ID. */
    "cyberimpact.delete_group": {
      input: {
        /**
         * The Cyberimpact numerical ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The raw Cyberimpact deletion map keyed by the deleted resource identifier. */
        result: Record<string, string>;
      };
    };
    /** Delete a Cyberimpact member by email address or numerical member ID. */
    "cyberimpact.delete_member": {
      input: {
        /**
         * The member email address or numerical member ID.
         * @minLength 1
         */
        key: string;
      };
      output: {
        /** The raw Cyberimpact deletion map keyed by the deleted resource identifier. */
        result: Record<string, string>;
      };
    };
    /** Delete a Cyberimpact email template by numerical ID. */
    "cyberimpact.delete_template": {
      input: {
        /**
         * The Cyberimpact numerical ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The raw Cyberimpact deletion map keyed by the deleted resource identifier. */
        result: Record<string, string>;
      };
    };
    /** Retrieve a Cyberimpact group by numerical ID. */
    "cyberimpact.get_group": {
      input: {
        /**
         * The Cyberimpact numerical ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The date format Cyberimpact should use in responses. */
        dateReturnFormat?: "ISO8601" | "ATOM";
      };
      output: {
        /** Raw Cyberimpact group object. */
        group: Record<string, unknown>;
      };
    };
    /** Retrieve a Cyberimpact member by email address or numerical member ID. */
    "cyberimpact.get_member": {
      input: {
        /**
         * The member email address or numerical member ID.
         * @minLength 1
         */
        key: string;
        /** The date format Cyberimpact should use in responses. */
        dateReturnFormat?: "ISO8601" | "ATOM";
      };
      output: {
        /** Raw Cyberimpact member object. */
        member: Record<string, unknown>;
      };
    };
    /** Retrieve a Cyberimpact email template by numerical ID. */
    "cyberimpact.get_template": {
      input: {
        /**
         * The Cyberimpact numerical ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The date format Cyberimpact should use in responses. */
        dateReturnFormat?: "ISO8601" | "ATOM";
      };
      output: {
        /** Raw Cyberimpact template object. */
        template: Record<string, unknown>;
      };
    };
    /** Retrieve a paginated list of Cyberimpact groups. */
    "cyberimpact.list_groups": {
      input: {
        /**
         * The page of results to view.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page. Cyberimpact allows up to 10000.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /** The sort order for Cyberimpact group results. */
        sort?: "group_asc" | "group_desc" | "nbmember_asc" | "nbmember_desc" | "type_asc" | "type_desc" | "nbnewsletter_asc" | "nbnewsletter_desc" | "date_asc" | "date_desc";
        /** The date format Cyberimpact should use in responses. */
        dateReturnFormat?: "ISO8601" | "ATOM";
      };
      output: {
        /** Group objects returned by Cyberimpact. */
        groups: Array<Record<string, unknown>>;
        /** The total number of records returned by Cyberimpact. */
        totalCount: number;
        /** The current Cyberimpact page number. */
        page: number;
        /** The Cyberimpact page size. */
        limit: number;
        /** The Cyberimpact sort value returned for this response. */
        sort: string;
        /** The raw Cyberimpact response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a paginated list of Cyberimpact members with optional status, date, and sort filters. */
    "cyberimpact.list_members": {
      input: {
        /**
         * The page of results to view.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page. Cyberimpact allows up to 10000.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /** The status filter for Cyberimpact members. */
        status?: "active" | "orphans" | "all";
        /** The sort order for Cyberimpact member results. */
        sort?: "email_asc" | "email_desc" | "language_asc" | "language_desc" | "fullname_asc" | "fullname_desc" | "date_asc" | "date_desc" | "consent_type_asc" | "consent_type_desc" | "consent_date_asc" | "consent_date_desc" | "updated_asc" | "updated_desc";
        /**
         * Only return members joined on or after this date.
         * @format date
         */
        joinedOnFrom?: string;
        /**
         * Only return members joined on or before this date.
         * @format date
         */
        joinedOnTo?: string;
        /**
         * Only return members updated on or after this date.
         * @format date
         */
        updatedOnFrom?: string;
        /**
         * Only return members updated on or before this date.
         * @format date
         */
        updatedOnTo?: string;
        /** The date format Cyberimpact should use in responses. */
        dateReturnFormat?: "ISO8601" | "ATOM";
      };
      output: {
        /** Member objects returned by Cyberimpact. */
        members: Array<Record<string, unknown>>;
        /** The total number of records returned by Cyberimpact. */
        totalCount: number;
        /** The current Cyberimpact page number. */
        page: number;
        /** The Cyberimpact page size. */
        limit: number;
        /** The Cyberimpact sort value returned for this response. */
        sort: string;
        /** The raw Cyberimpact response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a paginated list of Cyberimpact email templates. */
    "cyberimpact.list_templates": {
      input: {
        /**
         * The page of results to view.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page. Cyberimpact allows up to 10000.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /** The sort order for Cyberimpact template results. */
        sort?: "template_asc" | "template_desc" | "language_asc" | "language_desc" | "subject_asc" | "subject_desc" | "updated_asc" | "updated_desc" | "usage_asc" | "usage_desc" | "created_asc" | "created_desc";
        /** The date format Cyberimpact should use in responses. */
        dateReturnFormat?: "ISO8601" | "ATOM";
      };
      output: {
        /** Template objects returned by Cyberimpact. */
        templates: Array<Record<string, unknown>>;
        /** The total number of records returned by Cyberimpact. */
        totalCount: number;
        /** The current Cyberimpact page number. */
        page: number;
        /** The Cyberimpact page size. */
        limit: number;
        /** The Cyberimpact sort value returned for this response. */
        sort: string;
        /** The raw Cyberimpact response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Replace a Cyberimpact email template by numerical ID. */
    "cyberimpact.replace_template": {
      input: {
        /**
         * The Cyberimpact numerical ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The template title.
         * @minLength 1
         */
        title: string;
        /**
         * The HTML body for the template.
         * @minLength 1
         */
        bodyHtml?: string;
        /**
         * The plain text body for the template.
         * @minLength 1
         */
        bodyText?: string;
      };
      output: {
        /** Raw Cyberimpact template object. */
        template: Record<string, unknown>;
      };
    };
    /** Edit the title or visibility of a static Cyberimpact group. */
    "cyberimpact.update_group": {
      input: {
        /**
         * The Cyberimpact numerical ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The group name.
         * @minLength 1
         */
        title?: string;
        /** Whether this is a public Cyberimpact group. */
        isPublic?: boolean;
      };
      output: {
        /** Raw Cyberimpact group object. */
        group: Record<string, unknown>;
      };
    };
    /** Edit one or more fields on a Cyberimpact member by email address or member ID. */
    "cyberimpact.update_member": {
      input: {
        /**
         * The member email address or numerical member ID.
         * @minLength 1
         */
        key: string;
        /**
         * The member new email address.
         * @format email
         */
        email?: string;
        /** The member gender code accepted by Cyberimpact. */
        gender?: "m" | "f" | "o";
        /**
         * The member first name.
         * @minLength 1
         */
        firstname?: string;
        /**
         * The member last name.
         * @minLength 1
         */
        lastname?: string;
        /**
         * The member company name.
         * @minLength 1
         */
        company?: string;
        /** The member language code accepted by Cyberimpact. */
        language?: "en_ca" | "fr_ca";
        /**
         * The member birthdate in yyyy-mm-dd format.
         * @format date
         */
        birthdate?: string;
        /**
         * The member postal code.
         * @minLength 1
         */
        postalCode?: string;
        /**
         * The member ISO 3166-1 alpha-2 country code.
         * @minLength 1
         */
        country?: string;
        /**
         * A note stored on the member.
         * @minLength 1
         */
        note?: string;
        /** Custom field values keyed by Cyberimpact custom field ID. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** Raw Cyberimpact member object. */
        member: Record<string, unknown>;
      };
    };
  }
}
