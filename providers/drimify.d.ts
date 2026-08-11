import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a single Drimify app data collection record by ID. */
    "drimify.get_app_data_collection": {
      input: {
        /**
         * Drimify app data collection record ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Drimify app data collection record. */
        record: {
          /** Unique Drimify data collection record ID. */
          id?: number;
          /** Drimify application ID associated with the record. */
          appId?: number | null;
          /** Drimify application internal reference. */
          appRef?: string | null;
          /** Unique ID value collected by the app. */
          idunic?: string | null;
          /** Gender value collected by the app. */
          gender?: string | null;
          /** Username collected by the app. */
          username?: string | null;
          /** First name collected by the app. */
          firstName?: string | null;
          /** Last name collected by the app. */
          lastName?: string | null;
          /** Email address collected by the app. */
          email?: string | null;
          /**
           * Date of birth collected by the app.
           * @format date-time
           */
          dob?: string | null;
          /** Postal address collected by the app. */
          address?: string | null;
          /** Postcode collected by the app. */
          cp?: string | null;
          /** Town or city collected by the app. */
          town?: string | null;
          /** Country collected by the app. */
          country?: string | null;
          /** Phone number collected by the app. */
          phoneNumber?: string | null;
          /** Company name collected by the app. */
          companyName?: string | null;
          /**
           * Website URL collected by the app.
           * @format uri
           */
          website?: string | null;
          /** Newsletter opt-in value collected by the app. */
          optinNewsletter?: string | boolean | null;
          /** Custom text field value collected by the app. */
          customText?: string | null;
          /** Custom formatted field value collected by the app. */
          customFormat?: string | null;
          /** Profile result returned by quiz, survey, or personality apps. */
          profil?: string | null;
          /** Profile unique ID returned by quiz, survey, or personality apps. */
          profilUid?: string | null;
          /** Score returned by score-based apps. */
          score?: number | null;
          /** Prize unique ID returned when the user won a prize. */
          prizeUid?: string | null;
          /** Prize title returned when the user won a prize. */
          prizeTitle?: string | null;
          /** Prize reference returned when the user won a prize. */
          prizeRef?: string | null;
          /** Prize code won by the user. */
          code?: string | null;
          /**
           * Server timestamp for the record.
           * @format date-time
           */
          date?: string;
          /** Publisher ID associated with the record. */
          publisherId?: string | null;
          /** Publisher ID associated with the record. */
          publisherid?: string | null;
          /** User session ID associated with the app play. */
          sessionId?: string | null;
          /** IP address recorded by Drimify. */
          ip?: string | null;
          /** Country code based on the user IP address. */
          countryCode?: string | null;
          /** Custom dropdown field value collected by the app. */
          selectValue?: string | null;
          /** Second custom dropdown field value collected by the app. */
          selectValue2?: string | null;
          /** Custom checkbox field value collected by the app. */
          customCheckbox?: string | null;
          /** Time spent by the user in seconds. */
          timeTaken?: number;
          /** Traffic source referral value. */
          referral?: string;
          /**
           * Record timestamp converted to the app timezone.
           * @format date-time
           */
          dateWithTimezone?: string | null;
          /** Whether the user played the game mechanic. */
          played?: boolean;
          /** Application language used during the user experience. */
          locale?: string | null;
          /**
           * Timestamp when the record was updated.
           * @format date-time
           */
          updatedAt?: string | null;
          /** Total levels completed for supported app types. */
          levelsPlayed?: number | null;
          /** Country name based on the user IP address. */
          connectionCountry?: string;
          /** Timestamp when the record was updated. */
          updatedAtTimeStamp?: number | null;
          /** Timestamp when the record was updated. */
          updatedAtTimestamp?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Drimify app data collection records, optionally filtered by app, session ID, or creation datetime. */
    "drimify.list_app_data_collections": {
      input: {
        /**
         * Collection page number to retrieve. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of records to return per page, from 0 to 500. Defaults to 500.
         * @minimum 0
         * @maximum 500
         */
        itemsPerPage?: number;
        /**
         * Drimify app identifier used to filter data collection records.
         * @minLength 1
         */
        app?: string;
        /**
         * Drimify user session ID used to filter data collection records.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Filter records created on or after this application-local datetime in YYYY-MM-DDTHH:MM:SS format. Requires app.
         * @minLength 1
         */
        createdSince?: string;
      };
      output: {
        /** Data collection records returned by Drimify. */
        records: Array<{
          /** Unique Drimify data collection record ID. */
          id?: number;
          /** Drimify application ID associated with the record. */
          appId?: number | null;
          /** Drimify application internal reference. */
          appRef?: string | null;
          /** Unique ID value collected by the app. */
          idunic?: string | null;
          /** Gender value collected by the app. */
          gender?: string | null;
          /** Username collected by the app. */
          username?: string | null;
          /** First name collected by the app. */
          firstName?: string | null;
          /** Last name collected by the app. */
          lastName?: string | null;
          /** Email address collected by the app. */
          email?: string | null;
          /**
           * Date of birth collected by the app.
           * @format date-time
           */
          dob?: string | null;
          /** Postal address collected by the app. */
          address?: string | null;
          /** Postcode collected by the app. */
          cp?: string | null;
          /** Town or city collected by the app. */
          town?: string | null;
          /** Country collected by the app. */
          country?: string | null;
          /** Phone number collected by the app. */
          phoneNumber?: string | null;
          /** Company name collected by the app. */
          companyName?: string | null;
          /**
           * Website URL collected by the app.
           * @format uri
           */
          website?: string | null;
          /** Newsletter opt-in value collected by the app. */
          optinNewsletter?: string | boolean | null;
          /** Custom text field value collected by the app. */
          customText?: string | null;
          /** Custom formatted field value collected by the app. */
          customFormat?: string | null;
          /** Profile result returned by quiz, survey, or personality apps. */
          profil?: string | null;
          /** Profile unique ID returned by quiz, survey, or personality apps. */
          profilUid?: string | null;
          /** Score returned by score-based apps. */
          score?: number | null;
          /** Prize unique ID returned when the user won a prize. */
          prizeUid?: string | null;
          /** Prize title returned when the user won a prize. */
          prizeTitle?: string | null;
          /** Prize reference returned when the user won a prize. */
          prizeRef?: string | null;
          /** Prize code won by the user. */
          code?: string | null;
          /**
           * Server timestamp for the record.
           * @format date-time
           */
          date?: string;
          /** Publisher ID associated with the record. */
          publisherId?: string | null;
          /** Publisher ID associated with the record. */
          publisherid?: string | null;
          /** User session ID associated with the app play. */
          sessionId?: string | null;
          /** IP address recorded by Drimify. */
          ip?: string | null;
          /** Country code based on the user IP address. */
          countryCode?: string | null;
          /** Custom dropdown field value collected by the app. */
          selectValue?: string | null;
          /** Second custom dropdown field value collected by the app. */
          selectValue2?: string | null;
          /** Custom checkbox field value collected by the app. */
          customCheckbox?: string | null;
          /** Time spent by the user in seconds. */
          timeTaken?: number;
          /** Traffic source referral value. */
          referral?: string;
          /**
           * Record timestamp converted to the app timezone.
           * @format date-time
           */
          dateWithTimezone?: string | null;
          /** Whether the user played the game mechanic. */
          played?: boolean;
          /** Application language used during the user experience. */
          locale?: string | null;
          /**
           * Timestamp when the record was updated.
           * @format date-time
           */
          updatedAt?: string | null;
          /** Total levels completed for supported app types. */
          levelsPlayed?: number | null;
          /** Country name based on the user IP address. */
          connectionCountry?: string;
          /** Timestamp when the record was updated. */
          updatedAtTimeStamp?: number | null;
          /** Timestamp when the record was updated. */
          updatedAtTimestamp?: number | null;
          [key: string]: unknown;
        }>;
        /** Number of records returned in this response. */
        count: number;
        /** Collection page number used for the request. */
        page: number;
        /** Maximum number of records requested per page. */
        itemsPerPage: number;
      };
    };
  }
}
