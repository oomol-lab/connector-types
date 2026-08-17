import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Zammad ticket with its initial text article. */
    "zammad.create_ticket": {
      input: {
        /**
         * The ticket title.
         * @minLength 1
         */
        title: string;
        /**
         * The target group name.
         * @minLength 1
         */
        group: string;
        /**
         * The customer login or email address.
         * @minLength 1
         */
        customer: string;
        /**
         * The initial article body.
         * @minLength 1
         */
        body: string;
        /** The initial article type. */
        articleType?: "note" | "email" | "phone";
        /** The initial article content type. */
        contentType?: "text/plain" | "text/html";
        /** Whether the initial article is internal. */
        internal?: boolean;
        /** The initial article subject. */
        subject?: string;
        /** The initial article sender role. */
        sender?: "Agent" | "Customer" | "System";
        /** The ticket priority name. */
        priority?: string;
        /** The ticket state name. */
        state?: string;
      };
      output: {
        /** A Zammad ticket object. */
        ticket: {
          /**
           * The numeric Zammad resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The human-readable ticket number. */
          number?: string;
          /** The ticket title. */
          title?: string;
          /** The assigned group ID. */
          group_id?: number;
          /** The customer user ID. */
          customer_id?: number;
          /** The ticket state ID. */
          state_id?: number;
          /** The ticket priority ID. */
          priority_id?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Add a text article to an existing Zammad ticket. */
    "zammad.create_ticket_article": {
      input: {
        /**
         * The numeric Zammad resource ID.
         * @exclusiveMinimum 0
         */
        ticketId: number;
        /**
         * The article body.
         * @minLength 1
         */
        body: string;
        /** The article type. */
        articleType?: "note" | "email" | "phone";
        /** The article content type. */
        contentType?: "text/plain" | "text/html";
        /** Whether the article is internal. */
        internal?: boolean;
        /** The article subject when applicable. */
        subject?: string;
        /** The article sender role. */
        sender?: "Agent" | "Customer" | "System";
      };
      output: {
        /** A Zammad ticket article object. */
        article: {
          /**
           * The numeric Zammad resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The parent ticket ID. */
          ticket_id?: number;
          /** The article body. */
          body?: string;
          /** The article body content type. */
          content_type?: string;
          /** Whether the article is internal. */
          internal?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the Zammad user associated with the connected access token. */
    "zammad.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Zammad user object. */
        user: {
          /**
           * The numeric Zammad resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The user login. */
          login?: string;
          /** The user's first name. */
          firstname?: string;
          /** The user's last name. */
          lastname?: string;
          /** The user's email address. */
          email?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Zammad ticket by ID. */
    "zammad.get_ticket": {
      input: {
        /**
         * The numeric Zammad resource ID.
         * @exclusiveMinimum 0
         */
        ticketId: number;
        /** Whether to expand named relations in the response. */
        expand?: boolean;
      };
      output: {
        /** A Zammad ticket object. */
        ticket: {
          /**
           * The numeric Zammad resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The human-readable ticket number. */
          number?: string;
          /** The ticket title. */
          title?: string;
          /** The assigned group ID. */
          group_id?: number;
          /** The customer user ID. */
          customer_id?: number;
          /** The ticket state ID. */
          state_id?: number;
          /** The ticket priority ID. */
          priority_id?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List articles belonging to a Zammad ticket. */
    "zammad.list_ticket_articles": {
      input: {
        /**
         * The numeric Zammad resource ID.
         * @exclusiveMinimum 0
         */
        ticketId: number;
      };
      output: {
        /** Articles belonging to the ticket. */
        articles: Array<{
          /**
           * The numeric Zammad resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The parent ticket ID. */
          ticket_id?: number;
          /** The article body. */
          body?: string;
          /** The article body content type. */
          content_type?: string;
          /** Whether the article is internal. */
          internal?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List tickets visible to the connected Zammad user. */
    "zammad.list_tickets": {
      input: {
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to return on this page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** Whether to expand named relations in the response. */
        expand?: boolean;
      };
      output: {
        /** Tickets returned by Zammad. */
        tickets: Array<{
          /**
           * The numeric Zammad resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The human-readable ticket number. */
          number?: string;
          /** The ticket title. */
          title?: string;
          /** The assigned group ID. */
          group_id?: number;
          /** The customer user ID. */
          customer_id?: number;
          /** The ticket state ID. */
          state_id?: number;
          /** The ticket priority ID. */
          priority_id?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Zammad tickets with the endpoint search syntax. */
    "zammad.search_tickets": {
      input: {
        /**
         * The Zammad ticket search query.
         * @minLength 1
         */
        query: string;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to return on this page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** Whether to expand named relations in the response. */
        expand?: boolean;
        /** The upstream ticket field used to sort results. */
        sortBy?: string;
        /** The result sort direction. */
        orderBy?: "asc" | "desc";
      };
      output: {
        /** Tickets matching the query. */
        tickets: Array<{
          /**
           * The numeric Zammad resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The human-readable ticket number. */
          number?: string;
          /** The ticket title. */
          title?: string;
          /** The assigned group ID. */
          group_id?: number;
          /** The customer user ID. */
          customer_id?: number;
          /** The ticket state ID. */
          state_id?: number;
          /** The ticket priority ID. */
          priority_id?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Zammad users by login, email, name, or endpoint search expression. */
    "zammad.search_users": {
      input: {
        /**
         * The Zammad user search query.
         * @minLength 1
         */
        query: string;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to return on this page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** Whether to expand named relations in the response. */
        expand?: boolean;
      };
      output: {
        /** Users matching the query. */
        users: Array<{
          /**
           * The numeric Zammad resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The user login. */
          login?: string;
          /** The user's first name. */
          firstname?: string;
          /** The user's last name. */
          lastname?: string;
          /** The user's email address. */
          email?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update documented mutable fields on a Zammad ticket. */
    "zammad.update_ticket": {
      input: {
        /**
         * The numeric Zammad resource ID.
         * @exclusiveMinimum 0
         */
        ticketId: number;
        /**
         * The replacement ticket title.
         * @minLength 1
         */
        title?: string;
        /**
         * The replacement group name.
         * @minLength 1
         */
        group?: string;
        /**
         * The replacement customer login or email address.
         * @minLength 1
         */
        customer?: string;
        /**
         * The replacement owner login or email address.
         * @minLength 1
         */
        owner?: string;
        /** The replacement priority name. */
        priority?: string;
        /** The replacement state name. */
        state?: string;
        /** The pending-until timestamp expected by Zammad. */
        pendingTime?: string;
      };
      output: {
        /** A Zammad ticket object. */
        ticket: {
          /**
           * The numeric Zammad resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The human-readable ticket number. */
          number?: string;
          /** The ticket title. */
          title?: string;
          /** The assigned group ID. */
          group_id?: number;
          /** The customer user ID. */
          customer_id?: number;
          /** The ticket state ID. */
          state_id?: number;
          /** The ticket priority ID. */
          priority_id?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
