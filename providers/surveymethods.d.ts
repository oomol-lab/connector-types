import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one contact to a Basic or Advanced SurveyMethods email list. */
    "surveymethods.add_email_list_contact": {
      input: {
        /**
         * The SurveyMethods email list code.
         * @minLength 1
         */
        emailListCode: string;
        /**
         * The contact email address.
         * @format email
         */
        email: string;
        /**
         * Up to five custom field values for an Advanced email list, in field order.
         * @maxItems 5
         */
        customFieldValues?: Array<string>;
      };
      output: {
        /** The status message returned by SurveyMethods. */
        status: string;
      };
    };
    /** Create a Basic or Advanced email list in SurveyMethods. */
    "surveymethods.create_email_list": {
      input: {
        /** The email list type. */
        emailListType: "Basic" | "Advanced";
        /**
         * The email list name, up to 50 characters.
         * @minLength 1
         * @maxLength 50
         */
        emailListName: string;
        /**
         * The custom field labels for an Advanced list, in their API order.
         * @maxItems 5
         */
        customFieldLabels?: Array<string>;
      };
      output: {
        /** The status message returned by SurveyMethods. */
        status: string;
        /** The created email list. */
        emailList: {
          /**
           * The SurveyMethods email list code.
           * @minLength 1
           */
          code: string;
          /** The created email list name. */
          name: string;
        };
      };
    };
    /** Get subscription and license information for the authenticated SurveyMethods account. */
    "surveymethods.get_account": {
      input: Record<string, never>;
      output: {
        /** The status message returned by SurveyMethods. */
        status: string;
        /** The SurveyMethods account information. */
        account: {
          /** The account package type. */
          accountType: string;
          /** The account membership start date in MM/DD/YYYY format. */
          memberSince: string;
          /** The account expiration date in MM/DD/YYYY format. */
          expiresOn: string;
          /** The subscription status. */
          subscriptionStatus: string;
          /** Enterprise license information when available. */
          license: {
            /** The license expiration date in MM/DD/YYYY format. */
            licenseExpiresOn: string;
            /** The total number of licenses. */
            totalLicenses: number;
            /** The number of used licenses. */
            usedLicenses: number;
          } | null;
        };
      };
    };
    /** Get detailed metadata for one SurveyMethods survey. */
    "surveymethods.get_survey": {
      input: {
        /**
         * The SurveyMethods survey code.
         * @minLength 1
         */
        surveyCode: string;
      };
      output: {
        /** The status message returned by SurveyMethods. */
        status: string;
        /** The detailed SurveyMethods survey. */
        survey: {
          /**
           * The SurveyMethods survey code.
           * @minLength 1
           */
          code: string;
          /** The survey title. */
          title: string;
          /** The folder containing the survey. */
          folderName: string;
          /** The number of survey pages. */
          pageCount: number;
          /** The number of survey questions. */
          questionCount: number;
          /** The survey deployment status. */
          status: string;
          /** The survey SSL settings. */
          ssl: {
            /** Whether SSL is enabled for the survey link. */
            surveyLink: string;
            /** Whether SSL is enabled for published reports. */
            publishedReports: string;
          };
          /** Whether the survey is anonymous. */
          anonymous: string;
          /** The survey attempts setting. */
          attempts: string;
          /** The survey width setting. */
          width: string;
          /** Whether the survey is collaborated. */
          collaborated: string;
          /** The survey creation date and time in US Central time. */
          createdDate: string;
          /** The latest survey launch date and time, or an empty string. */
          latestLaunchDate: string;
          /** The survey close date and time, or an empty string. */
          closedDate: string;
          /** The public web launch URL, or an empty string. */
          webLaunchUrl: string;
          /** The default published report URL, or an empty string. */
          defaultPublishUrl: string;
          /** The number of survey responses. */
          responseCount: number;
        };
      };
    };
    /** List contacts and custom field values from a SurveyMethods email list. */
    "surveymethods.list_email_list_contacts": {
      input: {
        /**
         * The SurveyMethods email list code.
         * @minLength 1
         */
        emailListCode: string;
      };
      output: {
        /** The status message returned by SurveyMethods. */
        status: string;
        /** The number of contacts returned. */
        rowCount: number;
        /** The email list type. */
        listType: "Basic" | "Advanced";
        /** The Advanced email list custom field labels keyed by their API positions. */
        customFieldLabels: Record<string, string> | null;
        /** The contacts returned by SurveyMethods. */
        contacts: Array<{
          /** The contact email address. */
          email: string;
          /** The contact custom field values keyed by their API positions. */
          customFieldValues: Record<string, string> | null;
        }>;
      };
    };
    /** List email lists in the authenticated SurveyMethods account. */
    "surveymethods.list_email_lists": {
      input: Record<string, never>;
      output: {
        /** The status message returned by SurveyMethods. */
        status: string;
        /** The number of email lists returned. */
        rowCount: number;
        /** The email lists returned by SurveyMethods. */
        emailLists: Array<{
          /**
           * The SurveyMethods email list code.
           * @minLength 1
           */
          code: string;
          /** The email list name. */
          name: string;
          /** The email list type. */
          type: "Basic" | "Advanced";
        }>;
      };
    };
    /** List surveys and their deployment metadata from the SurveyMethods account. */
    "surveymethods.list_surveys": {
      input: {
        /**
         * The positive number of surveys to return per page.
         * @minimum 1
         */
        recordsPerPage?: number;
        /**
         * The positive page number to return.
         * @minimum 1
         */
        startPage?: number;
      };
      output: {
        /** The status message returned by SurveyMethods. */
        status: string;
        /** The total number of matching surveys. */
        rowCount: number;
        /** The returned page number. */
        pageNumber: number;
        /** The surveys on the returned page. */
        surveys: Array<{
          /**
           * The SurveyMethods survey code.
           * @minLength 1
           */
          code: string;
          /** The survey title. */
          title: string;
          /** The survey deployment status. */
          status: string;
          /** The survey creation date and time in US Central time. */
          createdDate: string;
          /** The latest survey launch date and time, or an empty string. */
          latestLaunchDate: string;
          /** The survey close date and time, or an empty string. */
          closedDate: string;
          /** The public web launch URL, or an empty string. */
          webLaunchUrl: string;
        }>;
      };
    };
  }
}
