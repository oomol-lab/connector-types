import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Leexi call or meeting by UUID. */
    "leexi.get_call": {
      input: {
        /**
         * The Leexi UUID for this resource.
         * @format uuid
         */
        uuid: string;
      };
      output: {
        /** A normalized Leexi call or meeting summary. */
        call: {
          /**
           * The Leexi UUID for this resource.
           * @format uuid
           */
          uuid: string;
          /** The string value returned by Leexi. */
          title?: string | null;
          /** The string value returned by Leexi. */
          description?: string | null;
          /** The string value returned by Leexi. */
          source?: string | null;
          /** The string value returned by Leexi. */
          sourceId?: string | null;
          /** The string value returned by Leexi. */
          locale?: string | null;
          /** The string value returned by Leexi. */
          direction?: string | null;
          /** The call duration in seconds when returned by Leexi. */
          duration?: number | null;
          /** The ISO 8601 timestamp returned by Leexi. */
          performedAt?: string | null;
          /** An ISO 8601 timestamp returned by Leexi. */
          createdAt: string;
          /** An ISO 8601 timestamp returned by Leexi. */
          updatedAt: string;
          /** Whether the call is a video call. */
          isVideo?: boolean | null;
          /** Whether the call is visible in the workspace. */
          visible?: boolean | null;
          /** The string value returned by Leexi. */
          leexiUrl?: string | null;
          /** The string value returned by Leexi. */
          recordingUrl?: string | null;
          /** The string value returned by Leexi. */
          transcriptUrl?: string | null;
          /** The string value returned by Leexi. */
          simpleTranscript?: string | null;
          /** A Leexi call owner or participant. */
          owner?: {
            /**
             * The Leexi UUID for this resource.
             * @format uuid
             */
            uuid: string;
            /** The string value returned by Leexi. */
            name?: string | null;
            /** The string value returned by Leexi. */
            email?: string | null;
            /** The raw owner object returned by Leexi. */
            raw: Record<string, unknown>;
          } | null;
          /** The participating Leexi users. */
          participatingUsers?: Array<{
            /**
             * The Leexi UUID for this resource.
             * @format uuid
             */
            uuid: string;
            /** The string value returned by Leexi. */
            name?: string | null;
            /** The string value returned by Leexi. */
            email?: string | null;
            /** The raw owner object returned by Leexi. */
            raw: Record<string, unknown>;
          }>;
          /** The customer phone numbers attached to the call. */
          customerPhoneNumbers?: Array<string>;
          /** The customer email addresses attached to the call. */
          customerEmailAddresses?: Array<string>;
          /** The Leexi conversation type linked to a call. */
          conversationType?: {
            /** The string value returned by Leexi. */
            uuid?: string | null;
            /** The string value returned by Leexi. */
            slug?: string | null;
            /** Whether the conversation type is active. */
            active?: boolean | null;
            /** The raw conversation type object returned by Leexi. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw call object returned by Leexi. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Leexi call note by UUID. */
    "leexi.get_call_note": {
      input: {
        /**
         * The Leexi UUID for this resource.
         * @format uuid
         */
        uuid: string;
      };
      output: {
        /** A normalized Leexi call note. */
        callNote: {
          /**
           * The Leexi UUID for this resource.
           * @format uuid
           */
          uuid: string;
          /** An ISO 8601 timestamp returned by Leexi. */
          createdAt: string;
          /** An ISO 8601 timestamp returned by Leexi. */
          updatedAt: string;
          /** A normalized Leexi call or meeting summary. */
          call: {
            /**
             * The Leexi UUID for this resource.
             * @format uuid
             */
            uuid: string;
            /** The string value returned by Leexi. */
            title?: string | null;
            /** The string value returned by Leexi. */
            description?: string | null;
            /** The string value returned by Leexi. */
            source?: string | null;
            /** The string value returned by Leexi. */
            sourceId?: string | null;
            /** The string value returned by Leexi. */
            locale?: string | null;
            /** The string value returned by Leexi. */
            direction?: string | null;
            /** The call duration in seconds when returned by Leexi. */
            duration?: number | null;
            /** The ISO 8601 timestamp returned by Leexi. */
            performedAt?: string | null;
            /** An ISO 8601 timestamp returned by Leexi. */
            createdAt: string;
            /** An ISO 8601 timestamp returned by Leexi. */
            updatedAt: string;
            /** Whether the call is a video call. */
            isVideo?: boolean | null;
            /** Whether the call is visible in the workspace. */
            visible?: boolean | null;
            /** The string value returned by Leexi. */
            leexiUrl?: string | null;
            /** The string value returned by Leexi. */
            recordingUrl?: string | null;
            /** The string value returned by Leexi. */
            transcriptUrl?: string | null;
            /** The string value returned by Leexi. */
            simpleTranscript?: string | null;
            /** A Leexi call owner or participant. */
            owner?: {
              /**
               * The Leexi UUID for this resource.
               * @format uuid
               */
              uuid: string;
              /** The string value returned by Leexi. */
              name?: string | null;
              /** The string value returned by Leexi. */
              email?: string | null;
              /** The raw owner object returned by Leexi. */
              raw: Record<string, unknown>;
            } | null;
            /** The participating Leexi users. */
            participatingUsers?: Array<{
              /**
               * The Leexi UUID for this resource.
               * @format uuid
               */
              uuid: string;
              /** The string value returned by Leexi. */
              name?: string | null;
              /** The string value returned by Leexi. */
              email?: string | null;
              /** The raw owner object returned by Leexi. */
              raw: Record<string, unknown>;
            }>;
            /** The customer phone numbers attached to the call. */
            customerPhoneNumbers?: Array<string>;
            /** The customer email addresses attached to the call. */
            customerEmailAddresses?: Array<string>;
            /** The Leexi conversation type linked to a call. */
            conversationType?: {
              /** The string value returned by Leexi. */
              uuid?: string | null;
              /** The string value returned by Leexi. */
              slug?: string | null;
              /** Whether the conversation type is active. */
              active?: boolean | null;
              /** The raw conversation type object returned by Leexi. */
              raw: Record<string, unknown>;
            } | null;
            /** The raw call object returned by Leexi. */
            raw: Record<string, unknown>;
          };
          /** The prompt linked to a Leexi call note. */
          prompt?: {
            /**
             * The Leexi UUID for this resource.
             * @format uuid
             */
            uuid: string;
            /** The string value returned by Leexi. */
            title?: string | null;
            /** The string value returned by Leexi. */
            category?: string | null;
            /** The raw prompt object returned by Leexi. */
            raw: Record<string, unknown>;
          } | null;
          /** The translated note variants returned by Leexi. */
          translations?: Array<{
            /**
             * The Leexi UUID for this resource.
             * @format uuid
             */
            uuid: string;
            /** The string value returned by Leexi. */
            locale?: string | null;
            /** The string value returned by Leexi. */
            text?: string | null;
            /** The string value returned by Leexi. */
            originalText?: string | null;
            /** The ISO 8601 timestamp returned by Leexi. */
            updatedAt?: string | null;
            /** The raw translation object returned by Leexi. */
            raw: Record<string, unknown>;
          }>;
          /** The raw call note object returned by Leexi. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List call notes for a Leexi call, optionally filtered by prompt UUID. */
    "leexi.list_call_notes": {
      input: {
        /**
         * The 1-based page number to request from Leexi.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of items to request per page from Leexi.
         * @minimum 1
         * @maximum 100
         * @default 10
         */
        items?: number;
        /**
         * The Leexi UUID for this resource.
         * @format uuid
         */
        callUuid: string;
        /**
         * The Leexi UUID for this resource.
         * @format uuid
         */
        promptUuid?: string;
      };
      output: {
        /** The call notes returned by Leexi. */
        callNotes: Array<{
          /**
           * The Leexi UUID for this resource.
           * @format uuid
           */
          uuid: string;
          /** An ISO 8601 timestamp returned by Leexi. */
          createdAt: string;
          /** An ISO 8601 timestamp returned by Leexi. */
          updatedAt: string;
          /** A normalized Leexi call or meeting summary. */
          call: {
            /**
             * The Leexi UUID for this resource.
             * @format uuid
             */
            uuid: string;
            /** The string value returned by Leexi. */
            title?: string | null;
            /** The string value returned by Leexi. */
            description?: string | null;
            /** The string value returned by Leexi. */
            source?: string | null;
            /** The string value returned by Leexi. */
            sourceId?: string | null;
            /** The string value returned by Leexi. */
            locale?: string | null;
            /** The string value returned by Leexi. */
            direction?: string | null;
            /** The call duration in seconds when returned by Leexi. */
            duration?: number | null;
            /** The ISO 8601 timestamp returned by Leexi. */
            performedAt?: string | null;
            /** An ISO 8601 timestamp returned by Leexi. */
            createdAt: string;
            /** An ISO 8601 timestamp returned by Leexi. */
            updatedAt: string;
            /** Whether the call is a video call. */
            isVideo?: boolean | null;
            /** Whether the call is visible in the workspace. */
            visible?: boolean | null;
            /** The string value returned by Leexi. */
            leexiUrl?: string | null;
            /** The string value returned by Leexi. */
            recordingUrl?: string | null;
            /** The string value returned by Leexi. */
            transcriptUrl?: string | null;
            /** The string value returned by Leexi. */
            simpleTranscript?: string | null;
            /** A Leexi call owner or participant. */
            owner?: {
              /**
               * The Leexi UUID for this resource.
               * @format uuid
               */
              uuid: string;
              /** The string value returned by Leexi. */
              name?: string | null;
              /** The string value returned by Leexi. */
              email?: string | null;
              /** The raw owner object returned by Leexi. */
              raw: Record<string, unknown>;
            } | null;
            /** The participating Leexi users. */
            participatingUsers?: Array<{
              /**
               * The Leexi UUID for this resource.
               * @format uuid
               */
              uuid: string;
              /** The string value returned by Leexi. */
              name?: string | null;
              /** The string value returned by Leexi. */
              email?: string | null;
              /** The raw owner object returned by Leexi. */
              raw: Record<string, unknown>;
            }>;
            /** The customer phone numbers attached to the call. */
            customerPhoneNumbers?: Array<string>;
            /** The customer email addresses attached to the call. */
            customerEmailAddresses?: Array<string>;
            /** The Leexi conversation type linked to a call. */
            conversationType?: {
              /** The string value returned by Leexi. */
              uuid?: string | null;
              /** The string value returned by Leexi. */
              slug?: string | null;
              /** Whether the conversation type is active. */
              active?: boolean | null;
              /** The raw conversation type object returned by Leexi. */
              raw: Record<string, unknown>;
            } | null;
            /** The raw call object returned by Leexi. */
            raw: Record<string, unknown>;
          };
          /** The prompt linked to a Leexi call note. */
          prompt?: {
            /**
             * The Leexi UUID for this resource.
             * @format uuid
             */
            uuid: string;
            /** The string value returned by Leexi. */
            title?: string | null;
            /** The string value returned by Leexi. */
            category?: string | null;
            /** The raw prompt object returned by Leexi. */
            raw: Record<string, unknown>;
          } | null;
          /** The translated note variants returned by Leexi. */
          translations?: Array<{
            /**
             * The Leexi UUID for this resource.
             * @format uuid
             */
            uuid: string;
            /** The string value returned by Leexi. */
            locale?: string | null;
            /** The string value returned by Leexi. */
            text?: string | null;
            /** The string value returned by Leexi. */
            originalText?: string | null;
            /** The ISO 8601 timestamp returned by Leexi. */
            updatedAt?: string | null;
            /** The raw translation object returned by Leexi. */
            raw: Record<string, unknown>;
          }>;
          /** The raw call note object returned by Leexi. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Leexi list endpoints. */
        pagination: {
          /** The current page number. */
          page: number;
          /** The number of items requested for the current page. */
          items: number;
          /** The total number of matching items. */
          count: number;
        };
      };
    };
    /** List calls and meetings in the current Leexi workspace with optional filters. */
    "leexi.list_calls": {
      input: {
        /**
         * The 1-based page number to request from Leexi.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of items to request per page from Leexi.
         * @minimum 1
         * @maximum 100
         * @default 10
         */
        items?: number;
        /** The call ordering returned by the Leexi list calls endpoint. */
        order?: "created_at desc" | "created_at asc" | "performed_at desc" | "performed_at asc" | "updated_at desc" | "updated_at asc";
        /** The Leexi date field used by from/to filters. */
        dateFilter?: "created_at" | "performed_at" | "updated_at";
        /** An ISO 8601 lower bound timestamp for the selected date filter. */
        from?: string;
        /** An ISO 8601 upper bound timestamp for the selected date filter. */
        to?: string;
        /** The integration slug used to filter calls. */
        source?: string;
        /**
         * The integration call ids used to filter results.
         * @minItems 1
         */
        sourceIds?: Array<string>;
        /**
         * The owner user UUIDs used to filter calls.
         * @minItems 1
         */
        ownerUuids?: Array<string>;
        /**
         * The participant user UUIDs used to filter calls.
         * @minItems 1
         */
        participatingUserUuids?: Array<string>;
        /**
         * The customer phone numbers used to filter calls.
         * @minItems 1
         */
        customerPhoneNumbers?: Array<string>;
        /**
         * The customer email addresses used to filter calls.
         * @minItems 1
         */
        customerEmailAddresses?: Array<string>;
        /** Whether Leexi should include the simpleTranscript string in each call item. */
        withSimpleTranscript?: boolean;
      };
      output: {
        /** The calls returned by Leexi. */
        calls: Array<{
          /**
           * The Leexi UUID for this resource.
           * @format uuid
           */
          uuid: string;
          /** The string value returned by Leexi. */
          title?: string | null;
          /** The string value returned by Leexi. */
          description?: string | null;
          /** The string value returned by Leexi. */
          source?: string | null;
          /** The string value returned by Leexi. */
          sourceId?: string | null;
          /** The string value returned by Leexi. */
          locale?: string | null;
          /** The string value returned by Leexi. */
          direction?: string | null;
          /** The call duration in seconds when returned by Leexi. */
          duration?: number | null;
          /** The ISO 8601 timestamp returned by Leexi. */
          performedAt?: string | null;
          /** An ISO 8601 timestamp returned by Leexi. */
          createdAt: string;
          /** An ISO 8601 timestamp returned by Leexi. */
          updatedAt: string;
          /** Whether the call is a video call. */
          isVideo?: boolean | null;
          /** Whether the call is visible in the workspace. */
          visible?: boolean | null;
          /** The string value returned by Leexi. */
          leexiUrl?: string | null;
          /** The string value returned by Leexi. */
          recordingUrl?: string | null;
          /** The string value returned by Leexi. */
          transcriptUrl?: string | null;
          /** The string value returned by Leexi. */
          simpleTranscript?: string | null;
          /** A Leexi call owner or participant. */
          owner?: {
            /**
             * The Leexi UUID for this resource.
             * @format uuid
             */
            uuid: string;
            /** The string value returned by Leexi. */
            name?: string | null;
            /** The string value returned by Leexi. */
            email?: string | null;
            /** The raw owner object returned by Leexi. */
            raw: Record<string, unknown>;
          } | null;
          /** The participating Leexi users. */
          participatingUsers?: Array<{
            /**
             * The Leexi UUID for this resource.
             * @format uuid
             */
            uuid: string;
            /** The string value returned by Leexi. */
            name?: string | null;
            /** The string value returned by Leexi. */
            email?: string | null;
            /** The raw owner object returned by Leexi. */
            raw: Record<string, unknown>;
          }>;
          /** The customer phone numbers attached to the call. */
          customerPhoneNumbers?: Array<string>;
          /** The customer email addresses attached to the call. */
          customerEmailAddresses?: Array<string>;
          /** The Leexi conversation type linked to a call. */
          conversationType?: {
            /** The string value returned by Leexi. */
            uuid?: string | null;
            /** The string value returned by Leexi. */
            slug?: string | null;
            /** Whether the conversation type is active. */
            active?: boolean | null;
            /** The raw conversation type object returned by Leexi. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw call object returned by Leexi. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Leexi list endpoints. */
        pagination: {
          /** The current page number. */
          page: number;
          /** The number of items requested for the current page. */
          items: number;
          /** The total number of matching items. */
          count: number;
        };
      };
    };
    /** List teams in the current Leexi workspace. */
    "leexi.list_teams": {
      input: {
        /**
         * The 1-based page number to request from Leexi.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of items to request per page from Leexi.
         * @minimum 1
         * @maximum 100
         * @default 10
         */
        items?: number;
      };
      output: {
        /** The teams returned by Leexi. */
        teams: Array<{
          /**
           * The Leexi UUID for this resource.
           * @format uuid
           */
          uuid: string;
          /** The team name. */
          name: string;
          /** Whether the team is active. */
          active: boolean;
          /** An ISO 8601 timestamp returned by Leexi. */
          createdAt: string;
          /** An ISO 8601 timestamp returned by Leexi. */
          updatedAt: string;
          /** The raw team object returned by Leexi. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Leexi list endpoints. */
        pagination: {
          /** The current page number. */
          page: number;
          /** The number of items requested for the current page. */
          items: number;
          /** The total number of matching items. */
          count: number;
        };
      };
    };
    /** List users in the current Leexi workspace. */
    "leexi.list_users": {
      input: {
        /**
         * The 1-based page number to request from Leexi.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of items to request per page from Leexi.
         * @minimum 1
         * @maximum 100
         * @default 10
         */
        items?: number;
      };
      output: {
        /** The users returned by Leexi. */
        users: Array<{
          /**
           * The Leexi UUID for this resource.
           * @format uuid
           */
          uuid: string;
          /** The user full name. */
          name: string;
          /** The user email address. */
          email: string;
          /** Whether the user is active. */
          active: boolean;
          /** The string value returned by Leexi. */
          license?: string | null;
          /** A Leexi team. */
          team?: {
            /**
             * The Leexi UUID for this resource.
             * @format uuid
             */
            uuid: string;
            /** The team name. */
            name: string;
            /** Whether the team is active. */
            active: boolean;
            /** An ISO 8601 timestamp returned by Leexi. */
            createdAt: string;
            /** An ISO 8601 timestamp returned by Leexi. */
            updatedAt: string;
            /** The raw team object returned by Leexi. */
            raw: Record<string, unknown>;
          } | null;
          /** An ISO 8601 timestamp returned by Leexi. */
          createdAt: string;
          /** An ISO 8601 timestamp returned by Leexi. */
          updatedAt: string;
          /** The raw user object returned by Leexi. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Leexi list endpoints. */
        pagination: {
          /** The current page number. */
          page: number;
          /** The number of items requested for the current page. */
          items: number;
          /** The total number of matching items. */
          count: number;
        };
      };
    };
  }
}
