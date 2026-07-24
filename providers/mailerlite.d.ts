import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Assign an existing MailerLite subscriber to a MailerLite group. */
    "mailerlite.add_subscriber_to_group": {
      input: {
        /**
         * MailerLite subscriber identifier accepted by the official API.
         * @minLength 1
         */
        subscriber_id: string;
        /**
         * MailerLite group identifier.
         * @minLength 1
         */
        group_id: string;
      };
      output: {
        /** Group object returned after assigning a MailerLite subscriber to a group. */
        data: Record<string, unknown>;
      };
    };
    /** Create a new MailerLite group. */
    "mailerlite.create_group": {
      input: {
        /**
         * MailerLite group name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
      };
      output: {
        /** Group object returned after a MailerLite create-group request. */
        data: Record<string, unknown>;
      };
    };
    /** Delete a MailerLite group by ID. */
    "mailerlite.delete_group": {
      input: {
        /**
         * MailerLite group identifier.
         * @minLength 1
         */
        group_id: string;
      };
      output: {
        /** Whether MailerLite accepted the operation. */
        success: boolean;
      };
    };
    /** Delete a subscriber from the current MailerLite account. */
    "mailerlite.delete_subscriber": {
      input: {
        /**
         * MailerLite subscriber ID to delete.
         * @minLength 1
         */
        subscriber_id: string;
      };
      output: {
        /** Whether MailerLite accepted the operation. */
        success: boolean;
      };
    };
    /** Fetch a single MailerLite subscriber by ID or email. */
    "mailerlite.get_subscriber": {
      input: {
        /**
         * Subscriber ID or email accepted by the official MailerLite fetch endpoint.
         * @minLength 1
         */
        subscriber_id_or_email: string;
      };
      output: {
        /** Subscriber object returned by MailerLite. */
        data: Record<string, unknown>;
      };
    };
    /** List fields available to the current MailerLite API key. */
    "mailerlite.list_fields": {
      input: {
        /**
         * Maximum number of fields to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Page number to request from MailerLite.
         * @minimum 1
         */
        page?: number;
        /**
         * Partial field keyword filter.
         * @minLength 1
         */
        keyword?: string;
        /** Field type accepted by the official MailerLite fields API. */
        type?: "text" | "number" | "date";
        /** Sort order accepted by the official MailerLite fields API. */
        sort?: "name" | "type" | "-name" | "-type";
      };
      output: {
        /** Items returned by the official MailerLite API. */
        data: Array<Record<string, unknown>>;
        /** Pagination links returned by the official MailerLite API. */
        links: Record<string, unknown>;
        /** Pagination metadata returned by the official MailerLite API. */
        meta: Record<string, unknown>;
      };
    };
    /** List subscribers that belong to a MailerLite group. */
    "mailerlite.list_group_subscribers": {
      input: {
        /**
         * MailerLite group identifier.
         * @minLength 1
         */
        group_id: string;
        /** Subscriber status accepted by the official MailerLite API. */
        status?: "active" | "unsubscribed" | "unconfirmed" | "bounced" | "junk";
        /**
         * Maximum number of subscribers to return per page.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Cursor returned by a previous MailerLite group-subscriber response.
         * @minLength 1
         */
        cursor?: string;
        /** Whether to ask MailerLite to include subscriber groups in the response. */
        include_groups?: boolean;
      };
      output: {
        /** Items returned by the official MailerLite API. */
        data: Array<Record<string, unknown>>;
        /** Pagination links returned by the official MailerLite API. */
        links: Record<string, unknown>;
        /** Pagination metadata returned by the official MailerLite API. */
        meta: Record<string, unknown>;
      };
    };
    /** List groups available to the current MailerLite API key. */
    "mailerlite.list_groups": {
      input: {
        /**
         * Maximum number of groups to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Page number to request from MailerLite.
         * @minimum 1
         */
        page?: number;
        /**
         * Partial group name filter.
         * @minLength 1
         */
        name?: string;
        /** Sort order accepted by the official MailerLite groups API. */
        sort?: "name" | "total" | "open_rate" | "click_rate" | "created_at" | "-name" | "-total" | "-open_rate" | "-click_rate" | "-created_at";
      };
      output: {
        /** Items returned by the official MailerLite API. */
        data: Array<Record<string, unknown>>;
        /** Pagination links returned by the official MailerLite API. */
        links: Record<string, unknown>;
        /** Pagination metadata returned by the official MailerLite API. */
        meta: Record<string, unknown>;
      };
    };
    /** List subscribers available to the current MailerLite API key. */
    "mailerlite.list_subscribers": {
      input: {
        /** Subscriber status accepted by the official MailerLite API. */
        status?: "active" | "unsubscribed" | "unconfirmed" | "bounced" | "junk";
        /**
         * Maximum number of subscribers to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Cursor returned by a previous MailerLite list response.
         * @minLength 1
         */
        cursor?: string;
        /** Whether to ask MailerLite to include subscriber groups in the response. */
        include_groups?: boolean;
      };
      output: {
        /** Items returned by the official MailerLite API. */
        data: Array<Record<string, unknown>>;
        /** Pagination links returned by the official MailerLite API. */
        links: Record<string, unknown>;
        /** Pagination metadata returned by the official MailerLite API. */
        meta: Record<string, unknown>;
      };
    };
    /** Unassign an existing MailerLite subscriber from a MailerLite group. */
    "mailerlite.remove_subscriber_from_group": {
      input: {
        /**
         * MailerLite subscriber identifier accepted by the official API.
         * @minLength 1
         */
        subscriber_id: string;
        /**
         * MailerLite group identifier.
         * @minLength 1
         */
        group_id: string;
      };
      output: {
        /** Whether MailerLite accepted the operation. */
        success: boolean;
      };
    };
    /** Update an existing MailerLite group by ID. */
    "mailerlite.update_group": {
      input: {
        /**
         * MailerLite group name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /**
         * MailerLite group identifier.
         * @minLength 1
         */
        group_id: string;
      };
      output: {
        /** Group object returned after a MailerLite update-group request. */
        data: Record<string, unknown>;
      };
    };
    /** Update an existing MailerLite subscriber by ID. */
    "mailerlite.update_subscriber": {
      input: {
        /** Subscriber fields object accepted by the official MailerLite API. */
        fields?: Record<string, unknown>;
        /** MailerLite group identifiers attached to the subscriber. */
        groups?: Array<string>;
        /** Subscriber status accepted by the official MailerLite API. */
        status?: "active" | "unsubscribed" | "unconfirmed" | "bounced" | "junk";
        /** Subscription timestamp in yyyy-MM-dd HH:mm:ss format. */
        subscribed_at?: string;
        /** IP address associated with the subscriber. */
        ip_address?: string;
        /** Opt-in timestamp in yyyy-MM-dd HH:mm:ss format. */
        opted_in_at?: string;
        /** Opt-in IP address associated with the subscriber. */
        optin_ip?: string;
        /** Unsubscribe timestamp in yyyy-MM-dd HH:mm:ss format. */
        unsubscribed_at?: string;
        /**
         * MailerLite subscriber ID to update.
         * @minLength 1
         */
        subscriber_id: string;
      };
      output: {
        /** Subscriber object returned after a MailerLite update request. */
        data: Record<string, unknown>;
      };
    };
    /** Create or update a MailerLite subscriber using the official upsert endpoint. */
    "mailerlite.upsert_subscriber": {
      input: {
        /** Subscriber fields object accepted by the official MailerLite API. */
        fields?: Record<string, unknown>;
        /** MailerLite group identifiers attached to the subscriber. */
        groups?: Array<string>;
        /** Subscriber status accepted by the official MailerLite API. */
        status?: "active" | "unsubscribed" | "unconfirmed" | "bounced" | "junk";
        /** Subscription timestamp in yyyy-MM-dd HH:mm:ss format. */
        subscribed_at?: string;
        /** IP address associated with the subscriber. */
        ip_address?: string;
        /** Opt-in timestamp in yyyy-MM-dd HH:mm:ss format. */
        opted_in_at?: string;
        /** Opt-in IP address associated with the subscriber. */
        optin_ip?: string;
        /** Unsubscribe timestamp in yyyy-MM-dd HH:mm:ss format. */
        unsubscribed_at?: string;
        /**
         * Subscriber email address.
         * @format email
         */
        email: string;
        /** Whether to resubscribe an unsubscribed subscriber when MailerLite allows it. */
        resubscribe?: boolean;
      };
      output: {
        /** Subscriber object returned after a MailerLite upsert request. */
        data: Record<string, unknown>;
      };
    };
  }
}
