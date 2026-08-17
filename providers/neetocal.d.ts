import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one NeetoCal booking by SID. */
    "neetocal.get_booking": {
      input: {
        /**
         * The NeetoCal record identifier or SID.
         * @minLength 1
         * @pattern \S
         */
        bookingSid: string;
      };
      output: {
        /** The unique booking identifier. */
        id?: string;
        /** The short booking identifier used by API paths. */
        sid?: string;
        /** The booking client name. */
        name?: string;
        /** The booking client email address. */
        email?: string;
        /** The booking start timestamp. */
        starts_at?: string;
        /** The booking end timestamp. */
        ends_at?: string;
        /** The current booking lifecycle status. */
        status?: string;
        /** The related scheduling-link identifier. */
        meeting_id?: string;
        [key: string]: unknown;
      };
    };
    /** Get one NeetoCal scheduling link by SID. */
    "neetocal.get_scheduling_link": {
      input: {
        /**
         * The NeetoCal record identifier or SID.
         * @minLength 1
         * @pattern \S
         */
        schedulingLinkSid: string;
      };
      output: {
        /** The unique scheduling-link identifier. */
        id?: string;
        /** The short scheduling-link identifier used by API paths. */
        sid?: string;
        /** The scheduling-link display name. */
        name?: string;
        /** The scheduling-link URL slug. */
        slug?: string;
        /** The scheduling-link meeting kind. */
        kind?: string;
        /** Whether the scheduling link is disabled. */
        disabled?: boolean;
        [key: string]: unknown;
      };
    };
    /** List available NeetoCal slots for a scheduling link and calendar month. */
    "neetocal.list_available_slots": {
      input: {
        /**
         * The NeetoCal record identifier or SID.
         * @minLength 1
         * @pattern \S
         */
        schedulingLinkSid: string;
        /**
         * The IANA time zone used to calculate available slots.
         * @minLength 1
         * @pattern \S
         */
        timeZone: string;
        /** The calendar year to query. */
        year: number;
        /**
         * The calendar month to query.
         * @minimum 1
         * @maximum 12
         */
        month: number;
        /**
         * The optional day of month used to narrow slot results.
         * @minimum 1
         * @maximum 31
         */
        day?: number;
      };
      output: {
        /** Available slot groups returned by NeetoCal. */
        slots: Array<{
          /** The calendar date for the slot group. */
          date?: string;
          /** The day of month for the slot group. */
          day?: number;
          /** The raw object returned by NeetoCal. */
          slots?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List NeetoCal bookings with optional type, email, parent, sorting, and pagination filters. */
    "neetocal.list_bookings": {
      input: {
        /** The booking time or lifecycle group to return. */
        type?: "upcoming" | "past" | "cancelled" | "incomplete";
        /**
         * The 1-based result page to fetch.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The email address used to filter results.
         * @minLength 1
         * @format email
         */
        hostEmail?: string;
        /**
         * The email address used to filter results.
         * @minLength 1
         * @format email
         */
        clientEmail?: string;
        /**
         * The NeetoCal record identifier or SID.
         * @minLength 1
         * @pattern \S
         */
        parentBookingId?: string;
        /** The booking creation-time sorting direction. */
        sortingOrder?: "asc" | "desc";
      };
      output: {
        /** The bookings returned by NeetoCal. */
        bookings: Array<{
          /** The unique booking identifier. */
          id?: string;
          /** The short booking identifier used by API paths. */
          sid?: string;
          /** The booking client name. */
          name?: string;
          /** The booking client email address. */
          email?: string;
          /** The booking start timestamp. */
          starts_at?: string;
          /** The booking end timestamp. */
          ends_at?: string;
          /** The current booking lifecycle status. */
          status?: string;
          /** The related scheduling-link identifier. */
          meeting_id?: string;
          [key: string]: unknown;
        }>;
        /** NeetoCal pagination metadata. */
        pagination: {
          /** The total number of matching records. */
          total_records?: number;
          /** The total number of result pages. */
          total_pages?: number;
          /** The current 1-based page number. */
          current_page_number?: number;
          /** The configured result page size. */
          page_size?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List NeetoCal scheduling links with optional host, search, and pagination filters. */
    "neetocal.list_scheduling_links": {
      input: {
        /**
         * The 1-based result page to fetch.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The host email addresses used to filter scheduling links.
         * @minItems 1
         */
        hostEmails?: Array<string>;
        /**
         * The case-insensitive meeting name or slug search term.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
      };
      output: {
        /** The scheduling links returned by NeetoCal. */
        meetings: Array<{
          /** The unique scheduling-link identifier. */
          id?: string;
          /** The short scheduling-link identifier used by API paths. */
          sid?: string;
          /** The scheduling-link display name. */
          name?: string;
          /** The scheduling-link URL slug. */
          slug?: string;
          /** The scheduling-link meeting kind. */
          kind?: string;
          /** Whether the scheduling link is disabled. */
          disabled?: boolean;
          [key: string]: unknown;
        }>;
        /** NeetoCal pagination metadata. */
        pagination: {
          /** The total number of matching records. */
          total_records?: number;
          /** The total number of result pages. */
          total_pages?: number;
          /** The current 1-based page number. */
          current_page_number?: number;
          /** The configured result page size. */
          page_size?: number;
          [key: string]: unknown;
        } | null;
      };
    };
  }
}
