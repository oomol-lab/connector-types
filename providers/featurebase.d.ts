import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Featurebase feedback post in a board. */
    "featurebase.create_post": {
      input: {
        /**
         * The Featurebase post title.
         * @minLength 2
         */
        title: string;
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        boardId: string;
        /**
         * The Featurebase post content in HTML format.
         * @minLength 1
         */
        content?: string;
        /**
         * The tag names to attach to the post.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        statusId?: string;
        /** Whether comments are enabled for the post. */
        commentsEnabled?: boolean;
        /** Whether the post should be pending moderation. */
        inReview?: boolean;
        /** Custom field values keyed by Featurebase custom field ID or name. */
        customFields?: Record<string, unknown>;
        /**
         * An ISO 8601 timestamp or Unix timestamp accepted by Featurebase.
         * @minLength 1
         */
        eta?: string;
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        assigneeId?: string;
        /** The Featurebase post visibility restriction. */
        visibility?: "public" | "authorOnly" | "companyOnly";
        /** The user attribution fields used when creating or updating a Featurebase post. */
        author?: {
          /**
           * The Featurebase user ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The external SSO user ID.
           * @minLength 1
           */
          userId?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          /**
           * The user's display name.
           * @minLength 1
           */
          name?: string;
          /**
           * The user's profile picture URL.
           * @format uri
           */
          profilePicture?: string;
        };
        /**
         * An ISO 8601 timestamp or Unix timestamp accepted by Featurebase.
         * @minLength 1
         */
        createdAt?: string;
      };
      output: {
        /** The raw Featurebase object returned by the API. */
        object: Record<string, unknown>;
      };
    };
    /** Delete one Featurebase contact by ID. */
    "featurebase.delete_contact": {
      input: {
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        id: string;
        /** The Featurebase object type that was deleted. */
        object: string;
        /** Whether Featurebase deleted the requested object. */
        deleted: boolean;
      };
    };
    /** Delete one Featurebase post by ID. */
    "featurebase.delete_post": {
      input: {
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        id: string;
        /** The Featurebase object type that was deleted. */
        object: string;
        /** Whether Featurebase deleted the requested object. */
        deleted: boolean;
      };
    };
    /** Get one Featurebase board by ID. */
    "featurebase.get_board": {
      input: {
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The raw Featurebase object returned by the API. */
        object: Record<string, unknown>;
      };
    };
    /** Get one Featurebase contact by ID. */
    "featurebase.get_contact": {
      input: {
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The raw Featurebase object returned by the API. */
        object: Record<string, unknown>;
      };
    };
    /** Get one Featurebase post by ID. */
    "featurebase.get_post": {
      input: {
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The raw Featurebase object returned by the API. */
        object: Record<string, unknown>;
      };
    };
    /** List all Featurebase boards for the authenticated organization. */
    "featurebase.list_boards": {
      input: Record<string, never>;
      output: {
        /** The Featurebase list object type. */
        object: string;
        /** The Featurebase objects returned for this page. */
        data: Array<Record<string, unknown>>;
        /** The cursor for the next page, or null when no page remains. */
        nextCursor: string | null;
      };
    };
    /** List Featurebase contacts with cursor pagination and contact type filtering. */
    "featurebase.list_contacts": {
      input: {
        /**
         * The maximum number of records to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque pagination cursor returned by Featurebase.
         * @minLength 1
         */
        cursor?: string;
        /** The Featurebase contact type filter. */
        contactType?: "customer" | "lead" | "all";
      };
      output: {
        /** The Featurebase list object type. */
        object: string;
        /** The Featurebase objects returned for this page. */
        data: Array<Record<string, unknown>>;
        /** The cursor for the next page, or null when no page remains. */
        nextCursor: string | null;
      };
    };
    /** List Featurebase posts with cursor pagination and optional filters. */
    "featurebase.list_posts": {
      input: {
        /**
         * The maximum number of records to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque pagination cursor returned by Featurebase.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        boardId?: string;
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        statusId?: string;
        /**
         * The tag names used to filter Featurebase posts.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The search query used to filter Featurebase posts.
         * @minLength 1
         */
        q?: string;
        /** Whether to include posts pending moderation. */
        inReview?: boolean;
        /** The Featurebase post sorting mode. */
        sortBy?: "createdAt" | "upvotes" | "trending" | "recent";
      };
      output: {
        /** The Featurebase list object type. */
        object: string;
        /** The Featurebase objects returned for this page. */
        data: Array<Record<string, unknown>>;
        /** The cursor for the next page, or null when no page remains. */
        nextCursor: string | null;
      };
    };
    /** Update mutable fields on an existing Featurebase post. */
    "featurebase.update_post": {
      input: {
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        id: string;
        /**
         * The updated Featurebase post title.
         * @minLength 2
         */
        title?: string;
        /**
         * The updated Featurebase post content in HTML format.
         * @minLength 1
         */
        content?: string;
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        boardId?: string;
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        statusId?: string;
        /**
         * The replacement tag names for the post.
         * @minItems 1
         */
        tags?: Array<string>;
        /** Whether comments are enabled for the post. */
        commentsEnabled?: boolean;
        /** Whether the post should be pending moderation. */
        inReview?: boolean;
        /** Custom field values keyed by Featurebase custom field ID or name. */
        customFields?: Record<string, unknown>;
        /**
         * An ISO 8601 timestamp or Unix timestamp accepted by Featurebase.
         * @minLength 1
         */
        eta?: string | null;
        /**
         * An ISO 8601 timestamp or Unix timestamp accepted by Featurebase.
         * @minLength 1
         */
        createdAt?: string;
        /**
         * The Featurebase object ID.
         * @minLength 1
         */
        assigneeId?: string | null;
        /** The Featurebase post visibility restriction. */
        visibility?: "public" | "authorOnly" | "companyOnly";
        /** The user attribution fields used when creating or updating a Featurebase post. */
        author?: {
          /**
           * The Featurebase user ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The external SSO user ID.
           * @minLength 1
           */
          userId?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          /**
           * The user's display name.
           * @minLength 1
           */
          name?: string;
          /**
           * The user's profile picture URL.
           * @format uri
           */
          profilePicture?: string;
        };
        /** Whether to email voters when the status changes. */
        sendStatusUpdateEmail?: boolean;
      };
      output: {
        /** The raw Featurebase object returned by the API. */
        object: Record<string, unknown>;
      };
    };
    /** Create or update a Featurebase contact by email or external user ID. */
    "featurebase.upsert_contact": {
      input: {
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /**
         * The external user ID from your system.
         * @minLength 1
         */
        userId?: string;
        /**
         * The contact display name.
         * @minLength 1
         */
        name?: string;
        /**
         * The contact profile picture URL.
         * @format uri
         */
        profilePicture?: string;
        /**
         * The companies associated with the contact.
         * @minItems 1
         */
        companies?: Array<{
          /**
           * The external company ID from your system.
           * @minLength 1
           */
          id: string;
          /**
           * The company name.
           * @minLength 1
           */
          name: string;
          /** The company's monthly spend or revenue. */
          monthlySpend?: number;
          /** Custom field values keyed by Featurebase custom field ID or name. */
          customFields?: Record<string, unknown>;
          /**
           * The company's industry.
           * @minLength 1
           */
          industry?: string;
          /**
           * The company's website URL.
           * @format uri
           */
          website?: string;
          /**
           * The company's current plan or subscription.
           * @minLength 1
           */
          plan?: string;
          /**
           * The company's employee count.
           * @minimum 0
           */
          companySize?: number;
          /**
           * The ISO 8601 timestamp when the company was created.
           * @format date-time
           */
          createdAt?: string;
        }>;
        /** Custom field values keyed by Featurebase custom field ID or name. */
        customFields?: Record<string, unknown>;
        /** Whether the contact is subscribed to changelog updates. */
        subscribedToChangelog?: boolean;
        /**
         * The contact locale or language code.
         * @minLength 1
         */
        locale?: string;
        /**
         * The contact phone number.
         * @minLength 1
         */
        phone?: string;
        /**
         * The role IDs to assign to the contact.
         * @minItems 1
         */
        roles?: Array<string>;
        /**
         * The HMAC hash used for Featurebase identity verification.
         * @minLength 1
         */
        userHash?: string;
        /**
         * The ISO 8601 timestamp when the contact was created.
         * @format date-time
         */
        createdAt?: string;
      };
      output: {
        /** The raw Featurebase object returned by the API. */
        object: Record<string, unknown>;
      };
    };
  }
}
