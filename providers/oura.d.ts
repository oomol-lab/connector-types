import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one daily activity summary document from Oura by document ID. */
    "oura.get_daily_activity": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one daily cardiovascular age document from Oura by document ID. */
    "oura.get_daily_cardiovascular_age": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one daily readiness summary document from Oura by document ID. */
    "oura.get_daily_readiness": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one daily resilience summary document from Oura by document ID. */
    "oura.get_daily_resilience": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one daily sleep summary document from Oura by document ID. */
    "oura.get_daily_sleep": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one daily SpO2 summary document from Oura by document ID. */
    "oura.get_daily_spo2": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one daily stress summary document from Oura by document ID. */
    "oura.get_daily_stress": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one enhanced tag document from Oura by document ID. */
    "oura.get_enhanced_tag": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get personal information for the authenticated Oura account. */
    "oura.get_personal_info": {
      input: Record<string, never>;
      output: {
        /** The personal information stored on the authenticated Oura account. */
        personalInfo: {
          /**
           * The Oura user identifier.
           * @minLength 1
           */
          id?: string;
          /** The user age in years. */
          age?: number | null;
          /** The user weight in kilograms. */
          weight?: number | null;
          /** The user height in meters. */
          height?: number | null;
          /** The biological sex recorded on the Oura account. */
          biological_sex?: string | null;
          /** The email address of the Oura account. Requires the `email` scope. */
          email?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one rest mode period document from Oura by document ID. */
    "oura.get_rest_mode_period": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one ring configuration document from Oura by document ID. */
    "oura.get_ring_configuration": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one guided or unguided session document from Oura by document ID. */
    "oura.get_session": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one sleep period document from Oura by document ID. */
    "oura.get_sleep": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one recommended bedtime window document from Oura by document ID. */
    "oura.get_sleep_time": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one tag document from Oura by document ID. Oura has superseded this collection by enhanced tags. */
    "oura.get_tag": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one VO2 max measurement document from Oura by document ID. */
    "oura.get_vo2_max": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one workout document from Oura by document ID. */
    "oura.get_workout": {
      input: {
        /**
         * The Oura document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** One Oura document. Fields differ per collection; `id` is always present. */
        document: {
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List daily activity summary documents from Oura. */
    "oura.list_daily_activity": {
      input: {
        /**
         * The earliest day to return daily activity summary documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return daily activity summary documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The daily activity summary documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List daily cardiovascular age documents from Oura. */
    "oura.list_daily_cardiovascular_age": {
      input: {
        /**
         * The earliest day to return daily cardiovascular age documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return daily cardiovascular age documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The daily cardiovascular age documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List daily readiness summary documents from Oura. */
    "oura.list_daily_readiness": {
      input: {
        /**
         * The earliest day to return daily readiness summary documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return daily readiness summary documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The daily readiness summary documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List daily resilience summary documents from Oura. */
    "oura.list_daily_resilience": {
      input: {
        /**
         * The earliest day to return daily resilience summary documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return daily resilience summary documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The daily resilience summary documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List daily sleep summary documents from Oura. */
    "oura.list_daily_sleep": {
      input: {
        /**
         * The earliest day to return daily sleep summary documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return daily sleep summary documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The daily sleep summary documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List daily SpO2 summary documents from Oura. */
    "oura.list_daily_spo2": {
      input: {
        /**
         * The earliest day to return daily SpO2 summary documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return daily SpO2 summary documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The daily SpO2 summary documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List daily stress summary documents from Oura. */
    "oura.list_daily_stress": {
      input: {
        /**
         * The earliest day to return daily stress summary documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return daily stress summary documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The daily stress summary documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List enhanced tag documents from Oura. */
    "oura.list_enhanced_tag": {
      input: {
        /**
         * The earliest day to return enhanced tag documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return enhanced tag documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The enhanced tag documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List heart rate sample documents from Oura. */
    "oura.list_heartrate": {
      input: {
        /**
         * The earliest ISO 8601 timestamp to return heart rate sample documents for.
         * @format date-time
         */
        startDatetime?: string;
        /**
         * The latest ISO 8601 timestamp to return heart rate sample documents for.
         * @format date-time
         */
        endDatetime?: string;
        /** Return only the most recent heart rate sample instead of a full page. */
        latest?: boolean;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The heart rate sample documents returned for this page. */
        documents: Array<Record<string, unknown>>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List rest mode period documents from Oura. */
    "oura.list_rest_mode_period": {
      input: {
        /**
         * The earliest day to return rest mode period documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return rest mode period documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The rest mode period documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List ring battery level sample documents from Oura. */
    "oura.list_ring_battery_level": {
      input: {
        /**
         * The earliest ISO 8601 timestamp to return ring battery level sample documents for.
         * @format date-time
         */
        startDatetime?: string;
        /**
         * The latest ISO 8601 timestamp to return ring battery level sample documents for.
         * @format date-time
         */
        endDatetime?: string;
        /** Return only the most recent ring battery level sample instead of a full page. */
        latest?: boolean;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The ring battery level sample documents returned for this page. */
        documents: Array<Record<string, unknown>>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List ring configuration documents from Oura. */
    "oura.list_ring_configuration": {
      input: {
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The ring configuration documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List guided or unguided session documents from Oura. */
    "oura.list_session": {
      input: {
        /**
         * The earliest day to return guided or unguided session documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return guided or unguided session documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The guided or unguided session documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List sleep period documents from Oura. */
    "oura.list_sleep": {
      input: {
        /**
         * The earliest day to return sleep period documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return sleep period documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The sleep period documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List recommended bedtime window documents from Oura. */
    "oura.list_sleep_time": {
      input: {
        /**
         * The earliest day to return recommended bedtime window documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return recommended bedtime window documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The recommended bedtime window documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List tag documents from Oura. Oura has superseded this collection by enhanced tags. */
    "oura.list_tag": {
      input: {
        /**
         * The earliest day to return tag documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return tag documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The tag documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List VO2 max measurement documents from Oura. */
    "oura.list_vo2_max": {
      input: {
        /**
         * The earliest day to return VO2 max measurement documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return VO2 max measurement documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The VO2 max measurement documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
    /** List workout documents from Oura. */
    "oura.list_workout": {
      input: {
        /**
         * The earliest day to return workout documents for, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The latest day to return workout documents for, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The pagination token returned by a previous call as `nextToken`.
         * @minLength 1
         */
        nextToken?: string;
        /** Extra document fields to include in the response, in addition to the fields Oura always returns. Defaults to all fields. */
        fields?: Array<string>;
      };
      output: {
        /** The workout documents returned for this page. */
        documents: Array<{
          /**
           * The Oura document identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when the last page has been returned. */
        nextToken: string | null;
      };
    };
  }
}
