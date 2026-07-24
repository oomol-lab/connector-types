import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Archive a Mailchimp member from the specified audience/list. */
    "mailchimp.archive_member": {
      input: {
        /**
         * Mailchimp audience/list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * Lowercase MD5 hash of the subscriber email address accepted by Mailchimp.
         * @minLength 1
         */
        subscriber_hash?: string;
        /**
         * Subscriber email address used by Mailchimp to derive the subscriber hash.
         * @format email
         */
        email_address?: string;
      };
      output: {
        /** Whether Mailchimp accepted the request. */
        success: boolean;
      };
    };
    /** Permanently delete a Mailchimp member from the specified audience/list. */
    "mailchimp.delete_member_permanently": {
      input: {
        /**
         * Mailchimp audience/list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * Lowercase MD5 hash of the subscriber email address accepted by Mailchimp.
         * @minLength 1
         */
        subscriber_hash?: string;
        /**
         * Subscriber email address used by Mailchimp to derive the subscriber hash.
         * @format email
         */
        email_address?: string;
      };
      output: {
        /** Whether Mailchimp accepted the request. */
        success: boolean;
      };
    };
    /** Fetch a single Mailchimp audience/list by ID. */
    "mailchimp.get_list": {
      input: {
        /**
         * Mailchimp audience/list identifier.
         * @minLength 1
         */
        list_id: string;
      };
      output: {
        /** Audience/list object returned by Mailchimp. */
        list: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Fetch a single Mailchimp member by subscriber hash or email address. */
    "mailchimp.get_member": {
      input: {
        /**
         * Mailchimp audience/list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * Lowercase MD5 hash of the subscriber email address accepted by Mailchimp.
         * @minLength 1
         */
        subscriber_hash?: string;
        /**
         * Subscriber email address used by Mailchimp to derive the subscriber hash.
         * @format email
         */
        email_address?: string;
      };
      output: {
        /** Member object returned by Mailchimp. */
        member: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List Mailchimp audiences/lists visible to the current API key. */
    "mailchimp.list_lists": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         */
        count?: number;
        /**
         * Number of items to skip before collecting the response page.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Array of lists returned by the official Mailchimp API. */
        lists: Array<Record<string, unknown>>;
        /**
         * Total number of items reported by the official Mailchimp API.
         * @minimum 0
         */
        total_items?: number;
        /** Hypermedia links returned by the official Mailchimp API. */
        _links?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List tags currently attached to a Mailchimp member. */
    "mailchimp.list_member_tags": {
      input: {
        /**
         * Mailchimp audience/list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * Lowercase MD5 hash of the subscriber email address accepted by Mailchimp.
         * @minLength 1
         */
        subscriber_hash?: string;
        /**
         * Subscriber email address used by Mailchimp to derive the subscriber hash.
         * @format email
         */
        email_address?: string;
      };
      output: {
        /** Array of tags returned by the official Mailchimp API. */
        tags: Array<Record<string, unknown>>;
        /**
         * Total number of items reported by the official Mailchimp API.
         * @minimum 0
         */
        total_items?: number;
        /** Hypermedia links returned by the official Mailchimp API. */
        _links?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List members in a Mailchimp audience/list. */
    "mailchimp.list_members": {
      input: {
        /**
         * Mailchimp audience/list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         */
        count?: number;
        /**
         * Number of items to skip before collecting the response page.
         * @minimum 0
         */
        offset?: number;
        /**
         * Mailchimp member status value accepted by the official API.
         * @minLength 1
         */
        status?: string;
      };
      output: {
        /** Array of members returned by the official Mailchimp API. */
        members: Array<Record<string, unknown>>;
        /**
         * Total number of items reported by the official Mailchimp API.
         * @minimum 0
         */
        total_items?: number;
        /** Hypermedia links returned by the official Mailchimp API. */
        _links?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List merge fields defined for a Mailchimp audience/list. */
    "mailchimp.list_merge_fields": {
      input: {
        /**
         * Mailchimp audience/list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         */
        count?: number;
        /**
         * Number of items to skip before collecting the response page.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Array of merge_fields returned by the official Mailchimp API. */
        merge_fields: Array<Record<string, unknown>>;
        /**
         * Total number of items reported by the official Mailchimp API.
         * @minimum 0
         */
        total_items?: number;
        /** Hypermedia links returned by the official Mailchimp API. */
        _links?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Patch an existing Mailchimp member by subscriber hash or email address. */
    "mailchimp.update_member": {
      input: {
        /**
         * Mailchimp audience/list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * Lowercase MD5 hash of the subscriber email address accepted by Mailchimp.
         * @minLength 1
         */
        subscriber_hash?: string;
        /**
         * Subscriber email address used by Mailchimp to derive the subscriber hash.
         * @format email
         */
        email_address?: string;
        /** Merge fields object accepted by the official Mailchimp API. */
        merge_fields?: Record<string, unknown>;
        /**
         * Mailchimp member status value accepted by the official API.
         * @minLength 1
         */
        status?: string;
        /** Whether Mailchimp should mark the member as VIP. */
        vip?: boolean;
        /**
         * Preferred language code accepted by the official Mailchimp API.
         * @minLength 1
         */
        language?: string;
        /**
         * Email content type accepted by the official Mailchimp API.
         * @minLength 1
         */
        email_type?: string;
        /** Whether Mailchimp should skip merge-field validation during the write request. */
        skip_merge_validation?: boolean;
      };
      output: {
        /** Member object returned by Mailchimp after the update request. */
        member: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Add or remove Mailchimp member tags using the official tag-update endpoint. */
    "mailchimp.update_member_tags": {
      input: {
        /**
         * Mailchimp audience/list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * Lowercase MD5 hash of the subscriber email address accepted by Mailchimp.
         * @minLength 1
         */
        subscriber_hash?: string;
        /**
         * Subscriber email address used by Mailchimp to derive the subscriber hash.
         * @format email
         */
        email_address?: string;
        /**
         * Tag updates to submit to Mailchimp.
         * @minItems 1
         */
        tags: Array<{
          /**
           * Tag name accepted by the official Mailchimp API.
           * @minLength 1
           */
          name: string;
          /** Tag state accepted by the official Mailchimp member-tags endpoint. */
          status: "active" | "inactive";
        }>;
      };
      output: {
        /** Whether Mailchimp accepted the request. */
        success: boolean;
      };
    };
    /** Add or update a Mailchimp member using the official upsert endpoint. */
    "mailchimp.upsert_member": {
      input: {
        /** Merge fields object accepted by the official Mailchimp API. */
        merge_fields?: Record<string, unknown>;
        /**
         * Mailchimp member status value accepted by the official API.
         * @minLength 1
         */
        status?: string;
        /** Whether Mailchimp should mark the member as VIP. */
        vip?: boolean;
        /**
         * Preferred language code accepted by the official Mailchimp API.
         * @minLength 1
         */
        language?: string;
        /**
         * Email content type accepted by the official Mailchimp API.
         * @minLength 1
         */
        email_type?: string;
        /**
         * Mailchimp audience/list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * Subscriber email address used by Mailchimp to derive the subscriber hash.
         * @format email
         */
        email_address: string;
        /**
         * Mailchimp member status value accepted by the official API.
         * @minLength 1
         */
        status_if_new?: string;
        /** Whether Mailchimp should skip merge-field validation during the write request. */
        skip_merge_validation?: boolean;
      };
      output: {
        /** Member object returned by Mailchimp after the upsert request. */
        member: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
