import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete a Credit Repair Cloud affiliate record. */
    "credit_repair_cloud.delete_affiliate": {
      input: {
        /**
         * The encrypted Credit Repair Cloud record ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** Whether Credit Repair Cloud reported success. */
        success: boolean;
        /** The returned record ID when Credit Repair Cloud includes one. */
        id: string | null;
        /** The Credit Repair Cloud error or status code when present. */
        code: string | null;
        /** The Credit Repair Cloud response message when present. */
        message: string | null;
        /** The raw parsed Credit Repair Cloud XML response. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Credit Repair Cloud lead or client record. */
    "credit_repair_cloud.delete_lead_client": {
      input: {
        /**
         * The encrypted Credit Repair Cloud record ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** Whether Credit Repair Cloud reported success. */
        success: boolean;
        /** The returned record ID when Credit Repair Cloud includes one. */
        id: string | null;
        /** The Credit Repair Cloud error or status code when present. */
        code: string | null;
        /** The Credit Repair Cloud response message when present. */
        message: string | null;
        /** The raw parsed Credit Repair Cloud XML response. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Credit Repair Cloud affiliate record. */
    "credit_repair_cloud.insert_affiliate": {
      input: {
        /** An affiliate record accepted by Credit Repair Cloud. */
        record: {
          /** The Credit Repair Cloud affiliate status type. */
          type: "Active" | "Inactive" | "Pending";
          /**
           * The affiliate first name.
           * @minLength 1
           * @pattern \S
           */
          firstname: string;
          /**
           * The affiliate last name.
           * @minLength 1
           * @pattern \S
           */
          lastname: string;
          /** The affiliate gender value accepted by Credit Repair Cloud. */
          gender?: "Male" | "Female";
          /** The affiliate company name. */
          company?: string;
          /**
           * The affiliate company URL.
           * @format uri
           */
          company_url?: string;
          /**
           * The email address in Credit Repair Cloud.
           * @minLength 1
           * @format email
           */
          email: string;
          /**
           * The affiliate phone number.
           * @minLength 1
           */
          phone: string;
          /**
           * The affiliate phone extension.
           * @minLength 1
           */
          phone_ext?: string;
          /**
           * The affiliate alternate phone number.
           * @minLength 1
           */
          alternate_phone?: string;
          /**
           * The affiliate fax number.
           * @minLength 1
           */
          fax?: string;
          /** The affiliate mailing address. */
          mailing_address?: string;
          /** The affiliate mailing address city. */
          city?: string;
          /** The affiliate mailing address state abbreviation. */
          state?: string;
          /** The affiliate mailing address ZIP or postal code. */
          zip?: string;
          /** The affiliate mailing address post code accepted by Credit Repair Cloud. */
          post_code?: string;
          /** The internal note for the affiliate. */
          internal_note?: string;
          /** Whether affiliate portal access should be enabled. */
          affiliate_portal_access?: "on" | "off";
          /**
           * The email address in Credit Repair Cloud.
           * @minLength 1
           * @format email
           */
          affiliate_userid?: string;
          /** Whether Credit Repair Cloud should email setup password instructions. */
          send_setup_password_info_via_email?: "yes" | "no";
        };
      };
      output: {
        /** Whether Credit Repair Cloud reported success. */
        success: boolean;
        /** The returned record ID when Credit Repair Cloud includes one. */
        id: string | null;
        /** The Credit Repair Cloud error or status code when present. */
        code: string | null;
        /** The Credit Repair Cloud response message when present. */
        message: string | null;
        /** The raw parsed Credit Repair Cloud XML response. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Credit Repair Cloud lead or client record. */
    "credit_repair_cloud.insert_lead_client": {
      input: {
        /** A lead or client record accepted by Credit Repair Cloud. */
        record: {
          /**
           * The Credit Repair Cloud lead/client status, such as Client, Lead, Lead/Inactive, Inactive, Suspended, or a configured custom status.
           * @minLength 1
           * @pattern \S
           */
          type: string;
          /**
           * The lead or client first name.
           * @minLength 1
           * @pattern \S
           */
          firstname: string;
          /**
           * The lead or client last name.
           * @minLength 1
           * @pattern \S
           */
          lastname: string;
          /** The lead or client middle name. */
          middlename?: string;
          /** The lead or client suffix. */
          suffix?: string;
          /**
           * The email address in Credit Repair Cloud.
           * @minLength 1
           * @format email
           */
          email?: string;
          /**
           * The home phone number.
           * @minLength 1
           */
          phone_home?: string;
          /**
           * The mobile phone number.
           * @minLength 1
           */
          phone_mobile?: string;
          /**
           * The work phone number.
           * @minLength 1
           */
          phone_work?: string;
          /**
           * The work phone extension.
           * @minLength 1
           */
          phone_work_ext?: string;
          /**
           * The fax number.
           * @minLength 1
           */
          fax?: string;
          /** The street mailing address. */
          street_address?: string;
          /** The mailing address city. */
          city?: string;
          /** The mailing address state abbreviation. */
          state?: string;
          /** The mailing address ZIP or postal code. */
          zip?: string;
          /** The mailing address post code accepted by Credit Repair Cloud. */
          post_code?: string;
          /** The last four digits of the Social Security number. */
          ssno?: string;
          /** The birth date in mm/dd/yyyy format. */
          birth_date?: string;
          /** The lead or client memo. */
          memo?: string;
          /** The previous mailing address. */
          previous_mailing_address?: string;
          /** The previous mailing address city. */
          previous_city?: string;
          /** The previous mailing address state abbreviation. */
          previous_state?: string;
          /** The previous mailing address ZIP or postal code. */
          previous_zip?: string;
          /** Comma-separated team member names to assign to the client. */
          client_assigned_to?: string;
          /** Whether client portal access should be enabled. */
          client_portal_access?: "on" | "off";
          /**
           * The email address in Credit Repair Cloud.
           * @minLength 1
           * @format email
           */
          client_userid?: string;
          /** The client agreement name configured in Credit Repair Cloud. */
          client_agreement?: string;
          /** Whether Credit Repair Cloud should email setup password instructions. */
          send_setup_password_info_via_email?: "yes" | "no";
          /** The referrer first name. */
          referred_by_firstname?: string;
          /** The referrer last name. */
          referred_by_lastname?: string;
          /**
           * The email address in Credit Repair Cloud.
           * @minLength 1
           * @format email
           */
          referred_by_email?: string;
        };
      };
      output: {
        /** Whether Credit Repair Cloud reported success. */
        success: boolean;
        /** The returned record ID when Credit Repair Cloud includes one. */
        id: string | null;
        /** The Credit Repair Cloud error or status code when present. */
        code: string | null;
        /** The Credit Repair Cloud response message when present. */
        message: string | null;
        /** The raw parsed Credit Repair Cloud XML response. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Credit Repair Cloud affiliate record. */
    "credit_repair_cloud.update_affiliate": {
      input: {
        /**
         * The encrypted Credit Repair Cloud record ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /** An affiliate record accepted by Credit Repair Cloud. */
        record: {
          /** The Credit Repair Cloud affiliate status type. */
          type: "Active" | "Inactive" | "Pending";
          /**
           * The affiliate first name.
           * @minLength 1
           * @pattern \S
           */
          firstname: string;
          /**
           * The affiliate last name.
           * @minLength 1
           * @pattern \S
           */
          lastname: string;
          /** The affiliate gender value accepted by Credit Repair Cloud. */
          gender?: "Male" | "Female";
          /** The affiliate company name. */
          company?: string;
          /**
           * The affiliate company URL.
           * @format uri
           */
          company_url?: string;
          /**
           * The email address in Credit Repair Cloud.
           * @minLength 1
           * @format email
           */
          email: string;
          /**
           * The affiliate phone number.
           * @minLength 1
           */
          phone: string;
          /**
           * The affiliate phone extension.
           * @minLength 1
           */
          phone_ext?: string;
          /**
           * The affiliate alternate phone number.
           * @minLength 1
           */
          alternate_phone?: string;
          /**
           * The affiliate fax number.
           * @minLength 1
           */
          fax?: string;
          /** The affiliate mailing address. */
          mailing_address?: string;
          /** The affiliate mailing address city. */
          city?: string;
          /** The affiliate mailing address state abbreviation. */
          state?: string;
          /** The affiliate mailing address ZIP or postal code. */
          zip?: string;
          /** The affiliate mailing address post code accepted by Credit Repair Cloud. */
          post_code?: string;
          /** The internal note for the affiliate. */
          internal_note?: string;
          /** Whether affiliate portal access should be enabled. */
          affiliate_portal_access?: "on" | "off";
          /**
           * The email address in Credit Repair Cloud.
           * @minLength 1
           * @format email
           */
          affiliate_userid?: string;
          /** Whether Credit Repair Cloud should email setup password instructions. */
          send_setup_password_info_via_email?: "yes" | "no";
        };
      };
      output: {
        /** Whether Credit Repair Cloud reported success. */
        success: boolean;
        /** The returned record ID when Credit Repair Cloud includes one. */
        id: string | null;
        /** The Credit Repair Cloud error or status code when present. */
        code: string | null;
        /** The Credit Repair Cloud response message when present. */
        message: string | null;
        /** The raw parsed Credit Repair Cloud XML response. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Credit Repair Cloud lead or client record. */
    "credit_repair_cloud.update_lead_client": {
      input: {
        /**
         * The encrypted Credit Repair Cloud record ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /** A lead or client record accepted by Credit Repair Cloud. */
        record: {
          /**
           * The Credit Repair Cloud lead/client status, such as Client, Lead, Lead/Inactive, Inactive, Suspended, or a configured custom status.
           * @minLength 1
           * @pattern \S
           */
          type: string;
          /**
           * The lead or client first name.
           * @minLength 1
           * @pattern \S
           */
          firstname: string;
          /**
           * The lead or client last name.
           * @minLength 1
           * @pattern \S
           */
          lastname: string;
          /** The lead or client middle name. */
          middlename?: string;
          /** The lead or client suffix. */
          suffix?: string;
          /**
           * The email address in Credit Repair Cloud.
           * @minLength 1
           * @format email
           */
          email?: string;
          /**
           * The home phone number.
           * @minLength 1
           */
          phone_home?: string;
          /**
           * The mobile phone number.
           * @minLength 1
           */
          phone_mobile?: string;
          /**
           * The work phone number.
           * @minLength 1
           */
          phone_work?: string;
          /**
           * The work phone extension.
           * @minLength 1
           */
          phone_work_ext?: string;
          /**
           * The fax number.
           * @minLength 1
           */
          fax?: string;
          /** The street mailing address. */
          street_address?: string;
          /** The mailing address city. */
          city?: string;
          /** The mailing address state abbreviation. */
          state?: string;
          /** The mailing address ZIP or postal code. */
          zip?: string;
          /** The mailing address post code accepted by Credit Repair Cloud. */
          post_code?: string;
          /** The last four digits of the Social Security number. */
          ssno?: string;
          /** The birth date in mm/dd/yyyy format. */
          birth_date?: string;
          /** The lead or client memo. */
          memo?: string;
          /** The previous mailing address. */
          previous_mailing_address?: string;
          /** The previous mailing address city. */
          previous_city?: string;
          /** The previous mailing address state abbreviation. */
          previous_state?: string;
          /** The previous mailing address ZIP or postal code. */
          previous_zip?: string;
          /** Comma-separated team member names to assign to the client. */
          client_assigned_to?: string;
          /** Whether client portal access should be enabled. */
          client_portal_access?: "on" | "off";
          /**
           * The email address in Credit Repair Cloud.
           * @minLength 1
           * @format email
           */
          client_userid?: string;
          /** The client agreement name configured in Credit Repair Cloud. */
          client_agreement?: string;
          /** Whether Credit Repair Cloud should email setup password instructions. */
          send_setup_password_info_via_email?: "yes" | "no";
          /** The referrer first name. */
          referred_by_firstname?: string;
          /** The referrer last name. */
          referred_by_lastname?: string;
          /**
           * The email address in Credit Repair Cloud.
           * @minLength 1
           * @format email
           */
          referred_by_email?: string;
        };
      };
      output: {
        /** Whether Credit Repair Cloud reported success. */
        success: boolean;
        /** The returned record ID when Credit Repair Cloud includes one. */
        id: string | null;
        /** The Credit Repair Cloud error or status code when present. */
        code: string | null;
        /** The Credit Repair Cloud response message when present. */
        message: string | null;
        /** The raw parsed Credit Repair Cloud XML response. */
        raw: Record<string, unknown>;
      };
    };
    /** View a Credit Repair Cloud affiliate record. */
    "credit_repair_cloud.view_affiliate": {
      input: {
        /**
         * The encrypted Credit Repair Cloud record ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** Whether Credit Repair Cloud reported success. */
        success: boolean;
        /** The returned Credit Repair Cloud record when present. */
        record: Record<string, unknown> | null;
        /** The Credit Repair Cloud error or status code when present. */
        code: string | null;
        /** The Credit Repair Cloud response message when present. */
        message: string | null;
        /** The raw parsed Credit Repair Cloud XML response. */
        raw: Record<string, unknown>;
      };
    };
    /** View a Credit Repair Cloud lead or client record. */
    "credit_repair_cloud.view_lead_client": {
      input: {
        /**
         * The encrypted Credit Repair Cloud record ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** Whether Credit Repair Cloud reported success. */
        success: boolean;
        /** The returned Credit Repair Cloud record when present. */
        record: Record<string, unknown> | null;
        /** The Credit Repair Cloud error or status code when present. */
        code: string | null;
        /** The Credit Repair Cloud response message when present. */
        message: string | null;
        /** The raw parsed Credit Repair Cloud XML response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
