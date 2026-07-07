import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add or update one subscriber in a Moosend mailing list. */
    "moosend.add_subscriber": {
      input: {
        /**
         * The ID of the email list where Moosend should add the subscriber.
         * @minLength 1
         */
        MailingListID: string;
        /**
         * The email address of the subscriber.
         * @format email
         */
        Email: string;
        /** Moosend response format. Connector actions always request JSON. */
        Format?: "json";
        /**
         * The subscriber name.
         * @minLength 1
         */
        Name?: string;
        /** Whether the subscriber has given subscription consent by other means. */
        HasExternalDoubleOptIn?: boolean;
        /** Custom field values in Moosend FieldName=Value format. */
        CustomFields?: Array<string>;
        /** Tags to assign to the subscriber. */
        Tags?: Array<string>;
        /** Preference values to assign to the subscriber. */
        Preferences?: Array<string>;
      };
      output: {
        /** The Moosend response code. A value of 0 indicates success. */
        Code: number;
        /** The Moosend error message, or null when successful. */
        Error: string | null;
        /** A Moosend subscriber object. */
        Context: {
          /** The Moosend subscriber identifier. */
          ID?: string;
          /** The subscriber name. */
          Name?: string | null;
          /**
           * The subscriber email address.
           * @format email
           */
          Email?: string;
          /** The Moosend date string when the subscriber was created. */
          CreatedOn?: string;
          /** The Moosend date string when the subscriber was updated. */
          UpdatedOn?: string;
          /** The Moosend date string when the subscriber unsubscribed from the list. */
          UnsubscribedOn?: string | null;
          /** The identifier that the subscriber unsubscribed from. */
          UnsubscribedFromID?: string | null;
          /** The Moosend numeric subscriber status. */
          SubscribeType?: number;
          /** The Moosend numeric subscription method. */
          SubscribeMethod?: number;
          /** The custom fields associated with the subscriber. */
          CustomFields?: Array<{
            /** The Moosend custom field identifier. */
            CustomFieldID?: string;
            /** The Moosend custom field name. */
            Name?: string;
            /** The Moosend custom field value. */
            Value?: string | null;
            [key: string]: unknown;
          }>;
          /** The Moosend date string when the subscriber was removed. */
          RemovedOn?: string | null;
          /** The tags associated with the subscriber. */
          Tags?: Array<string>;
          /** The preference values associated with the subscriber. */
          Preferences?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one Moosend subscriber from a mailing list by email address. */
    "moosend.get_subscriber_by_email": {
      input: {
        /**
         * The ID of the email list that contains the subscriber.
         * @minLength 1
         */
        MailingListID: string;
        /**
         * The email address of the subscriber to retrieve.
         * @format email
         */
        Email: string;
        /** Moosend response format. Connector actions always request JSON. */
        Format?: "json";
      };
      output: {
        /** The Moosend response code. A value of 0 indicates success. */
        Code: number;
        /** The Moosend error message, or null when successful. */
        Error: string | null;
        /** A Moosend subscriber object. */
        Context: {
          /** The Moosend subscriber identifier. */
          ID?: string;
          /** The subscriber name. */
          Name?: string | null;
          /**
           * The subscriber email address.
           * @format email
           */
          Email?: string;
          /** The Moosend date string when the subscriber was created. */
          CreatedOn?: string;
          /** The Moosend date string when the subscriber was updated. */
          UpdatedOn?: string;
          /** The Moosend date string when the subscriber unsubscribed from the list. */
          UnsubscribedOn?: string | null;
          /** The identifier that the subscriber unsubscribed from. */
          UnsubscribedFromID?: string | null;
          /** The Moosend numeric subscriber status. */
          SubscribeType?: number;
          /** The Moosend numeric subscription method. */
          SubscribeMethod?: number;
          /** The custom fields associated with the subscriber. */
          CustomFields?: Array<{
            /** The Moosend custom field identifier. */
            CustomFieldID?: string;
            /** The Moosend custom field name. */
            Name?: string;
            /** The Moosend custom field value. */
            Value?: string | null;
            [key: string]: unknown;
          }>;
          /** The Moosend date string when the subscriber was removed. */
          RemovedOn?: string | null;
          /** The tags associated with the subscriber. */
          Tags?: Array<string>;
          /** The preference values associated with the subscriber. */
          Preferences?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** List active mailing lists in the current Moosend account. */
    "moosend.list_mailing_lists": {
      input: {
        /** Moosend response format. Connector actions always request JSON. */
        Format?: "json";
        /** Whether Moosend should include subscriber statistics. */
        WithStatistics?: boolean;
        /** Moosend mailing list property used to sort results. */
        SortBy?: "Name" | "Subject" | "Status" | "DeliveredOn" | "CreatedOn";
        /** Moosend sorting direction. */
        SortMethod?: "ASC" | "DESC";
      };
      output: {
        /** The Moosend response code. A value of 0 indicates success. */
        Code: number;
        /** The Moosend error message, or null when successful. */
        Error: string | null;
        /** The Moosend mailing list response context. */
        Context: {
          /** Moosend paging metadata. */
          Paging: {
            /** The page size of the results. */
            PageSize?: number;
            /** The current page number. */
            CurrentPage?: number;
            /** The total number of matching results. */
            TotalResults?: number;
            /** The total number of available pages. */
            TotalPageCount?: number;
            /** The sort expression used by Moosend. */
            SortExpression?: string | null;
            /** Whether Moosend sorted the results in ascending order. */
            SortIsAscending?: boolean;
            [key: string]: unknown;
          };
          /** The active mailing lists returned by Moosend. */
          MailingLists: Array<{
            /** The Moosend mailing list identifier. */
            ID?: string;
            /** The mailing list name. */
            Name?: string;
            /** The number of active members in the mailing list. */
            ActiveMemberCount?: number;
            /** The number of bounced members in the mailing list. */
            BouncedMemberCount?: number;
            /** The number of removed members in the mailing list. */
            RemovedMemberCount?: number;
            /** The number of unsubscribed members in the mailing list. */
            UnsubscribedMemberCount?: number;
            /** The Moosend numeric mailing list status. */
            Status?: number;
            /** The custom field definitions configured for the mailing list. */
            CustomFieldsDefinition?: Array<Record<string, unknown>>;
            /** The Moosend date string when the mailing list was created. */
            CreatedOn?: string;
            /** The Moosend date string when the mailing list was updated. */
            UpdatedOn?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** List subscribers in a Moosend mailing list filtered by subscriber status. */
    "moosend.list_subscribers": {
      input: {
        /**
         * The ID of the email list containing the subscribers.
         * @minLength 1
         */
        MailingListID: string;
        /** Moosend subscriber status filter. */
        Status: "Subscribed" | "Unsubscribed" | "Bounced" | "Removed";
        /** Moosend response format. Connector actions always request JSON. */
        Format?: "json";
        /**
         * The page of subscriber results to return.
         * @exclusiveMinimum 0
         */
        Page?: number;
        /**
         * The number of subscriber results to return per page.
         * @exclusiveMinimum 0
         */
        PageSize?: number;
      };
      output: {
        /** The Moosend response code. A value of 0 indicates success. */
        Code: number;
        /** The Moosend error message, or null when successful. */
        Error: string | null;
        /** The Moosend subscribers response context. */
        Context: {
          /** Moosend paging metadata. */
          Paging: {
            /** The page size of the results. */
            PageSize?: number;
            /** The current page number. */
            CurrentPage?: number;
            /** The total number of matching results. */
            TotalResults?: number;
            /** The total number of available pages. */
            TotalPageCount?: number;
            /** The sort expression used by Moosend. */
            SortExpression?: string | null;
            /** Whether Moosend sorted the results in ascending order. */
            SortIsAscending?: boolean;
            [key: string]: unknown;
          };
          /** The subscribers returned by Moosend. */
          Subscribers: Array<{
            /** The Moosend subscriber identifier. */
            ID?: string;
            /** The subscriber name. */
            Name?: string | null;
            /**
             * The subscriber email address.
             * @format email
             */
            Email?: string;
            /** The Moosend date string when the subscriber was created. */
            CreatedOn?: string;
            /** The Moosend date string when the subscriber was updated. */
            UpdatedOn?: string;
            /** The Moosend date string when the subscriber unsubscribed from the list. */
            UnsubscribedOn?: string | null;
            /** The identifier that the subscriber unsubscribed from. */
            UnsubscribedFromID?: string | null;
            /** The Moosend numeric subscriber status. */
            SubscribeType?: number;
            /** The Moosend numeric subscription method. */
            SubscribeMethod?: number;
            /** The custom fields associated with the subscriber. */
            CustomFields?: Array<{
              /** The Moosend custom field identifier. */
              CustomFieldID?: string;
              /** The Moosend custom field name. */
              Name?: string;
              /** The Moosend custom field value. */
              Value?: string | null;
              [key: string]: unknown;
            }>;
            /** The Moosend date string when the subscriber was removed. */
            RemovedOn?: string | null;
            /** The tags associated with the subscriber. */
            Tags?: Array<string>;
            /** The preference values associated with the subscriber. */
            Preferences?: Array<string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
  }
}
