import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a subscriber in a MailWizz list, or update the existing subscriber with the same email address. */
    "mailwizz.create_or_update_subscriber": {
      input: {
        /**
         * The unique ID of the MailWizz mailing list.
         * @minLength 1
         */
        listUid: string;
        /**
         * The subscriber email address.
         * @format email
         */
        email: string;
        /** Additional MailWizz list field values keyed by field tag, such as FNAME or LNAME. */
        fields?: Record<string, string | number | boolean>;
      };
      output: {
        /** The MailWizz response status. */
        status: string;
        /** The data payload returned by the MailWizz instance. */
        data?: Record<string, unknown>;
      };
    };
    /** Retrieve one MailWizz mailing list by its unique ID. */
    "mailwizz.get_list": {
      input: {
        /**
         * The unique ID of the MailWizz mailing list.
         * @minLength 1
         */
        listUid: string;
      };
      output: {
        /** The MailWizz response status. */
        status: string;
        /** The data payload returned by the MailWizz instance. */
        data?: Record<string, unknown>;
      };
    };
    /** Retrieve one subscriber from a MailWizz mailing list by unique ID. */
    "mailwizz.get_subscriber": {
      input: {
        /**
         * The unique ID of the MailWizz mailing list.
         * @minLength 1
         */
        listUid: string;
        /**
         * The unique ID of the MailWizz subscriber.
         * @minLength 1
         */
        subscriberUid: string;
      };
      output: {
        /** The MailWizz response status. */
        status: string;
        /** The data payload returned by the MailWizz instance. */
        data?: Record<string, unknown>;
      };
    };
    /** List mailing lists available to the connected MailWizz customer. */
    "mailwizz.list_lists": {
      input: {
        /**
         * The page number to retrieve, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to retrieve per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** The MailWizz response status. */
        status: string;
        /** The data payload returned by the MailWizz instance. */
        data?: Record<string, unknown>;
      };
    };
    /** List subscribers in one MailWizz mailing list. */
    "mailwizz.list_subscribers": {
      input: {
        /**
         * The unique ID of the MailWizz mailing list.
         * @minLength 1
         */
        listUid: string;
        /**
         * The page number to retrieve, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to retrieve per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** The MailWizz response status. */
        status: string;
        /** The data payload returned by the MailWizz instance. */
        data?: Record<string, unknown>;
      };
    };
    /** Silently unsubscribe one subscriber from a MailWizz mailing list. */
    "mailwizz.unsubscribe_subscriber": {
      input: {
        /**
         * The unique ID of the MailWizz mailing list.
         * @minLength 1
         */
        listUid: string;
        /**
         * The unique ID of the MailWizz subscriber.
         * @minLength 1
         */
        subscriberUid: string;
      };
      output: {
        /** The MailWizz response status. */
        status: string;
      };
    };
  }
}
