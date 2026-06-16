import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one U301 short link by its domain/slug identifier. */
    "u301.delete_link": {
      input: {
        /**
         * The short link identifier in the form domain/slug, for example u301.co/abc123.
         * @minLength 1
         */
        shortlink: string;
      };
      output: {
        /** Whether U301 confirmed the short link deletion. */
        success: boolean;
        /** The upstream success message returned by U301. */
        message: string | null;
      };
    };
    /** List the U301 short-link domains available in the connected workspace. */
    "u301.list_domains": {
      input: Record<string, never>;
      output: {
        /** The domains available in the workspace. */
        domains: Array<{
          /** The domain name. */
          domain: string;
          /** The random code length used when U301 generates a slug. */
          randomCodeLength: number;
          /** Whether this domain is the primary domain for the workspace. */
          isPrimary: boolean;
          /** Whether this domain is a global U301 domain. */
          isGlobal: boolean;
        }>;
      };
    };
    /** Create one U301 short link for a destination URL. */
    "u301.shorten_link": {
      input: {
        /**
         * The destination URL to shorten.
         * @minLength 1
         * @format uri
         */
        url: string;
        /**
         * The domain to use for the short link.
         * @minLength 1
         */
        domain?: string;
        /**
         * The custom slug to use instead of a random code.
         * @minLength 1
         */
        slug?: string;
        /** Whether U301 should reuse an existing short link when the destination URL already exists. */
        reuseExisting?: boolean;
        /**
         * An optional password required before opening the short link.
         * @minLength 1
         */
        password?: string;
        /**
         * An optional note stored with the short link.
         * @minLength 1
         */
        comment?: string;
      };
      output: {
        /** The unique U301 link identifier. */
        id: string;
        /** The original destination URL. */
        url: string;
        /** The short path segment. */
        slug: string;
        /** Whether the slug was provided by the user. */
        isCustomSlug: boolean;
        /** The domain used for the short link. */
        domain: string;
        /** Whether U301 reused an existing short link for the same URL. */
        isReused: boolean;
        /** The final short link in domain/slug form. */
        shortLink: string;
        /** The optional comment stored with the short link. */
        comment: string | null;
      };
    };
  }
}
