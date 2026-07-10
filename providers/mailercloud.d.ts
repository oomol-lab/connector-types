import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Mailercloud contact in a recipient list with optional standard and custom fields. */
    "mailercloud.create_contact": {
      input: {
        /**
         * The contact's email address.
         * @maxLength 200
         * @format email
         */
        email: string;
        /**
         * The Mailercloud list ID where the contact should be added.
         * @minLength 1
         */
        list_id: string;
        /**
         * The contact's first name.
         * @minLength 1
         * @maxLength 25
         */
        first_name?: string;
        /**
         * The contact's middle name.
         * @minLength 1
         * @maxLength 25
         */
        middle_name?: string;
        /**
         * The contact's last name.
         * @minLength 1
         * @maxLength 25
         */
        last_name?: string;
        /**
         * The contact's phone number.
         * @minLength 1
         * @maxLength 25
         */
        phone?: string;
        /**
         * The contact's city.
         * @minLength 1
         * @maxLength 100
         */
        city?: string;
        /**
         * The contact's state or province.
         * @minLength 1
         * @maxLength 100
         */
        state?: string;
        /**
         * The contact's country.
         * @minLength 1
         * @maxLength 50
         */
        country?: string;
        /**
         * The contact's postal code.
         * @minLength 1
         * @maxLength 25
         */
        postal_code?: string;
        /**
         * The contact's company name.
         * @minLength 1
         * @maxLength 150
         */
        company_name?: string;
        /**
         * The contact's job title.
         * @minLength 1
         * @maxLength 100
         */
        job_title?: string;
        /**
         * The contact's department.
         * @minLength 1
         * @maxLength 100
         */
        department?: string;
        /**
         * The contact's industry.
         * @minLength 1
         * @maxLength 100
         */
        industry?: string;
        /** The contact's salary or numeric value used by Mailercloud segmentation. */
        salary?: number;
        /**
         * The source where this contact was collected.
         * @minLength 1
         * @maxLength 50
         */
        lead_source?: string;
        /** The Mailercloud contact status to set. */
        contact_type?: "active" | "bounce" | "abuse" | "unsubscribe" | "suppressed" | "spam complaints";
        /** Tags to attach to the contact. */
        tags?: Array<string>;
        /** Custom contact property values keyed by Mailercloud property ID. */
        custom_fields?: Record<string, string | number>;
      };
      output: {
        /** The Mailercloud resource ID returned by create or update operations. */
        id?: string;
        /** Whether Mailercloud accepted the request. */
        success?: boolean;
        /** A response message returned by Mailercloud. */
        message?: string;
        /** An error message returned by Mailercloud. */
        error?: string;
        /** The total number of records returned by Mailercloud. */
        count?: number;
        /** The response payload returned by Mailercloud. */
        data?: unknown;
        /** Errors returned by Mailercloud. */
        errors?: Array<{
          /** The field associated with the error. */
          field?: string;
          /** The error message. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a custom property for Mailercloud contact records. */
    "mailercloud.create_contact_property": {
      input: {
        /**
         * The name of the custom property.
         * @minLength 3
         * @maxLength 30
         */
        name: string;
        /** The custom property type. */
        type: "text" | "number" | "date" | "textarea";
        /**
         * A description of the custom property's purpose.
         * @minLength 3
         * @maxLength 500
         */
        description?: string;
      };
      output: {
        /** The Mailercloud resource ID returned by create or update operations. */
        id?: string;
        /** Whether Mailercloud accepted the request. */
        success?: boolean;
        /** A response message returned by Mailercloud. */
        message?: string;
        /** An error message returned by Mailercloud. */
        error?: string;
        /** The total number of records returned by Mailercloud. */
        count?: number;
        /** The response payload returned by Mailercloud. */
        data?: unknown;
        /** Errors returned by Mailercloud. */
        errors?: Array<{
          /** The field associated with the error. */
          field?: string;
          /** The error message. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a Mailercloud recipient list for storing and managing contacts. */
    "mailercloud.create_list": {
      input: {
        /**
         * The display name of the recipient list.
         * @minLength 3
         * @maxLength 100
         */
        name: string;
        /** The Mailercloud list type. Use 1 for a normal list. */
        list_type: 1;
      };
      output: {
        /** The Mailercloud resource ID returned by create or update operations. */
        id?: string;
        /** Whether Mailercloud accepted the request. */
        success?: boolean;
        /** A response message returned by Mailercloud. */
        message?: string;
        /** An error message returned by Mailercloud. */
        error?: string;
        /** The total number of records returned by Mailercloud. */
        count?: number;
        /** The response payload returned by Mailercloud. */
        data?: unknown;
        /** Errors returned by Mailercloud. */
        errors?: Array<{
          /** The field associated with the error. */
          field?: string;
          /** The error message. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete a Mailercloud contact custom property by ID. */
    "mailercloud.delete_contact_property": {
      input: {
        /**
         * The ID of the custom property to delete.
         * @minLength 1
         */
        property_id: string;
      };
      output: {
        /** The Mailercloud resource ID returned by create or update operations. */
        id?: string;
        /** Whether Mailercloud accepted the request. */
        success?: boolean;
        /** A response message returned by Mailercloud. */
        message?: string;
        /** An error message returned by Mailercloud. */
        error?: string;
        /** The total number of records returned by Mailercloud. */
        count?: number;
        /** The response payload returned by Mailercloud. */
        data?: unknown;
        /** Errors returned by Mailercloud. */
        errors?: Array<{
          /** The field associated with the error. */
          field?: string;
          /** The error message. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Mailercloud contact custom properties. */
    "mailercloud.list_contact_properties": {
      input: {
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page: number;
        /**
         * The number of records to return per page.
         * @minimum 10
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit: number;
        /**
         * Filter contact properties by name.
         * @minLength 1
         */
        search?: string;
        /** Filter contact properties by property source. */
        type?: "default" | "custom";
      };
      output: {
        /** The Mailercloud resource ID returned by create or update operations. */
        id?: string;
        /** Whether Mailercloud accepted the request. */
        success?: boolean;
        /** A response message returned by Mailercloud. */
        message?: string;
        /** An error message returned by Mailercloud. */
        error?: string;
        /** The total number of records returned by Mailercloud. */
        count?: number;
        /** The response payload returned by Mailercloud. */
        data?: unknown;
        /** Errors returned by Mailercloud. */
        errors?: Array<{
          /** The field associated with the error. */
          field?: string;
          /** The error message. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update the name or description of a Mailercloud contact custom property. */
    "mailercloud.update_contact_property": {
      input: {
        /**
         * The ID of the custom property to update.
         * @minLength 1
         */
        property_id: string;
        /**
         * The new custom property name.
         * @minLength 3
         * @maxLength 30
         */
        name: string;
        /**
         * The new custom property description.
         * @minLength 3
         * @maxLength 500
         */
        description?: string;
      };
      output: {
        /** The Mailercloud resource ID returned by create or update operations. */
        id?: string;
        /** Whether Mailercloud accepted the request. */
        success?: boolean;
        /** A response message returned by Mailercloud. */
        message?: string;
        /** An error message returned by Mailercloud. */
        error?: string;
        /** The total number of records returned by Mailercloud. */
        count?: number;
        /** The response payload returned by Mailercloud. */
        data?: unknown;
        /** Errors returned by Mailercloud. */
        errors?: Array<{
          /** The field associated with the error. */
          field?: string;
          /** The error message. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
