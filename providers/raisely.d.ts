import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Raisely webhook for account-wide or campaign-specific events. */
    "raisely.create_webhook": {
      input: {
        /**
         * The campaign UUID to restrict events to, or omit it for account-wide events.
         * @minLength 1
         */
        campaignUuid?: string;
        /** The Raisely event names to forward to the webhook. */
        events?: Array<string>;
        /** The shared secret Raisely includes in webhook payloads. */
        secret?: string;
        /**
         * The URL Raisely should send webhook events to.
         * @minLength 1
         */
        url?: string;
      };
      output: {
        /** A Raisely record returned by the API. */
        webhook: Record<string, unknown>;
      };
    };
    /** Delete a Raisely webhook and return the deleted record. */
    "raisely.delete_webhook": {
      input: {
        /**
         * The Raisely webhook UUID.
         * @minLength 1
         */
        webhookId: string;
      };
      output: {
        /** A Raisely record returned by the API. */
        webhook: Record<string, unknown>;
      };
    };
    /** Fetch one Raisely campaign by UUID, path, or domain. */
    "raisely.get_campaign": {
      input: {
        /**
         * The campaign UUID, path, or domain.
         * @minLength 1
         */
        campaign: string;
        /** Whether Raisely should include private campaign fields. */
        private?: boolean;
        /** Whether to omit the large campaign config from the result. */
        pruneConfig?: boolean;
        /** Whether to include tags attached to the campaign. */
        includeTags?: boolean;
      };
      output: {
        /** A Raisely record returned by the API. */
        campaign: Record<string, unknown>;
      };
    };
    /** Fetch one Raisely fundraising profile by UUID or path. */
    "raisely.get_profile": {
      input: {
        /**
         * The profile UUID or path.
         * @minLength 1
         */
        profilePath: string;
        /**
         * The campaign UUID, path, or domain used for lookup context.
         * @minLength 1
         */
        campaign?: string;
        /** Whether Raisely should include private profile fields. */
        private?: boolean;
      };
      output: {
        /** A Raisely record returned by the API. */
        profile: Record<string, unknown>;
      };
    };
    /** List Raisely campaigns with optional search, filters, sorting, and pagination. */
    "raisely.list_campaigns": {
      input: {
        /** Whether Raisely should include private record fields. */
        private?: boolean;
        /**
         * A search query matched against Raisely records.
         * @minLength 1
         */
        query?: string;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The Raisely record attribute to sort by.
         * @minLength 1
         */
        sort?: string;
        /** The direction to sort records. */
        order?: "asc" | "desc";
        /**
         * A campaign path to filter by.
         * @minLength 1
         */
        path?: string;
        /**
         * A campaign mode to filter by.
         * @minLength 1
         */
        mode?: string;
        /**
         * A campaign status to filter by.
         * @minLength 1
         */
        status?: string;
        /** Whether to omit the large campaign config from private results. */
        pruneConfig?: boolean;
        /** Whether to include tags attached to each campaign. */
        includeTags?: boolean;
      };
      output: {
        /** The campaigns returned by Raisely. */
        campaigns: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Raisely. */
        pagination: Record<string, unknown>;
      };
    };
    /** List fundraising profiles in a Raisely campaign. */
    "raisely.list_profiles": {
      input: {
        /**
         * The campaign UUID, path, or domain.
         * @minLength 1
         */
        campaign: string;
        /** Whether Raisely should include private record fields. */
        private?: boolean;
        /**
         * A search query matched against Raisely records.
         * @minLength 1
         */
        query?: string;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The Raisely record attribute to sort by.
         * @minLength 1
         */
        sort?: string;
        /** The direction to sort records. */
        order?: "asc" | "desc";
        /**
         * The Raisely value used to rank profiles by total raised.
         * @minLength 1
         */
        rank?: string;
        /**
         * The Raisely value used to rank profiles by unique donors.
         * @minLength 1
         */
        rankDonors?: string;
        /**
         * The Raisely value used to rank profiles by activity total.
         * @minLength 1
         */
        rankActivityTotal?: string;
        /**
         * The Raisely value used to rank profiles by activity time.
         * @minLength 1
         */
        rankActivityTime?: string;
      };
      output: {
        /** The fundraising profiles returned by Raisely. */
        profiles: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Raisely. */
        pagination: Record<string, unknown>;
      };
    };
    /** List webhooks configured for a Raisely campaign. */
    "raisely.list_webhooks": {
      input: {
        /**
         * The campaign UUID, path, or domain.
         * @minLength 1
         */
        campaign: string;
        /** Whether Raisely should include private record fields. */
        private?: boolean;
        /**
         * A search query matched against Raisely records.
         * @minLength 1
         */
        query?: string;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The Raisely record attribute to sort by.
         * @minLength 1
         */
        sort?: string;
        /** The direction to sort records. */
        order?: "asc" | "desc";
      };
      output: {
        /** The webhooks returned by Raisely. */
        webhooks: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Raisely. */
        pagination: Record<string, unknown>;
      };
    };
    /** Update a Raisely webhook's events, secret, or destination URL. */
    "raisely.update_webhook": {
      input: {
        /**
         * The Raisely webhook UUID.
         * @minLength 1
         */
        webhookId: string;
        /** Whether Raisely should include private webhook fields. */
        private?: boolean;
        /** The Raisely event names to forward to the webhook. */
        events?: Array<string>;
        /** The shared secret Raisely includes in webhook payloads. */
        secret?: string;
        /**
         * The URL Raisely should send webhook events to.
         * @minLength 1
         */
        url?: string;
      };
      output: {
        /** A Raisely record returned by the API. */
        webhook: Record<string, unknown>;
      };
    };
  }
}
