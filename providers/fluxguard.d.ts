import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a URL as a monitored Fluxguard page. */
    "fluxguard.add_page": {
      input: {
        /**
         * The absolute URL that Fluxguard should monitor.
         * @minLength 1
         * @format uri
         */
        url: string;
        /**
         * The Fluxguard site ID.
         * @minLength 1
         * @pattern \S
         */
        siteId?: string;
        /**
         * The Fluxguard session ID.
         * @minLength 1
         * @pattern \S
         */
        sessionId?: string;
        /**
         * A nickname for the monitored site or page.
         * @minLength 1
         * @pattern \S
         */
        nickname?: string;
        /**
         * Fluxguard site category IDs to assign while creating a site.
         * @minItems 1
         */
        categoryIds?: Array<string>;
      };
      output: {
        /** A normalized Fluxguard add-page response. */
        page: {
          /** The site ID returned by Fluxguard. */
          siteId: string | null;
          /** The session ID returned by Fluxguard. */
          sessionId: string | null;
          /** The page ID returned by Fluxguard. */
          pageId: string | null;
          /** The raw object returned by Fluxguard. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Fluxguard site category. */
    "fluxguard.create_category": {
      input: {
        /**
         * The Fluxguard site category name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
      };
      output: {
        /** A normalized Fluxguard category object. */
        category: {
          /** The Fluxguard category ID. */
          id: string;
          /** The category name when returned. */
          name: string | null;
          /** The category type when returned, such as site or page. */
          type: string | null;
          /** The raw object returned by Fluxguard. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete a Fluxguard monitored page and its captured versions. */
    "fluxguard.delete_page": {
      input: {
        /**
         * The Fluxguard site ID.
         * @minLength 1
         * @pattern \S
         */
        siteId: string;
        /**
         * The Fluxguard session ID.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
        /**
         * The Fluxguard page ID.
         * @minLength 1
         * @pattern \S
         */
        pageId: string;
      };
      output: {
        /** A normalized Fluxguard operation result. */
        result: {
          /** Whether the Fluxguard operation completed successfully. */
          ok: boolean;
          /** The raw object returned by Fluxguard. */
          raw: Record<string, unknown> | null;
        };
      };
    };
    /** Delete a Fluxguard monitored site and its associated data. */
    "fluxguard.delete_site": {
      input: {
        /**
         * The Fluxguard site ID.
         * @minLength 1
         * @pattern \S
         */
        siteId: string;
      };
      output: {
        /** A normalized Fluxguard operation result. */
        result: {
          /** Whether the Fluxguard operation completed successfully. */
          ok: boolean;
          /** The raw object returned by Fluxguard. */
          raw: Record<string, unknown> | null;
        };
      };
    };
    /** Delete the Fluxguard account webhook. */
    "fluxguard.delete_webhook": {
      input: Record<string, never>;
      output: {
        /** A normalized Fluxguard operation result. */
        result: {
          /** Whether the Fluxguard operation completed successfully. */
          ok: boolean;
          /** The raw object returned by Fluxguard. */
          raw: Record<string, unknown> | null;
        };
      };
    };
    /** Get account attributes for the authenticated Fluxguard organization. */
    "fluxguard.get_account": {
      input: Record<string, never>;
      output: {
        /** A normalized Fluxguard account response. */
        account: {
          /** The Fluxguard account or organization ID when returned. */
          id: string | null;
          /** The account status when returned. */
          status: string | null;
          /** The raw object returned by Fluxguard. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Fluxguard data for a monitored page. */
    "fluxguard.get_page": {
      input: {
        /**
         * The Fluxguard site ID.
         * @minLength 1
         * @pattern \S
         */
        siteId: string;
        /**
         * The Fluxguard session ID.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
        /**
         * The Fluxguard page ID.
         * @minLength 1
         * @pattern \S
         */
        pageId: string;
      };
      output: {
        /** A normalized Fluxguard monitored page response. */
        page: {
          /** The site ID returned by Fluxguard. */
          siteId: string | null;
          /** The session ID returned by Fluxguard. */
          sessionId: string | null;
          /** The page ID returned by Fluxguard. */
          pageId: string | null;
          /** The monitored page URL when returned. */
          url: string | null;
          /** The raw object returned by Fluxguard. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a sample Fluxguard webhook payload for the authenticated account. */
    "fluxguard.get_sample_webhook": {
      input: Record<string, never>;
      output: {
        /** The sample webhook payload returned by Fluxguard. */
        sample: Record<string, unknown>;
      };
    };
    /** Initiate a Fluxguard crawl for a monitored session. */
    "fluxguard.initiate_crawl": {
      input: {
        /**
         * The Fluxguard site ID.
         * @minLength 1
         * @pattern \S
         */
        siteId: string;
        /**
         * The Fluxguard session ID.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
      };
      output: {
        /** A normalized Fluxguard operation result. */
        result: {
          /** Whether the Fluxguard operation completed successfully. */
          ok: boolean;
          /** The raw object returned by Fluxguard. */
          raw: Record<string, unknown> | null;
        };
      };
    };
    /** List Fluxguard account categories. */
    "fluxguard.list_categories": {
      input: Record<string, never>;
      output: {
        /** The categories returned by Fluxguard. */
        categories: Array<{
          /** The Fluxguard category ID. */
          id: string;
          /** The category name when returned. */
          name: string | null;
          /** The category type when returned, such as site or page. */
          type: string | null;
          /** The raw object returned by Fluxguard. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Fluxguard. */
        raw: Record<string, unknown>;
      };
    };
    /** List Fluxguard webhooks configured for the authenticated account. */
    "fluxguard.list_webhooks": {
      input: Record<string, never>;
      output: {
        /** The webhooks returned by Fluxguard. */
        webhooks: Array<{
          /** The webhook ID returned by Fluxguard. */
          id: string | null;
          /** The webhook URL returned by Fluxguard. */
          url: string | null;
          /** The raw object returned by Fluxguard. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Create or replace the Fluxguard account webhook. */
    "fluxguard.upsert_webhook": {
      input: {
        /**
         * The webhook URL that Fluxguard should notify.
         * @minLength 1
         * @format uri
         */
        url: string;
        /**
         * Fluxguard site category IDs to associate with the webhook.
         * @minItems 1
         */
        siteCategoryIds?: Array<string>;
      };
      output: {
        /** A normalized Fluxguard webhook object. */
        webhook: {
          /** The webhook ID returned by Fluxguard. */
          id: string | null;
          /** The webhook URL returned by Fluxguard. */
          url: string | null;
          /** The raw object returned by Fluxguard. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
