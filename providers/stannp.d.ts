import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one or more existing Stannp recipients to a recipient group. */
    "stannp.add_recipients_to_group": {
      input: {
        /**
         * ID of the Stannp group to update.
         * @exclusiveMinimum 0
         */
        groupId: number;
        /**
         * Stannp recipient IDs to add to the group.
         * @minItems 1
         */
        recipientIds: Array<number>;
      };
      output: {
        /** Number of recipients Stannp reported as added. */
        addedCount: number | null;
        /** Raw Stannp response data. */
        raw: unknown;
      };
    };
    /** Create an empty Stannp recipient group. */
    "stannp.create_group": {
      input: {
        /**
         * Name of the new Stannp recipient group.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Created group ID as returned by Stannp. */
        groupId: string;
        /** Raw Stannp response data. */
        raw: unknown;
      };
    };
    /** Create a Stannp recipient and optionally add it to a group. */
    "stannp.create_recipient": {
      input: {
        /**
         * Optional group ID to add the new recipient to.
         * @exclusiveMinimum 0
         */
        groupId?: number;
        /**
         * Recipient title, such as Mr, Mrs, or Dr.
         * @minLength 1
         */
        title?: string;
        /**
         * Recipient first name.
         * @minLength 1
         */
        firstname?: string;
        /**
         * Recipient last name.
         * @minLength 1
         */
        lastname?: string;
        /**
         * Recipient company name.
         * @minLength 1
         */
        company?: string;
        /**
         * Recipient job title.
         * @minLength 1
         */
        jobTitle?: string;
        /**
         * Recipient address line 1.
         * @minLength 1
         */
        address1?: string;
        /**
         * Recipient address line 2.
         * @minLength 1
         */
        address2?: string;
        /**
         * Recipient address line 3.
         * @minLength 1
         */
        address3?: string;
        /**
         * Recipient city.
         * @minLength 1
         */
        city?: string;
        /**
         * Recipient county, province, or state.
         * @minLength 1
         */
        county?: string;
        /**
         * Recipient postal code or ZIP code.
         * @minLength 1
         */
        postcode?: string;
        /**
         * Recipient ISO 3166-1 alpha-2 country code.
         * @minLength 1
         */
        country?: string;
        /**
         * Recipient email address.
         * @format email
         */
        email?: string;
        /**
         * Recipient phone number.
         * @minLength 1
         */
        phoneNumber?: string;
        /**
         * External reference ID for matching a recipient across systems.
         * @minLength 1
         */
        refId?: string;
        /** Duplicate handling mode when Stannp finds an existing recipient. */
        onDuplicate?: "update" | "ignore" | "duplicate";
        /** Duplicate detection strategy used by Stannp. */
        testLevel?: "email" | "fullname" | "initial" | "ref_id";
        /** Custom Stannp recipient fields to send as top-level recipient parameters. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** Created recipient ID as returned by Stannp. */
        recipientId: string;
        /** Whether Stannp marked the recipient as valid. */
        valid: boolean | null;
        /** Creation timestamp returned by Stannp. */
        created: string | null;
        /** Raw Stannp response data. */
        raw: unknown;
      };
    };
    /** Delete a Stannp recipient group, optionally deleting its recipients. */
    "stannp.delete_group": {
      input: {
        /**
         * ID of the Stannp recipient group to delete.
         * @exclusiveMinimum 0
         */
        groupId: number;
        /** Whether Stannp should completely delete recipients in the group. */
        deleteRecipients?: boolean;
      };
      output: {
        /** Whether Stannp reported the group deletion as successful. */
        deleted: boolean;
        /** Raw Stannp response data. */
        raw: unknown;
      };
    };
    /** Permanently delete a Stannp recipient by ID. */
    "stannp.delete_recipient": {
      input: {
        /**
         * ID of the Stannp recipient to delete.
         * @exclusiveMinimum 0
         */
        recipientId: number;
      };
      output: {
        /** Whether Stannp reported the recipient deletion as successful. */
        deleted: boolean;
        /** Raw Stannp response data. */
        raw: unknown;
      };
    };
    /** Retrieve the Stannp account balance for the connected regional account. */
    "stannp.get_account_balance": {
      input: Record<string, never>;
      output: {
        /** Current account balance as returned by Stannp. */
        balance: string;
        /** Raw Stannp response data. */
        raw: unknown;
      };
    };
    /** Retrieve a single Stannp recipient by ID. */
    "stannp.get_recipient": {
      input: {
        /**
         * ID of the Stannp recipient to retrieve.
         * @exclusiveMinimum 0
         */
        recipientId: number;
      };
      output: {
        /** A Stannp recipient record. */
        recipient: {
          /** Stannp recipient ID. */
          id?: string;
          /** Stannp account ID that owns the recipient. */
          account_id?: string;
          /** Recipient title. */
          title?: string;
          /** Recipient first name. */
          firstname?: string;
          /** Recipient last name. */
          lastname?: string;
          /** Recipient company name. */
          company?: string;
          /** Recipient job title. */
          job_title?: string;
          /** Recipient address line 1. */
          address1?: string;
          /** Recipient address line 2. */
          address2?: string;
          /** Recipient address line 3. */
          address3?: string;
          /** Recipient city or town. */
          city?: string;
          /** Recipient county, province, or state. */
          county?: string;
          /** Recipient ISO 3166-1 alpha-2 country code. */
          country?: string;
          /** Recipient postal code or ZIP code. */
          postcode?: string;
          /** Recipient delivery point suffix when returned by Stannp. */
          dps?: string;
          /** Recipient email address. */
          email?: string;
          /** Recipient phone number. */
          phone_number?: string;
          /** External reference ID for matching the recipient. */
          ref_id?: string;
          /** Whether the recipient has been block listed. */
          blacklist?: boolean | string;
          /** Timestamp when the recipient was created. */
          created?: string;
          /** Timestamp when the recipient was last updated. */
          updated?: string;
          [key: string]: unknown;
        };
        /** Raw Stannp response data. */
        raw: unknown;
      };
    };
    /** List Stannp recipient groups with optional offset and limit pagination. */
    "stannp.list_groups": {
      input: {
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Recipient groups returned by Stannp. */
        groups: Array<{
          /** Stannp group ID. */
          id?: string;
          /** Stannp account ID that owns the group. */
          account_id?: string;
          /** Group name. */
          name?: string;
          /** Timestamp when the group was created. */
          created?: string;
          /** Number of recipients in the group as returned by Stannp. */
          recipients?: string;
          /** Number of valid recipients in the group as returned by Stannp. */
          valid?: string;
          /** Number of international recipients in the group. */
          international?: string;
          /** Number of skipped recipients in the group. */
          skipped?: string;
          /** Group calculation or import status. */
          status?: string;
          /** Group import progress as returned by Stannp. */
          import_progress?: string;
          /** Whether this group is a seed group as returned by Stannp. */
          is_seeds?: string;
          [key: string]: unknown;
        }>;
        /** Raw Stannp response data. */
        raw: unknown;
      };
    };
    /** List Stannp recipients, optionally filtered by group and paginated. */
    "stannp.list_recipients": {
      input: {
        /**
         * Optional group ID to filter recipients.
         * @exclusiveMinimum 0
         */
        groupId?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Recipients returned by Stannp. */
        recipients: Array<{
          /** Stannp recipient ID. */
          id?: string;
          /** Stannp account ID that owns the recipient. */
          account_id?: string;
          /** Recipient title. */
          title?: string;
          /** Recipient first name. */
          firstname?: string;
          /** Recipient last name. */
          lastname?: string;
          /** Recipient company name. */
          company?: string;
          /** Recipient job title. */
          job_title?: string;
          /** Recipient address line 1. */
          address1?: string;
          /** Recipient address line 2. */
          address2?: string;
          /** Recipient address line 3. */
          address3?: string;
          /** Recipient city or town. */
          city?: string;
          /** Recipient county, province, or state. */
          county?: string;
          /** Recipient ISO 3166-1 alpha-2 country code. */
          country?: string;
          /** Recipient postal code or ZIP code. */
          postcode?: string;
          /** Recipient delivery point suffix when returned by Stannp. */
          dps?: string;
          /** Recipient email address. */
          email?: string;
          /** Recipient phone number. */
          phone_number?: string;
          /** External reference ID for matching the recipient. */
          ref_id?: string;
          /** Whether the recipient has been block listed. */
          blacklist?: boolean | string;
          /** Timestamp when the recipient was created. */
          created?: string;
          /** Timestamp when the recipient was last updated. */
          updated?: string;
          [key: string]: unknown;
        }>;
        /** Raw Stannp response data. */
        raw: unknown;
      };
    };
    /** Remove one or more existing Stannp recipients from a recipient group. */
    "stannp.remove_recipients_from_group": {
      input: {
        /**
         * ID of the Stannp group to update.
         * @exclusiveMinimum 0
         */
        groupId: number;
        /**
         * Stannp recipient IDs to remove from the group.
         * @minItems 1
         */
        recipientIds: Array<number>;
      };
      output: {
        /** Number of recipients Stannp reported as removed. */
        removedCount: number | null;
        /** Raw Stannp response data. */
        raw: unknown;
      };
    };
    /** Validate and normalize a UK, US, or Canadian postal address with Stannp. */
    "stannp.validate_address": {
      input: {
        /**
         * Company name.
         * @minLength 1
         */
        company?: string;
        /**
         * Address line 1.
         * @minLength 1
         */
        address1: string;
        /**
         * Address line 2.
         * @minLength 1
         */
        address2?: string;
        /**
         * Address line 3.
         * @minLength 1
         */
        address3?: string;
        /**
         * Address city.
         * @minLength 1
         */
        city?: string;
        /**
         * Address postal code. Recommended for accurate validation.
         * @minLength 1
         */
        postcode?: string;
        /**
         * ISO 3166-1 alpha-2 country code. Recommended for accurate validation.
         * @minLength 1
         */
        country?: string;
        /**
         * Two-letter US state abbreviation.
         * @minLength 1
         */
        state?: string;
        /**
         * Two-letter Canadian province abbreviation.
         * @minLength 1
         */
        province?: string;
        /**
         * US or Canadian ZIP/postal code. Required by Stannp if city is absent.
         * @minLength 1
         */
        zipcode?: string;
      };
      output: {
        /** Whether Stannp considers the address valid. */
        isValid: boolean;
        /** A normalized postal address returned by Stannp. */
        address: {
          /** Company name. */
          company?: string;
          /** Address line 1. */
          address1?: string;
          /** Address line 2. */
          address2?: string;
          /** Address line 3. */
          address3?: string;
          /** City or town. */
          city?: string;
          /** County, province, or state. */
          county?: string;
          /** Postal code or ZIP code. */
          postcode?: string;
          /** ISO 3166-1 alpha-2 country code. */
          country?: string;
          /** Stannp address reference ID. */
          reference_id?: string | number;
          /** Delivery point suffix when returned by Stannp. */
          dps?: string;
          /** Unique delivery point reference number when returned by Stannp. */
          udprn?: string;
          /** Whether Stannp considers the address valid. */
          is_valid?: boolean;
          [key: string]: unknown;
        };
        /** Raw Stannp response data. */
        raw: unknown;
      };
    };
  }
}
