import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details about the Circle community associated with the current API token. */
    "circle.get_community": {
      input: Record<string, never>;
      output: {
        /** A normalized Circle community. */
        community: {
          /** The Circle community ID. */
          id: number;
          /** The Circle community name. */
          name: string | null;
          /** The Circle community slug. */
          slug: string | null;
          /** The Circle community locale. */
          locale: string | null;
          /** Whether the community is private. */
          is_private: boolean | null;
          /** The time when the community was created. */
          created_at: string | null;
          /** The time when the community was last updated. */
          updated_at: string | null;
          /** The raw community object returned by Circle. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a Circle community member by ID. */
    "circle.get_community_member": {
      input: {
        /**
         * The Circle community member ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A normalized Circle community member. */
        member: {
          /** The Circle community member ID. */
          id: number;
          /** The Circle user ID associated with the member. */
          user_id: number | null;
          /** The member display name. */
          name: string | null;
          /** The member first name. */
          first_name: string | null;
          /** The member last name. */
          last_name: string | null;
          /** The member email address when returned by Circle. */
          email: string | null;
          /** The member headline. */
          headline: string | null;
          /** The member status when returned by Circle. */
          status: string | null;
          /** The member profile URL. */
          profile_url: string | null;
          /** The public UID for the member. */
          public_uid: string | null;
          /** The member avatar URL. */
          avatar_url: string | null;
          /** The Circle community ID associated with the member. */
          community_id: number | null;
          /** The time when the member was created. */
          created_at: string | null;
          /** The time when the member was last updated. */
          updated_at: string | null;
          /** The raw community member object returned by Circle. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a Circle basic post by ID. */
    "circle.get_post": {
      input: {
        /**
         * The Circle post ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A normalized Circle post. */
        post: {
          /** The Circle post ID. */
          id: number;
          /** The Circle post status. */
          status: string | null;
          /** The post title or name. */
          name: string | null;
          /** The post slug. */
          slug: string | null;
          /** The post URL. */
          url: string | null;
          /** The Circle space ID containing the post. */
          space_id: number | null;
          /** The Circle space name containing the post. */
          space_name: string | null;
          /** The Circle space slug containing the post. */
          space_slug: string | null;
          /** The Circle user ID for the post author. */
          user_id: number | null;
          /** The post author email address. */
          user_email: string | null;
          /** The post author display name. */
          user_name: string | null;
          /** The number of comments on the post. */
          comments_count: number | null;
          /** The number of likes on the post. */
          likes_count: number | null;
          /** The time when the post was published. */
          published_at: string | null;
          /** The time when the post was created. */
          created_at: string | null;
          /** The time when the post was last updated. */
          updated_at: string | null;
          /** The raw post object returned by Circle. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a Circle space group by ID. */
    "circle.get_space_group": {
      input: {
        /**
         * The Circle space group ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A normalized Circle space group. */
        space_group: {
          /** The Circle space group ID. */
          id: number;
          /** The space group name. */
          name: string | null;
          /** The space group slug. */
          slug: string | null;
          /** The Circle community ID associated with the space group. */
          community_id: number | null;
          /** The number of spaces in the group. */
          spaces_count: number | null;
          /** The number of members in the group. */
          space_group_members_count: number | null;
          /** Whether the space group is hidden from non-members. */
          is_hidden_from_non_members: boolean | null;
          /** Whether Circle hides the member count. */
          hide_members_count: boolean | null;
          /** The time when the space group was created. */
          created_at: string | null;
          /** The time when the space group was last updated. */
          updated_at: string | null;
          /** The raw space group object returned by Circle. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Circle community members with optional status and tag filters. */
    "circle.list_community_members": {
      input: {
        /**
         * The page number to request from Circle.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /** The community member status filter. */
        status?: "active" | "inactive" | "all";
        /**
         * Member tag IDs used by Circle to filter community members with OR logic.
         * @minItems 1
         */
        member_tag_ids?: Array<number>;
      };
      output: {
        /** Circle pagination metadata. */
        pagination: {
          /** The current page number returned by Circle. */
          page: number;
          /** The number of records returned per page. */
          per_page: number;
          /** Whether Circle reports another page after this one. */
          has_next_page: boolean;
          /** The total number of records reported by Circle. */
          count: number;
          /** The total number of pages reported by Circle. */
          page_count: number;
        };
        /** The community members returned by Circle. */
        members: Array<{
          /** The Circle community member ID. */
          id: number;
          /** The Circle user ID associated with the member. */
          user_id: number | null;
          /** The member display name. */
          name: string | null;
          /** The member first name. */
          first_name: string | null;
          /** The member last name. */
          last_name: string | null;
          /** The member email address when returned by Circle. */
          email: string | null;
          /** The member headline. */
          headline: string | null;
          /** The member status when returned by Circle. */
          status: string | null;
          /** The member profile URL. */
          profile_url: string | null;
          /** The public UID for the member. */
          public_uid: string | null;
          /** The member avatar URL. */
          avatar_url: string | null;
          /** The Circle community ID associated with the member. */
          community_id: number | null;
          /** The time when the member was created. */
          created_at: string | null;
          /** The time when the member was last updated. */
          updated_at: string | null;
          /** The raw community member object returned by Circle. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Circle basic posts with optional space, status, search, and sort filters. */
    "circle.list_posts": {
      input: {
        /**
         * The page number to request from Circle.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The Circle basic space ID used to filter posts.
         * @exclusiveMinimum 0
         */
        space_id?: number;
        /**
         * The Circle space group ID used to filter posts.
         * @exclusiveMinimum 0
         */
        space_group_id?: number;
        /** The Circle post status filter. */
        status?: "draft" | "published" | "scheduled" | "all";
        /**
         * Text used to search Circle posts.
         * @minLength 1
         */
        search_text?: string;
        /** The Circle post sort order. */
        sort?: "oldest" | "latest" | "alphabetical" | "likes" | "latest_updated" | "oldest_updated";
      };
      output: {
        /** Circle pagination metadata. */
        pagination: {
          /** The current page number returned by Circle. */
          page: number;
          /** The number of records returned per page. */
          per_page: number;
          /** Whether Circle reports another page after this one. */
          has_next_page: boolean;
          /** The total number of records reported by Circle. */
          count: number;
          /** The total number of pages reported by Circle. */
          page_count: number;
        };
        /** The posts returned by Circle. */
        posts: Array<{
          /** The Circle post ID. */
          id: number;
          /** The Circle post status. */
          status: string | null;
          /** The post title or name. */
          name: string | null;
          /** The post slug. */
          slug: string | null;
          /** The post URL. */
          url: string | null;
          /** The Circle space ID containing the post. */
          space_id: number | null;
          /** The Circle space name containing the post. */
          space_name: string | null;
          /** The Circle space slug containing the post. */
          space_slug: string | null;
          /** The Circle user ID for the post author. */
          user_id: number | null;
          /** The post author email address. */
          user_email: string | null;
          /** The post author display name. */
          user_name: string | null;
          /** The number of comments on the post. */
          comments_count: number | null;
          /** The number of likes on the post. */
          likes_count: number | null;
          /** The time when the post was published. */
          published_at: string | null;
          /** The time when the post was created. */
          created_at: string | null;
          /** The time when the post was last updated. */
          updated_at: string | null;
          /** The raw post object returned by Circle. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Circle space groups with optional name filtering. */
    "circle.list_space_groups": {
      input: {
        /**
         * The page number to request from Circle.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The space group name filter.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** Circle pagination metadata. */
        pagination: {
          /** The current page number returned by Circle. */
          page: number;
          /** The number of records returned per page. */
          per_page: number;
          /** Whether Circle reports another page after this one. */
          has_next_page: boolean;
          /** The total number of records reported by Circle. */
          count: number;
          /** The total number of pages reported by Circle. */
          page_count: number;
        };
        /** The space groups returned by Circle. */
        space_groups: Array<{
          /** The Circle space group ID. */
          id: number;
          /** The space group name. */
          name: string | null;
          /** The space group slug. */
          slug: string | null;
          /** The Circle community ID associated with the space group. */
          community_id: number | null;
          /** The number of spaces in the group. */
          spaces_count: number | null;
          /** The number of members in the group. */
          space_group_members_count: number | null;
          /** Whether the space group is hidden from non-members. */
          is_hidden_from_non_members: boolean | null;
          /** Whether Circle hides the member count. */
          hide_members_count: boolean | null;
          /** The time when the space group was created. */
          created_at: string | null;
          /** The time when the space group was last updated. */
          updated_at: string | null;
          /** The raw space group object returned by Circle. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Circle members in a specific space. */
    "circle.list_space_members": {
      input: {
        /**
         * The page number to request from Circle.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The Circle space ID whose members should be listed.
         * @exclusiveMinimum 0
         */
        space_id: number;
        /** The Circle space member status filter. */
        status?: "active" | "inactive" | "all";
      };
      output: {
        /** Circle pagination metadata. */
        pagination: {
          /** The current page number returned by Circle. */
          page: number;
          /** The number of records returned per page. */
          per_page: number;
          /** Whether Circle reports another page after this one. */
          has_next_page: boolean;
          /** The total number of records reported by Circle. */
          count: number;
          /** The total number of pages reported by Circle. */
          page_count: number;
        };
        /** The space members returned by Circle. */
        space_members: Array<{
          /** The Circle space member ID. */
          id: number;
          /** The Circle user ID associated with the space member. */
          user_id: number | null;
          /** The Circle space ID associated with the membership. */
          space_id: number | null;
          /** The Circle community member ID. */
          community_member_id: number | null;
          /** The space member status. */
          status: string | null;
          /** The access type reported by Circle. */
          access_type: string | null;
          /** Whether the member is a moderator in the space. */
          moderator: boolean | null;
          /** The email notification setting for the space member. */
          notification_type: string | null;
          /** The in-app notification setting. */
          in_app_notification_setting: string | null;
          /** The mobile notification setting. */
          mobile_notification_setting: string | null;
          /** The nested community member summary returned with the space membership. */
          community_member: {
            /** The Circle community member ID when returned. */
            id?: number;
            /** The member display name. */
            name?: string | null;
            /** The member first name. */
            first_name?: string | null;
            /** The member last name. */
            last_name?: string | null;
            /** The member email address when returned by Circle. */
            email?: string | null;
            /** The member headline. */
            headline?: string | null;
            /** The member profile URL. */
            profile_url?: string | null;
            /** The public UID for the member. */
            public_uid?: string | null;
            /** The member avatar URL. */
            avatar_url?: string | null;
            [key: string]: unknown;
          } | null;
          /** The time when the space membership was created. */
          created_at: string | null;
          /** The time when the space membership was last updated. */
          updated_at: string | null;
          /** The raw space member object returned by Circle. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
