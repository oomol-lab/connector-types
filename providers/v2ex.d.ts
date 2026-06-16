import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Boost one of the authenticated member's V2EX topics to the homepage. */
    "v2ex.boost_topic": {
      input: {
        /**
         * The V2EX numeric identifier.
         * @exclusiveMinimum 0
         */
        topic_id: number;
      };
      output: {
        /** Whether the V2EX request was accepted. */
        success: boolean;
      };
    };
    /** Create a new V2EX Personal Access Token from an existing token. */
    "v2ex.create_token": {
      input: {
        /** The access scope for the new V2EX token. */
        scope: "everything" | "regular";
        /** The token lifetime in seconds. */
        expiration: 2592000 | 5184000 | 7776000 | 15552000;
      };
      output: {
        /** The newly created Personal Access Token value. */
        token: string;
      };
    };
    /** Delete one V2EX notification by its numeric identifier. */
    "v2ex.delete_notification": {
      input: {
        /**
         * The V2EX numeric identifier.
         * @exclusiveMinimum 0
         */
        notification_id: number;
      };
      output: {
        /** Whether the V2EX request was accepted. */
        success: boolean;
      };
    };
    /** Fetch the authenticated V2EX member profile. */
    "v2ex.get_current_member": {
      input: Record<string, never>;
      output: {
        /** The authenticated V2EX member profile. */
        member: {
          /** The V2EX member identifier. */
          id: number;
          /** The V2EX username. */
          username: string;
          /**
           * The V2EX URL for the member profile.
           * @format uri
           */
          url: string;
          /** The member website URL or empty string. */
          website: string;
          /** The member Twitter handle or empty string. */
          twitter: string;
          /** The member PlayStation Network handle or empty string. */
          psn: string;
          /** The member GitHub username or profile value. */
          github: string;
          /** The member Bitcoin address or empty string. */
          btc: string;
          /** The member location or empty string. */
          location: string;
          /** The member tagline or empty string. */
          tagline: string;
          /** The member biography text. */
          bio: string;
          /**
           * The mini avatar URL.
           * @format uri
           */
          avatar_mini: string;
          /**
           * The normal avatar URL.
           * @format uri
           */
          avatar_normal: string;
          /**
           * The large avatar URL.
           * @format uri
           */
          avatar_large: string;
          /** The Unix timestamp when the member account was created. */
          created: number;
          /** The Unix timestamp when the profile was last modified. */
          last_modified: number;
          /** Whether the member has V2EX Pro status as returned by V2EX. */
          pro?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch metadata for the V2EX Personal Access Token used by this connection. */
    "v2ex.get_current_token": {
      input: Record<string, never>;
      output: {
        /** Metadata for a V2EX Personal Access Token. */
        token: {
          /** The token value as returned by V2EX. It may be masked after creation. */
          token: string;
          /** The token scope. */
          scope: "everything" | "regular";
          /** The token lifetime in seconds. */
          expiration: number;
          /** The remaining token lifetime in days. */
          good_for_days: number;
          /** The total number of times the token has been used. */
          total_used: number;
          /** The Unix timestamp when the token was last used. */
          last_used: number;
          /** The Unix timestamp when the token was created. */
          created: number;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch a V2EX node by node name. */
    "v2ex.get_node": {
      input: {
        /**
         * The V2EX node name, such as `python`.
         * @minLength 1
         */
        node_name: string;
      };
      output: {
        /** A V2EX node object. */
        node: {
          /** The V2EX node identifier. */
          id: number;
          /** The member identifier of the node founder. */
          founder_id?: number;
          /**
           * The V2EX URL for the node.
           * @format uri
           */
          url: string;
          /** The V2EX node name. */
          name: string;
          /** The human-readable node title. */
          title: string;
          /** The node header text. */
          header: string;
          /** The node footer text. */
          footer: string;
          /**
           * The node avatar URL.
           * @format uri
           */
          avatar: string;
          /** The number of topics in the node. */
          topics: number;
          /** The Unix timestamp when the node was created. */
          created: number;
          /** The Unix timestamp when the node was last modified. */
          last_modified: number;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch a V2EX topic by numeric identifier. */
    "v2ex.get_topic": {
      input: {
        /**
         * The V2EX numeric identifier.
         * @exclusiveMinimum 0
         */
        topic_id: number;
      };
      output: {
        /** A V2EX topic object. */
        topic: {
          /** The V2EX topic identifier. */
          id: number;
          /** The topic title. */
          title: string;
          /** The raw topic content. */
          content?: string;
          /** The rendered topic content. */
          content_rendered?: string;
          /** The content syntax mode returned by V2EX. */
          syntax?: number;
          /**
           * The V2EX URL for the topic.
           * @format uri
           */
          url: string;
          /** The number of replies on the topic. */
          replies: number;
          /** The number of stars on the topic. */
          stars?: number;
          /** The number of thanks on the topic. */
          thanks?: number;
          /** The username of the latest reply author, or empty string. */
          last_reply_by?: string;
          /** The Unix timestamp when the topic was created. */
          created: number;
          /** The Unix timestamp when the topic was last modified. */
          last_modified?: number;
          /** The Unix timestamp when the topic was last touched. */
          last_touched?: number;
          /** A compact V2EX member object. */
          member?: {
            /** The V2EX member identifier. */
            id: number;
            /** The V2EX username. */
            username: string;
            /** The member biography text. */
            bio: string;
            /** The member website URL or empty string. */
            website: string;
            /** The member GitHub username or profile value. */
            github: string;
            /**
             * The V2EX URL for the member profile.
             * @format uri
             */
            url: string;
            /**
             * The member avatar URL.
             * @format uri
             */
            avatar: string;
            /** The Unix timestamp when the member account was created. */
            created: number;
            /** Whether the member has V2EX Pro status as returned by V2EX. */
            pro?: number;
            [key: string]: unknown;
          };
          /** A V2EX node object. */
          node?: {
            /** The V2EX node identifier. */
            id: number;
            /** The member identifier of the node founder. */
            founder_id?: number;
            /**
             * The V2EX URL for the node.
             * @format uri
             */
            url: string;
            /** The V2EX node name. */
            name: string;
            /** The human-readable node title. */
            title: string;
            /** The node header text. */
            header: string;
            /** The node footer text. */
            footer: string;
            /**
             * The node avatar URL.
             * @format uri
             */
            avatar: string;
            /** The number of topics in the node. */
            topics: number;
            /** The Unix timestamp when the node was created. */
            created: number;
            /** The Unix timestamp when the node was last modified. */
            last_modified: number;
            [key: string]: unknown;
          };
          /** Supplement objects attached to the topic. */
          supplements?: Array<unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch public hot topics from the V2EX legacy JSON API. Responses may be served from V2EX or CDN cache. */
    "v2ex.list_hot_topics": {
      input: Record<string, never>;
      output: {
        /** The public topics returned by the V2EX legacy endpoint. */
        topics: Array<{
          /** The V2EX topic identifier. */
          id: number;
          /** The topic title. */
          title: string;
          /** The raw topic content. */
          content: string;
          /** The rendered topic content. */
          content_rendered: string;
          /**
           * The V2EX URL for the topic.
           * @format uri
           */
          url: string;
          /** The number of replies on the topic. */
          replies: number;
          /** Whether the topic has been deleted as returned by V2EX. */
          deleted: number;
          /** The username of the latest reply author, or empty string. */
          last_reply_by: string;
          /** The Unix timestamp when the topic was created. */
          created: number;
          /** The Unix timestamp when the topic was last modified. */
          last_modified: number;
          /** The Unix timestamp when the topic was last touched. */
          last_touched: number;
          /** A member object returned by the V2EX legacy public API. */
          member: {
            /** The V2EX member identifier. */
            id: number;
            /** The V2EX username. */
            username: string;
            /**
             * The V2EX URL for the member profile.
             * @format uri
             */
            url: string;
            /** The member website URL, empty string, or null. */
            website: string | null;
            /** The member Twitter handle, empty string, or null. */
            twitter: string | null;
            /** The member PlayStation Network handle, empty string, or null. */
            psn: string | null;
            /** The member GitHub username, profile value, empty string, or null. */
            github: string | null;
            /** The member Bitcoin address, empty string, or null. */
            btc: string | null;
            /** The member location, empty string, or null. */
            location: string | null;
            /** The member tagline, empty string, or null. */
            tagline: string | null;
            /** The member biography text, empty string, or null. */
            bio: string | null;
            /**
             * The mini avatar URL.
             * @format uri
             */
            avatar_mini: string;
            /**
             * The normal avatar URL.
             * @format uri
             */
            avatar_normal: string;
            /**
             * The large avatar URL.
             * @format uri
             */
            avatar_large: string;
            /**
             * The extra-large avatar URL.
             * @format uri
             */
            avatar_xlarge?: string;
            /**
             * The double extra-large avatar URL.
             * @format uri
             */
            avatar_xxlarge?: string;
            /**
             * The triple extra-large avatar URL.
             * @format uri
             */
            avatar_xxxlarge?: string;
            /** The Unix timestamp when the member account was created. */
            created: number;
            /** The Unix timestamp when the member profile was last modified. */
            last_modified: number;
            /** Whether the member has V2EX Pro status as returned by V2EX. */
            pro?: number;
            [key: string]: unknown;
          };
          /** A node object returned by the V2EX legacy public API. */
          node: {
            /** The V2EX node identifier. */
            id: number;
            /** The V2EX node name. */
            name: string;
            /**
             * The V2EX URL for the node.
             * @format uri
             */
            url: string;
            /** The human-readable node title. */
            title: string;
            /** The alternative node title. */
            title_alternative: string;
            /** The node header text. */
            header: string;
            /** The node footer text. */
            footer: string;
            /** The number of topics in the node. */
            topics: number;
            /**
             * The mini node avatar URL.
             * @format uri
             */
            avatar_mini: string;
            /**
             * The normal node avatar URL.
             * @format uri
             */
            avatar_normal: string;
            /**
             * The large node avatar URL.
             * @format uri
             */
            avatar_large: string;
            /** The number of stars on the node. */
            stars: number;
            /** The member identifier of the node founder. */
            founder_id: number;
            /** Alternative names for the node. */
            aliases?: Array<string>;
            /** Whether this node is a root node. */
            root?: boolean;
            /** The parent node name, empty string, or null. */
            parent_node_name?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Fetch public latest topics from the V2EX legacy JSON API. Responses may be served from V2EX or CDN cache. */
    "v2ex.list_latest_topics": {
      input: Record<string, never>;
      output: {
        /** The public topics returned by the V2EX legacy endpoint. */
        topics: Array<{
          /** The V2EX topic identifier. */
          id: number;
          /** The topic title. */
          title: string;
          /** The raw topic content. */
          content: string;
          /** The rendered topic content. */
          content_rendered: string;
          /**
           * The V2EX URL for the topic.
           * @format uri
           */
          url: string;
          /** The number of replies on the topic. */
          replies: number;
          /** Whether the topic has been deleted as returned by V2EX. */
          deleted: number;
          /** The username of the latest reply author, or empty string. */
          last_reply_by: string;
          /** The Unix timestamp when the topic was created. */
          created: number;
          /** The Unix timestamp when the topic was last modified. */
          last_modified: number;
          /** The Unix timestamp when the topic was last touched. */
          last_touched: number;
          /** A member object returned by the V2EX legacy public API. */
          member: {
            /** The V2EX member identifier. */
            id: number;
            /** The V2EX username. */
            username: string;
            /**
             * The V2EX URL for the member profile.
             * @format uri
             */
            url: string;
            /** The member website URL, empty string, or null. */
            website: string | null;
            /** The member Twitter handle, empty string, or null. */
            twitter: string | null;
            /** The member PlayStation Network handle, empty string, or null. */
            psn: string | null;
            /** The member GitHub username, profile value, empty string, or null. */
            github: string | null;
            /** The member Bitcoin address, empty string, or null. */
            btc: string | null;
            /** The member location, empty string, or null. */
            location: string | null;
            /** The member tagline, empty string, or null. */
            tagline: string | null;
            /** The member biography text, empty string, or null. */
            bio: string | null;
            /**
             * The mini avatar URL.
             * @format uri
             */
            avatar_mini: string;
            /**
             * The normal avatar URL.
             * @format uri
             */
            avatar_normal: string;
            /**
             * The large avatar URL.
             * @format uri
             */
            avatar_large: string;
            /**
             * The extra-large avatar URL.
             * @format uri
             */
            avatar_xlarge?: string;
            /**
             * The double extra-large avatar URL.
             * @format uri
             */
            avatar_xxlarge?: string;
            /**
             * The triple extra-large avatar URL.
             * @format uri
             */
            avatar_xxxlarge?: string;
            /** The Unix timestamp when the member account was created. */
            created: number;
            /** The Unix timestamp when the member profile was last modified. */
            last_modified: number;
            /** Whether the member has V2EX Pro status as returned by V2EX. */
            pro?: number;
            [key: string]: unknown;
          };
          /** A node object returned by the V2EX legacy public API. */
          node: {
            /** The V2EX node identifier. */
            id: number;
            /** The V2EX node name. */
            name: string;
            /**
             * The V2EX URL for the node.
             * @format uri
             */
            url: string;
            /** The human-readable node title. */
            title: string;
            /** The alternative node title. */
            title_alternative: string;
            /** The node header text. */
            header: string;
            /** The node footer text. */
            footer: string;
            /** The number of topics in the node. */
            topics: number;
            /**
             * The mini node avatar URL.
             * @format uri
             */
            avatar_mini: string;
            /**
             * The normal node avatar URL.
             * @format uri
             */
            avatar_normal: string;
            /**
             * The large node avatar URL.
             * @format uri
             */
            avatar_large: string;
            /** The number of stars on the node. */
            stars: number;
            /** The member identifier of the node founder. */
            founder_id: number;
            /** Alternative names for the node. */
            aliases?: Array<string>;
            /** Whether this node is a root node. */
            root?: boolean;
            /** The parent node name, empty string, or null. */
            parent_node_name?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Fetch topics from a V2EX node. */
    "v2ex.list_node_topics": {
      input: {
        /**
         * The V2EX node name, such as `python`.
         * @minLength 1
         */
        node_name: string;
        /**
         * Optional page number to request. Defaults to 1.
         * @exclusiveMinimum 0
         */
        p?: number;
      };
      output: {
        /** The topics returned for this node page. */
        topics: Array<{
          /** The V2EX topic identifier. */
          id: number;
          /** The topic title. */
          title: string;
          /** The raw topic content. */
          content?: string;
          /** The rendered topic content. */
          content_rendered?: string;
          /** The content syntax mode returned by V2EX. */
          syntax?: number;
          /**
           * The V2EX URL for the topic.
           * @format uri
           */
          url: string;
          /** The number of replies on the topic. */
          replies: number;
          /** The number of stars on the topic. */
          stars?: number;
          /** The number of thanks on the topic. */
          thanks?: number;
          /** The username of the latest reply author, or empty string. */
          last_reply_by?: string;
          /** The Unix timestamp when the topic was created. */
          created: number;
          /** The Unix timestamp when the topic was last modified. */
          last_modified?: number;
          /** The Unix timestamp when the topic was last touched. */
          last_touched?: number;
          /** A compact V2EX member object. */
          member?: {
            /** The V2EX member identifier. */
            id: number;
            /** The V2EX username. */
            username: string;
            /** The member biography text. */
            bio: string;
            /** The member website URL or empty string. */
            website: string;
            /** The member GitHub username or profile value. */
            github: string;
            /**
             * The V2EX URL for the member profile.
             * @format uri
             */
            url: string;
            /**
             * The member avatar URL.
             * @format uri
             */
            avatar: string;
            /** The Unix timestamp when the member account was created. */
            created: number;
            /** Whether the member has V2EX Pro status as returned by V2EX. */
            pro?: number;
            [key: string]: unknown;
          };
          /** A V2EX node object. */
          node?: {
            /** The V2EX node identifier. */
            id: number;
            /** The member identifier of the node founder. */
            founder_id?: number;
            /**
             * The V2EX URL for the node.
             * @format uri
             */
            url: string;
            /** The V2EX node name. */
            name: string;
            /** The human-readable node title. */
            title: string;
            /** The node header text. */
            header: string;
            /** The node footer text. */
            footer: string;
            /**
             * The node avatar URL.
             * @format uri
             */
            avatar: string;
            /** The number of topics in the node. */
            topics: number;
            /** The Unix timestamp when the node was created. */
            created: number;
            /** The Unix timestamp when the node was last modified. */
            last_modified: number;
            [key: string]: unknown;
          };
          /** Supplement objects attached to the topic. */
          supplements?: Array<unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Fetch the latest V2EX notifications for the authenticated member. */
    "v2ex.list_notifications": {
      input: {
        /**
         * Optional page number to request. Defaults to 1.
         * @exclusiveMinimum 0
         */
        p?: number;
      };
      output: {
        /** The notifications returned for this page. */
        notifications: Array<{
          /** The V2EX notification identifier. */
          id?: number;
          /** The member identifier that triggered the notification. */
          member_id?: number;
          /** The member identifier that received the notification. */
          for_member_id?: number;
          /** The notification text. */
          text?: string;
          /** The notification payload string. */
          payload?: string | null;
          /** The rendered notification payload. */
          payload_rendered?: string;
          /** The Unix timestamp when the notification was created. */
          created?: number;
          /** The member object associated with the notification. */
          member?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total notification count parsed from the V2EX pagination message. */
        total: number;
      };
    };
    /** Fetch replies for a V2EX topic. */
    "v2ex.list_topic_replies": {
      input: {
        /**
         * The V2EX numeric identifier.
         * @exclusiveMinimum 0
         */
        topic_id: number;
        /**
         * Optional page number to request. Defaults to 1.
         * @exclusiveMinimum 0
         */
        p?: number;
      };
      output: {
        /** The replies returned for this topic page. */
        replies: Array<{
          /** The V2EX reply identifier. */
          id: number;
          /** The raw reply content. */
          content: string;
          /** The rendered reply content. */
          content_rendered: string;
          /** The Unix timestamp when the reply was created. */
          created: number;
          /** A compact V2EX member object. */
          member: {
            /** The V2EX member identifier. */
            id: number;
            /** The V2EX username. */
            username: string;
            /** The member biography text. */
            bio: string;
            /** The member website URL or empty string. */
            website: string;
            /** The member GitHub username or profile value. */
            github: string;
            /**
             * The V2EX URL for the member profile.
             * @format uri
             */
            url: string;
            /**
             * The member avatar URL.
             * @format uri
             */
            avatar: string;
            /** The Unix timestamp when the member account was created. */
            created: number;
            /** Whether the member has V2EX Pro status as returned by V2EX. */
            pro?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Set one of the authenticated member's V2EX topics as sticky. */
    "v2ex.set_topic_sticky": {
      input: {
        /**
         * The V2EX numeric identifier.
         * @exclusiveMinimum 0
         */
        topic_id: number;
        /** Optional sticky duration. Defaults to 15min. */
        duration?: "15min" | "1hr" | "8hr";
      };
      output: {
        /** Whether the V2EX request was accepted. */
        success: boolean;
      };
    };
  }
}
