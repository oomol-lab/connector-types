import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Fathom event for a site. */
    "fathom.create_event": {
      input: {
        /**
         * The Fathom site ID used in the tracking code, such as CDBUGS.
         * @minLength 1
         */
        site_id: string;
        /**
         * The event display name, up to 255 characters.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
      };
      output: {
        /**
         * The Fathom event ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Fathom object type, usually event.
         * @minLength 1
         */
        object?: string;
        /**
         * The event display name.
         * @minLength 1
         */
        name?: string;
        /**
         * The Fathom site ID that owns this event.
         * @minLength 1
         */
        site_id?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Create a Fathom milestone for a site. */
    "fathom.create_milestone": {
      input: {
        /**
         * The Fathom site ID used in the tracking code, such as CDBUGS.
         * @minLength 1
         */
        site_id: string;
        /**
         * The milestone display name, up to 255 characters.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /**
         * The milestone date in YYYY-MM-DD format. It must be before today.
         * @format date
         */
        milestone_date: string;
      };
      output: {
        /**
         * The Fathom milestone ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Fathom object type, usually milestone.
         * @minLength 1
         */
        object?: string;
        /**
         * The milestone display name.
         * @minLength 1
         */
        name?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        milestone_date?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        created_at?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Create a Fathom site. */
    "fathom.create_site": {
      input: {
        /**
         * The website display name, up to 255 characters.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /** The dashboard sharing configuration for the site. */
        sharing?: "none" | "private" | "public";
        /**
         * The password required when sharing is set to private.
         * @minLength 1
         */
        share_password?: string;
        /**
         * The site's reporting timezone as a TZ database name.
         * @minLength 1
         */
        timezone?: string;
      };
      output: {
        /**
         * The Fathom site ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Fathom object type, usually site.
         * @minLength 1
         */
        object?: string;
        /**
         * The site display name.
         * @minLength 1
         */
        name?: string;
        /**
         * The site's dashboard sharing configuration.
         * @minLength 1
         */
        sharing?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        created_at?: string;
        /**
         * The site's reporting timezone as a TZ database name.
         * @minLength 1
         */
        timezone?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the Fathom account that owns the API key. */
    "fathom.get_account": {
      input: Record<string, never>;
      output: {
        /** The numeric Fathom account ID. */
        id?: number;
        /**
         * The Fathom object type, usually account.
         * @minLength 1
         */
        object?: string;
        /**
         * The account owner's display name.
         * @minLength 1
         */
        name?: string;
        /**
         * The account owner's email address.
         * @format email
         */
        email?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch the current visitor count and optional detailed breakdown for a Fathom site. */
    "fathom.get_current_visitors": {
      input: {
        /**
         * The Fathom site ID used in the tracking code, such as CDBUGS.
         * @minLength 1
         */
        site_id: string;
        /** Whether to include top content and referrer breakdowns. */
        detailed?: boolean;
      };
      output: {
        /** The number of current visitors on the site. */
        total?: number;
        /** The top content rows when detailed mode is enabled. */
        content?: Array<{
          /**
           * The content pathname.
           * @minLength 1
           */
          pathname?: string;
          /**
           * The content hostname.
           * @minLength 1
           */
          hostname?: string;
          /** The number of current visitors for this content row. */
          total?: number;
          [key: string]: unknown;
        }>;
        /** The top referrer rows when detailed mode is enabled. */
        referrers?: Array<{
          /**
           * The referrer hostname.
           * @minLength 1
           */
          referrer_hostname?: string;
          /**
           * The referrer pathname.
           * @minLength 1
           */
          referrer_pathname?: string;
          /** The number of current visitors for this referrer row. */
          total?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a single Fathom event by site ID and event ID. */
    "fathom.get_event": {
      input: {
        /**
         * The Fathom site ID used in the tracking code, such as CDBUGS.
         * @minLength 1
         */
        site_id: string;
        /**
         * The Fathom event ID, such as signed-up-to-newsletter.
         * @minLength 1
         */
        event_id: string;
      };
      output: {
        /**
         * The Fathom event ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Fathom object type, usually event.
         * @minLength 1
         */
        object?: string;
        /**
         * The event display name.
         * @minLength 1
         */
        name?: string;
        /**
         * The Fathom site ID that owns this event.
         * @minLength 1
         */
        site_id?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a single Fathom milestone by site ID and milestone ID. */
    "fathom.get_milestone": {
      input: {
        /**
         * The Fathom site ID used in the tracking code, such as CDBUGS.
         * @minLength 1
         */
        site_id: string;
        /**
         * The Fathom milestone ID.
         * @minLength 1
         */
        milestone_id: string;
      };
      output: {
        /**
         * The Fathom milestone ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Fathom object type, usually milestone.
         * @minLength 1
         */
        object?: string;
        /**
         * The milestone display name.
         * @minLength 1
         */
        name?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        milestone_date?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        created_at?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a single Fathom site by site ID. */
    "fathom.get_site": {
      input: {
        /**
         * The Fathom site ID used in the tracking code, such as CDBUGS.
         * @minLength 1
         */
        site_id: string;
      };
      output: {
        /**
         * The Fathom site ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Fathom object type, usually site.
         * @minLength 1
         */
        object?: string;
        /**
         * The site display name.
         * @minLength 1
         */
        name?: string;
        /**
         * The site's dashboard sharing configuration.
         * @minLength 1
         */
        sharing?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        created_at?: string;
        /**
         * The site's reporting timezone as a TZ database name.
         * @minLength 1
         */
        timezone?: string;
        [key: string]: unknown;
      };
    };
    /** List events for a Fathom site. */
    "fathom.list_events": {
      input: {
        /**
         * The Fathom site ID used in the tracking code, such as CDBUGS.
         * @minLength 1
         */
        site_id: string;
        /**
         * The maximum number of objects to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * A cursor object ID used to page forward chronologically.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * A cursor object ID used to page backward in reverse chronology.
         * @minLength 1
         */
        ending_before?: string;
      };
      output: {
        /**
         * The Fathom collection object type, usually list.
         * @minLength 1
         */
        object: string;
        /**
         * The Fathom API path used for this list response.
         * @minLength 1
         */
        url: string;
        /** Whether more results are available after this page. */
        has_more: boolean;
        /** The Fathom events returned for this page. */
        data: Array<{
          /**
           * The Fathom event ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Fathom object type, usually event.
           * @minLength 1
           */
          object?: string;
          /**
           * The event display name.
           * @minLength 1
           */
          name?: string;
          /**
           * The Fathom site ID that owns this event.
           * @minLength 1
           */
          site_id?: string;
          /**
           * A Fathom timestamp string, such as 2024-01-15 00:00:00.
           * @minLength 1
           */
          created_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List milestones for a Fathom site. */
    "fathom.list_milestones": {
      input: {
        /**
         * The Fathom site ID used in the tracking code, such as CDBUGS.
         * @minLength 1
         */
        site_id: string;
        /**
         * The maximum number of objects to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * A cursor object ID used to page forward chronologically.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * A cursor object ID used to page backward in reverse chronology.
         * @minLength 1
         */
        ending_before?: string;
      };
      output: {
        /**
         * The Fathom collection object type, usually list.
         * @minLength 1
         */
        object: string;
        /**
         * The Fathom API path used for this list response.
         * @minLength 1
         */
        url: string;
        /** Whether more results are available after this page. */
        has_more: boolean;
        /** The Fathom milestones returned for this page. */
        data: Array<{
          /**
           * The Fathom milestone ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Fathom object type, usually milestone.
           * @minLength 1
           */
          object?: string;
          /**
           * The milestone display name.
           * @minLength 1
           */
          name?: string;
          /**
           * A Fathom timestamp string, such as 2024-01-15 00:00:00.
           * @minLength 1
           */
          milestone_date?: string;
          /**
           * A Fathom timestamp string, such as 2024-01-15 00:00:00.
           * @minLength 1
           */
          created_at?: string;
          /**
           * A Fathom timestamp string, such as 2024-01-15 00:00:00.
           * @minLength 1
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Fathom sites available to the API key. */
    "fathom.list_sites": {
      input: {
        /**
         * The maximum number of objects to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * A cursor object ID used to page forward chronologically.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * A cursor object ID used to page backward in reverse chronology.
         * @minLength 1
         */
        ending_before?: string;
      };
      output: {
        /**
         * The Fathom collection object type, usually list.
         * @minLength 1
         */
        object: string;
        /**
         * The Fathom API path used for this list response.
         * @minLength 1
         */
        url: string;
        /** Whether more results are available after this page. */
        has_more: boolean;
        /** The Fathom sites returned for this page. */
        data: Array<{
          /**
           * The Fathom site ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Fathom object type, usually site.
           * @minLength 1
           */
          object?: string;
          /**
           * The site display name.
           * @minLength 1
           */
          name?: string;
          /**
           * The site's dashboard sharing configuration.
           * @minLength 1
           */
          sharing?: string;
          /**
           * A Fathom timestamp string, such as 2024-01-15 00:00:00.
           * @minLength 1
           */
          created_at?: string;
          /**
           * The site's reporting timezone as a TZ database name.
           * @minLength 1
           */
          timezone?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Generate a Fathom analytics aggregation report. */
    "fathom.run_aggregation": {
      input: {
        /** The Fathom entity to report on. */
        entity: "pageview" | "event";
        /**
         * The site ID for pageview aggregations.
         * @minLength 1
         */
        entity_id?: string;
        /**
         * The Fathom site ID used in the tracking code, such as CDBUGS.
         * @minLength 1
         */
        site_id?: string;
        /**
         * The event name for event aggregations.
         * @minLength 1
         */
        entity_name?: string;
        /**
         * The SUM aggregate fields to include in the report.
         * @minItems 1
         */
        aggregates: Array<"visits" | "uniques" | "pageviews" | "avg_duration" | "bounce_rate" | "conversions" | "unique_conversions" | "value">;
        /** The date grouping granularity for the report. */
        date_grouping?: "hour" | "day" | "month" | "year";
        /**
         * The Fathom fields to group report rows by.
         * @minItems 1
         */
        field_grouping?: Array<"hostname" | "pathname" | "referrer_hostname" | "referrer_pathname" | "referrer_source" | "browser" | "country_code" | "city" | "region" | "device_type" | "operating_system" | "utm_campaign" | "utm_content" | "utm_medium" | "utm_source" | "utm_term" | "keyword" | "q" | "ref" | "s">;
        /**
         * The sort expression in field:asc or field:desc form.
         * @minLength 1
         */
        sort_by?: string;
        /**
         * Deprecated Fathom timezone override as a TZ database name.
         * @minLength 1
         */
        timezone?: string;
        /**
         * The report start timestamp, such as 2022-04-01 15:31:00.
         * @minLength 1
         */
        date_from?: string;
        /**
         * The report end timestamp, such as 2022-04-30 23:59:59.
         * @minLength 1
         */
        date_to?: string;
        /**
         * The maximum number of aggregation rows to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Structured Fathom filters to JSON-encode for the filters query parameter.
         * @minItems 1
         */
        filters?: Array<{
          /**
           * The Fathom field to filter on, such as pathname or device_type.
           * @minLength 1
           */
          property: string;
          /** The filter operator to apply. */
          operator: "is" | "is not" | "is like" | "is not like" | "matching" | "not matching";
          /**
           * The value to compare against the selected property.
           * @minLength 1
           */
          value: string;
        }>;
      };
      output: Array<Record<string, unknown>>;
    };
    /** Update a Fathom event. */
    "fathom.update_event": {
      input: {
        /**
         * The Fathom site ID used in the tracking code, such as CDBUGS.
         * @minLength 1
         */
        site_id: string;
        /**
         * The Fathom event ID, such as signed-up-to-newsletter.
         * @minLength 1
         */
        event_id: string;
        /**
         * The event display name, up to 255 characters.
         * @minLength 1
         * @maxLength 255
         */
        name?: string;
      };
      output: {
        /**
         * The Fathom event ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Fathom object type, usually event.
         * @minLength 1
         */
        object?: string;
        /**
         * The event display name.
         * @minLength 1
         */
        name?: string;
        /**
         * The Fathom site ID that owns this event.
         * @minLength 1
         */
        site_id?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Update a Fathom milestone. */
    "fathom.update_milestone": {
      input: {
        /**
         * The Fathom site ID used in the tracking code, such as CDBUGS.
         * @minLength 1
         */
        site_id: string;
        /**
         * The Fathom milestone ID.
         * @minLength 1
         */
        milestone_id: string;
        /**
         * The milestone display name, up to 255 characters.
         * @minLength 1
         * @maxLength 255
         */
        name?: string;
        /**
         * The milestone date in YYYY-MM-DD format. It must be before today.
         * @format date
         */
        milestone_date?: string;
      };
      output: {
        /**
         * The Fathom milestone ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Fathom object type, usually milestone.
         * @minLength 1
         */
        object?: string;
        /**
         * The milestone display name.
         * @minLength 1
         */
        name?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        milestone_date?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        created_at?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Update a Fathom site. */
    "fathom.update_site": {
      input: {
        /**
         * The Fathom site ID used in the tracking code, such as CDBUGS.
         * @minLength 1
         */
        site_id: string;
        /**
         * The website display name, up to 255 characters.
         * @minLength 1
         * @maxLength 255
         */
        name?: string;
        /** The dashboard sharing configuration for the site. */
        sharing?: "none" | "private" | "public";
        /**
         * The password required when sharing is set to private.
         * @minLength 1
         */
        share_password?: string;
        /**
         * The site's reporting timezone as a TZ database name.
         * @minLength 1
         */
        timezone?: string;
      };
      output: {
        /**
         * The Fathom site ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Fathom object type, usually site.
         * @minLength 1
         */
        object?: string;
        /**
         * The site display name.
         * @minLength 1
         */
        name?: string;
        /**
         * The site's dashboard sharing configuration.
         * @minLength 1
         */
        sharing?: string;
        /**
         * A Fathom timestamp string, such as 2024-01-15 00:00:00.
         * @minLength 1
         */
        created_at?: string;
        /**
         * The site's reporting timezone as a TZ database name.
         * @minLength 1
         */
        timezone?: string;
        [key: string]: unknown;
      };
    };
  }
}
