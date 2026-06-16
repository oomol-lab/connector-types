import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one new contact in AccuLynx. */
    "acculynx.create_contact": {
      input: {
        /**
         * The contact type identifiers assigned to the contact.
         * @minItems 1
         */
        contactTypeIds: Array<string>;
        /**
         * The contact first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The contact last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The external cross-reference stored on the contact.
         * @minLength 1
         */
        crossReference?: string;
        /**
         * The contact company name.
         * @minLength 1
         */
        companyName?: string;
        /**
         * The contact job title.
         * @minLength 1
         */
        companyJobTitle?: string;
        /**
         * A note stored on the contact.
         * @minLength 1
         */
        note?: string;
        /**
         * The phone numbers to create on the contact.
         * @minItems 1
         */
        phoneNumbers?: Array<{
          /**
           * The 10 digit phone number.
           * @minLength 10
           * @maxLength 10
           * @pattern ^\d{10}$
           */
          number: string;
          /**
           * The optional phone extension.
           * @minLength 1
           */
          ext?: string;
          /** Whether this phone number is the primary one. */
          primary?: boolean;
          /** Whether SMS or texting is enabled for this phone number. */
          hasTextingAvailable?: boolean;
          /** The classification of the phone number. */
          type: "Home" | "Mobile" | "Work";
        }>;
        /**
         * The email addresses to create on the contact.
         * @minItems 1
         */
        emailAddresses?: Array<{
          /**
           * The contact email address.
           * @minLength 1
           * @format email
           */
          address: string;
          /** Whether this email address is the primary one. */
          primary?: boolean;
          /** The classification of the email address. */
          type?: "Personal" | "Work" | "Other";
        }>;
        /** A contact address. */
        mailingAddress?: {
          /**
           * The first address line.
           * @minLength 1
           */
          street1?: string;
          /**
           * The second address line.
           * @minLength 1
           */
          street2?: string;
          /**
           * The city name.
           * @minLength 1
           */
          city?: string;
          /**
           * The postal or ZIP code.
           * @minLength 1
           */
          zipCode?: string;
          /** The state reference used for a contact address. */
          state?: {
            /** The unique identifier of the state. */
            id: number;
          };
          /** The country reference used for a contact address. */
          country?: {
            /** The unique identifier of the country. */
            id: number;
          };
        };
        /** A contact address. */
        billingAddress?: {
          /**
           * The first address line.
           * @minLength 1
           */
          street1?: string;
          /**
           * The second address line.
           * @minLength 1
           */
          street2?: string;
          /**
           * The city name.
           * @minLength 1
           */
          city?: string;
          /**
           * The postal or ZIP code.
           * @minLength 1
           */
          zipCode?: string;
          /** The state reference used for a contact address. */
          state?: {
            /** The unique identifier of the state. */
            id: number;
          };
          /** The country reference used for a contact address. */
          country?: {
            /** The unique identifier of the country. */
            id: number;
          };
        };
        /** Whether the billing address should match the mailing address. */
        billingAddressSameAsMailingAddress?: boolean;
      };
      output: {
        /** The created contact reference. */
        contact: {
          /**
           * The unique identifier of the created contact.
           * @format uuid
           */
          id: string;
          /**
           * The canonical API URL for this resource.
           * @format uri
           */
          link: string;
        };
      };
    };
    /** Create one new job in the AccuLynx Lead milestone. */
    "acculynx.create_job": {
      input: {
        /** The contact reference used by a job. */
        contact: {
          /**
           * The unique identifier of the contact.
           * @format uuid
           */
          id: string;
        };
        /** The lead source reference used by a job. */
        leadSource?: {
          /**
           * The unique identifier of the lead source.
           * @format uuid
           */
          id: string;
        };
        /** The job location address. */
        locationAddress?: {
          /**
           * The first address line.
           * @minLength 1
           * @maxLength 250
           */
          street1: string;
          /**
           * The second address line.
           * @minLength 1
           * @maxLength 50
           */
          street2?: string;
          /**
           * The city name.
           * @minLength 1
           * @maxLength 50
           */
          city: string;
          /**
           * The state or province abbreviation.
           * @minLength 1
           * @maxLength 50
           */
          state: string;
          /**
           * The country abbreviation.
           * @minLength 1
           * @maxLength 50
           */
          country: string;
          /**
           * The postal or ZIP code.
           * @minLength 1
           * @maxLength 50
           */
          zipCode: string;
        };
        /** The priority assigned to the job. */
        priority?: "Urgent" | "High" | "Normal";
        /** The job category reference. */
        jobCategory?: {
          /** The unique identifier of the job category. */
          id: number;
        };
        /** The work type reference. */
        workType?: {
          /** The unique identifier of the work type. */
          id: number;
        };
        /**
         * The trade types assigned to the job.
         * @minItems 1
         */
        tradeTypes?: Array<{
          /**
           * The unique identifier of the trade type.
           * @format uuid
           */
          id: string;
        }>;
        /**
         * A note stored on the newly created job.
         * @minLength 1
         * @maxLength 1000
         */
        notes?: string;
      };
      output: {
        /** The created job reference. */
        job: {
          /**
           * The unique identifier of the created job.
           * @format uuid
           */
          id: string;
          /**
           * The canonical API URL for this resource.
           * @format uri
           */
          link: string;
        };
      };
    };
    /** Get the current AccuLynx company settings for the connected location. */
    "acculynx.get_company_settings": {
      input: Record<string, never>;
      output: {
        /**
         * The unique identifier of the company.
         * @format uuid
         */
        id: string;
        /** The company name. */
        name: string;
        /** Whether the company has insurance settings enabled. */
        hasInsurance?: boolean;
        /** The company timezone information. */
        timeZoneInfo?: {
          /** The standard timezone name. */
          name: string;
          /** The daylight saving timezone name. */
          daylightName?: string;
          /** The base UTC offset of the timezone. */
          baseUtcOffset?: string;
          /** The currently adjusted UTC offset of the timezone. */
          adjustedUtcOffset?: string;
          /** Whether the timezone supports daylight saving time. */
          supportsDaylightSavingTime?: boolean;
        };
      };
    };
    /** Get the initial appointment for one AccuLynx job. */
    "acculynx.get_initial_appointment": {
      input: {
        /**
         * The unique identifier of the job.
         * @format uuid
         */
        jobId: string;
      };
      output: {
        /** The initial appointment for one job. */
        initialAppointment: {
          /**
           * The canonical API URL for this resource.
           * @format uri
           */
          link: string;
          /**
           * The start datetime of the initial appointment.
           * @format date-time
           */
          startDate?: string;
          /**
           * The end datetime of the initial appointment.
           * @format date-time
           */
          endDate?: string;
          /** The notes stored on the initial appointment. */
          notes?: string;
        };
      };
    };
    /** List appointment summaries for one AccuLynx calendar within a date range. */
    "acculynx.list_calendar_appointments": {
      input: {
        /**
         * The unique identifier of the calendar.
         * @format uuid
         */
        calendarId: string;
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * The zero-based index of the first item to return.
         * @minimum 0
         */
        pageStartIndex?: number;
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
      };
      output: {
        /** The total number of unfiltered items. */
        count: number;
        /** The requested or default page size. */
        pageSize: number;
        /** The requested or default index of the first returned item. */
        pageStartIndex: number;
        /** The returned appointment summaries. */
        items: Array<{
          /**
           * The unique identifier of the appointment.
           * @format uuid
           */
          id: string;
          /** The appointment title. */
          title: string;
          /**
           * The appointment start datetime in ISO 8601 format.
           * @format date-time
           */
          start: string;
          /**
           * The appointment end datetime in ISO 8601 format.
           * @format date-time
           */
          end: string;
          /** Whether the appointment lasts all day. */
          allDay: boolean;
          /**
           * The related job identifier.
           * @format uuid
           */
          jobId?: string;
          /** The related job name. */
          jobName?: string;
          /** The appointment location. */
          location?: string;
          /** The notes attached to the appointment. */
          notes?: string;
          /** The appointment event type. */
          eventType?: string;
          /**
           * The canonical API URL for this resource.
           * @format uri
           */
          link: string;
        }>;
      };
    };
    /** List the calendars available in the current AccuLynx location. */
    "acculynx.list_calendars": {
      input: {
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * The zero-based index of the first item to return.
         * @minimum 0
         */
        recordStartIndex?: number;
      };
      output: {
        /** The total number of unfiltered items. */
        count: number;
        /** The requested or default page size. */
        pageSize: number;
        /** The requested or default index of the first returned item. */
        pageStartIndex: number;
        /** The returned calendars. */
        items: Array<{
          /**
           * The unique identifier of the calendar.
           * @format uuid
           */
          id: string;
          /** The calendar name. */
          name: string;
        }>;
      };
    };
    /** List the contact types configured for the current AccuLynx company. */
    "acculynx.list_contact_types": {
      input: {
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * The zero-based index of the first item to return.
         * @minimum 0
         */
        pageStartIndex?: number;
      };
      output: {
        /** The total number of unfiltered items. */
        count: number;
        /** The requested or default page size. */
        pageSize: number;
        /** The requested or default index of the first returned item. */
        pageStartIndex: number;
        /** The returned contact types. */
        items: Array<{
          /**
           * The unique identifier of the contact type.
           * @format uuid
           */
          id: string;
          /** The contact type name. */
          name: string;
          /** Whether this contact type is marked as the default. */
          isDefault: boolean;
        }>;
      };
    };
    /** List the active AccuLynx job categories configured for the company. */
    "acculynx.list_job_categories": {
      input: {
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * The zero-based index of the first item to return.
         * @minimum 0
         */
        recordStartIndex?: number;
      };
      output: {
        /** The total number of unfiltered items. */
        count: number;
        /** The requested or default page size. */
        pageSize: number;
        /** The requested or default index of the first returned item. */
        pageStartIndex: number;
        /** The returned job categories. */
        items: Array<{
          /** The unique identifier of the job category. */
          id: number;
          /** The job category name. */
          name: string;
        }>;
      };
    };
    /** List the active lead sources configured for the current AccuLynx company. */
    "acculynx.list_lead_sources": {
      input: {
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * The zero-based index of the first item to return.
         * @minimum 0
         */
        recordStartIndex?: number;
      };
      output: {
        /** The total number of unfiltered items. */
        count: number;
        /** The requested or default page size. */
        pageSize: number;
        /** The requested or default index of the first returned item. */
        pageStartIndex: number;
        /** The returned lead sources. */
        items: Array<{
          /**
           * The unique identifier of the lead source.
           * @format uuid
           */
          id: string;
          /** The lead source name. */
          name: string;
          /**
           * The canonical API URL for this resource.
           * @format uri
           */
          link: string;
          /** The child lead sources when configured. */
          children?: Array<{
            /**
             * The unique identifier of the child lead source.
             * @format uuid
             */
            id: string;
            /**
             * The unique identifier of the parent lead source.
             * @format uuid
             */
            parentId: string;
            /** The child lead source name. */
            name: string;
            /**
             * The canonical API URL for this resource.
             * @format uri
             */
            link: string;
          }>;
        }>;
      };
    };
    /** List the active AccuLynx trade types configured for the company. */
    "acculynx.list_trade_types": {
      input: {
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * The zero-based index of the first item to return.
         * @minimum 0
         */
        recordStartIndex?: number;
      };
      output: {
        /** The total number of unfiltered items. */
        count: number;
        /** The requested or default page size. */
        pageSize: number;
        /** The requested or default index of the first returned item. */
        pageStartIndex: number;
        /** The returned trade types. */
        items: Array<{
          /**
           * The unique identifier of the trade type.
           * @format uuid
           */
          id: string;
          /** The trade type name. */
          name: string;
        }>;
      };
    };
    /** List the active AccuLynx work types configured for the company. */
    "acculynx.list_work_types": {
      input: {
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * The zero-based index of the first item to return.
         * @minimum 0
         */
        recordStartIndex?: number;
      };
      output: {
        /** The total number of unfiltered items. */
        count: number;
        /** The requested or default page size. */
        pageSize: number;
        /** The requested or default index of the first returned item. */
        pageStartIndex: number;
        /** The returned work types. */
        items: Array<{
          /** The unique identifier of the work type. */
          id: number;
          /** The work type name. */
          name: string;
          /** Whether the work type is a system default. */
          systemDefault: boolean;
          /**
           * The canonical API URL for this resource.
           * @format uri
           */
          link: string;
        }>;
      };
    };
    /** Add or update the initial appointment for one AccuLynx job. */
    "acculynx.upsert_initial_appointment": {
      input: {
        /**
         * The unique identifier of the job.
         * @format uuid
         */
        jobId: string;
        /**
         * The appointment start datetime in UTC ISO 8601 format.
         * @format date-time
         */
        startDate: string;
        /**
         * The appointment end datetime in UTC ISO 8601 format.
         * @format date-time
         */
        endDate?: string;
        /** The notes stored on the initial appointment. */
        notes?: string;
      };
      output: {
        /** The initial appointment for one job. */
        initialAppointment: {
          /**
           * The canonical API URL for this resource.
           * @format uri
           */
          link: string;
          /**
           * The start datetime of the initial appointment.
           * @format date-time
           */
          startDate?: string;
          /**
           * The end datetime of the initial appointment.
           * @format date-time
           */
          endDate?: string;
          /** The notes stored on the initial appointment. */
          notes?: string;
        };
      };
    };
  }
}
