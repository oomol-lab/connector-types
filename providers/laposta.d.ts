import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Laposta mailing list. */
    "laposta.create_list": {
      input: {
        /**
         * List name.
         * @minLength 1
         */
        name: string;
        /** Whether the list is locked against changes in the application. */
        locked?: boolean;
        /** Optional remarks about the list. */
        remarks?: string;
        /**
         * Email address notified when a member subscribes.
         * @format email
         */
        subscribe_notification_email?: string;
        /**
         * Email address notified when a member unsubscribes.
         * @format email
         */
        unsubscribe_notification_email?: string;
      };
      output: {
        /** A Laposta mailing list. */
        list: {
          /**
           * Unique Laposta list ID.
           * @minLength 1
           */
          list_id: string;
          /** Current list state. */
          state: "active" | "deleted";
          /**
           * List name.
           * @minLength 1
           */
          name: string;
          /** Whether the list is locked against changes in the application. */
          locked: boolean;
          /** Laposta list member counts by state. */
          members: {
            /**
             * Number of active members.
             * @minimum 0
             */
            active: number;
            /**
             * Number of unsubscribed members.
             * @minimum 0
             */
            unsubscribed: number;
            /**
             * Number of cleaned members.
             * @minimum 0
             */
            cleaned: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Add a member to a Laposta mailing list. */
    "laposta.create_member": {
      input: {
        /**
         * ID of the list to which the member should be added.
         * @minLength 1
         */
        list_id: string;
        /**
         * IP address from which the member registered.
         * @minLength 1
         */
        ip: string;
        /**
         * Email address of the member to add.
         * @format email
         */
        email: string;
        /**
         * URL from which the member registered.
         * @format uri
         */
        source_url?: string;
        /** Custom field values keyed by Laposta custom_name. */
        custom_fields?: Record<string, unknown>;
        /** Laposta member creation options. */
        options?: {
          /** Update an existing active member with the same email address. */
          upsert?: boolean;
          /** Prevent an unsubscribed member from being reactivated during upsert. */
          suppress_reactivation?: boolean;
          /** Prevent Laposta from sending the API subscription notification email. */
          suppress_email_notification?: boolean;
          /** Activate the member immediately without sending a double opt-in confirmation. */
          ignore_doubleoptin?: boolean;
        };
      };
      output: {
        /** A Laposta mailing list member. */
        member: {
          /**
           * Unique Laposta member ID.
           * @minLength 1
           */
          member_id: string;
          /**
           * ID of the list containing the member.
           * @minLength 1
           */
          list_id: string;
          /**
           * Member email address.
           * @format email
           */
          email: string;
          /** Current member state. */
          state: "active" | "unsubscribed" | "unconfirmed" | "cleaned" | "deleted";
          /** Values of the list's custom fields for this member. */
          custom_fields: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Laposta mailing list by ID. */
    "laposta.get_list": {
      input: {
        /**
         * ID of the list to retrieve.
         * @minLength 1
         */
        list_id: string;
      };
      output: {
        /** A Laposta mailing list. */
        list: {
          /**
           * Unique Laposta list ID.
           * @minLength 1
           */
          list_id: string;
          /** Current list state. */
          state: "active" | "deleted";
          /**
           * List name.
           * @minLength 1
           */
          name: string;
          /** Whether the list is locked against changes in the application. */
          locked: boolean;
          /** Laposta list member counts by state. */
          members: {
            /**
             * Number of active members.
             * @minimum 0
             */
            active: number;
            /**
             * Number of unsubscribed members.
             * @minimum 0
             */
            unsubscribed: number;
            /**
             * Number of cleaned members.
             * @minimum 0
             */
            cleaned: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get one Laposta member by member ID or email address. */
    "laposta.get_member": {
      input: {
        /**
         * ID of the list containing the member.
         * @minLength 1
         */
        list_id: string;
        /**
         * Member ID or raw member email address.
         * @minLength 1
         */
        member_id: string;
      };
      output: {
        /** A Laposta mailing list member. */
        member: {
          /**
           * Unique Laposta member ID.
           * @minLength 1
           */
          member_id: string;
          /**
           * ID of the list containing the member.
           * @minLength 1
           */
          list_id: string;
          /**
           * Member email address.
           * @format email
           */
          email: string;
          /** Current member state. */
          state: "active" | "unsubscribed" | "unconfirmed" | "cleaned" | "deleted";
          /** Values of the list's custom fields for this member. */
          custom_fields: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List all mailing lists available to the authenticated Laposta account. */
    "laposta.list_lists": {
      input: Record<string, never>;
      output: {
        /** Lists returned by Laposta. */
        lists: Array<{
          /**
           * Unique Laposta list ID.
           * @minLength 1
           */
          list_id: string;
          /** Current list state. */
          state: "active" | "deleted";
          /**
           * List name.
           * @minLength 1
           */
          name: string;
          /** Whether the list is locked against changes in the application. */
          locked: boolean;
          /** Laposta list member counts by state. */
          members: {
            /**
             * Number of active members.
             * @minimum 0
             */
            active: number;
            /**
             * Number of unsubscribed members.
             * @minimum 0
             */
            unsubscribed: number;
            /**
             * Number of cleaned members.
             * @minimum 0
             */
            cleaned: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List members of a Laposta mailing list, optionally filtered by state. */
    "laposta.list_members": {
      input: {
        /**
         * ID of the list whose members should be returned.
         * @minLength 1
         */
        list_id: string;
        /** Member state filter. */
        state?: "active" | "unsubscribed" | "cleaned";
      };
      output: {
        /** Members returned by Laposta. */
        members: Array<{
          /**
           * Unique Laposta member ID.
           * @minLength 1
           */
          member_id: string;
          /**
           * ID of the list containing the member.
           * @minLength 1
           */
          list_id: string;
          /**
           * Member email address.
           * @format email
           */
          email: string;
          /** Current member state. */
          state: "active" | "unsubscribed" | "unconfirmed" | "cleaned" | "deleted";
          /** Values of the list's custom fields for this member. */
          custom_fields: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update selected fields on a Laposta mailing list. */
    "laposta.update_list": {
      input: {
        /**
         * ID of the list to update.
         * @minLength 1
         */
        list_id: string;
        /**
         * List name.
         * @minLength 1
         */
        name?: string;
        /** Whether the list is locked against changes in the application. */
        locked?: boolean;
        /** Optional remarks about the list. */
        remarks?: string;
        /**
         * Email address notified when a member subscribes.
         * @format email
         */
        subscribe_notification_email?: string;
        /**
         * Email address notified when a member unsubscribes.
         * @format email
         */
        unsubscribe_notification_email?: string;
      };
      output: {
        /** A Laposta mailing list. */
        list: {
          /**
           * Unique Laposta list ID.
           * @minLength 1
           */
          list_id: string;
          /** Current list state. */
          state: "active" | "deleted";
          /**
           * List name.
           * @minLength 1
           */
          name: string;
          /** Whether the list is locked against changes in the application. */
          locked: boolean;
          /** Laposta list member counts by state. */
          members: {
            /**
             * Number of active members.
             * @minimum 0
             */
            active: number;
            /**
             * Number of unsubscribed members.
             * @minimum 0
             */
            unsubscribed: number;
            /**
             * Number of cleaned members.
             * @minimum 0
             */
            cleaned: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Update selected fields on a Laposta mailing list member. */
    "laposta.update_member": {
      input: {
        /**
         * ID of the list containing the member.
         * @minLength 1
         */
        list_id: string;
        /**
         * Member ID or raw member email address.
         * @minLength 1
         */
        member_id: string;
        /**
         * Member email address.
         * @format email
         */
        email?: string;
        /** New member state. */
        state?: "active" | "unsubscribed";
        /** Custom field values keyed by Laposta custom_name. */
        custom_fields?: Record<string, unknown>;
      };
      output: {
        /** A Laposta mailing list member. */
        member: {
          /**
           * Unique Laposta member ID.
           * @minLength 1
           */
          member_id: string;
          /**
           * ID of the list containing the member.
           * @minLength 1
           */
          list_id: string;
          /**
           * Member email address.
           * @format email
           */
          email: string;
          /** Current member state. */
          state: "active" | "unsubscribed" | "unconfirmed" | "cleaned" | "deleted";
          /** Values of the list's custom fields for this member. */
          custom_fields: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
