import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a JSON alert in a TheHive 4 instance. */
    "thehive.create_alert": {
      input: {
        /**
         * The alert type.
         * @minLength 1
         * @maxLength 32
         */
        type: string;
        /**
         * The alert source.
         * @minLength 1
         * @maxLength 32
         */
        source: string;
        /**
         * The unique reference within the alert source.
         * @minLength 1
         * @maxLength 128
         */
        sourceRef: string;
        /**
         * The alert title.
         * @minLength 1
         * @maxLength 512
         */
        title: string;
        /** The alert description. */
        description: string;
        /** The alert timestamp in Unix milliseconds. */
        date?: number;
        /** Whether the connected user follows the alert. */
        follow?: boolean;
        /**
         * The severity level from 1 through 3.
         * @minimum 1
         * @maximum 3
         */
        severity?: number;
        /** Tags assigned to the entity. */
        tags?: Array<string>;
        /**
         * The Traffic Light Protocol level from 0 through 3.
         * @minimum 0
         * @maximum 3
         */
        tlp?: number;
      };
      output: {
        /** A TheHive 4 alert. */
        alert: {
          /** The alert ID. */
          _id?: string;
          /** The alert title. */
          title?: string;
          /** The alert source. */
          source?: string;
          /** The source-specific alert reference. */
          sourceRef?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a case in a TheHive 4 instance. */
    "thehive.create_case": {
      input: {
        /**
         * The case title.
         * @minLength 1
         * @maxLength 512
         */
        title: string;
        /** The case description. */
        description: string;
        /** The case start timestamp in Unix milliseconds. */
        startDate?: number;
        /** The login of the case owner. */
        owner?: string;
        /** Whether the case is flagged. */
        flag?: boolean;
        /**
         * The severity level from 1 through 3.
         * @minimum 1
         * @maximum 3
         */
        severity?: number;
        /** Tags assigned to the entity. */
        tags?: Array<string>;
        /**
         * The Traffic Light Protocol level from 0 through 3.
         * @minimum 0
         * @maximum 3
         */
        tlp?: number;
      };
      output: {
        /** A TheHive 4 case. */
        case: {
          /** The case ID. */
          _id?: string;
          /** The case title. */
          title?: string;
          /** The case description. */
          description?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one TheHive 4 alert by ID. */
    "thehive.get_alert": {
      input: {
        /**
         * The TheHive entity ID or numeric case reference.
         * @minLength 1
         */
        alertId: string;
      };
      output: {
        /** A TheHive 4 alert. */
        alert: {
          /** The alert ID. */
          _id?: string;
          /** The alert title. */
          title?: string;
          /** The alert source. */
          source?: string;
          /** The source-specific alert reference. */
          sourceRef?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one TheHive 4 case by ID or numeric reference. */
    "thehive.get_case": {
      input: {
        /**
         * The TheHive entity ID or numeric case reference.
         * @minLength 1
         */
        caseId: string;
      };
      output: {
        /** A TheHive 4 case. */
        case: {
          /** The case ID. */
          _id?: string;
          /** The case title. */
          title?: string;
          /** The case description. */
          description?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List alerts visible to the connected TheHive 4 user. */
    "thehive.list_alerts": {
      input: {
        /**
         * The maximum number of records to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Alerts returned by TheHive 4. */
        alerts: Array<{
          /** The alert ID. */
          _id?: string;
          /** The alert title. */
          title?: string;
          /** The alert source. */
          source?: string;
          /** The source-specific alert reference. */
          sourceRef?: string;
          [key: string]: unknown;
        }>;
        /** The zero-based offset used for this result page. */
        offset: number;
        /** The requested page size. */
        limit: number;
        /** The offset to request for the next page, or null when this page is incomplete. */
        nextOffset: number | null;
      };
    };
    /** List cases visible to the connected TheHive 4 user. */
    "thehive.list_cases": {
      input: {
        /**
         * The maximum number of records to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Cases returned by TheHive 4. */
        cases: Array<{
          /** The case ID. */
          _id?: string;
          /** The case title. */
          title?: string;
          /** The case description. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The zero-based offset used for this result page. */
        offset: number;
        /** The requested page size. */
        limit: number;
        /** The offset to request for the next page, or null when this page is incomplete. */
        nextOffset: number | null;
      };
    };
  }
}
