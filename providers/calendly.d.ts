import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel one Calendly scheduled event by scheduled-event URI. */
    "calendly.cancel_scheduled_event": {
      input: {
        /**
         * The Calendly scheduled event URI returned by the API.
         * @format uri
         */
        scheduledEventUri: string;
        /**
         * The human-readable reason to cancel the scheduled event.
         * @minLength 1
         */
        reason: string;
      };
      output: {
        /** Whether Calendly accepted the cancellation request. */
        canceled: boolean;
      };
    };
    /** Create one Calendly invitee booking for a confirmed available start time. */
    "calendly.create_event_invitee": {
      input: {
        /**
         * The Calendly event type URI returned by the API.
         * @format uri
         */
        eventTypeUri: string;
        /**
         * The scheduled start time to book in ISO 8601 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        startTime: string;
        /** The primary invitee profile used to create one Calendly booking. */
        invitee: {
          /**
           * The full name of the primary invitee to book.
           * @minLength 1
           */
          name: string;
          /**
           * The invitee first name to submit with the booking.
           * @minLength 1
           */
          firstName?: string;
          /**
           * The invitee last name to submit with the booking.
           * @minLength 1
           */
          lastName?: string;
          /**
           * The email address of the primary invitee to book.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email: string;
          /**
           * The IANA timezone of the primary invitee.
           * @minLength 1
           */
          timezone: string;
          /**
           * The E.164 phone number to use for invitee text reminders when Calendly supports them.
           * @minLength 1
           */
          textReminderNumber?: string;
        };
        /** The guest email addresses to add to the booking. */
        eventGuests?: Array<string>;
        /** The answers to custom questions to submit with the booking. */
        questionsAndAnswers?: Array<{
          /**
           * The custom question label to answer when creating the booking.
           * @minLength 1
           */
          question: string;
          /**
           * The answer to submit for the custom question.
           * @minLength 1
           */
          answer: string;
          /** The zero-based custom-question position expected by Calendly, when required. */
          position?: number;
        }>;
        /** The tracking payload to associate with the booking. */
        tracking?: {
          /** The UTM campaign value attached to the booking. */
          utm_campaign?: string;
          /** The UTM source value attached to the booking. */
          utm_source?: string;
          /** The UTM medium value attached to the booking. */
          utm_medium?: string;
          /** The UTM content value attached to the booking. */
          utm_content?: string;
          /** The UTM term value attached to the booking. */
          utm_term?: string;
          /** The Salesforce UUID attached to the booking. */
          salesforce_uuid?: string;
          [key: string]: unknown;
        };
        /** The location payload to submit with the booking when Calendly requires it. */
        location?: {
          /**
           * The Calendly location kind to submit with the booking.
           * @minLength 1
           */
          kind: string;
          /**
           * The invitee-provided location details to submit when the selected kind requires them.
           * @minLength 1
           */
          location?: string;
          /**
           * The phone number to submit when the selected location kind requires one.
           * @minLength 1
           */
          phone_number?: string;
          /**
           * Additional location information to submit with the booking when supported.
           * @minLength 1
           */
          additional_info?: string;
        };
      };
      output: {
        /** A Calendly invitee resource. */
        invitee: {
          /** The canonical URI of the invitee. */
          uri: string;
          /** The invitee email address. */
          email?: string;
          /** The invitee status. */
          status?: string;
          /** The invitee display name. */
          name?: string;
          /** The invitee timezone. */
          timezone?: string;
          /** The ISO 8601 timestamp when the invitee record was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the invitee record was updated. */
          updated_at?: string;
          /** The invitee first name. */
          first_name?: string;
          /** The invitee last name. */
          last_name?: string;
          /** The management URL that lets the invitee cancel the booking. */
          cancel_url?: string | null;
          /** The management URL that lets the invitee reschedule the booking. */
          reschedule_url?: string | null;
          /** The custom question answers returned for the invitee. */
          questions_and_answers?: Array<{
            /** The custom question label returned for the invitee. */
            question?: string;
            /** The answer returned for the custom question. */
            answer?: string;
            /** The display position of the custom question, when Calendly provides it. */
            position?: number;
            [key: string]: unknown;
          }>;
          /** The tracking payload returned for the invitee. */
          tracking?: {
            /** The UTM campaign value attached to the booking. */
            utm_campaign?: string;
            /** The UTM source value attached to the booking. */
            utm_source?: string;
            /** The UTM medium value attached to the booking. */
            utm_medium?: string;
            /** The UTM content value attached to the booking. */
            utm_content?: string;
            /** The UTM term value attached to the booking. */
            utm_term?: string;
            /** The Salesforce UUID attached to the booking. */
            salesforce_uuid?: string;
            [key: string]: unknown;
          };
          /** The phone number used for invitee text reminders, when present. */
          text_reminder_number?: string | null;
          /** The guest attendees returned for the invitee. */
          event_guests?: Array<{
            /** The guest email address returned for the booking. */
            email?: string;
            /** The ISO 8601 timestamp when the guest was added to the booking. */
            created_at?: string;
            [key: string]: unknown;
          }>;
          /** Whether the invitee booking was created by rescheduling another booking. */
          rescheduled?: boolean;
          /** The canonical URI of the original invitee when this booking was rescheduled. */
          old_invitee?: string | null;
          /** The canonical URI of the replacement invitee when this booking was rescheduled. */
          new_invitee?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Mark one Calendly invitee as a no-show by invitee URI. */
    "calendly.create_invitee_no_show": {
      input: {
        /**
         * The Calendly invitee URI to mark as a no-show.
         * @format uri
         */
        inviteeUri: string;
      };
      output: {
        /** A Calendly invitee no-show resource. */
        inviteeNoShow: {
          /** The canonical URI of the invitee no-show resource. */
          uri: string;
          /** The canonical URI of the invitee associated with the no-show. */
          invitee: string;
          /** The ISO 8601 timestamp when the invitee no-show was created. */
          created_at: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create one organization invitation for a Calendly organization. */
    "calendly.create_organization_invitation": {
      input: {
        /**
         * The organization URI that should receive the invitation.
         * @format uri
         */
        organizationUri: string;
        /**
         * The email address to invite to the organization.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
      };
      output: {
        /** A Calendly organization invitation resource. */
        organizationInvitation: {
          /** The canonical URI of the organization invitation. */
          uri: string;
          /** The canonical URI of the organization that owns the invitation. */
          organization: string;
          /** The email address invited to join the organization. */
          email: string;
          /** The current status returned for the organization invitation. */
          status: string;
          /** The ISO 8601 timestamp when the invitation was created. */
          created_at: string;
          /** The ISO 8601 timestamp when the invitation was last updated. */
          updated_at: string;
          /** The ISO 8601 timestamp when the invitation was last sent. */
          last_sent_at: string | null;
          /** The canonical URI of the user who accepted the invitation, when present. */
          user?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create one customized single-use share from an existing Calendly event type. */
    "calendly.create_share": {
      input: {
        /**
         * The Calendly event type URI returned by the API.
         * @format uri
         */
        eventTypeUri: string;
        /**
         * The custom display name to use for the share.
         * @minLength 1
         */
        name?: string;
        /**
         * The custom meeting duration to use for the share.
         * @minimum 1
         * @maximum 720
         */
        duration?: number;
        /**
         * The allowed duration options to expose on the share.
         * @maxItems 4
         */
        durationOptions?: Array<number>;
        /** The booking window type to apply to the share. */
        periodType?: "available_moving" | "moving" | "fixed" | "unlimited";
        /**
         * The first bookable date in YYYY-MM-DD format.
         * @minLength 1
         */
        startDate?: string;
        /**
         * The last bookable date in YYYY-MM-DD format.
         * @minLength 1
         */
        endDate?: string;
        /**
         * The maximum booking window to apply to the share.
         * @exclusiveMinimum 0
         */
        maxBookingTime?: number;
        /** Whether the share hides the location until booking time. */
        hideLocation?: boolean;
        /** The location configurations to apply to the share. */
        locationConfigurations?: Array<{
          /**
           * The textual location value configured on the share.
           * @minLength 1
           */
          location?: string;
          /**
           * Additional instructions configured on the share location.
           * @minLength 1
           */
          additionalInfo?: string;
          /**
           * The phone number configured on the share location.
           * @minLength 1
           */
          phoneNumber?: string;
          /**
           * The display position of the share location.
           * @minimum 0
           */
          position?: number;
          /**
           * The share location kind.
           * @minLength 1
           */
          kind?: string;
        }>;
        /** The availability override to apply to the share. */
        availabilityRule?: {
          /** The availability rules to apply to the share. */
          rules: Array<{
            /** The availability rule type. */
            type: string;
            /** The specific date for a date-based availability rule. */
            date?: string;
            /** The weekday for a weekday-based availability rule. */
            wday?: string;
            /** The intervals attached to the availability rule. */
            intervals: Array<{
              /** The inclusive start time of the interval in HH:MM format. */
              from: string;
              /** The exclusive end time of the interval in HH:MM format. */
              to: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /**
           * The timezone of the share availability override.
           * @minLength 1
           */
          timezone: string;
        };
      };
      output: {
        /** The share resource returned by Calendly. */
        share: {
          /** The scheduling links returned for the share. */
          scheduling_links: Array<{
            /**
             * The single-use booking URL returned by Calendly.
             * @format uri
             */
            booking_url: string;
            /**
             * The URI of the resource that owns the scheduling link.
             * @format uri
             */
            owner: string;
            /** The resource type that owns the scheduling link. */
            owner_type: "EventType";
          }>;
          /** The share override returned by Calendly. */
          share_override: {
            /** The display name configured for the share. */
            name?: string;
            /** The duration configured for the share. */
            duration?: number;
            /** The allowed duration options configured on the share. */
            duration_options?: Array<number>;
            /** The booking window type configured on the share. */
            period_type?: string;
            /** The first date that can be booked using the share. */
            start_date?: string;
            /** The last date that can be booked using the share. */
            end_date?: string;
            /** The maximum booking window configured on the share. */
            max_booking_time?: number;
            /** Whether the share hides the location until the invitee books. */
            hide_location?: boolean;
            /** The location configurations returned on the share override. */
            location_configurations?: Array<{
              /** The textual location value configured on the share override. */
              location?: string;
              /** Additional instructions configured on the share override location. */
              additional_info?: string;
              /** The phone number configured on the share override location. */
              phone_number?: string;
              /** The display position of the share override location. */
              position?: number;
              /** The share override location kind. */
              kind?: string;
              [key: string]: unknown;
            }>;
            /** The availability override returned on the share. */
            availability_rule?: {
              /** The availability rules configured on the share. */
              rules: Array<{
                /** The availability rule type. */
                type: string;
                /** The specific date for a date-based availability rule. */
                date?: string;
                /** The weekday for a weekday-based availability rule. */
                wday?: string;
                /** The intervals attached to the availability rule. */
                intervals: Array<{
                  /** The inclusive start time of the interval in HH:MM format. */
                  from: string;
                  /** The exclusive end time of the interval in HH:MM format. */
                  to: string;
                  [key: string]: unknown;
                }>;
                [key: string]: unknown;
              }>;
              /** The timezone configured on the share availability override. */
              timezone: string;
            };
            [key: string]: unknown;
          };
        };
      };
    };
    /** Create one single-use scheduling link from an existing Calendly event type without customization. */
    "calendly.create_single_use_scheduling_link": {
      input: {
        /**
         * The Calendly event type URI returned by the API.
         * @format uri
         */
        eventTypeUri: string;
      };
      output: {
        /** One single-use scheduling link returned by Calendly. */
        schedulingLink: {
          /**
           * The single-use booking URL returned by Calendly.
           * @format uri
           */
          booking_url: string;
          /**
           * The URI of the resource that owns the scheduling link.
           * @format uri
           */
          owner: string;
          /** The resource type that owns the scheduling link. */
          owner_type: "EventType";
        };
      };
    };
    /** Create one Calendly webhook subscription for an organization or one user. */
    "calendly.create_webhook_subscription": {
      input: {
        /**
         * The callback URL that should receive Calendly webhook deliveries.
         * @format uri
         */
        url: string;
        /** The webhook subscription scope to create. */
        scope: "organization" | "user";
        /**
         * The Calendly organization URI returned by the API, such as https://api.calendly.com/organizations/abc123.
         * @format uri
         */
        organizationUri: string;
        /**
         * The user URI to target when the webhook scope is user.
         * @format uri
         */
        userUri?: string;
        /**
         * The webhook event values to subscribe to.
         * @minItems 1
         */
        events: Array<"invitee.created" | "invitee.canceled" | "routing_form_submission.created">;
      };
      output: {
        /** One Calendly webhook subscription returned by the API. */
        webhookSubscription: {
          /**
           * The canonical URI of the webhook subscription.
           * @format uri
           */
          uri: string;
          /**
           * The callback URL configured for the webhook subscription.
           * @format uri
           */
          callback_url?: string;
          /** The ISO 8601 timestamp when the webhook subscription was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the webhook subscription was updated. */
          updated_at?: string;
          /** The ISO 8601 timestamp when retry delivery started for the subscription. */
          retry_started_at?: string | null;
          /** The current state of the webhook subscription. */
          state?: string;
          /** The subscribed webhook event values. */
          events?: Array<string>;
          /** The webhook subscription scope returned by Calendly. */
          scope?: string;
          /**
           * The organization URI attached to the webhook subscription.
           * @format uri
           */
          organization?: string;
          /** The user URI attached to the webhook subscription. */
          user?: string | null;
          /** The group URI attached to the webhook subscription, when present. */
          group?: string | null;
          /**
           * The creator URI attached to the webhook subscription.
           * @format uri
           */
          creator?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one Calendly invitee no-show by no-show URI. */
    "calendly.delete_invitee_no_show": {
      input: {
        /**
         * The Calendly invitee no-show URI to delete.
         * @format uri
         */
        inviteeNoShowUri: string;
      };
      output: {
        /** Whether Calendly accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete one Calendly organization membership by membership URI. */
    "calendly.delete_organization_membership": {
      input: {
        /**
         * The Calendly organization membership URI to delete.
         * @format uri
         */
        organizationMembershipUri: string;
      };
      output: {
        /** Whether Calendly accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete one Calendly webhook subscription by URI. */
    "calendly.delete_webhook_subscription": {
      input: {
        /**
         * The Calendly webhook subscription URI returned by the API.
         * @format uri
         */
        webhookSubscriptionUri: string;
      };
      output: {
        /** Whether Calendly accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Retrieve the authenticated Calendly user for the connected personal access token. */
    "calendly.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Calendly user resource. */
        currentUser: {
          /** The canonical URI of the Calendly user. */
          uri: string;
          /** The full name of the Calendly user. */
          name?: string;
          /** The public scheduling slug of the Calendly user. */
          slug?: string;
          /** The email address of the Calendly user. */
          email?: string;
          /** The public scheduling URL of the Calendly user. */
          scheduling_url?: string;
          /** The IANA timezone configured for the Calendly user. */
          timezone?: string;
          /** The canonical URI of the user's current organization. */
          current_organization?: string;
          /** The ISO 8601 timestamp when the user was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the user was updated. */
          updated_at?: string;
          /** The Calendly resource type label. */
          resource_type?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Calendly invitee by invitee URI. */
    "calendly.get_event_invitee": {
      input: {
        /**
         * The Calendly scheduled event URI returned by the API.
         * @format uri
         */
        scheduledEventUri: string;
        /**
         * The Calendly invitee URI returned by the API.
         * @format uri
         */
        inviteeUri: string;
      };
      output: {
        /** A Calendly invitee resource. */
        invitee: {
          /** The canonical URI of the invitee. */
          uri: string;
          /** The invitee email address. */
          email?: string;
          /** The invitee status. */
          status?: string;
          /** The invitee display name. */
          name?: string;
          /** The invitee timezone. */
          timezone?: string;
          /** The ISO 8601 timestamp when the invitee record was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the invitee record was updated. */
          updated_at?: string;
          /** The invitee first name. */
          first_name?: string;
          /** The invitee last name. */
          last_name?: string;
          /** The management URL that lets the invitee cancel the booking. */
          cancel_url?: string | null;
          /** The management URL that lets the invitee reschedule the booking. */
          reschedule_url?: string | null;
          /** The custom question answers returned for the invitee. */
          questions_and_answers?: Array<{
            /** The custom question label returned for the invitee. */
            question?: string;
            /** The answer returned for the custom question. */
            answer?: string;
            /** The display position of the custom question, when Calendly provides it. */
            position?: number;
            [key: string]: unknown;
          }>;
          /** The tracking payload returned for the invitee. */
          tracking?: {
            /** The UTM campaign value attached to the booking. */
            utm_campaign?: string;
            /** The UTM source value attached to the booking. */
            utm_source?: string;
            /** The UTM medium value attached to the booking. */
            utm_medium?: string;
            /** The UTM content value attached to the booking. */
            utm_content?: string;
            /** The UTM term value attached to the booking. */
            utm_term?: string;
            /** The Salesforce UUID attached to the booking. */
            salesforce_uuid?: string;
            [key: string]: unknown;
          };
          /** The phone number used for invitee text reminders, when present. */
          text_reminder_number?: string | null;
          /** The guest attendees returned for the invitee. */
          event_guests?: Array<{
            /** The guest email address returned for the booking. */
            email?: string;
            /** The ISO 8601 timestamp when the guest was added to the booking. */
            created_at?: string;
            [key: string]: unknown;
          }>;
          /** Whether the invitee booking was created by rescheduling another booking. */
          rescheduled?: boolean;
          /** The canonical URI of the original invitee when this booking was rescheduled. */
          old_invitee?: string | null;
          /** The canonical URI of the replacement invitee when this booking was rescheduled. */
          new_invitee?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Calendly event type by event type URI. */
    "calendly.get_event_type": {
      input: {
        /**
         * The Calendly event type URI returned by the API.
         * @format uri
         */
        eventTypeUri: string;
      };
      output: {
        /** A Calendly event type resource. */
        eventType: {
          /** The canonical URI of the Calendly event type. */
          uri: string;
          /** The display name of the Calendly event type. */
          name: string;
          /** Whether the event type is active. */
          active?: boolean;
          /** The scheduling URL returned for the event type. */
          scheduling_url?: string;
          /** The duration of the event type in minutes. */
          duration?: number;
          /** The Calendly event type kind, such as solo or group. */
          kind?: string;
          /** The Calendly event type classification. */
          type?: string;
          /** The color associated with the event type. */
          color?: string;
          /** The ISO 8601 timestamp when the event type was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the event type was updated. */
          updated_at?: string;
          /** Whether the event type is secret. */
          secret?: boolean;
          /** The URL slug of the event type. */
          slug?: string;
          /** The locale configured on the event type. */
          locale?: string;
          /** The pooling type returned by Calendly. */
          pooling_type?: string | null;
          /** The owner profile of the event type. */
          profile?: {
            /** The profile owner type, such as User or Team. */
            type?: string;
            /** The display name of the event type owner. */
            name?: string;
            /** The canonical URI of the event type owner. */
            owner?: string;
            [key: string]: unknown;
          };
          /** The location configurations returned on the event type. */
          locations?: Array<{
            /** The Calendly location kind. */
            kind?: string;
            /** The physical or textual location details. */
            location?: string;
            /** The phone number for phone-call locations. */
            phone_number?: string;
            /** Additional information about the location. */
            additional_info?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Calendly invitee no-show by no-show URI. */
    "calendly.get_invitee_no_show": {
      input: {
        /**
         * The Calendly invitee no-show URI to retrieve.
         * @format uri
         */
        inviteeNoShowUri: string;
      };
      output: {
        /** A Calendly invitee no-show resource. */
        inviteeNoShow: {
          /** The canonical URI of the invitee no-show resource. */
          uri: string;
          /** The canonical URI of the invitee associated with the no-show. */
          invitee: string;
          /** The ISO 8601 timestamp when the invitee no-show was created. */
          created_at: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Calendly organization by organization URI. */
    "calendly.get_organization": {
      input: {
        /**
         * The Calendly organization URI returned by the API, such as https://api.calendly.com/organizations/abc123.
         * @format uri
         */
        organizationUri: string;
      };
      output: {
        /** A Calendly organization resource. */
        organization: {
          /** The canonical URI of the Calendly organization. */
          uri: string;
          /** The display name of the Calendly organization. */
          name?: string;
          /** The Calendly resource type label. */
          resource_type?: string;
          /** The ISO 8601 timestamp when the organization was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the organization was updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Calendly organization membership by membership URI. */
    "calendly.get_organization_membership": {
      input: {
        /**
         * The Calendly organization membership URI returned by the API.
         * @format uri
         */
        organizationMembershipUri: string;
      };
      output: {
        /** A Calendly organization membership resource. */
        organizationMembership: {
          /** The canonical URI of the organization membership. */
          uri: string;
          /** The role assigned within the organization. */
          role?: string;
          /** The user embedded in the organization membership. */
          user?: {
            /** The canonical URI of the membership user. */
            uri: string;
            /** The display name of the membership user. */
            name?: string;
            /** The email address of the membership user. */
            email?: string;
            [key: string]: unknown;
          };
          /** The canonical URI of the organization that owns the membership. */
          organization?: string;
          /** The Calendly resource type label. */
          resource_type?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Calendly routing form by routing-form URI. */
    "calendly.get_routing_form": {
      input: {
        /**
         * The Calendly routing form URI to retrieve.
         * @format uri
         */
        routingFormUri: string;
      };
      output: {
        /** A Calendly routing form resource. */
        routingForm: {
          /** The canonical URI of the routing form. */
          uri: string;
          /** The canonical URI of the organization that owns the routing form. */
          organization: string;
          /** The human-readable name of the routing form. */
          name: string;
          /** The publication status returned for the routing form. */
          status: string;
          /** The ordered questions returned for the routing form. */
          questions: Array<{
            /** The unique identifier of the routing form question. */
            uuid: string;
            /** The human-readable name of the routing form question. */
            name: string;
            /** The routing form question type returned by Calendly. */
            type: string;
            /** Whether the respondent must answer the routing form question. */
            required: boolean;
            /** The allowed answer choices returned for the routing form question. */
            answer_choices: Array<string> | null;
            [key: string]: unknown;
          }>;
          /** The ISO 8601 timestamp when the routing form was created. */
          created_at: string;
          /** The ISO 8601 timestamp when the routing form was last updated. */
          updated_at: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Calendly routing form submission by submission URI. */
    "calendly.get_routing_form_submission": {
      input: {
        /**
         * The Calendly routing form submission URI to retrieve.
         * @format uri
         */
        routingFormSubmissionUri: string;
      };
      output: {
        /** A Calendly routing form submission resource. */
        routingFormSubmission: {
          /** The canonical URI of the routing form submission. */
          uri: string;
          /** The canonical URI of the routing form associated with the submission. */
          routing_form: string;
          /** The answered routing form questions returned for the submission. */
          questions_and_answers: Array<{
            /** The unique identifier of the routing form question attached to the submission answer. */
            question_uuid?: string | null;
            /** The human-readable routing form question text. */
            question: string;
            /** The answer submitted for the routing form question. */
            answer?: string | null;
            [key: string]: unknown;
          }>;
          /** The tracking payload returned for the routing form submission. */
          tracking: {
            /** The UTM campaign value associated with the routing form submission. */
            utm_campaign?: string | null;
            /** The UTM source value associated with the routing form submission. */
            utm_source?: string | null;
            /** The UTM medium value associated with the routing form submission. */
            utm_medium?: string | null;
            /** The UTM content value associated with the routing form submission. */
            utm_content?: string | null;
            /** The UTM term value associated with the routing form submission. */
            utm_term?: string | null;
            /** The Salesforce UUID associated with the routing form submission. */
            salesforce_uuid?: string | null;
            [key: string]: unknown;
          };
          /** The routing result payload returned for the routing form submission. */
          result: {
            /** The routing result type returned for the submission. */
            type: string;
            /** The routing result payload returned for the submission. */
            value: unknown;
            [key: string]: unknown;
          };
          /** The canonical URI of the resource that submitted the routing form. */
          submitter?: string | null;
          /** The resource type that submitted the routing form. */
          submitter_type?: string | null;
          /** The ISO 8601 timestamp when the routing form submission was created. */
          created_at: string;
          /** The ISO 8601 timestamp when the routing form submission was last updated. */
          updated_at: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Calendly scheduled event by scheduled-event URI. */
    "calendly.get_scheduled_event": {
      input: {
        /**
         * The Calendly scheduled event URI returned by the API.
         * @format uri
         */
        scheduledEventUri: string;
      };
      output: {
        /** A Calendly scheduled event resource. */
        scheduledEvent: {
          /** The canonical URI of the scheduled event. */
          uri: string;
          /** The display name of the scheduled event. */
          name?: string;
          /** The scheduled event status. */
          status?: string;
          /** The scheduled start time in ISO 8601 format. */
          start_time?: string;
          /** The scheduled end time in ISO 8601 format. */
          end_time?: string;
          /** The canonical URI of the source event type. */
          event_type?: string;
          /** The Calendly resource type label. */
          resource_type?: string;
          /** The ISO 8601 timestamp when the event was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the event was updated. */
          updated_at?: string;
          /** The location payload returned for the scheduled event. */
          location?: Record<string, unknown>;
          /** The cancellation payload returned when the scheduled event is canceled. */
          cancellation?: Record<string, unknown>;
          /** The membership payloads returned for the scheduled event. */
          event_memberships?: Array<Record<string, unknown>>;
          /** The linked calendar event payload returned for the scheduled event. */
          calendar_event?: Record<string, unknown>;
          /** The plain-text meeting notes returned for the scheduled event. */
          meeting_notes_plain?: string | null;
          /** The HTML meeting notes returned for the scheduled event. */
          meeting_notes_html?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Calendly user by user URI. */
    "calendly.get_user": {
      input: {
        /**
         * The Calendly user URI returned by the API, such as https://api.calendly.com/users/abc123.
         * @format uri
         */
        userUri: string;
      };
      output: {
        /** A Calendly user resource. */
        user: {
          /** The canonical URI of the Calendly user. */
          uri: string;
          /** The full name of the Calendly user. */
          name?: string;
          /** The public scheduling slug of the Calendly user. */
          slug?: string;
          /** The email address of the Calendly user. */
          email?: string;
          /** The public scheduling URL of the Calendly user. */
          scheduling_url?: string;
          /** The IANA timezone configured for the Calendly user. */
          timezone?: string;
          /** The canonical URI of the user's current organization. */
          current_organization?: string;
          /** The ISO 8601 timestamp when the user was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the user was updated. */
          updated_at?: string;
          /** The Calendly resource type label. */
          resource_type?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Calendly user availability schedule by schedule URI. */
    "calendly.get_user_availability_schedule": {
      input: {
        /**
         * The Calendly user availability schedule URI returned by the API.
         * @format uri
         */
        availabilityScheduleUri: string;
      };
      output: {
        /** A Calendly user availability schedule resource. */
        availabilitySchedule: {
          /** The canonical URI of the user availability schedule. */
          uri: string;
          /** The display name of the user availability schedule. */
          name: string;
          /** Whether the schedule is the default schedule. */
          default: boolean;
          /** The canonical URI of the user who owns the schedule. */
          user: string;
          /** The timezone configured on the schedule. */
          timezone: string;
          /** The rules attached to the user availability schedule. */
          rules: Array<{
            /** The availability rule type. */
            type: string;
            /** The specific date for a date-based availability rule. */
            date?: string;
            /** The weekday for a weekday-based availability rule. */
            wday?: string;
            /** The intervals attached to the availability rule. */
            intervals: Array<{
              /** The inclusive start time of the interval in HH:MM format. */
              from: string;
              /** The exclusive end time of the interval in HH:MM format. */
              to: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Calendly webhook subscription by URI. */
    "calendly.get_webhook_subscription": {
      input: {
        /**
         * The Calendly webhook subscription URI returned by the API.
         * @format uri
         */
        webhookSubscriptionUri: string;
      };
      output: {
        /** One Calendly webhook subscription returned by the API. */
        webhookSubscription: {
          /**
           * The canonical URI of the webhook subscription.
           * @format uri
           */
          uri: string;
          /**
           * The callback URL configured for the webhook subscription.
           * @format uri
           */
          callback_url?: string;
          /** The ISO 8601 timestamp when the webhook subscription was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the webhook subscription was updated. */
          updated_at?: string;
          /** The ISO 8601 timestamp when retry delivery started for the subscription. */
          retry_started_at?: string | null;
          /** The current state of the webhook subscription. */
          state?: string;
          /** The subscribed webhook event values. */
          events?: Array<string>;
          /** The webhook subscription scope returned by Calendly. */
          scope?: string;
          /**
           * The organization URI attached to the webhook subscription.
           * @format uri
           */
          organization?: string;
          /** The user URI attached to the webhook subscription. */
          user?: string | null;
          /** The group URI attached to the webhook subscription, when present. */
          group?: string | null;
          /**
           * The creator URI attached to the webhook subscription.
           * @format uri
           */
          creator?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List invitees for one Calendly scheduled event. */
    "calendly.list_event_invitees": {
      input: {
        /**
         * The Calendly scheduled event URI returned by the API.
         * @format uri
         */
        scheduledEventUri: string;
        /**
         * The invitee email filter.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email?: string;
        /** The invitee status filter accepted by Calendly. */
        status?: "active" | "canceled";
        /**
         * The number of invitees to return per page.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The pagination cursor returned by a previous invitees page.
         * @minLength 1
         */
        pageToken?: string;
        /** The sort expression accepted by Calendly for invitees. */
        sort?: "created_at:asc" | "created_at:desc";
      };
      output: {
        /** The invitees returned by Calendly. */
        invitees: Array<{
          /** The canonical URI of the invitee. */
          uri: string;
          /** The invitee email address. */
          email?: string;
          /** The invitee status. */
          status?: string;
          /** The invitee display name. */
          name?: string;
          /** The invitee timezone. */
          timezone?: string;
          /** The ISO 8601 timestamp when the invitee record was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the invitee record was updated. */
          updated_at?: string;
          /** The invitee first name. */
          first_name?: string;
          /** The invitee last name. */
          last_name?: string;
          /** The management URL that lets the invitee cancel the booking. */
          cancel_url?: string | null;
          /** The management URL that lets the invitee reschedule the booking. */
          reschedule_url?: string | null;
          /** The custom question answers returned for the invitee. */
          questions_and_answers?: Array<{
            /** The custom question label returned for the invitee. */
            question?: string;
            /** The answer returned for the custom question. */
            answer?: string;
            /** The display position of the custom question, when Calendly provides it. */
            position?: number;
            [key: string]: unknown;
          }>;
          /** The tracking payload returned for the invitee. */
          tracking?: {
            /** The UTM campaign value attached to the booking. */
            utm_campaign?: string;
            /** The UTM source value attached to the booking. */
            utm_source?: string;
            /** The UTM medium value attached to the booking. */
            utm_medium?: string;
            /** The UTM content value attached to the booking. */
            utm_content?: string;
            /** The UTM term value attached to the booking. */
            utm_term?: string;
            /** The Salesforce UUID attached to the booking. */
            salesforce_uuid?: string;
            [key: string]: unknown;
          };
          /** The phone number used for invitee text reminders, when present. */
          text_reminder_number?: string | null;
          /** The guest attendees returned for the invitee. */
          event_guests?: Array<{
            /** The guest email address returned for the booking. */
            email?: string;
            /** The ISO 8601 timestamp when the guest was added to the booking. */
            created_at?: string;
            [key: string]: unknown;
          }>;
          /** Whether the invitee booking was created by rescheduling another booking. */
          rescheduled?: boolean;
          /** The canonical URI of the original invitee when this booking was rescheduled. */
          old_invitee?: string | null;
          /** The canonical URI of the replacement invitee when this booking was rescheduled. */
          new_invitee?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Calendly list endpoints. */
        pagination: {
          /** The number of items returned in the current page. */
          count?: number;
          /** The URL for the next page, or null when there is no next page. */
          nextPage?: string | null;
          /** The cursor token for the next page, or null when there is no next page. */
          nextPageToken?: string | null;
          /** The URL for the previous page, or null when there is no previous page. */
          previousPage?: string | null;
          /** The cursor token for the previous page, or null when there is no previous page. */
          previousPageToken?: string | null;
        };
      };
    };
    /** List the official Calendly availability schedules attached to one event type. */
    "calendly.list_event_type_availability_schedules": {
      input: {
        /**
         * The Calendly event type URI returned by the API.
         * @format uri
         */
        eventTypeUri: string;
      };
      output: {
        /** The event type availability schedules returned by Calendly. */
        collection: Array<{
          /**
           * The event type URI associated with the availability schedule.
           * @format uri
           */
          event_type: string;
          /** The event type availability setting returned by Calendly. */
          availability_setting?: "host";
          /** The availability rule payload returned for the event type. */
          availability_rule: {
            /** The timezone in which the event type availability schedule is defined. */
            timezone: string;
            /**
             * The canonical URI of the referenced availability schedule.
             * @format uri
             */
            uri?: string;
            /** The name of the referenced availability schedule. */
            name?: string | null;
            /**
             * The user URI returned when the availability setting targets a specific host.
             * @format uri
             */
            user?: string;
            /** The rules returned for the event type availability schedule. */
            rules: Array<{
              /** The availability rule type. */
              type: string;
              /** The specific date for a date-based availability rule. */
              date?: string;
              /** The weekday for a weekday-based availability rule. */
              wday?: string;
              /** The intervals attached to the availability rule. */
              intervals: Array<{
                /** The inclusive start time of the interval in HH:MM format. */
                from: string;
                /** The exclusive end time of the interval in HH:MM format. */
                to: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            }>;
          };
        }>;
        /** Official pagination metadata returned by Calendly list endpoints. */
        pagination: {
          /** The number of items returned in the current page. */
          count?: number;
          /** The URL for the next page, or null when there is no next page. */
          next_page?: string | null;
          /** The cursor token for the next page, or null when there is no next page. */
          next_page_token?: string | null;
          /** The URL for the previous page, or null when there is no previous page. */
          previous_page?: string | null;
          /** The cursor token for the previous page, or null when there is no previous page. */
          previous_page_token?: string | null;
        };
      };
    };
    /** List available time slots for one Calendly event type within a 7-day window. */
    "calendly.list_event_type_available_times": {
      input: {
        /**
         * The Calendly event type URI returned by the API.
         * @format uri
         */
        eventTypeUri: string;
        /**
         * The inclusive start of the availability window in ISO 8601 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        startTime: string;
        /**
         * The exclusive end of the availability window in ISO 8601 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        endTime: string;
      };
      output: {
        /** The available time slots returned by Calendly. */
        availableTimes: Array<{
          /** The start time of one available slot in ISO 8601 format. */
          start_time: string;
          /** The scheduling URL associated with the available slot. */
          scheduling_url?: string;
          /** The remaining invitee capacity for the available slot. */
          invitees_remaining?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Calendly event types for exactly one user or one organization, including scheduling URLs. */
    "calendly.list_event_types": {
      input: {
        /**
         * The Calendly user URI returned by the API, such as https://api.calendly.com/users/abc123.
         * @format uri
         */
        userUri?: string;
        /**
         * The Calendly organization URI returned by the API, such as https://api.calendly.com/organizations/abc123.
         * @format uri
         */
        organizationUri?: string;
        /**
         * The number of event types to return per page.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The pagination cursor returned by a previous event-types page.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The sort expression accepted by Calendly, such as name:asc.
         * @minLength 1
         */
        sort?: string;
        /** Whether to filter event types by active state. */
        active?: boolean;
        /** Whether to filter event types by admin-managed status. */
        adminManaged?: boolean;
        /**
         * The user availability schedule URI used to filter event types.
         * @format uri
         */
        userAvailabilityScheduleUri?: string;
      };
      output: {
        /** The event types returned by Calendly. */
        eventTypes: Array<{
          /** The canonical URI of the Calendly event type. */
          uri: string;
          /** The display name of the Calendly event type. */
          name: string;
          /** Whether the event type is active. */
          active?: boolean;
          /** The scheduling URL returned for the event type. */
          scheduling_url?: string;
          /** The duration of the event type in minutes. */
          duration?: number;
          /** The Calendly event type kind, such as solo or group. */
          kind?: string;
          /** The Calendly event type classification. */
          type?: string;
          /** The color associated with the event type. */
          color?: string;
          /** The ISO 8601 timestamp when the event type was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the event type was updated. */
          updated_at?: string;
          /** Whether the event type is secret. */
          secret?: boolean;
          /** The URL slug of the event type. */
          slug?: string;
          /** The locale configured on the event type. */
          locale?: string;
          /** The pooling type returned by Calendly. */
          pooling_type?: string | null;
          /** The owner profile of the event type. */
          profile?: {
            /** The profile owner type, such as User or Team. */
            type?: string;
            /** The display name of the event type owner. */
            name?: string;
            /** The canonical URI of the event type owner. */
            owner?: string;
            [key: string]: unknown;
          };
          /** The location configurations returned on the event type. */
          locations?: Array<{
            /** The Calendly location kind. */
            kind?: string;
            /** The physical or textual location details. */
            location?: string;
            /** The phone number for phone-call locations. */
            phone_number?: string;
            /** Additional information about the location. */
            additional_info?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Calendly list endpoints. */
        pagination: {
          /** The number of items returned in the current page. */
          count?: number;
          /** The URL for the next page, or null when there is no next page. */
          nextPage?: string | null;
          /** The cursor token for the next page, or null when there is no next page. */
          nextPageToken?: string | null;
          /** The URL for the previous page, or null when there is no previous page. */
          previousPage?: string | null;
          /** The cursor token for the previous page, or null when there is no previous page. */
          previousPageToken?: string | null;
        };
      };
    };
    /** List organization invitations for one Calendly organization. */
    "calendly.list_organization_invitations": {
      input: {
        /**
         * The organization URI whose invitations should be listed.
         * @format uri
         */
        organizationUri: string;
        /**
         * The email filter applied to organization invitations.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email?: string;
        /** The invitation status filter accepted by Calendly. */
        status?: "pending" | "accepted" | "declined";
        /**
         * The number of organization invitations to return per page.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The pagination cursor returned by a previous organization-invitations page.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The sort expression accepted by Calendly for organization invitations.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The organization invitations returned by Calendly. */
        organizationInvitations: Array<{
          /** The canonical URI of the organization invitation. */
          uri: string;
          /** The canonical URI of the organization that owns the invitation. */
          organization: string;
          /** The email address invited to join the organization. */
          email: string;
          /** The current status returned for the organization invitation. */
          status: string;
          /** The ISO 8601 timestamp when the invitation was created. */
          created_at: string;
          /** The ISO 8601 timestamp when the invitation was last updated. */
          updated_at: string;
          /** The ISO 8601 timestamp when the invitation was last sent. */
          last_sent_at: string | null;
          /** The canonical URI of the user who accepted the invitation, when present. */
          user?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Calendly list endpoints. */
        pagination: {
          /** The number of items returned in the current page. */
          count?: number;
          /** The URL for the next page, or null when there is no next page. */
          nextPage?: string | null;
          /** The cursor token for the next page, or null when there is no next page. */
          nextPageToken?: string | null;
          /** The URL for the previous page, or null when there is no previous page. */
          previousPage?: string | null;
          /** The cursor token for the previous page, or null when there is no previous page. */
          previousPageToken?: string | null;
        };
      };
    };
    /** List Calendly organization memberships for one organization or one user. */
    "calendly.list_organization_memberships": {
      input: {
        /**
         * The Calendly organization URI returned by the API, such as https://api.calendly.com/organizations/abc123.
         * @format uri
         */
        organizationUri?: string;
        /**
         * The Calendly user URI returned by the API, such as https://api.calendly.com/users/abc123.
         * @format uri
         */
        userUri?: string;
        /**
         * The email filter applied to organization memberships.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email?: string;
        /**
         * The number of membership records to return per page.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The pagination cursor returned by a previous memberships page.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The organization memberships returned by Calendly. */
        organizationMemberships: Array<{
          /** The canonical URI of the organization membership. */
          uri: string;
          /** The role assigned within the organization. */
          role?: string;
          /** The user embedded in the organization membership. */
          user?: {
            /** The canonical URI of the membership user. */
            uri: string;
            /** The display name of the membership user. */
            name?: string;
            /** The email address of the membership user. */
            email?: string;
            [key: string]: unknown;
          };
          /** The canonical URI of the organization that owns the membership. */
          organization?: string;
          /** The Calendly resource type label. */
          resource_type?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Calendly list endpoints. */
        pagination: {
          /** The number of items returned in the current page. */
          count?: number;
          /** The URL for the next page, or null when there is no next page. */
          nextPage?: string | null;
          /** The cursor token for the next page, or null when there is no next page. */
          nextPageToken?: string | null;
          /** The URL for the previous page, or null when there is no previous page. */
          previousPage?: string | null;
          /** The cursor token for the previous page, or null when there is no previous page. */
          previousPageToken?: string | null;
        };
      };
    };
    /** List Calendly routing form submissions for one routing form. */
    "calendly.list_routing_form_submissions": {
      input: {
        /**
         * The Calendly routing form URI whose submissions should be listed.
         * @format uri
         */
        routingFormUri: string;
        /**
         * The number of routing form submissions to return per page.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The pagination cursor returned by a previous routing-form-submissions page.
         * @minLength 1
         */
        pageToken?: string;
        /** The sort expression accepted by Calendly for routing form submissions. */
        sort?: "created_at:asc" | "created_at:desc";
      };
      output: {
        /** The routing form submissions returned by Calendly. */
        routingFormSubmissions: Array<{
          /** The canonical URI of the routing form submission. */
          uri: string;
          /** The canonical URI of the routing form associated with the submission. */
          routing_form: string;
          /** The answered routing form questions returned for the submission. */
          questions_and_answers: Array<{
            /** The unique identifier of the routing form question attached to the submission answer. */
            question_uuid?: string | null;
            /** The human-readable routing form question text. */
            question: string;
            /** The answer submitted for the routing form question. */
            answer?: string | null;
            [key: string]: unknown;
          }>;
          /** The tracking payload returned for the routing form submission. */
          tracking: {
            /** The UTM campaign value associated with the routing form submission. */
            utm_campaign?: string | null;
            /** The UTM source value associated with the routing form submission. */
            utm_source?: string | null;
            /** The UTM medium value associated with the routing form submission. */
            utm_medium?: string | null;
            /** The UTM content value associated with the routing form submission. */
            utm_content?: string | null;
            /** The UTM term value associated with the routing form submission. */
            utm_term?: string | null;
            /** The Salesforce UUID associated with the routing form submission. */
            salesforce_uuid?: string | null;
            [key: string]: unknown;
          };
          /** The routing result payload returned for the routing form submission. */
          result: {
            /** The routing result type returned for the submission. */
            type: string;
            /** The routing result payload returned for the submission. */
            value: unknown;
            [key: string]: unknown;
          };
          /** The canonical URI of the resource that submitted the routing form. */
          submitter?: string | null;
          /** The resource type that submitted the routing form. */
          submitter_type?: string | null;
          /** The ISO 8601 timestamp when the routing form submission was created. */
          created_at: string;
          /** The ISO 8601 timestamp when the routing form submission was last updated. */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Calendly list endpoints. */
        pagination: {
          /** The number of items returned in the current page. */
          count?: number;
          /** The URL for the next page, or null when there is no next page. */
          nextPage?: string | null;
          /** The cursor token for the next page, or null when there is no next page. */
          nextPageToken?: string | null;
          /** The URL for the previous page, or null when there is no previous page. */
          previousPage?: string | null;
          /** The cursor token for the previous page, or null when there is no previous page. */
          previousPageToken?: string | null;
        };
      };
    };
    /** List Calendly routing forms for one organization. */
    "calendly.list_routing_forms": {
      input: {
        /**
         * The organization URI whose routing forms should be listed.
         * @format uri
         */
        organizationUri: string;
        /**
         * The number of routing forms to return per page.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The pagination cursor returned by a previous routing-forms page.
         * @minLength 1
         */
        pageToken?: string;
        /** The sort expression accepted by Calendly for routing forms. */
        sort?: "created_at:asc" | "created_at:desc";
      };
      output: {
        /** The routing forms returned by Calendly. */
        routingForms: Array<{
          /** The canonical URI of the routing form. */
          uri: string;
          /** The canonical URI of the organization that owns the routing form. */
          organization: string;
          /** The human-readable name of the routing form. */
          name: string;
          /** The publication status returned for the routing form. */
          status: string;
          /** The ordered questions returned for the routing form. */
          questions: Array<{
            /** The unique identifier of the routing form question. */
            uuid: string;
            /** The human-readable name of the routing form question. */
            name: string;
            /** The routing form question type returned by Calendly. */
            type: string;
            /** Whether the respondent must answer the routing form question. */
            required: boolean;
            /** The allowed answer choices returned for the routing form question. */
            answer_choices: Array<string> | null;
            [key: string]: unknown;
          }>;
          /** The ISO 8601 timestamp when the routing form was created. */
          created_at: string;
          /** The ISO 8601 timestamp when the routing form was last updated. */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Calendly list endpoints. */
        pagination: {
          /** The number of items returned in the current page. */
          count?: number;
          /** The URL for the next page, or null when there is no next page. */
          nextPage?: string | null;
          /** The cursor token for the next page, or null when there is no next page. */
          nextPageToken?: string | null;
          /** The URL for the previous page, or null when there is no previous page. */
          previousPage?: string | null;
          /** The cursor token for the previous page, or null when there is no previous page. */
          previousPageToken?: string | null;
        };
      };
    };
    /** List Calendly scheduled events for exactly one user or one organization. */
    "calendly.list_scheduled_events": {
      input: {
        /**
         * The Calendly user URI returned by the API, such as https://api.calendly.com/users/abc123.
         * @format uri
         */
        userUri?: string;
        /**
         * The Calendly organization URI returned by the API, such as https://api.calendly.com/organizations/abc123.
         * @format uri
         */
        organizationUri?: string;
        /**
         * The invitee email used to filter scheduled events.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        inviteeEmail?: string;
        /** The scheduled-event status filter accepted by Calendly. */
        status?: "active" | "canceled";
        /**
         * The minimum scheduled start time filter in ISO 8601 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        minStartTime?: string;
        /**
         * The maximum scheduled start time filter in ISO 8601 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        maxStartTime?: string;
        /**
         * The number of scheduled events to return per page.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The pagination cursor returned by a previous scheduled-events page.
         * @minLength 1
         */
        pageToken?: string;
        /** The sort expression accepted by Calendly for scheduled events. */
        sort?: "start_time:asc" | "start_time:desc";
      };
      output: {
        /** The scheduled events returned by Calendly. */
        scheduledEvents: Array<{
          /** The canonical URI of the scheduled event. */
          uri: string;
          /** The display name of the scheduled event. */
          name?: string;
          /** The scheduled event status. */
          status?: string;
          /** The scheduled start time in ISO 8601 format. */
          start_time?: string;
          /** The scheduled end time in ISO 8601 format. */
          end_time?: string;
          /** The canonical URI of the source event type. */
          event_type?: string;
          /** The Calendly resource type label. */
          resource_type?: string;
          /** The ISO 8601 timestamp when the event was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the event was updated. */
          updated_at?: string;
          /** The location payload returned for the scheduled event. */
          location?: Record<string, unknown>;
          /** The cancellation payload returned when the scheduled event is canceled. */
          cancellation?: Record<string, unknown>;
          /** The membership payloads returned for the scheduled event. */
          event_memberships?: Array<Record<string, unknown>>;
          /** The linked calendar event payload returned for the scheduled event. */
          calendar_event?: Record<string, unknown>;
          /** The plain-text meeting notes returned for the scheduled event. */
          meeting_notes_plain?: string | null;
          /** The HTML meeting notes returned for the scheduled event. */
          meeting_notes_html?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Calendly list endpoints. */
        pagination: {
          /** The number of items returned in the current page. */
          count?: number;
          /** The URL for the next page, or null when there is no next page. */
          nextPage?: string | null;
          /** The cursor token for the next page, or null when there is no next page. */
          nextPageToken?: string | null;
          /** The URL for the previous page, or null when there is no previous page. */
          previousPage?: string | null;
          /** The cursor token for the previous page, or null when there is no previous page. */
          previousPageToken?: string | null;
        };
      };
    };
    /** List user availability schedules for one Calendly user. */
    "calendly.list_user_availability_schedules": {
      input: {
        /**
         * The Calendly user URI returned by the API, such as https://api.calendly.com/users/abc123.
         * @format uri
         */
        userUri: string;
      };
      output: {
        /** The availability schedules returned by Calendly. */
        availabilitySchedules: Array<{
          /** The canonical URI of the user availability schedule. */
          uri: string;
          /** The display name of the user availability schedule. */
          name: string;
          /** Whether the schedule is the default schedule. */
          default: boolean;
          /** The canonical URI of the user who owns the schedule. */
          user: string;
          /** The timezone configured on the schedule. */
          timezone: string;
          /** The rules attached to the user availability schedule. */
          rules: Array<{
            /** The availability rule type. */
            type: string;
            /** The specific date for a date-based availability rule. */
            date?: string;
            /** The weekday for a weekday-based availability rule. */
            wday?: string;
            /** The intervals attached to the availability rule. */
            intervals: Array<{
              /** The inclusive start time of the interval in HH:MM format. */
              from: string;
              /** The exclusive end time of the interval in HH:MM format. */
              to: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /**
         * Pagination metadata returned by Calendly list endpoints.
         * @default {}
         */
        pagination: {
          /** The number of items returned in the current page. */
          count?: number;
          /** The URL for the next page, or null when there is no next page. */
          nextPage?: string | null;
          /** The cursor token for the next page, or null when there is no next page. */
          nextPageToken?: string | null;
          /** The URL for the previous page, or null when there is no previous page. */
          previousPage?: string | null;
          /** The cursor token for the previous page, or null when there is no previous page. */
          previousPageToken?: string | null;
        };
      };
    };
    /** List busy time slots for one Calendly user within a 7-day window. */
    "calendly.list_user_busy_times": {
      input: {
        /**
         * The Calendly user URI returned by the API, such as https://api.calendly.com/users/abc123.
         * @format uri
         */
        userUri: string;
        /**
         * The inclusive start of the busy-times window in ISO 8601 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        startTime: string;
        /**
         * The exclusive end of the busy-times window in ISO 8601 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        endTime: string;
      };
      output: {
        /** The busy-time slots returned by Calendly. */
        busyTimes: Array<{
          /** The source type of the busy-time slot. */
          type?: string;
          /** The inclusive start time of the busy slot in ISO 8601 format. */
          start_time: string;
          /** The exclusive end time of the busy slot in ISO 8601 format. */
          end_time: string;
          /** The buffered start time returned by Calendly, when present. */
          buffered_start_time?: string;
          /** The buffered end time returned by Calendly, when present. */
          buffered_end_time?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Calendly list endpoints. */
        pagination: {
          /** The number of items returned in the current page. */
          count?: number;
          /** The URL for the next page, or null when there is no next page. */
          nextPage?: string | null;
          /** The cursor token for the next page, or null when there is no next page. */
          nextPageToken?: string | null;
          /** The URL for the previous page, or null when there is no previous page. */
          previousPage?: string | null;
          /** The cursor token for the previous page, or null when there is no previous page. */
          previousPageToken?: string | null;
        };
      };
    };
    /** List the configured meeting locations for one Calendly user. */
    "calendly.list_user_meeting_locations": {
      input: {
        /**
         * The Calendly user URI returned by the API, such as https://api.calendly.com/users/abc123.
         * @format uri
         */
        userUri: string;
      };
      output: {
        /** The configured meeting locations returned by Calendly. */
        meetingLocations: Array<{
          /** The Calendly meeting-location kind. */
          kind: string;
          /** Whether the underlying conferencing integration is connected. */
          connected?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Calendly webhook subscriptions for an organization or one user. */
    "calendly.list_webhook_subscriptions": {
      input: {
        /** The webhook subscription scope to list. */
        scope: "organization" | "user";
        /**
         * The Calendly organization URI returned by the API, such as https://api.calendly.com/organizations/abc123.
         * @format uri
         */
        organizationUri: string;
        /**
         * The user URI to target when the webhook scope is user.
         * @format uri
         */
        userUri?: string;
        /**
         * The number of webhook subscriptions to return per page.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The pagination cursor returned by a previous webhook-subscriptions page.
         * @minLength 1
         */
        pageToken?: string;
        /** The sort expression accepted by Calendly for webhook subscriptions. */
        sort?: "created_at:asc" | "created_at:desc";
      };
      output: {
        /** The webhook subscriptions returned by Calendly. */
        webhookSubscriptions: Array<{
          /**
           * The canonical URI of the webhook subscription.
           * @format uri
           */
          uri: string;
          /**
           * The callback URL configured for the webhook subscription.
           * @format uri
           */
          callback_url?: string;
          /** The ISO 8601 timestamp when the webhook subscription was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the webhook subscription was updated. */
          updated_at?: string;
          /** The ISO 8601 timestamp when retry delivery started for the subscription. */
          retry_started_at?: string | null;
          /** The current state of the webhook subscription. */
          state?: string;
          /** The subscribed webhook event values. */
          events?: Array<string>;
          /** The webhook subscription scope returned by Calendly. */
          scope?: string;
          /**
           * The organization URI attached to the webhook subscription.
           * @format uri
           */
          organization?: string;
          /** The user URI attached to the webhook subscription. */
          user?: string | null;
          /** The group URI attached to the webhook subscription, when present. */
          group?: string | null;
          /**
           * The creator URI attached to the webhook subscription.
           * @format uri
           */
          creator?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Calendly list endpoints. */
        pagination: {
          /** The number of items returned in the current page. */
          count?: number;
          /** The URL for the next page, or null when there is no next page. */
          nextPage?: string | null;
          /** The cursor token for the next page, or null when there is no next page. */
          nextPageToken?: string | null;
          /** The URL for the previous page, or null when there is no previous page. */
          previousPage?: string | null;
          /** The cursor token for the previous page, or null when there is no previous page. */
          previousPageToken?: string | null;
        };
      };
    };
    /** Revoke one organization invitation from a Calendly organization. */
    "calendly.revoke_organization_invitation": {
      input: {
        /**
         * The organization URI that owns the invitation to revoke.
         * @format uri
         */
        organizationUri: string;
        /**
         * The organization invitation URI to revoke.
         * @format uri
         */
        organizationInvitationUri: string;
      };
      output: {
        /** Whether Calendly accepted the revoke request. */
        revoked: boolean;
      };
    };
    /** Update the official Calendly availability schedule for one event type. */
    "calendly.update_event_type_availability_schedule": {
      input: {
        /**
         * The Calendly event type URI returned by the API.
         * @format uri
         */
        eventTypeUri: string;
        /** The availability rule payload to apply to the event type. */
        availability_rule: {
          /**
           * The timezone in which the event type availability schedule is defined.
           * @minLength 1
           */
          timezone: string;
          /** The rules to apply to the event type availability schedule. */
          rules?: Array<{
            /** The availability rule type. */
            type: string;
            /** The specific date for a date-based availability rule. */
            date?: string;
            /** The weekday for a weekday-based availability rule. */
            wday?: string;
            /** The intervals attached to the availability rule. */
            intervals: Array<{
              /** The inclusive start time of the interval in HH:MM format. */
              from: string;
              /** The exclusive end time of the interval in HH:MM format. */
              to: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /**
           * The user URI to target when an admin or org owner updates a specific host schedule.
           * @format uri
           */
          user?: string;
        };
        /** The event type availability setting to apply to the event type. */
        availability_setting?: "host";
      };
      output: {
        /** One event type availability schedule returned by Calendly. */
        resource: {
          /**
           * The event type URI associated with the availability schedule.
           * @format uri
           */
          event_type: string;
          /** The event type availability setting returned by Calendly. */
          availability_setting?: "host";
          /** The availability rule payload returned for the event type. */
          availability_rule: {
            /** The timezone in which the event type availability schedule is defined. */
            timezone: string;
            /**
             * The canonical URI of the referenced availability schedule.
             * @format uri
             */
            uri?: string;
            /** The name of the referenced availability schedule. */
            name?: string | null;
            /**
             * The user URI returned when the availability setting targets a specific host.
             * @format uri
             */
            user?: string;
            /** The rules returned for the event type availability schedule. */
            rules: Array<{
              /** The availability rule type. */
              type: string;
              /** The specific date for a date-based availability rule. */
              date?: string;
              /** The weekday for a weekday-based availability rule. */
              wday?: string;
              /** The intervals attached to the availability rule. */
              intervals: Array<{
                /** The inclusive start time of the interval in HH:MM format. */
                from: string;
                /** The exclusive end time of the interval in HH:MM format. */
                to: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            }>;
          };
        };
      };
    };
  }
}
