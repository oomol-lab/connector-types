import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a contact in the connected KrispCall workspace. */
    "krispcall.create_contact": {
      input: {
        /**
         * The primary phone number for the KrispCall contact.
         * @minLength 1
         */
        contact: string;
        /** The ISO country code for the contact phone number. */
        country?: string;
        /** The contact name. */
        name?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /** The contact company name. */
        company?: string;
        /** The contact address. */
        address?: string;
        /** The contact tags to send to KrispCall. */
        tags?: Array<string>;
        /** The secondary phone numbers to send to KrispCall. */
        secondaryPhone?: Array<string>;
        /** The secondary email addresses to send to KrispCall. */
        secondaryEmail?: Array<string>;
      };
      output: {
        /** A normalized KrispCall contact. */
        contact: {
          /** The string value returned by KrispCall. */
          id?: string | null;
          /** The string value returned by KrispCall. */
          contact?: string | null;
          /** The string value returned by KrispCall. */
          name?: string | null;
          /** The string value returned by KrispCall. */
          email?: string | null;
          /** The string value returned by KrispCall. */
          company?: string | null;
          /** The string value returned by KrispCall. */
          address?: string | null;
          /** The string value returned by KrispCall. */
          country?: string | null;
          /** The string value returned by KrispCall. */
          status?: string | null;
          /** The string value returned by KrispCall. */
          visibility?: string | null;
          /** Whether KrispCall marks the contact as blocked. */
          blocked?: boolean | null;
          /** Whether KrispCall marks the contact as a favourite. */
          favourite?: boolean | null;
          /** The secondary phone numbers returned for the contact. */
          secondaryPhone?: Array<string>;
          /** The secondary email addresses returned for the contact. */
          secondaryEmail?: Array<string>;
          /** The tag names returned for the contact. */
          tags?: Array<string>;
          /** The raw object returned by KrispCall. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw object returned by KrispCall. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a KrispCall contact by identifier. */
    "krispcall.delete_contact": {
      input: {
        /**
         * The KrispCall contact identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The data value returned by KrispCall for the delete operation. */
        result: unknown;
        /** The raw object returned by KrispCall. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one KrispCall contact by identifier. */
    "krispcall.get_contact": {
      input: {
        /**
         * The KrispCall contact identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized KrispCall contact. */
        contact: {
          /** The string value returned by KrispCall. */
          id?: string | null;
          /** The string value returned by KrispCall. */
          contact?: string | null;
          /** The string value returned by KrispCall. */
          name?: string | null;
          /** The string value returned by KrispCall. */
          email?: string | null;
          /** The string value returned by KrispCall. */
          company?: string | null;
          /** The string value returned by KrispCall. */
          address?: string | null;
          /** The string value returned by KrispCall. */
          country?: string | null;
          /** The string value returned by KrispCall. */
          status?: string | null;
          /** The string value returned by KrispCall. */
          visibility?: string | null;
          /** Whether KrispCall marks the contact as blocked. */
          blocked?: boolean | null;
          /** Whether KrispCall marks the contact as a favourite. */
          favourite?: boolean | null;
          /** The secondary phone numbers returned for the contact. */
          secondaryPhone?: Array<string>;
          /** The secondary email addresses returned for the contact. */
          secondaryEmail?: Array<string>;
          /** The tag names returned for the contact. */
          tags?: Array<string>;
          /** The raw object returned by KrispCall. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw object returned by KrispCall. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one KrispCall workspace member by identifier. */
    "krispcall.get_member": {
      input: {
        /**
         * The KrispCall member identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized KrispCall workspace member. */
        member: {
          /** The string value returned by KrispCall. */
          id?: string | null;
          /** The string value returned by KrispCall. */
          email?: string | null;
          /** The string value returned by KrispCall. */
          firstName?: string | null;
          /** The string value returned by KrispCall. */
          lastName?: string | null;
          /** The string value returned by KrispCall. */
          dateOfBirth?: string | null;
          /** The string value returned by KrispCall. */
          gender?: string | null;
          /** The raw object returned by KrispCall. */
          workspace?: Record<string, unknown>;
          /** The raw object returned by KrispCall. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw object returned by KrispCall. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the connected KrispCall workspace profile. */
    "krispcall.get_workspace": {
      input: Record<string, never>;
      output: {
        /** A normalized KrispCall workspace. */
        workspace: {
          /** The string value returned by KrispCall. */
          id?: string | null;
          /** The string value returned by KrispCall. */
          title?: string | null;
          /** The string value returned by KrispCall. */
          name?: string | null;
          /** The string value returned by KrispCall. */
          status?: string | null;
          /** Whether KrispCall marks the workspace KYC as verified. */
          kycVerified?: boolean | null;
          /** The raw object returned by KrispCall. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw object returned by KrispCall. */
        raw: Record<string, unknown>;
      };
    };
    /** List contacts in the connected KrispCall workspace. */
    "krispcall.list_contacts": {
      input: {
        /**
         * The one-based page number to request from KrispCall.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request from KrispCall.
         * @exclusiveMinimum 0
         */
        size?: number;
      };
      output: {
        /** The contacts returned by KrispCall. */
        contacts: Array<{
          /** The string value returned by KrispCall. */
          id?: string | null;
          /** The string value returned by KrispCall. */
          contact?: string | null;
          /** The string value returned by KrispCall. */
          name?: string | null;
          /** The string value returned by KrispCall. */
          email?: string | null;
          /** The string value returned by KrispCall. */
          company?: string | null;
          /** The string value returned by KrispCall. */
          address?: string | null;
          /** The string value returned by KrispCall. */
          country?: string | null;
          /** The string value returned by KrispCall. */
          status?: string | null;
          /** The string value returned by KrispCall. */
          visibility?: string | null;
          /** Whether KrispCall marks the contact as blocked. */
          blocked?: boolean | null;
          /** Whether KrispCall marks the contact as a favourite. */
          favourite?: boolean | null;
          /** The secondary phone numbers returned for the contact. */
          secondaryPhone?: Array<string>;
          /** The secondary email addresses returned for the contact. */
          secondaryEmail?: Array<string>;
          /** The tag names returned for the contact. */
          tags?: Array<string>;
          /** The raw object returned by KrispCall. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned by KrispCall. */
        metadata: {
          /** The response page size returned by KrispCall. */
          size: number | null;
          /** The response page number returned by KrispCall. */
          page: number | null;
          /** The total number of matching records returned by KrispCall. */
          totalCount: number | null;
          /** The raw object returned by KrispCall. */
          raw: Record<string, unknown>;
        } | null;
        /** The raw object returned by KrispCall. */
        raw: Record<string, unknown>;
      };
    };
    /** List members in the connected KrispCall workspace. */
    "krispcall.list_members": {
      input: {
        /**
         * The one-based page number to request from KrispCall.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request from KrispCall.
         * @exclusiveMinimum 0
         */
        size?: number;
      };
      output: {
        /** The members returned by KrispCall. */
        members: Array<{
          /** The string value returned by KrispCall. */
          id?: string | null;
          /** The string value returned by KrispCall. */
          email?: string | null;
          /** The string value returned by KrispCall. */
          firstName?: string | null;
          /** The string value returned by KrispCall. */
          lastName?: string | null;
          /** The string value returned by KrispCall. */
          dateOfBirth?: string | null;
          /** The string value returned by KrispCall. */
          gender?: string | null;
          /** The raw object returned by KrispCall. */
          workspace?: Record<string, unknown>;
          /** The raw object returned by KrispCall. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned by KrispCall. */
        metadata: {
          /** The response page size returned by KrispCall. */
          size: number | null;
          /** The response page number returned by KrispCall. */
          page: number | null;
          /** The total number of matching records returned by KrispCall. */
          totalCount: number | null;
          /** The raw object returned by KrispCall. */
          raw: Record<string, unknown>;
        } | null;
        /** The raw object returned by KrispCall. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a KrispCall contact by identifier. */
    "krispcall.update_contact": {
      input: {
        /**
         * The KrispCall contact identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The primary phone number for the KrispCall contact.
         * @minLength 1
         */
        contact?: string;
        /** The ISO country code for the contact phone number. */
        country?: string;
        /** The contact name. */
        name?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /** The contact company name. */
        company?: string;
        /** The contact address. */
        address?: string;
        /** The contact tags to send to KrispCall. */
        tags?: Array<string>;
        /** The secondary phone numbers to send to KrispCall. */
        secondaryPhone?: Array<string>;
        /** The secondary email addresses to send to KrispCall. */
        secondaryEmail?: Array<string>;
      };
      output: {
        /** A normalized KrispCall contact. */
        contact: {
          /** The string value returned by KrispCall. */
          id?: string | null;
          /** The string value returned by KrispCall. */
          contact?: string | null;
          /** The string value returned by KrispCall. */
          name?: string | null;
          /** The string value returned by KrispCall. */
          email?: string | null;
          /** The string value returned by KrispCall. */
          company?: string | null;
          /** The string value returned by KrispCall. */
          address?: string | null;
          /** The string value returned by KrispCall. */
          country?: string | null;
          /** The string value returned by KrispCall. */
          status?: string | null;
          /** The string value returned by KrispCall. */
          visibility?: string | null;
          /** Whether KrispCall marks the contact as blocked. */
          blocked?: boolean | null;
          /** Whether KrispCall marks the contact as a favourite. */
          favourite?: boolean | null;
          /** The secondary phone numbers returned for the contact. */
          secondaryPhone?: Array<string>;
          /** The secondary email addresses returned for the contact. */
          secondaryEmail?: Array<string>;
          /** The tag names returned for the contact. */
          tags?: Array<string>;
          /** The raw object returned by KrispCall. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw object returned by KrispCall. */
        raw: Record<string, unknown>;
      };
    };
  }
}
