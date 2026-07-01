import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Rebrandly branded short link in a workspace. */
    "rebrandly.create_link": {
      input: {
        /**
         * Workspace public ID used with the Rebrandly Workspace header.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * Target URL where the short link redirects.
         * @format uri
         */
        destination: string;
        /**
         * Public ID of the Rebrandly domain.
         * @minLength 1
         */
        domainId?: string;
        /**
         * Custom path component for the link.
         * @minLength 1
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        slashtag?: string;
        /**
         * Human-readable title for the link.
         * @minLength 1
         * @maxLength 255
         */
        title?: string;
        /**
         * Link description, when the workspace supports link notes.
         * @minLength 1
         */
        description?: string;
      };
      output: {
        /** Rebrandly branded short link. */
        link: {
          /** Link public ID. */
          id?: string;
          /** Human-readable title for the link. */
          title?: string;
          /** Optional description for the link. */
          description?: string;
          /** Custom path component for the link. */
          slashtag?: string;
          /**
           * Destination URL where the short link redirects.
           * @format uri
           */
          destination?: string;
          /** Short URL returned by Rebrandly. */
          shortUrl?: string;
          /** Public ID of the domain used by the link. */
          domainId?: string;
          /** Domain name used by the short link. */
          domainName?: string;
          /**
           * Total clicks recorded for the link.
           * @minimum 0
           */
          clicks?: number;
          /**
           * Timestamp when the link was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the link was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** Link status returned by Rebrandly. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Soft delete a Rebrandly branded short link. */
    "rebrandly.delete_link": {
      input: {
        /**
         * Public ID of the Rebrandly branded link.
         * @minLength 1
         */
        linkId: string;
        /**
         * Workspace public ID used with the Rebrandly Workspace header.
         * @minLength 1
         */
        workspaceId?: string;
      };
      output: {
        /** Rebrandly delete link response. */
        deleted: {
          /** Deleted link public ID. */
          id?: string;
          /** Status returned after the link is deleted. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the authenticated Rebrandly account details. */
    "rebrandly.get_account": {
      input: Record<string, never>;
      output: {
        /** Rebrandly account details. */
        account: {
          /** Account public ID. */
          id?: string;
          /**
           * Account email address.
           * @format email
           */
          email?: string;
          /** Full name of the account owner. */
          fullName?: string;
          /**
           * Avatar URL for the account owner.
           * @format uri
           */
          avatarUrl?: string;
          /**
           * Timestamp when the account was created.
           * @format date-time
           */
          createdAt?: string;
          /** Subscription details returned by Rebrandly. */
          subscription?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get details for a Rebrandly branded short link. */
    "rebrandly.get_link": {
      input: {
        /**
         * Public ID of the Rebrandly branded link.
         * @minLength 1
         */
        linkId: string;
        /**
         * Workspace public ID used with the Rebrandly Workspace header.
         * @minLength 1
         */
        workspaceId?: string;
      };
      output: {
        /** Rebrandly branded short link. */
        link: {
          /** Link public ID. */
          id?: string;
          /** Human-readable title for the link. */
          title?: string;
          /** Optional description for the link. */
          description?: string;
          /** Custom path component for the link. */
          slashtag?: string;
          /**
           * Destination URL where the short link redirects.
           * @format uri
           */
          destination?: string;
          /** Short URL returned by Rebrandly. */
          shortUrl?: string;
          /** Public ID of the domain used by the link. */
          domainId?: string;
          /** Domain name used by the short link. */
          domainName?: string;
          /**
           * Total clicks recorded for the link.
           * @minimum 0
           */
          clicks?: number;
          /**
           * Timestamp when the link was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the link was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** Link status returned by Rebrandly. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List branded domains available to a Rebrandly workspace. */
    "rebrandly.list_domains": {
      input: {
        /**
         * Workspace public ID used with the Rebrandly Workspace header.
         * @minLength 1
         */
        workspaceId?: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 25
         */
        limit?: number;
        /**
         * Field used to sort domains.
         * @minLength 1
         */
        orderBy?: string;
        /** Sort direction for the collection. */
        orderDir?: "asc" | "desc";
        /**
         * Cursor for pagination, usually the last item ID from the previous page.
         * @minLength 1
         */
        last?: string;
        /** Whether to return only active or inactive domains. */
        active?: boolean;
        /** Whether to return only verified or unverified domains. */
        verified?: boolean;
        /** Domain type filter. */
        type?: "user" | "service";
      };
      output: {
        /** Domains returned by Rebrandly. */
        domains: Array<{
          /** Domain public ID. */
          id?: string;
          /** Full domain name. */
          fullName?: string;
          /** Top-level domain segment. */
          topLevelDomain?: string;
          /** Domain type returned by Rebrandly. */
          type?: string;
          /** Domain status details returned by Rebrandly. */
          status?: Record<string, unknown>;
          /**
           * Timestamp when the domain was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the domain was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List branded short links in a Rebrandly workspace. */
    "rebrandly.list_links": {
      input: {
        /**
         * Workspace public ID used with the Rebrandly Workspace header.
         * @minLength 1
         */
        workspaceId?: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 25
         */
        limit?: number;
        /**
         * Field used to sort links.
         * @minLength 1
         */
        orderBy?: string;
        /** Sort direction for the collection. */
        orderDir?: "asc" | "desc";
        /**
         * Cursor for pagination, usually the last item ID from the previous page.
         * @minLength 1
         */
        last?: string;
        /**
         * Public ID of the Rebrandly domain.
         * @minLength 1
         */
        domainId?: string;
        /** Whether to filter links by favourite status. */
        favourite?: boolean;
        /**
         * Link status filter accepted by Rebrandly.
         * @minLength 1
         */
        status?: string;
      };
      output: {
        /** Links returned by Rebrandly. */
        links: Array<{
          /** Link public ID. */
          id?: string;
          /** Human-readable title for the link. */
          title?: string;
          /** Optional description for the link. */
          description?: string;
          /** Custom path component for the link. */
          slashtag?: string;
          /**
           * Destination URL where the short link redirects.
           * @format uri
           */
          destination?: string;
          /** Short URL returned by Rebrandly. */
          shortUrl?: string;
          /** Public ID of the domain used by the link. */
          domainId?: string;
          /** Domain name used by the short link. */
          domainName?: string;
          /**
           * Total clicks recorded for the link.
           * @minimum 0
           */
          clicks?: number;
          /**
           * Timestamp when the link was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the link was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** Link status returned by Rebrandly. */
          status?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update editable fields on a Rebrandly branded short link. */
    "rebrandly.update_link": {
      input: {
        /**
         * Public ID of the Rebrandly branded link.
         * @minLength 1
         */
        linkId: string;
        /**
         * Workspace public ID used with the Rebrandly Workspace header.
         * @minLength 1
         */
        workspaceId?: string;
        /**
         * Updated destination URL for the short link.
         * @format uri
         */
        destination?: string;
        /**
         * Updated custom path component for the link.
         * @minLength 1
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        slashtag?: string;
        /**
         * Updated human-readable title for the link.
         * @minLength 1
         * @maxLength 255
         */
        title?: string;
        /**
         * Updated link description.
         * @minLength 1
         */
        description?: string;
      };
      output: {
        /** Rebrandly branded short link. */
        link: {
          /** Link public ID. */
          id?: string;
          /** Human-readable title for the link. */
          title?: string;
          /** Optional description for the link. */
          description?: string;
          /** Custom path component for the link. */
          slashtag?: string;
          /**
           * Destination URL where the short link redirects.
           * @format uri
           */
          destination?: string;
          /** Short URL returned by Rebrandly. */
          shortUrl?: string;
          /** Public ID of the domain used by the link. */
          domainId?: string;
          /** Domain name used by the short link. */
          domainName?: string;
          /**
           * Total clicks recorded for the link.
           * @minimum 0
           */
          clicks?: number;
          /**
           * Timestamp when the link was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the link was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** Link status returned by Rebrandly. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
