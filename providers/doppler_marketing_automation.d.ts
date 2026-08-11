import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create or update a Doppler subscriber and associate the subscriber with a list. */
    "doppler_marketing_automation.add_subscriber_to_list": {
      input: {
        /**
         * The Doppler subscriber list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The subscriber email address.
         * @maxLength 100
         * @format email
         */
        email: string;
        /** Custom field values to set on the subscriber. */
        fields?: Array<{
          /**
           * The Doppler custom field name.
           * @minLength 1
           * @maxLength 50
           * @pattern ^[0-9a-zA-ZñÑ]+$
           */
          name: string;
          /**
           * The custom field value.
           * @maxLength 400
           */
          value?: string | null;
        }>;
      };
      output: {
        /** The result message returned by Doppler. */
        message: string;
        /** The raw object returned by Doppler Email Marketing. */
        data: Record<string, unknown>;
      };
    };
    /** Create a Doppler Email Marketing subscriber list. */
    "doppler_marketing_automation.create_list": {
      input: {
        /**
         * The new list name.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
      };
      output: {
        /** The ID of the created list. */
        createdResourceId: string | null;
        /** The result message returned by Doppler. */
        message: string;
        /** The raw object returned by Doppler Email Marketing. */
        data: Record<string, unknown>;
      };
    };
    /** Remove a Doppler Email Marketing list while leaving its contacts in the account. */
    "doppler_marketing_automation.delete_list": {
      input: {
        /**
         * The Doppler subscriber list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
      };
      output: {
        /** The result message returned by Doppler. */
        message: string;
        /** The raw object returned by Doppler Email Marketing. */
        data: Record<string, unknown>;
      };
    };
    /** Retrieve one Doppler Email Marketing subscriber list by ID. */
    "doppler_marketing_automation.get_list": {
      input: {
        /**
         * The Doppler subscriber list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
      };
      output: {
        /** A normalized Doppler subscriber list. */
        list: {
          /** The Doppler list ID. */
          listId: number;
          /** The list name. */
          name: string;
          /** The current list processing status. */
          currentStatus: string | null;
          /** The number of subscribers in the list. */
          subscribersCount: number | null;
          /** The list creation timestamp. */
          creationDate: string | null;
          /** Whether the list has scheduled campaigns when reported. */
          hasScheduledCampaigns: boolean | null;
          /** Whether the list has associated forms when reported. */
          hasFormsAssociated: boolean | null;
          /** Whether the list has associated segments when reported. */
          hasSegmentsAssociated: boolean | null;
          /** Whether the list has associated events when reported. */
          hasEventsAssociated: boolean | null;
          /** The raw object returned by Doppler Email Marketing. */
          data: Record<string, unknown>;
        };
        /** The raw object returned by Doppler Email Marketing. */
        data: Record<string, unknown>;
      };
    };
    /** Retrieve one Doppler Email Marketing subscriber by email address. */
    "doppler_marketing_automation.get_subscriber": {
      input: {
        /**
         * The subscriber email address.
         * @maxLength 100
         * @format email
         */
        email: string;
      };
      output: {
        /** A normalized Doppler subscriber. */
        subscriber: {
          /**
           * The subscriber email address.
           * @format email
           */
          email: string;
          /** The subscriber custom fields. */
          fields: Array<Record<string, unknown>>;
          /** The lists to which the subscriber belongs. */
          belongsToLists: Array<string>;
          /** The current subscriber status. */
          status: string | null;
          /** The subscriber unsubscription timestamp. */
          unsubscriptionDate: string | null;
          /** Whether the subscriber can currently be reactivated. */
          canBeReactivated: boolean | null;
          /** Whether subscriber reactivation is currently in progress. */
          isBeingReactivated: boolean | null;
          /** The reason category for the subscriber unsubscription. */
          unsubscriptionType: string | null;
          /** The detailed manual unsubscription reason. */
          manualUnsubscriptionReason: string | null;
          /** The comment recorded for a manual unsubscription. */
          unsubscriptionComment: string | null;
          /** The subscriber engagement score. */
          score: number | null;
          /** The raw object returned by Doppler Email Marketing. */
          data: Record<string, unknown>;
        };
        /** The raw object returned by Doppler Email Marketing. */
        data: Record<string, unknown>;
      };
    };
    /** List subscribers associated with a Doppler Email Marketing list. */
    "doppler_marketing_automation.list_list_subscribers": {
      input: {
        /**
         * The Doppler subscriber list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The one-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The subscribers returned by Doppler. */
        subscribers: Array<{
          /**
           * The subscriber email address.
           * @format email
           */
          email: string;
          /** The subscriber custom fields. */
          fields: Array<Record<string, unknown>>;
          /** The lists to which the subscriber belongs. */
          belongsToLists: Array<string>;
          /** The current subscriber status. */
          status: string | null;
          /** The subscriber unsubscription timestamp. */
          unsubscriptionDate: string | null;
          /** Whether the subscriber can currently be reactivated. */
          canBeReactivated: boolean | null;
          /** Whether subscriber reactivation is currently in progress. */
          isBeingReactivated: boolean | null;
          /** The reason category for the subscriber unsubscription. */
          unsubscriptionType: string | null;
          /** The detailed manual unsubscription reason. */
          manualUnsubscriptionReason: string | null;
          /** The comment recorded for a manual unsubscription. */
          unsubscriptionComment: string | null;
          /** The subscriber engagement score. */
          score: number | null;
          /** The raw object returned by Doppler Email Marketing. */
          data: Record<string, unknown>;
        }>;
        /** The number of records in the returned page. */
        pageSize: number | null;
        /** The total number of matching records. */
        itemsCount: number | null;
        /** The current page number. */
        currentPage: number | null;
        /** The total number of available pages. */
        pagesCount: number | null;
        /** The last page number when reported. */
        lastPage: number | null;
        /** The raw object returned by Doppler Email Marketing. */
        data: Record<string, unknown>;
      };
    };
    /** List Doppler Email Marketing subscriber lists with optional pagination. */
    "doppler_marketing_automation.list_lists": {
      input: {
        /**
         * The one-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The subscriber lists returned by Doppler. */
        lists: Array<{
          /** The Doppler list ID. */
          listId: number;
          /** The list name. */
          name: string;
          /** The current list processing status. */
          currentStatus: string | null;
          /** The number of subscribers in the list. */
          subscribersCount: number | null;
          /** The list creation timestamp. */
          creationDate: string | null;
          /** Whether the list has scheduled campaigns when reported. */
          hasScheduledCampaigns: boolean | null;
          /** Whether the list has associated forms when reported. */
          hasFormsAssociated: boolean | null;
          /** Whether the list has associated segments when reported. */
          hasSegmentsAssociated: boolean | null;
          /** Whether the list has associated events when reported. */
          hasEventsAssociated: boolean | null;
          /** The raw object returned by Doppler Email Marketing. */
          data: Record<string, unknown>;
        }>;
        /** The number of records in the returned page. */
        pageSize: number | null;
        /** The total number of matching records. */
        itemsCount: number | null;
        /** The current page number. */
        currentPage: number | null;
        /** The total number of available pages. */
        pagesCount: number | null;
        /** The last page number when reported. */
        lastPage: number | null;
        /** The raw object returned by Doppler Email Marketing. */
        data: Record<string, unknown>;
      };
    };
    /** List subscribers across a Doppler Email Marketing account. */
    "doppler_marketing_automation.list_subscribers": {
      input: {
        /**
         * The one-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The subscribers returned by Doppler. */
        subscribers: Array<{
          /**
           * The subscriber email address.
           * @format email
           */
          email: string;
          /** The subscriber custom fields. */
          fields: Array<Record<string, unknown>>;
          /** The lists to which the subscriber belongs. */
          belongsToLists: Array<string>;
          /** The current subscriber status. */
          status: string | null;
          /** The subscriber unsubscription timestamp. */
          unsubscriptionDate: string | null;
          /** Whether the subscriber can currently be reactivated. */
          canBeReactivated: boolean | null;
          /** Whether subscriber reactivation is currently in progress. */
          isBeingReactivated: boolean | null;
          /** The reason category for the subscriber unsubscription. */
          unsubscriptionType: string | null;
          /** The detailed manual unsubscription reason. */
          manualUnsubscriptionReason: string | null;
          /** The comment recorded for a manual unsubscription. */
          unsubscriptionComment: string | null;
          /** The subscriber engagement score. */
          score: number | null;
          /** The raw object returned by Doppler Email Marketing. */
          data: Record<string, unknown>;
        }>;
        /** The number of records in the returned page. */
        pageSize: number | null;
        /** The total number of matching records. */
        itemsCount: number | null;
        /** The current page number. */
        currentPage: number | null;
        /** The total number of available pages. */
        pagesCount: number | null;
        /** The last page number when reported. */
        lastPage: number | null;
        /** The raw object returned by Doppler Email Marketing. */
        data: Record<string, unknown>;
      };
    };
    /** Remove a subscriber from a Doppler list without deleting the subscriber from the account. */
    "doppler_marketing_automation.remove_subscriber_from_list": {
      input: {
        /**
         * The Doppler subscriber list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The subscriber email address.
         * @maxLength 100
         * @format email
         */
        email: string;
      };
      output: {
        /** The result message returned by Doppler. */
        message: string;
        /** The raw object returned by Doppler Email Marketing. */
        data: Record<string, unknown>;
      };
    };
    /** Rename a Doppler Email Marketing subscriber list. */
    "doppler_marketing_automation.update_list": {
      input: {
        /**
         * The Doppler subscriber list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The updated list name.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
      };
      output: {
        /** The result message returned by Doppler. */
        message: string;
        /** The raw object returned by Doppler Email Marketing. */
        data: Record<string, unknown>;
      };
    };
  }
}
