import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the stored details for one shortened URL in L2S. */
    "l2s.get_url_details": {
      input: {
        /**
         * The L2S URL ID path parameter.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the L2S request succeeded. */
        ok: boolean;
        /** The response envelope returned by L2S. */
        response: {
          /** The message returned by L2S. */
          message: string;
          /** The L2S response data payload. */
          data?: Record<string, unknown>;
        };
      };
    };
    /** Create a shortened URL in L2S with optional custom key, UTM tags, and title. */
    "l2s.shorten_url": {
      input: {
        /**
         * The URL to be shortened or stored in L2S.
         * @minLength 1
         */
        url: string;
        /**
         * Custom key for the shortened URL.
         * @minLength 1
         */
        customKey?: string;
        /**
         * UTM source parameter.
         * @minLength 1
         */
        utmSource?: string;
        /**
         * UTM medium parameter.
         * @minLength 1
         */
        utmMedium?: string;
        /**
         * UTM campaign parameter.
         * @minLength 1
         */
        utmCampaign?: string;
        /**
         * UTM term parameter.
         * @minLength 1
         */
        utmTerm?: string;
        /**
         * UTM content parameter.
         * @minLength 1
         */
        utmContent?: string;
        /**
         * Title for the shortened URL.
         * @minLength 1
         */
        title?: string;
        /** The tags associated with the shortened URL. */
        tags?: Array<string>;
      };
      output: {
        /** Whether the L2S request succeeded. */
        ok: boolean;
        /** The response envelope returned by L2S. */
        response: {
          /** The message returned by L2S. */
          message: string;
          /** The L2S response data payload. */
          data?: Record<string, unknown>;
        };
      };
    };
    /** Update the stored details for one shortened URL in L2S. */
    "l2s.update_url_details": {
      input: {
        /**
         * The L2S URL ID path parameter.
         * @minLength 1
         */
        id: string;
        /**
         * The URL to be shortened or stored in L2S.
         * @minLength 1
         */
        url: string;
        /**
         * Custom key for the shortened URL.
         * @minLength 1
         */
        customKey?: string;
        /**
         * UTM source parameter.
         * @minLength 1
         */
        utmSource?: string;
        /**
         * UTM medium parameter.
         * @minLength 1
         */
        utmMedium?: string;
        /**
         * UTM campaign parameter.
         * @minLength 1
         */
        utmCampaign?: string;
        /**
         * UTM term parameter.
         * @minLength 1
         */
        utmTerm?: string;
        /**
         * UTM content parameter.
         * @minLength 1
         */
        utmContent?: string;
        /**
         * Title for the shortened URL.
         * @minLength 1
         */
        title?: string;
        /** The tags associated with the shortened URL. */
        tags?: Array<string>;
      };
      output: {
        /** Whether the L2S request succeeded. */
        ok: boolean;
        /** The response envelope returned by L2S. */
        response: {
          /** The message returned by L2S. */
          message: string;
          /** The L2S response data payload. */
          data?: Record<string, unknown>;
        };
      };
    };
  }
}
