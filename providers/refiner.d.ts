import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a Refiner contact to a manual segment. */
    "refiner.add_contact_to_segment": {
      input: {
        /**
         * Segment UUID used for the sync operation.
         * @minLength 1
         */
        segmentUuid: string;
        /**
         * External user identifier stored in Refiner as id.
         * @minLength 1
         */
        id?: string;
        /**
         * Email address used to identify the Refiner contact.
         * @minLength 1
         */
        email?: string;
        /**
         * Refiner UUID.
         * @minLength 1
         */
        uuid?: string;
      };
      output: {
        /** Confirmation message returned by Refiner. */
        message: string;
        /** Generic UUID returned by Refiner, when present. */
        uuid?: string;
        /** Contact UUID referenced by the mutation result, when present. */
        contactUuid?: string;
        /** Segment UUID referenced by the mutation result, when present. */
        segmentUuid?: string;
        /** Response UUID referenced by the mutation result, when present. */
        responseUuid?: string;
        /** Additional response fields returned by Refiner. */
        raw?: Record<string, unknown>;
      };
    };
    /** Retrieve the current Refiner account, project, and subscription information. */
    "refiner.get_account_info": {
      input: Record<string, never>;
      output: {
        /** Account information returned by Refiner. */
        account: {
          /** Organization name associated with the API key. */
          organization_name?: string;
          /** Project name associated with the API key. */
          project_name?: string;
          /** Enabled environments in the project. */
          environments?: Array<string>;
          /** Subscription details returned by Refiner. */
          subscription?: Record<string, unknown>;
          /** Monthly response limit for the current subscription, when present. */
          monthly_responses_limit?: number;
          /** Current response count returned by Refiner, when present. */
          responses_count?: number;
          /** Current subscription usage percentage, when present. */
          usage_percentage?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single Refiner contact by id, email, or uuid. */
    "refiner.get_contact": {
      input: {
        /**
         * External user identifier stored in Refiner as id.
         * @minLength 1
         */
        id?: string;
        /**
         * Email address used to identify the Refiner contact.
         * @minLength 1
         */
        email?: string;
        /**
         * Refiner UUID.
         * @minLength 1
         */
        uuid?: string;
      };
      output: {
        /** Single Refiner contact. */
        contact: {
          /**
           * Unique Refiner contact UUID.
           * @minLength 1
           */
          uuid?: string;
          /**
           * External user identifier stored on the contact.
           * @minLength 1
           */
          id?: string;
          /** Email address stored on the contact. */
          email?: string;
          /** Display name stored on the contact. */
          name?: string;
          /** Job title stored on the contact. */
          title?: string;
          /**
           * Timestamp when the contact was first seen by Refiner.
           * @minLength 1
           */
          first_seen_at?: string;
          /**
           * Timestamp when the contact was last seen by Refiner.
           * @minLength 1
           */
          last_seen_at?: string;
          /** Custom attributes returned for the contact. */
          attributes?: unknown;
          /** Account object associated with the contact, when present. */
          account?: Record<string, unknown>;
          /** Segments assigned to the contact. */
          segments?: Array<{
            /**
             * Unique Refiner segment UUID.
             * @minLength 1
             */
            uuid?: string;
            /** Segment name. */
            name?: string;
            /** Whether the segment is managed manually in Refiner. */
            is_manual?: boolean;
            /** Number of contacts currently assigned to the segment. */
            contacts_count?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Refiner reporting metrics for forms, segments, and questions. */
    "refiner.get_reporting": {
      input: {
        /** Reporting metric family to request from Refiner. */
        reportType: "nps" | "csat" | "score" | "responses" | "views" | "completion";
        /**
         * Question identifiers used to scope the reporting result.
         * @minItems 1
         */
        questionIdentifiers?: Array<string>;
        /**
         * Form UUIDs used to scope the reporting result.
         * @minItems 1
         */
        formUuids?: Array<string>;
        /**
         * Segment UUIDs used to scope the reporting result.
         * @minItems 1
         */
        segmentUuids?: Array<string>;
        /**
         * Tag UUIDs used to scope the reporting result.
         * @minItems 1
         */
        tagUuids?: Array<string>;
        /**
         * Inclusive start date used to scope the report.
         * @format date
         */
        dateRangeStart?: string;
        /**
         * Inclusive end date used to scope the report.
         * @format date
         */
        dateRangeEnd?: string;
      };
      output: {
        /** Reporting metric family returned by Refiner. */
        reportType: "nps" | "csat" | "score" | "responses" | "views" | "completion";
        /** Reporting payload returned by Refiner. */
        report: Record<string, unknown>;
      };
    };
    /** Create or update a Refiner contact using the official identify-user endpoint. */
    "refiner.identify_user": {
      input: {
        /**
         * External user identifier stored in Refiner as id.
         * @minLength 1
         */
        id?: string;
        /**
         * Email address used to identify the Refiner contact.
         * @minLength 1
         */
        email?: string;
        /**
         * Refiner UUID.
         * @minLength 1
         */
        uuid?: string;
        /**
         * Display name of the contact.
         * @minLength 1
         */
        name?: string;
        /** Additional contact attributes to merge into the identify request. */
        traits?: Record<string, unknown>;
        /** Account object to attach to the contact when supported by Refiner. */
        account?: Record<string, unknown>;
        /**
         * Segment UUIDs to assign to the contact during identification.
         * @minItems 1
         */
        segmentUuids?: Array<string>;
      };
      output: {
        /** Confirmation message returned by Refiner. */
        message: string;
        /** Generic UUID returned by Refiner, when present. */
        uuid?: string;
        /** Contact UUID referenced by the mutation result, when present. */
        contactUuid?: string;
        /** Segment UUID referenced by the mutation result, when present. */
        segmentUuid?: string;
        /** Response UUID referenced by the mutation result, when present. */
        responseUuid?: string;
        /** Additional response fields returned by Refiner. */
        raw?: Record<string, unknown>;
      };
    };
    /** List contacts available in the connected Refiner workspace. */
    "refiner.list_contacts": {
      input: {
        /**
         * Page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Pagination cursor returned by a previous Refiner response.
         * @minLength 1
         */
        pageCursor?: string;
        /**
         * Maximum number of records to return per page.
         * @exclusiveMinimum 0
         */
        pageLength?: number;
      };
      output: {
        /** Contacts returned by Refiner. */
        contacts: Array<{
          /**
           * Unique Refiner contact UUID.
           * @minLength 1
           */
          uuid?: string;
          /**
           * External user identifier stored on the contact.
           * @minLength 1
           */
          id?: string;
          /** Email address stored on the contact. */
          email?: string;
          /** Display name stored on the contact. */
          name?: string;
          /** Job title stored on the contact. */
          title?: string;
          /**
           * Timestamp when the contact was first seen by Refiner.
           * @minLength 1
           */
          first_seen_at?: string;
          /**
           * Timestamp when the contact was last seen by Refiner.
           * @minLength 1
           */
          last_seen_at?: string;
          /** Custom attributes returned for the contact. */
          attributes?: unknown;
          /** Account object associated with the contact, when present. */
          account?: Record<string, unknown>;
          /** Segments assigned to the contact. */
          segments?: Array<{
            /**
             * Unique Refiner segment UUID.
             * @minLength 1
             */
            uuid?: string;
            /** Segment name. */
            name?: string;
            /** Whether the segment is managed manually in Refiner. */
            is_manual?: boolean;
            /** Number of contacts currently assigned to the segment. */
            contacts_count?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata for the current result. */
        pagination?: {
          /** Current page number returned by Refiner. */
          current_page?: number;
          /** Last available page number. */
          last_page?: number;
          /** Page length used by Refiner. */
          page_length?: number;
          /** Total number of items that match the query. */
          items_count?: number;
          /** Cursor to use for the next page, or null when none exists. */
          next_page_cursor?: string | null;
          /** Cursor to use for the previous page, or null when none exists. */
          previous_page_cursor?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List forms in the connected Refiner workspace. */
    "refiner.list_forms": {
      input: {
        /**
         * Optional form UUID filter.
         * @minLength 1
         */
        uuid?: string;
        /** Form state filter accepted by Refiner. */
        type?: "all" | "all_with_archived" | "published" | "drafts" | "archived";
        /**
         * Current page number to request.
         * @exclusiveMinimum 0
         */
        currentPage?: number;
        /**
         * Maximum number of records to return per page.
         * @exclusiveMinimum 0
         */
        pageLength?: number;
        /** Whether to include the full form config in the response. */
        showConfig?: boolean;
        /** Whether to include form info metadata. */
        showInfo?: boolean;
      };
      output: {
        /** Forms returned by Refiner. */
        forms: Array<{
          /**
           * Unique Refiner form UUID.
           * @minLength 1
           */
          uuid?: string;
          /** Form title. */
          title?: string;
          /** Current form state. */
          state?: string;
          /** Channels configured for the form. */
          channels?: Array<string>;
          /**
           * Timestamp when the form was created.
           * @minLength 1
           */
          created_at?: string;
          /**
           * Timestamp when the form was published, when present.
           * @minLength 1
           */
          published_at?: string;
          /**
           * Timestamp when the form was archived, when present.
           * @minLength 1
           */
          archived_at?: string;
          /** Number of responses collected by the form. */
          responses_count?: number;
          /** Number of times the form has been viewed. */
          views_count?: number;
          /** Form configuration returned by Refiner. */
          config?: Record<string, unknown>;
          /** Additional form metadata returned by Refiner. */
          info?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata for the current result. */
        pagination?: {
          /** Current page number returned by Refiner. */
          current_page?: number;
          /** Last available page number. */
          last_page?: number;
          /** Page length used by Refiner. */
          page_length?: number;
          /** Total number of items that match the query. */
          items_count?: number;
          /** Cursor to use for the next page, or null when none exists. */
          next_page_cursor?: string | null;
          /** Cursor to use for the previous page, or null when none exists. */
          previous_page_cursor?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List survey responses collected in Refiner. */
    "refiner.list_responses": {
      input: {
        /**
         * Current page number to request.
         * @exclusiveMinimum 0
         */
        currentPage?: number;
        /**
         * Pagination cursor returned by a previous Refiner response.
         * @minLength 1
         */
        pageCursor?: string;
        /**
         * Maximum number of records to return per page.
         * @exclusiveMinimum 0
         */
        pageLength?: number;
        /**
         * Response status filter accepted by Refiner.
         * @minLength 1
         */
        status?: string;
        /**
         * Filter responses by form UUID.
         * @minLength 1
         */
        formUuid?: string;
        /**
         * Filter responses by contact UUID.
         * @minLength 1
         */
        contactUuid?: string;
        /**
         * Filter responses by segment UUID.
         * @minLength 1
         */
        segmentUuid?: string;
        /**
         * Inclusive start date used to filter responses.
         * @format date
         */
        dateRangeStart?: string;
        /**
         * Inclusive end date used to filter responses.
         * @format date
         */
        dateRangeEnd?: string;
      };
      output: {
        /** Responses returned by Refiner. */
        responses: Array<{
          /**
           * Unique Refiner response UUID.
           * @minLength 1
           */
          uuid?: string;
          /** Current response status. */
          status?: string;
          /**
           * Timestamp when the form was first shown to the contact.
           * @minLength 1
           */
          first_shown_at?: string;
          /**
           * Timestamp when the form was most recently shown to the contact.
           * @minLength 1
           */
          last_shown_at?: string;
          /**
           * Timestamp when Refiner first received response data.
           * @minLength 1
           */
          first_data_reception_at?: string;
          /**
           * Timestamp when Refiner most recently received response data.
           * @minLength 1
           */
          last_data_reception_at?: string;
          /**
           * Timestamp when the response was completed, when present.
           * @minLength 1
           */
          completed_at?: string;
          /** Contact summary associated with the response, when present. */
          contact?: {
            /**
             * Unique Refiner contact UUID.
             * @minLength 1
             */
            uuid?: string;
            /**
             * External user identifier stored on the contact.
             * @minLength 1
             */
            id?: string;
            /** Email address stored on the contact. */
            email?: string;
            /** Display name stored on the contact. */
            name?: string;
            [key: string]: unknown;
          };
          /** Form summary associated with the response, when present. */
          form?: {
            /**
             * Unique Refiner form UUID.
             * @minLength 1
             */
            uuid?: string;
            /** Form title returned by Refiner. */
            title?: string;
            /** Current form state returned by Refiner. */
            state?: string;
            [key: string]: unknown;
          };
          /** Question answers and metadata returned for the response. */
          data?: Record<string, unknown>;
          /** Tags assigned to the response. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata for the current result. */
        pagination?: {
          /** Current page number returned by Refiner. */
          current_page?: number;
          /** Last available page number. */
          last_page?: number;
          /** Page length used by Refiner. */
          page_length?: number;
          /** Total number of items that match the query. */
          items_count?: number;
          /** Cursor to use for the next page, or null when none exists. */
          next_page_cursor?: string | null;
          /** Cursor to use for the previous page, or null when none exists. */
          previous_page_cursor?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List segments in the connected Refiner workspace. */
    "refiner.list_segments": {
      input: {
        /**
         * Optional segment UUID filter.
         * @minLength 1
         */
        uuid?: string;
        /**
         * Current page number to request.
         * @exclusiveMinimum 0
         */
        currentPage?: number;
        /**
         * Maximum number of records to return per page.
         * @exclusiveMinimum 0
         */
        pageLength?: number;
      };
      output: {
        /** Segments returned by Refiner. */
        segments: Array<{
          /**
           * Unique Refiner segment UUID.
           * @minLength 1
           */
          uuid?: string;
          /** Segment name. */
          name?: string;
          /** Whether the segment is managed manually in Refiner. */
          is_manual?: boolean;
          /** Number of contacts currently assigned to the segment. */
          contacts_count?: number;
          [key: string]: unknown;
        }>;
        /** Pagination metadata for the current result. */
        pagination?: {
          /** Current page number returned by Refiner. */
          current_page?: number;
          /** Last available page number. */
          last_page?: number;
          /** Page length used by Refiner. */
          page_length?: number;
          /** Total number of items that match the query. */
          items_count?: number;
          /** Cursor to use for the next page, or null when none exists. */
          next_page_cursor?: string | null;
          /** Cursor to use for the previous page, or null when none exists. */
          previous_page_cursor?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Remove a Refiner contact from a manual segment. */
    "refiner.remove_contact_from_segment": {
      input: {
        /**
         * Segment UUID used for the sync operation.
         * @minLength 1
         */
        segmentUuid: string;
        /**
         * External user identifier stored in Refiner as id.
         * @minLength 1
         */
        id?: string;
        /**
         * Email address used to identify the Refiner contact.
         * @minLength 1
         */
        email?: string;
        /**
         * Refiner UUID.
         * @minLength 1
         */
        uuid?: string;
      };
      output: {
        /** Confirmation message returned by Refiner. */
        message: string;
        /** Generic UUID returned by Refiner, when present. */
        uuid?: string;
        /** Contact UUID referenced by the mutation result, when present. */
        contactUuid?: string;
        /** Segment UUID referenced by the mutation result, when present. */
        segmentUuid?: string;
        /** Response UUID referenced by the mutation result, when present. */
        responseUuid?: string;
        /** Additional response fields returned by Refiner. */
        raw?: Record<string, unknown>;
      };
    };
    /** Apply a tag to a Refiner response. */
    "refiner.tag_response": {
      input: {
        /**
         * Response UUID to tag.
         * @minLength 1
         */
        responseUuid: string;
        /**
         * Tag name to apply to the response.
         * @minLength 1
         */
        tagName: string;
      };
      output: {
        /** Confirmation message returned by Refiner. */
        message: string;
        /** Generic UUID returned by Refiner, when present. */
        uuid?: string;
        /** Contact UUID referenced by the mutation result, when present. */
        contactUuid?: string;
        /** Segment UUID referenced by the mutation result, when present. */
        segmentUuid?: string;
        /** Response UUID referenced by the mutation result, when present. */
        responseUuid?: string;
        /** Additional response fields returned by Refiner. */
        raw?: Record<string, unknown>;
      };
    };
    /** Track a product event for a Refiner contact. */
    "refiner.track_event": {
      input: {
        /**
         * External user identifier stored in Refiner as id.
         * @minLength 1
         */
        id?: string;
        /**
         * Email address used to identify the Refiner contact.
         * @minLength 1
         */
        email?: string;
        /**
         * Refiner UUID.
         * @minLength 1
         */
        uuid?: string;
        /**
         * Event name to track in Refiner.
         * @minLength 1
         */
        eventName: string;
        /**
         * Session identifier associated with the event.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Timestamp when the event was received by the source system.
         * @minLength 1
         */
        receivedAt?: string;
        /** Additional event attributes to include in the tracked event. */
        eventAttributes?: Record<string, unknown>;
      };
      output: {
        /** Confirmation message returned by Refiner. */
        message: string;
        /** Generic UUID returned by Refiner, when present. */
        uuid?: string;
        /** Contact UUID referenced by the mutation result, when present. */
        contactUuid?: string;
        /** Segment UUID referenced by the mutation result, when present. */
        segmentUuid?: string;
        /** Response UUID referenced by the mutation result, when present. */
        responseUuid?: string;
        /** Additional response fields returned by Refiner. */
        raw?: Record<string, unknown>;
      };
    };
  }
}
