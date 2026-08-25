import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create or update a Mobile Text Alerts subscriber by phone number or email. */
    "mobile_text_alerts.create_subscriber": {
      input: {
        /** The subscriber first name. */
        firstName?: string;
        /** The subscriber last name. */
        lastName?: string;
        /**
         * The subscriber email address.
         * @format email
         */
        email?: string;
        /** The subscriber phone number. */
        number?: number | string;
        /**
         * The subscriber phone number in E.164 format.
         * @minLength 1
         */
        e164Number?: string;
        /** The group ids to assign to the subscriber. */
        groupIds?: Array<number>;
        /** Custom subscriber field ids mapped to their string values. */
        subscriberFields?: Record<string, string>;
      };
      output: {
        /** A Mobile Text Alerts subscriber. */
        subscriber: {
          /** The subscriber id. */
          id?: number;
          /** The subscriber first name. */
          firstName?: string;
          /** The subscriber last name. */
          lastName?: string;
          /** The subscriber email address. */
          email?: string;
          /** The subscriber phone number as a number. */
          number?: number;
          /** The subscriber phone number in E.164 format. */
          e164Number?: string;
          /** The date when the subscriber was created. */
          date?: string;
          /** The subscriber country id. */
          countryId?: number;
          /** The groups assigned to the subscriber. */
          groups?: Array<{
            /** The group id. */
            id?: number;
            /** The group name. */
            name?: string;
            /** The date when the subscriber was added to the group. */
            addedToGroupAt?: string;
            [key: string]: unknown;
          }>;
          /** The custom field values assigned to the subscriber. */
          subscriberFieldData?: Array<{
            /** The custom field value id. */
            id?: number;
            /** The custom subscriber field id. */
            subscriberFieldId?: number;
            /** The custom field value. */
            data?: string;
            [key: string]: unknown;
          }>;
          /** The signup method id when available. */
          signupMethod?: number | null;
          /** The subscriber long phone number. */
          longNumber?: number;
          /** The subscriber carrier id. */
          carrierId?: number;
          [key: string]: unknown;
        };
        /** The provider response message. */
        message: string;
      };
    };
    /** Delete a Mobile Text Alerts subscriber by id, phone number, or email address. */
    "mobile_text_alerts.delete_subscriber": {
      input: {
        /**
         * The subscriber id, phone number, or email address used to identify the subscriber.
         * @minLength 1
         */
        subscriberId: string;
      };
      output: {
        /** Whether the subscriber was deleted. */
        deleted: boolean;
        /** The provider response message. */
        message: string;
      };
    };
    /** Get a Mobile Text Alerts subscriber by id, phone number, or email address. */
    "mobile_text_alerts.get_subscriber": {
      input: {
        /**
         * The subscriber id, phone number, or email address used to identify the subscriber.
         * @minLength 1
         */
        subscriberId: string;
      };
      output: {
        /** A Mobile Text Alerts subscriber. */
        subscriber: {
          /** The subscriber id. */
          id?: number;
          /** The subscriber first name. */
          firstName?: string;
          /** The subscriber last name. */
          lastName?: string;
          /** The subscriber email address. */
          email?: string;
          /** The subscriber phone number as a number. */
          number?: number;
          /** The subscriber phone number in E.164 format. */
          e164Number?: string;
          /** The date when the subscriber was created. */
          date?: string;
          /** The subscriber country id. */
          countryId?: number;
          /** The groups assigned to the subscriber. */
          groups?: Array<{
            /** The group id. */
            id?: number;
            /** The group name. */
            name?: string;
            /** The date when the subscriber was added to the group. */
            addedToGroupAt?: string;
            [key: string]: unknown;
          }>;
          /** The custom field values assigned to the subscriber. */
          subscriberFieldData?: Array<{
            /** The custom field value id. */
            id?: number;
            /** The custom subscriber field id. */
            subscriberFieldId?: number;
            /** The custom field value. */
            data?: string;
            [key: string]: unknown;
          }>;
          /** The signup method id when available. */
          signupMethod?: number | null;
          /** The subscriber long phone number. */
          longNumber?: number;
          /** The subscriber carrier id. */
          carrierId?: number;
          [key: string]: unknown;
        };
        /** The provider response message. */
        message: string;
      };
    };
    /** List and search subscribers in Mobile Text Alerts. */
    "mobile_text_alerts.list_subscribers": {
      input: {
        /**
         * The zero-based page number.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of subscribers per page, up to 1000.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * A free-text search across subscriber names, numbers, emails, and custom fields.
         * @minLength 1
         */
        query?: string;
        /**
         * The subscriber field used to sort the result.
         * @minLength 1
         */
        sortBy?: string;
        /** The result sort direction. */
        sortDirection?: "asc" | "desc" | "ASC" | "DESC";
        /** Whether to return all subscribers in the result. */
        allSubscribers?: boolean;
      };
      output: {
        /** The subscribers returned for this page. */
        subscribers: Array<{
          /** The subscriber id. */
          id?: number;
          /** The subscriber first name. */
          firstName?: string;
          /** The subscriber last name. */
          lastName?: string;
          /** The subscriber email address. */
          email?: string;
          /** The subscriber phone number as a number. */
          number?: number;
          /** The subscriber phone number in E.164 format. */
          e164Number?: string;
          /** The date when the subscriber was created. */
          date?: string;
          /** The subscriber country id. */
          countryId?: number;
          /** The groups assigned to the subscriber. */
          groups?: Array<{
            /** The group id. */
            id?: number;
            /** The group name. */
            name?: string;
            /** The date when the subscriber was added to the group. */
            addedToGroupAt?: string;
            [key: string]: unknown;
          }>;
          /** The custom field values assigned to the subscriber. */
          subscriberFieldData?: Array<{
            /** The custom field value id. */
            id?: number;
            /** The custom subscriber field id. */
            subscriberFieldId?: number;
            /** The custom field value. */
            data?: string;
            [key: string]: unknown;
          }>;
          /** The signup method id when available. */
          signupMethod?: number | null;
          /** The subscriber long phone number. */
          longNumber?: number;
          /** The subscriber carrier id. */
          carrierId?: number;
          [key: string]: unknown;
        }>;
        /**
         * The zero-based page number returned by the provider.
         * @minimum 0
         */
        page: number;
        /**
         * The page size returned by the provider.
         * @minimum 0
         */
        pageSize: number;
        /**
         * The total number of matching subscribers.
         * @minimum 0
         */
        total: number;
      };
    };
    /** Update a Mobile Text Alerts subscriber by id, phone number, or email address. */
    "mobile_text_alerts.update_subscriber": {
      input: {
        /**
         * The subscriber id, phone number, or email address used to identify the subscriber.
         * @minLength 1
         */
        subscriberId: string;
        /** The subscriber first name. */
        firstName?: string;
        /** The subscriber last name. */
        lastName?: string;
        /**
         * The subscriber email address.
         * @format email
         */
        email?: string;
        /** The subscriber phone number. */
        number?: number | string;
        /**
         * The subscriber phone number in E.164 format.
         * @minLength 1
         */
        e164Number?: string;
        /** The group ids to assign to the subscriber. */
        groupIds?: Array<number>;
        /** Custom subscriber field ids mapped to their string values. */
        subscriberFields?: Record<string, string>;
      };
      output: {
        /** A Mobile Text Alerts subscriber. */
        subscriber: {
          /** The subscriber id. */
          id?: number;
          /** The subscriber first name. */
          firstName?: string;
          /** The subscriber last name. */
          lastName?: string;
          /** The subscriber email address. */
          email?: string;
          /** The subscriber phone number as a number. */
          number?: number;
          /** The subscriber phone number in E.164 format. */
          e164Number?: string;
          /** The date when the subscriber was created. */
          date?: string;
          /** The subscriber country id. */
          countryId?: number;
          /** The groups assigned to the subscriber. */
          groups?: Array<{
            /** The group id. */
            id?: number;
            /** The group name. */
            name?: string;
            /** The date when the subscriber was added to the group. */
            addedToGroupAt?: string;
            [key: string]: unknown;
          }>;
          /** The custom field values assigned to the subscriber. */
          subscriberFieldData?: Array<{
            /** The custom field value id. */
            id?: number;
            /** The custom subscriber field id. */
            subscriberFieldId?: number;
            /** The custom field value. */
            data?: string;
            [key: string]: unknown;
          }>;
          /** The signup method id when available. */
          signupMethod?: number | null;
          /** The subscriber long phone number. */
          longNumber?: number;
          /** The subscriber carrier id. */
          carrierId?: number;
          [key: string]: unknown;
        };
        /** The provider response message. */
        message: string;
      };
    };
  }
}
