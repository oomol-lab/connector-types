import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Pipedrive activity with subject, due date, linked records, participants, attendees, and notes. */
    "pipedrive.create_activity": {
      input: {
        /**
         * Activity subject.
         * @minLength 1
         */
        subject: string;
        /**
         * Activity type.
         * @minLength 1
         */
        type?: string;
        /**
         * Owner user ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Linked deal ID.
         * @exclusiveMinimum 0
         */
        dealId?: number;
        /**
         * Linked lead UUID.
         * @minLength 1
         */
        leadId?: string;
        /**
         * Linked person ID.
         * @exclusiveMinimum 0
         */
        personId?: number;
        /**
         * Linked organization ID.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Linked project ID.
         * @exclusiveMinimum 0
         */
        projectId?: number;
        /**
         * Due date in YYYY-MM-DD format.
         * @format date
         */
        dueDate?: string;
        /**
         * Due time accepted by Pipedrive.
         * @minLength 1
         */
        dueTime?: string;
        /**
         * Activity duration accepted by Pipedrive.
         * @minLength 1
         */
        duration?: string;
        /** Whether the activity blocks calendar time. */
        busy?: boolean;
        /** Whether the activity should be marked done. */
        done?: boolean;
        /** Activity location. */
        location?: {
          /** Full formatted address. */
          value?: string;
          /** Country component. */
          country?: string;
          /** First administrative area component. */
          adminAreaLevel1?: string;
          /** Second administrative area component. */
          adminAreaLevel2?: string;
          /** City or locality component. */
          locality?: string;
          /** Neighborhood or sublocality component. */
          sublocality?: string;
          /** Street or route component. */
          route?: string;
          /** Street number component. */
          streetNumber?: string;
          /** Subpremise component such as suite or apartment. */
          subpremise?: string;
          /** Postal code component. */
          postalCode?: string;
        };
        /**
         * Participants linked to the activity.
         * @minItems 1
         */
        participants?: Array<{
          /**
           * Participant person ID.
           * @exclusiveMinimum 0
           */
          personId: number;
          /** Whether the participant is the primary participant for the activity. */
          primary?: boolean;
        }>;
        /**
         * Activity attendees.
         * @minItems 1
         */
        attendees?: Array<{
          /** Attendee email address. */
          email?: string;
          /** Attendee name. */
          name?: string;
          /** Attendee response status. */
          status?: string;
          /** Whether the attendee is the organizer. */
          isOrganizer?: boolean;
          /**
           * Related Pipedrive person ID.
           * @exclusiveMinimum 0
           */
          personId?: number;
          /**
           * Related Pipedrive user ID.
           * @exclusiveMinimum 0
           */
          userId?: number;
        }>;
        /** Public description visible in Pipedrive. */
        publicDescription?: string;
        /** Activity priority. */
        priority?: number;
        /** Activity note. */
        note?: string;
      };
      output: {
        /** Returned activity record. */
        activity: {
          /**
           * Activity ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Activity subject. */
          subject: string;
          /** Activity type. */
          type: string;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /**
           * Creator user ID.
           * @exclusiveMinimum 0
           */
          creator_user_id?: number | null;
          /** Whether the activity is deleted. */
          is_deleted?: boolean;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /**
           * Linked deal ID.
           * @exclusiveMinimum 0
           */
          deal_id?: number | null;
          /** Linked lead UUID. */
          lead_id?: string | null;
          /**
           * Linked person ID.
           * @exclusiveMinimum 0
           */
          person_id?: number | null;
          /**
           * Linked organization ID.
           * @exclusiveMinimum 0
           */
          org_id?: number | null;
          /**
           * Linked project ID.
           * @exclusiveMinimum 0
           */
          project_id?: number | null;
          /** Due date. */
          due_date?: string | null;
          /** Due time. */
          due_time?: string | null;
          /** Activity duration. */
          duration?: string | null;
          /** Whether the activity blocks calendar time. */
          busy?: boolean | null;
          /** Whether the activity is marked as done. */
          done?: boolean;
          /** Timestamp when the activity was marked done. */
          marked_as_done_time?: string | null;
          /** Activity location. */
          location?: {
            /** Full formatted address. */
            value?: string | null;
            /** Country component. */
            country?: string | null;
            /** First administrative area component. */
            admin_area_level_1?: string | null;
            /** Second administrative area component. */
            admin_area_level_2?: string | null;
            /** City or locality component. */
            locality?: string | null;
            /** Neighborhood or sublocality component. */
            sublocality?: string | null;
            /** Street or route component. */
            route?: string | null;
            /** Street number component. */
            street_number?: string | null;
            /** Subpremise component such as suite or apartment. */
            subpremise?: string | null;
            /** Postal code component. */
            postal_code?: string | null;
            [key: string]: unknown;
          } | null;
          /** Linked participants. */
          participants?: Array<{
            /**
             * Participant person ID.
             * @exclusiveMinimum 0
             */
            person_id: number;
            /** Whether the participant is the primary participant for the activity. */
            primary?: boolean;
          }>;
          /** Activity attendees. */
          attendees?: Array<{
            /** Attendee email address. */
            email?: string | null;
            /** Attendee name. */
            name?: string | null;
            /** Attendee response status. */
            status?: string | null;
            /** Whether the attendee is the organizer. */
            is_organizer?: boolean | null;
            /**
             * Related Pipedrive person ID.
             * @exclusiveMinimum 0
             */
            person_id?: number | null;
            /**
             * Related Pipedrive user ID.
             * @exclusiveMinimum 0
             */
            user_id?: number | null;
          }>;
          /** Conference client. */
          conference_meeting_client?: string | null;
          /** Conference URL. */
          conference_meeting_url?: string | null;
          /** Conference meeting ID. */
          conference_meeting_id?: string | null;
          /** Public description. */
          public_description?: string | null;
          /** Activity priority. */
          priority?: number | null;
          /** Activity note. */
          note?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Pipedrive deal with title, contact links, pipeline placement, labels, and optional custom fields. */
    "pipedrive.create_deal": {
      input: {
        /**
         * Deal title.
         * @minLength 1
         */
        title: string;
        /**
         * Owner user ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Linked person ID.
         * @exclusiveMinimum 0
         */
        personId?: number;
        /**
         * Linked organization ID.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Pipeline ID.
         * @exclusiveMinimum 0
         */
        pipelineId?: number;
        /**
         * Stage ID.
         * @exclusiveMinimum 0
         */
        stageId?: number;
        /** Deal monetary value. */
        value?: number;
        /**
         * Deal currency.
         * @minLength 1
         */
        currency?: string;
        /** Deal status. */
        status?: "open" | "won" | "lost";
        /** Winning probability percentage. */
        probability?: number | null;
        /** Reason for a lost deal. */
        lostReason?: string | null;
        /** Pipedrive visibility flag. */
        visibleTo?: number;
        /**
         * Close timestamp in RFC 3339 format.
         * @format date-time
         */
        closeTime?: string;
        /**
         * Expected close date in YYYY-MM-DD format.
         * @format date
         */
        expectedCloseDate?: string;
        /**
         * Pipedrive label IDs.
         * @minItems 1
         */
        labelIds?: Array<number>;
        /** Custom field values keyed by field hash. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** Returned deal record. */
        deal: {
          /**
           * Deal ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Deal title. */
          title: string;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /**
           * Linked person ID.
           * @exclusiveMinimum 0
           */
          person_id?: number | null;
          /**
           * Linked organization ID.
           * @exclusiveMinimum 0
           */
          org_id?: number | null;
          /**
           * Pipeline ID.
           * @exclusiveMinimum 0
           */
          pipeline_id?: number | null;
          /**
           * Stage ID.
           * @exclusiveMinimum 0
           */
          stage_id?: number | null;
          /** Deal monetary value. */
          value?: number | null;
          /** Deal currency. */
          currency?: string | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /** Last stage change timestamp. */
          stage_change_time?: string | null;
          /** Whether the deal is deleted. */
          is_deleted?: boolean;
          /** Whether the deal is archived. */
          is_archived?: boolean;
          /** Deal status. */
          status?: string | null;
          /** Winning probability percentage. */
          probability?: number | null;
          /** Reason for a lost deal. */
          lost_reason?: string | null;
          /** Pipedrive visibility flag. */
          visible_to?: number;
          /** Close timestamp. */
          close_time?: string | null;
          /** Won timestamp. */
          won_time?: string | null;
          /** Lost timestamp. */
          lost_time?: string | null;
          /** Expected close date. */
          expected_close_date?: string | null;
          /** Applied label IDs. */
          label_ids?: Array<number>;
          /** Source lead UUID when available. */
          source_lead_id?: string | null;
          /** Custom fields returned by Pipedrive. */
          custom_fields?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Pipedrive organization with optional labels, address, and custom fields. */
    "pipedrive.create_organization": {
      input: {
        /**
         * Organization name.
         * @minLength 1
         */
        name: string;
        /**
         * Owner user ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /** Pipedrive visibility flag. */
        visibleTo?: number;
        /**
         * Pipedrive label IDs.
         * @minItems 1
         */
        labelIds?: Array<number>;
        /** Organization address. */
        address?: {
          /** Full formatted address. */
          value?: string;
          /** Country component. */
          country?: string;
          /** First administrative area component. */
          adminAreaLevel1?: string;
          /** Second administrative area component. */
          adminAreaLevel2?: string;
          /** City or locality component. */
          locality?: string;
          /** Neighborhood or sublocality component. */
          sublocality?: string;
          /** Street or route component. */
          route?: string;
          /** Street number component. */
          streetNumber?: string;
          /** Subpremise component such as suite or apartment. */
          subpremise?: string;
          /** Postal code component. */
          postalCode?: string;
        };
        /** Custom field values keyed by field hash. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** Returned organization record. */
        organization: {
          /**
           * Organization ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Organization name. */
          name: string;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /** Whether the organization is deleted. */
          is_deleted?: boolean;
          /** Pipedrive visibility flag. */
          visible_to?: number;
          /** Organization address. */
          address?: {
            /** Full formatted address. */
            value?: string | null;
            /** Country component. */
            country?: string | null;
            /** First administrative area component. */
            admin_area_level_1?: string | null;
            /** Second administrative area component. */
            admin_area_level_2?: string | null;
            /** City or locality component. */
            locality?: string | null;
            /** Neighborhood or sublocality component. */
            sublocality?: string | null;
            /** Street or route component. */
            route?: string | null;
            /** Street number component. */
            street_number?: string | null;
            /** Subpremise component such as suite or apartment. */
            subpremise?: string | null;
            /** Postal code component. */
            postal_code?: string | null;
            [key: string]: unknown;
          } | null;
          /** Applied label IDs. */
          label_ids?: Array<number>;
          /** Custom fields returned by Pipedrive. */
          custom_fields?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Pipedrive person with emails, phones, labels, and optional custom fields. */
    "pipedrive.create_person": {
      input: {
        /**
         * Person name.
         * @minLength 1
         */
        name: string;
        /**
         * Owner user ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Linked organization ID.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Person email addresses.
         * @minItems 1
         */
        emails?: Array<{
          /**
           * Contact value such as an email address or phone number.
           * @minLength 1
           */
          value: string;
          /** Whether this contact value is the primary one for the record. */
          primary?: boolean;
          /** User-facing label attached to the contact value. */
          label?: string | null;
        }>;
        /**
         * Person phone numbers.
         * @minItems 1
         */
        phones?: Array<{
          /**
           * Contact value such as an email address or phone number.
           * @minLength 1
           */
          value: string;
          /** Whether this contact value is the primary one for the record. */
          primary?: boolean;
          /** User-facing label attached to the contact value. */
          label?: string | null;
        }>;
        /** Pipedrive visibility flag. */
        visibleTo?: number;
        /**
         * Pipedrive label IDs.
         * @minItems 1
         */
        labelIds?: Array<number>;
        /** Campaign marketing status accepted by Pipedrive. */
        marketingStatus?: "no_consent" | "unsubscribed" | "subscribed" | "archived";
        /** Custom field values keyed by field hash. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** Returned person record. */
        person: {
          /**
           * Person ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Person name. */
          name: string;
          /** Person first name. */
          first_name?: string | null;
          /** Person last name. */
          last_name?: string | null;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /**
           * Linked organization ID.
           * @exclusiveMinimum 0
           */
          org_id?: number | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /** Person email addresses. */
          emails?: Array<{
            /**
             * Contact value such as an email address or phone number.
             * @minLength 1
             */
            value: string;
            /** Whether this contact value is the primary one for the record. */
            primary?: boolean;
            /** User-facing label attached to the contact value. */
            label?: string | null;
          }>;
          /** Person phone numbers. */
          phones?: Array<{
            /**
             * Contact value such as an email address or phone number.
             * @minLength 1
             */
            value: string;
            /** Whether this contact value is the primary one for the record. */
            primary?: boolean;
            /** User-facing label attached to the contact value. */
            label?: string | null;
          }>;
          /** Whether the person is deleted. */
          is_deleted?: boolean;
          /** Pipedrive visibility flag. */
          visible_to?: number;
          /** Applied label IDs. */
          label_ids?: Array<number>;
          /** Picture ID attached to the person. */
          picture_id?: number | null;
          /** Postal address returned by Pipedrive. */
          postal_address?: {
            /** Full formatted address. */
            value?: string | null;
            /** Country component. */
            country?: string | null;
            /** First administrative area component. */
            admin_area_level_1?: string | null;
            /** Second administrative area component. */
            admin_area_level_2?: string | null;
            /** City or locality component. */
            locality?: string | null;
            /** Neighborhood or sublocality component. */
            sublocality?: string | null;
            /** Street or route component. */
            route?: string | null;
            /** Street number component. */
            street_number?: string | null;
            /** Subpremise component such as suite or apartment. */
            subpremise?: string | null;
            /** Postal code component. */
            postal_code?: string | null;
            [key: string]: unknown;
          } | null;
          /** Notes returned by contact sync when available. */
          notes?: string | null;
          /** Instant messaging handles. */
          im?: Array<{
            /**
             * Contact value such as an email address or phone number.
             * @minLength 1
             */
            value: string;
            /** Whether this contact value is the primary one for the record. */
            primary?: boolean;
            /** User-facing label attached to the contact value. */
            label?: string | null;
          }>;
          /** Birthday returned by contact sync. */
          birthday?: string | null;
          /** Job title returned by contact sync. */
          job_title?: string | null;
          /** Campaign marketing status when available. */
          marketing_status?: string | null;
          /** Custom fields returned by Pipedrive. */
          custom_fields?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one Pipedrive activity by activity ID. */
    "pipedrive.delete_activity": {
      input: {
        /**
         * Activity ID.
         * @exclusiveMinimum 0
         */
        activityId: number;
      };
      output: {
        /**
         * Deleted Pipedrive entity ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete one Pipedrive deal by deal ID. */
    "pipedrive.delete_deal": {
      input: {
        /**
         * Deal ID.
         * @exclusiveMinimum 0
         */
        dealId: number;
      };
      output: {
        /**
         * Deleted Pipedrive entity ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete one Pipedrive organization by organization ID. */
    "pipedrive.delete_organization": {
      input: {
        /**
         * Organization ID.
         * @exclusiveMinimum 0
         */
        organizationId: number;
      };
      output: {
        /**
         * Deleted Pipedrive entity ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete one Pipedrive person by person ID. */
    "pipedrive.delete_person": {
      input: {
        /**
         * Person ID.
         * @exclusiveMinimum 0
         */
        personId: number;
      };
      output: {
        /**
         * Deleted Pipedrive entity ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Get one Pipedrive activity by activity ID. */
    "pipedrive.get_activity": {
      input: {
        /**
         * Activity ID.
         * @exclusiveMinimum 0
         */
        activityId: number;
        /**
         * Additional activity fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"attendees">;
      };
      output: {
        /** Returned activity record. */
        activity: {
          /**
           * Activity ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Activity subject. */
          subject: string;
          /** Activity type. */
          type: string;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /**
           * Creator user ID.
           * @exclusiveMinimum 0
           */
          creator_user_id?: number | null;
          /** Whether the activity is deleted. */
          is_deleted?: boolean;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /**
           * Linked deal ID.
           * @exclusiveMinimum 0
           */
          deal_id?: number | null;
          /** Linked lead UUID. */
          lead_id?: string | null;
          /**
           * Linked person ID.
           * @exclusiveMinimum 0
           */
          person_id?: number | null;
          /**
           * Linked organization ID.
           * @exclusiveMinimum 0
           */
          org_id?: number | null;
          /**
           * Linked project ID.
           * @exclusiveMinimum 0
           */
          project_id?: number | null;
          /** Due date. */
          due_date?: string | null;
          /** Due time. */
          due_time?: string | null;
          /** Activity duration. */
          duration?: string | null;
          /** Whether the activity blocks calendar time. */
          busy?: boolean | null;
          /** Whether the activity is marked as done. */
          done?: boolean;
          /** Timestamp when the activity was marked done. */
          marked_as_done_time?: string | null;
          /** Activity location. */
          location?: {
            /** Full formatted address. */
            value?: string | null;
            /** Country component. */
            country?: string | null;
            /** First administrative area component. */
            admin_area_level_1?: string | null;
            /** Second administrative area component. */
            admin_area_level_2?: string | null;
            /** City or locality component. */
            locality?: string | null;
            /** Neighborhood or sublocality component. */
            sublocality?: string | null;
            /** Street or route component. */
            route?: string | null;
            /** Street number component. */
            street_number?: string | null;
            /** Subpremise component such as suite or apartment. */
            subpremise?: string | null;
            /** Postal code component. */
            postal_code?: string | null;
            [key: string]: unknown;
          } | null;
          /** Linked participants. */
          participants?: Array<{
            /**
             * Participant person ID.
             * @exclusiveMinimum 0
             */
            person_id: number;
            /** Whether the participant is the primary participant for the activity. */
            primary?: boolean;
          }>;
          /** Activity attendees. */
          attendees?: Array<{
            /** Attendee email address. */
            email?: string | null;
            /** Attendee name. */
            name?: string | null;
            /** Attendee response status. */
            status?: string | null;
            /** Whether the attendee is the organizer. */
            is_organizer?: boolean | null;
            /**
             * Related Pipedrive person ID.
             * @exclusiveMinimum 0
             */
            person_id?: number | null;
            /**
             * Related Pipedrive user ID.
             * @exclusiveMinimum 0
             */
            user_id?: number | null;
          }>;
          /** Conference client. */
          conference_meeting_client?: string | null;
          /** Conference URL. */
          conference_meeting_url?: string | null;
          /** Conference meeting ID. */
          conference_meeting_id?: string | null;
          /** Public description. */
          public_description?: string | null;
          /** Activity priority. */
          priority?: number | null;
          /** Activity note. */
          note?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Pipedrive deal by deal ID. */
    "pipedrive.get_deal": {
      input: {
        /**
         * Deal ID.
         * @exclusiveMinimum 0
         */
        dealId: number;
        /**
         * Additional deal fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"next_activity_id" | "last_activity_id" | "first_won_time" | "products_count" | "files_count" | "notes_count" | "followers_count" | "email_messages_count" | "activities_count" | "done_activities_count" | "undone_activities_count" | "participants_count" | "last_incoming_mail_time" | "last_outgoing_mail_time" | "smart_bcc_email" | "source_lead_id">;
        /**
         * Custom field keys to request from Pipedrive.
         * @minItems 1
         * @maxItems 15
         */
        customFields?: Array<string>;
      };
      output: {
        /** Returned deal record. */
        deal: {
          /**
           * Deal ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Deal title. */
          title: string;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /**
           * Linked person ID.
           * @exclusiveMinimum 0
           */
          person_id?: number | null;
          /**
           * Linked organization ID.
           * @exclusiveMinimum 0
           */
          org_id?: number | null;
          /**
           * Pipeline ID.
           * @exclusiveMinimum 0
           */
          pipeline_id?: number | null;
          /**
           * Stage ID.
           * @exclusiveMinimum 0
           */
          stage_id?: number | null;
          /** Deal monetary value. */
          value?: number | null;
          /** Deal currency. */
          currency?: string | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /** Last stage change timestamp. */
          stage_change_time?: string | null;
          /** Whether the deal is deleted. */
          is_deleted?: boolean;
          /** Whether the deal is archived. */
          is_archived?: boolean;
          /** Deal status. */
          status?: string | null;
          /** Winning probability percentage. */
          probability?: number | null;
          /** Reason for a lost deal. */
          lost_reason?: string | null;
          /** Pipedrive visibility flag. */
          visible_to?: number;
          /** Close timestamp. */
          close_time?: string | null;
          /** Won timestamp. */
          won_time?: string | null;
          /** Lost timestamp. */
          lost_time?: string | null;
          /** Expected close date. */
          expected_close_date?: string | null;
          /** Applied label IDs. */
          label_ids?: Array<number>;
          /** Source lead UUID when available. */
          source_lead_id?: string | null;
          /** Custom fields returned by Pipedrive. */
          custom_fields?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Pipedrive organization by organization ID. */
    "pipedrive.get_organization": {
      input: {
        /**
         * Organization ID.
         * @exclusiveMinimum 0
         */
        organizationId: number;
        /**
         * Additional organization fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"next_activity_id" | "last_activity_id" | "open_deals_count" | "related_open_deals_count" | "closed_deals_count" | "related_closed_deals_count" | "email_messages_count" | "people_count" | "activities_count" | "done_activities_count" | "undone_activities_count" | "files_count" | "notes_count" | "followers_count" | "won_deals_count" | "related_won_deals_count" | "lost_deals_count" | "related_lost_deals_count" | "smart_bcc_email">;
        /**
         * Custom field keys to request from Pipedrive.
         * @minItems 1
         * @maxItems 15
         */
        customFields?: Array<string>;
      };
      output: {
        /** Returned organization record. */
        organization: {
          /**
           * Organization ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Organization name. */
          name: string;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /** Whether the organization is deleted. */
          is_deleted?: boolean;
          /** Pipedrive visibility flag. */
          visible_to?: number;
          /** Organization address. */
          address?: {
            /** Full formatted address. */
            value?: string | null;
            /** Country component. */
            country?: string | null;
            /** First administrative area component. */
            admin_area_level_1?: string | null;
            /** Second administrative area component. */
            admin_area_level_2?: string | null;
            /** City or locality component. */
            locality?: string | null;
            /** Neighborhood or sublocality component. */
            sublocality?: string | null;
            /** Street or route component. */
            route?: string | null;
            /** Street number component. */
            street_number?: string | null;
            /** Subpremise component such as suite or apartment. */
            subpremise?: string | null;
            /** Postal code component. */
            postal_code?: string | null;
            [key: string]: unknown;
          } | null;
          /** Applied label IDs. */
          label_ids?: Array<number>;
          /** Custom fields returned by Pipedrive. */
          custom_fields?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Pipedrive person by person ID. */
    "pipedrive.get_person": {
      input: {
        /**
         * Person ID.
         * @exclusiveMinimum 0
         */
        personId: number;
        /**
         * Additional person fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"next_activity_id" | "last_activity_id" | "open_deals_count" | "related_open_deals_count" | "closed_deals_count" | "related_closed_deals_count" | "participant_open_deals_count" | "participant_closed_deals_count" | "email_messages_count" | "activities_count" | "done_activities_count" | "undone_activities_count" | "files_count" | "notes_count" | "followers_count" | "won_deals_count" | "related_won_deals_count" | "lost_deals_count" | "related_lost_deals_count" | "last_incoming_mail_time" | "last_outgoing_mail_time" | "marketing_status" | "doi_status" | "smart_bcc_email">;
        /**
         * Custom field keys to request from Pipedrive.
         * @minItems 1
         * @maxItems 15
         */
        customFields?: Array<string>;
      };
      output: {
        /** Returned person record. */
        person: {
          /**
           * Person ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Person name. */
          name: string;
          /** Person first name. */
          first_name?: string | null;
          /** Person last name. */
          last_name?: string | null;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /**
           * Linked organization ID.
           * @exclusiveMinimum 0
           */
          org_id?: number | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /** Person email addresses. */
          emails?: Array<{
            /**
             * Contact value such as an email address or phone number.
             * @minLength 1
             */
            value: string;
            /** Whether this contact value is the primary one for the record. */
            primary?: boolean;
            /** User-facing label attached to the contact value. */
            label?: string | null;
          }>;
          /** Person phone numbers. */
          phones?: Array<{
            /**
             * Contact value such as an email address or phone number.
             * @minLength 1
             */
            value: string;
            /** Whether this contact value is the primary one for the record. */
            primary?: boolean;
            /** User-facing label attached to the contact value. */
            label?: string | null;
          }>;
          /** Whether the person is deleted. */
          is_deleted?: boolean;
          /** Pipedrive visibility flag. */
          visible_to?: number;
          /** Applied label IDs. */
          label_ids?: Array<number>;
          /** Picture ID attached to the person. */
          picture_id?: number | null;
          /** Postal address returned by Pipedrive. */
          postal_address?: {
            /** Full formatted address. */
            value?: string | null;
            /** Country component. */
            country?: string | null;
            /** First administrative area component. */
            admin_area_level_1?: string | null;
            /** Second administrative area component. */
            admin_area_level_2?: string | null;
            /** City or locality component. */
            locality?: string | null;
            /** Neighborhood or sublocality component. */
            sublocality?: string | null;
            /** Street or route component. */
            route?: string | null;
            /** Street number component. */
            street_number?: string | null;
            /** Subpremise component such as suite or apartment. */
            subpremise?: string | null;
            /** Postal code component. */
            postal_code?: string | null;
            [key: string]: unknown;
          } | null;
          /** Notes returned by contact sync when available. */
          notes?: string | null;
          /** Instant messaging handles. */
          im?: Array<{
            /**
             * Contact value such as an email address or phone number.
             * @minLength 1
             */
            value: string;
            /** Whether this contact value is the primary one for the record. */
            primary?: boolean;
            /** User-facing label attached to the contact value. */
            label?: string | null;
          }>;
          /** Birthday returned by contact sync. */
          birthday?: string | null;
          /** Job title returned by contact sync. */
          job_title?: string | null;
          /** Campaign marketing status when available. */
          marketing_status?: string | null;
          /** Custom fields returned by Pipedrive. */
          custom_fields?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Pipedrive pipeline by pipeline ID. */
    "pipedrive.get_pipeline": {
      input: {
        /**
         * Pipeline ID.
         * @exclusiveMinimum 0
         */
        pipelineId: number;
      };
      output: {
        /** Returned pipeline record. */
        pipeline: {
          /**
           * Pipeline ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Pipeline name. */
          name: string;
          /** Pipeline order. */
          order_nr?: number;
          /** Whether the pipeline is deleted. */
          is_deleted?: boolean;
          /** Whether deal probability is enabled for the pipeline. */
          is_deal_probability_enabled?: boolean;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Pipedrive stage by stage ID. */
    "pipedrive.get_stage": {
      input: {
        /**
         * Stage ID.
         * @exclusiveMinimum 0
         */
        stageId: number;
      };
      output: {
        /** Returned stage record. */
        stage: {
          /**
           * Stage ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Stage order inside the pipeline. */
          order_nr?: number;
          /** Stage name. */
          name: string;
          /** Whether the stage is deleted. */
          is_deleted?: boolean;
          /** Stage probability percentage. */
          deal_probability?: number | null;
          /**
           * Parent pipeline ID.
           * @exclusiveMinimum 0
           */
          pipeline_id?: number | null;
          /** Whether deal rot is enabled for the stage. */
          is_deal_rot_enabled?: boolean;
          /** Days until a deal becomes rotten. */
          days_to_rotten?: number | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Pipedrive activities with optional owner, contact, deal, completion, and pagination filters. */
    "pipedrive.list_activities": {
      input: {
        /**
         * Filter ID to apply.
         * @exclusiveMinimum 0
         */
        filterId?: number;
        /**
         * Specific activity IDs to fetch.
         * @minItems 1
         * @maxItems 100
         */
        ids?: Array<number>;
        /**
         * Owner user ID to filter by.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Deal ID to filter by.
         * @exclusiveMinimum 0
         */
        dealId?: number;
        /**
         * Lead UUID to filter by.
         * @minLength 1
         */
        leadId?: string;
        /**
         * Person ID to filter by.
         * @exclusiveMinimum 0
         */
        personId?: number;
        /**
         * Organization ID to filter by.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /** Whether to filter by completion state. */
        done?: boolean;
        /**
         * Only include records updated at or after this RFC 3339 timestamp.
         * @format date-time
         */
        updatedSince?: string;
        /**
         * Only include records updated before this RFC 3339 timestamp.
         * @format date-time
         */
        updatedUntil?: string;
        /** Activity sort field accepted by Pipedrive. */
        sortBy?: "id" | "update_time" | "add_time" | "due_date";
        /** Sort direction accepted by Pipedrive. */
        sortDirection?: "asc" | "desc";
        /**
         * Additional activity fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"attendees">;
        /**
         * Maximum number of items to return in one Pipedrive page.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Pipedrive response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Activities returned by Pipedrive. */
        activities: Array<{
          /**
           * Activity ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Activity subject. */
          subject: string;
          /** Activity type. */
          type: string;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /**
           * Creator user ID.
           * @exclusiveMinimum 0
           */
          creator_user_id?: number | null;
          /** Whether the activity is deleted. */
          is_deleted?: boolean;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /**
           * Linked deal ID.
           * @exclusiveMinimum 0
           */
          deal_id?: number | null;
          /** Linked lead UUID. */
          lead_id?: string | null;
          /**
           * Linked person ID.
           * @exclusiveMinimum 0
           */
          person_id?: number | null;
          /**
           * Linked organization ID.
           * @exclusiveMinimum 0
           */
          org_id?: number | null;
          /**
           * Linked project ID.
           * @exclusiveMinimum 0
           */
          project_id?: number | null;
          /** Due date. */
          due_date?: string | null;
          /** Due time. */
          due_time?: string | null;
          /** Activity duration. */
          duration?: string | null;
          /** Whether the activity blocks calendar time. */
          busy?: boolean | null;
          /** Whether the activity is marked as done. */
          done?: boolean;
          /** Timestamp when the activity was marked done. */
          marked_as_done_time?: string | null;
          /** Activity location. */
          location?: {
            /** Full formatted address. */
            value?: string | null;
            /** Country component. */
            country?: string | null;
            /** First administrative area component. */
            admin_area_level_1?: string | null;
            /** Second administrative area component. */
            admin_area_level_2?: string | null;
            /** City or locality component. */
            locality?: string | null;
            /** Neighborhood or sublocality component. */
            sublocality?: string | null;
            /** Street or route component. */
            route?: string | null;
            /** Street number component. */
            street_number?: string | null;
            /** Subpremise component such as suite or apartment. */
            subpremise?: string | null;
            /** Postal code component. */
            postal_code?: string | null;
            [key: string]: unknown;
          } | null;
          /** Linked participants. */
          participants?: Array<{
            /**
             * Participant person ID.
             * @exclusiveMinimum 0
             */
            person_id: number;
            /** Whether the participant is the primary participant for the activity. */
            primary?: boolean;
          }>;
          /** Activity attendees. */
          attendees?: Array<{
            /** Attendee email address. */
            email?: string | null;
            /** Attendee name. */
            name?: string | null;
            /** Attendee response status. */
            status?: string | null;
            /** Whether the attendee is the organizer. */
            is_organizer?: boolean | null;
            /**
             * Related Pipedrive person ID.
             * @exclusiveMinimum 0
             */
            person_id?: number | null;
            /**
             * Related Pipedrive user ID.
             * @exclusiveMinimum 0
             */
            user_id?: number | null;
          }>;
          /** Conference client. */
          conference_meeting_client?: string | null;
          /** Conference URL. */
          conference_meeting_url?: string | null;
          /** Conference meeting ID. */
          conference_meeting_id?: string | null;
          /** Public description. */
          public_description?: string | null;
          /** Activity priority. */
          priority?: number | null;
          /** Activity note. */
          note?: string | null;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page when Pipedrive has more results. */
        nextCursor?: string | null;
      };
    };
    /** List Pipedrive deals with optional owner, contact, pipeline, stage, status, and pagination filters. */
    "pipedrive.list_deals": {
      input: {
        /**
         * Filter ID to apply.
         * @exclusiveMinimum 0
         */
        filterId?: number;
        /**
         * Specific deal IDs to fetch.
         * @minItems 1
         * @maxItems 100
         */
        ids?: Array<number>;
        /**
         * Owner user ID to filter by.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Person ID to filter by.
         * @exclusiveMinimum 0
         */
        personId?: number;
        /**
         * Organization ID to filter by.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Pipeline ID to filter by.
         * @exclusiveMinimum 0
         */
        pipelineId?: number;
        /**
         * Stage ID to filter by.
         * @exclusiveMinimum 0
         */
        stageId?: number;
        /**
         * Deal statuses to include in the result set.
         * @minItems 1
         */
        status?: Array<"open" | "won" | "lost" | "deleted">;
        /**
         * Only include records updated at or after this RFC 3339 timestamp.
         * @format date-time
         */
        updatedSince?: string;
        /**
         * Only include records updated before this RFC 3339 timestamp.
         * @format date-time
         */
        updatedUntil?: string;
        /** Deal sort field accepted by Pipedrive. */
        sortBy?: "id" | "update_time" | "add_time";
        /** Sort direction accepted by Pipedrive. */
        sortDirection?: "asc" | "desc";
        /**
         * Additional deal fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"next_activity_id" | "last_activity_id" | "first_won_time" | "products_count" | "files_count" | "notes_count" | "followers_count" | "email_messages_count" | "activities_count" | "done_activities_count" | "undone_activities_count" | "participants_count" | "last_incoming_mail_time" | "last_outgoing_mail_time" | "smart_bcc_email" | "source_lead_id">;
        /**
         * Custom field keys to request from Pipedrive.
         * @minItems 1
         * @maxItems 15
         */
        customFields?: Array<string>;
        /**
         * Maximum number of items to return in one Pipedrive page.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Pipedrive response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Deals returned by Pipedrive. */
        deals: Array<{
          /**
           * Deal ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Deal title. */
          title: string;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /**
           * Linked person ID.
           * @exclusiveMinimum 0
           */
          person_id?: number | null;
          /**
           * Linked organization ID.
           * @exclusiveMinimum 0
           */
          org_id?: number | null;
          /**
           * Pipeline ID.
           * @exclusiveMinimum 0
           */
          pipeline_id?: number | null;
          /**
           * Stage ID.
           * @exclusiveMinimum 0
           */
          stage_id?: number | null;
          /** Deal monetary value. */
          value?: number | null;
          /** Deal currency. */
          currency?: string | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /** Last stage change timestamp. */
          stage_change_time?: string | null;
          /** Whether the deal is deleted. */
          is_deleted?: boolean;
          /** Whether the deal is archived. */
          is_archived?: boolean;
          /** Deal status. */
          status?: string | null;
          /** Winning probability percentage. */
          probability?: number | null;
          /** Reason for a lost deal. */
          lost_reason?: string | null;
          /** Pipedrive visibility flag. */
          visible_to?: number;
          /** Close timestamp. */
          close_time?: string | null;
          /** Won timestamp. */
          won_time?: string | null;
          /** Lost timestamp. */
          lost_time?: string | null;
          /** Expected close date. */
          expected_close_date?: string | null;
          /** Applied label IDs. */
          label_ids?: Array<number>;
          /** Source lead UUID when available. */
          source_lead_id?: string | null;
          /** Custom fields returned by Pipedrive. */
          custom_fields?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page when Pipedrive has more results. */
        nextCursor?: string | null;
      };
    };
    /** List Pipedrive organizations with optional owner, custom field, and pagination filters. */
    "pipedrive.list_organizations": {
      input: {
        /**
         * Filter ID to apply.
         * @exclusiveMinimum 0
         */
        filterId?: number;
        /**
         * Specific organization IDs to fetch.
         * @minItems 1
         * @maxItems 100
         */
        ids?: Array<number>;
        /**
         * Owner user ID to filter by.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Only include records updated at or after this RFC 3339 timestamp.
         * @format date-time
         */
        updatedSince?: string;
        /**
         * Only include records updated before this RFC 3339 timestamp.
         * @format date-time
         */
        updatedUntil?: string;
        /** Organization sort field accepted by Pipedrive. */
        sortBy?: "id" | "update_time" | "add_time";
        /** Sort direction accepted by Pipedrive. */
        sortDirection?: "asc" | "desc";
        /**
         * Additional organization fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"next_activity_id" | "last_activity_id" | "open_deals_count" | "related_open_deals_count" | "closed_deals_count" | "related_closed_deals_count" | "email_messages_count" | "people_count" | "activities_count" | "done_activities_count" | "undone_activities_count" | "files_count" | "notes_count" | "followers_count" | "won_deals_count" | "related_won_deals_count" | "lost_deals_count" | "related_lost_deals_count" | "smart_bcc_email">;
        /**
         * Custom field keys to request from Pipedrive.
         * @minItems 1
         * @maxItems 15
         */
        customFields?: Array<string>;
        /**
         * Maximum number of items to return in one Pipedrive page.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Pipedrive response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Organizations returned by Pipedrive. */
        organizations: Array<{
          /**
           * Organization ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Organization name. */
          name: string;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /** Whether the organization is deleted. */
          is_deleted?: boolean;
          /** Pipedrive visibility flag. */
          visible_to?: number;
          /** Organization address. */
          address?: {
            /** Full formatted address. */
            value?: string | null;
            /** Country component. */
            country?: string | null;
            /** First administrative area component. */
            admin_area_level_1?: string | null;
            /** Second administrative area component. */
            admin_area_level_2?: string | null;
            /** City or locality component. */
            locality?: string | null;
            /** Neighborhood or sublocality component. */
            sublocality?: string | null;
            /** Street or route component. */
            route?: string | null;
            /** Street number component. */
            street_number?: string | null;
            /** Subpremise component such as suite or apartment. */
            subpremise?: string | null;
            /** Postal code component. */
            postal_code?: string | null;
            [key: string]: unknown;
          } | null;
          /** Applied label IDs. */
          label_ids?: Array<number>;
          /** Custom fields returned by Pipedrive. */
          custom_fields?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page when Pipedrive has more results. */
        nextCursor?: string | null;
      };
    };
    /** List Pipedrive persons with optional owner, organization, deal, custom field, and pagination filters. */
    "pipedrive.list_persons": {
      input: {
        /**
         * Filter ID to apply.
         * @exclusiveMinimum 0
         */
        filterId?: number;
        /**
         * Specific person IDs to fetch.
         * @minItems 1
         * @maxItems 100
         */
        ids?: Array<number>;
        /**
         * Owner user ID to filter by.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Organization ID to filter by.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Deal ID to filter by.
         * @exclusiveMinimum 0
         */
        dealId?: number;
        /**
         * Only include records updated at or after this RFC 3339 timestamp.
         * @format date-time
         */
        updatedSince?: string;
        /**
         * Only include records updated before this RFC 3339 timestamp.
         * @format date-time
         */
        updatedUntil?: string;
        /** Person sort field accepted by Pipedrive. */
        sortBy?: "id" | "update_time" | "add_time";
        /** Sort direction accepted by Pipedrive. */
        sortDirection?: "asc" | "desc";
        /**
         * Additional person fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"next_activity_id" | "last_activity_id" | "open_deals_count" | "related_open_deals_count" | "closed_deals_count" | "related_closed_deals_count" | "participant_open_deals_count" | "participant_closed_deals_count" | "email_messages_count" | "activities_count" | "done_activities_count" | "undone_activities_count" | "files_count" | "notes_count" | "followers_count" | "won_deals_count" | "related_won_deals_count" | "lost_deals_count" | "related_lost_deals_count" | "last_incoming_mail_time" | "last_outgoing_mail_time" | "marketing_status" | "doi_status" | "smart_bcc_email">;
        /**
         * Custom field keys to request from Pipedrive.
         * @minItems 1
         * @maxItems 15
         */
        customFields?: Array<string>;
        /**
         * Maximum number of items to return in one Pipedrive page.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Pipedrive response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Persons returned by Pipedrive. */
        persons: Array<{
          /**
           * Person ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Person name. */
          name: string;
          /** Person first name. */
          first_name?: string | null;
          /** Person last name. */
          last_name?: string | null;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /**
           * Linked organization ID.
           * @exclusiveMinimum 0
           */
          org_id?: number | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /** Person email addresses. */
          emails?: Array<{
            /**
             * Contact value such as an email address or phone number.
             * @minLength 1
             */
            value: string;
            /** Whether this contact value is the primary one for the record. */
            primary?: boolean;
            /** User-facing label attached to the contact value. */
            label?: string | null;
          }>;
          /** Person phone numbers. */
          phones?: Array<{
            /**
             * Contact value such as an email address or phone number.
             * @minLength 1
             */
            value: string;
            /** Whether this contact value is the primary one for the record. */
            primary?: boolean;
            /** User-facing label attached to the contact value. */
            label?: string | null;
          }>;
          /** Whether the person is deleted. */
          is_deleted?: boolean;
          /** Pipedrive visibility flag. */
          visible_to?: number;
          /** Applied label IDs. */
          label_ids?: Array<number>;
          /** Picture ID attached to the person. */
          picture_id?: number | null;
          /** Postal address returned by Pipedrive. */
          postal_address?: {
            /** Full formatted address. */
            value?: string | null;
            /** Country component. */
            country?: string | null;
            /** First administrative area component. */
            admin_area_level_1?: string | null;
            /** Second administrative area component. */
            admin_area_level_2?: string | null;
            /** City or locality component. */
            locality?: string | null;
            /** Neighborhood or sublocality component. */
            sublocality?: string | null;
            /** Street or route component. */
            route?: string | null;
            /** Street number component. */
            street_number?: string | null;
            /** Subpremise component such as suite or apartment. */
            subpremise?: string | null;
            /** Postal code component. */
            postal_code?: string | null;
            [key: string]: unknown;
          } | null;
          /** Notes returned by contact sync when available. */
          notes?: string | null;
          /** Instant messaging handles. */
          im?: Array<{
            /**
             * Contact value such as an email address or phone number.
             * @minLength 1
             */
            value: string;
            /** Whether this contact value is the primary one for the record. */
            primary?: boolean;
            /** User-facing label attached to the contact value. */
            label?: string | null;
          }>;
          /** Birthday returned by contact sync. */
          birthday?: string | null;
          /** Job title returned by contact sync. */
          job_title?: string | null;
          /** Campaign marketing status when available. */
          marketing_status?: string | null;
          /** Custom fields returned by Pipedrive. */
          custom_fields?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page when Pipedrive has more results. */
        nextCursor?: string | null;
      };
    };
    /** List Pipedrive pipelines with optional sorting and pagination. */
    "pipedrive.list_pipelines": {
      input: {
        /** Pipeline sort field accepted by Pipedrive. */
        sortBy?: "id" | "update_time" | "add_time";
        /** Sort direction accepted by Pipedrive. */
        sortDirection?: "asc" | "desc";
        /**
         * Maximum number of items to return in one Pipedrive page.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Pipedrive response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Pipelines returned by Pipedrive. */
        pipelines: Array<{
          /**
           * Pipeline ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Pipeline name. */
          name: string;
          /** Pipeline order. */
          order_nr?: number;
          /** Whether the pipeline is deleted. */
          is_deleted?: boolean;
          /** Whether deal probability is enabled for the pipeline. */
          is_deal_probability_enabled?: boolean;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page when Pipedrive has more results. */
        nextCursor?: string | null;
      };
    };
    /** List Pipedrive stages with optional pipeline, sorting, and pagination filters. */
    "pipedrive.list_stages": {
      input: {
        /**
         * Pipeline ID to filter by.
         * @exclusiveMinimum 0
         */
        pipelineId?: number;
        /** Stage sort field accepted by Pipedrive. */
        sortBy?: "id" | "update_time" | "add_time" | "order_nr";
        /** Sort direction accepted by Pipedrive. */
        sortDirection?: "asc" | "desc";
        /**
         * Maximum number of items to return in one Pipedrive page.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Pipedrive response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Stages returned by Pipedrive. */
        stages: Array<{
          /**
           * Stage ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Stage order inside the pipeline. */
          order_nr?: number;
          /** Stage name. */
          name: string;
          /** Whether the stage is deleted. */
          is_deleted?: boolean;
          /** Stage probability percentage. */
          deal_probability?: number | null;
          /**
           * Parent pipeline ID.
           * @exclusiveMinimum 0
           */
          pipeline_id?: number | null;
          /** Whether deal rot is enabled for the stage. */
          is_deal_rot_enabled?: boolean;
          /** Days until a deal becomes rotten. */
          days_to_rotten?: number | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page when Pipedrive has more results. */
        nextCursor?: string | null;
      };
    };
    /** Search Pipedrive deals by title, notes, or custom fields. */
    "pipedrive.search_deals": {
      input: {
        /**
         * Search term to send to Pipedrive. Use at least 2 characters unless exactMatch is true.
         * @minLength 1
         */
        term: string;
        /**
         * Deal fields to search through.
         * @minItems 1
         */
        fields?: Array<"custom_fields" | "notes" | "title">;
        /** Whether Pipedrive should only return case-insensitive exact matches. */
        exactMatch?: boolean;
        /**
         * Person ID filter.
         * @exclusiveMinimum 0
         */
        personId?: number;
        /**
         * Organization ID filter.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /** Deal status accepted by the Pipedrive search wrapper. */
        status?: "open" | "won" | "lost";
        /**
         * Optional fields to include in search results.
         * @minItems 1
         */
        includeFields?: Array<"deal.cc_email">;
        /**
         * Maximum number of search results to return in one Pipedrive page.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Pipedrive response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Search results returned by Pipedrive for deal. */
        items: Array<{
          /** Search relevance score. */
          result_score: number;
          /** Matched Pipedrive deal. */
          item: {
            /**
             * Deal ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Search item type. */
            type: string;
            /** Deal title. */
            title: string;
            /** Deal monetary value. */
            value?: number | null;
            /** Deal currency. */
            currency?: string | null;
            /** Deal status. */
            status?: string | null;
            /** Pipedrive visibility flag. */
            visible_to?: number;
            /** Owner reference. */
            owner?: {
              /**
               * Owner user ID.
               * @exclusiveMinimum 0
               */
              id: number;
              [key: string]: unknown;
            };
            /** Stage reference. */
            stage?: {
              /**
               * Stage ID.
               * @exclusiveMinimum 0
               */
              id: number;
              /** Stage name. */
              name: string;
              [key: string]: unknown;
            };
            /** Related person reference. */
            person?: {
              /**
               * Person ID.
               * @exclusiveMinimum 0
               */
              id: number;
              /** Person name. */
              name: string;
              [key: string]: unknown;
            } | null;
            /** Related organization reference. */
            organization?: {
              /**
               * Organization ID.
               * @exclusiveMinimum 0
               */
              id: number;
              /** Organization name. */
              name: string;
              /** Organization address. */
              address?: string | null;
              [key: string]: unknown;
            } | null;
            /** Matched custom field values. */
            custom_fields?: Array<string>;
            /** Matched notes. */
            notes?: Array<string>;
            /** Whether the deal is archived. */
            is_archived?: boolean;
            [key: string]: unknown;
          };
        }>;
        /** Cursor for the next page when Pipedrive has more search results. */
        nextCursor?: string | null;
      };
    };
    /** Search Pipedrive organizations by name, address, notes, or custom fields. */
    "pipedrive.search_organizations": {
      input: {
        /**
         * Search term to send to Pipedrive. Use at least 2 characters unless exactMatch is true.
         * @minLength 1
         */
        term: string;
        /**
         * Organization fields to search through.
         * @minItems 1
         */
        fields?: Array<"address" | "custom_fields" | "notes" | "name">;
        /** Whether Pipedrive should only return case-insensitive exact matches. */
        exactMatch?: boolean;
        /**
         * Maximum number of search results to return in one Pipedrive page.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Pipedrive response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Search results returned by Pipedrive for organization. */
        items: Array<{
          /** Search relevance score. */
          result_score: number;
          /** Matched Pipedrive organization. */
          item: {
            /**
             * Organization ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Search item type. */
            type: string;
            /** Organization name. */
            name: string;
            /** Organization address. */
            address?: string | null;
            /** Pipedrive visibility flag. */
            visible_to?: number;
            /** Owner reference. */
            owner?: {
              /**
               * Owner user ID.
               * @exclusiveMinimum 0
               */
              id: number;
              [key: string]: unknown;
            };
            /** Matched custom field values. */
            custom_fields?: Array<string>;
            /** Matched notes. */
            notes?: Array<string>;
            [key: string]: unknown;
          };
        }>;
        /** Cursor for the next page when Pipedrive has more search results. */
        nextCursor?: string | null;
      };
    };
    /** Search Pipedrive persons by name, email, phone, notes, or custom fields. */
    "pipedrive.search_persons": {
      input: {
        /**
         * Search term to send to Pipedrive. Use at least 2 characters unless exactMatch is true.
         * @minLength 1
         */
        term: string;
        /**
         * Person fields to search through.
         * @minItems 1
         */
        fields?: Array<"custom_fields" | "email" | "notes" | "phone" | "name">;
        /** Whether Pipedrive should only return case-insensitive exact matches. */
        exactMatch?: boolean;
        /**
         * Organization ID filter.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Optional fields to include in search results.
         * @minItems 1
         */
        includeFields?: Array<"person.picture">;
        /**
         * Maximum number of search results to return in one Pipedrive page.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Pipedrive response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Search results returned by Pipedrive for person. */
        items: Array<{
          /** Search relevance score. */
          result_score: number;
          /** Matched Pipedrive person. */
          item: {
            /**
             * Person ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Search item type. */
            type: string;
            /** Person name. */
            name: string;
            /** Phone numbers included in the search hit. */
            phones?: Array<string>;
            /** Email addresses included in the search hit. */
            emails?: Array<string>;
            /** Pipedrive visibility flag. */
            visible_to?: number;
            /** Owner reference. */
            owner?: {
              /**
               * Owner user ID.
               * @exclusiveMinimum 0
               */
              id: number;
              [key: string]: unknown;
            };
            /** Related organization reference. */
            organization?: {
              /**
               * Organization ID.
               * @exclusiveMinimum 0
               */
              id: number;
              /** Organization name. */
              name: string;
              /** Organization address. */
              address?: string | null;
              [key: string]: unknown;
            };
            /** Matched custom field values. */
            custom_fields?: Array<string>;
            /** Matched notes. */
            notes?: Array<string>;
            [key: string]: unknown;
          };
        }>;
        /** Cursor for the next page when Pipedrive has more search results. */
        nextCursor?: string | null;
      };
    };
    /** Update one Pipedrive activity by activity ID. */
    "pipedrive.update_activity": {
      input: {
        /**
         * Activity subject.
         * @minLength 1
         */
        subject?: string;
        /**
         * Activity type.
         * @minLength 1
         */
        type?: string;
        /**
         * Owner user ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Linked deal ID.
         * @exclusiveMinimum 0
         */
        dealId?: number;
        /**
         * Linked lead UUID.
         * @minLength 1
         */
        leadId?: string;
        /**
         * Linked person ID.
         * @exclusiveMinimum 0
         */
        personId?: number;
        /**
         * Linked organization ID.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Linked project ID.
         * @exclusiveMinimum 0
         */
        projectId?: number;
        /**
         * Due date in YYYY-MM-DD format.
         * @format date
         */
        dueDate?: string;
        /**
         * Due time accepted by Pipedrive.
         * @minLength 1
         */
        dueTime?: string;
        /**
         * Activity duration accepted by Pipedrive.
         * @minLength 1
         */
        duration?: string;
        /** Whether the activity blocks calendar time. */
        busy?: boolean;
        /** Whether the activity should be marked done. */
        done?: boolean;
        /** Activity location. */
        location?: {
          /** Full formatted address. */
          value?: string;
          /** Country component. */
          country?: string;
          /** First administrative area component. */
          adminAreaLevel1?: string;
          /** Second administrative area component. */
          adminAreaLevel2?: string;
          /** City or locality component. */
          locality?: string;
          /** Neighborhood or sublocality component. */
          sublocality?: string;
          /** Street or route component. */
          route?: string;
          /** Street number component. */
          streetNumber?: string;
          /** Subpremise component such as suite or apartment. */
          subpremise?: string;
          /** Postal code component. */
          postalCode?: string;
        };
        /**
         * Participants linked to the activity.
         * @minItems 1
         */
        participants?: Array<{
          /**
           * Participant person ID.
           * @exclusiveMinimum 0
           */
          personId: number;
          /** Whether the participant is the primary participant for the activity. */
          primary?: boolean;
        }>;
        /**
         * Activity attendees.
         * @minItems 1
         */
        attendees?: Array<{
          /** Attendee email address. */
          email?: string;
          /** Attendee name. */
          name?: string;
          /** Attendee response status. */
          status?: string;
          /** Whether the attendee is the organizer. */
          isOrganizer?: boolean;
          /**
           * Related Pipedrive person ID.
           * @exclusiveMinimum 0
           */
          personId?: number;
          /**
           * Related Pipedrive user ID.
           * @exclusiveMinimum 0
           */
          userId?: number;
        }>;
        /** Public description visible in Pipedrive. */
        publicDescription?: string;
        /** Activity priority. */
        priority?: number;
        /** Activity note. */
        note?: string;
        /**
         * Activity ID.
         * @exclusiveMinimum 0
         */
        activityId: number;
      };
      output: {
        /** Returned activity record. */
        activity: {
          /**
           * Activity ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Activity subject. */
          subject: string;
          /** Activity type. */
          type: string;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /**
           * Creator user ID.
           * @exclusiveMinimum 0
           */
          creator_user_id?: number | null;
          /** Whether the activity is deleted. */
          is_deleted?: boolean;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /**
           * Linked deal ID.
           * @exclusiveMinimum 0
           */
          deal_id?: number | null;
          /** Linked lead UUID. */
          lead_id?: string | null;
          /**
           * Linked person ID.
           * @exclusiveMinimum 0
           */
          person_id?: number | null;
          /**
           * Linked organization ID.
           * @exclusiveMinimum 0
           */
          org_id?: number | null;
          /**
           * Linked project ID.
           * @exclusiveMinimum 0
           */
          project_id?: number | null;
          /** Due date. */
          due_date?: string | null;
          /** Due time. */
          due_time?: string | null;
          /** Activity duration. */
          duration?: string | null;
          /** Whether the activity blocks calendar time. */
          busy?: boolean | null;
          /** Whether the activity is marked as done. */
          done?: boolean;
          /** Timestamp when the activity was marked done. */
          marked_as_done_time?: string | null;
          /** Activity location. */
          location?: {
            /** Full formatted address. */
            value?: string | null;
            /** Country component. */
            country?: string | null;
            /** First administrative area component. */
            admin_area_level_1?: string | null;
            /** Second administrative area component. */
            admin_area_level_2?: string | null;
            /** City or locality component. */
            locality?: string | null;
            /** Neighborhood or sublocality component. */
            sublocality?: string | null;
            /** Street or route component. */
            route?: string | null;
            /** Street number component. */
            street_number?: string | null;
            /** Subpremise component such as suite or apartment. */
            subpremise?: string | null;
            /** Postal code component. */
            postal_code?: string | null;
            [key: string]: unknown;
          } | null;
          /** Linked participants. */
          participants?: Array<{
            /**
             * Participant person ID.
             * @exclusiveMinimum 0
             */
            person_id: number;
            /** Whether the participant is the primary participant for the activity. */
            primary?: boolean;
          }>;
          /** Activity attendees. */
          attendees?: Array<{
            /** Attendee email address. */
            email?: string | null;
            /** Attendee name. */
            name?: string | null;
            /** Attendee response status. */
            status?: string | null;
            /** Whether the attendee is the organizer. */
            is_organizer?: boolean | null;
            /**
             * Related Pipedrive person ID.
             * @exclusiveMinimum 0
             */
            person_id?: number | null;
            /**
             * Related Pipedrive user ID.
             * @exclusiveMinimum 0
             */
            user_id?: number | null;
          }>;
          /** Conference client. */
          conference_meeting_client?: string | null;
          /** Conference URL. */
          conference_meeting_url?: string | null;
          /** Conference meeting ID. */
          conference_meeting_id?: string | null;
          /** Public description. */
          public_description?: string | null;
          /** Activity priority. */
          priority?: number | null;
          /** Activity note. */
          note?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Pipedrive deal by deal ID. */
    "pipedrive.update_deal": {
      input: {
        /**
         * Deal title.
         * @minLength 1
         */
        title?: string;
        /**
         * Owner user ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Linked person ID.
         * @exclusiveMinimum 0
         */
        personId?: number;
        /**
         * Linked organization ID.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Pipeline ID.
         * @exclusiveMinimum 0
         */
        pipelineId?: number;
        /**
         * Stage ID.
         * @exclusiveMinimum 0
         */
        stageId?: number;
        /** Deal monetary value. */
        value?: number;
        /**
         * Deal currency.
         * @minLength 1
         */
        currency?: string;
        /** Deal status. */
        status?: "open" | "won" | "lost";
        /** Winning probability percentage. */
        probability?: number | null;
        /** Reason for a lost deal. */
        lostReason?: string | null;
        /** Pipedrive visibility flag. */
        visibleTo?: number;
        /**
         * Close timestamp in RFC 3339 format.
         * @format date-time
         */
        closeTime?: string;
        /**
         * Expected close date in YYYY-MM-DD format.
         * @format date
         */
        expectedCloseDate?: string;
        /**
         * Pipedrive label IDs.
         * @minItems 1
         */
        labelIds?: Array<number>;
        /** Custom field values keyed by field hash. */
        customFields?: Record<string, unknown>;
        /**
         * Deal ID.
         * @exclusiveMinimum 0
         */
        dealId: number;
      };
      output: {
        /** Returned deal record. */
        deal: {
          /**
           * Deal ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Deal title. */
          title: string;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /**
           * Linked person ID.
           * @exclusiveMinimum 0
           */
          person_id?: number | null;
          /**
           * Linked organization ID.
           * @exclusiveMinimum 0
           */
          org_id?: number | null;
          /**
           * Pipeline ID.
           * @exclusiveMinimum 0
           */
          pipeline_id?: number | null;
          /**
           * Stage ID.
           * @exclusiveMinimum 0
           */
          stage_id?: number | null;
          /** Deal monetary value. */
          value?: number | null;
          /** Deal currency. */
          currency?: string | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /** Last stage change timestamp. */
          stage_change_time?: string | null;
          /** Whether the deal is deleted. */
          is_deleted?: boolean;
          /** Whether the deal is archived. */
          is_archived?: boolean;
          /** Deal status. */
          status?: string | null;
          /** Winning probability percentage. */
          probability?: number | null;
          /** Reason for a lost deal. */
          lost_reason?: string | null;
          /** Pipedrive visibility flag. */
          visible_to?: number;
          /** Close timestamp. */
          close_time?: string | null;
          /** Won timestamp. */
          won_time?: string | null;
          /** Lost timestamp. */
          lost_time?: string | null;
          /** Expected close date. */
          expected_close_date?: string | null;
          /** Applied label IDs. */
          label_ids?: Array<number>;
          /** Source lead UUID when available. */
          source_lead_id?: string | null;
          /** Custom fields returned by Pipedrive. */
          custom_fields?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Pipedrive organization by organization ID. */
    "pipedrive.update_organization": {
      input: {
        /**
         * Organization name.
         * @minLength 1
         */
        name?: string;
        /**
         * Owner user ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /** Pipedrive visibility flag. */
        visibleTo?: number;
        /**
         * Pipedrive label IDs.
         * @minItems 1
         */
        labelIds?: Array<number>;
        /** Organization address. */
        address?: {
          /** Full formatted address. */
          value?: string;
          /** Country component. */
          country?: string;
          /** First administrative area component. */
          adminAreaLevel1?: string;
          /** Second administrative area component. */
          adminAreaLevel2?: string;
          /** City or locality component. */
          locality?: string;
          /** Neighborhood or sublocality component. */
          sublocality?: string;
          /** Street or route component. */
          route?: string;
          /** Street number component. */
          streetNumber?: string;
          /** Subpremise component such as suite or apartment. */
          subpremise?: string;
          /** Postal code component. */
          postalCode?: string;
        };
        /** Custom field values keyed by field hash. */
        customFields?: Record<string, unknown>;
        /**
         * Organization ID.
         * @exclusiveMinimum 0
         */
        organizationId: number;
      };
      output: {
        /** Returned organization record. */
        organization: {
          /**
           * Organization ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Organization name. */
          name: string;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /** Whether the organization is deleted. */
          is_deleted?: boolean;
          /** Pipedrive visibility flag. */
          visible_to?: number;
          /** Organization address. */
          address?: {
            /** Full formatted address. */
            value?: string | null;
            /** Country component. */
            country?: string | null;
            /** First administrative area component. */
            admin_area_level_1?: string | null;
            /** Second administrative area component. */
            admin_area_level_2?: string | null;
            /** City or locality component. */
            locality?: string | null;
            /** Neighborhood or sublocality component. */
            sublocality?: string | null;
            /** Street or route component. */
            route?: string | null;
            /** Street number component. */
            street_number?: string | null;
            /** Subpremise component such as suite or apartment. */
            subpremise?: string | null;
            /** Postal code component. */
            postal_code?: string | null;
            [key: string]: unknown;
          } | null;
          /** Applied label IDs. */
          label_ids?: Array<number>;
          /** Custom fields returned by Pipedrive. */
          custom_fields?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Pipedrive person by person ID. */
    "pipedrive.update_person": {
      input: {
        /**
         * Person name.
         * @minLength 1
         */
        name?: string;
        /**
         * Owner user ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Linked organization ID.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Person email addresses.
         * @minItems 1
         */
        emails?: Array<{
          /**
           * Contact value such as an email address or phone number.
           * @minLength 1
           */
          value: string;
          /** Whether this contact value is the primary one for the record. */
          primary?: boolean;
          /** User-facing label attached to the contact value. */
          label?: string | null;
        }>;
        /**
         * Person phone numbers.
         * @minItems 1
         */
        phones?: Array<{
          /**
           * Contact value such as an email address or phone number.
           * @minLength 1
           */
          value: string;
          /** Whether this contact value is the primary one for the record. */
          primary?: boolean;
          /** User-facing label attached to the contact value. */
          label?: string | null;
        }>;
        /** Pipedrive visibility flag. */
        visibleTo?: number;
        /**
         * Pipedrive label IDs.
         * @minItems 1
         */
        labelIds?: Array<number>;
        /** Campaign marketing status accepted by Pipedrive. */
        marketingStatus?: "no_consent" | "unsubscribed" | "subscribed" | "archived";
        /** Custom field values keyed by field hash. */
        customFields?: Record<string, unknown>;
        /**
         * Person ID.
         * @exclusiveMinimum 0
         */
        personId: number;
      };
      output: {
        /** Returned person record. */
        person: {
          /**
           * Person ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Person name. */
          name: string;
          /** Person first name. */
          first_name?: string | null;
          /** Person last name. */
          last_name?: string | null;
          /**
           * Owner user ID.
           * @exclusiveMinimum 0
           */
          owner_id?: number | null;
          /**
           * Linked organization ID.
           * @exclusiveMinimum 0
           */
          org_id?: number | null;
          /** Creation timestamp. */
          add_time?: string;
          /** Last update timestamp. */
          update_time?: string;
          /** Person email addresses. */
          emails?: Array<{
            /**
             * Contact value such as an email address or phone number.
             * @minLength 1
             */
            value: string;
            /** Whether this contact value is the primary one for the record. */
            primary?: boolean;
            /** User-facing label attached to the contact value. */
            label?: string | null;
          }>;
          /** Person phone numbers. */
          phones?: Array<{
            /**
             * Contact value such as an email address or phone number.
             * @minLength 1
             */
            value: string;
            /** Whether this contact value is the primary one for the record. */
            primary?: boolean;
            /** User-facing label attached to the contact value. */
            label?: string | null;
          }>;
          /** Whether the person is deleted. */
          is_deleted?: boolean;
          /** Pipedrive visibility flag. */
          visible_to?: number;
          /** Applied label IDs. */
          label_ids?: Array<number>;
          /** Picture ID attached to the person. */
          picture_id?: number | null;
          /** Postal address returned by Pipedrive. */
          postal_address?: {
            /** Full formatted address. */
            value?: string | null;
            /** Country component. */
            country?: string | null;
            /** First administrative area component. */
            admin_area_level_1?: string | null;
            /** Second administrative area component. */
            admin_area_level_2?: string | null;
            /** City or locality component. */
            locality?: string | null;
            /** Neighborhood or sublocality component. */
            sublocality?: string | null;
            /** Street or route component. */
            route?: string | null;
            /** Street number component. */
            street_number?: string | null;
            /** Subpremise component such as suite or apartment. */
            subpremise?: string | null;
            /** Postal code component. */
            postal_code?: string | null;
            [key: string]: unknown;
          } | null;
          /** Notes returned by contact sync when available. */
          notes?: string | null;
          /** Instant messaging handles. */
          im?: Array<{
            /**
             * Contact value such as an email address or phone number.
             * @minLength 1
             */
            value: string;
            /** Whether this contact value is the primary one for the record. */
            primary?: boolean;
            /** User-facing label attached to the contact value. */
            label?: string | null;
          }>;
          /** Birthday returned by contact sync. */
          birthday?: string | null;
          /** Job title returned by contact sync. */
          job_title?: string | null;
          /** Campaign marketing status when available. */
          marketing_status?: string | null;
          /** Custom fields returned by Pipedrive. */
          custom_fields?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
