import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add an existing Pingback subscriber to segmentation lists. */
    "pingback.add_subscriber_to_segments": {
      input: {
        /**
         * Subscriber email address.
         * @format email
         */
        email: string;
        /** Segmentation list IDs obtained from Pingback support. */
        segmentationLists: Array<string>;
        /** Return fake data without changing production data when true. */
        developerMode?: boolean;
      };
      output: {
        /** Added segmentation memberships. */
        data: Array<{
          /** Membership ID. */
          id?: string;
          /**
           * Subscriber email address.
           * @format email
           */
          email?: string;
          /** Subscriber ID. */
          subscriberId?: string;
          /** Segmentation list ID. */
          segmentationListId?: string;
          /** Membership creation date. */
          createdAt?: string;
          /** Membership update date. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Pingback request ID for support. */
        requestId?: string;
        [key: string]: unknown;
      };
    };
    /** Create a Pingback subscriber with optional custom fields and segmentation lists. */
    "pingback.create_subscriber": {
      input: {
        /**
         * Subscriber email address.
         * @format email
         */
        email: string;
        /** Subscriber name. */
        name?: string;
        /** Subscriber phone number in E.164 format. */
        phone?: string;
        /** Subscriber status; unsubscribed_subscriber opts the subscriber out. */
        status?: "free_subscriber" | "paid_subscriber" | "unsubscribed_subscriber";
        /** Segmentation list IDs obtained from Pingback support. */
        segmentationLists?: Array<string>;
        /** Return fake data without changing production data when true. */
        developerMode?: boolean;
        /** Custom fields to set by label. */
        customFields?: Array<{
          /** Custom field label. */
          label: string;
          /** Custom field value. */
          value: string;
        }>;
      };
      output: {
        /** Subscriber record, including additional upstream fields. */
        data: {
          /** Subscriber ID. */
          id?: string;
          /**
           * Subscriber email address.
           * @format email
           */
          email: string;
          /** Subscriber name. */
          name?: string;
          /** Subscriber phone number in E.164 format. */
          phone?: string | null;
          /** Subscriber status; unsubscribed_subscriber opts the subscriber out. */
          status?: "free_subscriber" | "paid_subscriber" | "unsubscribed_subscriber";
          /** Subscriber custom fields. */
          customFields?: Array<Record<string, unknown>>;
          /** Segmentation list IDs obtained from Pingback support. */
          segmentationLists?: Array<string>;
          /** Date the subscriber was blacklisted. */
          blacklistedAt?: string | null;
          /** Date the subscriber unsubscribed. */
          unsubscribedAt?: string | null;
          /** Subscriber creation date. */
          createdAt?: string;
          /** Subscriber update date. */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Pingback request ID for support. */
        requestId?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Pingback subscriber by email address. */
    "pingback.get_subscriber": {
      input: {
        /**
         * Subscriber email address.
         * @format email
         */
        email: string;
        /** Return fake data without changing production data when true. */
        developerMode?: boolean;
      };
      output: {
        /** Subscriber record, including additional upstream fields. */
        data: {
          /** Subscriber ID. */
          id?: string;
          /**
           * Subscriber email address.
           * @format email
           */
          email: string;
          /** Subscriber name. */
          name?: string;
          /** Subscriber phone number in E.164 format. */
          phone?: string | null;
          /** Subscriber status; unsubscribed_subscriber opts the subscriber out. */
          status?: "free_subscriber" | "paid_subscriber" | "unsubscribed_subscriber";
          /** Subscriber custom fields. */
          customFields?: Array<Record<string, unknown>>;
          /** Segmentation list IDs obtained from Pingback support. */
          segmentationLists?: Array<string>;
          /** Date the subscriber was blacklisted. */
          blacklistedAt?: string | null;
          /** Date the subscriber unsubscribed. */
          unsubscribedAt?: string | null;
          /** Subscriber creation date. */
          createdAt?: string;
          /** Subscriber update date. */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Pingback request ID for support. */
        requestId?: string;
        [key: string]: unknown;
      };
    };
    /** Remove a subscriber from one Pingback segmentation list while retaining the subscriber. */
    "pingback.remove_subscriber_from_segment": {
      input: {
        /**
         * Subscriber email address.
         * @format email
         */
        email: string;
        /**
         * Segmentation list ID.
         * @minLength 1
         */
        segmentationId: string;
        /** Return fake data without changing production data when true. */
        developerMode?: boolean;
      };
      output: {
        /** Segmentation membership record. */
        data: {
          /** Membership ID. */
          id?: string;
          /**
           * Subscriber email address.
           * @format email
           */
          email?: string;
          /** Subscriber ID. */
          subscriberId?: string;
          /** Segmentation list ID. */
          segmentationListId?: string;
          /** Membership creation date. */
          createdAt?: string;
          /** Membership update date. */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Pingback request ID for support. */
        requestId?: string;
        [key: string]: unknown;
      };
    };
    /** Update a Pingback subscriber by email, including status changes that can unsubscribe them. */
    "pingback.update_subscriber": {
      input: {
        /**
         * Subscriber email address.
         * @format email
         */
        email: string;
        /** Subscriber name. */
        name?: string;
        /** Subscriber phone number in E.164 format. */
        phone?: string;
        /** Subscriber status; unsubscribed_subscriber opts the subscriber out. */
        status?: "free_subscriber" | "paid_subscriber" | "unsubscribed_subscriber";
        /** Return fake data without changing production data when true. */
        developerMode?: boolean;
        /** Custom fields to update by ID. */
        customFields?: Array<{
          /**
           * Custom field ID obtained from Pingback support.
           * @minLength 1
           */
          id: string;
          /** Custom field value. */
          value: string;
        }>;
      };
      output: {
        /** Subscriber record, including additional upstream fields. */
        data: {
          /** Subscriber ID. */
          id?: string;
          /**
           * Subscriber email address.
           * @format email
           */
          email: string;
          /** Subscriber name. */
          name?: string;
          /** Subscriber phone number in E.164 format. */
          phone?: string | null;
          /** Subscriber status; unsubscribed_subscriber opts the subscriber out. */
          status?: "free_subscriber" | "paid_subscriber" | "unsubscribed_subscriber";
          /** Subscriber custom fields. */
          customFields?: Array<Record<string, unknown>>;
          /** Segmentation list IDs obtained from Pingback support. */
          segmentationLists?: Array<string>;
          /** Date the subscriber was blacklisted. */
          blacklistedAt?: string | null;
          /** Date the subscriber unsubscribed. */
          unsubscribedAt?: string | null;
          /** Subscriber creation date. */
          createdAt?: string;
          /** Subscriber update date. */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Pingback request ID for support. */
        requestId?: string;
        [key: string]: unknown;
      };
    };
  }
}
