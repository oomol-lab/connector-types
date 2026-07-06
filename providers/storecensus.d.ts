import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve StoreCensus ecommerce intelligence for a website domain or lead ID. */
    "storecensus.get_website": {
      input: {
        /**
         * The domain name or numeric StoreCensus lead ID to retrieve, such as example-store.com or 12345.
         * @minLength 1
         * @pattern \S
         */
        domain: string;
        /** StoreCensus response sections to include. Omit this field to request all sections. */
        sections?: Array<"basic_info" | "contact_info" | "location_info" | "social_media" | "ecommerce_info" | "financial_info" | "traffic_analytics" | "technical_info" | "apps_integrations" | "activity_signals" | "crm" | "data_metadata">;
      };
      output: {
        /** A StoreCensus ecommerce store record. */
        website: {
          /** Basic website and company information. */
          basic_info?: Record<string, unknown>;
          /** Store contact information. */
          contact_info?: Record<string, unknown>;
          /** Store location information. */
          location_info?: Record<string, unknown>;
          /** Store social media profile information. */
          social_media?: Record<string, unknown>;
          /** Ecommerce platform and catalog information. */
          ecommerce_info?: Record<string, unknown>;
          /** Estimated revenue and technology spend information. */
          financial_info?: Record<string, unknown>;
          /** Estimated traffic and audience analytics. */
          traffic_analytics?: Record<string, unknown>;
          /** Detected technology information. */
          technical_info?: Record<string, unknown>;
          /** Detected Shopify app integration information. */
          apps_integrations?: Record<string, unknown>;
          /** Recent activity and growth signals. */
          activity_signals?: Record<string, unknown>;
          /** StoreCensus CRM fields for the store. */
          crm?: Record<string, unknown>;
          /** StoreCensus data metadata for the store. */
          data_metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List StoreCensus Shopify app categories that have active apps. */
    "storecensus.list_app_categories": {
      input: Record<string, never>;
      output: {
        /** The app categories returned by StoreCensus. */
        categories: Array<{
          /** The StoreCensus category identifier. */
          category_id?: number;
          /** The category name. */
          name?: string;
          /** The URL-friendly category slug. */
          slug?: string;
          /** The number of active apps in this category. */
          app_count?: number;
          [key: string]: unknown;
        }>;
        /** The total number of categories returned by StoreCensus. */
        total: number;
      };
    };
    /** List or search StoreCensus Shopify apps with page pagination. */
    "storecensus.list_apps": {
      input: {
        /**
         * The one-indexed page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of apps to return. StoreCensus caps this at 500.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /**
         * The specific StoreCensus app ID to retrieve.
         * @minimum 1
         */
        app_id?: number;
        /**
         * The minimum app rating to return.
         * @minimum 0
         * @maximum 5
         */
        minRating?: number;
        /**
         * A text search applied to app name, description, or developer.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
        /**
         * The StoreCensus app category ID to filter by.
         * @minimum 1
         */
        categoryId?: number;
      };
      output: {
        /** The apps returned by StoreCensus. */
        apps: Array<{
          /** The StoreCensus app identifier. */
          app_id?: number;
          /** The app name. */
          name?: string;
          /** The URL-friendly Shopify app handle. */
          handle?: string;
          /** The app description. */
          description?: string;
          /** The app icon URL. */
          icon_url?: string;
          /** The average app rating from zero to five. */
          rating?: number;
          /** The app developer name. */
          developer?: string;
          /** Whether the app is active. */
          active?: boolean;
          /** The StoreCensus app check status. */
          check_status?: string;
          /** The last time StoreCensus updated this app record. */
          last_updated?: string;
          /** A StoreCensus Shopify app category. */
          main_category?: {
            /** The StoreCensus category identifier. */
            category_id?: number;
            /** The category name. */
            name?: string;
            /** The URL-friendly category slug. */
            slug?: string;
            /** The number of active apps in this category. */
            app_count?: number;
            [key: string]: unknown;
          };
          /** The categories associated with this app. */
          categories?: Array<{
            /** The StoreCensus category identifier. */
            category_id?: number;
            /** The category name. */
            name?: string;
            /** The URL-friendly category slug. */
            slug?: string;
            /** The number of active apps in this category. */
            app_count?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** StoreCensus pagination metadata. */
        pagination: {
          /** The one-indexed page number returned by StoreCensus. */
          page?: number;
          /** The page size returned by StoreCensus. */
          pageSize?: number;
          /** Whether StoreCensus has more results after this page. */
          hasMore?: boolean;
          /** The cursor for the next result page. */
          nextCursor?: string | null;
          /** The total number of matching records when StoreCensus returns it. */
          total?: number;
          /** The number of records returned in this response. */
          returned?: number;
          /** The total number of pages when StoreCensus returns it. */
          totalPages?: number;
          [key: string]: unknown;
        };
        /** The app filters applied by StoreCensus. */
        filters: Record<string, unknown>;
      };
    };
    /** Search StoreCensus ecommerce stores with filters and cursor pagination. */
    "storecensus.search_stores": {
      input: {
        /** StoreCensus store filters, such as country, vertical, apps, estimatedVisits, or CRM filters. */
        filters?: Record<string, unknown>;
        /** The StoreCensus sort configuration. */
        sort?: {
          /**
           * The StoreCensus column to sort by.
           * @minLength 1
           * @pattern \S
           */
          column: string;
          /** The sort direction. */
          direction?: "asc" | "desc";
        };
        /**
         * The number of stores to return. StoreCensus allows 50 to 500.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /**
         * The StoreCensus cursor returned by the previous page.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /** StoreCensus response sections to include. Omit this field to request all sections. */
        sections?: Array<"basic_info" | "contact_info" | "location_info" | "social_media" | "ecommerce_info" | "financial_info" | "traffic_analytics" | "technical_info" | "apps_integrations" | "activity_signals" | "crm" | "data_metadata">;
      };
      output: {
        /** The stores returned by StoreCensus. */
        stores: Array<{
          /** Basic website and company information. */
          basic_info?: Record<string, unknown>;
          /** Store contact information. */
          contact_info?: Record<string, unknown>;
          /** Store location information. */
          location_info?: Record<string, unknown>;
          /** Store social media profile information. */
          social_media?: Record<string, unknown>;
          /** Ecommerce platform and catalog information. */
          ecommerce_info?: Record<string, unknown>;
          /** Estimated revenue and technology spend information. */
          financial_info?: Record<string, unknown>;
          /** Estimated traffic and audience analytics. */
          traffic_analytics?: Record<string, unknown>;
          /** Detected technology information. */
          technical_info?: Record<string, unknown>;
          /** Detected Shopify app integration information. */
          apps_integrations?: Record<string, unknown>;
          /** Recent activity and growth signals. */
          activity_signals?: Record<string, unknown>;
          /** StoreCensus CRM fields for the store. */
          crm?: Record<string, unknown>;
          /** StoreCensus data metadata for the store. */
          data_metadata?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** StoreCensus pagination metadata. */
        pagination: {
          /** The one-indexed page number returned by StoreCensus. */
          page?: number;
          /** The page size returned by StoreCensus. */
          pageSize?: number;
          /** Whether StoreCensus has more results after this page. */
          hasMore?: boolean;
          /** The cursor for the next result page. */
          nextCursor?: string | null;
          /** The total number of matching records when StoreCensus returns it. */
          total?: number;
          /** The number of records returned in this response. */
          returned?: number;
          /** The total number of pages when StoreCensus returns it. */
          totalPages?: number;
          [key: string]: unknown;
        };
        /** The filters applied by StoreCensus. */
        filters: Record<string, unknown>;
        /** The sort applied by StoreCensus. */
        sort: Record<string, unknown>;
        /** The StoreCensus sections included in the response. */
        sections: Array<"basic_info" | "contact_info" | "location_info" | "social_media" | "ecommerce_info" | "financial_info" | "traffic_analytics" | "technical_info" | "apps_integrations" | "activity_signals" | "crm" | "data_metadata">;
      };
    };
  }
}
