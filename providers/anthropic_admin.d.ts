import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the Anthropic organization associated with the Admin API key. */
    "anthropic_admin.get_organization": {
      input: Record<string, never>;
      output: {
        /** The Anthropic organization identifier. */
        id?: string;
        /** The object type returned by Anthropic. */
        type?: string;
        /** The organization display name. */
        name?: string;
        [key: string]: unknown;
      };
    };
    /** List Anthropic API keys in the organization, optionally filtered by workspace. */
    "anthropic_admin.list_api_keys": {
      input: {
        /**
         * Only return API keys belonging to this workspace.
         * @minLength 1
         */
        workspace_id?: string;
        /**
         * Return API keys before this API key identifier.
         * @minLength 1
         */
        before_id?: string;
        /**
         * Return API keys after this API key identifier.
         * @minLength 1
         */
        after_id?: string;
        /**
         * The maximum number of API keys to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The Anthropic API keys returned in this page. */
        data: Array<{
          /** The Anthropic API key identifier. */
          id?: string;
          /** The object type returned by Anthropic. */
          type?: string;
          /** The API key display name. */
          name?: string;
          /** The string value returned by Anthropic. */
          partial_key_hint?: string | null;
          /**
           * The date and time when the API key was created.
           * @format date-time
           */
          created_at?: string;
          /** The Anthropic actor that created a resource. */
          created_by?: {
            /** The actor identifier. */
            id?: string;
            /** The actor object type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The string value returned by Anthropic. */
          workspace_id?: string | null;
          [key: string]: unknown;
        }>;
        /** Whether more results are available after this page. */
        has_more: boolean;
        /** The first object identifier in this page. */
        first_id: string | null;
        /** The last object identifier in this page. */
        last_id: string | null;
      };
    };
    /** List pending or historical Anthropic organization invites. */
    "anthropic_admin.list_invites": {
      input: {
        /**
         * Return objects before this object identifier.
         * @minLength 1
         */
        before_id?: string;
        /**
         * Return objects after this object identifier.
         * @minLength 1
         */
        after_id?: string;
        /**
         * The maximum number of objects to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The Anthropic organization invites returned in this page. */
        data: Array<{
          /** The Anthropic invite identifier. */
          id?: string;
          /** The object type returned by Anthropic. */
          type?: string;
          /** The invited email address. */
          email?: string;
          /** The organization role assigned by the invite. */
          role?: string;
          /** The invite status. */
          status?: string;
          /**
           * The RFC 3339 timestamp returned by Anthropic when available.
           * @format date-time
           */
          expires_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Whether more results are available after this page. */
        has_more: boolean;
        /** The first object identifier in this page. */
        first_id: string | null;
        /** The last object identifier in this page. */
        last_id: string | null;
      };
    };
    /** List users in the Anthropic organization with cursor pagination. */
    "anthropic_admin.list_users": {
      input: {
        /**
         * Return objects before this object identifier.
         * @minLength 1
         */
        before_id?: string;
        /**
         * Return objects after this object identifier.
         * @minLength 1
         */
        after_id?: string;
        /**
         * The maximum number of objects to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The Anthropic organization users returned in this page. */
        data: Array<{
          /** The Anthropic user identifier. */
          id?: string;
          /** The object type returned by Anthropic. */
          type?: string;
          /** The user's email address. */
          email?: string;
          /** The string value returned by Anthropic. */
          name?: string | null;
          /** The user's organization role. */
          role?: string;
          [key: string]: unknown;
        }>;
        /** Whether more results are available after this page. */
        has_more: boolean;
        /** The first object identifier in this page. */
        first_id: string | null;
        /** The last object identifier in this page. */
        last_id: string | null;
      };
    };
    /** List members of one Anthropic workspace with cursor pagination. */
    "anthropic_admin.list_workspace_members": {
      input: {
        /**
         * The Anthropic workspace identifier.
         * @minLength 1
         */
        workspace_id: string;
        /**
         * Return members before this member identifier.
         * @minLength 1
         */
        before_id?: string;
        /**
         * Return members after this member identifier.
         * @minLength 1
         */
        after_id?: string;
        /**
         * The maximum number of members to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The Anthropic workspace members returned in this page. */
        data: Array<{
          /** The Anthropic user identifier. */
          id?: string;
          /** The object type returned by Anthropic. */
          type?: string;
          /** The member email address. */
          email?: string;
          /** The string value returned by Anthropic. */
          name?: string | null;
          /** The user's role in the workspace. */
          workspace_role?: string;
          [key: string]: unknown;
        }>;
        /** Whether more results are available after this page. */
        has_more: boolean;
        /** The first object identifier in this page. */
        first_id: string | null;
        /** The last object identifier in this page. */
        last_id: string | null;
      };
    };
    /** List Anthropic workspaces in the organization with cursor pagination. */
    "anthropic_admin.list_workspaces": {
      input: {
        /**
         * Return objects before this object identifier.
         * @minLength 1
         */
        before_id?: string;
        /**
         * Return objects after this object identifier.
         * @minLength 1
         */
        after_id?: string;
        /**
         * The maximum number of objects to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The Anthropic workspaces returned in this page. */
        data: Array<{
          /** The Anthropic workspace identifier. */
          id?: string;
          /** The object type returned by Anthropic. */
          type?: string;
          /** The workspace display name. */
          name?: string;
          /**
           * The RFC 3339 timestamp returned by Anthropic when available.
           * @format date-time
           */
          archived_at?: string | null;
          /**
           * The date and time when the workspace was created.
           * @format date-time
           */
          created_at?: string;
          [key: string]: unknown;
        }>;
        /** Whether more results are available after this page. */
        has_more: boolean;
        /** The first object identifier in this page. */
        first_id: string | null;
        /** The last object identifier in this page. */
        last_id: string | null;
      };
    };
  }
}
