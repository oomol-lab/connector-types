import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a CallPage callback request for one widget and phone number. */
    "callpage.create_widget_call": {
      input: {
        /**
         * The CallPage widget identifier.
         * @exclusiveMinimum 0
         */
        widget_id: number;
        /**
         * The phone number to call in E.164 format.
         * @minLength 1
         */
        tel: string;
        /**
         * The CallPage department identifier.
         * @exclusiveMinimum 0
         */
        department_id?: number;
        /**
         * The CallPage manager identifier.
         * @exclusiveMinimum 0
         */
        manager_id?: number;
      };
      output: {
        /** The CallPage callback request identifier. */
        call_request_id: number;
      };
    };
    /** Get one CallPage call by identifier. */
    "callpage.get_call": {
      input: {
        /**
         * The CallPage call identifier.
         * @exclusiveMinimum 0
         */
        call_id: number;
      };
      output: {
        /** A CallPage call history entry as returned by the API. */
        call: {
          /** The CallPage call history entry identifier. */
          id?: number;
          /** The nested CallPage call payload returned by the API. */
          data?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one CallPage user by identifier or email address. */
    "callpage.get_user": {
      input: {
        /**
         * The CallPage user identifier.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * The CallPage user email address.
         * @format email
         */
        email?: string;
      };
      output: {
        /** A CallPage user record. */
        user: {
          /** The CallPage user identifier. */
          id: number;
          /** The CallPage user name. */
          name?: string;
          /** The CallPage user email address. */
          email?: string;
          /** The CallPage user phone number. */
          tel?: string;
          /** The formatted CallPage user phone number. */
          tel_formatted?: string;
          /** The CallPage user phone extension. */
          tel_extension?: string | null;
          /** The last time the CallPage user was online. */
          last_online?: string | null;
          /** The parent user identifier in CallPage. */
          parent_id?: number;
          /** The CallPage user activation timestamp. */
          activated_at?: string;
          /** A CallPage user role summary. */
          role?: {
            /** The CallPage role slug. */
            slug?: string;
            [key: string]: unknown;
          };
          /** The CallPage user avatar URL. */
          avatar?: string | null;
          /** A CallPage caller ID object. */
          caller_id?: {
            /** The CallPage caller ID identifier. */
            id?: number;
            /** The CallPage caller ID activation timestamp. */
            activated_at?: string | null;
            /** The CallPage caller ID update timestamp. */
            updated_at?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get one CallPage widget by identifier. */
    "callpage.get_widget": {
      input: {
        /**
         * The CallPage widget identifier.
         * @exclusiveMinimum 0
         */
        widget_id: number;
      };
      output: {
        /** A CallPage widget record. */
        widget: {
          /** The CallPage widget identifier. */
          id: number;
          /** The CallPage widget description. */
          description?: string;
          /** The installation URL configured for the CallPage widget. */
          url?: string;
          /** Whether the CallPage widget is enabled. */
          enabled?: boolean;
          /** The locale code configured for the CallPage widget. */
          locale_code?: string;
          /** The CallPage widget installation status code. */
          installation_status?: number;
          /** The CallPage widget installation timestamp. */
          installed_at?: string | null;
          /** The company SMS sender name for the widget. */
          company_sms_name?: string | null;
          /** The number of call requests recorded for the widget. */
          call_requests_count?: number;
          /** The widget managers returned by CallPage. */
          managers?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List CallPage calls with optional filters such as widget, user, status, phone number, and time range. */
    "callpage.list_calls": {
      input: {
        /** Whether hidden CallPage calls should be included. */
        display_hidden?: boolean;
        /**
         * The CallPage call identifiers to filter by.
         * @minItems 1
         */
        call_ids?: Array<number>;
        /**
         * The phone number to filter by in E.164 format.
         * @minLength 1
         */
        phone_number?: string;
        /**
         * The CallPage user identifiers to filter by.
         * @minItems 1
         */
        user_ids?: Array<number>;
        /**
         * The CallPage human status slugs to filter by.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * The CallPage tag identifiers to filter by.
         * @minItems 1
         */
        tag_ids?: Array<number>;
        /**
         * The inclusive CallPage start timestamp filter.
         * @exclusiveMinimum 0
         */
        date_from?: number;
        /**
         * The inclusive CallPage end timestamp filter.
         * @exclusiveMinimum 0
         */
        date_to?: number;
        /**
         * The CallPage widget identifiers to filter by.
         * @minItems 1
         */
        widget_ids?: Array<number>;
        /**
         * The maximum number of CallPage calls to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The CallPage offset for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * The widget installation URL to filter by.
         * @minLength 1
         */
        url?: string;
        /**
         * The incoming CallPage number identifiers to filter by.
         * @minItems 1
         */
        incoming_number_ids?: Array<number>;
      };
      output: {
        /** The CallPage calls returned by the history query. */
        calls: Array<{
          /** The CallPage call history entry identifier. */
          id?: number;
          /** The nested CallPage call payload returned by the API. */
          data?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by CallPage list endpoints. */
        pagination?: {
          /** The current CallPage offset value. */
          offset?: number | string;
          /** The current CallPage limit value. */
          limit?: number | string;
          /** The total number of items matching the query. */
          count?: number | string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List CallPage users with pagination. */
    "callpage.list_users": {
      input: {
        /**
         * The CallPage offset for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of CallPage users to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The CallPage users returned by the list endpoint. */
        users: Array<{
          /** The CallPage user identifier. */
          id: number;
          /** The CallPage user name. */
          name?: string;
          /** The CallPage user email address. */
          email?: string;
          /** The CallPage user phone number. */
          tel?: string;
          /** The formatted CallPage user phone number. */
          tel_formatted?: string;
          /** The CallPage user phone extension. */
          tel_extension?: string | null;
          /** The last time the CallPage user was online. */
          last_online?: string | null;
          /** The parent user identifier in CallPage. */
          parent_id?: number;
          /** The CallPage user activation timestamp. */
          activated_at?: string;
          /** A CallPage user role summary. */
          role?: {
            /** The CallPage role slug. */
            slug?: string;
            [key: string]: unknown;
          };
          /** The CallPage user avatar URL. */
          avatar?: string | null;
          /** A CallPage caller ID object. */
          caller_id?: {
            /** The CallPage caller ID identifier. */
            id?: number;
            /** The CallPage caller ID activation timestamp. */
            activated_at?: string | null;
            /** The CallPage caller ID update timestamp. */
            updated_at?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by CallPage list endpoints. */
        pagination?: {
          /** The current CallPage offset value. */
          offset?: number | string;
          /** The current CallPage limit value. */
          limit?: number | string;
          /** The total number of items matching the query. */
          count?: number | string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List CallPage widgets with pagination. */
    "callpage.list_widgets": {
      input: {
        /**
         * The CallPage offset for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of CallPage widgets to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The CallPage widgets returned by the list endpoint. */
        widgets: Array<{
          /** The CallPage widget identifier. */
          id: number;
          /** The CallPage widget description. */
          description?: string;
          /** The installation URL configured for the CallPage widget. */
          url?: string;
          /** Whether the CallPage widget is enabled. */
          enabled?: boolean;
          /** The locale code configured for the CallPage widget. */
          locale_code?: string;
          /** The CallPage widget installation status code. */
          installation_status?: number;
          /** The CallPage widget installation timestamp. */
          installed_at?: string | null;
          /** The company SMS sender name for the widget. */
          company_sms_name?: string | null;
          /** The number of call requests recorded for the widget. */
          call_requests_count?: number;
          /** The widget managers returned by CallPage. */
          managers?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by CallPage list endpoints. */
        pagination?: {
          /** The current CallPage offset value. */
          offset?: number | string;
          /** The current CallPage limit value. */
          limit?: number | string;
          /** The total number of items matching the query. */
          count?: number | string;
          [key: string]: unknown;
        } | null;
      };
    };
  }
}
