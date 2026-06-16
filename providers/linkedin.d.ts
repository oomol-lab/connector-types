import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a LinkedIn article or link post with explicit source URL metadata using the Posts API. */
    "linkedin.create_article_post": {
      input: {
        /**
         * The member author URN, such as urn:li:person:{personId}.
         * @minLength 1
         */
        authorUrn: string;
        /**
         * The plain text commentary for the post.
         * @minLength 1
         * @maxLength 3000
         */
        commentary: string;
        /**
         * The article or link URL to attach to the post.
         * @format uri
         */
        sourceUrl: string;
        /**
         * The article title to send to LinkedIn.
         * @minLength 1
         */
        title?: string;
        /**
         * The article description to send to LinkedIn.
         * @minLength 1
         */
        description?: string;
        /**
         * The LinkedIn image URN to use as the article thumbnail.
         * @minLength 1
         */
        thumbnailUrn?: string;
        /** Who can see the LinkedIn post. */
        visibility?: "PUBLIC" | "CONNECTIONS" | "LOGGED_IN" | "CONTAINER";
        /** Whether resharing should be disabled for the post. */
        disableReshare?: boolean;
      };
      output: {
        /** The URN of the created LinkedIn post. */
        postUrn: string;
        /** The raw object returned by the LinkedIn API. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a LinkedIn reshare of an existing post using the Posts API. */
    "linkedin.create_reshare": {
      input: {
        /**
         * The member author URN, such as urn:li:person:{personId}.
         * @minLength 1
         */
        authorUrn: string;
        /**
         * The raw LinkedIn post URN to reshare.
         * @minLength 1
         */
        parentPostUrn: string;
        /**
         * Optional commentary to add to the reshare.
         * @minLength 1
         * @maxLength 3000
         */
        commentary?: string;
        /** Who can see the LinkedIn post. */
        visibility?: "PUBLIC" | "CONNECTIONS" | "LOGGED_IN" | "CONTAINER";
        /** Whether resharing should be disabled for the new post. */
        disableReshare?: boolean;
      };
      output: {
        /** The URN of the created LinkedIn reshare. */
        postUrn: string;
        /** The raw object returned by the LinkedIn API. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a text-only organic LinkedIn post for a member author. */
    "linkedin.create_text_post": {
      input: {
        /**
         * The member author URN, such as urn:li:person:{personId}.
         * @minLength 1
         */
        authorUrn: string;
        /**
         * The plain text commentary for the post.
         * @minLength 1
         * @maxLength 3000
         */
        commentary: string;
        /** Who can see the LinkedIn post. */
        visibility?: "PUBLIC" | "CONNECTIONS" | "LOGGED_IN" | "CONTAINER";
        /** Whether resharing should be disabled for the post. */
        disableReshare?: boolean;
      };
      output: {
        /** The URN of the created LinkedIn post. */
        postUrn: string;
        /** The raw object returned by the LinkedIn API. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a LinkedIn post by raw post URN using the Posts API. */
    "linkedin.delete_post": {
      input: {
        /**
         * The raw LinkedIn post URN, such as urn:li:share:{id}.
         * @minLength 1
         */
        postUrn: string;
      };
      output: {
        /** The URN of the deleted LinkedIn post. */
        postUrn: string;
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /** The raw object returned by the LinkedIn API. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the authenticated LinkedIn member's OpenID Connect profile. */
    "linkedin.get_current_member": {
      input: Record<string, never>;
      output: {
        /** A normalized LinkedIn OpenID Connect member profile. */
        member: {
          /** The LinkedIn subject identifier for the authenticated member. */
          sub: string;
          /** The member's full display name. */
          name?: string;
          /** The member's given name. */
          givenName?: string;
          /** The member's family name. */
          familyName?: string;
          /**
           * The member's primary email address.
           * @format email
           */
          email?: string;
          /** Whether LinkedIn reports the email address as verified. */
          emailVerified?: boolean;
          /** The member's locale. */
          locale?: string;
          /**
           * The member's profile picture URL.
           * @format uri
           */
          picture?: string;
          /** The raw object returned by the LinkedIn API. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
