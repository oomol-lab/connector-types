import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Store Leads details for one ecommerce app. */
    "store_leads.get_app": {
      input: {
        /**
         * The Store Leads app identifier, combining platform and token such as "shopify.marsello".
         * @minLength 1
         * @pattern \S
         */
        app_id: string;
        /**
         * A comma-separated list of Store Leads response fields to include.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** A Store Leads app object. */
        app: {
          /** The Store Leads app identifier. */
          id?: string;
          /** The platform-specific app token. */
          token?: string;
          /** The ecommerce platform for the app. */
          platform?: string;
          /** The app name. */
          name?: string;
          /** The number of active stores that have the app installed. */
          installs?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Store Leads details for one ecommerce domain name. */
    "store_leads.get_domain": {
      input: {
        /**
         * The public DNS domain or platform domain to retrieve, such as merchant.com.
         * @minLength 1
         * @pattern \S
         */
        domain: string;
        /** Whether Store Leads should automatically follow domain redirects. */
        follow_redirects?: boolean;
        /**
         * A comma-separated list of Store Leads response fields to include.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** A Store Leads domain object. */
        domain: {
          /** The public DNS domain name. */
          name?: string;
          /** The ecommerce platform detected for the domain. */
          platform?: string;
          /** The current Store Leads state for the domain. */
          state?: string;
          /** The merchant name when Store Leads has one. */
          merchant_name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Store Leads details for one detected technology. */
    "store_leads.get_technology": {
      input: {
        /**
         * The Store Leads technology name to retrieve.
         * @minLength 1
         * @pattern \S
         */
        technology: string;
        /**
         * A comma-separated list of Store Leads response fields to include.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** A Store Leads technology object. */
        technology: {
          /** The technology name. */
          name?: string;
          /** The technology description. */
          description?: string;
          /** The technology vendor URL. */
          vendor_url?: string;
          /** The technology icon URL. */
          icon_url?: string;
          /** The number of domains where Store Leads detected the technology. */
          installs?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Store Leads ecommerce apps with optional filters and page pagination. */
    "store_leads.list_apps": {
      input: {
        /**
         * The zero-based page of results to return.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of records to return in one page. Store Leads caps this at 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /**
         * A Store Leads sort expression. Prefix fields with a minus sign for descending order.
         * @minLength 1
         * @pattern \S
         */
        sort?: string;
        /**
         * A text query used to filter apps by name or description.
         * @minLength 1
         * @pattern \S
         */
        q?: string;
        /**
         * A comma-separated list of Store Leads response fields to include.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /** The ecommerce platform used to filter apps. */
        platform?: "custom" | "shopify" | "wix" | "woocommerce";
        /**
         * A comma-separated list of app categories.
         * @minLength 1
         * @pattern \S
         */
        categories?: string;
      };
      output: {
        /** The apps returned by Store Leads. */
        apps: Array<{
          /** The Store Leads app identifier. */
          id?: string;
          /** The platform-specific app token. */
          token?: string;
          /** The ecommerce platform for the app. */
          platform?: string;
          /** The app name. */
          name?: string;
          /** The number of active stores that have the app installed. */
          installs?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Store Leads domains with optional advanced search and cursor pagination. */
    "store_leads.list_domains": {
      input: {
        /**
         * The Store Leads cursor used to retrieve the next page.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * An advanced Store Leads domain search expression.
         * @minLength 1
         * @pattern \S
         */
        aq?: string;
        /**
         * A comma-separated list of Store Leads response fields to include.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The number of records to return in one page. Store Leads caps this at 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
      };
      output: {
        /** The domains returned by Store Leads. */
        domains: Array<{
          /** The public DNS domain name. */
          name?: string;
          /** The ecommerce platform detected for the domain. */
          platform?: string;
          /** The current Store Leads state for the domain. */
          state?: string;
          /** The merchant name when Store Leads has one. */
          merchant_name?: string;
          [key: string]: unknown;
        }>;
        /** The cursor for the next result page, or null when there are no more results. */
        next_cursor: string | null;
      };
    };
    /** List Store Leads technologies with optional search and page pagination. */
    "store_leads.list_technologies": {
      input: {
        /**
         * The zero-based page of results to return.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of records to return in one page. Store Leads caps this at 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /**
         * A Store Leads sort expression. Prefix fields with a minus sign for descending order.
         * @minLength 1
         * @pattern \S
         */
        sort?: string;
        /**
         * A text query used to filter technologies.
         * @minLength 1
         * @pattern \S
         */
        q?: string;
        /**
         * A comma-separated list of Store Leads response fields to include.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** The technologies returned by Store Leads. */
        technologies: Array<{
          /** The technology name. */
          name?: string;
          /** The technology description. */
          description?: string;
          /** The technology vendor URL. */
          vendor_url?: string;
          /** The technology icon URL. */
          icon_url?: string;
          /** The number of domains where Store Leads detected the technology. */
          installs?: number;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
