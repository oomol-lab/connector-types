import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one lemlist campaign by campaign ID. */
    "lemlist.get_campaign": {
      input: {
        /**
         * Unique identifier of the campaign to retrieve.
         * @minLength 1
         */
        campaignId: string;
      };
      output: {
        /** lemlist campaign summary or detail. */
        campaign: {
          /** Unique campaign identifier. */
          _id: string;
          /** Campaign name. */
          name: string;
          /** Categorization labels. */
          labels?: Array<string>;
          /** Creation timestamp. */
          createdAt?: string;
          /** Creator user ID. */
          createdBy?: string;
          /** Campaign status returned by lemlist. */
          status?: string;
          /** Main sequence ID. */
          sequenceId?: string;
          /** Associated schedule IDs. */
          scheduleIds?: Array<string>;
          /** ID of the team that owns this campaign. */
          teamId?: string;
          /** Whether the campaign has errors. */
          hasError?: boolean;
          /** Campaign error messages. */
          errors?: Array<string>;
          /** Campaign creator information. */
          creator?: {
            /** Creator user ID. */
            userId?: string;
            /**
             * Creator email address.
             * @format email
             */
            userEmail?: string;
            [key: string]: unknown;
          };
          /** Campaign senders configuration. */
          senders?: Array<{
            /** Sender user ID. */
            id?: string;
            /**
             * Sender email address.
             * @format email
             */
            email?: string;
            /** Mailbox ID used for sending. */
            sendUserMailboxId?: string;
            [key: string]: unknown;
          }>;
          /** Raw campaign payload returned by lemlist. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve information about the lemlist team for the API key. */
    "lemlist.get_team": {
      input: Record<string, never>;
      output: {
        /** lemlist team information. */
        team: {
          /** Unique team identifier. */
          _id: string;
          /** Team name. */
          name: string;
          /** User IDs in this team. */
          userIds?: Array<string>;
          /** User ID who created the team. */
          createdBy?: string;
          /** Date and time when the team was created. */
          createdAt?: string;
          /** Beta features enabled for the team. */
          beta?: Array<string>;
          /** Team profile picture file ID. */
          pictureId?: string;
          /** Custom domain for the team. */
          customDomain?: string;
          /** Raw team payload returned by lemlist. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List leads from a lemlist campaign with optional state filtering. */
    "lemlist.list_campaign_leads": {
      input: {
        /**
         * Unique identifier of the campaign whose leads should be listed.
         * @minLength 1
         */
        campaignId: string;
        /**
         * Lead state filter such as scanned, contacted, or interested.
         * @minLength 1
         */
        state?: string;
        /**
         * Maximum number of leads to return. lemlist allows up to 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
      };
      output: {
        /** Leads returned by lemlist. */
        leads: Array<{
          /** Unique lead identifier. */
          _id: string;
          /** Associated contact identifier. */
          contactId?: string;
          /** Current lead state. */
          state?: string;
          /** Raw lead payload returned by lemlist. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List lemlist campaigns with optional pagination and status filters. */
    "lemlist.list_campaigns": {
      input: {
        /**
         * Number of campaigns to retrieve. lemlist allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Offset from the start for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /** Field by which to sort campaigns. */
        sortBy?: "createdAt";
        /** Sort direction for campaign listing. */
        sortOrder?: "asc" | "desc";
        /** Campaign status filter supported by lemlist. */
        status?: "running" | "draft" | "archived" | "ended" | "paused" | "errors";
        /**
         * Creator user ID used to filter campaigns.
         * @minLength 1
         */
        createdBy?: string;
      };
      output: {
        /** Campaigns returned by lemlist. */
        campaigns: Array<{
          /** Unique campaign identifier. */
          _id: string;
          /** Campaign name. */
          name: string;
          /** Categorization labels. */
          labels?: Array<string>;
          /** Creation timestamp. */
          createdAt?: string;
          /** Creator user ID. */
          createdBy?: string;
          /** Campaign status returned by lemlist. */
          status?: string;
          /** Main sequence ID. */
          sequenceId?: string;
          /** Associated schedule IDs. */
          scheduleIds?: Array<string>;
          /** ID of the team that owns this campaign. */
          teamId?: string;
          /** Whether the campaign has errors. */
          hasError?: boolean;
          /** Campaign error messages. */
          errors?: Array<string>;
          /** Campaign creator information. */
          creator?: {
            /** Creator user ID. */
            userId?: string;
            /**
             * Creator email address.
             * @format email
             */
            userEmail?: string;
            [key: string]: unknown;
          };
          /** Campaign senders configuration. */
          senders?: Array<{
            /** Sender user ID. */
            id?: string;
            /**
             * Sender email address.
             * @format email
             */
            email?: string;
            /** Mailbox ID used for sending. */
            sendUserMailboxId?: string;
            [key: string]: unknown;
          }>;
          /** Raw campaign payload returned by lemlist. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
