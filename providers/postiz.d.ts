import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a draft, publish immediately, or schedule content on connected Postiz channels. */
    "postiz.create_post": {
      input: {
        /** Publication mode. */
        type: "draft" | "now" | "schedule";
        /**
         * Publish date in UTC ISO format; ignored for immediate publishing.
         * @format date-time
         */
        date: string;
        /** Whether Postiz should shorten links. */
        shortLink: boolean;
        /** Post tags. */
        tags: Array<{
          /** Tag value. */
          value: string;
          /** Tag label. */
          label: string;
        }>;
        /**
         * Destination channel posts.
         * @minItems 1
         */
        posts?: Array<{
          /** Destination channel. */
          integration: {
            /**
             * Postiz integration ID.
             * @minLength 1
             */
            id: string;
          };
          /**
           * Content items for this channel.
           * @minItems 1
           */
          value: Array<{
            /** Text content to publish. */
            content: string;
            /** Previously uploaded media references. */
            image?: Array<{
              /** Uploaded media ID. */
              id?: string;
              /** Hosted media URL. */
              path?: string;
              [key: string]: unknown;
            }>;
          }>;
          /** Platform-specific settings, including the required __type platform identifier. */
          settings?: {
            /**
             * Postiz platform identifier matching the destination channel.
             * @minLength 1
             */
            __type?: string;
            [key: string]: unknown;
          };
          /** Group ID for related posts. */
          group?: string;
        }>;
        /** Post ordering strategy accepted by Postiz. */
        order?: string;
        /** Interval between posts. */
        inter?: number;
      };
      output: Array<{
        /** Created Postiz post ID. */
        postId?: string;
        /** Destination integration ID. */
        integration?: string;
        [key: string]: unknown;
      }>;
    };
    /** List connected Postiz social channels, optionally filtered by customer group. */
    "postiz.list_integrations": {
      input: {
        /**
         * Customer group ID.
         * @minLength 1
         */
        group?: string;
      };
      output: Array<{
        /** Postiz integration ID. */
        id?: string;
        /** Channel display name. */
        name?: string;
        /** Social platform identifier. */
        identifier?: string;
        [key: string]: unknown;
      }>;
    };
    /** List Postiz posts in a UTC date range. */
    "postiz.list_posts": {
      input: {
        /**
         * Inclusive start time in UTC ISO format.
         * @format date-time
         */
        startDate: string;
        /**
         * End time in UTC ISO format.
         * @format date-time
         */
        endDate: string;
        /**
         * Optional customer ID filter.
         * @minLength 1
         */
        customer?: string;
      };
      output: {
        /** Posts in the selected date range. */
        posts?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Ask Postiz to import a publicly reachable media file from a URL. */
    "postiz.upload_from_url": {
      input: {
        /**
         * Public HTTPS media URL reachable by Postiz without authentication.
         * @pattern ^https://
         * @format uri
         */
        url: string;
      };
      output: {
        /** Uploaded media ID. */
        id?: string;
        /** Hosted media URL to include in a post. */
        path?: string;
        [key: string]: unknown;
      };
    };
  }
}
