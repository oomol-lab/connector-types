import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a JSON alert without file observables in a TheHive 5 instance. */
    "thehive5.create_alert": {
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
        /**
         * The alert description.
         * @maxLength 1048576
         */
        description: string;
        /**
         * An external URL related to the alert.
         * @minLength 1
         * @maxLength 4096
         */
        externalLink?: string;
        /** The alert timestamp in Unix milliseconds. */
        date?: number;
        /** Whether the alert is flagged. */
        flag?: boolean;
        /**
         * A concise alert summary.
         * @maxLength 1048576
         */
        summary?: string;
        /**
         * The alert status.
         * @minLength 1
         * @maxLength 64
         */
        status?: string;
        /**
         * The login of the assigned user.
         * @minLength 1
         * @maxLength 128
         */
        assignee?: string;
        /**
         * The case template ID or name.
         * @minLength 1
         * @maxLength 128
         */
        caseTemplate?: string;
        /** Custom field values keyed by custom field name. */
        customFields?: Record<string, unknown>;
        /**
         * The severity level from 1 through 4.
         * @minimum 1
         * @maximum 4
         */
        severity?: number;
        /** Tags assigned to the entity. */
        tags?: Array<string>;
        /**
         * The Traffic Light Protocol level from 0 through 4.
         * @minimum 0
         * @maximum 4
         */
        tlp?: number;
        /**
         * The Permissible Actions Protocol level from 0 through 3.
         * @minimum 0
         * @maximum 3
         */
        pap?: number;
      };
      output: {
        /** A TheHive 5 alert. */
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
    /** Create a case in a TheHive 5 instance. */
    "thehive5.create_case": {
      input: {
        /**
         * The case title.
         * @minLength 1
         * @maxLength 512
         */
        title: string;
        /**
         * The Markdown case description.
         * @maxLength 1048576
         */
        description: string;
        /** The case start timestamp in Unix milliseconds. */
        startDate?: number;
        /** The case end timestamp in Unix milliseconds. */
        endDate?: number;
        /** Whether the case is flagged. */
        flag?: boolean;
        /**
         * The case status.
         * @minLength 1
         * @maxLength 64
         */
        status?: string;
        /**
         * A concise case summary.
         * @maxLength 1048576
         */
        summary?: string;
        /**
         * The login of the assigned user.
         * @minLength 1
         * @maxLength 128
         */
        assignee?: string;
        /**
         * The case template ID or name.
         * @minLength 1
         * @maxLength 128
         */
        caseTemplate?: string;
        /** Custom field values keyed by custom field name. */
        customFields?: Record<string, unknown>;
        /**
         * The severity level from 1 through 4.
         * @minimum 1
         * @maximum 4
         */
        severity?: number;
        /** Tags assigned to the entity. */
        tags?: Array<string>;
        /**
         * The Traffic Light Protocol level from 0 through 4.
         * @minimum 0
         * @maximum 4
         */
        tlp?: number;
        /**
         * The Permissible Actions Protocol level from 0 through 3.
         * @minimum 0
         * @maximum 3
         */
        pap?: number;
      };
      output: {
        /** A TheHive 5 case. */
        case: {
          /** The case ID. */
          _id?: string;
          /** The numeric case reference. */
          number?: number;
          /** The case title. */
          title?: string;
          /** The case description. */
          description?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one TheHive 5 alert by ID. */
    "thehive5.get_alert": {
      input: {
        /**
         * The TheHive entity ID or numeric case reference.
         * @minLength 1
         */
        alertId: string;
      };
      output: {
        /** A TheHive 5 alert. */
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
    /** Retrieve one TheHive 5 case by ID or numeric reference. */
    "thehive5.get_case": {
      input: {
        /**
         * The TheHive entity ID or numeric case reference.
         * @minLength 1
         */
        caseId: string;
      };
      output: {
        /** A TheHive 5 case. */
        case: {
          /** The case ID. */
          _id?: string;
          /** The numeric case reference. */
          number?: number;
          /** The case title. */
          title?: string;
          /** The case description. */
          description?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List alerts visible to the connected TheHive 5 user. */
    "thehive5.list_alerts": {
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
        /** Alerts returned by TheHive 5. */
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
    /** List cases visible to the connected TheHive 5 user. */
    "thehive5.list_cases": {
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
        /** Cases returned by TheHive 5. */
        cases: Array<{
          /** The case ID. */
          _id?: string;
          /** The numeric case reference. */
          number?: number;
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
