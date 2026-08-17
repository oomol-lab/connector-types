import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Appcues Flow 2.0 experience by identifier. */
    "appcues.get_flow": {
      input: {
        /**
         * The Appcues Flow 2.0 identifier.
         * @minLength 1
         */
        flow_id: string;
      };
      output: {
        /** The flow identifier. */
        id: string;
        /** The flow name. */
        name: string;
        /** Whether the flow is currently published. */
        published: boolean;
        /** The current flow state. */
        state?: string;
        /** The platform targeted by the flow. */
        platform?: string;
        /** The configured display frequency. */
        frequency?: string;
        /** The flow creation time as a Unix timestamp in milliseconds. */
        created_at?: number;
        /** The last flow update time as a Unix timestamp in milliseconds. */
        updated_at?: number;
        /** The last publish time as a Unix timestamp in milliseconds. */
        published_at?: number | null;
        /** The identifiers of tags assigned to the flow. */
        tag_ids?: Array<string>;
        /** The provider-defined steps in the flow. */
        steps?: Array<{
          /** The step identifier. */
          id?: string;
          /** The step type. */
          type?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get one Appcues content tag by identifier. */
    "appcues.get_tag": {
      input: {
        /**
         * The Appcues tag identifier.
         * @minLength 1
         */
        tag_id: string;
      };
      output: {
        /** The tag identifier. */
        id: string;
        /** The tag name. */
        name: string;
        /** The tag creation timestamp. */
        created_at?: string;
        /** The identifier of the user who created the tag. */
        created_by?: string;
        /** The tag update timestamp. */
        updated_at?: string;
        /** The identifier of the user who last updated the tag. */
        updated_by?: string;
        /**
         * The API URL for the tag.
         * @format uri
         */
        url?: string;
        [key: string]: unknown;
      };
    };
    /** List Appcues Flow 2.0 experiences for the connected account. */
    "appcues.list_flows": {
      input: Record<string, never>;
      output: {
        /** The returned Flow 2.0 experiences. */
        flows: Array<{
          /** The flow identifier. */
          id: string;
          /** The flow name. */
          name: string;
          /** Whether the flow is currently published. */
          published: boolean;
          /** The current flow state. */
          state?: string;
          /** The platform targeted by the flow. */
          platform?: string;
          /** The configured display frequency. */
          frequency?: string;
          /** The flow creation time as a Unix timestamp in milliseconds. */
          created_at?: number;
          /** The last flow update time as a Unix timestamp in milliseconds. */
          updated_at?: number;
          /** The last publish time as a Unix timestamp in milliseconds. */
          published_at?: number | null;
          /** The identifiers of tags assigned to the flow. */
          tag_ids?: Array<string>;
          /** The provider-defined steps in the flow. */
          steps?: Array<{
            /** The step identifier. */
            id?: string;
            /** The step type. */
            type?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List content tags for the connected Appcues account. */
    "appcues.list_tags": {
      input: Record<string, never>;
      output: {
        /** The returned content tags. */
        tags: Array<{
          /** The tag identifier. */
          id: string;
          /** The tag name. */
          name: string;
          /** The tag creation timestamp. */
          created_at?: string;
          /** The identifier of the user who created the tag. */
          created_by?: string;
          /** The tag update timestamp. */
          updated_at?: string;
          /** The identifier of the user who last updated the tag. */
          updated_by?: string;
          /**
           * The API URL for the tag.
           * @format uri
           */
          url?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Publish one Appcues Flow 2.0 experience. */
    "appcues.publish_flow": {
      input: {
        /**
         * The Appcues Flow 2.0 identifier.
         * @minLength 1
         */
        flow_id: string;
      };
      output: {
        /** The upstream HTTP status reported by Appcues. */
        status: number;
        /** The upstream result title. */
        title: string;
      };
    };
    /** Unpublish one Appcues Flow 2.0 experience. */
    "appcues.unpublish_flow": {
      input: {
        /**
         * The Appcues Flow 2.0 identifier.
         * @minLength 1
         */
        flow_id: string;
      };
      output: {
        /** The upstream HTTP status reported by Appcues. */
        status: number;
        /** The upstream result title. */
        title: string;
      };
    };
  }
}
