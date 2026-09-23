import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a recurring Cronfree schedule that sends POST requests to a webhook URL. */
    "cronfree.create_schedule": {
      input: {
        /**
         * The HTTPS webhook URL Cronfree should call on the selected schedule.
         * @format uri
         */
        hookUrl: string;
        /**
         * The weekdays to run on, using -1 for every day or 0 through 6 for Sunday through Saturday.
         * @minItems 1
         */
        weekdays: Array<"-1" | "0" | "1" | "2" | "3" | "4" | "5" | "6">;
        /**
         * The months to run in, using -1 for every month or 1 through 12 for January through December.
         * @minItems 1
         */
        months: Array<"-1" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12">;
        /**
         * The days of the month to run on, using -1 for every day or 1 through 31.
         * @minItems 1
         */
        monthDays: Array<"-1" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31">;
        /**
         * The hours to run at, using -1 for every hour or 0 through 23.
         * @minItems 1
         */
        hours: Array<"-1" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23">;
        /**
         * The minutes to run at, using -1 for every minute or 0 through 59.
         * @minItems 1
         */
        minutes: Array<"-1" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59">;
        /**
         * The IANA timezone used to interpret the schedule.
         * @minLength 1
         */
        timezone: string;
      };
      output: {
        /** The raw JSON payload returned by Cronfree. */
        result: unknown;
      };
    };
    /** Delete the Cronfree schedule associated with a webhook URL. */
    "cronfree.delete_schedule": {
      input: {
        /**
         * The webhook URL whose Cronfree schedule should be deleted.
         * @format uri
         */
        hookUrl: string;
      };
      output: {
        /** The raw JSON payload returned by Cronfree. */
        result: unknown;
      };
    };
  }
}
