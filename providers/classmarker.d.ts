import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List the ClassMarker groups, links, and assigned tests that the current API key can access. */
    "classmarker.list_groups_links_and_tests": {
      input: Record<string, never>;
      output: {
        /**
         * The ClassMarker request path.
         * @minLength 1
         * @pattern \S
         */
        requestPath: string;
        /** The ClassMarker server timestamp. */
        serverTimestamp: number;
        /** The groups accessible to the API key. */
        groups: Array<{
          /** The ClassMarker group identifier. */
          groupId: number;
          /**
           * The ClassMarker group name.
           * @minLength 1
           * @pattern \S
           */
          groupName: string;
          /** The tests assigned to this group. */
          assignedTests: Array<{
            /** The ClassMarker test identifier. */
            testId: number;
            /**
             * The ClassMarker test name.
             * @minLength 1
             * @pattern \S
             */
            testName: string;
            /** The raw ClassMarker assigned test payload. */
            raw: Record<string, unknown>;
          }>;
          /** The raw ClassMarker group payload. */
          raw: Record<string, unknown>;
        }>;
        /** The links accessible to the API key. */
        links: Array<{
          /** The ClassMarker link identifier. */
          linkId: number;
          /** The ClassMarker link name when present. */
          linkName: string | null;
          /** The unique link URL identifier when available. */
          linkUrlId: string | null;
          /** The quiz URL identifier used to launch the link when available. */
          quizId: string | null;
          /** The ClassMarker access list identifier when available. */
          accessListId: number | null;
          /** The tests assigned to this link. */
          assignedTests: Array<{
            /** The ClassMarker test identifier. */
            testId: number;
            /**
             * The ClassMarker test name.
             * @minLength 1
             * @pattern \S
             */
            testName: string;
            /** The raw ClassMarker assigned test payload. */
            raw: Record<string, unknown>;
          }>;
          /** The raw ClassMarker link payload. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List recent ClassMarker results across all groups the current API key can access. */
    "classmarker.list_recent_group_results": {
      input: {
        /** The UNIX timestamp in seconds used to fetch only newer ClassMarker results. */
        finishedAfterTimestamp: number;
        /**
         * The maximum number of recent results to request.
         * @exclusiveMinimum 0
         */
        limit: number;
      };
      output: {
        /**
         * The ClassMarker request path.
         * @minLength 1
         * @pattern \S
         */
        requestPath: string;
        /** The ClassMarker server timestamp. */
        serverTimestamp: number;
        /** The finishedAfterTimestamp value that ClassMarker actually used. */
        finishedAfterTimestampUsed: number | null;
        /** The groups referenced by the recent results. */
        groups: Array<{
          /** The ClassMarker group identifier. */
          groupId: number;
          /**
           * The ClassMarker group name.
           * @minLength 1
           * @pattern \S
           */
          groupName: string;
          /** The raw ClassMarker group payload. */
          raw: Record<string, unknown>;
        }>;
        /** The tests referenced by the recent results. */
        tests: Array<{
          /** The ClassMarker test identifier. */
          testId: number;
          /**
           * The ClassMarker test name.
           * @minLength 1
           * @pattern \S
           */
          testName: string;
          /** The raw ClassMarker test payload. */
          raw: Record<string, unknown>;
        }>;
        /** The recent ClassMarker results. */
        results: Array<{
          /** The ClassMarker group user identifier when present. */
          userId: number | null;
          /** The learner first name when present. */
          firstName: string | null;
          /** The learner last name when present. */
          lastName: string | null;
          /** The learner email when present. */
          email: string | null;
          /** The ClassMarker test identifier. */
          testId: number;
          /** The group identifier when the result came from a group. */
          groupId: number | null;
          /** The link identifier when the result came from a link. */
          linkId: number | null;
          /** The percentage score. */
          percentage: number | null;
          /** The points scored. */
          pointsScored: number | null;
          /** The total available points. */
          pointsAvailable: number | null;
          /** The UNIX timestamp when the attempt started. */
          timeStarted: number | null;
          /** The UNIX timestamp when the attempt finished. */
          timeFinished: number | null;
          /** The ClassMarker attempt status code. */
          status: string | null;
          /** The formatted attempt duration. */
          duration: string | null;
          /** The required passmark percentage. */
          percentagePassmark: number | null;
          /** Whether the learner passed. */
          passed: boolean | null;
          /** Whether the result still requires manual grading according to ClassMarker. */
          requiresGrading: string | null;
          /** Whether certificates are only issued when the learner passes. */
          giveCertificateOnlyWhenPassed: boolean | null;
          /** The certificate URL when available. */
          certificateUrl: string | null;
          /** The certificate serial when available. */
          certificateSerial: string | null;
          /** The URL for viewing the result when available. */
          viewResultsUrl: string | null;
          /** The ClassMarker test type label. */
          testType: string | null;
          /** The access code used for link results when available. */
          accessCode: string | null;
          /** The external ClassMarker user identifier when available. */
          cmUserId: string | null;
          /** The learner IP address when available. */
          ipAddress: string | null;
          /** The first extra info field when available. */
          extraInfo: string | null;
          /** The second extra info field when available. */
          extraInfo2: string | null;
          /** The third extra info field when available. */
          extraInfo3: string | null;
          /** The fourth extra info field when available. */
          extraInfo4: string | null;
          /** The fifth extra info field when available. */
          extraInfo5: string | null;
          /** ClassMarker monitor event details. */
          monitorEvents: {
            /** Whether browser monitoring is enabled or disabled. */
            browserMonitoring: string | null;
            /** Whether camera monitoring is enabled or disabled. */
            cameraMonitoring: string | null;
            /** The total number of monitor events. */
            totalEventCount: number | null;
            /** The total number of seconds away from the test. */
            totalSecondsAway: number | null;
            /** The individual monitor events. */
            events: Array<{
              /** The monitor event timestamp. */
              timestamp: number;
              /**
               * The event name returned by ClassMarker.
               * @minLength 1
               * @pattern \S
               */
              event: string;
              /** The seconds away value returned by ClassMarker. */
              secondsAway: number;
            }>;
            /** The raw ClassMarker monitor event payload. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw ClassMarker result payload. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of results available to download. */
        numResultsAvailable: number | null;
        /** The number of results returned in this response. */
        numResultsReturned: number | null;
        /** Whether more results exist for the next finishedAfterTimestamp request. */
        moreResultsExist: boolean | null;
        /** The timestamp to use for the next incremental recent-results request. */
        nextFinishedAfterTimestamp: number | null;
      };
    };
    /** List recent ClassMarker results across all links the current API key can access. */
    "classmarker.list_recent_link_results": {
      input: {
        /** The UNIX timestamp in seconds used to fetch only newer ClassMarker results. */
        finishedAfterTimestamp: number;
        /**
         * The maximum number of recent results to request.
         * @exclusiveMinimum 0
         */
        limit: number;
      };
      output: {
        /**
         * The ClassMarker request path.
         * @minLength 1
         * @pattern \S
         */
        requestPath: string;
        /** The ClassMarker server timestamp. */
        serverTimestamp: number;
        /** The finishedAfterTimestamp value that ClassMarker actually used. */
        finishedAfterTimestampUsed: number | null;
        /** The groups referenced by the recent results. */
        groups: Array<{
          /** The ClassMarker group identifier. */
          groupId: number;
          /**
           * The ClassMarker group name.
           * @minLength 1
           * @pattern \S
           */
          groupName: string;
          /** The raw ClassMarker group payload. */
          raw: Record<string, unknown>;
        }>;
        /** The tests referenced by the recent results. */
        tests: Array<{
          /** The ClassMarker test identifier. */
          testId: number;
          /**
           * The ClassMarker test name.
           * @minLength 1
           * @pattern \S
           */
          testName: string;
          /** The raw ClassMarker test payload. */
          raw: Record<string, unknown>;
        }>;
        /** The recent ClassMarker results. */
        results: Array<{
          /** The ClassMarker group user identifier when present. */
          userId: number | null;
          /** The learner first name when present. */
          firstName: string | null;
          /** The learner last name when present. */
          lastName: string | null;
          /** The learner email when present. */
          email: string | null;
          /** The ClassMarker test identifier. */
          testId: number;
          /** The group identifier when the result came from a group. */
          groupId: number | null;
          /** The link identifier when the result came from a link. */
          linkId: number | null;
          /** The percentage score. */
          percentage: number | null;
          /** The points scored. */
          pointsScored: number | null;
          /** The total available points. */
          pointsAvailable: number | null;
          /** The UNIX timestamp when the attempt started. */
          timeStarted: number | null;
          /** The UNIX timestamp when the attempt finished. */
          timeFinished: number | null;
          /** The ClassMarker attempt status code. */
          status: string | null;
          /** The formatted attempt duration. */
          duration: string | null;
          /** The required passmark percentage. */
          percentagePassmark: number | null;
          /** Whether the learner passed. */
          passed: boolean | null;
          /** Whether the result still requires manual grading according to ClassMarker. */
          requiresGrading: string | null;
          /** Whether certificates are only issued when the learner passes. */
          giveCertificateOnlyWhenPassed: boolean | null;
          /** The certificate URL when available. */
          certificateUrl: string | null;
          /** The certificate serial when available. */
          certificateSerial: string | null;
          /** The URL for viewing the result when available. */
          viewResultsUrl: string | null;
          /** The ClassMarker test type label. */
          testType: string | null;
          /** The access code used for link results when available. */
          accessCode: string | null;
          /** The external ClassMarker user identifier when available. */
          cmUserId: string | null;
          /** The learner IP address when available. */
          ipAddress: string | null;
          /** The first extra info field when available. */
          extraInfo: string | null;
          /** The second extra info field when available. */
          extraInfo2: string | null;
          /** The third extra info field when available. */
          extraInfo3: string | null;
          /** The fourth extra info field when available. */
          extraInfo4: string | null;
          /** The fifth extra info field when available. */
          extraInfo5: string | null;
          /** ClassMarker monitor event details. */
          monitorEvents: {
            /** Whether browser monitoring is enabled or disabled. */
            browserMonitoring: string | null;
            /** Whether camera monitoring is enabled or disabled. */
            cameraMonitoring: string | null;
            /** The total number of monitor events. */
            totalEventCount: number | null;
            /** The total number of seconds away from the test. */
            totalSecondsAway: number | null;
            /** The individual monitor events. */
            events: Array<{
              /** The monitor event timestamp. */
              timestamp: number;
              /**
               * The event name returned by ClassMarker.
               * @minLength 1
               * @pattern \S
               */
              event: string;
              /** The seconds away value returned by ClassMarker. */
              secondsAway: number;
            }>;
            /** The raw ClassMarker monitor event payload. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw ClassMarker result payload. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of results available to download. */
        numResultsAvailable: number | null;
        /** The number of results returned in this response. */
        numResultsReturned: number | null;
        /** Whether more results exist for the next finishedAfterTimestamp request. */
        moreResultsExist: boolean | null;
        /** The timestamp to use for the next incremental recent-results request. */
        nextFinishedAfterTimestamp: number | null;
      };
    };
    /** List recent ClassMarker results for one specific group and assigned test pair. */
    "classmarker.list_recent_results_for_group_test": {
      input: {
        /** The ClassMarker group identifier. */
        groupId: number;
        /** The ClassMarker test identifier. */
        testId: number;
        /** The UNIX timestamp in seconds used to fetch only newer ClassMarker results. */
        finishedAfterTimestamp: number;
        /**
         * The maximum number of recent results to request.
         * @exclusiveMinimum 0
         */
        limit: number;
      };
      output: {
        /**
         * The ClassMarker request path.
         * @minLength 1
         * @pattern \S
         */
        requestPath: string;
        /** The ClassMarker server timestamp. */
        serverTimestamp: number;
        /** The finishedAfterTimestamp value that ClassMarker actually used. */
        finishedAfterTimestampUsed: number | null;
        /** The groups referenced by the recent results. */
        groups: Array<{
          /** The ClassMarker group identifier. */
          groupId: number;
          /**
           * The ClassMarker group name.
           * @minLength 1
           * @pattern \S
           */
          groupName: string;
          /** The raw ClassMarker group payload. */
          raw: Record<string, unknown>;
        }>;
        /** The tests referenced by the recent results. */
        tests: Array<{
          /** The ClassMarker test identifier. */
          testId: number;
          /**
           * The ClassMarker test name.
           * @minLength 1
           * @pattern \S
           */
          testName: string;
          /** The raw ClassMarker test payload. */
          raw: Record<string, unknown>;
        }>;
        /** The recent ClassMarker results. */
        results: Array<{
          /** The ClassMarker group user identifier when present. */
          userId: number | null;
          /** The learner first name when present. */
          firstName: string | null;
          /** The learner last name when present. */
          lastName: string | null;
          /** The learner email when present. */
          email: string | null;
          /** The ClassMarker test identifier. */
          testId: number;
          /** The group identifier when the result came from a group. */
          groupId: number | null;
          /** The link identifier when the result came from a link. */
          linkId: number | null;
          /** The percentage score. */
          percentage: number | null;
          /** The points scored. */
          pointsScored: number | null;
          /** The total available points. */
          pointsAvailable: number | null;
          /** The UNIX timestamp when the attempt started. */
          timeStarted: number | null;
          /** The UNIX timestamp when the attempt finished. */
          timeFinished: number | null;
          /** The ClassMarker attempt status code. */
          status: string | null;
          /** The formatted attempt duration. */
          duration: string | null;
          /** The required passmark percentage. */
          percentagePassmark: number | null;
          /** Whether the learner passed. */
          passed: boolean | null;
          /** Whether the result still requires manual grading according to ClassMarker. */
          requiresGrading: string | null;
          /** Whether certificates are only issued when the learner passes. */
          giveCertificateOnlyWhenPassed: boolean | null;
          /** The certificate URL when available. */
          certificateUrl: string | null;
          /** The certificate serial when available. */
          certificateSerial: string | null;
          /** The URL for viewing the result when available. */
          viewResultsUrl: string | null;
          /** The ClassMarker test type label. */
          testType: string | null;
          /** The access code used for link results when available. */
          accessCode: string | null;
          /** The external ClassMarker user identifier when available. */
          cmUserId: string | null;
          /** The learner IP address when available. */
          ipAddress: string | null;
          /** The first extra info field when available. */
          extraInfo: string | null;
          /** The second extra info field when available. */
          extraInfo2: string | null;
          /** The third extra info field when available. */
          extraInfo3: string | null;
          /** The fourth extra info field when available. */
          extraInfo4: string | null;
          /** The fifth extra info field when available. */
          extraInfo5: string | null;
          /** ClassMarker monitor event details. */
          monitorEvents: {
            /** Whether browser monitoring is enabled or disabled. */
            browserMonitoring: string | null;
            /** Whether camera monitoring is enabled or disabled. */
            cameraMonitoring: string | null;
            /** The total number of monitor events. */
            totalEventCount: number | null;
            /** The total number of seconds away from the test. */
            totalSecondsAway: number | null;
            /** The individual monitor events. */
            events: Array<{
              /** The monitor event timestamp. */
              timestamp: number;
              /**
               * The event name returned by ClassMarker.
               * @minLength 1
               * @pattern \S
               */
              event: string;
              /** The seconds away value returned by ClassMarker. */
              secondsAway: number;
            }>;
            /** The raw ClassMarker monitor event payload. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw ClassMarker result payload. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of results available to download. */
        numResultsAvailable: number | null;
        /** The number of results returned in this response. */
        numResultsReturned: number | null;
        /** Whether more results exist for the next finishedAfterTimestamp request. */
        moreResultsExist: boolean | null;
        /** The timestamp to use for the next incremental recent-results request. */
        nextFinishedAfterTimestamp: number | null;
      };
    };
    /** List recent ClassMarker results for one specific link and assigned test pair. */
    "classmarker.list_recent_results_for_link_test": {
      input: {
        /** The ClassMarker link identifier. */
        linkId: number;
        /** The ClassMarker test identifier. */
        testId: number;
        /** The UNIX timestamp in seconds used to fetch only newer ClassMarker results. */
        finishedAfterTimestamp: number;
        /**
         * The maximum number of recent results to request.
         * @exclusiveMinimum 0
         */
        limit: number;
      };
      output: {
        /**
         * The ClassMarker request path.
         * @minLength 1
         * @pattern \S
         */
        requestPath: string;
        /** The ClassMarker server timestamp. */
        serverTimestamp: number;
        /** The finishedAfterTimestamp value that ClassMarker actually used. */
        finishedAfterTimestampUsed: number | null;
        /** The groups referenced by the recent results. */
        groups: Array<{
          /** The ClassMarker group identifier. */
          groupId: number;
          /**
           * The ClassMarker group name.
           * @minLength 1
           * @pattern \S
           */
          groupName: string;
          /** The raw ClassMarker group payload. */
          raw: Record<string, unknown>;
        }>;
        /** The tests referenced by the recent results. */
        tests: Array<{
          /** The ClassMarker test identifier. */
          testId: number;
          /**
           * The ClassMarker test name.
           * @minLength 1
           * @pattern \S
           */
          testName: string;
          /** The raw ClassMarker test payload. */
          raw: Record<string, unknown>;
        }>;
        /** The recent ClassMarker results. */
        results: Array<{
          /** The ClassMarker group user identifier when present. */
          userId: number | null;
          /** The learner first name when present. */
          firstName: string | null;
          /** The learner last name when present. */
          lastName: string | null;
          /** The learner email when present. */
          email: string | null;
          /** The ClassMarker test identifier. */
          testId: number;
          /** The group identifier when the result came from a group. */
          groupId: number | null;
          /** The link identifier when the result came from a link. */
          linkId: number | null;
          /** The percentage score. */
          percentage: number | null;
          /** The points scored. */
          pointsScored: number | null;
          /** The total available points. */
          pointsAvailable: number | null;
          /** The UNIX timestamp when the attempt started. */
          timeStarted: number | null;
          /** The UNIX timestamp when the attempt finished. */
          timeFinished: number | null;
          /** The ClassMarker attempt status code. */
          status: string | null;
          /** The formatted attempt duration. */
          duration: string | null;
          /** The required passmark percentage. */
          percentagePassmark: number | null;
          /** Whether the learner passed. */
          passed: boolean | null;
          /** Whether the result still requires manual grading according to ClassMarker. */
          requiresGrading: string | null;
          /** Whether certificates are only issued when the learner passes. */
          giveCertificateOnlyWhenPassed: boolean | null;
          /** The certificate URL when available. */
          certificateUrl: string | null;
          /** The certificate serial when available. */
          certificateSerial: string | null;
          /** The URL for viewing the result when available. */
          viewResultsUrl: string | null;
          /** The ClassMarker test type label. */
          testType: string | null;
          /** The access code used for link results when available. */
          accessCode: string | null;
          /** The external ClassMarker user identifier when available. */
          cmUserId: string | null;
          /** The learner IP address when available. */
          ipAddress: string | null;
          /** The first extra info field when available. */
          extraInfo: string | null;
          /** The second extra info field when available. */
          extraInfo2: string | null;
          /** The third extra info field when available. */
          extraInfo3: string | null;
          /** The fourth extra info field when available. */
          extraInfo4: string | null;
          /** The fifth extra info field when available. */
          extraInfo5: string | null;
          /** ClassMarker monitor event details. */
          monitorEvents: {
            /** Whether browser monitoring is enabled or disabled. */
            browserMonitoring: string | null;
            /** Whether camera monitoring is enabled or disabled. */
            cameraMonitoring: string | null;
            /** The total number of monitor events. */
            totalEventCount: number | null;
            /** The total number of seconds away from the test. */
            totalSecondsAway: number | null;
            /** The individual monitor events. */
            events: Array<{
              /** The monitor event timestamp. */
              timestamp: number;
              /**
               * The event name returned by ClassMarker.
               * @minLength 1
               * @pattern \S
               */
              event: string;
              /** The seconds away value returned by ClassMarker. */
              secondsAway: number;
            }>;
            /** The raw ClassMarker monitor event payload. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw ClassMarker result payload. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of results available to download. */
        numResultsAvailable: number | null;
        /** The number of results returned in this response. */
        numResultsReturned: number | null;
        /** Whether more results exist for the next finishedAfterTimestamp request. */
        moreResultsExist: boolean | null;
        /** The timestamp to use for the next incremental recent-results request. */
        nextFinishedAfterTimestamp: number | null;
      };
    };
  }
}
