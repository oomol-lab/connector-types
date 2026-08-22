import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel an Acuity Scheduling appointment. */
    "acuity_scheduling.cancel_appointment": {
      input: {
        /**
         * The numeric appointment ID to cancel.
         * @exclusiveMinimum 0
         */
        appointmentId: number;
        /** The message sent with cancellation notifications. */
        cancelNote?: string;
        /** Whether the cancellation should mark the client as a no-show. */
        noShow?: boolean;
        /** Whether Acuity should apply administrative scheduling privileges. */
        admin?: boolean;
        /** Whether Acuity should suppress appointment email and SMS notifications. */
        noEmail?: boolean;
      };
      output: {
        /** A normalized Acuity Scheduling appointment. */
        appointment: {
          /**
           * The numeric Acuity Scheduling resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The client first name when returned. */
          firstName: string | null;
          /** The client last name when returned. */
          lastName: string | null;
          /** The client email address when returned. */
          email: string | null;
          /** The client phone number when returned. */
          phone: string | null;
          /** The appointment date and time when returned. */
          datetime: string | null;
          /** The appointment date when returned. */
          date: string | null;
          /** The appointment start time when returned. */
          time: string | null;
          /** The appointment end time when returned. */
          endTime: string | null;
          /** The appointment timezone when returned. */
          timezone: string | null;
          /** The appointment type name when returned. */
          type: string | null;
          /** The numeric appointment type ID when returned. */
          appointmentTypeId: number | null;
          /** The calendar name when returned. */
          calendar: string | null;
          /** The numeric calendar ID when returned. */
          calendarId: number | null;
          /** The appointment duration in minutes when returned. */
          duration: number | null;
          /** Whether the appointment is canceled. */
          canceled: boolean;
          /** Whether the appointment is marked as a no-show. */
          noShow: boolean;
          /** The appointment notes when returned. */
          notes: string | null;
          /** The labels returned for the appointment. */
          labels: Array<unknown>;
          /** The intake form answers returned for the appointment. */
          forms: Array<Record<string, unknown>>;
          /** The raw appointment object returned by Acuity Scheduling. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create an appointment in Acuity Scheduling. */
    "acuity_scheduling.create_appointment": {
      input: {
        /**
         * The appointment start date and time.
         * @minLength 1
         */
        datetime: string;
        /**
         * The numeric appointment type ID.
         * @exclusiveMinimum 0
         */
        appointmentTypeId: number;
        /**
         * The numeric appointment calendar ID.
         * @exclusiveMinimum 0
         */
        calendarId?: number;
        /**
         * The appointment timezone.
         * @minLength 1
         */
        timezone?: string;
        /** The add-on IDs to include for this appointment or availability query. */
        addonIds?: Array<number>;
        /**
         * The client first name.
         * @minLength 1
         */
        firstName: string;
        /**
         * The client last name.
         * @minLength 1
         */
        lastName: string;
        /**
         * The client email address.
         * @format email
         */
        email?: string;
        /**
         * The client phone number.
         * @minLength 1
         */
        phone?: string;
        /**
         * The package, coupon, or gift certificate code to redeem.
         * @minLength 1
         */
        certificate?: string;
        /** The intake form answers submitted with the appointment. */
        fields?: Array<{
          /**
           * The numeric Acuity Scheduling intake field ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The answer submitted for the intake field. */
          value: string;
        }>;
        /** Administrative notes attached to the appointment. */
        notes?: string;
        /**
         * The label applied to the appointment. Acuity currently accepts at most one label.
         * @maxItems 1
         */
        labels?: Array<{
          /**
           * The numeric Acuity Scheduling label ID.
           * @exclusiveMinimum 0
           */
          id: number;
        }>;
        /** Whether the client opts in to Acuity SMS notifications. */
        smsOptIn?: boolean;
        /** Whether Acuity should apply administrative scheduling privileges. */
        admin?: boolean;
        /** Whether Acuity should suppress appointment email and SMS notifications. */
        noEmail?: boolean;
      };
      output: {
        /** A normalized Acuity Scheduling appointment. */
        appointment: {
          /**
           * The numeric Acuity Scheduling resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The client first name when returned. */
          firstName: string | null;
          /** The client last name when returned. */
          lastName: string | null;
          /** The client email address when returned. */
          email: string | null;
          /** The client phone number when returned. */
          phone: string | null;
          /** The appointment date and time when returned. */
          datetime: string | null;
          /** The appointment date when returned. */
          date: string | null;
          /** The appointment start time when returned. */
          time: string | null;
          /** The appointment end time when returned. */
          endTime: string | null;
          /** The appointment timezone when returned. */
          timezone: string | null;
          /** The appointment type name when returned. */
          type: string | null;
          /** The numeric appointment type ID when returned. */
          appointmentTypeId: number | null;
          /** The calendar name when returned. */
          calendar: string | null;
          /** The numeric calendar ID when returned. */
          calendarId: number | null;
          /** The appointment duration in minutes when returned. */
          duration: number | null;
          /** Whether the appointment is canceled. */
          canceled: boolean;
          /** Whether the appointment is marked as a no-show. */
          noShow: boolean;
          /** The appointment notes when returned. */
          notes: string | null;
          /** The labels returned for the appointment. */
          labels: Array<unknown>;
          /** The intake form answers returned for the appointment. */
          forms: Array<Record<string, unknown>>;
          /** The raw appointment object returned by Acuity Scheduling. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve the Acuity Scheduling account associated with the credential. */
    "acuity_scheduling.get_account": {
      input: Record<string, never>;
      output: {
        /** A normalized Acuity Scheduling account. */
        account: {
          /**
           * The numeric Acuity Scheduling resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The account display name when returned by Acuity. */
          name: string | null;
          /** The account email address when returned by Acuity. */
          email: string | null;
          /** The account timezone when returned by Acuity. */
          timezone: string | null;
          /** The account currency code when returned by Acuity. */
          currency: string | null;
          /** The public scheduling page URL when returned by Acuity. */
          schedulingPage: string | null;
          /** The Acuity subscription plan when returned. */
          plan: string | null;
          /** The raw account object returned by Acuity Scheduling. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Acuity Scheduling appointment by ID. */
    "acuity_scheduling.get_appointment": {
      input: {
        /**
         * The numeric Acuity Scheduling appointment ID.
         * @exclusiveMinimum 0
         */
        appointmentId: number;
        /** Whether previous intake form answers should be included. */
        pastFormAnswers?: boolean;
      };
      output: {
        /** A normalized Acuity Scheduling appointment. */
        appointment: {
          /**
           * The numeric Acuity Scheduling resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The client first name when returned. */
          firstName: string | null;
          /** The client last name when returned. */
          lastName: string | null;
          /** The client email address when returned. */
          email: string | null;
          /** The client phone number when returned. */
          phone: string | null;
          /** The appointment date and time when returned. */
          datetime: string | null;
          /** The appointment date when returned. */
          date: string | null;
          /** The appointment start time when returned. */
          time: string | null;
          /** The appointment end time when returned. */
          endTime: string | null;
          /** The appointment timezone when returned. */
          timezone: string | null;
          /** The appointment type name when returned. */
          type: string | null;
          /** The numeric appointment type ID when returned. */
          appointmentTypeId: number | null;
          /** The calendar name when returned. */
          calendar: string | null;
          /** The numeric calendar ID when returned. */
          calendarId: number | null;
          /** The appointment duration in minutes when returned. */
          duration: number | null;
          /** Whether the appointment is canceled. */
          canceled: boolean;
          /** Whether the appointment is marked as a no-show. */
          noShow: boolean;
          /** The appointment notes when returned. */
          notes: string | null;
          /** The labels returned for the appointment. */
          labels: Array<unknown>;
          /** The intake form answers returned for the appointment. */
          forms: Array<Record<string, unknown>>;
          /** The raw appointment object returned by Acuity Scheduling. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List appointment types configured in Acuity Scheduling. */
    "acuity_scheduling.list_appointment_types": {
      input: {
        /** Whether deleted appointment types should be included. */
        includeDeleted?: boolean;
      };
      output: {
        /** Appointment types returned by Acuity Scheduling. */
        appointmentTypes: Array<{
          /**
           * The numeric Acuity Scheduling resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The appointment type name. */
          name: string;
          /** The appointment duration in minutes when returned. */
          duration: number | null;
          /** The appointment price as returned by Acuity. */
          price: string | null;
          /** The appointment type category when returned. */
          category: string | null;
          /** Whether the appointment type is active when returned. */
          active: boolean | null;
          /** The raw appointment type object returned by Acuity Scheduling. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Acuity Scheduling appointments with optional client and date filters. */
    "acuity_scheduling.list_appointments": {
      input: {
        /**
         * The maximum number of appointments to return.
         * @exclusiveMinimum 0
         */
        max?: number;
        /**
         * The earliest appointment date to return.
         * @format date
         */
        minDate?: string;
        /**
         * The latest appointment date to return.
         * @format date
         */
        maxDate?: string;
        /**
         * The calendar ID used to filter appointments.
         * @exclusiveMinimum 0
         */
        calendarId?: number;
        /**
         * The appointment type ID used to filter appointments.
         * @exclusiveMinimum 0
         */
        appointmentTypeId?: number;
        /** Whether to return canceled appointments. */
        canceled?: boolean;
        /** Whether to return both scheduled and canceled appointments. */
        showAll?: boolean;
        /**
         * The client first name used to filter appointments.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The client last name used to filter appointments.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The client email used to filter appointments.
         * @format email
         */
        email?: string;
        /**
         * The client phone number used to filter appointments.
         * @minLength 1
         */
        phone?: string;
        /** Whether intake form answers should be omitted. */
        excludeForms?: boolean;
        /** The chronological sort direction. */
        direction?: "ASC" | "DESC";
      };
      output: {
        /** Appointments returned by Acuity Scheduling. */
        appointments: Array<{
          /**
           * The numeric Acuity Scheduling resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The client first name when returned. */
          firstName: string | null;
          /** The client last name when returned. */
          lastName: string | null;
          /** The client email address when returned. */
          email: string | null;
          /** The client phone number when returned. */
          phone: string | null;
          /** The appointment date and time when returned. */
          datetime: string | null;
          /** The appointment date when returned. */
          date: string | null;
          /** The appointment start time when returned. */
          time: string | null;
          /** The appointment end time when returned. */
          endTime: string | null;
          /** The appointment timezone when returned. */
          timezone: string | null;
          /** The appointment type name when returned. */
          type: string | null;
          /** The numeric appointment type ID when returned. */
          appointmentTypeId: number | null;
          /** The calendar name when returned. */
          calendar: string | null;
          /** The numeric calendar ID when returned. */
          calendarId: number | null;
          /** The appointment duration in minutes when returned. */
          duration: number | null;
          /** Whether the appointment is canceled. */
          canceled: boolean;
          /** Whether the appointment is marked as a no-show. */
          noShow: boolean;
          /** The appointment notes when returned. */
          notes: string | null;
          /** The labels returned for the appointment. */
          labels: Array<unknown>;
          /** The intake form answers returned for the appointment. */
          forms: Array<Record<string, unknown>>;
          /** The raw appointment object returned by Acuity Scheduling. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List available Acuity Scheduling dates for a month and appointment type. */
    "acuity_scheduling.list_available_dates": {
      input: {
        /**
         * The month to query in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /**
         * The appointment type ID used to check availability.
         * @exclusiveMinimum 0
         */
        appointmentTypeId: number;
        /**
         * The calendar ID used to limit availability.
         * @exclusiveMinimum 0
         */
        calendarId?: number;
        /** The add-on IDs to include for this appointment or availability query. */
        addonIds?: Array<number>;
        /**
         * The timezone used to return available dates and times.
         * @minLength 1
         */
        timezone?: string;
      };
      output: {
        /** Available dates returned by Acuity Scheduling. */
        dates: Array<string>;
      };
    };
    /** List available Acuity Scheduling times for a date and appointment type. */
    "acuity_scheduling.list_available_times": {
      input: {
        /**
         * The date to query in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /**
         * The appointment type ID used to check availability.
         * @exclusiveMinimum 0
         */
        appointmentTypeId: number;
        /**
         * The calendar ID used to limit availability.
         * @exclusiveMinimum 0
         */
        calendarId?: number;
        /** The add-on IDs to include for this appointment or availability query. */
        addonIds?: Array<number>;
        /**
         * The timezone used to return available dates and times.
         * @minLength 1
         */
        timezone?: string;
        /** Appointment IDs Acuity should ignore while checking availability. */
        ignoreAppointmentIds?: Array<number>;
      };
      output: {
        /** Available times returned by Acuity Scheduling. */
        times: Array<string>;
      };
    };
    /** List calendars configured in the Acuity Scheduling account. */
    "acuity_scheduling.list_calendars": {
      input: Record<string, never>;
      output: {
        /** Calendars returned by Acuity Scheduling. */
        calendars: Array<{
          /**
           * The numeric Acuity Scheduling resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The calendar name. */
          name: string;
          /** The calendar notification email when returned. */
          email: string | null;
          /** The calendar timezone when returned. */
          timezone: string | null;
          /** The calendar description when returned. */
          description: string | null;
          /** The raw calendar object returned by Acuity Scheduling. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List intake forms configured in Acuity Scheduling. */
    "acuity_scheduling.list_intake_forms": {
      input: Record<string, never>;
      output: {
        /** Intake forms returned by Acuity Scheduling. */
        forms: Array<{
          /**
           * The numeric Acuity Scheduling resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The intake form name. */
          name: string;
          /** The intake form description when returned. */
          description: string | null;
          /** The raw field definitions included in the intake form. */
          fields: Array<Record<string, unknown>>;
          /** The raw intake form object returned by Acuity Scheduling. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Reschedule an Acuity appointment to a new date and time. */
    "acuity_scheduling.reschedule_appointment": {
      input: {
        /**
         * The numeric appointment ID to reschedule.
         * @exclusiveMinimum 0
         */
        appointmentId: number;
        /**
         * The new appointment start date and time.
         * @minLength 1
         */
        datetime: string;
        /**
         * The new calendar ID, or null to let Acuity choose an available calendar.
         * @exclusiveMinimum 0
         */
        calendarId?: number | null;
        /**
         * The timezone for the new appointment time.
         * @minLength 1
         */
        timezone?: string;
        /** Whether Acuity should apply administrative scheduling privileges. */
        admin?: boolean;
        /** Whether Acuity should suppress appointment email and SMS notifications. */
        noEmail?: boolean;
      };
      output: {
        /** A normalized Acuity Scheduling appointment. */
        appointment: {
          /**
           * The numeric Acuity Scheduling resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The client first name when returned. */
          firstName: string | null;
          /** The client last name when returned. */
          lastName: string | null;
          /** The client email address when returned. */
          email: string | null;
          /** The client phone number when returned. */
          phone: string | null;
          /** The appointment date and time when returned. */
          datetime: string | null;
          /** The appointment date when returned. */
          date: string | null;
          /** The appointment start time when returned. */
          time: string | null;
          /** The appointment end time when returned. */
          endTime: string | null;
          /** The appointment timezone when returned. */
          timezone: string | null;
          /** The appointment type name when returned. */
          type: string | null;
          /** The numeric appointment type ID when returned. */
          appointmentTypeId: number | null;
          /** The calendar name when returned. */
          calendar: string | null;
          /** The numeric calendar ID when returned. */
          calendarId: number | null;
          /** The appointment duration in minutes when returned. */
          duration: number | null;
          /** Whether the appointment is canceled. */
          canceled: boolean;
          /** Whether the appointment is marked as a no-show. */
          noShow: boolean;
          /** The appointment notes when returned. */
          notes: string | null;
          /** The labels returned for the appointment. */
          labels: Array<unknown>;
          /** The intake form answers returned for the appointment. */
          forms: Array<Record<string, unknown>>;
          /** The raw appointment object returned by Acuity Scheduling. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update client details, forms, notes, or labels on an Acuity appointment. */
    "acuity_scheduling.update_appointment": {
      input: {
        /**
         * The numeric appointment ID to update.
         * @exclusiveMinimum 0
         */
        appointmentId: number;
        /**
         * The client first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The client last name.
         * @minLength 1
         */
        lastName?: string;
        /** The client email address, or an empty string when admin is true. */
        email?: string | "";
        /** The client phone number, or an empty string when admin is true. */
        phone?: string;
        /**
         * The package, coupon, or gift certificate code to redeem.
         * @minLength 1
         */
        certificate?: string;
        /** The intake form answers submitted with the appointment. */
        fields?: Array<{
          /**
           * The numeric Acuity Scheduling intake field ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The answer submitted for the intake field. */
          value: string;
        }>;
        /** Administrative notes attached to the appointment. */
        notes?: string;
        /**
         * The label applied to the appointment. Acuity currently accepts at most one label.
         * @maxItems 1
         */
        labels?: Array<{
          /**
           * The numeric Acuity Scheduling label ID.
           * @exclusiveMinimum 0
           */
          id: number;
        }>;
        /** Whether the client opts in to Acuity SMS notifications. */
        smsOptIn?: boolean;
        /** Whether Acuity should apply administrative scheduling privileges. */
        admin?: boolean;
      };
      output: {
        /** A normalized Acuity Scheduling appointment. */
        appointment: {
          /**
           * The numeric Acuity Scheduling resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The client first name when returned. */
          firstName: string | null;
          /** The client last name when returned. */
          lastName: string | null;
          /** The client email address when returned. */
          email: string | null;
          /** The client phone number when returned. */
          phone: string | null;
          /** The appointment date and time when returned. */
          datetime: string | null;
          /** The appointment date when returned. */
          date: string | null;
          /** The appointment start time when returned. */
          time: string | null;
          /** The appointment end time when returned. */
          endTime: string | null;
          /** The appointment timezone when returned. */
          timezone: string | null;
          /** The appointment type name when returned. */
          type: string | null;
          /** The numeric appointment type ID when returned. */
          appointmentTypeId: number | null;
          /** The calendar name when returned. */
          calendar: string | null;
          /** The numeric calendar ID when returned. */
          calendarId: number | null;
          /** The appointment duration in minutes when returned. */
          duration: number | null;
          /** Whether the appointment is canceled. */
          canceled: boolean;
          /** Whether the appointment is marked as a no-show. */
          noShow: boolean;
          /** The appointment notes when returned. */
          notes: string | null;
          /** The labels returned for the appointment. */
          labels: Array<unknown>;
          /** The intake form answers returned for the appointment. */
          forms: Array<Record<string, unknown>>;
          /** The raw appointment object returned by Acuity Scheduling. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
