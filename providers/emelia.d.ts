import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for one Emelia email campaign. */
    "emelia.get_campaign": {
      input: {
        /**
         * The Emelia email campaign ID.
         * @minLength 1
         */
        campaignId: string;
      };
      output: {
        /** An Emelia email campaign record. */
        campaign: {
          /** The campaign identifier returned by Emelia. */
          _id?: string;
          /** The campaign identifier returned by Emelia when present. */
          id?: string;
          /** The campaign name. */
          name?: string;
          /** The campaign status. */
          status?: string;
          /** The timestamp when the campaign was created. */
          createdAt?: string;
          /** The timestamp when the campaign was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List activity events for one Emelia email campaign. */
    "emelia.get_campaign_activities": {
      input: {
        /**
         * The Emelia email campaign ID.
         * @minLength 1
         */
        campaignId: string;
        /**
         * The 1-based page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Filter activities by event type. */
        type?: "SENT" | "FIRST_OPEN" | "OPENED" | "CLICKED" | "REPLIED" | "RE_REPLY" | "BOUNCED" | "UNSUBSCRIBED";
        /** Free-text search across activities. */
        query?: string;
        /** Filter activities by contact ID. */
        contactId?: string;
        /** Filter activities by campaign version ID. */
        versionId?: string;
      };
      output: {
        /** The campaign activities returned by Emelia. */
        activities: Array<{
          /** The campaign ID associated with the activity. */
          campaign?: string;
          /** The contact ID associated with the activity. */
          contact?: string;
          /** The activity event name. */
          event?: string;
          /** The campaign step ID. */
          stepId?: string;
          /** The campaign version ID. */
          versionId?: string;
          /** The email provider ID. */
          providerId?: string;
          /** Additional event data returned by Emelia. */
          customData?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List contacts in one Emelia email campaign. */
    "emelia.list_campaign_contacts": {
      input: {
        /**
         * The Emelia email campaign ID.
         * @minLength 1
         */
        campaignId: string;
        /**
         * The 1-based page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The contacts returned by Emelia. */
        contacts: Array<{
          /** The contact identifier returned by Emelia. */
          _id?: string;
          /** The contact identifier returned by Emelia when present. */
          id?: string;
          /**
           * The contact email address.
           * @format email
           */
          email?: string;
          /** The contact first name. */
          firstName?: string;
          /** The contact last name. */
          lastName?: string;
          /** The contact campaign status. */
          status?: string;
          /** The number of emails sent to the contact. */
          mailsSent?: number;
          /** The contact interest status. */
          interested?: string;
          [key: string]: unknown;
        }>;
        /** The total contact count when Emelia returns one. */
        count?: number;
      };
    };
    /** List Emelia email campaigns, optionally filtered by page, limit, or search text. */
    "emelia.list_campaigns": {
      input: {
        /**
         * The 1-based page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of campaigns to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Search text used to filter campaigns. */
        search?: string;
      };
      output: {
        /** The email campaigns returned by Emelia. */
        campaigns: Array<{
          /** The campaign identifier returned by Emelia. */
          _id?: string;
          /** The campaign identifier returned by Emelia when present. */
          id?: string;
          /** The campaign name. */
          name?: string;
          /** The campaign status. */
          status?: string;
          /** The timestamp when the campaign was created. */
          createdAt?: string;
          /** The timestamp when the campaign was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List configured Emelia email providers for the authenticated account. */
    "emelia.list_email_providers": {
      input: Record<string, never>;
      output: {
        /** The email providers returned by Emelia. */
        providers: Array<{
          /** The email provider identifier returned by Emelia. */
          _id?: string;
          /** The email provider identifier returned by Emelia when present. */
          id?: string;
          /** The email provider type. */
          emailType?: string;
          /**
           * The configured sender email address.
           * @format email
           */
          senderEmail?: string;
          /** The configured sender display name. */
          senderName?: string;
          /** Whether the email provider is disabled. */
          disabled?: boolean;
          /** Whether the email provider is disconnected. */
          disconnected?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List user webhooks configured in Emelia. */
    "emelia.list_webhooks": {
      input: Record<string, never>;
      output: {
        /** The webhooks returned by Emelia. */
        webhooks: Array<{
          /** The webhook identifier. */
          id?: string;
          /**
           * The webhook target URL.
           * @format uri
           */
          url?: string;
          /** The event names delivered to the webhook. */
          events?: Array<string>;
          /** The webhook status. */
          status?: string;
          /** The campaign ID associated with the webhook. */
          campaignId?: string;
          /** The campaign name associated with the webhook. */
          campaignName?: string;
          /** The campaign type associated with the webhook. */
          typeOfCampaign?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
