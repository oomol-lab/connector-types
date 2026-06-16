import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Eventzilla attendee by attendee identifier. */
    "eventzilla.get_attendee": {
      input: {
        /**
         * The Eventzilla attendee identifier.
         * @minimum 1
         */
        attendeeid: number;
      };
      output: {
        /** A normalized Eventzilla attendee. */
        attendee: {
          /**
           * The Eventzilla attendee identifier.
           * @minimum 1
           */
          id: number;
          /** The string value returned by Eventzilla when present. */
          first_name: string | null;
          /** The string value returned by Eventzilla when present. */
          last_name: string | null;
          /** The string value returned by Eventzilla when present. */
          ticket_type: string | null;
          /** The string value returned by Eventzilla when present. */
          bar_code: string | null;
          /** The string value returned by Eventzilla when present. */
          is_attended: string | null;
          /** The string value returned by Eventzilla when present. */
          transaction_ref: string | null;
          /** The string value returned by Eventzilla when present. */
          refno: string | null;
          /** The string value returned by Eventzilla when present. */
          transaction_date: string | null;
          /** The numeric value returned by Eventzilla when present. */
          transaction_amount: number | null;
          /** The string value returned by Eventzilla when present. */
          event_date: string | null;
          /** The string value returned by Eventzilla when present. */
          transaction_status: string | null;
          /** The integer value returned by Eventzilla when present. */
          user_id: number | null;
          /** The integer value returned by Eventzilla when present. */
          event_id: number | null;
          /** The string value returned by Eventzilla when present. */
          title: string | null;
          /** The string value returned by Eventzilla when present. */
          email: string | null;
          /** The string value returned by Eventzilla when present. */
          buyer_first_name: string | null;
          /** The string value returned by Eventzilla when present. */
          buyer_last_name: string | null;
          /** The string value returned by Eventzilla when present. */
          payment_type: string | null;
          /** The string value returned by Eventzilla when present. */
          promo_code: string | null;
          /** The attendee custom question responses returned by Eventzilla. */
          questions: Array<{
            /** The string value returned by Eventzilla when present. */
            questions: string | null;
            /** The string value returned by Eventzilla when present. */
            answer: string | null;
            /** The string value returned by Eventzilla when present. */
            questionid: string | null;
            /** The raw Eventzilla attendee question object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Eventzilla attendee object. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Get one Eventzilla event by its event identifier. */
    "eventzilla.get_event": {
      input: {
        /**
         * The Eventzilla event identifier.
         * @minimum 1
         */
        eventid: number;
      };
      output: {
        /** A normalized Eventzilla event. */
        event: {
          /**
           * The unique Eventzilla event identifier.
           * @minimum 1
           */
          id: number;
          /**
           * The Eventzilla event title.
           * @minLength 1
           * @pattern \S
           */
          title: string;
          /** The string value returned by Eventzilla when present. */
          description: string | null;
          /** The string value returned by Eventzilla when present. */
          currency: string | null;
          /** The string value returned by Eventzilla when present. */
          start_date: string | null;
          /** The string value returned by Eventzilla when present. */
          start_time: string | null;
          /** The string value returned by Eventzilla when present. */
          end_date: string | null;
          /** The string value returned by Eventzilla when present. */
          end_time: string | null;
          /** The integer value returned by Eventzilla when present. */
          dateid: number | null;
          /** The string value returned by Eventzilla when present. */
          time_zone: string | null;
          /** The integer value returned by Eventzilla when present. */
          tickets_sold: number | null;
          /** The integer value returned by Eventzilla when present. */
          tickets_total: number | null;
          /** The string value returned by Eventzilla when present. */
          status: string | null;
          /** The boolean value returned by Eventzilla when present. */
          show_remaining: boolean | null;
          /** The string value returned by Eventzilla when present. */
          twitter_hashtag: string | null;
          /** The string value returned by Eventzilla when present. */
          utc_offset: string | null;
          /** The string value returned by Eventzilla when present. */
          invite_code: string | null;
          /** The string value returned by Eventzilla when present. */
          url: string | null;
          /** The string value returned by Eventzilla when present. */
          logo_url: string | null;
          /** The string value returned by Eventzilla when present. */
          bgimage_url: string | null;
          /** The string value returned by Eventzilla when present. */
          venue: string | null;
          /** The string value returned by Eventzilla when present. */
          categories: string | null;
          /** The string value returned by Eventzilla when present. */
          language: string | null;
          /** The string value returned by Eventzilla when present. */
          description_html: string | null;
          /** The string value returned by Eventzilla when present. */
          timezone_code: string | null;
          /** The raw Eventzilla event object. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Get one Eventzilla transaction by checkout ID or order reference number. */
    "eventzilla.get_transaction": {
      input: {
        /**
         * The Eventzilla checkout identifier.
         * @minimum 1
         */
        checkout_id?: number;
        /**
         * The Eventzilla order reference number.
         * @minLength 1
         * @pattern \S
         */
        refno?: string;
      };
      output: {
        /** A normalized Eventzilla transaction. */
        transaction: {
          /**
           * The Eventzilla checkout identifier.
           * @minimum 1
           */
          checkout_id: number;
          /** The string value returned by Eventzilla when present. */
          transaction_ref: string | null;
          /** The string value returned by Eventzilla when present. */
          refno: string | null;
          /** The string value returned by Eventzilla when present. */
          transaction_date: string | null;
          /** The numeric value returned by Eventzilla when present. */
          transaction_amount: number | null;
          /** The integer value returned by Eventzilla when present. */
          tickets_in_transaction: number | null;
          /** The string value returned by Eventzilla when present. */
          event_date: string | null;
          /** The string value returned by Eventzilla when present. */
          transaction_status: string | null;
          /** The integer value returned by Eventzilla when present. */
          user_id: number | null;
          /** The integer value returned by Eventzilla when present. */
          buyer_id: number | null;
          /** The integer value returned by Eventzilla when present. */
          event_id: number | null;
          /** The string value returned by Eventzilla when present. */
          title: string | null;
          /** The string value returned by Eventzilla when present. */
          email: string | null;
          /** The string value returned by Eventzilla when present. */
          buyer_first_name: string | null;
          /** The string value returned by Eventzilla when present. */
          buyer_last_name: string | null;
          /** The string value returned by Eventzilla when present. */
          promo_code: string | null;
          /** The string value returned by Eventzilla when present. */
          payment_type: string | null;
          /** The string value returned by Eventzilla when present. */
          comments: string | null;
          /** The numeric value returned by Eventzilla when present. */
          transaction_tax: number | null;
          /** The numeric value returned by Eventzilla when present. */
          transaction_discount: number | null;
          /** The numeric value returned by Eventzilla when present. */
          eventzilla_fee: number | null;
          /** The raw Eventzilla transaction object. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Get one Eventzilla organizer or sub-organizer by user identifier. */
    "eventzilla.get_user": {
      input: {
        /**
         * The Eventzilla user identifier.
         * @minimum 1
         */
        userid: number;
      };
      output: {
        /** A normalized Eventzilla organizer or sub-organizer. */
        user: {
          /**
           * The Eventzilla user identifier.
           * @minimum 1
           */
          id: number;
          /** The string value returned by Eventzilla when present. */
          username: string | null;
          /** The string value returned by Eventzilla when present. */
          first_name: string | null;
          /** The string value returned by Eventzilla when present. */
          last_name: string | null;
          /** The string value returned by Eventzilla when present. */
          company: string | null;
          /** The string value returned by Eventzilla when present. */
          address_line1: string | null;
          /** The string value returned by Eventzilla when present. */
          address_line2: string | null;
          /** The string value returned by Eventzilla when present. */
          address_locality: string | null;
          /** The string value returned by Eventzilla when present. */
          address_region: string | null;
          /** The string value returned by Eventzilla when present. */
          address_country: string | null;
          /** The string value returned by Eventzilla when present. */
          zip_code: string | null;
          /** The string value returned by Eventzilla when present. */
          email: string | null;
          /** The string value returned by Eventzilla when present. */
          timezone: string | null;
          /** The string value returned by Eventzilla when present. */
          website: string | null;
          /** The string value returned by Eventzilla when present. */
          phone_primary: string | null;
          /** The string value returned by Eventzilla when present. */
          avatar_url: string | null;
          /** The string value returned by Eventzilla when present. */
          facebook_id: string | null;
          /** The string value returned by Eventzilla when present. */
          twitter_id: string | null;
          /** The string value returned by Eventzilla when present. */
          last_seen: string | null;
          /** The string value returned by Eventzilla when present. */
          user_type: string | null;
          /** The raw Eventzilla user object. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** List Eventzilla attendees for one event. */
    "eventzilla.list_event_attendees": {
      input: {
        /**
         * The Eventzilla event identifier.
         * @minimum 1
         */
        eventid: number;
        /**
         * The zero-based offset used for Eventzilla pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return for this Eventzilla request.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The attendees returned by Eventzilla for the requested event. */
        attendees: Array<{
          /**
           * The Eventzilla attendee identifier.
           * @minimum 1
           */
          id: number;
          /** The string value returned by Eventzilla when present. */
          first_name: string | null;
          /** The string value returned by Eventzilla when present. */
          last_name: string | null;
          /** The string value returned by Eventzilla when present. */
          ticket_type: string | null;
          /** The string value returned by Eventzilla when present. */
          bar_code: string | null;
          /** The string value returned by Eventzilla when present. */
          is_attended: string | null;
          /** The string value returned by Eventzilla when present. */
          transaction_ref: string | null;
          /** The string value returned by Eventzilla when present. */
          refno: string | null;
          /** The string value returned by Eventzilla when present. */
          transaction_date: string | null;
          /** The numeric value returned by Eventzilla when present. */
          transaction_amount: number | null;
          /** The string value returned by Eventzilla when present. */
          event_date: string | null;
          /** The string value returned by Eventzilla when present. */
          transaction_status: string | null;
          /** The integer value returned by Eventzilla when present. */
          user_id: number | null;
          /** The integer value returned by Eventzilla when present. */
          event_id: number | null;
          /** The string value returned by Eventzilla when present. */
          title: string | null;
          /** The string value returned by Eventzilla when present. */
          email: string | null;
          /** The string value returned by Eventzilla when present. */
          buyer_first_name: string | null;
          /** The string value returned by Eventzilla when present. */
          buyer_last_name: string | null;
          /** The string value returned by Eventzilla when present. */
          payment_type: string | null;
          /** The string value returned by Eventzilla when present. */
          promo_code: string | null;
          /** The attendee custom question responses returned by Eventzilla. */
          questions: Array<{
            /** The string value returned by Eventzilla when present. */
            questions: string | null;
            /** The string value returned by Eventzilla when present. */
            answer: string | null;
            /** The string value returned by Eventzilla when present. */
            questionid: string | null;
            /** The raw Eventzilla attendee question object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Eventzilla attendee object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Eventzilla ticket categories and donation entries for one event. */
    "eventzilla.list_event_tickets": {
      input: {
        /**
         * The Eventzilla event identifier.
         * @minimum 1
         */
        eventid: number;
      };
      output: {
        /** The ticket categories returned by Eventzilla. */
        tickets: Array<{
          /**
           * The unique Eventzilla ticket identifier.
           * @minimum 1
           */
          id: number;
          /**
           * The Eventzilla ticket title.
           * @minLength 1
           * @pattern \S
           */
          title: string;
          /** The integer value returned by Eventzilla when present. */
          quantity_total: number | null;
          /** The numeric value returned by Eventzilla when present. */
          price: number | null;
          /** The string value returned by Eventzilla when present. */
          description: string | null;
          /** The string value returned by Eventzilla when present. */
          sales_start_date: string | null;
          /** The string value returned by Eventzilla when present. */
          sales_start_time: string | null;
          /** The string value returned by Eventzilla when present. */
          sales_end_date: string | null;
          /** The string value returned by Eventzilla when present. */
          sales_end_time: string | null;
          /** The numeric value returned by Eventzilla when present. */
          group_discount: number | null;
          /** The numeric value returned by Eventzilla when present. */
          group_percentage: number | null;
          /** The numeric value returned by Eventzilla when present. */
          group_price: number | null;
          /** The string value returned by Eventzilla when present. */
          additional_instructions: string | null;
          /** The string value returned by Eventzilla when present. */
          unlock_code: string | null;
          /** The string value returned by Eventzilla when present. */
          ticket_type: string | null;
          /** The boolean value returned by Eventzilla when present. */
          boxoffice_only: boolean | null;
          /** The boolean value returned by Eventzilla when present. */
          is_visible: boolean | null;
          /** The integer value returned by Eventzilla when present. */
          limit_minimum: number | null;
          /** The integer value returned by Eventzilla when present. */
          limit_maximum: number | null;
          /** The boolean value returned by Eventzilla when present. */
          allow_partial_payment: boolean | null;
          /** The integer value returned by Eventzilla when present. */
          partial_payment_installments: number | null;
          /** The string value returned by Eventzilla when present. */
          partial_payment_frequency: string | null;
          /** The numeric value returned by Eventzilla when present. */
          partial_payment_amount: number | null;
          /** The raw Eventzilla ticket object. */
          raw: Record<string, unknown>;
        }>;
        /** The donation ticket entries returned by Eventzilla. */
        donation: Array<{
          /**
           * The unique Eventzilla donation ticket identifier.
           * @minimum 1
           */
          donationid: number;
          /**
           * The Eventzilla donation ticket title.
           * @minLength 1
           * @pattern \S
           */
          title: string;
          /** The string value returned by Eventzilla when present. */
          description: string | null;
          /** The integer value returned by Eventzilla when present. */
          quantity_total: number | null;
          /** The string value returned by Eventzilla when present. */
          donation_minimum: string | null;
          /** The string value returned by Eventzilla when present. */
          donation_start_date: string | null;
          /** The string value returned by Eventzilla when present. */
          donation_end_date: string | null;
          /** The raw Eventzilla donation object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Eventzilla transactions for one event. */
    "eventzilla.list_event_transactions": {
      input: {
        /**
         * The Eventzilla event identifier.
         * @minimum 1
         */
        eventid: number;
        /**
         * The zero-based offset used for Eventzilla pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return for this Eventzilla request.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Eventzilla pagination metadata. */
        pagination: {
          /** The current result offset reported by Eventzilla. */
          offset: number | null;
          /** The current page size reported by Eventzilla. */
          limit: number | null;
          /** The total number of matching records reported by Eventzilla. */
          total: number | null;
          /** The raw Eventzilla pagination array returned by the upstream API. */
          raw: Array<Record<string, unknown>>;
        };
        /** The transactions returned by Eventzilla for the requested event. */
        transactions: Array<{
          /**
           * The Eventzilla checkout identifier.
           * @minimum 1
           */
          checkout_id: number;
          /** The string value returned by Eventzilla when present. */
          transaction_ref: string | null;
          /** The string value returned by Eventzilla when present. */
          refno: string | null;
          /** The string value returned by Eventzilla when present. */
          transaction_date: string | null;
          /** The numeric value returned by Eventzilla when present. */
          transaction_amount: number | null;
          /** The integer value returned by Eventzilla when present. */
          tickets_in_transaction: number | null;
          /** The string value returned by Eventzilla when present. */
          event_date: string | null;
          /** The string value returned by Eventzilla when present. */
          transaction_status: string | null;
          /** The integer value returned by Eventzilla when present. */
          user_id: number | null;
          /** The integer value returned by Eventzilla when present. */
          buyer_id: number | null;
          /** The integer value returned by Eventzilla when present. */
          event_id: number | null;
          /** The string value returned by Eventzilla when present. */
          title: string | null;
          /** The string value returned by Eventzilla when present. */
          email: string | null;
          /** The string value returned by Eventzilla when present. */
          buyer_first_name: string | null;
          /** The string value returned by Eventzilla when present. */
          buyer_last_name: string | null;
          /** The string value returned by Eventzilla when present. */
          promo_code: string | null;
          /** The string value returned by Eventzilla when present. */
          payment_type: string | null;
          /** The string value returned by Eventzilla when present. */
          comments: string | null;
          /** The numeric value returned by Eventzilla when present. */
          transaction_tax: number | null;
          /** The numeric value returned by Eventzilla when present. */
          transaction_discount: number | null;
          /** The numeric value returned by Eventzilla when present. */
          eventzilla_fee: number | null;
          /** The raw Eventzilla transaction object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Eventzilla events visible to the authenticated organizer account with optional status or category filtering. */
    "eventzilla.list_events": {
      input: {
        /**
         * The zero-based offset used for Eventzilla pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return for this Eventzilla request.
         * @minimum 1
         */
        limit?: number;
        /**
         * Optional Eventzilla event status filter such as live or completed.
         * @minLength 1
         * @pattern \S
         */
        status?: string;
        /**
         * Optional Eventzilla category filter such as music or conference.
         * @minLength 1
         * @pattern \S
         */
        category?: string;
      };
      output: {
        /** Eventzilla pagination metadata. */
        pagination: {
          /** The current result offset reported by Eventzilla. */
          offset: number | null;
          /** The current page size reported by Eventzilla. */
          limit: number | null;
          /** The total number of matching records reported by Eventzilla. */
          total: number | null;
          /** The raw Eventzilla pagination array returned by the upstream API. */
          raw: Array<Record<string, unknown>>;
        };
        /** The Eventzilla events returned for this page. */
        events: Array<{
          /**
           * The unique Eventzilla event identifier.
           * @minimum 1
           */
          id: number;
          /**
           * The Eventzilla event title.
           * @minLength 1
           * @pattern \S
           */
          title: string;
          /** The string value returned by Eventzilla when present. */
          description: string | null;
          /** The string value returned by Eventzilla when present. */
          currency: string | null;
          /** The string value returned by Eventzilla when present. */
          start_date: string | null;
          /** The string value returned by Eventzilla when present. */
          start_time: string | null;
          /** The string value returned by Eventzilla when present. */
          end_date: string | null;
          /** The string value returned by Eventzilla when present. */
          end_time: string | null;
          /** The integer value returned by Eventzilla when present. */
          dateid: number | null;
          /** The string value returned by Eventzilla when present. */
          time_zone: string | null;
          /** The integer value returned by Eventzilla when present. */
          tickets_sold: number | null;
          /** The integer value returned by Eventzilla when present. */
          tickets_total: number | null;
          /** The string value returned by Eventzilla when present. */
          status: string | null;
          /** The boolean value returned by Eventzilla when present. */
          show_remaining: boolean | null;
          /** The string value returned by Eventzilla when present. */
          twitter_hashtag: string | null;
          /** The string value returned by Eventzilla when present. */
          utc_offset: string | null;
          /** The string value returned by Eventzilla when present. */
          invite_code: string | null;
          /** The string value returned by Eventzilla when present. */
          url: string | null;
          /** The string value returned by Eventzilla when present. */
          logo_url: string | null;
          /** The string value returned by Eventzilla when present. */
          bgimage_url: string | null;
          /** The string value returned by Eventzilla when present. */
          venue: string | null;
          /** The string value returned by Eventzilla when present. */
          categories: string | null;
          /** The string value returned by Eventzilla when present. */
          language: string | null;
          /** The string value returned by Eventzilla when present. */
          description_html: string | null;
          /** The string value returned by Eventzilla when present. */
          timezone_code: string | null;
          /** The raw Eventzilla event object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Eventzilla organizers and sub-organizers visible to the authenticated account. */
    "eventzilla.list_users": {
      input: {
        /**
         * The zero-based offset used for Eventzilla pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return for this Eventzilla request.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Eventzilla pagination metadata. */
        pagination: {
          /** The current result offset reported by Eventzilla. */
          offset: number | null;
          /** The current page size reported by Eventzilla. */
          limit: number | null;
          /** The total number of matching records reported by Eventzilla. */
          total: number | null;
          /** The raw Eventzilla pagination array returned by the upstream API. */
          raw: Array<Record<string, unknown>>;
        };
        /** The Eventzilla users returned for this page. */
        users: Array<{
          /**
           * The Eventzilla user identifier.
           * @minimum 1
           */
          id: number;
          /** The string value returned by Eventzilla when present. */
          username: string | null;
          /** The string value returned by Eventzilla when present. */
          first_name: string | null;
          /** The string value returned by Eventzilla when present. */
          last_name: string | null;
          /** The string value returned by Eventzilla when present. */
          company: string | null;
          /** The string value returned by Eventzilla when present. */
          address_line1: string | null;
          /** The string value returned by Eventzilla when present. */
          address_line2: string | null;
          /** The string value returned by Eventzilla when present. */
          address_locality: string | null;
          /** The string value returned by Eventzilla when present. */
          address_region: string | null;
          /** The string value returned by Eventzilla when present. */
          address_country: string | null;
          /** The string value returned by Eventzilla when present. */
          zip_code: string | null;
          /** The string value returned by Eventzilla when present. */
          email: string | null;
          /** The string value returned by Eventzilla when present. */
          timezone: string | null;
          /** The string value returned by Eventzilla when present. */
          website: string | null;
          /** The string value returned by Eventzilla when present. */
          phone_primary: string | null;
          /** The string value returned by Eventzilla when present. */
          avatar_url: string | null;
          /** The string value returned by Eventzilla when present. */
          facebook_id: string | null;
          /** The string value returned by Eventzilla when present. */
          twitter_id: string | null;
          /** The string value returned by Eventzilla when present. */
          last_seen: string | null;
          /** The string value returned by Eventzilla when present. */
          user_type: string | null;
          /** The raw Eventzilla user object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
